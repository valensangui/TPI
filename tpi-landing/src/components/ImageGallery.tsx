'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
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

  return (
    <>
      {/* Grid de imágenes y videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {images.map((media, index) => {
          const isVideoFile = isVideo(media);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-video overflow-hidden">
                {isVideoFile ? (
                  // Renderizar video
                  <video
                    src={media}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    muted
                    preload="metadata"
                  />
                ) : (
                  // Renderizar imagen
                  <img
                    src={media}
                    alt={`${title} - Imagen ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                
                {/* Overlay con icono */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {isVideoFile ? (
                      // Icono de play para videos
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      // Icono de zoom para imágenes
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Botón anterior */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Botón siguiente */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Contenido del modal */}
              {isVideo(images[selectedMedia]) ? (
                // Renderizar video en el modal
                <video
                  src={images[selectedMedia]}
                  className="max-w-full max-h-full object-contain"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                // Renderizar imagen en el modal
                <img
                  src={images[selectedMedia]}
                  alt={`${title} - Imagen ${selectedMedia + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              )}

              {/* Indicador de posición */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {selectedMedia + 1} de {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
