import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Skeleton from './Skeleton';

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef} style={{ padding: '24px 0 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <p
            className={isVisible ? 'animate-fade-in-up delay-0' : ''}
            style={{
              fontFamily: "'Gloria Hallelujah', cursive",
              fontSize: 15,
              color: '#C8962E',
              marginBottom: 4,
              opacity: isVisible ? undefined : 0,
            }}
          >
            Adding Joy to Everyday
          </p>
          <h1
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 36,
              color: '#C8962E',
              lineHeight: 1.1,
              opacity: isVisible ? undefined : 0,
            }}
          >
            Professional
          </h1>
          <p
            className={isVisible ? 'animate-fade-in-up delay-2' : ''}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: '#2D3047',
              lineHeight: 1.6,
              marginTop: 16,
              padding: '0 8px',
              opacity: isVisible ? undefined : 0,
            }}
          >
            Pulset Kids Academy is a Baby Care Center which its soul purpose is to instill
            life-long values that nurture humanity and give shape to a better world.
          </p>
          <div
            className={isVisible ? 'animate-fade-in-up delay-3' : ''}
            style={{ marginTop: 24, opacity: isVisible ? undefined : 0 }}
          >
            <Link
              to="/about"
              className="btn-primary btn-ripple"
              style={{ textDecoration: 'none', maxWidth: 280, margin: '0 auto' }}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div
          className={isVisible ? 'animate-fade-in-up delay-4' : ''}
          style={{ textAlign: 'center', opacity: isVisible ? undefined : 0 }}
        >
          {!imgLoaded && <Skeleton type="image" />}
          <img
            src="/images/hero.png"
            alt="Kids playing"
            onLoad={() => setImgLoaded(true)}
            style={{
              width: '100%',
              maxWidth: 400,
              borderRadius: 20,
              margin: '0 auto',
              display: imgLoaded ? 'block' : 'none',
              boxShadow: '0 8px 32px rgba(200,150,46,0.15)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
