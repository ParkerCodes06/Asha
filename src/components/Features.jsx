import './Features.css'

const features = [
  { initial: 'L', title: 'Loving Care', desc: 'Warm, nurturing environment with trained caregivers who treat every child like family.' },
  { initial: 'S', title: 'Safe Transport', desc: 'Reliable, monitored transportation with child-safe seats and trained drivers.' },
  { initial: 'N', title: 'Nutritious Meals', desc: 'Fresh, balanced meals prepared daily with love. Special diets accommodated.' },
  { initial: 'O', title: 'Outdoor Play', desc: 'Safe, engaging outdoor space with age-appropriate equipment for active fun.' },
]

export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <h5 className="section-label reveal">Why Parents Trust Us</h5>
        <h2 className="section-title reveal">Everything Your Child Needs</h2>
        <p className="section-subtitle reveal">
          We provide a holistic early childhood experience that nurtures
          the mind, body, and spirit of every little one.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className="feature-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon-wrap">{f.initial}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Counter Stats */}
      <div className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number" data-target="10">0</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="75">0</span>
            <span className="stat-label">Kids Enrolled</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="8">0</span>
            <span className="stat-label">Staff Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="7">0</span>
            <span className="stat-label">Activities</span>
          </div>
        </div>
      </div>
    </section>
  )
}
