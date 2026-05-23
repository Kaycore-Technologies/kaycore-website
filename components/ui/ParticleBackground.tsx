'use client';

import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
}

export function ParticleBackground({ 
  className = "absolute inset-0 w-full h-full pointer-events-none z-[1]", 
  particleCount = 50 
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = [];
    const connectionDistance = 120;
    const mouse = { x: -9999, y: -9999, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow subtle movement
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        // Curated cyan/indigo particles matching Kaycore style
        this.baseColor = Math.random() > 0.5 ? 'rgba(34, 211, 238, ' : 'rgba(99, 102, 241, ';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Softly push away from mouse
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor + '0.5)';
        ctx.shadowBlur = 4;
        ctx.shadowColor = this.baseColor === 'rgba(34, 211, 238, ' ? '#22d3ee' : '#6366f1';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for next drawings
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    // Attach events
    window.addEventListener('resize', handleResize);
    // Listen to global window for mousemoves to ensure responsiveness all over the viewport
    window.addEventListener('mousemove', handleMouseMove as any);
    window.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
