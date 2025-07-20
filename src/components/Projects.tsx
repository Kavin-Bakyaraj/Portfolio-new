import React, { useState, useEffect } from 'react';
import { Boxes } from './Certifications';
import { motion, useInView } from 'framer-motion';
import { HoverEffect } from './ui/HoverEffect';
import { ExternalLink, Github, Code, Database, Brain, Globe } from 'lucide-react';

interface ProjectsProps {
  setCurrentSection: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setCurrentSection }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');
  // Removed hoveredProject state, not needed with HoverEffect

  useEffect(() => {
    if (isInView) {
      setCurrentSection('projects');
    }
  }, [isInView, setCurrentSection]);

  const projects = [
    {
      title: 'Festifly',
      subtitle: 'Full Stack Event Management Platform',
      description: 'A comprehensive event management platform built with React and Django, featuring real-time notifications, user authentication, and cloud integration for seamless event scheduling and management.',
      longDescription: 'Festifly revolutionizes event management with its intuitive interface and powerful backend. Features include advanced scheduling algorithms, real-time collaboration tools, and comprehensive analytics dashboard.',
      technologies: ['React', 'Django', 'REST API', 'PostgreSQL', 'Cloud Integration', 'WebSocket'],
      category: 'Full Stack',
      date: 'June 2025',
      github: 'https://github.com/Kavin-Bakyaraj',
      demo: 'https://festifly.xyz',
      image: '/api/placeholder/600/400',
      features: [
        'Real-time event scheduling',
        'User authentication & authorization',
        'Push notifications',
        'Responsive design',
        'Analytics dashboard',
        'Multi-user collaboration'
      ],
      stats: { stars: 24, forks: 8, views: 156 }
    },
    {
      title: 'LEO',
      subtitle: 'Advanced AI Telegram Bot',
      description: 'An intelligent Telegram bot powered by Groq API, featuring real-time chat, AI image generation, web search capabilities, and personal file management with independent user sessions.',
      longDescription: 'LEO represents the next generation of conversational AI, combining multiple AI services to provide a comprehensive digital assistant experience directly through Telegram.',
      technologies: ['Python', 'Groq API', 'Telegram Bot API', 'AI Integration', 'File Management', 'Web Scraping'],
      category: 'AI/ML',
      date: 'April 2025',
      github: 'https://github.com/Kavin-Bakyaraj/Bot.git',
      demo: 'https://github.com/Kavin-Bakyaraj/Bot.git',
      image: '/api/placeholder/600/400',
      features: [
        'Real-time AI conversations',
        'AI image generation',
        'Web search integration',
        'Personal file management',
        'Multi-user sessions',
        'Command-based interface'
      ],
      stats: { stars: 31, forks: 12, views: 203 }
    },
    {
      title: 'APNA',
      subtitle: 'AI-Integrated Job Search Platform',
      description: 'Enhanced job search platform using React and Django with integrated OCR and Gemini API for intelligent resume parsing and automated profile verification.',
      longDescription: 'APNA transforms the job search experience by leveraging AI to match candidates with opportunities more effectively, featuring advanced resume analysis and skill matching algorithms.',
      technologies: ['React', 'Django', 'OCR', 'Gemini API', 'AI Integration', 'Machine Learning'],
      category: 'AI/ML',
      date: 'February 2025',
      github: 'https://github.com/Kavin-Bakyaraj/APNA.git',
      demo: 'https://github.com/Kavin-Bakyaraj/APNA.git',
      image: '/api/placeholder/600/400',
      features: [
        'Resume parsing with OCR',
        'AI-powered profile verification',
        'Smart job matching',
        'Skill assessment',
        'Interview scheduling',
        'Performance analytics'
      ],
      stats: { stars: 18, forks: 6, views: 142 }
    },
    {
      title: 'OCR Text Extraction',
      subtitle: 'Advanced Document Processing',
      description: 'A sophisticated OCR system using Tesseract for automated text extraction from images with high accuracy, supporting multiple languages and batch processing.',
      longDescription: 'This OCR system pushes the boundaries of text recognition technology, incorporating advanced image preprocessing and machine learning techniques for superior accuracy.',
      technologies: ['Python', 'Tesseract', 'OpenCV', 'Image Processing', 'Machine Learning', 'Multi-language'],
      category: 'AI/ML',
      date: 'December 2024',
      github: 'https://github.com/Kavin-Bakyaraj/OCR.git',
      demo: 'https://github.com/Kavin-Bakyaraj/OCR.git',
      image: '/api/placeholder/600/400',
      features: [
        'High-accuracy text extraction',
        'Multiple language support',
        'Batch processing',
        'Image preprocessing',
        'Export to multiple formats',
        'API integration'
      ],
      stats: { stars: 15, forks: 4, views: 98 }
    },
    {
      title: 'Resume Creator',
      subtitle: 'Resume Generator',
      description: 'This project is a Resume Creator designed to generate ATS-friendly (Applicant Tracking System) resumes. The application includes a React-based frontend, a Django-based backend, and MongoDB Atlas as the database. Users can register, log in, input their details, preview their resumes, and download them as PDF files.',
      longDescription: 'This project is a Resume Creator designed to generate ATS-friendly (Applicant Tracking System) resumes. The application includes a React-based frontend, a Django-based backend, and MongoDB Atlas as the database. Users can register, log in, input their details, preview their resumes, and download them as PDF files.',
      technologies: ['React', 'Django', 'RestAPI', 'MongoDB', 'Gemini'],
      category: 'Full Stack',
      date: 'January 2025',
      github: 'https://github.com/Hariharanpugazh/Resume-Creator-ATS-.git',
      demo: 'https://github.com/Hariharanpugazh/Resume-Creator-ATS-.git',
      image: '/api/placeholder/600/400',
      features: [
        "User-friendly interface to input resume details.",
        "Dynamic resume preview and generation.",
        "Support for both experienced professionals and freshers.",
        "Backend integration with MongoDB for secure user data storage.",
        "Downloadable PDF resumes."
      ],
      stats: { stars: 22, forks: 7, views: 134 }
    },
    {
      title: 'NextStep AI',
      subtitle: 'Career Progression Platform',
      description: 'Career Compass is a comprehensive tech career guidance platform built with React and Django, designed to help users navigate their career paths in the Indian tech industry. The platform offers personalized roadmaps, job matching, resume analysis, learning resources, and industry insights.',
      longDescription: 'Career Compass is a comprehensive tech career guidance platform built with React and Django, designed to help users navigate their career paths in the Indian tech industry. The platform offers personalized roadmaps, job matching, resume analysis, learning resources, and industry insights.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Django', 'Github API', 'Youtube API'],
      category: 'Full Stack',
      date: 'November 2024',
      github: 'https://github.com/Kavin-Bakyaraj/Career-guidance.git',
      demo: 'https://github.com/Kavin-Bakyaraj/Career-guidance.git',
      image: '/api/placeholder/600/400',
      features: [
        'Generates personalized learning paths based on career goals and existing skills.',
        'Supports multiple career paths including tech, design, art, and data science.',
        'Adapts to user experience level (beginner, intermediate, advanced).',
        'Provides phase-by-phase guidance with estimated completion times.',
        'Recommends learning resources for each skill.'
      ],
      stats: { stars: 28, forks: 11, views: 187 }
    }
  ];

  const categories = ['All', 'Full Stack', 'AI/ML', 'Web Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Prepare items for HoverEffect
  const hoverEffectItems = filteredProjects.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.demo || project.github || '#',
  }));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Globe size={20} />;
      case 'AI/ML':
        return <Brain size={20} />;
      case 'Web Development':
        return <Code size={20} />;
      default:
        return <Database size={20} />;
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
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
              Featured Projects
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
              A showcase of my latest work in AI, full-stack development, and innovative solutions
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid with HoverEffect */}
          <HoverEffect items={hoverEffectItems} className="gap-8" />

          {/* View More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/Kavin-Bakyaraj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Github size={20} />
              <span>View More Projects on GitHub</span>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;