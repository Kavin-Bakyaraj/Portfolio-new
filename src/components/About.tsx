import React, { useEffect } from 'react';
import { Boxes } from './Certifications';
import { motion, useInView } from 'framer-motion';
import { Download, Award, Code, Database, Brain, Zap, BookOpen, Target } from 'lucide-react';

interface AboutProps {
  setCurrentSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentSection }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setCurrentSection('about');
    }
  }, [isInView, setCurrentSection]);

  const skills = [
    {
      category: 'Languages & Frameworks',
      items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'React.js', 'Django'],
      icon: <Code size={24} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'AI & Automation',
      items: ['Langchain', 'Gemini API', 'n8n', 'Prompt Engineering', 'RAG', 'OCR (Tesseract)'],
      icon: <Brain size={24} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'ML & Data Science',
      items: ['scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Streamlit'],
      icon: <Database size={24} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Dev Tools & Others',
      items: ['Git', 'GitHub', 'Postman', 'REST API', 'MongoDB', 'Blender 3D'],
      icon: <Zap size={24} />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const interests = [
    'AI Automation',
    'Backend Development',
    'ML Model Development',
    'Full Stack Web Development',
    'Blender 3D Modelling'
  ];

  const achievements = [
    { icon: <Award size={20} />, text: 'ARP Awards 2025 Nominee' },
    { icon: <Target size={20} />, text: 'Hackathon Winner at SNS iHub' },
    { icon: <BookOpen size={20} />, text: '7 Professional Certifications' },
    { icon: <Code size={20} />, text: '15+ Projects Completed' }
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
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
              About Me
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 100 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
                
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    AI & Data Science enthusiast with hands-on skills in prompt engineering, Python, SQL, and full stack development. 
                    Experienced in building scalable applications and intelligent AI workflows using tools like Langchain, Gemini API, and n8n.
                  </p>
                  
                  <p>
                    Currently interning at SNS iHub, contributing to LLM-based automation systems and real-world AI projects. 
                    Passionate about leveraging technology to solve complex problems and create innovative solutions.
                  </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-blue-400">
                        {achievement.icon}
                      </div>
                      <span className="text-sm text-white/70">{achievement.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.a
                  href="/KAVIN B ATS Resume.pdf"
                  download
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mt-8"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Education & Interests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="space-y-8"
            >
              {/* Areas of Interest */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
                <h4 className="text-xl font-semibold text-white mb-6">Areas of Interest</h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white text-sm rounded-full hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ...Skills & Technologies tabular column removed as requested... */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;