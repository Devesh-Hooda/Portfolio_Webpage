import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface AboutProps {
  visitorName?: string;
}

const About: React.FC<AboutProps> = ({ visitorName }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center whitespace-nowrap">
            <span className="text-purple-400 font-mono text-xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-slate-800/80 w-full max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate-400 leading-relaxed space-y-4">
            
            {/* Personalized System Note */}
            {visitorName && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-6 p-4 bg-purple-900/10 border border-purple-500/20 rounded text-sm font-mono text-purple-300/90 flex gap-3 items-start"
              >
                <Cpu size={16} className="mt-1 shrink-0 animate-pulse" />
                <span>
                  <span className="font-bold text-purple-400">SYSTEM_MSG:</span> Access granted for Operator <span className="text-white bg-purple-500/20 px-1 rounded">{visitorName}</span>. Unlocking full personnel dossier and background history...
                </span>
              </motion.div>
            )}

            <p>
              {visitorName ? `Hello ${visitorName}! ` : "Hello! "} 
              My name is Devesh and I enjoy diving deep into data to uncover trends and insights. My journey began at <span className="text-purple-400">Indraprastha Institute of Information Technology (IIIT Delhi)</span>, where I am pursuing a Bachelor of Technology in Computer Science and Design (2022 - 2026).
            </p>
            <p>
              I have developed a strong foundation in Data Analysis and Machine Learning through rigorous projects and internships. My experience includes developing <span className="text-purple-400">ML pipelines</span>, optimizing data ingestion workflows, and engineering secure backend architectures.
            </p>
            <p>
             I am also proactive in professional development, having completed job simulations for <span className="text-purple-400">Deloitte Australia</span> and <span className="text-purple-400">Tata Group</span> on Forage.
            </p>
            <p>
              Since you are viewing this, {visitorName || "here are"}, a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
              {['Python', 'SQL (MySQL, Postgres)', 'Pandas & Numpy', 'Scikit-learn', 'Tableau', 'Node.js'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
              <div className="absolute inset-0 border-2 border-purple-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="relative bg-purple-500 rounded overflow-hidden h-full w-full">
                <img 
                  src="https://picsum.photos/600/600" 
                  alt="Devesh Hooda" 
                  className="w-full h-full object-cover grayscale mix-blend-multiply filter group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-300 opacity-90 hover:opacity-100" 
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;