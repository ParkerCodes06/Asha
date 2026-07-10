import { features } from '../data/siteData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Features() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef} style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-title">
          <p
            className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Education for everyone
          </p>
          <h2
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Learn About Our Work Culture<br />At Pulset Kids Academy
          </h2>
          <div
            className={`divider ${isVisible ? 'animate-scale-in delay-2' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          />
        </div>

        <p
          className={isVisible ? 'animate-fade-in-up delay-2' : ''}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: '#696969',
            lineHeight: 1.7,
            marginBottom: 24,
            textAlign: 'center',
            opacity: isVisible ? undefined : 0,
          }}
        >
          Keeping children safe and healthy is our highest priority at all times. Our staff are
          first-aid trained and we implement well-tested protocols to prevent harm and ensure
          effective reaction in the event of an emergency.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
        }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-tap ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: "'Fredoka One', cursive",
                fontSize: 13,
                color: '#2D3047',
                background: 'linear-gradient(135deg, #f8f6f0, #fff8eb)',
                padding: '14px 20px',
                borderRadius: 14,
                border: '1px solid rgba(200,150,46,0.1)',
                boxShadow: '0 2px 8px rgba(200,150,46,0.06)',
                opacity: isVisible ? undefined : 0,
                transitionDelay: `${i * 80}ms`,
                flex: '1 1 calc(50% - 6px)',
                minWidth: 140,
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: 'linear-gradient(135deg, rgba(76,175,80,0.15), rgba(76,175,80,0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
              {f.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
