import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

// Helper component to animate numbers
const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const numMatch = value.match(/[\d\.]+/);
  const number = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d\.]+/, '');
  
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, number, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          const isFloat = value.includes('.');
          node.textContent = isFloat ? latest.toFixed(1) + suffix : Math.floor(latest) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [inView, number, suffix, value]);

  return <span ref={ref} className="text-purple-400 font-bold inline-block tabular-nums">{value}</span>;
};

const TextWithAnimatedNumbers: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\d+(?:\.\d+)?%?|\$\d+(?:K|M)?|\d+K)/g);
  return (
    <span>
      {parts.map((part, i) => {
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
  const currentExp = EXPERIENCE_DATA[activeTab];

  return (
    <section id="experience" className="py-32 px-3 sm:px-12 lg:px-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center shrink-0">
            <span className="text-purple-400 font-mono text-xl mr-2">02.</span> Experience
          </h2>
          <div className="h-px bg-slate-800/80 w-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-800 min-w-max">
            {EXPERIENCE_DATA.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 text-left font-mono text-xs tracking-widest uppercase transition-all duration-200 whitespace-nowrap hover:bg-purple-900/10 ${
                  activeTab === index 
                    ? 'text-purple-400 border-b-2 md:border-b-0 md:border-l-2 border-purple-400 bg-purple-900/10 -mb-[2px] md:-mb-0 md:-ml-[2px]' 
                    : 'text-slate-500 border-b-2 md:border-b-0 md:border-l-2 border-transparent hover:text-purple-300'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-[300px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold text-slate-100">
                  {currentExp.role} <span className="text-purple-500">@ {currentExp.company}</span>
                </h3>
                {currentExp.githubLink && (
                  <a 
                    href={currentExp.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors font-mono text-[10px] tracking-widest uppercase border border-slate-800 px-3 py-1.5 rounded bg-slate-900/50"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
              <p className="font-mono text-xs text-slate-500 mb-8 tracking-widest uppercase">
                {currentExp.period}
              </p>
              <ul className="space-y-5">
                {currentExp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-400 text-[15px] leading-relaxed">
                    <span className="text-purple-500 mt-1.5 text-[10px]">▶</span>
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