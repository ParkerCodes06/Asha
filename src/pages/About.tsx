import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import WhyChoose from '../components/WhyChoose';
import Team from '../components/Team';
import { aboutTeam } from '../data/siteData';

const aboutFeatures = [
  'Play-Based Learning', 'Nutritious Meals', 'Creative Activities',
  'Safe Environment', 'Qualified Teachers', 'Modern Facilities',
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" highlight="" breadcrumb="Home / About Us" />
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 50,
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                borderRadius: 15,
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}>
                <img
                  src="/images/hero.png"
                  alt="Pulset Kids Academy"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 style={{
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: 18,
                color: '#C8962E',
                marginBottom: 5,
              }}>
                About Us
              </h2>
              <h2 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 35,
                color: '#2D3047',
                marginBottom: 20,
              }}>
                Welcome to <span style={{ color: '#C8962E' }}>Pulset Kids Academy</span>
              </h2>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 15,
                color: '#696969',
                marginBottom: 15,
                lineHeight: 1.8,
              }}>
                Pulset Kids Academy is nestled in the heart of Atteridgeville, Pretoria. Established with
                the vision of delivering quality early childhood education, we have dedicated ourselves
                to nurturing children aged 0–6 years.
              </p>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 15,
                color: '#696969',
                marginBottom: 25,
                lineHeight: 1.8,
              }}>
                Our philosophy is to provide an environment where curiosity flourishes, creativity thrives,
                and every child embarks on a journey toward lifelong learning.
              </p>
              <ul style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
              }}>
                {aboutFeatures.map((f) => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#2D3047',
                  }}>
                    <FaCheckCircle style={{ color: '#C8962E', fontSize: 14 }} /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <WhyChoose />
      <Team
        members={aboutTeam}
        subtitle="Our Dedicated Staff"
        title="Meet Our "
        highlight="Team"
      />
    </>
  );
}
