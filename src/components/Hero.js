import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';

const Hero = () => {
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (scrolled > 100) {
        setScrollIndicatorOpacity(0);
      } else {
        setScrollIndicatorOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="fade-in-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>
            <motion.span 
              className="fade-in-up delay-1 first-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Yuvvan Talreja 👋
            </motion.span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle fade-in-up delay-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            ML Enthusiast, Software Developer, Roboticist, ECE @ Carnegie Mellon University
          </motion.p>
        </div>
      </div>
      <motion.div 
        className="scroll-indicator"
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrollIndicatorOpacity, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Mouse 
          className="mouse-icon" 
          size={24}
          onClick={scrollToAbout}
          style={{ cursor: 'pointer' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero; 