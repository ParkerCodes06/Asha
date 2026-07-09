import { FaCheckCircle, FaLightbulb, FaPlus } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { features } from '../data/siteData';

const iconColor = '#4CAF50';

export default function Features() {
  return (
    <section style={{ padding: '70px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'start' }}>
          {/* Left: Text + Features */}
          <div style={{ padding: '0 15px' }}>
            <SectionHeader
              subtitle="Education for everyone"
              title="Learn About Our Work Culture At Pulset Kids Academy"
              subtitleFont="'Gloria Hallelujah', cursive"
              subtitleSize="18px"
              subtitleColor="#C8962E"
              titleFont="'Fredoka One', cursive"
              titleSize="45px"
              titleColor="#2D3047"
              titleLineHeight="1.2em"
              marginBottom={5}
            />

            <FaLightbulb className="desktop-only icon-grow" style={{
              color: '#cdc7c7', fontSize: 60, position: 'absolute', left: -60, top: 140,
              opacity: 0.6,
            }} />

            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: '#696969',
              paddingTop: 15,
              lineHeight: 1.8,
              maxWidth: 500,
            }}>
              Keeping children safe and healthy is our highest priority at all times. Our staff are
              first-aid trained and we implement well-tested protocols to prevent harm and ensure
              effective reaction in the event of an emergency.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, paddingTop: 20 }}>
              <ul style={{ listStyle: 'none' }}>
                {features.slice(0, 2).map((f) => (
                  <li key={f.title} style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: 14,
                    color: '#2D3047',
                    padding: '5px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginLeft: 10,
                  }}>
                    <FaCheckCircle style={{ color: iconColor, fontSize: 16 }} /> {f.title}
                  </li>
                ))}
              </ul>
              <ul style={{ listStyle: 'none' }}>
                {features.slice(2).map((f) => (
                  <li key={f.title} style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: 14,
                    color: '#2D3047',
                    padding: '5px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginLeft: 10,
                  }}>
                    <FaCheckCircle style={{ color: iconColor, fontSize: 16 }} /> {f.title}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ paddingTop: 20 }}>
              <h2 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 18,
                color: '#2D3047',
              }}>
                Have a question?{' '}
                <a href="#" style={{ color: '#C8962E', textDecoration: 'underline' }}>Get started free</a>
                <span style={{ color: '#C8962E' }}>&gt;</span>
              </h2>
            </div>
          </div>

          {/* Right: Logo image background */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
            {/* Floating icons */}
            <FaPlus className="desktop-only icon-rotate" style={{
              position: 'absolute', bottom: 300, right: -15,
              color: '#7cefe9', fontSize: 36,
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
