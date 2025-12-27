import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#030014]/80 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-purple-400 tracking-[0.2em] group relative z-50 font-mono uppercase">
          Phase<span className="text-slate-100 group-hover:text-purple-400 transition-colors">.NULL</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item, index) => (
            <motion.a 
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-[10px] font-bold text-slate-400 hover:text-purple-400 transition-colors uppercase tracking-widest font-mono"
            >
              <span className="text-purple-500/40 mr-1.5">P.0{index + 1}</span>
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-purple-400 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent origin-left" style={{ scaleX }} />
    </motion.nav>
  );
};

export default Navbar;