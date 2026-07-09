import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  highlight?: string;
  breadcrumb?: string;
}

export default function PageBanner({ title, highlight, breadcrumb }: PageBannerProps) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #C8962E 0%, #2196F3 100%)',
      padding: '80px 0 60px',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 57,
          color: '#fff',
          marginBottom: 10,
        }}>
          {title}<span style={{ color: '#FFD166' }}>{highlight}</span>
        </h1>
        {breadcrumb && (
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 28,
            color: 'rgba(255,255,255,0.8)',
          }}>
            {breadcrumb}
          </p>
        )}
      </motion.div>
    </section>
  );
}
