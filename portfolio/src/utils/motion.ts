export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getScrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? 'instant' : 'smooth';
}

export function scrollToPageTop(): void {
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}
