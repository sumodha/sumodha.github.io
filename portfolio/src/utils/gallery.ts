import type { Vector } from '../types/media';

export function wrapIndex(current: number, step: number, count: number): number {
  return count > 0 ? ((current + step) % count + count) % count : 0;
}

export function swipeDirection(x: number, y: number, width: number, height: number): Vector | null {
  const threshold = Math.max(40, Math.min(90, Math.min(width, height) * 0.18));
  const distance = Math.hypot(x, y);
  return distance >= threshold ? { x: x / distance, y: y / distance } : null;
}
