import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin } from 'lucide-react';

interface HeroProps {
  visitorName?: string;
}

const Hero: React.FC<HeroProps> = ({ visitorName }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-3 sm:px-12 lg:px-24 pt-20 relative">
      <div className="max-w-4xl w-full">
        {/* Personalized Greeting Terminal Line */}
        {visitorName && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-purple-400 font-mono text-[10px] bg-purple-900/10 w-fit px-4 py-1.5 rounded border border-purple-500/20 tracking-[0.2em] uppercase"
          >
            <Terminal size={12} />
            <span>PLAYER_ENTITY: {visitorName.toUpperCase()}</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 mb-4"
        >
          <h2 className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase font-bold">Class: Data Analyst</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Devesh Hooda.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-5xl font-bold text-slate-400 mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Analysing Data.</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-lg text-slate-400 leading-relaxed flex flex-col gap-2">
            <span>
              Computer Science student based in <span className="text-slate-100">New Delhi</span> working with <span className="text-purple-400 font-mono">Python</span> & <span className="text-purple-400 font-mono">SQL</span> as my primary language stacks to convert raw information into effective and understandable insights.
            </span>
            <span className="flex items-center gap-2 text-[10px] font-mono text-slate-500 mt-4 tracking-[0.2em] uppercase">
              <MapPin size={14} className="text-purple-500" /> New Delhi // Delhi
            </span>
          </p>
        </motion.div>

        {/* Action Area - Left Blank as requested */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-16"
        >
          {/* Action button removed */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;