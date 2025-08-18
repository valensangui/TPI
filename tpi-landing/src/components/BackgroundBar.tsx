'use client';

import Image from 'next/image';

interface BackgroundBarProps {
  image: string;
  height?: string;
}

export default function BackgroundBar({ image, height = "h-16" }: BackgroundBarProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${height} overflow-hidden`}>
      {/* Imagen de fondo que ocupa toda la barra */}
      <div 
        className="relative w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: '500px 100%'
        }}
      >
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-10" />
      </div>
    </div>
  );
}
