import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  visitorName?: string;
}

const Hero: React.FC<HeroProps> = ({ visitorName }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
      <div className="max-w-5xl w-full">
        {/* Personalized Greeting Terminal Line */}
        {visitorName && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 text-purple-500 font-mono text-sm bg-purple-900/10 w-fit px-3 py-1 rounded border border-purple-500/20"
          >
            <Terminal size={14} />
            <span>HELLO {visitorName.toUpperCase()}. WELCOME TO MY PORTFOLIO.</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-purple-400 font-mono text-lg mb-4 tracking-wide">Hi, my name is</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            Devesh Hooda.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
            I turn data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 animate-pulse">actionable insights.</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mb-10"
        >
          <p className="text-lg text-slate-400 leading-relaxed">
            I'm a Computer Science and Design student at <span className="text-purple-400 font-semibold">IIIT Delhi</span>, specializing in Data Analysis and Machine Learning. I focus on building predictive models, automated data pipelines, and secure backend systems to solve real-world business problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href="#projects" 
            className="group flex items-center gap-2 px-8 py-4 border border-purple-400 text-purple-400 rounded hover:bg-purple-400/10 transition-all duration-300 font-medium shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_-3px_rgba(168,85,247,0.5)] relative overflow-hidden"
          >
            <span className="relative z-10">Check out my work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 h-full w-full bg-purple-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;