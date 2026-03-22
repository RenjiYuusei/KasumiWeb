'use client';

import { useEffect, useRef } from 'react';
import { initParticles } from '@/lib/particles';

interface ParticlesBackgroundProps {
  theme?: 'purple' | 'green';
  density?: number;
}

export function ParticlesBackground({
  theme = 'purple',
  density = 100,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize and animate particles
    const cleanup = initParticles(canvas, ctx, theme, density);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cleanup?.();
    };
  }, [theme, density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-gradient-dark"
      style={{ display: 'block' }}
    />
  );
}
