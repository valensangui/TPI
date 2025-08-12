'use client';

import { motion } from 'framer-motion';

interface ProjectNavigationProps {
  currentClientId: string;
  allClientIds: string[];
  onNavigate: (clientId: string) => void;
}

export default function ProjectNavigation({ currentClientId, allClientIds, onNavigate }: ProjectNavigationProps) {
  const currentIndex = allClientIds.indexOf(currentClientId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allClientIds.length - 1;
  
  const previousClientId = hasPrevious ? allClientIds[currentIndex - 1] : null;
  const nextClientId = hasNext ? allClientIds[currentIndex + 1] : null;

  const handlePrevious = () => {
    if (previousClientId) {
      onNavigate(previousClientId);
    }
  };

  const handleNext = () => {
    if (nextClientId) {
      onNavigate(nextClientId);
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
    >
      {/* Flecha Anterior */}
      <button
        onClick={handlePrevious}
        disabled={!hasPrevious}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          hasPrevious
            ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            : 'text-gray-400 cursor-not-allowed'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Anterior</span>
      </button>

      {/* Indicador de Progreso */}
      <div className="flex items-center gap-2 px-4 py-2">
        <span className="text-sm text-gray-600">
          {currentIndex + 1} de {allClientIds.length}
        </span>
      </div>

      {/* Flecha Siguiente */}
      <button
        onClick={handleNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          hasNext
            ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            : 'text-gray-400 cursor-not-allowed'
        }`}
      >
        <span className="text-sm font-medium">Siguiente</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
}
