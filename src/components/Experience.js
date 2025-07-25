import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Import images properly for React
import cmuHciiLogo from '../assets/CMU-HCII.jpeg';
import airlabLogo from '../assets/airlab.jpeg';
import cmuEngineeringLogo from '../assets/cmu-engineering.jpeg';
import respirerLogo from '../assets/respirer.jpeg';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const timelineRef = useRef();
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Timeline darkening effect based on scroll
  const timelineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.9, 1]);
  const timelineWidth = useTransform(scrollYProgress, [0, 0.5, 1], [2, 3, 4]);

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

  const experiences = [
    {
      title: 'Research Assistant',
      logo: cmuHciiLogo,
      company: 'Carnegie Mellon Human Computer Interaction Institute',
      date: `May '25 - Present`,
      description: `Tinkering with the <a href="https://vega.github.io/editor/#/" style="decoration: none;"> Vega Editor</a> under Prof. Dominik Moritz 📊 `,
      achievements: [],
      color: '#c41e3a'
    },
    {
      title: 'Undergraduate Researcher',
      logo: airlabLogo,
      company: 'AirLab @ CMU',
      date: `Mar '25 - May '25`,
      description: 'Contributed to the Unified Spherical Frontend project at CMU\'s AirLAB',
      achievements: [
        'Developed a generic strategy for visual perception tasks in spherical space that abstracts away hardware-related artifacts like lens distortion, resolution variations, and focal length differences across camera systems',
        'Worked on the Vega Editor, a tool for creating and editing spherical visualizations',
        'Participated in daily standups and sprint planning sessions'
      ],
      color: '#1f4e79'
    },
    {
      title: 'Teaching Assistant',
      logo: cmuEngineeringLogo,
      company: 'Carnegie Mellon University\'s College of Engineering',
      date: `Jan '25 - May '25`,
      description: 'Assisted in teaching fundamental concepts of electrical and computer engineering, including circuit analysis, digital logic, and signal processing.',
      achievements: [
        'Conducted small groups, held office hours, and provided guidance to students on coursework and lab assignments.',
        'Graded assignments and exams while offering constructive feedback to enhance student learning.',
        'Collaborated with faculty to improve course materials and facilitate an engaging learning environment.'
      ],
      color: '#c41e3a'
    },
    {
      title: 'Software Engineer Intern',
      logo: respirerLogo,
      company: 'Respirer Living Sciences',
      date: `May '23 - Jul '23`,
      description: 'Contributed to the development of a scalable air quality data platform powering environmental insights across India.',
      achievements: [
        'Designed and deployed a dual REST/GraphQL API system for accessing data from 2,500+ IoT sensors, supporting both real-time streaming and historical queries.',
        'Integrated OAuth 2.0 authentication with role-based access control to ensure secure and granular data access.',
        'Engineered a high-performance API gateway using Kong for intelligent request routing, rate limiting, response caching, and analytics; achieved 99.9% uptime with sub-80ms average response times.',
        'Built client SDKs in Python and JavaScript with strict data validation, error handling, and retry logic to simplify third-party integration and boost developer adoption.',
        'Developed a React- and Node.js-based developer portal featuring Swagger documentation, an interactive GraphQL/REST testing console, and usage analytics dashboard.',
        'Reduced third-party integration time by 60% through better tooling, documentation, and developer experience improvements.'
      ],
      color: '#2d5a2d'
    }
  ];

  // Individual experience card component with progressive disclosure
  const ExperienceCard = ({ experience, index }) => {
    const cardRef = useRef();
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });
    
    const cardVariants = {
      hidden: { 
        opacity: 0, 
        y: 60,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94], // Apple's preferred easing
          delay: index * 0.15
        }
      }
    };

    const achievementVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.3 + (i * 0.1),
          duration: 0.5,
          ease: "easeOut"
        }
      })
    };

    return (
      <motion.div 
        ref={cardRef}
        className="timeline-item"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="timeline-dot"
          style={{ 
            backgroundColor: '#1d1d1f',
            scale: isInView ? 1 : 0.5,
            opacity: isInView ? 1 : 0.3
          }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        />
        
        <motion.div 
          className="timeline-content"
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="timeline-header">
            <motion.img 
              src={experience.logo} 
              alt={experience.company} 
              className="timeline-logo"
            />
            <div className="timeline-header-content">
              <h3 className="timeline-title">{experience.title}</h3>
              <span className="timeline-company">{experience.company}</span>
              <span className="timeline-date">{experience.date}</span>
            </div>
          </div>
          
          <motion.div 
            className="timeline-description"
            dangerouslySetInnerHTML={{ __html: experience.description }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          
          {experience.achievements && experience.achievements.length > 0 && (
            <motion.ul 
              className="timeline-achievements"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {experience.achievements.map((achievement, i) => (
                <motion.li 
                  key={i}
                  custom={i}
                  variants={achievementVariants}
                >
                  {achievement}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </motion.div>
    );
  };

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

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Building, learning, and Experimenting</p>
        </motion.div>
        
        <div className="timeline-wrapper">
          <motion.div 
            ref={timelineRef}
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Animated timeline line */}
            <motion.div 
              className="timeline-line"
              style={{ 
                opacity: timelineOpacity,
                width: timelineWidth
              }}
            />
            
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                experience={exp} 
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 