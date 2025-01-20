import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X as XIcon, Github as GithubIcon, Linkedin as LinkedinIcon, 
         Mail as MailIcon, ExternalLink as ExternalLinkIcon, Loader2 } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Taskly - Task Management System",
      description: "Built a full-stack task management application with real-time updates, OAuth2.0 authentication, and Firebase notifications. Features include task prioritization, deadline tracking, and team collaboration tools.",
      tags: ["React", "Node.js", "Firebase", "OAuth2.0", "REST API"],
      image: "/images/taskly.png",
      githubLink: "https://github.com/yuvvantalreja/taskly",
      demoLink: "#"
    },
    {
      title: "Dynamic Memory Allocator",
      description: "Implemented a custom memory allocator in C with efficient memory management strategies. Achieved performance comparable to standard malloc while reducing memory fragmentation by 40% through optimized block coalescing.",
      tags: ["C", "Systems Programming", "Memory Management", "Algorithms"],
      image: "/images/memory.png",
      githubLink: "https://github.com/yuvvantalreja/dynamic-memory-allocator",
      demoLink: "#"
    },
    {
      title: "Network Operations Cost Analysis",
      description: "Researched and analyzed performance implications of kernel bypass architectures. Developed benchmarking tools to measure latency and throughput, revealing 30% performance improvement in network operations.",
      tags: ["C++", "Networking", "Performance Analysis", "Linux Kernel"],
      image: "/images/DPDK.png",
      githubLink: "https://github.com/yuvvantalreja/deconstructing-the-cost-of-network-operations-in-Kernel-Bypass-Architectures",
      demoLink: "#"
    },
    {
      title: "Optical Character Recognition",
      description: "Engineered a sophisticated OCR system utilizing CRNN architecture with BiGRU, achieving 98% accuracy. Optimized training time by 50% and increased F1 score by 10%.",
      tags: ["Python", "PyTorch", "Deep Learning", "Computer Vision"],
      image: "/images/ocr.jpg",
      githubLink: "https://github.com/yuvvantalreja",
      demoLink: "#"
    },
    {
      title: "Micro-pollution Detection",
      description: "Innovative solution for detecting air pollution through microscopic leaf analysis. Built dataset of 8,300 images and created both Raspberry Pi and mobile implementations.",
      tags: ["Python", "OpenCV", "Image Processing", "IoT"],
      image: "/images/plant.jpg",
      githubLink: "https://github.com/yuvvantalreja",
      demoLink: "#"
    },
    {
      title: "SightSafe AI",
      description: "Assistive technology for blind individuals using YOLO and OCR, achieving 92% accuracy in real-world testing. Implemented RANSAC algorithm for road lane detection.",
      tags: ["Python", "YOLO", "OCR", "Computer Vision"],
      image: "/images/crossroad.png",
      githubLink: "https://github.com/yuvvantalreja",
      demoLink: "#"
    }
  ];

  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Infosys Instep Program",
      period: "May 2024 - Jul 2024",
      description: "Developed a scalable web-application for employee task management with OAuth2.0 authentication and Firebase notifications. Created comprehensive system documentation."
    },
    {
      role: "Research Intern",
      company: "Respirer Living Sciences",
      period: "May 2024 - Jul 2024",
      description: "Built deep learning pipeline for crop disease analysis with 95% accuracy. Developed API for farmer diagnostics, potentially increasing yields by 15%."
    },
    {
      role: "Machine Learning Intern",
      company: "Auroville Consulting",
      period: "Dec 2022 - Jan 2023",
      description: "Implemented time series analysis for energy load prediction using ARIMA and Prophet models. Created 3D visualizations for multi-dimensional relationship analysis."
    }
  ];

  const skills = {
    languages: ["Python", "Java", "JavaScript", "Flutter", "C++", "SQL"],
    frameworks: ["TensorFlow", "PyTorch", "ReactJS", "NodeJS", "Django"],
    tools: ["Git", "VSCode", "Docker", "IntelliJ"],
    libraries: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "OpenCV", "NLTK"]
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [projectsVisible, setProjectsVisible] = useState(true);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId === 'projects') setProjectsVisible(true);
          if (sectionId === 'skills') setSkillsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['projects', 'skills'].map(id => document.getElementById(id));
    sections.forEach(section => section && observer.observe(section));
    return () => sections.forEach(section => section && observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['about', 'projects', 'experience', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto" />
        <p className="mt-4 text-gray-600 animate-pulse">Loading amazing content...</p>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }) => (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl 
                 transform transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 
                      group-hover:opacity-70 transition-opacity duration-300" />
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 
                     group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 
                      group-hover:opacity-100 transition-all duration-300 translate-y-4 
                      group-hover:translate-y-0">
          <ExternalLinkIcon className="text-white w-8 h-8" />
        </div>
      </div>
      <div className="p-6 transform transition-transform duration-300 group-hover:scale-[0.98]">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full 
                       transition-all duration-300 hover:bg-blue-200 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 
                     hover:scale-110"
          >
            <GithubIcon size={20} />
          </a>
          <a 
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-500 transition-all 
                     duration-300 hover:scale-105"
          >
            Live Demo <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );

  const ExperienceCard = ({ experience }) => (
    <div className="border-l-4 border-blue-500 pl-4 py-4 relative group 
                   transition-all duration-500 hover:pl-6">
      <div className="absolute left-[-9px] top-1/2 transform -translate-y-1/2 w-3 h-3 
                    bg-blue-500 rounded-full transition-all duration-300 
                    group-hover:scale-150 group-hover:bg-blue-600" />
      <h3 className="text-xl font-semibold text-gray-900 transition-all duration-300 
                   group-hover:text-blue-600">{experience.role}</h3>
      <p className="mt-1 text-gray-600">{experience.company} • {experience.period}</p>
      <p className="mt-2 text-gray-600 transition-all duration-300 
                   group-hover:text-gray-900">{experience.description}</p>
    </div>
  );

  const SkillCard = ({ title, skills, colorClass }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 transform hover:-translate-y-2 
                   hover:shadow-xl transition-all duration-500">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`px-3 py-1 text-sm ${colorClass} rounded-full transform 
                     transition-all duration-300 hover:scale-110 hover:rotate-1`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <span className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-gray-800'
              } hover:scale-105 transform cursor-pointer`}>
                Yuvvan Talreja
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['about', 'projects', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                    ${activeSection === section 
                      ? 'text-gray-900 bg-gray-100/80 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                    } relative group overflow-hidden`}
                >
                  <span className="relative z-10">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-100 to-gray-50 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform 
                              duration-300 origin-left -z-0 opacity-50">
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 
                         hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-300 
                         transform hover:scale-105"
              >
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 backdrop-blur-lg bg-white/80' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-3 space-y-2">
            {['about', 'projects', 'experience', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full px-4 py-2 text-sm font-medium rounded-lg 
                         transition-all duration-300 ${
                           activeSection === section
                             ? 'text-gray-900 bg-gray-100/80 shadow-sm'
                             : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                         }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with New Buttons */}
      <div id="about" className="relative bg-white pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center relative z-10">
            {/* Profile image section */}
            <div className="mb-8 transform hover:scale-105 transition-all duration-500">
              <div className="relative group">
                <img
                  src="/images/profile.jpeg"
                  alt="Yuvvan Talreja"
                  className="rounded-full w-48 h-48 object-cover shadow-lg 
                           transition-transform duration-500 group-hover:rotate-6"
                />
                <div className="absolute inset-0 rounded-full bg-gray-500 opacity-0 
                              group-hover:opacity-20 transition-all duration-500 
                              group-hover:rotate-12" />
              </div>
            </div>
            
            {/* Text and buttons */}
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl 
                           sm:tracking-tight lg:text-6xl opacity-0 animate-fadeIn">
                Hello, I'm Yuvvan Talreja
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 opacity-0 animate-fadeIn"
                 style={{ animationDelay: '200ms' }}>
                Electrical and Computer Engineering student at Carnegie Mellon University, 
                passionate about machine learning, computer vision, and full-stack development.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-gray-800 text-base 
                           font-medium rounded-md shadow-sm text-white bg-gray-900 
                           hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-gray-700 transition-all duration-300"
                >
                  Download Resume
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base 
                           font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 
                           transition-all duration-300"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full 
                         opacity-30 animate-float" 
               style={{ animationDelay: '0s' }} />
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-100 rounded-full 
                         opacity-30 animate-float" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-green-100 rounded-full 
                         opacity-30 animate-float" 
               style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 opacity-0 animate-fadeIn">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Experience</h2>
          <div className="mt-12 space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Technical Skills</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <SkillCard 
              title="Programming Languages" 
              skills={skills.languages}
              colorClass="bg-blue-100 text-blue-800"
            />
            <SkillCard 
              title="Frameworks" 
              skills={skills.frameworks}
              colorClass="bg-green-100 text-green-800"
            />
            <SkillCard 
              title="Developer Tools" 
              skills={skills.tools}
              colorClass="bg-purple-100 text-purple-800"
            />
            <SkillCard 
              title="Libraries" 
              skills={skills.libraries}
              colorClass="bg-orange-100 text-orange-800"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Get in Touch
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              { icon: GithubIcon, href: 'https://github.com/yuvvantalreja' },
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/yuvvan-talreja-3b759a13b' },
              { icon: MailIcon, href: 'mailto:talrejayuvvan@gmail.com' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 p-3 rounded-full transition-all duration-300 
                         hover:text-gray-900 hover:bg-gray-100 hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(0, 20px); }
          100% { transform: translate(0, 0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeIn {
          opacity: 0;
          will-change: opacity, transform;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;