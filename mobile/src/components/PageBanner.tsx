import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #2D3047 0%, #1a1c2e 100%)',
      textAlign: 'center',
      padding: '32px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Floating decorative shapes */}
      <div
        className="float-shape float-shape-1"
        style={{
          top: -10,
          right: -10,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(200,150,46,0.08)',
          animation: 'morphShape 8s ease-in-out infinite',
        }}
      />
      <div
        className="float-shape float-shape-2"
        style={{
          bottom: -15,
          left: -15,
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: 'rgba(33,150,243,0.06)',
          animation: 'morphShape 10s ease-in-out infinite reverse',
        }}
      />
      <div
        className="float-shape float-shape-3"
        style={{
          top: '30%',
          left: '15%',
          width: 30,
          height: 30,
          opacity: 0.05,
        }}
      >
        <svg viewBox="0 0 30 30" fill="none">
          <polygon points="15,2 28,28 2,28" fill="#C8962E" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 28,
          color: '#fff',
          marginBottom: 8,
          background: 'linear-gradient(135deg, #fff, #C8962E)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradientShimmer 4s ease infinite',
        }}>
          {title}
        </h1>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 14,
          color: '#C8962E',
          fontWeight: 500,
        }}>
          <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</Link> / {subtitle}
        </p>
      </div>
    </section>
  );
}
