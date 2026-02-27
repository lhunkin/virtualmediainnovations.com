'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Palette,
  Gamepad2,
  Dice6,
  Zap,
  Compass,
} from 'lucide-react';

const services = [
  {
    title: 'Virtual World Design',
    description: 'Create immersive environments with compelling worldbuilding, lore, and spatial design.',
    icon: Globe,
  },
  {
    title: 'Concept Art & Illustration',
    description: 'Stunning visual concepts that define your project\'s aesthetic and vision.',
    icon: Palette,
  },
  {
    title: 'Video Game Assets',
    description: '3D models, textures, and game-ready content for any engine.',
    icon: Gamepad2,
  },
  {
    title: 'RPG & Tabletop Design',
    description: '5e compatible worlds, character sheets, and gameplay mechanics.',
    icon: Dice6,
  },
  {
    title: 'Animation & Motion',
    description: 'Cinematic animations and motion graphics that bring worlds to life.',
    icon: Zap,
  },
  {
    title: 'Creative Direction',
    description: 'Strategic vision and art direction for complete creative projects.',
    icon: Compass,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            Our Services
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive creative solutions for your virtual world needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card p-6 rounded-xl hover:glass-strong transition-all duration-300 group hover:shadow-glow"
              >
                <div className="mb-4 inline-block p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Icon className="text-primary group-hover:text-neon transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
