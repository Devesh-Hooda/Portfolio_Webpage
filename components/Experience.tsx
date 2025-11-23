import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue, animate } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';

// Helper component to animate numbers
const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  // Extract the numeric part and the suffix (%, K, etc)
  const numMatch = value.match(/[\d\.]+/);
  const number = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d\.]+/, '');
  
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      // Animate from 0 to the number
      const controls = animate(0, number, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          // Format logic to keep decimals if original had them
          const isFloat = value.includes('.');
          node.textContent = isFloat ? latest.toFixed(1) + suffix : Math.floor(latest) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [inView, number, suffix, value]);

  return <span ref={ref} className="text-purple-400 font-bold inline-block tabular-nums">{value}</span>;
};

// Helper to parse text and replace numbers with animated components
// Detects patterns like: 91.1%, 40K, $139K, 28%
const TextWithAnimatedNumbers: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\d+(?:\.\d+)?%?|\$\d+(?:K|M)?|\d+K)/g);
  
  return (
    <span>
      {parts.map((part, i) => {
        // Simple check if it looks like a metric
        if (part.match(/^(\d+(?:\.\d+)?%?|\$\d+(?:K|M)?|\d+K)$/)) {
          return <AnimatedNumber key={i} value={part} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center whitespace-nowrap">
            <span className="text-purple-400 font-mono text-xl mr-2">02.</span> Where I've Worked
          </h2>
          <div className="h-px bg-slate-800/80 w-full max-w-xs"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-800 min-w-max">
            {EXPERIENCE_DATA.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-left font-mono text-sm transition-all duration-200 whitespace-nowrap hover:bg-purple-900/10 ${
                  activeTab === index 
                    ? 'text-purple-400 border-b-2 md:border-b-0 md:border-l-2 border-purple-400 bg-purple-900/10 -mb-[2px] md:-mb-0 md:-ml-[2px]' 
                    : 'text-slate-400 border-b-2 md:border-b-0 md:border-l-2 border-transparent hover:text-purple-200'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[320px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium text-slate-100">
                {EXPERIENCE_DATA[activeTab].role} <span className="text-purple-400">@ {EXPERIENCE_DATA[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-slate-400 mt-1 mb-6">
                {EXPERIENCE_DATA[activeTab].period}
              </p>
              <ul className="space-y-4">
                {EXPERIENCE_DATA[activeTab].description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-[15px] leading-relaxed">
                    <span className="text-purple-400 mt-1.5 text-xs">▹</span>
                    <span>
                      <TextWithAnimatedNumbers text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;