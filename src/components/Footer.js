import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: Twitter,
      url: 'https://x.com/yuvvantalreja',
      color: '#1DA1F2'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/yuvvantalreja',
      color: '#0077B5'
    },
    {
      icon: Instagram,
      url: 'https://instagram.com/yuvvantalreja',
      color: '#E4405F'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <footer className="footer" id="footer" ref={sectionRef}>
      <div className="footer-container">

        <motion.div 
          className="footer-separator"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >

          <motion.div className="footer-main" variants={itemVariants}>
            <motion.div 
              className="footer-brand"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="footer-title">Yuvvan Talreja</h3>
            </motion.div>
            
           
            <motion.div className="footer-social" variants={itemVariants}>
              <div className="footer-social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      whileHover={{ 
                        scale: 1.1,
                        color: social.color,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 0.3 + (index * 0.1),
                          duration: 0.5
                        }
                      } : { opacity: 0, y: 20 }}
                    >
                      <IconComponent size={24} />
                      <span className="footer-social-label">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

         
          <motion.button
            className="footer-back-to-top"
            onClick={scrollToTop}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.15)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
            <span>Back to top</span>
          </motion.button>


          <motion.div className="footer-bottom" variants={itemVariants}>
            <motion.p 
              className="footer-made-with"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Made with <Heart size={14} className="footer-heart" /> in Pittsburgh
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;