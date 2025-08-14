'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HorizontalScroll from '@/components/HorizontalScroll';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import { executeScrollAfterLoad } from '@/components/SmoothScroll';
import { scrollToTestimonialsSection } from '@/components/SmoothScroll';

// Extender la interfaz Window para incluir nuestra función personalizada
declare global {
  interface Window {
    scrollToTestimonials: () => void;
  }
}

export default function Home() {
  useEffect(() => {
    // Ejecutar scroll automático si viene de otra página
    executeScrollAfterLoad();
    
    // Hacer la función disponible globalmente
    window.scrollToTestimonials = scrollToTestimonialsSection;
  }, []);

  return (
    <main className="relative">
      
      {/* TPI Logo Header */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <Link href="/" className="block">
          <Image 
            src="/logos/tpi-logo.svg" 
            alt="TPI Logo" 
            width={64}
            height={64}
            className="h-16 w-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
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
