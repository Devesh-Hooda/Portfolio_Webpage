import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { PROJECT_DATA } from '../constants';
import { Project as ProjectType } from '../types';

// Simplified Static Project Card
const ProjectCard: React.FC<{ project: ProjectType; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-[#110a1f] rounded-lg p-4 sm:p-6 flex flex-col h-full border border-slate-800 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-purple-500/10"
    >
      {/* Subtle Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-3 rounded bg-purple-500/10 text-purple-400 group-hover:text-purple-300 transition-colors">
          <Folder size={24} />
        </div>
        <div className="flex gap-4 text-slate-400">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Github size={20} />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:scale-110 transform">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors relative z-10">
        {project.title}
      </h3>
      
      <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm relative z-10">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-3 mt-auto text-xs font-mono text-slate-500 relative z-10">
        {project.techStack.map((tech) => (
          <li key={tech} className="bg-purple-900/10 px-2 py-1 rounded text-purple-400/70 group-hover:text-purple-400 transition-colors">
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center whitespace-nowrap">
            <span className="text-purple-400 font-mono text-xl mr-2">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-slate-800/80 w-full max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;