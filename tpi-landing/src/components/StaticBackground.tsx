'use client';

import { motion } from 'framer-motion';

const backgroundPatterns = [
  {
    color: 'from-blue-400 to-blue-600',
    image: '/backgrounds/fondo-colores-tpi-1.png'
  },
  {
    color: 'from-red-400 to-red-600',
    image: '/backgrounds/fondo-colores-tpi-2.png'
  },
  {
    color: 'from-yellow-400 to-yellow-600',
    image: '/backgrounds/fondo-colores-tpi-4.png'
  },
  {
    color: 'from-green-400 to-green-600',
    image: '/backgrounds/fondo-colores-tpi-6.png'
  },
  {
    color: 'from-purple-400 to-purple-600',
    image: '/backgrounds/fondo-colores-tpi-8.png'
  }
];

interface StaticBackgroundProps {
  sectionIndex: number;
}

export default function StaticBackground({ sectionIndex }: StaticBackgroundProps) {
  const pattern = backgroundPatterns[sectionIndex % backgroundPatterns.length];
  
  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        backgroundImage: `url(${pattern.image})`,
        backgroundSize: '80px 80px',
        backgroundRepeat: 'repeat'
      }}
    />
  );
} 