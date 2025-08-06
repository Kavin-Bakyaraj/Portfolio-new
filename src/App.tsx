import { useState, useEffect, useRef } from 'react';
import { Waves } from './components/ui/Waves';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize and ensure page starts from top
    // Remove any hash from URL and scroll to top on page load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Force scroll to top on page load/reload
    window.scrollTo(0, 0);
    setCurrentSection('home');
    
    // Additional scroll to top after a delay to ensure it works
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className="relative min-h-screen overflow-x-hidden"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Global Waves background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ touchAction: 'none' }}
      >
        <Waves className="w-full h-full" />
      </div>

      <div 
        ref={scrollContainerRef} 
        className="relative z-10"
        style={{ touchAction: 'pan-y' }}
      >
        <Header 
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        
        <main style={{ touchAction: 'pan-y' }}>
          <Hero setCurrentSection={setCurrentSection} />
          <About setCurrentSection={setCurrentSection} />
          <Skills setCurrentSection={setCurrentSection} />
          <Experience setCurrentSection={setCurrentSection} />
          <Projects setCurrentSection={setCurrentSection} />
          <Contact setCurrentSection={setCurrentSection} />
        </main>
      </div>

      {/* Basic styles only */}
      <style>{`
        /* Only essential styles */
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        
        #root {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default App;