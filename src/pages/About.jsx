import { Link } from 'react-router-dom'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import './About.css'

const timeline = [
  { year: '2016', event: 'ASHA Pre-School opened its doors with 8 children.' },
  { year: '2018', event: 'Expanded to include after-care and holiday programs.' },
  { year: '2021', event: 'Celebrated 50+ enrolled children milestone.' },
  { year: '2023', event: 'Renovated playground and added new learning resources.' },
  { year: '2025', event: 'Recognized as a trusted early childhood development center.' },
]

const counters = [
  { label: 'Years of Excellence', target: 12, suffix: '+' },
  { label: 'Happy Children', target: 250, suffix: '+' },
  { label: 'Qualified Staff', target: 28, suffix: '' },
  { label: 'Fun Activities', target: 15, suffix: '+' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="breadcrumb"><Link to="/">Home</Link> <span className="breadcrumb-sep">›</span> About</p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-content">
            <h5 className="section-label reveal-left">Who We Are</h5>
            <h2 className="section-title reveal-left" style={{ textAlign: 'left' }}>
              Welcome to ASHA Pre-School<br />
              <span style={{ color: 'var(--gold)' }}>Day Care Center</span>
            </h2>
            <p className="reveal-left">
              ASHA Pre-School is based in Braamfischerville, Roodepoort. We were founded
              with a mission to provide quality early childhood education and sow seeds of
              knowledge in a warm, loving environment. We cater for children from 0–6 years.
            </p>
            <p className="reveal-left">
              Our name, <strong>ASHA Pre-School</strong>, means <em>"Joy and Happiness"</em> —
              because every child deserves to learn, play, and grow in joy.
            </p>
            <ul className="about-features reveal-left">
              <li>Safe Transportation</li>
              <li>Nutritious Meals</li>
              <li>Outdoor Play</li>
              <li>Loving Care</li>
            </ul>
          </div>
          <div className="about-intro-img reveal-right">
            <div className="about-img-frame">
              <img
                src="/pictures/ASHA Pre-School.png"
                alt="About ASHA Pre-School"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <h5 className="section-label reveal">Our Journey</h5>
          <h2 className="section-title reveal">How We Grew</h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.year} className={`timeline-item reveal ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{t.year}</span>
                  <p>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section about-why">
        <div className="container">
          <h5 className="section-label reveal">Why Choose Us?</h5>
          <h2 className="section-title reveal">We Are the Best Choice for Your Child</h2>
          <p className="section-subtitle reveal">
            At ASHA Pre-School, we strive to nurture future leaders with love, care, and quality education.
          </p>
          <div className="about-why-grid">
            <div className="about-why-card reveal-left">
              <h3>Well Trained Professionals</h3>
              <p>Our staff are qualified, experienced, and passionate about early childhood development.</p>
            </div>
            <div className="about-why-card reveal-right">
              <h3>Awesome Infrastructure</h3>
              <p>Safe, clean, and stimulating environment designed for children to learn and grow.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Team />
    </>
  )
}
