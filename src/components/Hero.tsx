import React, { useEffect, useRef } from 'react';
// import { Waves } from './ui/Waves';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';
import { LinkPreview } from "./ui/link-preview";
import { MovingBorder } from "./MovingBorder";
import { useInView } from 'framer-motion';

interface HeroProps {
  setCurrentSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentSection }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles with different colors
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'];
    
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
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

        // Connect nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 120) * 0.3;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
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
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Waves background is now global */}
      {/* Particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Picture with proper spacing */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.3, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            className="mb-8 md:mb-12 mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full pointer-events-none z-10 animate-glow-border" />
              <div className="w-full h-full flex items-center justify-center relative z-20">
                <img 
                  src="/WhatsApp Image 2025-07-07 at 14.25.56_574ece33.jpg" 
                  alt="Kavin B - Profile Picture"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full object-cover border-4 border-white shadow-xl bg-black"
                />
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-6 text-white leading-tight px-2 sm:px-4">
              Hi, I'm{' '}
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] block sm:inline"
              >
                Kavin B
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 md:mb-8 text-white/80 font-light px-2 sm:px-4"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
              className="inline-block overflow-hidden border-r-2 border-blue-500"
            >
              <span className="hidden md:inline whitespace-nowrap">AI & Data Science Enthusiast | Full Stack Developer</span>
              <span className="md:hidden whitespace-nowrap">AI & Full Stack Developer</span>
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto text-white/70 leading-relaxed px-2 sm:px-4"
          >
            <span className="block sm:inline">Passionate about building intelligent AI workflows and scalable applications.</span>
            <span className="hidden lg:inline"> Currently contributing to LLM-based automation systems at SNS iHub.</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12 max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4"
          >
            <div className="text-center">
              <animated.div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                {statsAnimation.projects.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-white/60 text-xs sm:text-sm">Projects</div>
            </div>
            <div className="text-center">
              <animated.div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                {statsAnimation.experience.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-white/60 text-xs sm:text-sm">Years<span className="hidden sm:inline"> Experience</span></div>
            </div>
            <div className="text-center">
              <animated.div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                {statsAnimation.skills.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-white/60 text-xs sm:text-sm">Skills</div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-12 px-2 sm:px-4"
          >
            {socialLinks.map((social, index) => (
              social.preview ? (
                <LinkPreview url={social.href} key={social.label} className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 font-medium text-xs sm:text-sm md:text-base">
                  <span className="mr-1 sm:mr-2">{social.icon}</span>
                  {social.label}
                </LinkPreview>
              ) : (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1 }}
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
              )
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="flex items-center justify-center space-x-2 text-white/60 mb-12 md:mb-16 text-sm sm:text-base px-4"
          >
            <MapPin size={14} className="sm:w-4 sm:h-4" />
            <span>Coimbatore, India</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          whileHover={{ y: 5, scale: 1.1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;