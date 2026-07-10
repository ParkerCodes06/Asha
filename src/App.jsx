import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Classes from './pages/Classes'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`back-to-top ${show ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  )
}

function ScrollReveal() {
  const { pathname } = useLocation()
  const observerRef = useRef(null)

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
        if (!el.classList.contains('visible')) {
          observerRef.current?.observe(el)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observerRef.current?.disconnect()
    }
  }, [pathname])

  return null
}

function CounterAnimation() {
  const { pathname } = useLocation()
  const observerRef = useRef(null)

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = parseInt(el.dataset.target, 10)
            let current = 0
            const increment = Math.ceil(target / 40)
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              el.textContent = current
            }, 40)
            observerRef.current?.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    const timer = setTimeout(() => {
      document.querySelectorAll('.stat-number').forEach((el) => {
        el.textContent = '0'
        observerRef.current?.observe(el)
      })
    }, 200)

    return () => {
      clearTimeout(timer)
      observerRef.current?.disconnect()
    }
  }, [pathname])

  return null
}

function PageTransition({ children }) {
  const { pathname } = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('enter')
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (pathname !== prevPath.current) {
      setTransitionStage('exit')
      prevPath.current = pathname
    }
  }, [pathname])

  useEffect(() => {
    if (transitionStage === 'exit') {
      const timer = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage('enter')
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [transitionStage, children])

  useEffect(() => {
    setDisplayChildren(children)
    setTransitionStage('enter')
  }, [children])

  return (
    <div className={`page-transition page-${transitionStage}`}>
      {displayChildren}
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <CounterAnimation />
      <BackToTop />
      <Navbar />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
