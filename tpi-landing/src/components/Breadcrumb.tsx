'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
      className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
        <span className="hidden sm:inline">Inicio</span>
        <span className="sm:hidden">Inicio</span>
      </Link>
      <span className="text-xs sm:text-sm">/</span>
      <button 
        onClick={handleProyectosClick}
        className="hover:text-blue-600 transition-colors duration-200 text-left"
      >
        <span className="hidden sm:inline">Proyectos</span>
        <span className="sm:hidden">Proy.</span>
      </button>
      <span className="text-xs sm:text-sm">/</span>
      <span className="text-gray-900 font-medium truncate max-w-24 sm:max-w-none">
        {clientName}
      </span>
    </motion.nav>
  );
}
