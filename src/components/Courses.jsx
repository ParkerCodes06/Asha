import './Courses.css'

const programs = [
  {
    img: '/pictures/Creative arts.png',
    title: 'Creative Arts & Crafts',
    ageGroup: '2–4 Years',
    schedule: 'Mon, Wed, Fri',
    desc: 'Painting, drawing, and sensory play that sparks imagination and fine motor skills.',
  },
  {
    img: '/pictures/Reading and tThinking Skills.PNG',
    title: 'Reading & Discovery',
    ageGroup: '3–5 Years',
    schedule: 'Daily',
    desc: 'Storytime, phonics, and hands-on exploration to build a love for learning.',
  },
  {
    img: '/pictures/Outdoor Games.png',
    title: 'Play & Movement',
    ageGroup: '1–6 Years',
    schedule: 'Daily',
    desc: 'Structured games, music, and outdoor play for healthy physical development.',
  },
]

export default function Courses() {
  return (
    <section className="section courses">
      <div className="container">
        <h5 className="section-label reveal">Our Programs</h5>
        <h2 className="section-title reveal">Fun-Filled Learning Programs</h2>
        <p className="section-subtitle reveal">
          Age-appropriate programs designed to nurture curiosity, creativity, and confidence.
        </p>
        <div className="courses-grid">
          {programs.map((p, i) => (
            <div key={p.title} className="course-card reveal" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="course-card-inner">
                <div className="course-front">
                  <div className="course-img-wrap">
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <div className="course-age-badge">{p.ageGroup}</div>
                  </div>
                  <div className="course-body">
                    <h3 className="course-title">{p.title}</h3>
                    <p className="course-desc">{p.desc}</p>
                    <div className="course-meta">
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {p.schedule}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/contact" className="btn btn-primary course-btn">Enroll Now</a>
            </div>
          ))}
        </div>
        <div className="courses-footer reveal">
          <a href="/classes" className="btn btn-outline">View All Programs</a>
        </div>
      </div>
    </section>
  )
}
