import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-[#030014]">
      <div className="flex justify-center space-x-6 mb-4 md:hidden">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple-400 transition-colors"
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-slate-500 hover:text-purple-400 transition-colors">
        Designed & Built by Devesh Hooda
      </p>
    </footer>
  );
};

export default Footer;