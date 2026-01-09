
import React, { useState, useEffect } from 'react';
import { 
  Navbar, 
  Hero, 
  Features, 
  AppShowcase, 
  FloatingAIChat, 
  PricingSection,
  Mission,
  Footer,
  PricingPage,
  JoinUsPage,
  DownloadAppSection
} from './components/Sections';
import { BackgroundEffects } from './components/Visuals';

export type PageView = 'home' | 'pricing' | 'join';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="relative min-h-screen selection:bg-pink-100 selection:text-[#eb5e9d]">
      <BackgroundEffects />
      <Navbar scrolled={scrolled} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="transition-all duration-500 animate-in fade-in">
        {currentPage === 'home' && (
          <>
            <Hero onJoin={() => setCurrentPage('join')} />
            <Mission />
            <Features />
            <AppShowcase />
            <PricingSection 
              onSeeDetails={() => setCurrentPage('pricing')} 
              onJoin={() => setCurrentPage('join')}
            />
            <DownloadAppSection />
          </>
        )}

        {currentPage === 'pricing' && (
          <PricingPage onJoin={() => setCurrentPage('join')} />
        )}

        {currentPage === 'join' && (
          <JoinUsPage />
        )}
      </main>

      <FloatingAIChat />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
