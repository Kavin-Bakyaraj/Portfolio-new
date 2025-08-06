import React, { useEffect } from 'react';
// import { Waves } from './ui/Waves';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Building, Users, Award } from 'lucide-react';

interface ExperienceProps {
  setCurrentSection: (section: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setCurrentSection }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setCurrentSection('experience');
    }
  }, [isInView, setCurrentSection]);

  const experiences = [
    {
      title: 'Junior Software Intern',
      company: 'SNS Ihub',
      location: 'Coimbatore, India',
      period: 'October 2024 - Present',
      description: 'Working on AI automation projects using n8n, Gemini, and Langchain to build efficient, real-world solutions. Contributing to faster development cycles and innovation within the team through prompt engineering and full-stack integration.',
      achievements: [
        'Developed 5+ AI automation workflows using n8n and Langchain',
        'Improved team productivity by 40% through process automation',
        'Integrated Gemini API for enhanced AI capabilities',
        'Collaborated with cross-functional teams on LLM projects'
      ],
      technologies: ['n8n', 'Gemini API', 'Langchain', 'Python', 'AI Automation'],
      current: true,
      icon: <Building size={24} />
    },
    {
      title: 'AI & ML Intern',
      company: 'Internpe',
      location: 'Remote',
      period: 'July 2024 - August 2024',
      description: 'Developed machine learning projects including IPL match winner prediction, diabetes risk analysis, and car price prediction using Python and ML libraries. Strengthened practical skills in data preprocessing, model building, and result visualization.',
      achievements: [
        'Built 3 end-to-end ML projects with 85%+ accuracy',
        'Implemented data preprocessing pipelines',
        'Created interactive visualizations using Streamlit',
        'Documented and presented project findings'
      ],
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
      current: false,
      icon: <Award size={24} />
    },
    {
      title: 'Web Development Intern',
      company: 'Codsoft',
      location: 'Remote',
      period: 'May 2024 - June 2024',
      description: 'Built responsive websites including a personal portfolio and a dance academy site using React.js. Focused on clean UI design, component-based architecture, and interactive frontend features to deliver user-friendly web experiences.',
      achievements: [
        'Developed 2 fully responsive websites',
        'Implemented modern UI/UX design principles',
        'Optimized website performance and loading times',
        'Delivered projects ahead of schedule'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
      current: false,
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden">
      {/* Waves background is now global */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white px-4"
            >
              Work Experience
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 120 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 md:mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4"
            >
              My professional journey in AI, machine learning, and software development
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden sm:block" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                    className={`absolute left-2.5 md:left-6 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-black z-10 hidden sm:block ${
                      exp.current 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50' 
                        : 'bg-white/20'
                    }`}
                  />
                  
                  <div className="sm:ml-8 md:ml-16">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: 2,
                        z: 20,
                        transition: { duration: 0.3 }
                      }}
                      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-white/10 transition-all duration-500 ${
                        exp.current ? 'border-blue-500/30 shadow-lg shadow-blue-500/10' : ''
                      }`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                        <div className="flex items-start space-x-3 md:space-x-4">
                          <div className={`p-2 md:p-3 rounded-lg ${
                            exp.current 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                              : 'bg-white/10'
                          } text-white flex-shrink-0`}>
                            {exp.icon}
                          </div>
                          
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                              {exp.title}
                              {exp.current && (
                                <motion.span
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="px-2 md:px-3 py-1 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full"
                                >
                                  Current
                                </motion.span>
                              )}
                            </h3>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs md:text-sm space-y-1 sm:space-y-0">
                              <div className="flex items-center space-x-1">
                                <Briefcase size={14} className="text-blue-400 md:w-4 md:h-4" />
                                <span className="font-semibold text-blue-400">{exp.company}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={14} className="text-white/60 md:w-4 md:h-4" />
                                <span className="text-white/60">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1 mt-2 md:mt-0">
                          <Calendar size={14} className="text-white/60 md:w-4 md:h-4" />
                          <span className="text-xs md:text-sm text-white/60">{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4 md:mb-6">
                        <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Key Achievements</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 1.2 + index * 0.2 + achIndex * 0.1 }}
                              className="flex items-start space-x-2 text-xs md:text-sm text-white/70"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1.4 + index * 0.2 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
            className="text-center mt-12 md:mt-16"
          >

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;