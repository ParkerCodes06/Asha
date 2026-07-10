import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const faqs = [
  { q: 'What age groups do you accept?', a: 'We accept children from 0 to 6 years old, with age-appropriate programs for each stage.' },
  { q: 'Do you provide meals?', a: 'Yes! We serve fresh, nutritious breakfast, lunch, and snacks daily. Special dietary needs are accommodated.' },
  { q: 'Is transportation available?', a: 'Absolutely. We offer safe, monitored transportation with child safety seats and trained drivers.' },
  { q: 'What are your operating hours?', a: 'We are open Monday to Friday from 07:00 to 16:00.' },
  { q: 'How do I enroll my child?', a: 'You can contact us via phone, email, or visit the center for a tour. We will guide you through the simple enrollment process.' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', accepted: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email address'
    if (!formData.message.trim()) errs.message = 'Message is required'
    if (!formData.accepted) errs.accepted = 'Please accept the terms'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '', accepted: false })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="breadcrumb"><Link to="/">Home</Link> <span className="breadcrumb-sep">›</span> Contact</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h5 className="section-label" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>Get in Touch</h5>
            <h2 className="section-title" style={{ textAlign: 'left' }}>We'd Love to Hear From You</h2>
            <p className="contact-subtitle">
              Have a question or want to enroll your child? Reach out to us!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div>
                  <h4>Address</h4>
                  <p>37 Nana St, Braamfischerville, Roodepoort, 1725</p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>Phone Number</h4>
                  <p><a href="tel:+27835301618">083 530 1618</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:info@ashapreschool.co.za">info@ashapreschool.co.za</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <h4>Work Time</h4>
                  <p>Mon – Fri: 07:00 – 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <div className="form-row">
              <div className="form-field">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>
            <div className="form-field">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
              />
            </div>
            <div className="form-field">
              <textarea
                placeholder="Your Message *"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>
            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={formData.accepted}
                onChange={(e) => handleChange('accepted', e.target.checked)}
              />
              Accept terms and privacy policy
              {errors.accepted && <span className="form-error" style={{ display: 'inline', marginLeft: 8 }}>{errors.accepted}</span>}
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <h5 className="section-label reveal">FAQ</h5>
          <h2 className="section-title reveal">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item reveal ${openFaq === i ? 'faq-open' : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer" style={{ maxHeight: openFaq === i ? '300px' : '0' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
