import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaPaperPlane } from 'react-icons/fa';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section style={{ padding: '70px 0', background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 100%)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 40,
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaSun className="icon-rotate" style={{
              fontSize: 60,
              color: '#FFD166',
              marginBottom: 15,
            }} />
            <h2 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 35,
              color: '#2D3047',
              marginBottom: 10,
            }}>
              Subscribe To Get Update
            </h2>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 16,
              color: '#696969',
              lineHeight: 1.6,
            }}>
              Get the latest news, events, and updates from Pulset Kids Academy delivered straight to your inbox.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email..."
                required
                style={{
                  flex: 1,
                  padding: '15px 25px',
                  borderRadius: 25,
                  border: '1px solid #e5e5e5',
                  fontSize: 16,
                  fontFamily: "'Montserrat', sans-serif",
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Subscribe <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
