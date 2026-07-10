import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface CoursesProps {
  courses: Course[];
  subtitle?: string;
  title: string;
  highlight?: string;
  viewAll?: boolean;
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`card-tap ${isVisible ? 'animate-fade-in-up' : ''}`}
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        opacity: isVisible ? undefined : 0,
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        {!imgLoaded && (
          <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />
        )}
        <img
          src={course.image}
          alt={course.title}
          onLoad={() => setImgLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            display: imgLoaded ? 'block' : 'none',
          }}
        />
        <span style={{
          position: 'absolute',
          top: 12,
          left: 12,
          background: course.badgeColor || '#C8962E',
          color: '#fff',
          padding: '5px 14px',
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          {course.badge}
        </span>
      </div>
      <div style={{ padding: 18 }}>
        <h3 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 17,
          color: '#2D3047',
          marginBottom: 8,
        }}>
          {course.title}
        </h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 13,
          color: '#696969',
          lineHeight: 1.5,
          marginBottom: 14,
        }}>
          {course.description}
        </p>
        <div style={{
          display: 'flex',
          gap: 20,
          paddingTop: 14,
          borderTop: '1px solid #f0f0f0',
          fontSize: 12,
          color: '#696969',
          marginBottom: 14,
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#C8962E"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            {course.lessons} Lessons
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#C8962E"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            {course.students} Students
          </span>
        </div>
        <p style={{ fontSize: 12, color: '#696969', marginBottom: 14, fontStyle: 'italic' }}>
          {course.teachers}
        </p>
        <Link
          to="/contact"
          className="btn-primary btn-ripple"
          style={{ textDecoration: 'none', fontSize: 13 }}
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default function Courses({ courses, title, highlight, viewAll }: CoursesProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section ref={sectionRef} style={{ background: '#fafafa' }}>
      <div className="container">
        <div className="section-title">
          <p
            className={`subtitle ${isVisible ? 'animate-fade-in-up delay-0' : ''}`}
            style={{ opacity: isVisible ? undefined : 0 }}
          >
            Begin your Journey at Pulset Kids Academy
          </p>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {courses.map((c, i) => (
            <CourseCard key={c.title} course={c} index={i} />
          ))}
        </div>

        {viewAll && (
          <div
            className={isVisible ? 'animate-fade-in-up delay-5' : ''}
            style={{ textAlign: 'center', marginTop: 28, opacity: isVisible ? undefined : 0 }}
          >
            <Link
              to="/classes"
              className="btn-secondary btn-ripple"
              style={{ textDecoration: 'none', maxWidth: 280, margin: '0 auto' }}
            >
              View All Classes
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
