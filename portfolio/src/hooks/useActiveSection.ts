import { useEffect, useState } from 'react';
import { navigation } from '../data/site';
import type { SectionId } from '../data/site';

export function useActiveSection(enabled: boolean): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let observer: IntersectionObserver;

    function observeSections() {
      observer?.disconnect();
      const visible = new Set<SectionId>();
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          const section = navigation.find(item => item.id === entry.target.id);
          if (!section) continue;
          if (entry.isIntersecting) visible.add(section.id);
          else visible.delete(section.id);
        }
        setActive(navigation.find(section => visible.has(section.id))?.id ?? null);
      }, {
        // Pixel margins here track viewport height; percentage margins use width.
        rootMargin: `-${window.innerHeight * 0.1}px 0px -${window.innerHeight * 0.6}px 0px`,
      });

      for (const { id } of navigation) {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    }

    observeSections();
    window.addEventListener('resize', observeSections);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', observeSections);
    };
  }, [enabled]);

  return enabled ? active : null;
}
