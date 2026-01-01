import React, { useEffect, useState, useRef } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import FloatingContact from './components/ui/FloatingContact';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import Community from './components/sections/Community';
import FeaturedMenu from './components/sections/FeaturedMenu';
import Expansion from './components/sections/Expansion';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FullMenu from './components/pages/FullMenu';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import IntroOverlay from './components/layout/IntroOverlay';
import { HERO_CONTENT } from './data/content';

const App: React.FC = () => {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'privacy'
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const isMounted = useRef(false);

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      setCurrentPage(e.state?.page || 'home');
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial state
    if (!window.history.state) {
      window.history.replaceState({ page: 'home' }, '', '/');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle internal navigation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.getAttribute('href') === '/privacy') {
        e.preventDefault();
        setCurrentPage('privacy');
        window.history.pushState({ page: 'privacy' }, '', '/privacy');
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // Robust Loader Logic
  useEffect(() => {
    isMounted.current = true;
    window.scrollTo(0, 0);

    const handleReady = async () => {
      if (document.readyState !== 'complete') {
        await new Promise(resolve => window.addEventListener('load', resolve, { once: true }));
      }

      if (document.fonts) {
        await document.fonts.ready;
      }

      const heroImg = new Image();
      heroImg.src = HERO_CONTENT.heroImage.url;

      await new Promise((resolve) => {
        if (heroImg.complete) resolve(true);
        heroImg.onload = () => resolve(true);
        heroImg.onerror = () => resolve(true);
      });

      requestAnimationFrame(() => {
        if (isMounted.current) {
          setTimeout(() => {
            if (isMounted.current) {
              setLoading(false);
              // Small delay to allow loader to exit before showing content transition
              setTimeout(() => setContentVisible(true), 100);
            }
          }, 1000);
        }
      });
    };

    handleReady();

    return () => {
      isMounted.current = false;
    };
  }, []);

  // Scroll locking
  useEffect(() => {
    if (loading || isFullMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading, isFullMenuOpen]);

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.history.pushState({ page: 'home' }, '', '/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-pop-cream text-black min-h-screen selection:bg-pop-pink selection:text-black">
      <CustomCursor />

      {/* Navbar with simple fade in - hide on privacy page */}
      {currentPage === 'home' && (
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
        </div>
      )}

      {/* Loader */}
      {loading && <IntroOverlay isExiting={!loading} />}

      {/* Privacy Policy Page */}
      {currentPage === 'privacy' && !loading && (
        <div className={`w-full relative transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <PrivacyPolicy onBack={handleBackToHome} />
        </div>
      )}

      {/* Main Content */}
      {currentPage === 'home' && (
        <main
          className={`w-full relative transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ display: loading ? 'none' : 'block' }}
        >
          <Hero />
          <Manifesto />
          <FeaturedMenu onOpenFullMenu={() => setIsFullMenuOpen(true)} />
          <Community />
          <Expansion />
          <Contact />
          <Footer />
        </main>
      )}

      {!loading && currentPage === 'home' && <FloatingContact />}

      <FullMenu isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
    </div>
  );
};

export default App;