import { useState } from 'react';
import { useToast } from './Toast';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function ConfettiParticle({ color, left, delay }: { color: string; left: string; delay: string }) {
  return (
    <div
      className="confetti-particle"
      style={{
        background: color,
        left,
        top: 0,
        animationDelay: delay,
      }}
    />
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [shakeFields, setShakeFields] = useState<string[]>([]);
  const { showToast } = useToast();

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      showToast('Please fix the errors', 'error');
      setShakeFields(Object.keys(errs));
      setTimeout(() => setShakeFields([]), 400);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      showToast('Message sent successfully!', 'success');
      setSubmitted(true);
      setSubmitting(false);
    }, 1000);
  };

  const confettiColors = ['#C8962E', '#2196F3', '#4CAF50', '#f44336', '#FF9800', '#9C27B0'];

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: 32,
        background: 'linear-gradient(135deg, #f8f6f0, #fff)',
        borderRadius: 16,
        animation: 'bounceIn 0.5s ease-out',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Confetti */}
        {confettiColors.map((color, i) => (
          <ConfettiParticle
            key={i}
            color={color}
            left={`${15 + i * 14}%`}
            delay={`${i * 0.1}s`}
          />
        ))}
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          fontSize: 28,
          color: '#fff',
        }}>
          &#10003;
        </div>
        <h3 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 20,
          color: '#2D3047',
          marginBottom: 8,
        }}>
          Thank You!
        </h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 14,
          color: '#696969',
          lineHeight: 1.5,
        }}>
          Your message has been sent. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className={`floating-label-group ${shakeFields.includes('name') ? 'shake-error' : ''}`}>
        <input
          type="text"
          placeholder=" "
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{
            width: '100%',
            padding: '18px 16px 8px',
            borderRadius: 12,
            border: `2px solid ${errors.name ? '#f44336' : '#e0e0e0'}`,
            background: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            outline: 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxSizing: 'border-box' as const,
          }}
        />
        <label>Your Name</label>
        {errors.name && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#f44336', marginTop: 4, display: 'block' }}>{errors.name}</span>}
      </div>
      <div className={`floating-label-group ${shakeFields.includes('email') ? 'shake-error' : ''}`}>
        <input
          type="email"
          placeholder=" "
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{
            width: '100%',
            padding: '18px 16px 8px',
            borderRadius: 12,
            border: `2px solid ${errors.email ? '#f44336' : '#e0e0e0'}`,
            background: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            outline: 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxSizing: 'border-box' as const,
          }}
        />
        <label>Your Email</label>
        {errors.email && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#f44336', marginTop: 4, display: 'block' }}>{errors.email}</span>}
      </div>
      <div className="floating-label-group">
        <input
          type="tel"
          placeholder=" "
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{
            width: '100%',
            padding: '18px 16px 8px',
            borderRadius: 12,
            border: '2px solid #e0e0e0',
            background: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            outline: 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxSizing: 'border-box' as const,
          }}
        />
        <label>Your Phone (optional)</label>
      </div>
      <div className={`floating-label-group ${shakeFields.includes('message') ? 'shake-error' : ''}`}>
        <textarea
          placeholder=" "
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{
            width: '100%',
            padding: '18px 16px 8px',
            borderRadius: 12,
            border: `2px solid ${errors.message ? '#f44336' : '#e0e0e0'}`,
            background: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            outline: 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxSizing: 'border-box' as const,
            resize: 'vertical' as const,
          }}
        />
        <label style={{ top: 18, transform: 'none' }}>Your Message</label>
        {errors.message && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#f44336', marginTop: 4, display: 'block' }}>{errors.message}</span>}
      </div>
      <button
        type="submit"
        className="btn-primary btn-ripple"
        disabled={submitting}
        style={{
          marginTop: 4,
          opacity: submitting ? 0.7 : 1,
          animation: !submitting ? 'glowPulse 3s ease-in-out infinite' : 'none',
        }}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
