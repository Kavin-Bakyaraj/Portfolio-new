import React, { useEffect, useRef, useState } from 'react';
import { Boxes } from './Certifications';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Code, Database, Brain, Zap, Award, TrendingUp, Star, Trophy, Sparkles, Crown, Target, Rocket } from 'lucide-react';
import { AnimatedTooltip } from './AnimatedTooltip';

interface SkillsProps {
  setCurrentSection: (section: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ setCurrentSection }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const skillBarsRef = useRef<HTMLDivElement>(null);
  const [progressAnimated, setProgressAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setCurrentSection('skills');
    }
  }, [isInView, setCurrentSection]);

  useEffect(() => {
    if (isInView && !progressAnimated && skillBarsRef.current) {
      setProgressAnimated(true);
      
      const timeline = gsap.timeline();
      
      const skillBars = skillBarsRef.current.querySelectorAll('.skill-progress-container');
      
      skillBars.forEach((container: any, index) => {
        const background = container.querySelector('.skill-bar-bg');
        const fill = container.querySelector('.skill-bar-fill');
        const percentage = container.dataset.percentage;
        
        if (background && fill && percentage) {
          timeline.fromTo(background, 
            { scaleX: 0, opacity: 0.3 },
            { 
              scaleX: 1,
              opacity: 1,
              duration: 0.6,
              ease: "easeOut",
              transformOrigin: "left center"
            },
            index * 0.1
          );
          
          timeline.fromTo(fill, 
            { width: "0%" },
            { 
              width: `${percentage}%`,
              duration: 1.5,
              ease: "easeOut"
            },
            index * 0.1 + 0.3
          );
        }
      });

      const skillCards = skillBarsRef.current.querySelectorAll('.skill-card');
      skillCards.forEach((card: any, index) => {
        timeline.fromTo(card,
          { 
            rotationY: -90,
            opacity: 0,
            z: -100,
            scale: 0.8
          },
          {
            rotationY: 0,
            opacity: 1,
            z: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          },
          index * 0.2
        );
      });
    }
  }, [isInView, progressAnimated]);

  // Skills data based on resume
  const frontendSkills = [
    { id: 1, name: "React.js", designation: "Frontend Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 2, name: "JavaScript", designation: "Programming Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: 3, name: "TypeScript", designation: "Programming Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: 4, name: "HTML5", designation: "Markup Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { id: 5, name: "CSS3", designation: "Styling Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ];

  const backendSkills = [
    { id: 7, name: "Python", designation: "Programming Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { id: 8, name: "Django", designation: "Web Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { id: 9, name: "SQL", designation: "Database Language", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { id: 10, name: "MongoDB", designation: "NoSQL Database", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { id: 11, name: "REST API", designation: "API Architecture", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
  ];

  const aiSkills = [
    { id: 12, name: "Langchain", designation: "LLM Framework", image: "https://python.langchain.com/img/brand/wordmark.png" },
    { id: 13, name: "Gemini API", designation: "AI API", image: "https://seeklogo.com/images/G/google-gemini-logo-A5787B2669-seeklogo.com.png" },
    { id: 14, name: "scikit-learn", designation: "ML Library", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { id: 15, name: "Pandas", designation: "Data Analysis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { id: 16, name: "NumPy", designation: "Numerical Computing", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { id: 17, name: "OpenCV", designation: "Computer Vision", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" }
  ];

  const toolsSkills = [
    { id: 18, name: "Git", designation: "Version Control", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 19, name: "GitHub", designation: "Code Repository", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { id: 20, name: "Postman", designation: "API Testing", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { id: 21, name: "Streamlit", designation: "App Framework", image: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
    { id: 22, name: "Blender", designation: "3D Modeling", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { id: 23, name: "n8n", designation: "Automation", image: "https://n8n.io/favicon.ico" }
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={32} />,
      color: 'from-blue-500 to-cyan-500',
      bgGlow: 'shadow-blue-500/20',
      skills: [
        { name: 'React.js', level: 90, experience: '2+ years' },
        { name: 'TypeScript', level: 85, experience: '1.5+ years' },
        { name: 'JavaScript', level: 95, experience: '3+ years' },
        { name: 'HTML/CSS', level: 90, experience: '3+ years' },
        { name: 'Tailwind CSS', level: 88, experience: '2+ years' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database size={32} />,
      color: 'from-green-500 to-emerald-500',
      bgGlow: 'shadow-green-500/20',
      skills: [
        { name: 'Python', level: 95, experience: '3+ years' },
        { name: 'Django', level: 85, experience: '2+ years' },
        { name: 'SQL', level: 88, experience: '2+ years' },
        { name: 'MongoDB', level: 80, experience: '1+ years' },
        { name: 'REST API', level: 90, experience: '2+ years' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={32} />,
      color: 'from-purple-500 to-pink-500',
      bgGlow: 'shadow-purple-500/20',
      skills: [
        { name: 'Langchain', level: 88, experience: '1+ years' },
        { name: 'Gemini API', level: 85, experience: '1+ years' },
        { name: 'scikit-learn', level: 82, experience: '1.5+ years' },
        { name: 'Pandas/NumPy', level: 90, experience: '2+ years' },
        { name: 'OpenCV', level: 75, experience: '1+ years' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Zap size={32} />,
      color: 'from-orange-500 to-red-500',
      bgGlow: 'shadow-orange-500/20',
      skills: [
        { name: 'Git/GitHub', level: 92, experience: '3+ years' },
        { name: 'n8n', level: 85, experience: '1+ years' },
        { name: 'Postman', level: 88, experience: '2+ years' },
        { name: 'Streamlit', level: 80, experience: '1+ years' },
        { name: 'Blender 3D', level: 70, experience: '1+ years' }
      ]
    }
  ];

  const achievements = [
    
    { 
      icon: <Award size={24} />, 
      title: 'ARP Awards 2025', 
      subtitle: 'Nominee',
      color: 'from-yellow-500 to-orange-500',
      glow: 'shadow-yellow-500/30'
    },
    { 
      icon: <TrendingUp size={24} />, 
      title: '15+ Projects', 
      subtitle: 'Completed',
      color: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/30'
    },

  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <Boxes className="z-0" />
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
              Skills & Expertise
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 120 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 shadow-lg shadow-blue-500/50"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Technologies and tools I work with to bring ideas to life
            </motion.p>
          </div>

          {/* Gamified Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className={`skill-card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-700/50 transition-all duration-500 shadow-2xl ${achievement.glow} hover:shadow-3xl relative overflow-hidden w-80 min-h-[220px] mx-4`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                    >
                      <Sparkles size={12} className="text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <div className={`text-white mb-4 flex justify-center p-3 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}>
                  {achievement.icon}
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <h3 className="text-xl font-bold text-white mb-2 text-center w-full">{achievement.title}</h3>
                  <p className="text-white/60 text-center w-full">{achievement.subtitle}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, type: "spring" }}
                  className="absolute top-2 right-2"
                >
                  <Star size={16} className="text-yellow-400 fill-current" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Icons Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="space-y-12"
          >
            {/* Frontend Skills */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                  <Code size={24} />
                </div>
                Frontend Development
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6 }}
              >
                <AnimatedTooltip items={frontendSkills} />
              </motion.div>
            </div>

            {/* Backend Skills */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                  <Database size={24} />
                </div>
                Backend Development
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2 }}
              >
                <AnimatedTooltip items={backendSkills} />
              </motion.div>
            </div>

            {/* AI & ML Skills */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.2 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                  <Brain size={24} />
                </div>
                AI & Machine Learning
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.4 }}
              >
                <AnimatedTooltip items={aiSkills} />
              </motion.div>
            </div>

            {/* Tools & Technologies */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.6 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                  <Zap size={24} />
                </div>
                Tools & Technologies
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.8 }}
              >
                <AnimatedTooltip items={toolsSkills} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;