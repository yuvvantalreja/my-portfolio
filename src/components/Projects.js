import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TreeDeciduous, 
  GraduationCap, 
  Workflow, 
  Settings, 
  Book, 
  Eye, 
  BookOpenCheck
} from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      id: 'banyan',
      title: 'Banyan',
      description: 'Banyan – your all in one prompt infrastructure to build, test, and monitor AI powered apps from prototype to production. Visual drag-and-drop workflows, Git style versioning, prompt suggestions, A/B testing – all in one place.',
      tags: ['Typescript', 'Node.js', 'PostgreSQL'],
      links: {
        demo: 'https://usebanyan.com',
        github: 'https://github.com/banyan-ai/banyan'
      },
      iconComponent: 'banyan'
    },
    {
      id: 'ellie',
      title: 'Ellie',
      description: 'Ellie is a powerful, customizable RAG system designed as an AI teaching assistant for university courses. Uses course-specific materials to provide accurate, contextually relevant answers to student questions with support for multiple courses and document types.',
      tags: ['Python', 'RAG', 'FAISS'],
      links: {
        demo: '#',
        github: '#'
      },
      iconComponent: 'ellie'
    },
    {
      id: 'flowify',
      title: 'Flowify',
      description: 'An intelligent web application that transforms video content into intuitive, visual mind maps using advanced NLP techniques and clustering algorithms. Creates hierarchical visualizations without requiring generative AI.',
      tags: ['NLP', 'Clustering'],
      links: {
        demo: '#',
        github: '#'
      },
      iconComponent: 'flowify'
    },
    {
      id: 'allocator',
      title: 'Dynamic Memory Allocator',
      description: 'Implemented a custom memory allocator in C with efficient memory management strategies. Achieved performance comparable to standard malloc while reducing memory fragmentation by 40% through optimized block coalescing.',
      tags: ['C', 'Memory Management'],
      links: {
        demo: '#',
        github: '#'
      },
      iconComponent: 'allocator'
    },
    {
      id: 'scoreai',
      title: 'Score.ai',
      description: 'AI-powered application for automated grading of handwritten assignments. Uses OCR and natural language processing to analyze student submissions and provide detailed feedback with interfaces for both students and instructors.',
      tags: ['Python', 'FastAPI', 'OCR'],
      links: {
        demo: '#',
        github: '#'
      },
      iconComponent: 'scoreai'
    },
    {
      id: 'captcha',
      title: 'CAPTCHA Image Recognition',
      description: 'Engineered a sophisticated OCR system utilizing CRNN architecture with BiGRU, achieving 98% accuracy. Optimized training time by 50% and increased F1 score by 10%.',
      tags: ['Python', 'Deep Learning', 'OCR'],
      links: {
        demo: '#',
        github: '#'
      },
      iconComponent: 'captcha'
    }
  ];

  const ProjectIcon = ({ type }) => {
    switch (type) {
      case 'banyan':
        return (
          <div className="icon-design banyan-design">
            {[1, 2, 3, 4, 5].map((columnIndex) => (
              <div key={columnIndex} className={`tree-column column-${columnIndex}`}>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-15, 0, -15],
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4 + columnIndex * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <TreeDeciduous 
                      className={`tree-icon ${i % 2 === 1 ? 'flipped' : ''}`} 
                      size={24} 
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        );
      case 'ellie':
        return (
          <div className="icon-design ellie-design">
            <div className="graduation-caps">
              <motion.div
                animate={{
                  y: [110, 90, 110],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <GraduationCap className="cap-icon main" size={32} />
              </motion.div>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [130, 40, 130],
                    x: [0, 20, -20, 0],
                    rotate: [0, 10, -5, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 8 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <GraduationCap 
                    className={`cap-icon floating cap-${i + 1}`} 
                    size={20} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'flowify':
        return (
          <div className="icon-design flowify-design">
            <div className="flow-rows">
              {[...Array(4)].map((_, rowIndex) => (
                <div key={rowIndex} className={`flow-row row-${rowIndex + 1}`}>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: rowIndex % 2 === 0 ? [0, 60, 0, -60 , 0] : [0, -60, 0, 60, 0], 
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 10 + rowIndex * 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    >
                      <Workflow 
                        className={`workflow-icon ${rowIndex === 1 && i < 4 ? 'main' : ''}`} 
                        size={24} 
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 'allocator':
        return (
          <div className="icon-design allocator-design">
            <div className="gear-system">
              {/* Central main gear */}
              <motion.div
                className="gear-center"
                animate={{ rotate: [0, 360], y: [80, 80] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Settings className="gear-icon main-gear" size={32} />
              </motion.div>
              
              {/* 18 gears arranged in concentric circles */}
              {[...Array(18)].map((_, i) => {
                const angle = (i * 360) / 18; // Distribute evenly in circle
                const radius = i < 6 ? 80 : i < 12 ? 120 : 160; // Three concentric circles
                const size = i < 6 ? 24 : i < 12 ? 20 : 16; // Different sizes for each ring
                
                return (
                  <motion.div
                    key={i}
                    className={`gear-orbit gear-${i + 1}`}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0'
                    }}
                    animate={{ 
                      rotate: [0, i % 2 === 0 ? 360 : -360],
                      x: [
                        Math.cos((angle * Math.PI) / 180) * radius - size/2,
                        Math.cos(((angle + 180) * Math.PI) / 180) * radius - size/2,
                        Math.cos((angle * Math.PI) / 180) * radius - size/2
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * radius - size/2,
                        Math.sin(((angle + 180) * Math.PI) / 180) * radius - size/2,
                        Math.sin((angle * Math.PI) / 180) * radius - size/2
                      ],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 12 + (i % 6),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  >
                    <Settings 
                      className={`gear-icon revolving-gear`} 
                      size={size} 
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      case 'scoreai':
        return (
          <div className="icon-design scoreai-design">
            <div className="book-collection">
              {/* Main central book stack */}
              <div className="book-stack-center">
                
                  <motion.div
                    key={`center-${1}`}
                    className={`book-stack-item stack-${1}`}
                    animate={{
                      y: [-8 + 1 * 2, 5 + 1 * 2, -8 + 1 * 2],
                      rotate: [-1 + 1, 1 + 1, -1 + 1],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 3 + 1 * 0.5,
                      repeat: Infinity,
                      delay: 1 * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <BookOpenCheck className="book-icon main-book" size={32} />
                  </motion.div>
                
              </div>
              
              {/* Floating books in circular pattern */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 60 + (i % 3) * 20; // Varying distances
                const size = 16 + (i % 4) * 2; // Varying sizes
                
                return (
                  <motion.div
                    key={`floating-${i}`}
                    className={`floating-book book-${i}`}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0'
                    }}
                    animate={{
                      x: [
                        Math.cos((angle * Math.PI) / 180) * radius - size/2,
                        Math.cos(((angle + 60) * Math.PI) / 180) * (radius + 15) - size/2,
                        Math.cos(((angle + 120) * Math.PI) / 180) * radius - size/2,
                        Math.cos(((angle + 180) * Math.PI) / 180) * (radius - 10) - size/2,
                        Math.cos((angle * Math.PI) / 180) * radius - size/2
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * radius - size/2,
                        Math.sin(((angle + 60) * Math.PI) / 180) * (radius + 15) - size/2,
                        Math.sin(((angle + 120) * Math.PI) / 180) * radius - size/2,
                        Math.sin(((angle + 180) * Math.PI) / 180) * (radius - 10) - size/2,
                        Math.sin((angle * Math.PI) / 180) * radius - size/2
                      ],
                      rotate: [0, 90, 180, 270, 360],
                      scale: [0.8, 1.1, 0.9, 1.2, 0.8],
                      opacity: [0.6, 1, 0.7, 0.9, 0.6]
                    }}
                    transition={{
                      duration: 8 + (i % 4),
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  >
                    <Book className="book-icon floating-book" size={size} />
                  </motion.div>
                );
              })}
              
              {/* Additional scattered books */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`scattered-${i}`}
                  className={`scattered-book scattered-${i}`}
                  style={{
                    position: 'absolute',
                    left: `${20 + i * 15}%`,
                    top: `${15 + (i % 3) * 25}%`
                  }}
                  animate={{
                    x: [-20, 20, -15, 25, -20],
                    y: [-15, 25, -20, 15, -15],
                    rotate: [i * 30, (i * 30) + 180, (i * 30) + 360],
                    scale: [0.7, 1.3, 0.8, 1.1, 0.7],
                    opacity: [0.4, 0.9, 0.6, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <Book className="book-icon scattered-book" size={14 + i * 2} />
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'captcha':
        return (
          <div className="icon-design captcha-design">
            <div className="scan-container">
              <motion.div
                animate={{
                  scaleY: [1, 0.1, 1],
                  scaleX: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Eye className="scan-icon main-eye" size={32} />
              </motion.div>
              <motion.div 
                className="scan-line"
                animate={{
                  y: [-10, 100],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="corner-brackets">
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position, index) => (
                  <motion.div 
                    key={position}
                    className={`bracket ${position}`}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
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

  const cardVariants = {
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
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Love what you build. Build what others love.</p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.article 
              key={project.id} 
              className="project-card"
              variants={cardVariants}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <ProjectIcon type={project.iconComponent} />
                <div className="project-overlay">
                  <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                  <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 