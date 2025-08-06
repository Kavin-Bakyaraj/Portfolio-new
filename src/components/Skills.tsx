import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, Zap, Award, TrendingUp } from 'lucide-react';
import { AnimatedTooltip } from './AnimatedTooltip';

interface SkillsProps {
  setCurrentSection: (section: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ setCurrentSection }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setCurrentSection('skills');
    }
  }, [isInView, setCurrentSection]);

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
    { id: 12, name: "Langchain", designation: "LLM Framework", image: "https://uploads-ssl.webflow.com/65ff950538088944d66126b3/662ef3209b872e92e41212f6_cookieicon.png" },
    { id: 13, name: "Gemini API", designation: "AI API", image: "https://seeklogo.com/images/G/google-gemini-logo-A5787B2669-seeklogo.com.png" },
    { id: 14, name: "scikit-learn", designation: "ML Library", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { id: 15, name: "Pandas", designation: "Data Analysis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { id: 16, name: "NumPy", designation: "Numerical Computing", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { id: 17, name: "OpenCV", designation: "Computer Vision", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" }
  ];

  const toolsSkills = [
    { id: 18, name: "Git", designation: "Version Control", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 19, name: "GitHub", designation: "Code Repository", image: "https://www.svgrepo.com/show/475654/github-color.svg" },
    { id: 20, name: "Postman", designation: "API Testing", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { id: 21, name: "Streamlit", designation: "App Framework", image: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
    { id: 22, name: "Blender", designation: "3D Modeling", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { id: 23, name: "n8n", designation: "Automation", image: "https://n8n.io/favicon.ico" }
  ];

  const achievements = [
    { 
      icon: <Award size={24} />, 
      title: 'ARP Awards 2025', 
      subtitle: 'Nominee',
      color: 'from-blue-500 to-blue-600',
      glow: 'shadow-blue-500/20'
    },
    { 
      icon: <TrendingUp size={24} />, 
      title: '7+ Projects', 
      subtitle: 'Completed',
      color: 'from-green-500 to-green-600',
      glow: 'shadow-green-500/20'
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Waves background is now global */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
            >
              Skills & Expertise
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 120 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 shadow-lg shadow-blue-500/50"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Technologies and tools I work with to bring ideas to life
            </motion.p>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center items-center gap-8 mb-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200 shadow-xl ${achievement.glow} w-64 h-32 flex flex-col items-center justify-center`}
              >
                <div className={`text-white mb-3 flex justify-center p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{achievement.title}</h3>
                  <p className="text-white/60 text-sm">{achievement.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Icons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-12"
          >
            {/* Frontend Skills */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                  <Code size={24} />
                </div>
                Frontend Development
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <AnimatedTooltip items={frontendSkills} />
              </motion.div>
            </div>

            {/* Backend Skills */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                  <Database size={24} />
                </div>
                Backend Development
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.0, duration: 0.4 }}
              >
                <AnimatedTooltip items={backendSkills} />
              </motion.div>
            </div>

            {/* AI & ML Skills */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                  <Brain size={24} />
                </div>
                AI & Machine Learning
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <AnimatedTooltip items={aiSkills} />
              </motion.div>
            </div>

            {/* Tools & Technologies */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.4 }}
                className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                  <Zap size={24} />
                </div>
                Tools & Technologies
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.4 }}
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