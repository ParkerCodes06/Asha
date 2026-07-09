import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneVolume, FaBars, FaTimes, FaChevronUp } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { navLinks, sitePhone, sitePhoneFull } from '../data/siteData';

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #C8962E, #e0b84d)',
            color: '#fff',
            border: 'none',
            fontSize: 12,
            cursor: 'pointer',
            zIndex: 999,
            boxShadow: '0 4px 15px rgba(200,150,46,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition();
  const location = useLocation();

  return (
    <>
      <header style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : '#fff',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        padding: '10px 0',
        boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.1)' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo + Name */}
          <Link to="/" style={{ width: '20%', display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/logo.png"
              alt="Pulset Kids Academy"
              style={{
                height: 80,
                width: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #C8962E',
                flexShrink: 0,
              }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 16,
                color: '#2D3047',
                letterSpacing: 0.5,
              }}>Pulset</div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 2,
                color: '#C8962E',
                fontWeight: 600,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}>Kids Academy</div>
            </div>
          </Link>

          {/* Nav - desktop */}
          <nav className="desktop-nav" style={{
            width: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    color: isActive ? '#C8962E' : '#2D3047',
                    textDecoration: 'none',
                    padding: '10px 25px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C8962E';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#2D3047';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: 3,
                        background: 'linear-gradient(90deg, #C8962E, #e0b84d)',
                        borderRadius: 2,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Phone - desktop */}
          <div className="desktop-phone" style={{ width: '20%', textAlign: 'right' }}>
            <a
              href={`tel:+27${sitePhone.replace(/\s/g, '')}`}
              className="phone-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                color: '#2D3047',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              <FaPhoneVolume className="phone-icon" style={{
                color: '#C8962E',
                fontSize: 34,
                transform: 'rotate(340deg)',
              }} />
              <div>
                <div style={{ fontSize: 15, color: '#C8962E', textTransform: 'uppercase', letterSpacing: 1 }}>Call us Now</div>
                <div style={{ fontSize: 16, color: '#C8962E', fontWeight: 700 }}>{sitePhoneFull}</div>
              </div>
            </a>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'linear-gradient(135deg, #C8962E, #e0b84d)',
              color: '#fff',
              border: 'none',
              fontSize: 30,
              padding: 10,
              cursor: 'pointer',
              borderRadius: 10,
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-only"
              style={{
                overflow: 'hidden',
                background: '#fff',
                borderTop: '1px solid #eee',
              }}
            >
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        color: location.pathname === link.path ? '#C8962E' : '#2D3047',
                        textDecoration: 'none',
                        padding: '12px 0',
                        borderBottom: '1px solid #eee',
                        display: 'block',
                        transition: 'color 0.3s',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href={`tel:+27${sitePhone.replace(/\s/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    color: '#C8962E',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    marginTop: 10,
                    padding: '10px 0',
                    background: 'linear-gradient(135deg, rgba(200,150,46,0.1), rgba(200,150,46,0.05))',
                    borderRadius: 10,
                    justifyContent: 'center',
                  }}
                >
                  <FaPhoneVolume /> {sitePhoneFull}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <ScrollToTopButton />
    </>
  );
}
