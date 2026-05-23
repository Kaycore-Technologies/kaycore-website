'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = 'Before and after comparison',
  className = '',
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950/5 ${className}`}>
      <div className="relative aspect-video">
        <Image
          src={afterSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
          priority
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <Image
            src={beforeSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <span className="rounded-full bg-white/80 dark:bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-900 dark:text-white shadow-sm">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <span className="rounded-full bg-white/80 dark:bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-900 dark:text-white shadow-sm">
          {afterLabel}
        </span>
      </div>

      {/* Slider */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-slate-900/30 to-transparent">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <motion.div
          className="mt-2 h-1 rounded-full bg-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  );
}
