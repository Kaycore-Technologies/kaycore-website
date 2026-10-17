'use client';

import { useEffect, useRef } from 'react';

/*
 * Homepage background: an invisible dot grid fixed to the viewport. Dots appear only where
 * something is happening: around the pointer, and in soft ripples that expand now and then,
 * all in the Kaycore logo gradient (cyan, periwinkle, purple). It sits behind the page
 * content (negative z-index), so it never covers text.
 */

const GAP = 26;
const SPOTLIGHT = 200;
const RIPPLE_EVERY = 2.2; // seconds
const RIPPLE_SPEED = 260; // px per second
const RIPPLE_LIFE = 3; // seconds

const CYAN = [41, 182, 224];
const PERI = [104, 125, 241];
const PURPLE = [147, 51, 234];

const mix = (a: number[], b: number[], t: number) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const ombre = (t: number) => (t < 0.5 ? mix(CYAN, PERI, t * 2) : mix(PERI, PURPLE, (t - 0.5) * 2));

export function DotGridBackground({ className = 'fixed inset-0 w-full h-full pointer-events-none -z-10' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let lastRipple = -RIPPLE_EVERY;
    const pointer = { x: -9999, y: -9999, active: false };
    const ripples: { x: number; y: number; t0: number }[] = [];

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      if (!reduceMotion && t - lastRipple > RIPPLE_EVERY) {
        lastRipple = t;
        ripples.push({ x: Math.random() * width, y: Math.random() * height, t0: t });
        if (ripples.length > 4) ripples.shift();
      }
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          let boost = 0;
          if (pointer.active) {
            const d = Math.hypot(x - pointer.x, y - pointer.y);
            if (d < SPOTLIGHT) boost = 1 - d / SPOTLIGHT;
          }
          for (const rp of ripples) {
            const age = t - rp.t0;
            if (age > RIPPLE_LIFE) continue;
            const band = Math.abs(Math.hypot(x - rp.x, y - rp.y) - age * RIPPLE_SPEED);
            if (band < 30) boost = Math.max(boost, (1 - band / 30) * (1 - age / RIPPLE_LIFE) * 0.9);
          }
          if (boost < 0.02) continue; // resting dots stay hidden
          const c = ombre(x / width);
          ctx.fillStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${0.1 + boost * 0.8})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.1 + boost * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (now: number) => {
      draw(now / 1000);
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    size();
    raf = requestAnimationFrame(loop);
    window.addEventListener('resize', size);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
