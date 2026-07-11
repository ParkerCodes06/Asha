import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Skeleton from './Skeleton';

function LetterByLetter({ text, className }: { text: string; className?: string }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span style={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={className}
          style={{
            display: 'inline-block',
            opacity: revealed ? 1 : 0,
            animation: revealed ? `letterReveal 0.5s ease-out ${i * 80}ms forwards` : 'none',
            transformOrigin: 'bottom center',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '24px 0 0',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(200,150,46,0.03) 0%, rgba(255,255,255,0) 100%)',
      }}
    >
      {/* Floating decorative shapes */}
      <div
        className="float-shape float-shape-1"
        style={{
          top: 20,
          right: 10,
          width: 60,
          height: 60,
          opacity: 0.08,
        }}
      >
        <svg viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="30" fill="#C8962E" />
          <circle cx="30" cy="30" r="20" fill="none" stroke="#C8962E" strokeWidth="2" />
        </svg>
      </div>

      <div
        className="float-shape float-shape-2"
        style={{
          top: 80,
          left: 5,
          width: 40,
          height: 40,
          opacity: 0.06,
        }}
      >
        <svg viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 38,38 2,38" fill="#4CAF50" />
        </svg>
      </div>

      <div
        className="float-shape float-shape-3"
        style={{
          bottom: 30,
          right: 20,
          width: 50,
          height: 50,
          opacity: 0.07,
        }}
      >
        <svg viewBox="0 0 50 50" fill="none">
          <rect x="5" y="5" width="40" height="40" rx="8" fill="#2196F3" />
        </svg>
      </div>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 24, position: 'relative', zIndex: 1 }}>
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
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 36,
              color: '#C8962E',
              lineHeight: 1.1,
              opacity: isVisible ? undefined : 0,
              minHeight: 44,
            }}
          >
            {isVisible ? <LetterByLetter text="Professional" /> : 'Professional'}
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
              style={{
                textDecoration: 'none',
                maxWidth: 280,
                margin: '0 auto',
                animation: 'glowPulse 3s ease-in-out infinite',
              }}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div
          className={isVisible ? 'animate-fade-in-up delay-4' : ''}
          style={{ textAlign: 'center', opacity: isVisible ? undefined : 0, position: 'relative', zIndex: 1 }}
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
