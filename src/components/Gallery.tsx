import { motion } from 'framer-motion';
import { galleryImages } from '../data/siteData';
import SectionHeader from './SectionHeader';

interface GalleryProps {
  showHeader?: boolean;
  onImageClick?: (index: number) => void;
}

export default function Gallery({ showHeader = true, onImageClick }: GalleryProps) {
  return (
    <section style={{ padding: '70px 0', background: '#fff' }}>
      <div className="container">
        {showHeader && (
          <SectionHeader subtitle="Explore" title="Our Gallery" />
        )}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 15,
        }}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              style={{
                borderRadius: 10,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => onImageClick?.(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                style={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
