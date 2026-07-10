import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, sitePhoneFull } from '../data/siteData';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition();
  const location = useLocation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > 100) {
        setHidden(current > prevScrollY && current > 200);
      } else {
        setHidden(false);
      }
      setPrevScrollY(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={`glass-header safe-area-top ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'transform 0.3s ease, background 0.3s ease',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        background: scrolled ? undefined : '#fff',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img
            src="/images/logo.png"
            alt="Pulset Kids Academy"
            style={{
              height: 44,
              width: 44,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #C8962E',
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 14,
              color: '#2D3047',
              lineHeight: 1,
            }}>Pulset</div>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              color: '#C8962E',
              fontWeight: 600,
              letterSpacing: 0.5,
              textTransform: 'uppercase',
            }}>Kids Academy</div>
          </div>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn-ripple"
          style={{
            background: 'linear-gradient(135deg, #C8962E, #e0b84d)',
            color: '#fff',
            border: 'none',
            fontSize: 22,
            padding: '8px 12px',
            cursor: 'pointer',
            borderRadius: 8,
            minWidth: 44,
            minHeight: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(200,150,46,0.15)',
          padding: '8px 16px 16px',
          animation: 'fadeInUp 0.25s ease-out',
        }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: location.pathname === link.path ? '#C8962E' : '#2D3047',
                textDecoration: 'none',
                padding: '14px 12px',
                borderRadius: 10,
                marginBottom: 2,
                background: location.pathname === link.path ? 'rgba(200,150,46,0.08)' : 'transparent',
                transition: 'all 0.2s',
                animation: `fadeInUp 0.3s ease-out ${i * 60}ms both`,
              }}
            >
              {location.pathname === link.path && (
                <div style={{
                  width: 4,
                  height: 20,
                  borderRadius: 2,
                  background: 'linear-gradient(180deg, #C8962E, #e0b84d)',
                }} />
              )}
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:+27${'0712202716'}`}
            className="btn-ripple card-tap"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              color: '#C8962E',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              marginTop: 8,
              padding: '14px 0',
              background: 'linear-gradient(135deg, rgba(200,150,46,0.1), rgba(200,150,46,0.05))',
              borderRadius: 12,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            {sitePhoneFull}
          </a>
        </div>
      )}
    </header>
  );
}
