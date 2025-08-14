'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface MasonryGalleryProps {
  images: string[];
  title: string;
}

export default function MasonryGallery({ images, title }: MasonryGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  // Función para detectar si un archivo es video
  const isVideo = (filePath: string): boolean => {
    const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv'];
    const extension = filePath.toLowerCase().substring(filePath.lastIndexOf('.'));
    return videoExtensions.includes(extension);
  };

  const openModal = (index: number) => {
    setSelectedMedia(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia + 1) % images.length);
    }
  };

  const prevMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia(selectedMedia === 0 ? images.length - 1 : selectedMedia - 1);
    }
  };

  if (images.length === 0) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ once: true }}
      >
        <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No hay imágenes disponibles</h3>
        <p className="text-gray-500">Este cliente aún no tiene imágenes de proyectos cargadas.</p>
      </motion.div>
    );
  }

  return (
    <>
      {/* Galería Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
        {images.map((media, index) => {
          const isVideoFile = isVideo(media);
          
          return (
            <motion.div
              key={index}
              className="break-inside-avoid mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                className="group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(index);
                  }
                }}
              >
                {isVideoFile ? (
                  <video
                    src={media}
                    className="w-full h-auto object-cover pointer-events-none"
                    muted
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={media}
                    alt={`${title} - imagen ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover pointer-events-none"
                    loading="lazy"
                  />
                )}
                
                {/* Overlay con icono */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {isVideoFile ? (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal de imagen/video ampliada */}
      <AnimatePresence>
        {selectedMedia !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-full w-full h-full">
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-colors duration-200"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Botón anterior imagen/video */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-colors duration-200"
                title="Imagen/Video anterior"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Botón siguiente imagen/video */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-colors duration-200"
                title="Siguiente imagen/video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Contenido del modal */}
              {isVideo(images[selectedMedia]) ? (
                <video
                  src={images[selectedMedia]}
                  className="max-w-full max-h-full object-contain w-full h-full"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <Image
                  src={images[selectedMedia]}
                  alt={`${title} - imagen ${selectedMedia + 1}`}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain w-full h-full"
                />
              )}

              {/* Indicador de posición */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm">
                <span className="font-medium">{selectedMedia + 1}</span> de {images.length} {isVideo(images[selectedMedia]) ? 'videos' : 'imágenes'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
