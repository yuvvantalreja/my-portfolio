import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Github, 
  Linkedin, 
  Twitter,
  X,
  Grid,
  ExternalLink
} from 'lucide-react';

const ControlCenter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleControlCenter = () => {
    setIsOpen(!isOpen);
    
  };

  const handleCardClick = (action, url) => {
    if (action === 'resume') {
      // Download resume from public folder
      const link = document.createElement('a');
      link.href = '/Yuvvan Talreja - Resume .pdf';
      link.download = 'Yuvvan_Talreja_Resume.pdf';
      link.click();
    } else if (url) {
      window.open(url, '_blank');
    }
    // Close control center after action
    setIsOpen(false);
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  const controlCenterItems = [
    {
      id: 'resume',
      title: 'Resume',
      subtitle: 'Download CV',
      icon: Download,
      action: 'resume',
      size: 'large',
      
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Code & Projects',
      icon: Github,
      url: 'https://github.com/yuvvan13',
      size: 'medium',
      
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yuvvan-talreja',
      size: 'medium',

    },
    {
      id: 'twitter',
      title: 'Twitter',
      subtitle: 'Follow Updates',
      icon: Twitter,
      url: 'https://twitter.com/yuvvan13',
      size: 'large',
    }
  ];

  return (
    <>
      {/* Control Center Toggle Button */}
      <motion.button
        className="control-center-toggle"
        onClick={toggleControlCenter}
        animate={{
          rotate: isOpen ? 45 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X size={20} />
          ) : (
            <Grid size={20} />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Control Center Panel */}
            <motion.div
              className="control-center-panel"
              initial={{ 
                scale: 0.8, 
                opacity: 0, 
                y: 50,
                x: 50
              }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                x: 0
              }}
              exit={{ 
                scale: 0.8, 
                opacity: 0, 
                y: 50,
                x: 50
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.5
              }}
            >

              {/* Control Center Grid */}
              <motion.div 
                className="control-center-grid"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {controlCenterItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      className={`control-card ${item.size}`}
                      data-service={item.id}
                      onClick={() => handleCardClick(item.action, item.url)}
                      initial={{ 
                        scale: 0.8, 
                        opacity: 0,
                        y: 20
                      }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        y: 0
                      }}
                      exit={{ 
                        scale: 0.8, 
                        opacity: 0,
                        y: 20
                      }}
                      transition={{
                        delay: 0.1 + (index * 0.05),
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -2
                      }}
                    >
                      <div className="control-card-content">
                        <div 
                          className="control-card-icon"
                          style={{ color: 'white' }}
                        >
                          <IconComponent size={item.size === 'large' ? 32 : item.size === 'medium' ? 28 : 24} />
                        </div>
                        <div className="control-card-text">
                          <h4>{item.title}</h4>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ControlCenter;
