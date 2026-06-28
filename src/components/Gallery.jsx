import { useState, useEffect, useCallback } from 'react'
import './Gallery.css'

const galleryImages = [
  { src: '/pictures/Best Care.png', alt: 'Kids playing together' },
  { src: '/pictures/Creative arts.png', alt: 'Arts and crafts' },
  { src: '/pictures/Reading and tThinking Skills.PNG', alt: 'Story time' },
  { src: '/pictures/Outdoor Games.png', alt: 'Outdoor play' },
  { src: '/pictures/Pj party.png', alt: 'Pyjama party' },
  { src: '/pictures/Pj party2.png', alt: 'Pyjama party fun' },
  { src: '/pictures/Funday1.png', alt: 'Fun day activities' },
  { src: '/pictures/Funday2.png', alt: 'Fun day celebration' },
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  const openLightbox = (idx) => {
    setCurrentIdx(idx)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, closeLightbox, goNext, goPrev])

  return (
    <section className="section gallery">
      <div className="container">
        <h5 className="section-label reveal">Memories</h5>
        <h2 className="section-title reveal">Our Fun Gallery</h2>
        <p className="section-subtitle reveal">
          A glimpse into the joyful moments and activities at ASHA Pre-School.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item reveal ${i === 0 ? 'gallery-span-2' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev() }} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <img
            className="lightbox-img"
            src={galleryImages[currentIdx].src}
            alt={galleryImages[currentIdx].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext() }} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <div className="lightbox-counter">{currentIdx + 1} / {galleryImages.length}</div>
        </div>
      )}
    </section>
  )
}
