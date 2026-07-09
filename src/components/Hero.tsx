import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaStar, FaDotCircle, FaPlus } from 'react-icons/fa';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const parallaxElements = sectionRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.5');
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} style={{ paddingTop: 100, position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      {/* Animated background circles */}
      <div className="desktop-only" style={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(200,150,46,0.05)', animation: 'pulse 4s ease-in-out infinite' }} />
      <div className="desktop-only" style={{ position: 'absolute', bottom: '10%', right: '10%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(76,175,80,0.05)', animation: 'pulse 3s ease-in-out infinite 1s' }} />
      <div className="desktop-only" style={{ position: 'absolute', top: '50%', right: '30%', width: 150, height: 150, borderRadius: '50%', background: 'rgba(33,150,243,0.05)', animation: 'pulse 5s ease-in-out infinite 0.5s' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'center' }}>
          {/* Left: Text */}
          <div style={{ padding: '40px 0', position: 'relative' }}>
            {/* Floating decorative icons */}
            <FaLeaf className="desktop-only parallax" data-speed="-0.2" style={{
              position: 'absolute', top: -60, right: -235,
              color: '#4CAF50', fontSize: 60, transform: 'rotate(340deg)',
            }} />
            <FaStar className="desktop-only icon-rotate" style={{
              position: 'absolute', top: 0, left: -325,
              color: '#FFC107', fontSize: 30,
            }} />
            <FaDotCircle style={{
              position: 'absolute', bottom: 3, right: 175,
              color: '#E44993', fontSize: 36,
            }} />
            <FaPlus className="desktop-only icon-rotate" style={{
              position: 'absolute', bottom: -35, right: -490,
              color: '#2196F3', fontSize: 30,
            }} />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: 18,
                fontWeight: 500,
                color: '#C8962E',
                marginBottom: 5,
              }}
            >
              Adding Joy to Everyday
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 56,
                fontWeight: 500,
                color: '#C8962E',
                marginTop: -20,
                lineHeight: 1.1,
              }}
            >
              Professional
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 18,
                fontWeight: 500,
                color: '#2D3047',
                paddingTop: 20,
                maxWidth: 500,
                lineHeight: 1.6,
              }}
            >
              Pulset Kids Academy is a Baby Care Center which its soul purpose is to instill
              life-long values that nurture humanity and give shape to a better world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ paddingTop: 40 }}
            >
              <Link
                to="/about"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <span style={{ marginRight: 4 }}>&#8594;</span> Get Started <span style={{ marginLeft: 4 }}>&#8594;</span>
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div style={{ position: 'relative', textAlign: 'right' }}>
            {/* Rotating sun */}
            <img
              src="https://thuthukadaycare.co.za/sitepad-data/uploads/2022/03/sun.png"
              alt="sun"
              className="desktop-only icon-rotate"
              style={{
                position: 'absolute', top: -65, right: -545,
                width: '15%',
              }}
            />
            {/* Hero image */}
            <motion.img
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              src="/images/hero.png"
              alt="Kids playing"
              style={{ maxWidth: '100%', borderRadius: 20 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
