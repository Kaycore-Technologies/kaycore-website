'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui';

export function IntroVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const userInteractedRef = useRef<boolean>(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // 30% visibility to trigger play
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play video when scrolling into view if the user hasn't manually paused it
          if (!userInteractedRef.current) {
            // Try to play unmuted on scroll
            video.muted = false;
            setIsMuted(false);
            video.play().catch(() => {
              // Fallback to muted autoplay if browser blocks audio autoplay
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => {});
            });
          }
        } else {
          // Pause video when scrolled out of view to save battery/performance
          video.pause();
        }
      });
    }, observerOptions);

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlay = () => {
    // If the user clicks play, let's allow it but record interaction if it wasn't triggered by script
    // (Script plays when entering view. Standard video element trigger triggers 'play' event)
  };

  const handlePause = () => {
    // If the user manually pauses the video, respect their choice and stop scroll autoplaying
    if (document.activeElement === videoRef.current || videoRef.current?.controls) {
      userInteractedRef.current = true;
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 lg:py-32 relative z-10 overflow-hidden bg-gradient-to-b from-transparent to-[#02050c]"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeader
          badge="Corporate Intro"
          title="Kaycore Technologies in"
          highlight="Focus"
          description="Learn about our next-generation quality engineering services and the high-impact digital healthcare products we are building."
        />

        <div className="max-w-4xl mx-auto mt-12 relative group">
          {/* Neon outer glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700 pointer-events-none" />
          
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
            <video 
              ref={videoRef}
              controls
              muted={isMuted}
              playsInline
              onPlay={handlePlay}
              onPause={handlePause}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
              src="/assets/videos/intro-video.mp4" 
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
