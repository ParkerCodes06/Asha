import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #2D3047 0%, #1a1c2e 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2
          className={isVisible ? 'animate-fade-in-up delay-0' : ''}
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 24,
            color: '#fff',
            marginBottom: 10,
            opacity: isVisible ? undefined : 0,
          }}
        >
          Ready to Give Your Child the Best Start?
        </h2>
        <p
          className={isVisible ? 'animate-fade-in-up delay-1' : ''}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            color: '#ccc',
            marginBottom: 28,
            lineHeight: 1.5,
            opacity: isVisible ? undefined : 0,
          }}
        >
          Join Pulset Kids Academy today and watch your child thrive in a nurturing, fun environment.
        </p>
        <div className={isVisible ? 'animate-fade-in-up delay-2' : ''} style={{ opacity: isVisible ? undefined : 0 }}>
          <Link
            to="/contact"
            className="btn-primary btn-ripple"
            style={{
              textDecoration: 'none',
              maxWidth: 280,
              margin: '0 auto',
              background: 'linear-gradient(135deg, #C8962E 0%, #e0b84d 100%)',
              boxShadow: '0 4px 20px rgba(200,150,46,0.4)',
            }}
          >
            Enroll Now
          </Link>
        </div>
      </div>

      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: -40,
        right: -40,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'rgba(200,150,46,0.08)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -30,
        left: -30,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'rgba(33,150,243,0.06)',
      }} />
    </section>
  );
}
