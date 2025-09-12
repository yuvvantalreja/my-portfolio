import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ControlCenter from './components/ControlCenter';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/App.css';
import AnimatedCursor from "react-animated-cursor";


const detectTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(detectTouchDevice());

    document.body.style.opacity = '0';
    const timer = setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease-out'; 
      document.body.style.opacity = '1';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isTouchDevice && (
        <AnimatedCursor
          innerSize={30}
          innerScale={0.7}
          outerStyle={{
            display: 'none'
          }}
          innerStyle={{
            backgroundColor: 'rgba(100, 100, 100, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            zIndex: 9999,
            position: 'fixed'
          }}
          showSystemCursor={false}
        />
      )}
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Hero />
          <About />
          <Projects />
          <Experience />
        <Footer/>
        </div>
        {/* <ControlCenter /> */}
      </div>
    </>
  );
}

export default App; 