import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import RPGBackground from './components/RPGBackground';
import AutoScrollButton from './components/AutoScrollButton';
import PokemonSprite from './components/PokemonSprite';

const App: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [visitorName, setVisitorName] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <div className="bg-[#030014] min-h-screen text-slate-200 selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden relative">
      
      <AnimatePresence>
        {showTerminal && (
          <motion.div key="terminal" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="fixed inset-0 z-[100]">
            <WelcomeTerminal onComplete={handleTerminalComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.08), transparent 80%)`
        }}
      />

      <RPGBackground />

      <div className={`${showTerminal ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <LevelSystem visitorName={visitorName} />
        <PokemonSprite isScrolling={isScrolling} />
        <SocialSidebars />
        <AutoScrollButton onStateChange={setIsScrolling} />
        
        <main className="flex flex-col items-center w-full z-10 relative">
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