import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaTag, FaCommentDots, FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = '27712202716';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Pulset Kids Academy!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const fieldStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    background: '#f8f9fa',
    border: '2px solid #e9ecef',
    borderRadius: 12,
    padding: '0 15px',
    transition: 'border-color 0.3s',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 0',
    border: 'none',
    background: 'transparent',
    fontSize: 26,
    fontFamily: "'Montserrat', sans-serif",
    outline: 'none',
    color: '#2D3047',
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#fff',
        borderRadius: 20,
        padding: 40,
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        borderTop: '4px solid #C8962E',
      }}
    >
      <h3 style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: 34,
        color: '#2D3047',
        marginBottom: 25,
      }}>
        Send Us a Message
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 15,
      }}>
        <div style={fieldStyle}>
          <FaUser style={{ color: '#C8962E', fontSize: 22, flexShrink: 0 }} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <FaEnvelope style={{ color: '#2196F3', fontSize: 22, flexShrink: 0 }} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            required
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <FaPhone style={{ color: '#4CAF50', fontSize: 22, flexShrink: 0 }} />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <FaTag style={{ color: '#E44993', fontSize: 22, flexShrink: 0 }} />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{
        ...fieldStyle,
        marginTop: 15,
        alignItems: 'flex-start',
        paddingTop: 10,
      }}>
        <FaCommentDots style={{ color: '#C8962E', fontSize: 22, flexShrink: 0, marginTop: 10 }} />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write Your Message *"
          required
          rows={5}
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: 100,
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: 20,
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#fff',
          fontFamily: "'Fredoka One', cursive",
          fontSize: 28,
          padding: '14px 40px',
          borderRadius: 25,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          transition: 'transform 0.3s, box-shadow 0.3s',
          boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,0.3)';
        }}
      >
        Send via WhatsApp <FaWhatsapp />
      </button>
    </motion.form>
  );
}
