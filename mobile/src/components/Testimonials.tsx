import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Thabo M.',
    role: 'Parent',
    text: 'Pulset Kids Academy transformed our daughter. She loves going every day and has grown so much in confidence and creativity!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thabo',
  },
  {
    name: 'Naledi K.',
    role: 'Parent',
    text: 'The teachers truly care about every child. The nurturing environment and structured programs made all the difference for our son.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Naledi',
  },
  {
    name: 'Sipho D.',
    role: 'Parent',
    text: 'Best decision we made was enrolling our twins here. The progress they have made in just a few months is incredible!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sipho',
  },
  {
    name: 'Lerato P.',
    role: 'Parent',
    text: 'Safe, clean, and充满 of love. Pulset Kids Academy is truly a home away from home for our little one.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lerato',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? '#C8962E' : '#e0e0e0'}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} style={{ background: '#fff', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-title">
          <p
            className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            What Parents Say
          </p>
          <h2
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Trusted <span className="highlight gradient-text">Testimonials</span>
          </h2>
          <div
            className={`divider ${isVisible ? 'animate-scale-in delay-2' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          />
        </div>
      </div>

      {/* Marquee scroll */}
      <div
        className={`marquee-container ${isVisible ? 'animate-fade-in-up delay-3' : ''}`}
        style={{ opacity: isVisible ? undefined : 0 }}
      >
        <div className="marquee-content" style={{ gap: 14, padding: '0 14px' }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="testimonial-card card-tap"
              style={{
                background: 'linear-gradient(135deg, #f8f6f0, #fff)',
                borderRadius: 16,
                padding: 20,
                minWidth: 280,
                maxWidth: 300,
                border: '1px solid rgba(200,150,46,0.08)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                flexShrink: 0,
              }}
            >
              <StarRating rating={t.rating} />
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                color: '#696969',
                lineHeight: 1.6,
                marginBottom: 16,
                fontStyle: 'italic',
              }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(200,150,46,0.2)',
                  }}
                />
                <div>
                  <div style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: 13,
                    color: '#2D3047',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    color: '#C8962E',
                    fontWeight: 500,
                  }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
