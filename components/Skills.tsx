import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

// Magnetic Pill Component
const MagneticPill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const x = (clientX - centerX) * 0.2; // Strength of attraction
    const y = (clientY - centerY) * 0.2;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="px-3 py-1 bg-purple-900/20 text-purple-200/80 text-sm rounded-full cursor-pointer border border-transparent hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300 transition-colors"
    >
      {children}
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-purple-400 font-mono text-xl mr-2">04.</span> Technical Skills
          </h2>
          <div className="hidden sm:block h-px bg-slate-800/80 w-full max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#110a1f] p-4 sm:p-6 rounded border border-slate-800 hover:border-purple-500/30 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-lg font-bold text-purple-400 mb-4 text-center md:text-left">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {category.skills.map((skill) => (
                  <MagneticPill key={skill}>
                    {skill}
                  </MagneticPill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;