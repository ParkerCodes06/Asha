import { activities } from '../data/siteData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const activityIcons: Record<string, React.ReactNode> = {
  FaMoon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8962E"><path d="M12 3c.46 0 .93.04 1.38.14 1.42.28 2.71.91 3.77 1.78C15.1 3.97 12.82 3 10.29 3 5.92 3 2.36 6.56 2.36 11c0 3.35 1.98 6.22 4.79 7.49-.1-.32-.15-.66-.15-1 0-3.31 2.69-6 6-6s6 2.69 6 6c0 .34-.05.68-.15 1 2.81-1.27 4.79-4.14 4.79-7.49 0-1.13-.23-2.2-.65-3.18.95 1.06 1.5 2.45 1.5 3.92 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6z"/></svg>
  ),
  FaHandHoldingHeart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8962E"><path d="M4 7c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H4zm6 0c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-2zm11-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z"/></svg>
  ),
  FaCalculator: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8962E"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 17h10v2H7zm0-4h10v2H7zm0-4h10v2H7zm0-4h10v2H7z"/></svg>
  ),
  FaRunning: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8962E"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.17 12l.57-2.5 2.1 2v5h2v-6.5l-2.1-2 .57-2.5c1.21 1.38 2.95 2.06 4.73 2.06v-2c-1.34 0-2.55-.67-3.27-1.66l-.73-1.13c-.47-.73-1.27-1.21-2.18-1.21-.3 0-.6.05-.88.15l-4.76 1.6V12h2v-2.4l1.8-.6-1.34 5.5-4.26 1.72v2l5.08-2.06z"/></svg>
  ),
  FaCampground: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8962E"><path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm-7-5.5c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5 3c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>
  ),
  FaBroom: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8962E"><path d="M16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 01-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0z"/></svg>
  ),
};

export default function Activities() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section ref={sectionRef} style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-title">
          <p
            className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Our Activities
          </p>
          <h2
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            What We <span className="highlight gradient-text">Offer</span>
          </h2>
          <div
            className={`divider ${isVisible ? 'animate-scale-in delay-2' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {activities.map((act, i) => (
            <div
              key={act.title}
              className={`card-tap ${isVisible ? 'animate-fade-in-right' : ''}`}
              style={{
                display: 'flex',
                gap: 14,
                background: 'linear-gradient(135deg, #f8f6f0, #fff)',
                borderRadius: 14,
                padding: 16,
                border: '1px solid rgba(200,150,46,0.06)',
                opacity: isVisible ? undefined : 0,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(200,150,46,0.12), rgba(200,150,46,0.04))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {activityIcons[act.icon] || activityIcons.FaMoon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: 15,
                  color: '#2D3047',
                  marginBottom: 4,
                }}>
                  {act.title}
                </h3>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  color: '#696969',
                  lineHeight: 1.5,
                }}>
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
