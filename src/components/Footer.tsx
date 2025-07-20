import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Kavin-Bakyaraj', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/kavin-b-/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:kavinbakyaraj47@gmail.com', label: 'Email' },
    { icon: <Globe size={20} />, href: 'https://kavinbox.vercel.app', label: 'Portfolio' }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="mb-6">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
              >
                KAVIN B
              </motion.h3>
              <p className="text-white/60 text-sm">
                AI & Data Science Enthusiast | Full Stack Developer
              </p>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Passionate about building intelligent AI workflows and scalable applications. 
              Always exploring new technologies and contributing to innovative projects that make a difference.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    viewport={{ once: true }}
                    className="text-white/70 hover:text-blue-400 transition-all duration-300 text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm mb-1">Email</p>
                <a 
                  href="mailto:kavinbakyaraj47@gmail.com"
                  className="text-white/80 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  kavinbakyaraj47@gmail.com
                </a>
              </div>
              
              <div>
                <p className="text-white/60 text-sm mb-1">Phone</p>
                <a 
                  href="tel:+919363106669"
                  className="text-white/80 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  +91 9363106669
                </a>
              </div>
              
              <div>
                <p className="text-white/60 text-sm mb-1">Location</p>
                <p className="text-white/80 text-sm">Coimbatore, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-white/60 text-sm">
              <span>© {currentYear} Kavin B. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current mx-1" />
              </motion.div>
              <span>using React & TypeScript</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowUp size={16} />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [-100, window.innerWidth + 100],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;