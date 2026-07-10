import { whyChooseUs } from '../data/siteData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const iconMap: Record<string, React.ReactNode> = {
  teacher: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#C8962E">
      <path d="M20 17v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v6H2v2h20v-2h-2zm-8-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM4 19h16v-6H4v6z"/>
    </svg>
  ),
  book: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#C8962E">
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
    </svg>
  ),
  art: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#C8962E">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.07L17 8l-6.39 3.99L5.5 17.5zm5.5-6.5c.83 0 1.5-.67 1.5-1.5S13.33 8 12 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
    </svg>
  ),
};

export default function WhyChoose() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef} style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-title">
          <p
            className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Why Pulset Kids Academy
          </p>
          <h2
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Why Choose <span className="highlight gradient-text">Us</span>
          </h2>
          <div
            className={`divider ${isVisible ? 'animate-scale-in delay-2' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className={`card-tap ${isVisible ? 'animate-fade-in-left' : ''}`}
              style={{
                display: 'flex',
                gap: 16,
                background: 'linear-gradient(135deg, #f8f6f0, #fff)',
                borderRadius: 16,
                padding: 18,
                border: '1px solid rgba(200,150,46,0.08)',
                boxShadow: '0 2px 10px rgba(200,150,46,0.06)',
                opacity: isVisible ? undefined : 0,
                transitionDelay: `${i * 100 + 200}ms`,
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(200,150,46,0.12), rgba(200,150,46,0.04))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {iconMap[item.icon] || iconMap.teacher}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: 15,
                  color: '#2D3047',
                  marginBottom: 4,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  color: '#696969',
                  lineHeight: 1.5,
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
