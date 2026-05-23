'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

interface LogoCarouselProps {
  logos: Array<{
    id: number | string;
    name: string;
    imageUrl: string;
  }>;
  speed?: number;
}

export function LogoCarousel({ logos, speed = 30 }: LogoCarouselProps) {
  // Duplicate logos for infinite scroll effect (computed once)
  const duplicatedLogos = useMemo(() => [...logos, ...logos, ...logos], [logos]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-8 sm:gap-12 md:gap-16"
        animate={{
          x: [0, -((100 / 3))+'%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 md:h-24 w-32 sm:w-40 md:w-48 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <div className="relative w-full h-full">
              <Image
                src={logo.imageUrl}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
