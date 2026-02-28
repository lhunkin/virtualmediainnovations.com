'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '1', label: 'Living World' },
  { number: '13', label: 'Soundscapes' },
  { number: '5e', label: 'SRD Compatible' },
  { number: '100%', label: 'Free to Explore' },
];

// Floating rune symbols for the animated display
const runes = ['\u16A0', '\u16A8', '\u16C3', '\u16B1', '\u16D7', '\u16DF', '\u16B9', '\u16DE', '\u16A6', '\u16CA', '\u16B2', '\u16DA'];

function AnimatedShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = 500;
    const h = 400;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    // Floating motes
    const motes = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.5 - 0.2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      color: ['#00A6FF', '#00FF1A', '#FBFF8C'][Math.floor(Math.random() * 3)],
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let animId: number;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      const orbX = w / 2;
      const orbY = h / 2;
      const pulse = Math.sin(frame * 0.02) * 0.15 + 0.85;

      // Outer glow rings
      for (let i = 3; i >= 0; i--) {
        const radius = 60 + i * 25;
        const alpha = (0.04 - i * 0.008) * pulse;
        const gradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, radius);
        gradient.addColorStop(0, `rgba(0, 166, 255, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(0, 255, 26, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Core orb
      const coreGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, 40);
      coreGradient.addColorStop(0, `rgba(0, 255, 26, ${0.3 * pulse})`);
      coreGradient.addColorStop(0.4, `rgba(0, 166, 255, ${0.2 * pulse})`);
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(orbX, orbY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Rotating rune ring
      ctx.save();
      ctx.translate(orbX, orbY);
      const runeRadius = 90;
      ctx.font = '14px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + frame * 0.005;
        const rx = Math.cos(angle) * runeRadius;
        const ry = Math.sin(angle) * runeRadius * 0.6;
        const runeAlpha = (Math.sin(frame * 0.03 + i) * 0.3 + 0.5) * pulse;
        ctx.fillStyle = `rgba(0, 255, 26, ${runeAlpha})`;
        ctx.fillText(runes[i], rx, ry);
      }
      ctx.restore();

      // Outer rotating elliptical rings
      ctx.save();
      ctx.translate(orbX, orbY);
      ctx.strokeStyle = `rgba(0, 166, 255, ${0.12 * pulse})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, 120, 72, frame * 0.003, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = `rgba(0, 255, 26, ${0.08 * pulse})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, 130, 78, -frame * 0.004 + 1, 0, Math.PI * 2);
      ctx.stroke();
      // Third ring
      ctx.strokeStyle = `rgba(251, 255, 140, ${0.05 * pulse})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, 145, 55, frame * 0.002 + 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Floating motes
      motes.forEach((m) => {
        m.x += m.vx + Math.sin(frame * 0.01 + m.phase) * 0.2;
        m.y += m.vy;
        m.opacity = Math.sin(frame * 0.02 + m.phase) * 0.3 + 0.4;

        if (m.y < -10) {
          m.y = h + 10;
          m.x = Math.random() * w;
        }
        if (m.x < -10) m.x = w + 10;
        if (m.x > w + 10) m.x = -10;

        ctx.fillStyle = m.color;
        ctx.globalAlpha = m.opacity;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-80 lg:h-full min-h-[320px] rounded-xl overflow-hidden cursor-crosshair"
      style={{ perspective: '800px' }}
    >
      {/* Background with parallax tilt */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateY: (mousePos.x - 0.5) * 8,
          rotateX: -(mousePos.y - 0.5) * 8,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Deep background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-neon/10 rounded-xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] rounded-xl"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 166, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 166, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Canvas layer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="max-w-full max-h-full"
          />
        </div>
      </motion.div>

      {/* Corner bracket accents */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-neon/40 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-neon/40 rounded-br-lg" />

      {/* Bottom label */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-[10px] uppercase tracking-[0.25em] text-primary/50 font-medium">
          World Engine Active
        </span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedShowcase />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-6">
              About Virtual Media Innovations
            </h2>
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              Virtual Media Innovations is the creative studio behind the World of
              Asphodel and the upcoming World Builder platform. I craft immersive
              campaign settings, ambient soundscapes, and tools for tabletop RPG creators.
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              My mission is to make professional-quality worldbuilding accessible to
              every game master and storyteller. From deep lore and interactive maps to
              the soundtrack that brings your table to life, I&apos;m building the future
              of tabletop experiences.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 rounded-lg group hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-blue-green">
                    {stat.number}
                  </div>
                  <div className="text-foreground/70 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
