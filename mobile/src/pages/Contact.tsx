import PageBanner from '../components/PageBanner';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Contact" />

      <section>
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Get in Touch</p>
            <h2>We'd Love to Hear <span className="highlight">From You</span></h2>
            <div className="divider" />
          </div>

          <ContactInfo />

          <div style={{ marginTop: 28 }}>
            <h3 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 18,
              color: '#2D3047',
              marginBottom: 16,
            }}>
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: 0 }}>
        <iframe
          title="Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            '12 Motlhatswa Street, Extension 6, Atteridgeville, Pretoria, 0008, South Africa'
          )}&output=embed`}
          width="100%"
          height="250"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
        />
      </section>
    </>
  );
}
