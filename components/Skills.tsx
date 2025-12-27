import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MagneticPill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * 0.15;
    const y = (clientY - centerY) * 0.15;
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
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className="px-5 py-2.5 bg-purple-900/10 text-purple-200/90 text-sm font-mono rounded border border-purple-500/10 hover:border-purple-500/40 hover:bg-purple-500/15 transition-colors uppercase tracking-widest cursor-default whitespace-nowrap"
    >
      {children}
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [progress, setProgress] = useState(0);
  const intervalTime = 5000;

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed % intervalTime) / intervalTime * 100;
      setProgress(newProgress);
      
      if (elapsed >= intervalTime) {
        // This is handled by the main shift interval but we can sync here if needed
      }
    }, 50);

    const shiftInterval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % SKILLS_DATA.length);
      setProgress(0);
    }, intervalTime);

    return () => {
      clearInterval(interval);
      clearInterval(shiftInterval);
    };
  }, [activeIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + SKILLS_DATA.length) % SKILLS_DATA.length);
    setProgress(0);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    })
  };

  return (
    <section id="skills" className="py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center shrink-0">
            <span className="text-purple-400 font-mono text-xl mr-2">04.</span> Core Skills
          </h2>
          <div className="h-px bg-slate-800/80 w-full"></div>
        </div>

        <div className="relative group">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="w-full"
            >
              <div className="bg-[#0a0514] p-10 sm:p-14 rounded-2xl border border-slate-800/60 shadow-2xl min-h-[340px] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative background accent */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/5 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-fuchsia-500/5 blur-[100px] rounded-full"></div>

                <h3 className="text-lg font-bold text-purple-400 mb-10 font-mono uppercase tracking-[0.3em] text-center">
                  {SKILLS_DATA[activeIndex].name}
                </h3>

                <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
                  {SKILLS_DATA[activeIndex].skills.map((skill) => (
                    <MagneticPill key={skill}>
                      {skill}
                    </MagneticPill>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-10 px-2">
            <div className="flex gap-3">
              <button 
                onClick={() => paginate(-1)}
                className="p-3 rounded-full border border-slate-800 bg-[#0a0514] text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition-all active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => paginate(1)}
                className="p-3 rounded-full border border-slate-800 bg-[#0a0514] text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition-all active:scale-90"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4 flex-1 max-w-[200px] ml-8">
              <div className="flex-1 h-1 bg-slate-900 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-purple-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex gap-1.5">
                {SKILLS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                      setProgress(0);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === i ? 'w-6 bg-purple-400' : 'w-1.5 bg-slate-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;