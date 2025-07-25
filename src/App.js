import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Add loading animation on initial load
    document.body.style.opacity = '0';
    const timer = setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease-out'; 
      document.body.style.opacity = '1';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <Hero />
        <About />
        <Projects />
        <Experience />
      <Footer/>
      </div>
    </div>
  );
}

export default App; 