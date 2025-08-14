'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -(scrollWidth - containerWidth)]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const scrollElement = containerRef.current.querySelector('.scroll-content');
        if (scrollElement) {
          setScrollWidth(scrollElement.scrollWidth);
          setContainerWidth(containerRef.current.clientWidth);
        }
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ height: '1200vh' }} // Aumentamos significativamente la altura para más espacio de scroll
    >
      <motion.div
        className="scroll-content flex absolute top-0 left-0 h-screen w-full sm:w-auto"
        style={{
          x,
          position: 'fixed',
          top: 0,
          left: 0,
          width: 'max-content'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
} 