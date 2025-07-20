import React, { useState, useEffect } from 'react';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import emailjs from 'emailjs-com';
import { Boxes } from './Certifications';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  setCurrentSection: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setCurrentSection }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isInView) {
      setCurrentSection('contact');
    }
  }, [isInView, setCurrentSection]);

  // Animated form validation
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'subject':
        return value.length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormStatus('error');
      return;
    }
    try {
      await emailjs.send(
        'service_cw4meu4',
        'template_xgkicu9',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '9E-ZVioui7CR4XZeG' // <-- Replace with your actual public key
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
    }
  };

  // Spring animations for form elements
  const formSpring = useSpring({
    transform: formStatus === 'submitting' ? 'scale(0.98)' : 'scale(1)',
    opacity: formStatus === 'submitting' ? 0.7 : 1,
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'kavinbakyaraj47@gmail.com',
      href: 'mailto:kavinbakyaraj47@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9363106669',
      href: 'tel:+919363106669',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Kavin-Bakyaraj',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kavin-b-/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/kavin__bakyaraj/',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <Boxes />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
            >
              Let's Connect
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 120 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="lg:col-span-2"
            >
              <animated.div
                style={formSpring}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <Label htmlFor="name" className="mb-2 text-white/80">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`bg-white/5 text-white placeholder-white/50 ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/20'}`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <div className="flex items-center space-x-1 text-red-400 text-sm mt-1">
                          <AlertCircle size={14} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>
                    {/* Email Field */}
                    <div className="relative">
                      <Label htmlFor="email" className="mb-2 text-white/80">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`bg-white/5 text-white placeholder-white/50 ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/20'}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <div className="flex items-center space-x-1 text-red-400 text-sm mt-1">
                          <AlertCircle size={14} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Subject Field */}
                  <div className="relative">
                    <Label htmlFor="subject" className="mb-2 text-white/80">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`bg-white/5 text-white placeholder-white/50 ${errors.subject ? 'border-red-500 focus:ring-red-500/20' : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/20'}`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <div className="flex items-center space-x-1 text-red-400 text-sm mt-1">
                        <AlertCircle size={14} />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>
                  {/* Message Field */}
                  <div className="relative">
                    <Label htmlFor="message" className="mb-2 text-white/80">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/20'}`}
                      placeholder="Tell me about your project or idea..."
                    />
                    {errors.message && (
                      <div className="flex items-center space-x-1 text-red-400 text-sm mt-1">
                        <AlertCircle size={14} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full flex items-center justify-center space-x-2 py-4 rounded-lg font-medium transition-all duration-300 ${
                      formStatus === 'success'
                        ? 'bg-green-600 text-white'
                        : formStatus === 'error'
                        ? 'bg-red-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block mr-2" />
                        <span>Sending...</span>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message Sent!</span>
                      </>
                    ) : formStatus === 'error' ? (
                      <>
                        <AlertCircle size={20} />
                        <span>Please fix errors</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </animated.div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-white/60">{info.label}</p>
                        <p className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Response Time', value: '< 24 hours' },
                    { label: 'Projects Completed', value: '7+' },
                
                    { label: 'Coffee Consumed', value: '∞' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.6 + index * 0.1 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-white/70">{stat.label}</span>
                      <span className="font-bold text-blue-400">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;