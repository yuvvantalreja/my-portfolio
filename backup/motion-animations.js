class MotionController {
    constructor() {
        this.animate = null;
        this.scroll = null;
        this.stagger = null;
        this.timeline = null;
        this.inView = null;
        this.initializeMotion();
    }

    async initializeMotion() {
        try {
            const motionModule = await import("https://cdn.jsdelivr.net/npm/motion@latest/+esm");
            this.animate = motionModule.animate;
            this.scroll = motionModule.scroll;
            this.stagger = motionModule.stagger;
            this.timeline = motionModule.timeline;
            this.inView = motionModule.inView;
            
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.setupAllAnimations();
                });
            } else {
                this.setupAllAnimations();
            }
        } catch (error) {
            console.error('Failed to load motion library:', error);
        }
    }

    setupAllAnimations() {
        if (!this.animate) return;
        
        this.setupHeroAnimations();
        this.setupProjectCardAnimations();
        this.setupIconAnimations();
        this.setupScrollAnimations();
        this.setupNavigationAnimations();
    }

    setupHeroAnimations() {
        const heroTitleSpans = document.querySelectorAll('.hero-title span');
        if (heroTitleSpans.length > 0) {
            this.animate(heroTitleSpans, 
                {
                    opacity: [0, 1],
                    y: [50, 0],
                    scale: [0.8, 1]
                },
                {
                    duration: 0.8,
                    delay: this.stagger(0.2),
                    easing: [0.22, 1, 0.36, 1]
                }
            );
        }

        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            this.animate(heroSubtitle,
                {
                    opacity: [0, 1],
                    y: [30, 0]
                },
                {
                    duration: 1,
                    delay: 0.6,
                    easing: "ease-out"
                }
            );
        }

        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            this.animate(scrollIndicator,
                {
                    opacity: [0, 1],
                    y: [20, 0]
                },
                {
                    duration: 0.8,
                    delay: 1,
                    easing: "ease-out"
                }
            );

            const mouseIcon = scrollIndicator.querySelector('.mouse-icon');
            if (mouseIcon) {
                this.animate(mouseIcon,
                    {
                        y: [0, -10, 0]
                    },
                    {
                        duration: 2,
                        repeat: Infinity,
                        easing: "ease-in-out"
                    }
                );
            }
        }
    }

    setupProjectCardAnimations() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            this.animate(card,
                { opacity: 0, y: 60, scale: 0.9 },
                { duration: 0 }
            );

            this.inView(card, () => {
                this.animate(card,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    {
                        duration: 0.8,
                        delay: index * 0.1,
                        easing: [0.22, 1, 0.36, 1]
                    }
                );
            }, { once: true });

            card.addEventListener('mouseenter', () => {
                this.animate(card,
                    {
                        y: -12,
                        scale: 1.02
                    },
                    {
                        duration: 0.4,
                        easing: [0.22, 1, 0.36, 1]
                    }
                );

                const overlay = card.querySelector('.project-overlay');
                if (overlay) {
                    this.animate(overlay,
                        { opacity: 1 },
                        { duration: 0.3 }
                    );
                }
            });

            card.addEventListener('mouseleave', () => {
                this.animate(card,
                    {
                        y: 0,
                        scale: 1
                    },
                    {
                        duration: 0.4,
                        easing: [0.22, 1, 0.36, 1]
                    }
                );

                const overlay = card.querySelector('.project-overlay');
                if (overlay) {
                    this.animate(overlay,
                        { opacity: 0 },
                        { duration: 0.2 }
                    );
                }
            });
        });
    }

    setupIconAnimations() {
        this.animateBanyanTrees();
        
        this.animateGraduationCaps();
        
        this.animateWorkflowIcons();
        
        this.animateGearSystem();
        
        this.animateBookStack();
        
        this.animateCaptchaScanner();
    }

    animateBanyanTrees() {
        const treeColumns = document.querySelectorAll('.tree-column');
        treeColumns.forEach((column, index) => {
            const icons = column.querySelectorAll('.tree-icon');
            
            icons.forEach((icon, iconIndex) => {
                this.animate(icon,
                    {
                        y: [0, -15, 0],
                        rotate: [0, 2, -2, 0],
                        scale: [1, 1.05, 1]
                    },
                    {
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        delay: iconIndex * 0.3,
                        easing: "ease-in-out"
                    }
                );
            });
        });
    }

    animateGraduationCaps() {
        const mainCap = document.querySelector('.cap-icon.main');
        if (mainCap) {
            this.animate(mainCap,
                {
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.1, 1]
                },
                {
                    duration: 3,
                    repeat: Infinity,
                    easing: "ease-in-out"
                }
            );
        }

        const floatingCaps = document.querySelectorAll('.cap-icon.floating');
        floatingCaps.forEach((cap, index) => {
            this.animate(cap,
                {
                    y: [0, -20, 0],
                    x: [0, 10, -10, 0],
                    rotate: [0, 10, -5, 0],
                    opacity: [0.7, 1, 0.7]
                },
                {
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                    easing: "ease-in-out"
                }
            );
        });
    }

    animateWorkflowIcons() {
        const flowRows = document.querySelectorAll('.flow-row');
        flowRows.forEach((row, index) => {
            const icons = row.querySelectorAll('.workflow-icon');
            
            icons.forEach((icon, iconIndex) => {
                this.animate(icon,
                    {
                        x: index % 2 === 0 ? [0, -30, 0] : [0, 30, 0],
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                    },
                    {
                        duration: 10 + index * 2,
                        repeat: Infinity,
                        delay: iconIndex * 0.1,
                        easing: "ease-in-out"
                    }
                );
            });
        });
    }

    animateGearSystem() {
        const mainGear = document.querySelector('.gear-icon.main-gear');
        if (mainGear) {
            this.animate(mainGear,
                { rotate: [0, 360] },
                {
                    duration: 8,
                    repeat: Infinity,
                    easing: "linear"
                }
            );
        }

        // I want the small gears to revolve around the main gear
        const smallGears = document.querySelectorAll('.gear-icon.small-gear');
        smallGears.forEach((gear, index) => {
            this.animate(gear,
                { rotate: [0, index % 2 === 0 ? 360 : -360]
                },
                {
                    duration: 6 + index,
                    
                    repeat: Infinity,
                    easing: "linear"
                }
            );
        });
    }

    animateBookStack() {
        const mainBook = document.querySelector('.book-icon.main-book');
        if (mainBook) {
            this.animate(mainBook,
                {
                    y: [0, -10, 0],
                    rotate: [-2, 2, -2],
                    scale: [1, 1.05, 1]
                },
                {
                    duration: 3,
                    repeat: Infinity,
                    easing: "ease-in-out"
                }
            );
        }

        const floatingBooks = document.querySelectorAll('.book-icon.floating-book');
        floatingBooks.forEach((book, index) => {
            this.animate(book,
                {
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                    opacity: [0.7, 1, 0.7]
                },
                {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 1,
                    easing: "ease-in-out"
                }
            );
        });
    }

    animateCaptchaScanner() {
        const mainEye = document.querySelector('.scan-icon.main-eye');
        if (mainEye) {
            this.animate(mainEye,
                {
                    scaleY: [1, 0.1, 1],
                    scaleX: [1, 1.1, 1]
                },
                {
                    duration: 3,
                    repeat: Infinity,
                    easing: "ease-in-out"
                }
            );
        }

        const scanLine = document.querySelector('.scan-line');
        if (scanLine) {
            this.animate(scanLine,
                {
                    y: [-10, 100],
                    opacity: [0, 1, 0]
                },
                {
                    duration: 2,
                    repeat: Infinity,
                    easing: "ease-in-out"
                }
            );
        }

        const brackets = document.querySelectorAll('.bracket');
        brackets.forEach((bracket, index) => {
            this.animate(bracket,
                {
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1]
                },
                {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                    easing: "ease-in-out"
                }
            );
        });
    }

    setupScrollAnimations() {
        // About section animation
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            this.inView(aboutContent, () => {
                const textElement = aboutContent.querySelector('.about-text');
                const imageElement = aboutContent.querySelector('.about-image');
                
                if (textElement) {
                    this.animate(textElement,
                        {
                            opacity: [0, 1],
                            x: [-50, 0]
                        },
                        {
                            duration: 0.8,
                            easing: [0.22, 1, 0.36, 1]
                        }
                    );
                }
                
                if (imageElement) {
                    this.animate(imageElement,
                        {
                            opacity: [0, 1],
                            x: [50, 0],
                            scale: [0.9, 1]
                        },
                        {
                            duration: 0.8,
                            delay: 0.2,
                            easing: [0.22, 1, 0.36, 1]
                        }
                    );
                }
            }, { once: true });
        }

        // Timeline items animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            this.animate(item,
                { opacity: 0, x: -50 },
                { duration: 0 }
            );

            this.inView(item, () => {
                this.animate(item,
                    {
                        opacity: 1,
                        x: 0
                    },
                    {
                        duration: 0.6,
                        delay: index * 0.1,
                        easing: [0.22, 1, 0.36, 1]
                    }
                );
            }, { once: true });
        });

        // Skills animation
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((skill, index) => {
            this.animate(skill,
                { opacity: 0, y: 30, scale: 0.9 },
                { duration: 0 }
            );

            this.inView(skill, () => {
                this.animate(skill,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    {
                        duration: 0.5,
                        delay: index * 0.05,
                        easing: "ease-out"
                    }
                );
            }, { once: true });
        });
    }

    setupNavigationAnimations() {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (!nav) return;

        // Scroll-based nav background
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                nav.style.backdropFilter = 'blur(20px)';
            }
        });

        // Nav link hover animations
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.animate(link,
                    {
                        y: -2,
                        scale: 1.05
                    },
                    {
                        duration: 0.2,
                        easing: "ease-out"
                    }
                );
            });

            link.addEventListener('mouseleave', () => {
                this.animate(link,
                    {
                        y: 0,
                        scale: 1
                    },
                    {
                        duration: 0.2,
                        easing: "ease-out"
                    }
                );
            });
        });
    }
}

// Initialize the motion controller
const motionController = new MotionController();