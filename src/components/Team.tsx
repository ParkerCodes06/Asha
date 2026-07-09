import { motion } from 'framer-motion';
import type { TeamMember } from '../types';

interface TeamProps {
  members: TeamMember[];
  subtitle?: string;
  title: string;
  highlight?: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="teacher-card" style={{
      background: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
      position: 'relative',
    }}>
      {/* Image container - fixed height */}
      <div className="teacher-image-wrapper" style={{
        width: 150,
        height: 150,
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '20px auto 10px',
        border: '4px solid #C8962E',
        position: 'relative',
        zIndex: 2,
      }}>
        <img
          src={member.image}
          alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Details that slide down on hover */}
      <div className="teacher-details" style={{
        padding: '10px 20px 25px',
        position: 'relative',
        zIndex: 1,
      }}>
        <h3 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 16,
          color: '#2D3047',
          marginBottom: 5,
        }}>
          {member.name}
        </h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 12,
          color: '#696969',
          marginBottom: 3,
        }}>
          {member.description}
        </p>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11,
          color: '#C8962E',
        }}>
          {member.email}
        </p>
      </div>
    </div>
  );
}

export default function Team({ members, title, highlight }: TeamProps) {
  return (
    <section style={{ padding: '70px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{
            fontFamily: "'Gloria Hallelujah', cursive",
            fontSize: 18,
            color: '#C8962E',
            marginBottom: 5,
          }}>
            Together We can Contribute
          </h2>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 45,
            color: '#2D3047',
            lineHeight: 1.2,
          }}>
            {title}<span style={{ color: '#C8962E' }}>{highlight}</span>
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(members.length, 4)}, 1fr)`,
          gap: 25,
        }}>
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TeamCard member={m} />
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <p style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 18,
            color: '#2D3047',
          }}>
            With {members.length} Qualified Teachers <a href="#" style={{ color: '#C8962E', textDecoration: 'underline' }}>View All Here&gt;</a>
          </p>
        </div>
      </div>
    </section>
  );
}
