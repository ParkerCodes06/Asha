import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import type { BlogPost } from '../types';
import { blogPosts } from '../data/siteData';

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const dateParts = post.date.split(' ');
  const day = dateParts[0];
  const month = dateParts[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      style={{
        background: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ position: 'relative', height: 200 }}>
        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Date badge */}
        <div style={{
          position: 'absolute',
          top: 15,
          left: 15,
          background: '#C8962E',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: 5,
          textAlign: 'center',
          minWidth: 50,
        }}>
          <div style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 22,
            lineHeight: 1,
          }}>
            {day}
          </div>
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
          }}>
            {month}
          </div>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 16,
          color: '#2D3047',
          marginBottom: 10,
          lineHeight: 1.3,
        }}>
          {post.title}
        </h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 13,
          color: '#696969',
          marginBottom: 15,
          lineHeight: 1.6,
        }}>
          {post.description}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: '#696969',
        }}>
          <span>{post.author}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <FaCalendarAlt style={{ color: '#C8962E', fontSize: 11 }} /> 1
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Blog() {
  return (
    <section style={{ padding: '70px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{
            fontFamily: "'Gloria Hallelujah', cursive",
            fontSize: 18,
            color: '#C8962E',
            marginBottom: 5,
          }}>
            News and Blogs
          </h2>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 45,
            color: '#2D3047',
          }}>
            Articles
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 25,
        }}>
          {blogPosts.map((p, i) => (
            <BlogCard key={p.title} post={p} index={i} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 18,
            color: '#2D3047',
          }}>
            Get into details now? <a href="#" style={{ color: '#C8962E', textDecoration: 'underline' }}>View All Our Posts&gt;</a>
          </h2>
        </div>
      </div>
    </section>
  );
}
