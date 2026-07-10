import { useState, useEffect, useCallback } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    text: 'ASHA Pre-School has been a blessing for our family. My little one has grown so much socially and academically. The teachers truly care!',
    name: 'Mrs. Dlamini',
    child: 'Mother of Andile, age 4',
  },
  {
    text: 'The warm environment and structured programs are amazing. My daughter loves going to school every day. Thank you for the wonderful care!',
    name: 'Mr. Mokoena',
    child: 'Father of Lerato, age 3',
  },
  {
    text: 'I am so impressed with the progress my son has made since joining. The staff are professional, loving, and so dedicated. Highly recommend!',
    name: 'Ms. Nkosi',
    child: 'Mother of Sipho, age 5',
  },
  {
    text: 'The transportation service gives me peace of mind. Knowing my child is safe and happy at ASHA Pre-School makes my work day so much easier.',
    name: 'Mr. Van der Merwe',
    child: 'Father of Emma, age 2',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next, isPaused])

  return (
    <section className="section testimonials">
      <div className="container">
        <h5 className="section-label reveal">What Parents Say</h5>
        <h2 className="section-title reveal">Trusted by Families</h2>
        <p className="section-subtitle reveal">
          Hear from the parents who trust us with their little ones every day.
        </p>

        <div
          className="testimonial-carousel reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonial-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-slide">
                <span className="testimonial-quote">"</span>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.child}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial-arrow arrow-left" onClick={prev} aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button className="testimonial-arrow arrow-right" onClick={next} aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${current === i ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
