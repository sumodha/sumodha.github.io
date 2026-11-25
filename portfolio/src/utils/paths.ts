export const CARD_ROUTE = '/portfolio/:slug';

export function cardPath(slug: string): string {
  return `/portfolio/${encodeURIComponent(slug)}`;
}
