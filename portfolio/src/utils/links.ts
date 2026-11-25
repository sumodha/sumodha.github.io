export function getLinkKind(href: string): 'route' | 'external' | 'native' {
  if (/^(https?:)?\/\//i.test(href)) return 'external';
  // Public documents must be opened by the browser, not the story router.
  if (href.startsWith('/') && !/\/[^/?#]*\.[^/?#]+(?:[?#]|$)/.test(href)) return 'route';
  return 'native';
}
