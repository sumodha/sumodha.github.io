import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent, PointerEvent } from 'react';
import type { ImageAsset, Vector } from '../../types/media';
import type { VariableStyle } from '../../types/styles';
import { prefersReducedMotion } from '../../utils/motion';
import { wrapIndex, swipeDirection } from '../../utils/gallery';
import './PhotoStack.css';

const INITIAL_OFFSET = { x: 0, y: 0, angle: 0 };

type PhotoStackProps = { images: readonly ImageAsset[]; label: string };

export default function PhotoStack({ images, label }: PhotoStackProps) {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(INITIAL_OFFSET);
  const [dragging, setDragging] = useState(false);
  const [exitVector, setExitVector] = useState<Vector | null>(null);
  const stageRef = useRef<HTMLButtonElement>(null);
  const gesture = useRef<{ pointerId: number; x: number; y: number; maxDistance: number } | null>(null);
  const suppressClick = useRef(false);
  const tooltipId = useId();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const multiple = images.length > 1;
  const busy = exitVector !== null;

  useEffect(() => () => {
    if (timer.current !== null) clearTimeout(timer.current);
  }, []);

  function releaseDrag() {
    const pointerId = gesture.current?.pointerId;
    gesture.current = null;
    if (pointerId !== undefined && stageRef.current?.hasPointerCapture(pointerId)) {
      stageRef.current.releasePointerCapture(pointerId);
    }
    setDragging(false);
  }

  function advance(step: -1 | 1, direction: Vector = { x: -step, y: 0 }) {
    if (!multiple || busy) return;
    if (gesture.current) suppressClick.current = true;
    releaseDrag();
    const commit = () => {
      setActive(index => wrapIndex(index, step, images.length));
      setOffset(INITIAL_OFFSET);
      setExitVector(null);
      timer.current = null;
    };
    if (prefersReducedMotion()) {
      commit();
    } else {
      setExitVector(direction);
      timer.current = setTimeout(commit, 240);
    }
  }

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (!multiple || busy || !event.isPrimary || event.button !== 0) return;
    suppressClick.current = false;
    gesture.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, maxDistance: 0 };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.focus({ preventScroll: true });
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement>) {
    const start = gesture.current;
    if (!start || start.pointerId !== event.pointerId) return;
    const x = event.clientX - start.x;
    const y = event.clientY - start.y;
    start.maxDistance = Math.max(start.maxDistance, Math.hypot(x, y));
    // Pointer coordinates are CSS pixels; normalize offsets to the photo's size.
    setOffset({
      x: x / Math.max(event.currentTarget.clientWidth, 1) * 100,
      y: y / Math.max(event.currentTarget.clientHeight, 1) * 100,
      angle: x / 24 + y / 48,
    });
  }

  function endDrag(event: PointerEvent<HTMLButtonElement>) {
    const start = gesture.current;
    if (!start || start.pointerId !== event.pointerId) return;
    const x = event.clientX - start.x;
    const y = event.clientY - start.y;
    suppressClick.current = Math.max(start.maxDistance, Math.hypot(x, y)) > 6;
    const direction = swipeDirection(x, y, event.currentTarget.clientWidth, event.currentTarget.clientHeight);
    releaseDrag();
    if (direction) advance(1, direction);
    else setOffset(INITIAL_OFFSET);
  }

  function cancelDrag() {
    suppressClick.current = true;
    releaseDrag();
    setOffset(INITIAL_OFFSET);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (suppressClick.current) {
      event.preventDefault();
      suppressClick.current = false;
      return;
    }
    advance(1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      advance(1);
    } else if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      advance(event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1);
    } else if (event.key === 'Escape' && gesture.current) {
      event.stopPropagation();
      cancelDrag();
    }
  }

  const activeImage = images[wrapIndex(active, 0, images.length)];
  if (!activeImage) return null;
  const visible = Array.from({ length: Math.min(3, images.length) }, (_, depth) => ({
    image: images[wrapIndex(active, depth, images.length)] ?? activeImage,
    imageIndex: wrapIndex(active, depth, images.length),
    depth,
  })).reverse();
  const style: VariableStyle = {
    '--drag-x': `${offset.x}%`,
    '--drag-y': `${offset.y}%`,
    '--drag-angle': `${offset.angle}deg`,
    '--exit-x': `${(exitVector?.x ?? 0) * 130}%`,
    '--exit-y': `${(exitVector?.y ?? 0) * 130}%`,
    '--exit-angle': `${(exitVector?.x ?? 0) * 14 + (exitVector?.y ?? 0) * 4}deg`,
  };
  const stageClass = [
    'photo-stack-stage',
    multiple && 'photo-stack-stage--draggable',
    dragging && 'photo-stack-stage--dragging',
    busy && 'photo-stack-stage--exiting',
  ].filter(Boolean).join(' ');

  return (
    <figure className="project-photo-stack" role="group" aria-roledescription="carousel" aria-label={`${label} photos`}>
      <button
        type="button"
        className={stageClass}
        ref={stageRef}
        aria-label={`${activeImage.alt}${multiple ? '. next photo: click or drag in any direction. arrow keys also change photos.' : ''}`}
        aria-disabled={!multiple}
        aria-describedby={multiple ? tooltipId : undefined}
        style={style}
        onClick={handleClick}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={cancelDrag}
        onLostPointerCapture={() => { if (gesture.current) cancelDrag(); }}
        onKeyDown={handleKeyDown}
      >
        {visible.map(({ image, imageIndex, depth }) => (
          <span className={`photo-stack-card ${depth === 0 ? 'photo-stack-card--front' : ''}`} data-depth={depth} key={imageIndex} aria-hidden={depth !== 0} style={{ zIndex: 3 - depth }}>
            <img src={image.src} alt={depth === 0 ? image.alt : ''} draggable={false} loading="lazy" />
            <span className="photo-stack-caption">{image.alt}</span>
          </span>
        ))}
        {multiple && <span className="photo-stack-tooltip" id={tooltipId} role="tooltip">drag me</span>}
      </button>
      <figcaption className="sr-only" role="status" aria-live="polite" aria-atomic="true">{activeImage.alt}</figcaption>
    </figure>
  );
}
