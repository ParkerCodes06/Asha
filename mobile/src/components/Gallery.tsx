import { useState } from 'react';
import { galleryImages } from '../data/siteData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Skeleton from './Skeleton';

interface GalleryProps {
  onImageClick: (index: number) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <p
            className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Moments captured
          </p>
          <h2
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Our <span className="highlight gradient-text">Gallery</span>
          </h2>
          <div
            className={`divider ${isVisible ? 'animate-scale-in delay-2' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 10,
        }}>
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={() => onImageClick(i)} parentVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ img, index, onClick, parentVisible }: { img: string; index: number; onClick: () => void; parentVisible: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`card-tap ${parentVisible ? 'animate-scale-in' : ''}`}
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '1',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        opacity: parentVisible ? undefined : 0,
        transitionDelay: `${index * 60}ms`,
      }}
    >
      {!loaded && <Skeleton type="image" />}
      <img
        src={img}
        alt={`Gallery ${index + 1}`}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
          display: loaded ? 'block' : 'none',
        }}
      />
    </div>
  );
}
