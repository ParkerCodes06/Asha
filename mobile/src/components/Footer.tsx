import { sitePhoneFull, siteEmail, siteAddress, footerQuickLinks, footerPrograms } from '../data/siteData';

function FooterWave() {
  return (
    <div style={{ width: '100%', lineHeight: 0, overflow: 'hidden', marginTop: -1 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: 40 }}>
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
          fill="#2D3047"
        />
        <path
          d="M0,40 C240,15 480,50 720,35 C960,20 1200,45 1440,30 L1440,60 L0,60 Z"
          fill="#2D3047"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#2D3047', color: '#ccc', paddingTop: 0 }}>
      <FooterWave />
      <div style={{ padding: '32px 0 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Contact */}
            <div>
              <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 18, color: '#fff', marginBottom: 12 }}>
                Contact Info
              </h3>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.8 }}>
                <p style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: '#C8962E', flexShrink: 0 }}>&#9906;</span>
                  {siteAddress}
                </p>
                <p style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: '#C8962E', flexShrink: 0 }}>&#9742;</span>
                  {sitePhoneFull}
                </p>
                <p style={{ display: 'flex', gap: 8 }}>
                  <span style={{ color: '#C8962E', flexShrink: 0 }}>&#9993;</span>
                  {siteEmail}
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/27712202716`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(76,175,80,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(76,175,80,0.2)',
                }}
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            {/* Quick Links + Programs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 18, color: '#fff', marginBottom: 12 }}>
                  Quick Links
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {footerQuickLinks.map((link) => (
                    <li key={link.label} style={{ marginBottom: 8 }}>
                      <a href={link.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#ccc', textDecoration: 'none', transition: 'color 0.2s' }}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 18, color: '#fff', marginBottom: 12 }}>
                  Programs
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {footerPrograms.map((p) => (
                    <li key={p} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#ccc', marginBottom: 8 }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #353535',
        marginTop: 32,
        padding: '16px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#ccc', margin: 0 }}>
            &copy; 2026 Pulset Kids Academy. All Rights Reserved.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#C8962E', marginTop: 8 }}>
            <a
              href="https://pulset.co.za"
              style={{ color: '#C8962E', textDecoration: 'underline' }}
            >
              View Desktop Site
            </a>
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: '#C8962E', marginTop: 4 }}>
            Made with &#10084; by <a href="mailto:senyokod@gmail.com" style={{ color: '#2196F3', textDecoration: 'underline' }}>ParkerDoesIT</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
