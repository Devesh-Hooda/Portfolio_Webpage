import React from 'react';
import { motion } from 'framer-motion';

interface PokemonSpriteProps {
  isScrolling: boolean;
}

const PokemonSprite: React.FC<PokemonSpriteProps> = ({ isScrolling }) => {
  // Approximate width for "I Love Breloom" at 11px mono with 0.2em tracking is ~160-180px
  // 1.2 times that is ~200px
  const spriteWidth = "200px";

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-28 left-6 sm:left-12 z-40 hidden lg:flex flex-col items-center pointer-events-none"
    >
      <div className="relative group flex flex-col items-center">
        {/* Animated Sprite - Breloom (Size scaled to 1.2x text width) */}
        <motion.img 
          src="https://play.pokemonshowdown.com/sprites/ani-shiny/breloom.gif"
          alt="Partner Pokemon"
          className="drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          style={{ 
            imageRendering: 'pixelated',
            width: spriteWidth,
            height: 'auto'
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: isScrolling ? 1.5 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Scaled Shadow relative to new size */}
        <motion.div 
          className="bg-black/40 blur-[3px] rounded-[100%] -mt-4"
          style={{ width: '140px', height: '3px' }}
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: isScrolling ? 1.5 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Status Text Below Sprite - Continuous Color Animation */}
        <motion.p 
          className="mt-4 font-mono text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
          /* SHIFT_ADJUSTMENT: Text moved 10 more pixels left from previous -11px to center it better or as per user request */
          style={{ marginLeft: '-30px' }} 
          animate={{
            color: ["#800000", "#16a34a", "#800000"]
          }}
          transition={{
            duration: isScrolling ? 1 : 2, // Double speed (half duration) when scrolling
            repeat: Infinity,
            ease: "linear"
          }}
        >
          I Love Breloom
        </motion.p>
        
        {/* Tooltip on Hover */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md border border-purple-500/30 px-3 py-1 rounded text-[10px] font-mono text-purple-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">
          {isScrolling ? 'CORE_ENGINE: OVERDRIVE' : 'CORE_ENGINE: ACTIVE'}
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonSprite;