import { motion } from 'framer-motion';
import { FaBroom, FaFutbol, FaPaintBrush, FaBicycle } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const activities = [
  { icon: <FaBroom style={{ fontSize: 36, color: '#4CAF50' }} />, label: 'Cleaning', color: '#e8f5e9', borderColor: '#4CAF50' },
  { icon: <FaFutbol style={{ fontSize: 36, color: '#2196F3' }} />, label: 'Indoor Play', color: '#e3f2fd', borderColor: '#2196F3' },
  { icon: <FaPaintBrush style={{ fontSize: 36, color: '#C8962E' }} />, label: 'Art & Craft', color: '#fff8e1', borderColor: '#C8962E' },
  { icon: <FaBicycle style={{ fontSize: 36, color: '#E44993' }} />, label: 'Outdoor Games', color: '#fce4ec', borderColor: '#E44993' },
];

export default function Activities() {
  return (
    <section style={{ padding: '70px 0', background: '#fff' }}>
      <div className="container">
        <SectionHeader subtitle="Have Fun" title="Daily Activities" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 25,
        }}>
          {activities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.03 }}
              style={{
                background: a.color,
                borderRadius: 20,
                padding: '35px 20px',
                textAlign: 'center',
                cursor: 'pointer',
                border: `3px solid transparent`,
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = a.borderColor;
                e.currentTarget.style.boxShadow = `0 10px 30px ${a.borderColor}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                style={{
                  width: 70,
                  height: 70,
                  background: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
              >
                {a.icon}
              </motion.div>
              <h3 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 28,
                color: '#2D3047',
              }}>
                {a.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
