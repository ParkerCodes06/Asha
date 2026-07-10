import { useRef, useState } from 'react';
import { useSwipe } from '../hooks/useSwipe';

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const [pullOffset, setPullOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const swipeHandlers = useSwipe({
    onSwipeLeft: () => onNext(),
    onSwipeRight: () => onPrev(),
    threshold: 40,
  });

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startY = (e.target as HTMLElement).dataset.startY;
    if (startY) {
      const dy = touch.clientY - parseFloat(startY);
      if (dy > 0) setPullOffset(Math.min(dy, 150));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    (e.target as HTMLElement).dataset.startY = String(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (pullOffset > 100) {
      onClose();
    }
    setPullOffset(0);
  };

  if (currentIndex === null) return null;

  const opacity = Math.max(1 - pullOffset / 300, 0.3);
  const scale = Math.max(1 - pullOffset / 600, 0.85);

  return (
    <div
      ref={containerRef}
      onClick={onClose}
      className="lightbox-container"
      style={{
        position: 'fixed',
        inset: 0,
        background: `rgba(0,0,0,${0.92 * opacity})`,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.25s ease-out',
      }}
    >
      {/* Pull indicator */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: pullOffset > 20 ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      >
        <div className="pull-indicator" />
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="btn-ripple"
        style={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          fontSize: 22,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
        aria-label="Previous"
      >
        &#8249;
      </button>

      {/* Image with swipe */}
      <div
        {...swipeHandlers}
        onTouchStart={(e) => { swipeHandlers.onTouchStart(e); handleTouchStart(e); }}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => { swipeHandlers.onTouchEnd(); handleTouchEnd(); }}
        style={{
          maxWidth: '95%',
          maxHeight: '80vh',
          transform: `scale(${scale}) translateY(${pullOffset * 0.3}px)`,
          transition: pullOffset > 0 ? 'none' : 'transform 0.3s ease',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="lightbox-image"
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            borderRadius: 12,
            objectFit: 'contain',
            touchAction: 'pan-y',
          }}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="btn-ripple"
        style={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          fontSize: 22,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
        aria-label="Next"
      >
        &#8250;
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="btn-ripple"
        style={{
          position: 'absolute',
          top: 14,
          right: 14,
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          fontSize: 20,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
        aria-label="Close"
      >
        &#10005;
      </button>

      {/* Counter dots */}
      <div style={{
        position: 'absolute',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '8px 16px',
        borderRadius: 20,
      }}>
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === currentIndex ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === currentIndex ? '#C8962E' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
