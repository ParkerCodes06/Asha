import { useState } from 'react';
import { galleryImages } from '../data/siteData';

export function useGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const prev = () => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null
    );
  };

  const next = () => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryImages.length : null
    );
  };

  return { lightboxIndex, open, close, prev, next };
}
