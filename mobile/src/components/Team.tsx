import { useState } from 'react';
import type { TeamMember } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Skeleton from './Skeleton';

interface TeamProps {
  members: TeamMember[];
  subtitle?: string;
  title: string;
  highlight?: string;
}

function TeamCard({ member, index, parentVisible }: { member: TeamMember; index: number; parentVisible: boolean }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className={`card-tap ${parentVisible ? 'animate-fade-in-up' : ''}`}
      style={{
        display: 'flex',
        gap: 16,
        background: '#fff',
        borderRadius: 16,
        padding: 18,
        boxShadow: '0 2px 14px rgba(0,0,0,0.06)',
        alignItems: 'center',
        border: '1px solid rgba(200,150,46,0.06)',
        opacity: parentVisible ? undefined : 0,
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        border: '3px solid rgba(200,150,46,0.2)',
        boxShadow: '0 2px 10px rgba(200,150,46,0.1)',
      }}>
        {!imgLoaded && <Skeleton type="avatar" />}
        <img
          src={member.image}
          alt={member.name}
          onLoad={() => setImgLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: imgLoaded ? 'block' : 'none',
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 16,
          color: '#2D3047',
          marginBottom: 3,
        }}>
          {member.name}
        </h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 12,
          color: '#C8962E',
          fontWeight: 600,
          marginBottom: 6,
          lineHeight: 1.3,
        }}>
          {member.role}
        </p>
        <a
          href={`mailto:${member.email}`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 12,
            color: '#2196F3',
            textDecoration: 'none',
            borderBottom: '1px dashed #2196F3',
          }}
        >
          {member.email}
        </a>
      </div>
    </div>
  );
}

export default function Team({ members, subtitle, title, highlight }: TeamProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          {subtitle && (
            <p
              className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
              style={{ opacity: isVisible ? undefined : 0 }}
            >
              {subtitle}
            </p>
          )}
          <h2
            className={isVisible ? 'animate-fade-in-up delay-1' : ''}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            {title}<span className="highlight gradient-text">{highlight}</span>
          </h2>
          <div
            className={`divider ${isVisible ? 'animate-scale-in delay-2' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {members.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} parentVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
