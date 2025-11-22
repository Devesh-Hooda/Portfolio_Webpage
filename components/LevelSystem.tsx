import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Shield, Activity } from 'lucide-react';

interface LevelSystemProps {
  visitorName?: string;
}

const LevelSystem: React.FC<LevelSystemProps> = ({ visitorName }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [status, setStatus] = useState("INITIALIZING");

  // Transform scroll progress into "XP" and "Levels"
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const currentXp = Math.floor(latest * 1000);
      setXp(currentXp);
      
      // Simple level logic: Level up every 200 XP
      const newLevel = Math.floor(currentXp / 200) + 1;
      if (newLevel !== level) {
        setLevel(newLevel);
      }

      if (latest < 0.1) setStatus("ESTABLISHING CONNECTION");
      else if (latest < 0.4) setStatus("ANALYZING DATASETS");
      else if (latest < 0.7) setStatus("DECRYPTING PROJECTS");
      else if (latest < 0.9) setStatus("SYNCING SKILLS");
      else setStatus("CONNECTION SECURE");
    });
  }, [scrollYProgress, level]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-end pointer-events-none font-mono"
    >
      {/* HUD Container */}
      <div className="bg-[#030014]/90 backdrop-blur-md border border-purple-500/30 p-4 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.2)] min-w-[240px]">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-3 border-b border-purple-500/20 pb-2">
          <div className="flex items-center gap-2 text-purple-400">
            <Shield size={14} />
            <span className="text-xs font-bold tracking-wider">SYSTEM STATUS</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] text-green-500">ONLINE</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="space-y-3">
          
          {/* Operator Row */}
          {visitorName && (
             <div className="flex justify-between items-center text-slate-300">
              <span className="text-xs text-slate-500">OPERATOR</span>
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wide truncate max-w-[120px]">{visitorName}</span>
            </div>
          )}

          {/* Level Row */}
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-xs text-slate-500">ACCESS LEVEL</span>
            <span className="text-sm font-bold text-purple-400">LVL {level < 10 ? `0${level}` : level}</span>
          </div>

          {/* XP Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>DATA SYNC</span>
              <span>{xp} / 1000 MB</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500"
                style={{ scaleX, transformOrigin: "left" }}
              />
            </div>
          </div>

          {/* Dynamic Status Text */}
          <div className="flex items-center gap-2 pt-2">
            <Activity size={12} className="text-purple-400 animate-bounce" />
            <span className="text-[10px] text-purple-300/80 tracking-tight uppercase">{status}</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default LevelSystem;