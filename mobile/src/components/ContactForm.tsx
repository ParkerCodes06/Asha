import { useState } from 'react';
import { useToast } from './Toast';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const validate = () => {
    const errs: Record<string, string> = {};
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
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      showToast('Message sent successfully!', 'success');
      setSubmitted(true);
      setSubmitting(false);
    }, 1000);
  };

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: 32,
        background: 'linear-gradient(135deg, #f8f6f0, #fff)',
        borderRadius: 16,
        animation: 'bounceIn 0.5s ease-out',
      }}>
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

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: `2px solid ${errors[field] ? '#f44336' : '#e0e0e0'}`,
    background: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxSizing: 'border-box' as const,
  });

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle('name')}
        />
        {errors.name && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#f44336', marginTop: 4, display: 'block' }}>{errors.name}</span>}
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle('email')}
        />
        {errors.email && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#f44336', marginTop: 4, display: 'block' }}>{errors.email}</span>}
      </div>
      <div>
        <input
          type="tel"
          placeholder="Your Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={inputStyle('phone')}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{
            ...inputStyle('message'),
            resize: 'vertical' as const,
          }}
        />
        {errors.message && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#f44336', marginTop: 4, display: 'block' }}>{errors.message}</span>}
      </div>
      <button
        type="submit"
        className="btn-primary btn-ripple"
        disabled={submitting}
        style={{ marginTop: 4, opacity: submitting ? 0.7 : 1 }}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
