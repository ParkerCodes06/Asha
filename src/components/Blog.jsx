import { useState } from 'react'
import './Blog.css'

const posts = [
  {
    date: '15 May',
    img: '/pictures/Creative arts.png',
    title: 'Fun Art Activities for Toddlers',
    desc: 'Creative painting, finger painting, and sensory art that helps develop fine motor skills and self-expression in young children.',
    fullDesc: 'Creative painting, finger painting, and sensory art that helps develop fine motor skills and self-expression in young children. Our teachers guide each child to explore colors and textures in a safe, fun environment.',
    author: 'Teacher Nomsa',
    comments: 2,
  },
  {
    date: '8 May',
    img: '/pictures/Pj party.png',
    title: 'Building Social Skills Through Play',
    desc: 'Group activities and cooperative games help children learn sharing, empathy, and communication from an early age.',
    fullDesc: 'Group activities and cooperative games help children learn sharing, empathy, and communication from an early age. Our structured play sessions are designed to build confidence and friendship.',
    author: 'Teacher Thabo',
    comments: 1,
  },
  {
    date: '1 May',
    img: '/pictures/Nutritious food.png',
    title: 'Healthy Eating for Little Ones',
    desc: 'Tips and tricks for encouraging healthy eating habits in children, featuring our nutritious meal plans.',
    fullDesc: 'Tips and tricks for encouraging healthy eating habits in children, featuring our nutritious meal plans. We believe good nutrition fuels growing minds and bodies.',
    author: 'Teacher Lindiwe',
    comments: 3,
  },
]

export default function Blog() {
  const [expanded, setExpanded] = useState({})

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <section className="section blog">
      <div className="container">
        <h5 className="section-label reveal">Our Blog</h5>
        <h2 className="section-title reveal">News & Updates</h2>
        <p className="section-subtitle reveal">
          Tips, stories, and updates from the ASHA Pre-School community.
        </p>
        <div className="blog-grid">
          {posts.map((p, i) => {
            const isExpanded = expanded[i]
            return (
              <article key={p.title} className="blog-card reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="blog-date">{p.date}</div>
                <div className="blog-img-wrap">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="blog-body">
                  <h3 className="blog-title">{p.title}</h3>
                  <p className="blog-desc">
                    {isExpanded ? p.fullDesc : p.desc}
                  </p>
                  <button className="blog-readmore" onClick={() => toggleExpand(i)}>
                    {isExpanded ? 'Show Less' : 'Read More'}
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  <div className="blog-meta">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                      {p.author}
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      {p.comments} Comment{p.comments > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
