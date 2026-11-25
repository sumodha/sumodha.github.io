import { useEffect } from 'react';

export function useDocumentTitle(title?: string): void {
  useEffect(() => {
    if (title !== undefined) document.title = title;
  }, [title]);
}
