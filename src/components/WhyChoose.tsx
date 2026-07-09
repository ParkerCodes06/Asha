import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBookReader, FaPaintBrush } from 'react-icons/fa';
import { whyChooseUs } from '../data/siteData';

const iconMap: Record<string, React.ReactNode> = {
  teacher: <FaChalkboardTeacher style={{ fontSize: 52, color: '#2D3047' }} />,
  book: <FaBookReader style={{ fontSize: 52, color: '#2D3047' }} />,
  art: <FaPaintBrush style={{ fontSize: 52, color: '#2D3047' }} />,
};

const cardColors = ['#C8962E', '#2196F3', '#4CAF50', '#E44993'];

export default function WhyChoose() {
  return (
    <section style={{
      padding: '70px 0',
      background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: -30, right: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Gloria Hallelujah', cursive",
              fontSize: 30,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 5,
            }}
          >
            Why Choose Pulset Kids Academy
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 57,
              color: '#fff',
            }}
          >
            Why Choose Us
          </motion.h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 25,
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: 'spring' }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 35,
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderTop: `4px solid ${cardColors[i % cardColors.length]}`,
              }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                style={{
                  width: 90,
                  height: 90,
                  background: `${cardColors[i % cardColors.length]}15`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                }}
              >
                {iconMap[item.icon] || iconMap.teacher}
              </motion.div>
              <h3 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 30,
                color: '#2D3047',
                marginBottom: 10,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 26,
                color: '#696969',
                lineHeight: 1.6,
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
