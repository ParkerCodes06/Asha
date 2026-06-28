import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const words = ['Joy', 'Love', 'Learning', 'Growth', 'Happiness']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, charIdx + 1))
        setCharIdx(charIdx + 1)
      }, 100)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, charIdx - 1))
        setCharIdx(charIdx - 1)
      }, 50)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((wordIdx + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx])

  return (
    <section className="hero">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <h5 className="hero-label reveal">Welcome to ASHA Pre-School</h5>
          <h1 className="hero-title reveal">
            Where{' '}
            <span className="hero-typed-wrap">
              {typed}
              <span className="hero-cursor">|</span>
            </span>{' '}
            <br />Meets Education
          </h1>
          <p className="hero-desc reveal">
            ASHA Pre-School provides a warm, nurturing environment where
            children from 0–6 years explore, learn, and grow. We sow seeds of knowledge
            through play, creativity, and loving care.
          </p>
          <div className="hero-btns reveal">
            <Link to="/about" className="btn btn-primary">
              Discover More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
        <div className="hero-visual reveal-right">
          <div className="hero-img-frame">
            <div className="hero-img-glow"></div>
              <img
              src="/pictures/ASHA Pre-School.png"
              alt="Children playing together"
              className="hero-img"
              loading="eager"
              width="500" height="500"
            />
          </div>
          <div className="hero-badge badge-1">
            <span>Creative Play</span>
          </div>
          <div className="hero-badge badge-2">
            <span>Early Learning</span>
          </div>
        </div>
      </div>
    </section>
  )
}
