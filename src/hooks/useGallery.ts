import { useState, useCallback } from 'react';

export function useGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const open = useCallback((src: string) => {
    setActiveImage(src);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setActiveImage(null);
    document.body.style.overflow = '';
  }, []);

  return { activeImage, open, close };
}
