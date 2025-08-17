import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message, type = 'info') => {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
      color: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease-out;
      max-width: 400px;
      font-weight: 500;
    `;

    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    `;

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.8;
      transition: opacity 0.2s ease;
    `;

    closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.8');

    document.body.appendChild(notification);

    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    });

    const autoRemove = setTimeout(() => {
      removeNotification(notification);
    }, 5000);

    closeBtn.addEventListener('click', () => {
      clearTimeout(autoRemove);
      removeNotification(notification);
    });

    function removeNotification(element) {
      element.style.opacity = '0';
      element.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 300);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      showNotification('Thank you! Your message has been sent.', 'success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactLinks = [
    {
      label: 'talrejayuvvan@gmail.com',
      href: 'mailto:talrejayuvvan@gmail.com'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yuvvan-talreja-3b759a13b/'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/yuvvantalreja'
    },
    {
      label: 'Twitter/X',
      href: 'https://x.com/yuvvantalreja'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/yuvvan_talreja/'
    }
  ];

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Ready to bring your ideas to life</p>
        </motion.div>
        
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in new opportunities, internships, and exciting projects. 
              Whether you have a question about my work or just want to connect, feel free to reach out.
            </p>
            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 