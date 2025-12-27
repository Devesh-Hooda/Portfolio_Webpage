import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-purple-400 font-mono mb-4 text-sm tracking-[0.3em] uppercase">05. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-8">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently exploring new opportunities in <span className="text-purple-400">Data Analytics</span> and <span className="text-purple-400">Business Analytics</span>. Whether you have a project in mind or just want to connect, my inbox is always open.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 bg-[#0a0514] border border-slate-800 rounded-lg text-slate-300 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group shadow-lg"
            >
              <link.icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase">{link.platform}</span>
            </a>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm italic">
            "Turning complex data into simple stories."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;