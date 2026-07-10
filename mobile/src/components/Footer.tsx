import { sitePhoneFull, siteEmail, siteAddress, footerQuickLinks, footerPrograms } from '../data/siteData';

export default function Footer() {
  return (
    <footer style={{ background: '#2D3047', color: '#ccc', padding: '40px 0 0' }}>
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

          {/* Quick Links + Programs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 18, color: '#fff', marginBottom: 12 }}>
                Quick Links
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {footerQuickLinks.map((link) => (
                  <li key={link.label} style={{ marginBottom: 8 }}>
                    <a href={link.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#ccc', textDecoration: 'none' }}>
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
              href="/"
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
