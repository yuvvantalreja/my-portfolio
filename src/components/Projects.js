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
        demo: 'https://youtu.be/sQdA0E5u7ao',
        github: 'https://github.com/yuvvantalreja/ellie-ai'
      },
      iconComponent: 'ellie'
    },
    {
      id: 'flowify',
      title: 'Flowify',
      description: 'An intelligent web application that transforms video content into intuitive, visual mind maps using advanced NLP techniques and clustering algorithms. Creates hierarchical visualizations without requiring generative AI.',
      tags: ['NLP', 'Clustering'],
      links: {
        demo: 'https://youtu.be/yjlV7t9mcps?si=BcT8aV1DTdma_qkK',
        github: 'https://github.com/yuvvantalreja/flowify'
      },
      iconComponent: 'flowify'
    },
    {
      id: 'allocator',
      title: 'Dynamic Memory Allocator',
      description: 'Implemented a custom memory allocator in C with efficient memory management strategies. Achieved performance comparable to standard malloc while reducing memory fragmentation by 40% through optimized block coalescing.',
      tags: ['C', 'Memory Management'],
      links: {
        demo: 'https://github.com/yuvvantalreja/dynamic-memory-allocator',
        github: 'https://github.com/yuvvantalreja/dynamic-memory-allocator'
      },
      iconComponent: 'allocator'
    },
    {
      id: 'scoreai',
      title: 'Score.ai',
      description: 'AI-powered application for automated grading of handwritten assignments. Uses OCR and natural language processing to analyze student submissions and provide detailed feedback with interfaces for both students and instructors.',
      tags: ['Python', 'FastAPI', 'OCR'],
      links: {
        demo: 'https://github.com/yuvvantalreja/score-ai',
        github: 'https://github.com/yuvvantalreja/score-ai'
      },
      iconComponent: 'scoreai'
    },
    {
      id: 'captcha',
      title: 'CAPTCHA Image Recognition',
      description: 'Engineered a sophisticated OCR system utilizing CRNN architecture with BiGRU, achieving 98% accuracy. Optimized training time by 50% and increased F1 score by 10%.',
      tags: ['Python', 'Deep Learning', 'OCR'],
      links: {
        demo: 'https://colab.research.google.com/drive/1xoJURWvjInwRa6f4TSCr7HLTsDbY3A3O',
        github: 'https://github.com/yuvvantalreja/CAPTCHA-Image-Recognition-using-CRNN-and-BiGRU'
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
        const blockCount = 8;
        const blocks = Array.from({ length: blockCount });

        return (
          <div className="icon-design allocator-design" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', width: '90%', height: '60%', gap: '6px', alignItems: 'center', justifyContent: 'center' }}>
              {blocks.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0.7, opacity: 0.7 }}
                  animate={{
                    scaleY: [0.7, 1.1, 1, 0.7],
                    opacity: [0.7, 1, 0.9, 0.7],
                    backgroundColor: [
                      'rgba(135,176,174,0.15)',
                      'rgba(135,176,174,0.7)',
                      'rgba(135,176,174,1)',
                      'rgba(135,176,174,0.15)'
                    ],
                    boxShadow: [
                      '0 2px 8px rgba(135,176,174,0.05)',
                      '0 4px 16px rgba(135,176,174,0.15)',
                      '0 6px 24px rgba(135,176,174,0.18)',
                      '0 2px 8px rgba(135,176,174,0.05)'
                    ]
                  }}
                  transition={{
                    duration: 2.5 + i * 0.2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: i * 0.18,
                    ease: 'easeInOut'
                  }}
                  style={{
                    width: `${12 + (i % 3) * 10}%`,
                    height: '100%',
                    borderRadius: '10px',
                    margin: '0 2px'
                  }}
                />
              ))}
            </div>
            <motion.div
              className="allocator-pointer"
              style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '10%',
                height: '80%',
                borderRadius: '8px',
                background: 'rgba(33, 33, 33, 0.12)',
                border: '2px solid #87b0ae',
                zIndex: 2,
                pointerEvents: 'none'
              }}
              animate={{
                left: ['5%', '80%', '5%'],
                boxShadow: [
                  '0 0 0 0 #87b0ae44',
                  '0 0 16px 4px #87b0ae88',
                  '0 0 0 0 #87b0ae44'
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        );

      case 'scoreai':
        return (
          <div className="icon-design scoreai-design">
            <div className="book-collection">
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
              
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 60 + (i % 3) * 20; 
                const size = 16 + (i % 4) * 2; 
                
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