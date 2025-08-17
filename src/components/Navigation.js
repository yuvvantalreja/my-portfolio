import React, { useState, useEffect } from 'react';
import { User, Folder, Briefcase, Mail, Menu, PanelLeftClose, PanelTopOpen, X, PanelLeftOpen, PanelLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/social-media-profile.png';

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [navTheme, setNavTheme] = useState('light');

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState !== null) {
      setIsCollapsed(savedState === 'true');
    }

    const handleScroll = () => {
      const sections = [
        { id: 'hero', theme: 'light' },
        { id: 'about', theme: 'light' },
        { id: 'projects', theme: 'dark' },
        { id: 'experience', theme: 'light' },
        { id: 'footer', theme: 'dark' }
      ];
      const scrollY = window.pageYOffset;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const sectionTop = element.offsetTop - 100;
          const sectionHeight = element.offsetHeight;
          
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            setNavTheme(section.theme);
            break;
          }
        }
      }
    };


    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    localStorage.setItem('sidebarCollapsed', !isCollapsed);
  };

  const toggleMobileNav = () => {
    setIsMobileOpen(!isMobileOpen);

    if (!isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }


    if (window.innerWidth <= 768) {
      setIsMobileOpen(false);
      document.body.style.overflow = '';
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'footer', label: 'Socials', icon: Mail }
  ];

  return (
    <>

      <motion.button 
        className="mobile-nav-toggle" 
        onClick={toggleMobileNav}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          backgroundColor: isMobileOpen ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{ rotate: isMobileOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMobileOpen ? <X size={24} color={isMobileOpen ? 'white' : '#1d1d1f'} /> : <Menu size={24} color="#1d1d1f" />}
        </motion.div>
      </motion.button>


      <AnimatePresence>
        {isMobileOpen && (
          <>

            <motion.div 
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileNav}
            />
            

            <motion.div 
              className="mobile-nav-dock"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
            >

              <motion.div 
                className="mobile-nav-profile"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <img src={profileImage} alt="Yuvvan Talreja" className="mobile-nav-avatar" />
                <div className="mobile-nav-profile-info">
                  <h3 className="mobile-nav-name">Yuvvan Talreja</h3>
                  <p className="mobile-nav-role">ML Enthusiast & Developer</p>
                </div>
              </motion.div>


              <motion.div 
                className="mobile-nav-links"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.button
                      key={link.id}
                      className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                      onClick={() => handleNavClick(link.id)}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.1 + (index * 0.05),
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="mobile-nav-link-icon" size={20} />
                      <span className="mobile-nav-link-text">{link.label}</span>
                      {activeSection === link.id && (
                        <motion.div 
                          className="mobile-nav-link-indicator"
                          layoutId="mobileActiveIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>


      <nav className={`nav ${isCollapsed ? 'collapsed' : ''} nav-${navTheme}`}>
        <div className="nav-container">
          <div className={`nav-header ${isCollapsed ? 'collapsed' : ''}`}> 
            <div className="nav-profile">
              <img src={profileImage} alt="Yuvvan Talreja" className="nav-logo" />
              <div className="nav-profile-info"></div>
            </div>
            <button className="nav-toggle" onClick={toggleSidebar}>
                <PanelLeft size={20}/>
            </button>
          </div>

          <ul className="nav-links">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <li key={link.id}>
                  <button
                    className={`nav-link ${activeSection === link.id && !isCollapsed ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    <IconComponent className="nav-link-icon" size={20} />
                    <span className="nav-link-text">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 