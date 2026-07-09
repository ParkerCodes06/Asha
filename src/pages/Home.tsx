import { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Gallery from '../components/Gallery';
import WhyChoose from '../components/WhyChoose';
import Team from '../components/Team';
import CTA from '../components/CTA';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';
import Lightbox from '../components/Lightbox';
import { courses, team, galleryImages } from '../data/siteData';

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  };

  return (
    <>
      <Hero />
      <Features />
      <Courses
        courses={courses}
        subtitle="Our Distinguished Programmes"
        title="Curated Learning "
        highlight="Experiences"
        viewAll
      />
      <Gallery onImageClick={openLightbox} />
      <WhyChoose />
      <Team
        members={team}
        subtitle="Meet Our Visionaries"
        title="The Minds Behind "
        highlight="Your Child's Journey"
      />
      <CTA />
      <Blog />
      <Newsletter />
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
