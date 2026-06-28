import './Team.css'

const team = [
  { name: 'Nomsa Mokoena', role: 'Lead Teacher — Creative Arts & Life Skills', email: 'nomsa@ashapreschool.co.za', initials: 'NM' },
  { name: 'Thabo Ndlovu', role: 'Teacher — Play, Music & Movement', email: 'thabo@ashapreschool.co.za', initials: 'TN' },
  { name: 'Lindiwe Zulu', role: 'Teacher — Morning Ring & Literacy', email: 'lindiwe@ashapreschool.co.za', initials: 'LZ' },
  { name: 'Sipho Khumalo', role: 'Center Principal', email: 'sipho@ashapreschool.co.za', initials: 'SK' },
]

export default function Team() {
  return (
    <section className="section team">
      <div className="container">
        <h5 className="section-label reveal">Our Dream Team</h5>
        <h2 className="section-title reveal">Meet Our Caring Educators</h2>
        <p className="section-subtitle reveal">
          Passionate, qualified, and dedicated to giving your child the best start in life.
        </p>
        <div className="team-grid">
          {team.map((t, i) => (
            <div key={t.name} className="team-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="team-avatar" style={{ background: i % 2 === 0 ? 'var(--gold)' : 'var(--chocolate)' }}>
                {t.initials}
              </div>
              <h3 className="team-name">{t.name}</h3>
              <p className="team-role">{t.role}</p>
              <a href={`mailto:${t.email}`} className="team-email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {t.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
