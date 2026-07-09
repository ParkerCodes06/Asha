import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import PageBanner from '../components/PageBanner';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" highlight="" breadcrumb="Home / Contact Us" />
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <SectionHeader
            subtitle="Get In Touch"
            title={"We'd Love to Hear From You"}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 50,
            alignItems: 'start',
          }}>
            <div style={{
              background: '#fff',
              borderRadius: 20,
              padding: 40,
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #4CAF50',
            }}>
              <ContactInfo />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section style={{ padding: '0', background: '#fff' }}>
        <div style={{
          background: 'linear-gradient(135deg, #2D3047 0%, #2196F3 100%)',
          padding: '40px 0 0',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 40,
            color: '#fff',
            marginBottom: 10,
          }}>
            Find Us on the Map
          </h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
            color: 'rgba(255,255,255,0.8)',
            marginBottom: 30,
          }}>
            12 Motlhatswa Street, Extension 6, Atteridgeville, Pretoria
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            height: 450,
            borderRadius: 0,
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.44!2d28.2316!3d-25.7658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9567c8f7a2e3c5%3A0x1234567890abcdef!2s12+Motlhatswa+St,+Extension+6,+Atteridgeville,+Pretoria+0008!5e0!3m2!1sen!2sza!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pulset Kids Academy Location"
          />
        </motion.div>
      </section>
    </>
  );
}
