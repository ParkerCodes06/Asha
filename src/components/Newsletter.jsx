import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="newsletter-content reveal">
          <h2 className="newsletter-title">Stay in the Loop!</h2>
          <p className="newsletter-desc">
            Subscribe for updates on activities, events, and early childhood tips.
          </p>
          <form className={`newsletter-form ${subscribed ? 'subscribed' : ''}`} onSubmit={handleSubmit}>
            <div className="newsletter-input-wrap">
              <svg className="newsletter-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-chocolate">
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          {subscribed && <p className="newsletter-toast">You're subscribed! Welcome to the family.</p>}
        </div>
      </div>
    </section>
  )
}
