import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand-col">
          <div className="footer-brand">
            <img src="/pictures/ASHA Pre-School.png" alt="Logo" className="footer-logo" />
            <span className="footer-brand-text">
              ASHA Pre-School
            </span>
          </div>
          <p className="footer-desc">
            Where little minds bloom. Providing quality early childhood education
            in a warm, loving environment since 10 years ago.
          </p>
          <div className="footer-contact">
            <p>
              37 Nana St, Braamfischerville, Roodepoort, 1725
            </p>
            <p>
              <a href="tel:+27835301618">083 530 1618</a>
            </p>
            <p>
              <a href="mailto:info@ashapreschool.co.za">info@ashapreschool.co.za</a>
            </p>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/classes">Our Programs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Working Hours</h4>
          <ul className="footer-hours-list">
            <li><span>Monday – Friday</span><span>07:00 – 16:00</span></li>
            <li><span>Saturday</span><span>Closed</span></li>
            <li><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ASHA Pre-School. All rights reserved.</p>
          <p className="footer-bottom-tagline">Made with <span className="footer-heart">&hearts;</span> for every child</p>
        </div>
      </div>
    </footer>
  )
}
