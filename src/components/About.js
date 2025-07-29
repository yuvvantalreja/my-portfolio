import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Creating meaningful digital experiences
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-description">
              Hey👋, I'm Yuvvan! I love building things. I enjoy creating meaningful technology, whether it’s software that empowers people, robots that learn, or circuits that bring ideas to life.
            </p>
            <p className="about-description">
              When I'm not building, you can find me exploring new coffee shops, going for runs, listening to music, or 
              collaborating with my friends to solve interesting problems. I believe that the best work happens when creativity meets intention.
            </p>
          </motion.div>
          <motion.div className="about-image" variants={itemVariants}>
            <img src={profileImage} alt="Yuvvan Talreja" className="profile-image" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 