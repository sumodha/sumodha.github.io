import { useRef, useState } from 'react';
import type { KeyboardEvent, UIEvent } from 'react';
import type { ImageAsset } from '../../types/media';
import { wrapIndex } from '../../utils/gallery';
import { getScrollBehavior } from '../../utils/motion';
import CarouselControls from './CarouselControls';
import type { CarouselNavigation } from './CarouselControls';
import './ImageCarousel.css';

const DESIGN_UNITS_PER_REM = 16;

type ImageCarouselProps = {
  images: readonly ImageAsset[];
  /** Preserve existing MDX dimensions while scaling the gallery with root text. */
  height?: number;
  width?: number;
  label?: string;
  navigation?: CarouselNavigation;
};

export function ImageCarousel({ images, height = 550, width = 400, label = 'Photo gallery', navigation = 'overlay' }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const activeIndex = wrapIndex(index, 0, images.length);

  if (!images.length) return null;

  function goTo(requestedIndex: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({
      left: wrapIndex(requestedIndex, 0, images.length) * track.clientWidth,
      behavior: getScrollBehavior(),
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowLeft': nextIndex = activeIndex - 1; break;
      case 'ArrowRight': nextIndex = activeIndex + 1; break;
      case 'Home': nextIndex = 0; break;
      case 'End': nextIndex = images.length - 1; break;
      default: return;
    }
    event.preventDefault();
    goTo(nextIndex);
  }

  function handleScroll(event: UIEvent<HTMLUListElement>) {
    const track = event.currentTarget;
    if (track.clientWidth) {
      const closest = Math.round(track.scrollLeft / track.clientWidth);
      setIndex(Math.max(0, Math.min(images.length - 1, closest)));
    }
  }

  const controls = <CarouselControls count={images.length} activeIndex={activeIndex} navigation={navigation} onSelect={goTo} />;

  return (
    <figure
      className={`image-carousel image-carousel--${navigation}`}
      style={{ width: `${width / DESIGN_UNITS_PER_REM}rem` }}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <section className="image-carousel-viewport" style={{ aspectRatio: `${width} / ${height}` }}>
        <ul
          className="image-carousel-track"
          role="list"
          ref={trackRef}
          tabIndex={images.length > 1 ? 0 : undefined}
          aria-label="Photos; use left and right arrow keys to browse"
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
        >
          {images.map((photo, photoIndex) => (
            <li className="image-carousel-slide" key={`${photo.src}-${photoIndex}`} aria-label={`${photoIndex + 1} of ${images.length}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" draggable={false} />
            </li>
          ))}
        </ul>
        {navigation === 'overlay' && controls}
      </section>
      {navigation === 'progress' && (
        <figcaption className="image-carousel-caption">
          <p className="image-carousel-caption-text">{images[activeIndex]?.alt}</p>
          {controls}
        </figcaption>
      )}
    </figure>
  );
}
