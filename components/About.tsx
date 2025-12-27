import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface AboutProps {
  visitorName?: string;
}

const About: React.FC<AboutProps> = ({ visitorName }) => {
  return (
    <section id="about" className="py-32 px-3 sm:px-12 lg:px-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center shrink-0">
            <span className="text-purple-400 font-mono text-xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-slate-800/80 w-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 text-slate-400 leading-relaxed space-y-6">
            <p>
              I am a <span className="text-purple-400 font-bold">Computer Science</span> student based in <span className="text-slate-100">New Delhi</span>. I specialize in building end-to-end data pipelines and predictive systems that turn raw chaos into clarity.
            </p>
            
            <p>
              My workflow is built on a stack of <span className="text-slate-100 font-bold">Python</span> and <span className="text-slate-100 font-bold">SQL</span>. Every project I build is managed with precision using <span className="text-purple-400">VS Code</span>, <span className="text-purple-400">Git</span>, and <span className="text-purple-400">DB Browser (SQLite)</span>.
            </p>

            <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg">
              <p className="text-sm font-mono text-purple-300 flex items-center gap-2 mb-2 uppercase tracking-tighter">
                <Cpu size={14} /> Core Code Stack
              </p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 font-mono text-xs">
                {['Python', 'SQL', 'VS Code', 'Git', 'SQLite', 'Pandas'].map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-slate-300">
                    <span className="text-purple-500">▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 relative group flex justify-center">
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
              {/* Decorative Frame - Static */}
              <div className="absolute inset-0 border-2 border-purple-500/40 rounded-lg translate-x-4 translate-y-4 transition-transform duration-500"></div>
              
              {/* Image Container - Full Visibility */}
              <div className="relative rounded-lg overflow-hidden h-full w-full bg-slate-800 shadow-2xl border border-slate-700/50">
                <img 
                  src="https://raw.githubusercontent.com/Devesh-Hooda/Devesh-Hooda/main/MyImg.jpg" 
                  alt="Devesh Hooda" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://i.ibb.co/vz6xXmP/me.jpg";
                  }}
                />
                {/* Subtle overlay for branding consistency, but no grayscale */}
                <div className="absolute inset-0 bg-purple-500/5 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;