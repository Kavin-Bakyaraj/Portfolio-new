import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { LinkPreview } from "./ui/link-preview";

interface HeroProps {
  setCurrentSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentSection }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Animated counter for stats
  const statsAnimation = useSpring({
    from: { projects: 0, experience: 0, skills: 0 },
    to: { projects: 7, experience: 1, skills: 10 },
    config: { duration: 2000 }
  });

  useEffect(() => {
    setCurrentSection('home');
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simplified canvas setup for performance
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Reduced particle count for better performance
    const colors = ['#3b82f6', '#8b5cf6'];
    
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', updateCanvasSize);
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [setCurrentSection]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Mail size={20} />, href: 'mailto:kavinbakyaraj47@gmail.com', label: 'Email', preview: false },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/kavin-b-/', label: 'LinkedIn', preview: true },
    { icon: <Github size={20} />, href: 'https://github.com/Kavin-Bakyaraj', label: 'GitHub', preview: true },
  ];

  return (
    <section 
      id="home" 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Waves background is now global */}
      {/* Particle background - completely non-interactive */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ 
          background: 'transparent',
          pointerEvents: 'none',
          touchAction: 'none'
        }}
      />

      {/* Animated floating elements with dramatic entrance */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        style={{ pointerEvents: 'none', touchAction: 'none' }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 100 }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        style={{ pointerEvents: 'none', touchAction: 'none' }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center" style={{ touchAction: 'pan-y' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            delay: 0.8, 
            duration: 1.2, 
            type: "spring", 
            stiffness: 100, 
            damping: 15
          }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Picture with dramatic popup animation */}
          <motion.div
            initial={{ scale: 0, rotate: -360, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ 
              delay: 1.2, 
              type: "spring", 
              stiffness: 200,
              damping: 15,
              duration: 1.5
            }}
            className="mb-8 md:mb-12 mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 1.4, 
                type: "spring", 
                stiffness: 300,
                damping: 20
              }}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto relative flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.6, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                className="absolute inset-0 rounded-full pointer-events-none z-10 animate-glow-border"
              />
              <div className="w-full h-full flex items-center justify-center relative z-20">
                <motion.img
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 1.8, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 150
                  }}
                  src="/WhatsApp Image 2025-07-07 at 14.25.56_574ece33.jpg" 
                  alt="Kavin B - Profile Picture"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full object-cover border-4 border-white shadow-xl bg-black"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Main heading with dramatic entrance */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 2.0, 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-6 text-white leading-tight px-2 sm:px-4"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                Hi, I'm{' '}
              </motion.span>
              <motion.span
                initial={{ 
                  opacity: 0, 
                  scale: 0.5, 
                  backgroundPosition: "0% 50%" 
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  backgroundPosition: "100% 50%" 
                }}
                transition={{ 
                  opacity: { delay: 2.6, duration: 0.8 },
                  scale: { delay: 2.6, duration: 0.8, type: "spring", stiffness: 150 },
                  backgroundPosition: { delay: 3.2, duration: 3, repeat: Infinity, ease: "linear" }
                }}
                className="bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] block sm:inline"
              >
                Kavin B
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle with enhanced typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 2.8, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 md:mb-8 text-white/80 font-light px-2 sm:px-4"
          >
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ 
                delay: 3.2, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              className="inline-block overflow-hidden"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.5 }}
                className="border-r-2 border-blue-500"
              >
                <span className="hidden md:inline whitespace-nowrap">AI & Data Science Enthusiast | Full Stack Developer</span>
                <span className="md:hidden whitespace-nowrap">AI & Full Stack Developer</span>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Description with popup effect */}
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 3.6, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto text-white/70 leading-relaxed px-2 sm:px-4"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.6 }}
              className="block sm:inline"
            >
              Passionate about building intelligent AI workflows and scalable applications.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.0, duration: 0.6 }}
              className="hidden lg:inline"
            >
              {' '}Currently contributing to LLM-based automation systems at SNS iHub.
            </motion.span>
          </motion.p>

          {/* Stats with staggered popup animations */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 4.2, 
              duration: 0.8,
              type: "spring",
              stiffness: 120
            }}
            className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12 max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 4.4, 
                duration: 0.6,
                type: "spring",
                stiffness: 150
              }}
              className="text-center"
            >
              <animated.div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                {statsAnimation.projects.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-white/60 text-xs sm:text-sm">Projects</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 4.6, 
                duration: 0.6,
                type: "spring",
                stiffness: 150
              }}
              className="text-center"
            >
              <animated.div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                {statsAnimation.experience.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-white/60 text-xs sm:text-sm">Years<span className="hidden sm:inline"> Experience</span></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 4.8, 
                duration: 0.6,
                type: "spring",
                stiffness: 150
              }}
              className="text-center"
            >
              <animated.div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                {statsAnimation.skills.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-white/60 text-xs sm:text-sm">Skills</div>
            </motion.div>
          </motion.div>

          {/* Social links with staggered popup animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 5.0, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-12 px-2 sm:px-4"
          >
            {socialLinks.map((social, index) => (
              social.preview ? (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 5.2 + index * 0.15, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  <LinkPreview 
                    url={social.href} 
                    className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 font-medium text-xs sm:text-sm md:text-base"
                  >
                    <span className="mr-1 sm:mr-2">{social.icon}</span>
                    {social.label}
                  </LinkPreview>
                </motion.div>
              ) : (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 5.2 + index * 0.15, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  <motion.a
                    href={social.href}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    {social.icon}
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                </motion.div>
              )
            ))}
          </motion.div>

          {/* Location with final popup animation */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 5.8, 
              duration: 0.8,
              type: "spring",
              stiffness: 120
            }}
            className="flex items-center justify-center space-x-2 text-white/60 mb-12 md:mb-16 text-sm sm:text-base px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 6.0, 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
            >
              <MapPin size={14} className="sm:w-4 sm:h-4" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 6.2, duration: 0.6 }}
            >
              Coimbatore, India
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator with final dramatic entrance */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 30, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            delay: 6.4, 
            duration: 0.8,
            type: "spring",
            stiffness: 150
          }}
          whileHover={{ y: 5, scale: 1.1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              delay: 6.8,
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;