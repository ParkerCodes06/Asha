import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    label: 'Happy Kids',
    value: 150,
    suffix: '+',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#C8962E">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
  },
  {
    label: 'Years Running',
    value: 8,
    suffix: '+',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#4CAF50">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
  },
  {
    label: 'Dedicated Teachers',
    value: 12,
    suffix: '+',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#2196F3">
        <path d="M20 17v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v6H2v2h20v-2h-2zm-8-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM4 19h16v-6H4v6z"/>
      </svg>
    ),
  },
  {
    label: 'Programs',
    value: 6,
    suffix: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#f44336">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    ),
  },
];

function AnimatedNumber({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <span className="stat-number">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (isVisible && !started.current) {
      started.current = true;
      setTimeout(() => setHasAnimated(true), 200);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #2D3047 0%, #1a1c2e 100%)',
        padding: '40px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating morphing shapes */}
      <div
        className="float-shape float-shape-1"
        style={{
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'rgba(200,150,46,0.1)',
          animation: 'morphShape 8s ease-in-out infinite, floatRandom1 6s ease-in-out infinite',
        }}
      />
      <div
        className="float-shape float-shape-2"
        style={{
          bottom: -15,
          left: -15,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(33,150,243,0.08)',
          animation: 'morphShape 10s ease-in-out infinite reverse, floatRandom2 8s ease-in-out infinite',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className={isVisible ? 'animate-fade-in-up delay-0' : ''}
          style={{ textAlign: 'center', marginBottom: 28, opacity: isVisible ? undefined : 0 }}
        >
          <p style={{
            fontFamily: "'Gloria Hallelujah', cursive",
            fontSize: 14,
            color: '#C8962E',
            marginBottom: 4,
          }}>
            Our Impact in Numbers
          </p>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 22,
            color: '#fff',
          }}>
            Trusted by <span className="gradient-text">Families</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 14,
        }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`card-tap ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: '20px 14px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: isVisible ? undefined : 0,
                transitionDelay: `${i * 100 + 200}ms`,
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
                animation: hasAnimated ? 'glowRing 1s ease-out' : 'none',
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 28,
                color: '#fff',
                lineHeight: 1,
                marginBottom: 4,
              }}>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} start={hasAnimated} />
              </div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                color: 'rgba(255,255,255,0.6)',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
