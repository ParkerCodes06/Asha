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
    }}>
      <div className="container">
        <h1 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 28,
          color: '#fff',
          marginBottom: 8,
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
