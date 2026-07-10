import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import ScrollProgress from './components/ScrollProgress';
import OfflineBanner from './components/OfflineBanner';
import { ToastProvider } from './components/Toast';
import PageTransition from './components/PageTransition';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <OfflineBanner />
      <Header />
      <ScrollToTop />
      <main style={{ minHeight: '100vh', paddingTop: 64 }}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/mobile">
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </BrowserRouter>
  );
}
