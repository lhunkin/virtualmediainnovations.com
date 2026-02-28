'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Check } from 'lucide-react';

const features = [
  { title: 'Living World Map', description: 'Interactive, evolving campaign world' },
  { title: '5e SRD Compatible', description: 'Fully compliant with D&D 5e rules' },
  { title: 'Community Driven', description: 'Built for player engagement' },
  { title: 'Digital Sourcebook', description: 'Complete rules and lore database' },
];

export default function FlagshipProject() {
  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden mb-12 glass-strong p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-neon/20" />
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-neon/20 text-neon text-sm font-semibold rounded-full mb-4">
              Flagship Project
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
              World of Asphodel
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mb-6">
              A comprehensive D&D 5e campaign world with intricate lore, detailed maps,
              and engaging community features. Explore a world where every location tells
              a story and every decision matters.
            </p>
            <a
              href="https://worldofasphodel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-neon text-black font-semibold rounded-lg hover:shadow-glow transition-all"
            >
              Visit World of Asphodel
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <Check className="text-neon" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow to-neon text-black font-bold rounded-full shadow-glow">
            World Builder Platform - Coming Soon
          </div>
        </motion.div>
      </div>
    </section>
  );
}
