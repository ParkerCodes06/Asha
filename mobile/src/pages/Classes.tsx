import PageBanner from '../components/PageBanner';
import Courses from '../components/Courses';
import { classCourses } from '../data/siteData';

export default function Classes() {
  return (
    <>
      <PageBanner title="Our Classes" subtitle="Classes" />

      <Courses
        courses={classCourses}
        subtitle="Choose the Right Program"
        title="Our "
        highlight="Class Programs"
      />

      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Pricing</p>
            <h2>Affordable <span className="highlight">Plans</span></h2>
            <div className="divider" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{
              background: '#f8f6f0',
              borderRadius: 12,
              padding: 20,
              textAlign: 'center',
              border: '2px solid #C8962E',
            }}>
              <h3 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 16,
                color: '#2D3047',
                marginBottom: 4,
              }}>
                Pre-school Class (Aged 4–7)
              </h3>
              <p style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 28,
                color: '#C8962E',
                margin: '8px 0',
              }}>
                R500<span style={{ fontSize: 14, color: '#696969' }}>/month</span>
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#696969', marginBottom: 16 }}>
                A solid foundation for formal schooling through play-based learning.
              </p>
              <a href="/contact" className="btn-primary" style={{ textDecoration: 'none', maxWidth: 240, margin: '0 auto' }}>
                Enroll Now
              </a>
            </div>

            <div style={{
              background: '#f8f6f0',
              borderRadius: 12,
              padding: 20,
              textAlign: 'center',
            }}>
              <h3 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 16,
                color: '#2D3047',
                marginBottom: 4,
              }}>
                Pre-School (Aged 0–3)
              </h3>
              <p style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 28,
                color: '#C8962E',
                margin: '8px 0',
              }}>
                R600<span style={{ fontSize: 14, color: '#696969' }}>/month</span>
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#696969', marginBottom: 16 }}>
                Early stimulation and care for our youngest learners.
              </p>
              <a href="/contact" className="btn-primary" style={{ textDecoration: 'none', maxWidth: 240, margin: '0 auto' }}>
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
