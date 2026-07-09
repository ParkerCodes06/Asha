import { FaSun, FaPhoneAlt } from 'react-icons/fa';
import { sitePhoneFull } from '../data/siteData';

export default function CTA() {
  return (
    <section style={{
      padding: '70px 0',
      background: '#4CAF50',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <FaSun className="icon-rotate" style={{
          fontSize: 60,
          color: '#FFD166',
          marginBottom: 20,
        }} />
        <h2 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 45,
          color: '#fff',
          marginBottom: 15,
        }}>
          Join Our New Session
        </h2>
        <p style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 24,
          color: '#fff',
          marginBottom: 5,
        }}>
          Call To Enroll Your Child
        </p>
        <p style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 28,
          color: '#fff',
          marginBottom: 25,
          letterSpacing: 1,
        }}>
          {sitePhoneFull}
        </p>
        <a
          href={`tel:+27${sitePhoneFull.replace(/[^0-9]/g, '')}`}
          className="btn-primary"
          style={{
            background: '#fff',
            color: '#2196F3',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C8962E';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#2196F3';
          }}
        >
          <FaPhoneAlt /> Call Us Now
        </a>
      </div>
    </section>
  );
}
