import { useState } from 'react'
import { Link } from 'react-router-dom'
import Courses from '../components/Courses'
import './Classes.css'

const tabs = [
  { id: 'all', label: 'All Activities' },
  { id: 'play', label: 'Play & Fun' },
  { id: 'learn', label: 'Learning' },
  { id: 'events', label: 'Events' },
]

const activities = [
  { title: 'Pyjama Party Night', desc: 'Children enjoy book stories, cartoons, and cozy fun every Friday night.', tag: 'play' },
  { title: 'Math Explorers', desc: 'Fun math sessions using tablets, puzzles, and hands-on activities.', tag: 'learn' },
  { title: 'Sports & Games', desc: 'Sports group visits with other pre-schools for friendly matches and team building.', tag: 'play' },
  { title: 'Clean & Green', desc: 'Environment awareness projects where children learn about cleanliness and nature.', tag: 'learn' },
  { title: 'Music & Dance', desc: 'Singing, dancing, and musical instrument play to develop rhythm and expression.', tag: 'play' },
  { title: 'Story Time', desc: 'Interactive storytelling sessions that spark imagination and build vocabulary.', tag: 'learn' },
  { title: 'Family Fun Day', desc: 'Annual family event with games, food, and activities for parents and children.', tag: 'events' },
]

const schedule = [
  { time: '07:00 – 08:00', activity: 'Arrival & Free Play', ageGroup: 'All Ages' },
  { time: '08:00 – 09:00', activity: 'Morning Ring & Greetings', ageGroup: 'All Ages' },
  { time: '08:00 – 09:00', activity: 'Creative Activities', ageGroup: '2–4 Years' },
  { time: '09:00 – 10:00', activity: 'Outdoor Play & Sports', ageGroup: 'All Ages' },
  { time: '10:00 – 11:00', activity: 'Snack Time & Rest', ageGroup: 'All Ages' },
  { time: '11:00 – 12:00', activity: 'Literacy & Numeracy', ageGroup: '3–6 Years' },
  { time: '12:00 – 13:00', activity: 'Lunch & Quiet Time', ageGroup: 'All Ages' },
  { time: '13:00 – 14:00', activity: 'Music, Dance & Play', ageGroup: 'All Ages' },
  { time: '14:00 – 15:00', activity: 'Afternoon Snack', ageGroup: 'All Ages' },
  { time: '15:00 – 16:00', activity: 'Structured Play & Departure', ageGroup: 'All Ages' },
]

export default function Classes() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all' ? activities : activities.filter((a) => a.tag === activeTab)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Classes</h1>
          <p className="breadcrumb"><Link to="/">Home</Link> <span className="breadcrumb-sep">›</span> Classes</p>
        </div>
      </section>

      {/* Tabbed Activities */}
      <section className="section">
        <div className="container">
          <h5 className="section-label reveal">Fun Activities</h5>
          <h2 className="section-title reveal">Your Child Will Love Our Activities</h2>
          <p className="section-subtitle reveal">
            Every day is an adventure at ASHA Pre-School. Here's what we offer!
          </p>

          <div className="tabs reveal">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="activities-grid">
            {filtered.map((a) => (
              <div key={a.title} className="activity-card reveal">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section schedule-section" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <h5 className="section-label reveal">Daily Routine</h5>
          <h2 className="section-title reveal">A Day at ASHA Pre-School</h2>
          <p className="section-subtitle reveal">
            Our daily schedule balances learning, play, rest, and meals.
          </p>
          <div className="schedule reveal">
            <div className="schedule-header">
              <span>Time</span>
              <span>Activity</span>
              <span>Age Group</span>
            </div>
            {schedule.map((s, i) => (
              <div key={i} className={`schedule-row ${i % 2 === 0 ? 'even' : 'odd'}`}>
                <span className="schedule-time">{s.time}</span>
                <span className="schedule-activity">{s.activity}</span>
                <span className="schedule-age">{s.ageGroup}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Courses />
    </>
  )
}
