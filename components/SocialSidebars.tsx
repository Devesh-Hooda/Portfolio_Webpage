import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const SocialSidebars: React.FC = () => {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <div className="hidden md:block fixed bottom-0 left-6 lg:left-12 right-auto z-10 w-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mx-auto"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 hover:-translate-y-1 transition-all duration-200"
              aria-label={link.platform}
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right Sidebar - Email */}
      <div className="hidden md:block fixed bottom-0 right-6 lg:right-12 left-auto z-10 w-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mx-auto"
        >
          <a 
            href="mailto:Gvhooda@gmail.com"
            className="text-slate-400 hover:text-purple-400 font-mono text-xs tracking-widest writing-vertical-rl hover:-translate-y-1 transition-all duration-200 mb-6"
            style={{ writingMode: 'vertical-rl' }}
          >
            Gvhooda@gmail.com
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default SocialSidebars;