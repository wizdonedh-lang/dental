import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutHero } from './components/AboutHero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { DoctorProfile } from './components/DoctorProfile';
import { Service3DCarousel } from './components/Service3DCarousel';
import { CarePhilosophy } from './components/CarePhilosophy';
import { SmartBooking } from './components/SmartBooking';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { IntroAnimation } from './components/IntroAnimation';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [introComplete, setIntroComplete] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    // Handle hash navigation on page load (e.g., /#booking)
    const hash = window.location.hash;
    if (hash && currentPath === '/') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentPath, introComplete]);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    setIntroComplete(true);
  }, []);

  // Render different pages based on path
  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return (
          <>
            <Navbar currentPath={currentPath} />
            <AboutPage />
            <Footer showMap={false} />
          </>
        );
      case '/contact':
        return (
          <>
            <Navbar currentPath={currentPath} />
            <ContactPage />
            <Footer showMap={false} />
          </>
        );
      default:
        return (
          <>
            <Navbar currentPath={currentPath} />
            <main>
              <Hero />
              <AboutHero />
              <div id="features">
                <Features />
              </div>
              <div id="services">
                <Services />
              </div>
              <Service3DCarousel />
              <CarePhilosophy />
              <DoctorProfile />
              <SmartBooking />
              <div id="reviews">
                <Testimonials />
              </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
          </>
        );
    }
  };

  // Skip intro for non-home pages
  const shouldShowIntro = showIntro && currentPath === '/';

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Animation - Home page only */}
      {shouldShowIntro && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Main Content */}
      <div className={shouldShowIntro && !introComplete ? 'page-loading' : 'page-loaded'}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;