import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, ChevronRight } from 'lucide-react';

interface WelcomeTerminalProps {
  onComplete: (name: string) => void;
}

const WelcomeTerminal: React.FC<WelcomeTerminalProps> = ({ onComplete }) => {
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: boot, 1: input, 2: success
  const [lines, setLines] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const bootSequence = [
    "INITIALIZING SECURE CONNECTION...",
    "LOADING PORTFOLIO ASSETS...",
    "ESTABLISHING DATA LINK...",
    "IDENTITY VERIFICATION REQUIRED."
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((line, index) => {
      delay += 800;
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootSequence.length - 1) {
          setTimeout(() => setStep(1), 500);
        }
      }, delay);
    });
  }, []);

  useEffect(() => {
    if (step === 1 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      setStep(2);
      setTimeout(() => {
        onComplete(input);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#02010a] flex items-center justify-center px-4 font-mono text-slate-200">
      <div className="max-w-lg w-full">
        {/* Terminal Window */}
        <div className="bg-[#0a0514] border border-slate-800 rounded-lg overflow-hidden shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]">
          {/* Terminal Header */}
          <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="flex-1 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
              <Terminal size={12} />
              <span>secure_gateway.exe</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 min-h-[300px] flex flex-col">
            <div className="space-y-2 mb-6 text-sm md:text-base">
              {lines.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-slate-400"
                >
                  <span className="text-purple-500 mr-2">➜</span>
                  {line}
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="mt-auto"
                >
                  <label className="block text-xs text-purple-400 mb-2 tracking-widest uppercase">
                    Enter Visitor Identification
                  </label>
                  <div className="flex items-center gap-2 group relative">
                    <ChevronRight className="text-purple-500 animate-pulse" size={20} />
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="bg-transparent border-b border-slate-700 focus:border-purple-500 outline-none w-full py-2 text-xl text-slate-100 font-bold tracking-wider placeholder-slate-700 transition-colors"
                      placeholder="TYPE NAME HERE..."
                      autoComplete="off"
                    />
                    <button 
                      type="submit"
                      className={`absolute right-0 px-3 py-1 text-xs rounded border transition-all ${
                        input.trim().length > 0 
                          ? 'border-purple-500 text-purple-400 bg-purple-500/10 hover:bg-purple-500/20' 
                          : 'border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                      }`}
                      disabled={input.trim().length === 0}
                    >
                      ENTER
                    </button>
                  </div>
                </motion.form>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-auto flex flex-col items-center justify-center h-32 gap-4"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <ShieldCheck size={48} className="text-green-500" />
                  </motion.div>
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold text-slate-100">ACCESS GRANTED</h3>
                    <p className="text-slate-400 text-sm">Welcome, {input}</p>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-2">
                    <motion.div 
                      className="h-full bg-purple-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTerminal;