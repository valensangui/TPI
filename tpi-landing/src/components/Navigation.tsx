'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'services', label: 'Servicios' },
  { id: 'team', label: 'Equipo' },
  { id: 'testimonials', label: 'Marcas' },
  { id: 'contact', label: 'Contacto' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section is currently in view
      // Cada sección ocupa aproximadamente 2.4 "pantallas" de scroll (1200vh / 5 secciones = 240vh cada una)
      const sectionHeight = windowHeight * 2.4;
      
      let currentSection = 0;
      
      if (scrollPosition < sectionHeight * 0.5) {
        currentSection = 0; // Hero
      } else if (scrollPosition < sectionHeight * 1.5) {
        currentSection = 1; // Services
      } else if (scrollPosition < sectionHeight * 2.5) {
        currentSection = 2; // Team
      } else if (scrollPosition < sectionHeight * 3.5) {
        currentSection = 3; // Testimonials
      } else {
        currentSection = 4; // Contact
      }
      
      const sectionId = sections[currentSection]?.id || 'hero';
      setActiveSection(sectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionIndex = sections.findIndex(s => s.id === sectionId);
    if (sectionIndex !== -1) {
      const windowHeight = window.innerHeight;
      // Cada sección ocupa 2.4 pantallas de scroll
      const sectionHeight = windowHeight * 2.4;
      const targetScroll = sectionIndex * sectionHeight;
      
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/20 backdrop-blur-xl rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border border-white/30 shadow-2xl">
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-semibold transition-colors duration-300 ${
                activeSection === section.id
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-white/30 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
} 