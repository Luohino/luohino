import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Instagram } from 'lucide-react';


// Custom X (Twitter) icon (2023 rebrand)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.5 3h3.5l-7.5 9.5L21 21h-3.5l-5-6.5L7 21H3.5l7.5-9.5L3 3h3.5l5 6.5L17.5 3z" />
  </svg>
);

// More accurate LeetCode SVG icon
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path d="M34.5 38.5c-2.5 2.5-6.5 2.5-9 0l-11-11c-2.5-2.5-2.5-6.5 0-9l11-11c2.5-2.5 6.5-2.5 9 0 2.5 2.5 2.5 6.5 0 9L23 24l11.5 11.5c2.5 2.5 2.5 6.5 0 9z" fill="#FFA116"/>
    <path d="M13.5 9.5c2.5-2.5 6.5-2.5 9 0l11 11c2.5 2.5 2.5 6.5 0 9l-11 11c-2.5 2.5-6.5 2.5-9 0-2.5-2.5-2.5-6.5 0-9L25 24 13.5 12.5c-2.5-2.5-2.5-6.5 0-9z" fill="#292D3E"/>
    <path d="M32 32c-2.2 2.2-5.8 2.2-8 0-2.2-2.2-2.2-5.8 0-8 2.2-2.2 5.8-2.2 8 0 2.2 2.2 2.2 5.8 0 8z" fill="#fff"/>
    <path d="M32 32c-2.2 2.2-5.8 2.2-8 0-2.2-2.2-2.2-5.8 0-8 2.2-2.2 5.8-2.2 8 0 2.2 2.2 2.2 5.8 0 8z" fill="#FFA116" fillOpacity=".2"/>
    <path d="M36.5 24c0 6.9-5.6 12.5-12.5 12.5S11.5 30.9 11.5 24 17.1 11.5 24 11.5 36.5 17.1 36.5 24z" stroke="#FFA116" strokeWidth="2"/>
  </svg>
);
import Scene3D from './Scene3D';
import xImg from '../../assets/x.png';
import githubImg from '../../assets/github.png';
import instagramImg from '../../assets/instagram.png';
import luoImg from '../../assets/luo.jpg';
import luohImg from '../../assets/luoh.png';

const HeroSection = () => {
  const [currentName, setCurrentName] = useState('Luohino');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(prev => prev === 'Luohino' ? 'Aniket' : 'Luohino');
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3D Carousel logic - FIXED TIMING
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [xImg, githubImg, instagramImg, luoImg, luohImg];

  useEffect(() => {
    // Fixed: Only depend on slides.length, not currentIndex
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % slides.length);
    }, 1000); // Exactly 1 second
    
    return () => clearInterval(id);
  }, [slides.length]); // Removed currentIndex from dependencies

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-20 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-primary/20 border border-primary/30 mb-8 shadow-glow"
            >
              <span className="text-primary font-semibold text-lg">
                Hi, I am{' '}
                <motion.span
                  key={currentName}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-gradient-primary"
                >
                  {currentName}
                </motion.span>
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Full Stack,{' '}
              <span className="text-gradient-hero animate-gradient-shift whitespace-nowrap">
                Vibe Coder
              </span>
              <br />
              & App Developer
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-foreground-subtle mb-6 sm:mb-8 max-w-2xl"
            >
             15-year-old coder & builder | Full Stack & App Dev | Cybersecurity Explorer
