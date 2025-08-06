import React, { useState, useEffect, useRef } from 'react';
import { Waves } from './components/ui/Waves';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TracingBeam } from './components/TracingBeam';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Global Waves background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Waves className="w-full h-full" />
      </div>

      <div ref={scrollContainerRef} className="relative z-10">
        <TracingBeam className="px-0">
          <Header 
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          
          <main>
            <Hero setCurrentSection={setCurrentSection} />
            <About setCurrentSection={setCurrentSection} />
            <Skills setCurrentSection={setCurrentSection} />
            <Experience setCurrentSection={setCurrentSection} />
            <Projects setCurrentSection={setCurrentSection} />
            <Certifications setCurrentSection={setCurrentSection} />
            <Contact setCurrentSection={setCurrentSection} />
          </main>
          
        </TracingBeam>
      </div>

      {/* Global styles for smooth interactions */}
      <style>{`
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        body {
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
        }
        
        /* Smooth focus transitions */
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          transition: outline 0.2s ease;
        }
        
        /* Performance optimizations */
        .will-change-transform {
          will-change: transform;
        }
        
        .will-change-opacity {
          will-change: opacity;
        }
        
        /* Backdrop blur fallback */
        @supports not (backdrop-filter: blur(10px)) {
          .backdrop-blur-md {
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>
    </div>
  );
}

export default App;