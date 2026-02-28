'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Palette } from 'lucide-react';

const categories = ['All', 'Fantasy', 'Sci-Fi', 'Characters', 'Environments'];

const artworks = [
  {
    title: 'The Asphodel Throne',
    description: 'Concept art for the World of Asphodel campaign setting',
    category: 'Fantasy',
    gradient: 'from-primary/40 via-neon/20 to-primary/10',
    accent: '#00A6FF',
  },
  {
    title: 'Morgath Citadel',
    description: 'Dark fortress environment design with atmospheric lighting',
    category: 'Environments',
    gradient: 'from-purple-900/40 via-primary/20 to-indigo-900/10',
    accent: '#8B5CF6',
  },
  {
    title: 'Starborn Wanderer',
    description: 'Sci-fi character concept with bioluminescent armor',
    category: 'Sci-Fi',
    gradient: 'from-neon/30 via-cyan-500/20 to-teal-900/10',
    accent: '#00FF1A',
  },
  {
    title: 'Eldertree Guardian',
    description: 'Ancient forest protector — fantasy creature design',
    category: 'Characters',
    gradient: 'from-emerald-800/40 via-neon/20 to-lime-900/10',
    accent: '#10B981',
  },
  {
    title: 'Neon District',
    description: 'Cyberpunk cityscape with rain-slicked streets',
    category: 'Sci-Fi',
    gradient: 'from-pink-900/40 via-primary/30 to-violet-900/10',
    accent: '#EC4899',
  },
  {
    title: 'Rune Forge',
    description: 'Dwarven smithy interior with magical enchantments',
    category: 'Environments',
    gradient: 'from-orange-900/40 via-yellow/20 to-red-900/10',
    accent: '#F59E0B',
  },
  {
    title: 'The Verdant Court',
    description: 'Fey realm throne room bathed in eternal twilight',
    category: 'Fantasy',
    gradient: 'from-teal-900/40 via-emerald-500/20 to-cyan-900/10',
    accent: '#14B8A6',
  },
  {
    title: 'Void Reaver',
    description: 'Dark fantasy villain design with shadow magic effects',
    category: 'Characters',
    gradient: 'from-slate-900/60 via-primary/20 to-zinc-900/20',
    accent: '#64748B',
  },
  {
    title: 'Crystal Spire Observatory',
    description: 'Arcane research tower floating above the clouds',
    category: 'Fantasy',
    gradient: 'from-sky-900/40 via-primary/30 to-indigo-900/10',
    accent: '#0EA5E9',
  },
];

export default function ArtGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArt =
    activeCategory === 'All'
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            Art Gallery
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of concept art, character designs, and environment work from my portfolio
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-neon text-black shadow-glow'
                  : 'glass hover:glass-strong text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Art Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredArt.map((art) => (
              <motion.div
                key={art.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all"
              >
                {/* Art Preview Area */}
                <div
                  className={`relative w-full h-56 bg-gradient-to-br ${art.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Decorative elements */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 40%, ${art.accent}44 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${art.accent}22 0%, transparent 50%)`,
                    }}
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 text-[10px] font-semibold bg-black/40 backdrop-blur-sm rounded text-foreground/60 uppercase tracking-wider">
                    {art.category}
                  </div>
                  {/* Placeholder icon */}
                  <Palette
                    size={48}
                    className="text-foreground/10 group-hover:text-foreground/20 transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {art.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* DeviantArt CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.deviantart.com/larryhunkin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-neon text-black font-semibold rounded-lg hover:shadow-glow transition-all"
          >
            <ExternalLink size={18} />
            View Full Portfolio on DeviantArt
          </a>
          <p className="text-foreground/40 text-sm mt-3">
            1,600+ works across fantasy, sci-fi, and concept art
          </p>
        </motion.div>
      </div>
    </section>
  );
}
