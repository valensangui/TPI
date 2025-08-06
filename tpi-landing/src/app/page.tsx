'use client';

import { useState, useEffect } from 'react';
import HorizontalScroll from '@/components/HorizontalScroll';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import StaticBackground from '@/components/StaticBackground';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
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
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Static Background - Only show for non-hero sections */}
      {activeSection > 0 && <StaticBackground sectionIndex={activeSection} />}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Horizontal Scroll Container */}
      <HorizontalScroll>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </HorizontalScroll>
    </main>
  );
}
