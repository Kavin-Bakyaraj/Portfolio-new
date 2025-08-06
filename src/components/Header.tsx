import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
      
      // Better section detection
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentPos = currentScroll + 150; // Increased offset for better detection
      
      // Find the section that's most visible
      let activeSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionCenter = offsetTop + offsetHeight / 2;
          
          if (currentPos >= offsetTop && currentPos < offsetTop + offsetHeight) {
            activeSection = section;
            break;
          }
          // If we're past the section center, it's the active one
          if (currentPos >= sectionCenter && currentPos < sectionCenter + offsetHeight) {
            activeSection = section;
          }
        }
      }
      
      // Only update if different to prevent unnecessary re-renders
      if (activeSection !== currentSection) {
        setCurrentSection(activeSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setCurrentSection, currentSection]);

  // Handle page load animations and scroll to top
  useEffect(() => {
    // Remove any hash from URL and scroll to top on page load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);
    setCurrentSection('home');
    
    // Additional scroll to top after a delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [setCurrentSection]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      try {
        const elementTop = element.offsetTop;
        const headerHeight = window.innerWidth < 768 ? 70 : 80; // Smaller header height on mobile
        const targetPosition = Math.max(0, elementTop - headerHeight);
        
        // Update section immediately for instant navbar feedback
        setCurrentSection(sectionId);
        
        // Close mobile menu first
        setIsMenuOpen(false);
        
        // For mobile devices, use a different approach
        if (window.innerWidth < 768) {
          // Mobile scroll - more aggressive approach
          setTimeout(() => {
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }, 100); // Small delay to allow menu to close
        } else {
          // Desktop scroll
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
        
      } catch (error) {
        console.log('Scroll error:', error);
        // Fallback for mobile
        setIsMenuOpen(false);
        setTimeout(() => {
          window.location.hash = href;
        }, 100);
      }
    } else {
      console.log('Element not found:', sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-black/40 border-b border-white/20 shadow-2xl'
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative cursor-pointer"
          >
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              KAVIN B
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {currentSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-3">
              {/* Resume download */}
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                href="/Ats Resume.pdf"
                download
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-full font-medium hover:opacity-90 transition-opacity duration-200 text-sm"
              >
                <Download size={14} />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Resume Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              href="/Ats Resume.pdf"
              download
              className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
            </motion.a>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ touchAction: 'manipulation' }}
              className="p-2 text-white bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    style={{ touchAction: 'manipulation' }}
                    className={`mobile-nav-button block w-full text-left px-6 py-3 transition-all duration-200 ${
                      currentSection === item.href.slice(1)
                        ? 'text-white bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  href="/Ats Resume.pdf"
                  download
                  style={{ touchAction: 'manipulation' }}
                  className="mobile-nav-button flex items-center space-x-2 mx-6 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;