'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect mobile for performance tuning
    const isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      // Use lower resolution on mobile for performance
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fewer particles on mobile, full count on desktop
    const particleCount = isMobile ? 20 : 50;
    const colors = ['#00A6FF', '#00FF1A', '#FBFF8C'];
    // 20% speed boost: 0.5 → 0.6
    const speed = 0.6;
    // Shorter connection distance on mobile
    const connectionDistance = isMobile ? 60 : 100;
    // Lower glow on mobile
    const glowBlur = isMobile ? 0 : 10;

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Skip frames on mobile for smoother experience
    let frameCount = 0;
    const frameSkip = isMobile ? 2 : 1; // Draw every Nth frame on mobile

    const w = window.innerWidth;
    const h = window.innerHeight;

    const animate = () => {
      frameCount++;

      if (frameCount % frameSkip !== 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Clear canvas with slight fade for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, w, h);

      // Set shadow once (or skip on mobile)
      if (glowBlur > 0) {
        ctx.shadowBlur = glowBlur;
      }

      const particles = particlesRef.current;
      const len = particles.length;
      const connDist2 = connectionDistance * connectionDistance; // Avoid sqrt

      // Update and draw particles
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        // Draw particle
        ctx.fillStyle = p.color;
        if (glowBlur > 0) ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines (use squared distance to avoid sqrt)
        if (!isMobile || len <= 20) {
          for (let j = i + 1; j < len; j++) {
            const o = particles[j];
            const dx = o.x - p.x;
            const dy = o.y - p.y;
            const dist2 = dx * dx + dy * dy;

            if (dist2 < connDist2) {
              const alpha = Math.floor((1 - Math.sqrt(dist2) / connectionDistance) * 30);
              ctx.strokeStyle = `${p.color}${alpha.toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(o.x, o.y);
              ctx.stroke();
            }
          }
        }
      }

      // Reset shadow
      if (glowBlur > 0) {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}
