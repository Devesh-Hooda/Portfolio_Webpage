import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';

interface AutoScrollButtonProps {
  onStateChange?: (isActive: boolean) => void;
}

const AutoScrollButton: React.FC<AutoScrollButtonProps> = ({ onStateChange }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    onStateChange?.(isActive);
    let scrollInterval: number;
    if (isActive) {
      // 1.25x speed (reduced interval from 30ms to 24ms)
      scrollInterval = window.setInterval(() => {
        window.scrollBy({ top: 1, behavior: 'auto' });
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          setIsActive(false);
        }
      }, 24); 
    }
    return () => clearInterval(scrollInterval);
  }, [isActive, onStateChange]);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start font-mono pointer-events-auto">
      <motion.button
        onClick={() => setIsActive(!isActive)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-3 px-4 py-2 rounded border transition-all duration-300 group ${
          isActive 
            ? 'bg-purple-600/20 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
            : 'bg-[#0a0514]/80 border-slate-700 text-slate-400 hover:border-purple-500/50'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div key="pause" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                <Pause size={14} />
              </motion.div>
            ) : (
              <motion.div key="play" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                <Play size={14} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
          {isActive ? 'Auto_Run: Active' : 'Auto_Run: Manual'}
        </span>
        
        {isActive && (
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={12} className="text-purple-400" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default AutoScrollButton;