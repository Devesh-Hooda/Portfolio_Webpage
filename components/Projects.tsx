import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';
import { PROJECT_DATA } from '../constants';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECT_DATA.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECT_DATA.length) % PROJECT_DATA.length);
  };

  const currentProject = PROJECT_DATA[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      filter: "blur(8px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      filter: "blur(8px)"
    })
  };

  return (
    <section id="projects" className="py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center shrink-0">
            <span className="text-purple-400 font-mono text-xl mr-2">03.</span> Projects
          </h2>
          <div className="h-px bg-slate-800/80 w-full"></div>
        </div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 }
              }}
              className="w-full"
            >
              <div className="group bg-[#0a0514] rounded-xl p-6 sm:p-10 border border-slate-800/60 shadow-xl relative overflow-hidden">
                {/* Compact Stack Header */}
                <div className="flex items-center gap-2 mb-6 font-mono text-[9px] tracking-[0.2em] text-purple-400 uppercase font-bold">
                  <Code2 size={12} className="text-purple-500" />
                  <span>{currentProject.techStack.join(' • ')}</span>
                </div>

                {/* Grid: Image on Right */}
                <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center">
                  <div className="space-y-6 order-2 lg:order-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                      {currentProject.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed text-base">
                      {currentProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {currentProject.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono text-slate-500 bg-slate-900/50 px-2.5 py-1 rounded border border-slate-800/80">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 pt-4">
                      {currentProject.githubLink && (
                        <a 
                          href={currentProject.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-all font-mono text-xs group/link"
                        >
                          <Github size={18} className="group-hover/link:scale-110" />
                          <span className="tracking-widest">SOURCE</span>
                        </a>
                      )}
                      {currentProject.liveLink && (
                        <a 
                          href={currentProject.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-all font-mono text-xs group/link"
                        >
                          <ExternalLink size={18} className="group-hover/link:scale-110" />
                          <span className="tracking-widest">LIVE</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Compact Image Side */}
                  <div className="order-1 lg:order-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-lg group-hover:border-purple-500/20 transition-colors duration-500">
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-all"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prevProject}
              className="p-3.5 rounded-full border border-slate-800 bg-[#0a0514] text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition-all active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
            
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-purple-400 font-bold">{currentIndex + 1}</span>
              <span className="text-slate-800">/</span>
              <span className="text-slate-600">{PROJECT_DATA.length}</span>
            </div>

            <button 
              onClick={nextProject}
              className="p-3.5 rounded-full border border-slate-800 bg-[#0a0514] text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition-all active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;