Vision-driven digital creator-crafting interactive experiences at the edge of technology
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Button
                onClick={scrollToProjects}
                className="btn-premium text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-lift"
              >
                View My Work
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="glass border-primary/30 text-primary hover:bg-primary/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-lift"
              >
                Get In Touch
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start space-x-4"
            >
              <span className="text-foreground-subtle font-medium">Follow me:</span>
              {[
                { icon: Github, href: 'https://github.com/Luohino', label: 'GitHub' },
                { icon: Instagram, href: 'https://www.instagram.com/luohinoo/?igsh=MXV6cHJ3eDR0c2k5MQ%3D%3D#', label: 'Instagram' },
                { icon: XIcon, href: 'https://x.com/luohino', label: 'X' },
                { icon: null, href: 'https://leetcode.com/luohino', label: 'LeetCode', isLeetCode: true },
              ].map((social, index) => {
                if (social.isLeetCode) {
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener"
                      title="LeetCode"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      className="p-3 rounded-full bg-card/50 border border-border-subtle hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-glow group"
                      aria-label={social.label}
                    >
                      <img 
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" 
                        alt="LeetCode" 
                        className="w-5 h-5 object-contain text-foreground-subtle group-hover:text-primary transition-colors" 
                        style={{ filter: 'invert(70%) sepia(6%) saturate(0%) hue-rotate(180deg) brightness(90%) contrast(90%)' }}
                      />
                    </motion.a>
                  );
                } else {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      className="p-3 rounded-full bg-card/50 border border-border-subtle hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-foreground-subtle hover:text-primary transition-colors" />
                    </motion.a>
                  );
                }
              })}
            </motion.div>
          </motion.div>

          {/* Interactive 3D Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-50 blur-3xl animate-pulse-glow"></div>
              <div className="relative p-2 sm:p-4 lg:p-8 rounded-2xl glass border border-primary/20">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-2 text-gradient-primary">
                  Socials Coverflow
                </h3>
                <div className="h-56 sm:h-48 lg:h-64 rounded-lg overflow-hidden" style={{ perspective: '1000px' }}>
                  <div className="relative h-full flex items-center justify-center select-none">
                    {slides.map((src, i) => {
                      // Calculate position relative to center
                      const pos = (i - currentIndex + slides.length) % slides.length;
                      let style: CSSProperties = {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                        transform: '',
                        zIndex: 1,
                        opacity: 0.2,
                        boxShadow: 'none',
                        filter: 'blur(2px) grayscale(60%)',
                      };
                      if (pos === 0) {
                        // Center
                        style = {
                          ...style,
                          zIndex: 30,
                          opacity: 1,
                          transform: 'translate(-50%, -50%) scale(1.35) rotateY(0deg) translateZ(80px)',
                          boxShadow: '0 16px 48px 0 rgba(255, 255, 255, 0.15), 0 2.5px 16px 0 rgba(0,0,0,0.18)',
                          filter: 'none',
                        };
                      } else if (pos === 1) {
                        // Right
                        style = {
                          ...style,
                          zIndex: 15,
                          opacity: 0.7,
                          transform: 'translate(80%, -50%) scale(0.95) rotateY(-55deg) translateZ(-120px)',
                          filter: 'blur(0.5px) grayscale(20%)',
                        };
                      } else if (pos === slides.length - 1) {
                        // Left
                        style = {
                          ...style,
                          zIndex: 15,
                          opacity: 0.7,
                          transform: 'translate(-180%, -50%) scale(0.95) rotateY(55deg) translateZ(-120px)',
                          filter: 'blur(0.5px) grayscale(20%)',
                        };
                      } else if (pos === 2) {
                        // Far right
                        style = {
                          ...style,
                          zIndex: 5,
                          opacity: 0.15,
                          transform: 'translate(200%, -50%) scale(0.7) rotateY(-80deg) translateZ(-240px)',
                          filter: 'blur(3px) grayscale(80%)',
                        };
                      } else if (pos === slides.length - 2) {
                        // Far left
                        style = {
                          ...style,
                          zIndex: 5,
                          opacity: 0.15,
                          transform: 'translate(-300%, -50%) scale(0.7) rotateY(80deg) translateZ(-240px)',
                          filter: 'blur(3px) grayscale(80%)',
                        };
                      }
                      return (
                        <img
                          key={src}
                          src={src}
                          alt="social"
                          style={style}
                          className="w-40 h-30 lg:w-80 lg:h-450 object-cover shadow-xl select-none pointer-events-none"
                          draggable={false}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden sm:block absolute top-10 sm:top-20 right-4 sm:right-20 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-primary rounded-full opacity-20 blur-sm"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="hidden sm:block absolute bottom-20 sm:bottom-40 left-4 sm:left-10 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-secondary rounded-full opacity-30 blur-sm"
      />

    </section>
  );
};

export default HeroSection;
