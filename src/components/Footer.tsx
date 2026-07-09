import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { sitePhoneFull, siteEmail, siteAddress, footerQuickLinks, footerPrograms } from '../data/siteData';

const whatsappNumber = '27712202716';
const facebookUrl = 'https://www.facebook.com/PulsetKidsAcademy';

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #2D3047 0%, #1a1c2e 100%)', color: '#ccc', padding: '70px 0 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 30,
        }}>
          {/* Contact */}
          <div>
            <h3 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 34,
              color: '#fff',
              marginBottom: 20,
            }}>
              Contact Info
            </h3>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 26,
              color: '#ccc',
              marginBottom: 15,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
            }}>
              <FaMapMarkerAlt style={{ color: '#C8962E', marginTop: 4, flexShrink: 0 }} />
              {siteAddress}
            </p>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 26,
              color: '#ccc',
              marginBottom: 15,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <FaPhone style={{ color: '#C8962E', flexShrink: 0 }} />
              {sitePhoneFull}
            </p>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 26,
              color: '#ccc',
              marginBottom: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <FaEnvelope style={{ color: '#C8962E', flexShrink: 0 }} />
              {siteEmail}
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 15 }}>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  color: '#ccc',
                  fontSize: 24,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1877F2';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#ccc';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaFacebook />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  color: '#ccc',
                  fontSize: 24,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#ccc';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 34,
              color: '#fff',
              marginBottom: 20,
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerQuickLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: 10 }}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 26,
                      color: '#ccc',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C8962E'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 34,
              color: '#fff',
              marginBottom: 20,
            }}>
              Our Programs
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerPrograms.map((p) => (
                <li key={p} style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 26,
                  color: '#ccc',
                  marginBottom: 10,
                }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid #353535',
        marginTop: 50,
        padding: '20px 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
            color: '#ccc',
            margin: 0,
          }}>
            &copy; 2026 Pulset Kids Academy. All Rights Reserved. Adding joy to everyday.
          </p>
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 22,
            color: '#C8962E',
          }}>
            Made with <span style={{ color: '#E44993' }}>&#10084;</span> by{' '}
            <a
              href="mailto:senyokod@gmail.com"
              style={{ color: '#2196F3', textDecoration: 'underline' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#2196F3'}
            >
              ParkerDoesIT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
