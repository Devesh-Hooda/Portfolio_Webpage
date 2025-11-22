import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebars from './components/SocialSidebars';
import LevelSystem from './components/LevelSystem';
import WelcomeTerminal from './components/WelcomeTerminal';

const App: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [visitorName, setVisitorName] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse Spotlight Logic
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const handleTerminalComplete = (name: string) => {
    setVisitorName(name);
    setShowTerminal(false);
  };

  // Parallax Background Logic
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, 1000]); // Slow
  const y2 = useTransform(scrollY, [0, 5000], [0, -1000]); // Reverse

  return (
    <div className="bg-[#030014] min-h-screen text-slate-200 selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden relative">
      
      {/* Welcome Terminal Overlay */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            key="terminal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100]"
          >
            <WelcomeTerminal onComplete={handleTerminalComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mouse Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
        }}
      />

      {/* Background Gradients with Parallax */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] opacity-50"
        ></motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/20 rounded-full blur-[120px] opacity-50"
        ></motion.div>
      </div>

      {/* Main Content - blurred until terminal is done, or just hidden behind z-index */}
      <div className={`${showTerminal ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <LevelSystem visitorName={visitorName} />
        <SocialSidebars />
        
        <main className="flex flex-col items-center w-full px-4 md:px-0 z-10 relative">
          <Hero visitorName={visitorName} />
          <About visitorName={visitorName} />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;