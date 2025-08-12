'use client';

import { motion } from 'framer-motion';
import { navigateToTestimonials } from './SmoothScroll';

interface BreadcrumbProps {
  clientName: string;
}

export default function Breadcrumb({ clientName }: BreadcrumbProps) {
  const handleProyectosClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToTestimonials();
  };

  return (
    <motion.nav
      className="flex items-center space-x-2 text-sm text-gray-600"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <a href="/" className="hover:text-blue-600 transition-colors duration-200">
        Inicio
      </a>
      <span>/</span>
      <button 
        onClick={handleProyectosClick}
        className="hover:text-blue-600 transition-colors duration-200 text-left"
      >
        Proyectos
      </button>
      <span>/</span>
      <span className="text-gray-900 font-medium">{clientName}</span>
    </motion.nav>
  );
}
