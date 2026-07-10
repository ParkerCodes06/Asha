import PageBanner from '../components/PageBanner';
import Team from '../components/Team';
import WhyChoose from '../components/WhyChoose';
import Activities from '../components/Activities';
import { aboutTeam } from '../data/siteData';

export default function About() {
  return (
    <>
      <PageBanner title="About Us" subtitle="About" />

      <section>
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Who We Are</p>
            <h2>Welcome to <span className="highlight">Pulset Kids Academy</span></h2>
            <div className="divider" />
          </div>

          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            color: '#696969',
            lineHeight: 1.7,
            textAlign: 'center',
            marginBottom: 24,
          }}>
            At Pulset Kids Academy, we believe every child deserves a nurturing environment
            where they can grow, learn, and thrive. Our dedicated team of educators provides
            a safe, stimulating space that encourages curiosity, creativity, and confidence.
          </p>

          <img
            src="/images/hero.png"
            alt="About us"
            style={{
              width: '100%',
              maxWidth: 400,
              borderRadius: 12,
              margin: '0 auto',
            }}
          />
        </div>
      </section>

      <WhyChoose />
      <Activities />
      <Team
        members={aboutTeam}
        subtitle="Meet Our Team"
        title="Our "
        highlight="Teachers"
      />
    </>
  );
}
