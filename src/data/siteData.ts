import type { TeamMember, Course, BlogPost, Activity, Feature, NavLink } from '../types';

export const siteName = 'Pulset Kids Academy Kids Academy';
export const siteEmail = 'pulsetka@gmail.com';
export const sitePhone = '071 220 2716';
export const sitePhoneFull = '+27 71 220 2716';
export const siteAddress = '12 Motlhatswa Street, Extension 6, Atteridgeville, Pretoria, 0008, South Africa';
export const siteHours = 'Mon – Fri: 5am - 6pm';

export const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/classes', label: 'Classes' },
  { path: '/contact', label: 'Contact' },
];

export const features: Feature[] = [
  { icon: 'FaCheckCircle', title: 'Transportation', description: '' },
  { icon: 'FaCheckCircle', title: 'Nutritious Food', description: '' },
  { icon: 'FaCheckCircle', title: 'Outdoor Games', description: '' },
  { icon: 'FaCheckCircle', title: 'Best Care', description: '' },
];

export const courses: Course[] = [
  {
    title: 'Creative Arts',
    description: 'Exploring creativity through painting, drawing, crafts, and self-expression activities.',
    lessons: 13,
    students: 10,
    teachers: 'Khosi Majola, Londiwe Mbuqe',
    image: '/images/course-creative-arts.png',
    badge: 'Arts',
  },
  {
    title: 'Reading – Bedtime Stories',
    description: 'Thinking Skills. Building early literacy skills through engaging story time.',
    lessons: 15,
    students: 25,
    teachers: 'Nosipho Majola, Londiwe Mbuqe',
    image: '/images/course-reading.png',
    badge: 'Literacy',
    badgeColor: '#f05c5c',
  },
  {
    title: 'Play – Dress Up',
    description: 'Physical Play, Structured Games. Building coordination through play.',
    lessons: 30,
    students: 20,
    teachers: 'Khosi Majola, Londiwe Mbuqe',
    image: '/images/course-play.png',
    badge: 'Play',
    badgeColor: '#0986c0',
  },
];

export const classCourses: Course[] = [
  {
    title: 'Pre-school Class Aged 4–7',
    description: 'A solid foundation for formal schooling through play-based learning.',
    lessons: 13,
    students: 34,
    teachers: 'Lindiwe Mbuqe, Khosi Majola',
    image: '/images/course-preschool-4-7.png',
    badge: 'R500',
  },
  {
    title: 'Pre-School aged 0–3',
    description: 'Early stimulation and care for our youngest learners.',
    lessons: 15,
    students: 25,
    teachers: 'Nosipho Majola, Londiwe Mbuqe',
    image: '/images/course-preschool-0-3.png',
    badge: 'R600',
    badgeColor: '#f05c5c',
  },
  {
    title: 'Color Match Class',
    description: 'Fun and interactive color recognition activities.',
    lessons: 30,
    students: 34,
    teachers: 'Khosi Majola',
    image: '/images/course-play.png',
    badge: 'Part of the package',
    badgeColor: '#0986c0',
  },
];

