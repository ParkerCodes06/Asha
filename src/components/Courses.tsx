import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaUserGraduate } from 'react-icons/fa';
import type { Course } from '../types';

interface CoursesProps {
  courses: Course[];
  subtitle?: string;
  title: string;
  highlight?: string;
  viewAll?: boolean;
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      style={{
        background: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s',
      }}
    >
      <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
        <img
          src={course.image}
          alt={course.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute',
          top: 15,
          left: 15,
          background: course.badgeColor || '#C8962E',
          color: '#fff',
          padding: '5px 15px',
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 600,
        }}>
          {course.badge}
        </span>
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 18,
          color: '#2D3047',
          marginBottom: 10,
        }}>
          {course.title}
        </h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 14,
          color: '#696969',
          marginBottom: 15,
          lineHeight: 1.6,
        }}>
          {course.description}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 15,
          borderTop: '1px solid #eee',
          fontSize: 13,
          color: '#696969',
          marginBottom: 15,
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <FaBook style={{ color: '#C8962E', fontSize: 12 }} /> {course.lessons} Lessons
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <FaUserGraduate style={{ color: '#C8962E', fontSize: 12 }} /> {course.students} Students
          </span>
        </div>
        <p style={{ fontSize: 13, color: '#696969', marginBottom: 15 }}>
          {course.teachers}
        </p>
        <Link
          to="/contact"
          className="btn-primary"
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '10px 0',
            fontSize: 14,
            textDecoration: 'none',
          }}
        >
          Enroll Now
        </Link>
      </div>
    </motion.div>
  );
}

export default function Courses({ courses, title, highlight, viewAll }: CoursesProps) {
  return (
    <section style={{ padding: '70px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2 style={{
            fontFamily: "'Gloria Hallelujah', cursive",
            fontSize: 18,
            color: '#C8962E',
            marginBottom: 5,
          }}>
            Begin your Journey at Pulset Kids Academy
          </h2>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 45,
            color: '#2D3047',
            lineHeight: 1.2,
          }}>
            {title}<span style={{ color: '#C8962E' }}>{highlight}</span>
          </h2>
          <div style={{
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #C8962E, #2196F3)',
            borderRadius: 2,
            margin: '15px auto 0',
          }} />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 25,
        }}>
          {courses.map((c, i) => (
            <CourseCard key={c.title} course={c} index={i} />
          ))}
        </div>
        {viewAll && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link
              to="/classes"
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              View All Classes
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
