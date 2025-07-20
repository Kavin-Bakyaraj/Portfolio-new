import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Brain, Zap, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { icon: <Code size={32} />, text: 'Loading Frontend Skills...', color: 'from-blue-500 to-cyan-500' },
    { icon: <Database size={32} />, text: 'Initializing Backend...', color: 'from-green-500 to-emerald-500' },
    { icon: <Brain size={32} />, text: 'Activating AI Systems...', color: 'from-purple-500 to-pink-500' },
    { icon: <Zap size={32} />, text: 'Finalizing Portfolio...', color: 'from-orange-500 to-red-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update phase based on progress
        const phaseIndex = Math.floor(newProgress / 25);
        if (phaseIndex !== currentPhase && phaseIndex < phases.length) {
          setCurrentPhase(phaseIndex);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currentPhase, onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles size={16} className="text-blue-400" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              KAVIN B
            </div>
          </motion.div>

          {/* Current Phase Icon */}
          <motion.div
            key={currentPhase}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${phases[currentPhase]?.color} flex items-center justify-center text-white shadow-lg`}
          >
            {phases[currentPhase]?.icon}
          </motion.div>

          {/* Phase Text */}
          <motion.p
            key={currentPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/80 mb-8 text-lg"
          >
            {phases[currentPhase]?.text}
          </motion.p>

          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="flex justify-between text-sm text-white/60 mb-2">
              <span>Loading...</span>
              <span>{progress}%</span>
            </div>
            
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${phases[currentPhase]?.color} rounded-full relative overflow-hidden`}
              >
                <motion.div
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/30 rounded-full blur-sm"
                  style={{ width: '100px' }}
                />
              </motion.div>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/50 mt-6 text-sm"
          >
            AI & Data Science Enthusiast | Full Stack Developer
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;