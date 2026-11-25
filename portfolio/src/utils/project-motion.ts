import { flushSync } from 'react-dom';
import { prefersReducedMotion } from './motion';

let activeTransition: ViewTransition | undefined;
const layoutDimensions = ['x', 'y', 'width', 'height'] as const;

type TransitionOptions = { anchor?: HTMLElement | null };

// Capture both layouts so opening, closing, and moving neighboring cards animate
// together. Older browsers use the same before/after geometry via Web Animations.
export function animateProjectChange(update: () => void, options: TransitionOptions = {}): void {
  const anchor = options.anchor;
  const anchorTop = anchor?.isConnected ? anchor.getBoundingClientRect().top : undefined;

  function commit() {
    if (!anchor || anchorTop === undefined) {
      flushSync(update);
      return;
    }

    // Pin the list toggle to its current viewport position as rows disappear.
    // Disable native scroll anchoring for this layout pass to avoid a second jump.
    const root = document.documentElement;
    const previousAnchoring = root.style.overflowAnchor;
    root.style.overflowAnchor = 'none';
    try {
      flushSync(update);
      if (anchor.isConnected) {
        const distance = anchor.getBoundingClientRect().top - anchorTop;
        if (Math.abs(distance) > 0.5) window.scrollBy({ top: distance, behavior: 'instant' });
      }
    } finally {
      requestAnimationFrame(() => {
        if (root.style.overflowAnchor === 'none') root.style.overflowAnchor = previousAnchoring;
      });
    }
  }
  if (prefersReducedMotion()) {
    commit();
    return;
  }

  if (typeof document.startViewTransition === 'function') {
    activeTransition?.skipTransition();
    const transition = document.startViewTransition(commit);
    activeTransition = transition;
    const clear = () => {
      if (activeTransition === transition) activeTransition = undefined;
    };
    void transition.finished.then(clear, clear);
    return;
  }

  const selector = '.project-card, .projects-footer, .miscellany-section, .footer';
  const before = new Map<Element, DOMRect>();
  document.querySelectorAll<HTMLElement>(selector).forEach(element => {
    before.set(element, element.getBoundingClientRect());
    element.getAnimations().forEach(animation => animation.cancel());
  });

  commit();

  document.querySelectorAll<HTMLElement>(selector).forEach(element => {
    const previous = before.get(element);
    const next = element.getBoundingClientRect();
    if (!next.width || !next.height) return;
    if (previous && layoutDimensions.every(key => Math.abs(previous[key] - next[key]) < 1)) return;
    element.animate([
      {
        transform: previous
          ? `translate(${(previous.x - next.x) / next.width * 100}%, ${(previous.y - next.y) / next.height * 100}%) scale(${previous.width / next.width}, ${previous.height / next.height})`
          : 'translateY(0.625rem)',
        transformOrigin: 'top left',
        opacity: previous ? 1 : 0,
      },
      { transform: 'none', transformOrigin: 'top left', opacity: 1 },
    ], { duration: 340, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
  });
}
