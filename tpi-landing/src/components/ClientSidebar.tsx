'use client';

import { motion } from 'framer-motion';

interface ClientSidebarProps {
  client: any;
  currentClientId: string;
  allClientIds: string[];
  onNavigate: (clientId: string) => void;
  onBackToTestimonials: () => void;
}

export default function ClientSidebar({ 
  client, 
  currentClientId, 
  allClientIds, 
  onNavigate, 
  onBackToTestimonials 
}: ClientSidebarProps) {
  const currentIndex = allClientIds.indexOf(currentClientId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allClientIds.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      onNavigate(allClientIds[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onNavigate(allClientIds[currentIndex + 1]);
    }
  };

  return (
    <motion.aside
      className="lg:w-80 lg:sticky lg:top-8 lg:h-fit bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Logo del Cliente */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <img
          src={client.logo}
          alt={`Logo de ${client.name}`}
          className="mx-auto h-20 w-auto object-contain mb-4 pointer-events-none"
        />
        <h1 className="text-2xl font-bold text-gray-900 font-cairo">
          {client.name}
        </h1>
      </motion.div>

      {/* Descripción Breve */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 text-sm leading-relaxed pointer-events-none">
          {client.description}
        </p>
      </motion.div>

      {/* Chips de Servicios */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-semibold text-gray-900 mb-3 pointer-events-none">Servicios</h3>
        <div className="flex flex-wrap gap-2">
          {client.services.map((service: string, index: number) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium pointer-events-none"
            >
              {service}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-semibold text-gray-900 mb-3 pointer-events-none">Resumen</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center pointer-events-none">
            <div className="text-2xl font-bold text-blue-600">{client.services.length}</div>
            <div className="text-xs text-gray-500">Servicios</div>
          </div>
          <div className="text-center pointer-events-none">
            <div className="text-2xl font-bold text-purple-600">{client.year}</div>
            <div className="text-xs text-gray-500">Año</div>
          </div>
          <div className="text-center pointer-events-none">
            <div className="text-2xl font-bold text-green-600">{client.images.length}</div>
            <div className="text-xs text-gray-500">Imágenes</div>
          </div>
        </div>
      </motion.div>

      {/* Botón Visitar Website */}
      {client.website && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href={client.website.startsWith('http') ? client.website : `https://${client.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visitar Website
          </a>
        </motion.div>
      )}

      {/* Navegación entre Proyectos */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-gray-900 pointer-events-none">Navegación entre Proyectos</h3>
          <p className="text-xs text-gray-500 mt-1 pointer-events-none">Cambia entre diferentes clientes</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePrevious();
            }}
            disabled={!hasPrevious}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              hasPrevious
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                : 'bg-gray-50 text-gray-400 cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Proyecto Anterior
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNext();
            }}
            disabled={!hasNext}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              hasNext
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                : 'bg-gray-50 text-gray-400 cursor-not-allowed'
            }`}
          >
            Siguiente Proyecto
            <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="text-center mt-3 text-xs text-gray-500 bg-gray-50 rounded-lg py-2 pointer-events-none">
          <span className="font-medium text-gray-700">{currentIndex + 1}</span> de {allClientIds.length} proyectos
        </div>
      </motion.div>

      {/* Botón Volver a Marcas */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <button
          onClick={onBackToTestimonials}
          className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Marcas
        </button>
      </motion.div>
    </motion.aside>
  );
}
