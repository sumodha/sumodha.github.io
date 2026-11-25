import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getScrollBehavior } from '../../utils/motion';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Let the destination section mount before following an in-page link.
    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: getScrollBehavior(),
        block: 'start',
      });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
