import { useState } from 'react';
import { blogPosts } from '../data/siteData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function BlogCard({ post, index, parentVisible }: { post: typeof blogPosts[0]; index: number; parentVisible: boolean }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className={`card-tap ${parentVisible ? 'animate-fade-in-up' : ''}`}
      style={{
        background: '#fafafa',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.04)',
        opacity: parentVisible ? undefined : 0,
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        {!imgLoaded && <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />}
        <img
          src={post.image}
          alt={post.title}
          onLoad={() => setImgLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            display: imgLoaded ? 'block' : 'none',
          }}
        />
      </div>
      <div style={{ padding: 18 }}>
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11,
          color: '#C8962E',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        }}>
          {post.date} &middot; {post.author}
        </span>
        <h3 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 17,
          color: '#2D3047',
          margin: '8px 0',
          lineHeight: 1.3,
        }}>
          {post.title}
        </h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 13,
          color: '#696969',
          lineHeight: 1.5,
        }}>
          {post.description}
        </p>
      </div>
    </div>
  );
}

export default function Blog() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section ref={sectionRef} style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-title">
          <p
            className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Latest from our blog
          </p>
          <h2
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Our Latest <span className="highlight gradient-text">News</span>
          </h2>
          <div
            className={`divider ${isVisible ? 'animate-scale-in delay-2' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {blogPosts.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} parentVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
