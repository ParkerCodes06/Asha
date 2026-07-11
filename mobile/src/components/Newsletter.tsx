import { useState } from 'react';
import { useToast } from './Toast';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function EnvelopeIcon() {
  return (
    <div className="envelope-icon" style={{ display: 'inline-block', marginBottom: 12 }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#fff" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" />
        <path d="M2 6l10 7 10-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="5" r="3" fill="#4CAF50" />
      </svg>
    </div>
  );
}

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setTimeout(() => {
      showToast('Subscribed successfully!', 'success');
      setEmail('');
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section ref={ref} style={{ background: 'linear-gradient(135deg, #C8962E 0%, #e0b84d 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Floating shapes */}
      <div
        className="float-shape float-shape-1"
        style={{
          top: -30,
          left: -30,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        className="float-shape float-shape-2"
        style={{
          bottom: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
        }}
      />
      <div
        className="float-shape float-shape-3"
        style={{
          top: '40%',
          right: '10%',
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
        }}
      />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className={isVisible ? 'animate-fade-in-up delay-0' : ''} style={{ opacity: isVisible ? undefined : 0 }}>
          <EnvelopeIcon />
        </div>
        <h2
          className={isVisible ? 'animate-fade-in-up delay-1' : ''}
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 22,
            color: '#fff',
            marginBottom: 8,
            opacity: isVisible ? undefined : 0,
          }}
        >
          Subscribe to Our Newsletter
        </h2>
        <p
          className={isVisible ? 'animate-fade-in-up delay-2' : ''}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.9)',
            marginBottom: 24,
            opacity: isVisible ? undefined : 0,
          }}
        >
          Stay updated with our latest activities and programs.
        </p>
        {submitted ? (
          <div
            className="animate-bounce-in"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: 14,
              padding: '16px 24px',
              color: '#fff',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            &#10003; You&apos;re subscribed!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={isVisible ? 'animate-fade-in-up delay-3' : ''}
            style={{ display: 'flex', gap: 10, maxWidth: 400, margin: '0 auto', opacity: isVisible ? undefined : 0 }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 18px',
                borderRadius: 14,
                border: '2px solid rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                outline: 'none',
                color: '#fff',
                minHeight: 48,
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
            <button
              type="submit"
              disabled={submitting}
              className="btn-ripple"
              style={{
                background: '#2D3047',
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                padding: '0 24px',
                fontFamily: "'Fredoka One', cursive",
                fontSize: 13,
                cursor: submitting ? 'wait' : 'pointer',
                whiteSpace: 'nowrap',
                minHeight: 48,
                opacity: submitting ? 0.7 : 1,
                transition: 'opacity 0.3s',
                animation: !submitting ? 'glowPulse 3s ease-in-out infinite' : 'none',
              }}
            >
              {submitting ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