export const team: TeamMember[] = [
  { name: 'Khosi Majola', role: 'Craft Work, Life Skills, Computer Skills', description: 'Craft Work, Life Skills, Computer Skills', email: 'Khosi@pulsetkids.co.za', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80' },
  { name: 'Phyllis Munetsi', role: 'Play, Verbal Training, Health', description: 'Play, Verbal Training, Health', email: 'Phyllis@pulsetkids.co.za', image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&q=80' },
  { name: 'Londiwe Mbuqe', role: 'Morning Ring, Creative Activities, Music & Life Skills', description: 'Morning Ring, Creative Activities, Music & Life Skills', email: 'Londiwe@pulsetkids.co.za', image: 'https://images.unsplash.com/photo-1592621385612-c4d22c9de4f4?w=200&q=80' },
  { name: 'Busisiwe Jerminah Majola', role: 'Pre-School Principal', description: 'Pre-School Principal', email: 'Busisiwe@pulsetkids.co.za', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80' },
];

export const aboutTeam: TeamMember[] = [
  { name: 'Khosi Majola', role: 'Craft Work, Life Skills', description: 'Craft Work, Life Skills', email: 'Khosi@pulsetkids.co.za', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80' },
  { name: 'Londiwe Mbuqe', role: 'Health, Computer & Life Skills', description: 'Health, Computer & Life Skills', email: 'Londiwe@pulsetkids.co.za', image: 'https://images.unsplash.com/photo-1592621385612-c4d22c9de4f4?w=200&q=80' },
  { name: 'Busisiwe Jerminah Majola', role: 'School Principal', description: 'School Principal', email: 'Busisiwe@pulsetkids.co.za', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80' },
];

export const blogPosts: BlogPost[] = [
  {
    date: '10 Jan',
    title: 'Full-Day Session With New Activities',
    description: 'Pulset Kids Academy provides Creative activities / free indoor play, includes also constructive play.',
    image: '/images/blog-activities.png',
    author: 'Khosi Majola',
  },
  {
    date: '10 Oct',
    title: 'How to draw a school step by step?',
    description: 'Pulset Kids Academy provides solid foundation for beginners, through providing verbal classes and craft play.',
    image: '/images/blog-drawing.png',
    author: 'Londiwe Mbuqe',
  },
  {
    date: '14 Feb',
    title: 'Helping Your Child with Socialization',
    description: 'Pulset Kids Academy provides with socialization of children through outdoor play.',
    image: '/images/blog-socialization.png',
    author: 'Nosipho Majola',
  },
];

export const activities: Activity[] = [
  { icon: 'FaMoon', title: 'Friday Night', description: 'On this day, Pulset Kids Academy makes pyjama parties where children get to be entertained through book stories and later watch cartoons.' },
  { icon: 'FaHandHoldingHeart', title: 'Charity Hub', description: 'Pulset Kids Academy holds charity hubs 2 times a year which we get donations from our services providers and cater for children living in our community of Phomolong.' },
  { icon: 'FaCalculator', title: 'Math Club', description: 'We offer Math sessions to our pupils using tablets and paper drawings.' },
  { icon: 'FaRunning', title: 'Sports Group Visit', description: 'Pulset Kids Academy has sports group visits where we gather along with other pre-schools and have fun together.' },
  { icon: 'FaCampground', title: 'Summer Camp', description: 'Pulset Kids Academy has only one summer camp where we take a trip with our students as a form of team building.' },
  { icon: 'FaBroom', title: 'Clear & Clean', description: 'Pulset Kids Academy Practices a clear and clean environment where we take our middle aged students to participate on a clean environment project near our day care.' },
];

export const galleryImages: string[] = [
  '/images/gallery-1.png',
  '/images/gallery-2.png',
  '/images/gallery-3.png',
  '/images/gallery-4.png',
  '/images/gallery-5.png',
  '/images/gallery-6.png',
  '/images/gallery-7.png',
  '/images/gallery-8.png',
  '/images/gallery-9.png',
  '/images/gallery-10.png',
  '/images/gallery-11.png',
  '/images/gallery-12.png',
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Gallery', href: '/classes' },
  { label: 'Blog', href: '/' },
  { label: 'Contact', href: '/contact' },
];

export const footerPrograms = [
  'Pre-School',
  'Day Care',
  'After Care',
  'Holiday Care',
  'Weekend Care',
];

export const whyChooseUs = [
  {
    icon: 'teacher',
    title: 'Passionate Teachers',
    description: 'Our qualified educators are dedicated to nurturing each child\'s unique potential with love and care.',
  },
  {
    icon: 'book',
    title: 'Structured Curriculum',
    description: 'Age-appropriate programs designed to build strong foundations for lifelong learning.',
  },
  {
    icon: 'art',
    title: 'Creative Activities',
    description: 'Art, music, and play-based learning that sparks imagination and builds confidence.',
  },
  {
    icon: 'teacher',
    title: 'Safe Environment',
    description: 'A secure and stimulating space where children can explore, learn, and grow with confidence.',
  },
];
