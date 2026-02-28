'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Locations', 'Characters', 'Creatures', 'Battles'];

const artworks = [
  {
    title: 'Dawnkeep',
    description: 'The radiant citadel of Solara, beacon of light in the World of Asphodel',
    category: 'Locations',
    image: '/images/gallery/dawnkeep.jpg',
  },
  {
    title: 'Fort Valiance',
    description: 'Banners of the great houses fly as the garrison musters for war',
    category: 'Locations',
    image: '/images/gallery/fort-valiance.jpg',
  },
  {
    title: 'Paladin of the Dawn',
    description: 'A Dawn Knight stands ready, blade blazing with divine radiance',
    category: 'Characters',
    image: '/images/gallery/paladin-dawn-knight.jpg',
  },
  {
    title: 'The Dryad',
    description: 'Ancient forest spirit woven from bark, blossom, and living magic',
    category: 'Creatures',
    image: '/images/gallery/dryad.jpg',
  },
  {
    title: 'The Glades',
    description: 'Hidden elven settlement nestled deep within the enchanted forest',
    category: 'Locations',
    image: '/images/gallery/the-glades.jpg',
  },
  {
    title: 'Asphodel Lighthouse',
    description: 'Storm-lashed beacon guarding the treacherous coastal approach',
    category: 'Locations',
    image: '/images/gallery/asphodel-lighthouse.jpg',
  },
  {
    title: 'Blighted Ent',
    description: 'Corrupted tree guardian twisted by dark magic, oozing with blight',
    category: 'Creatures',
    image: '/images/gallery/blighted-ent.jpg',
  },
  {
    title: 'Harbour Battle',
    description: 'The harbour chain is drawn as fire rains down on the docks',
    category: 'Battles',
    image: '/images/gallery/harbour-battle.jpg',
  },
  {
    title: 'Healing Hands of Solara',
    description: 'A priestess channels divine light to mend a fallen warrior on the battlefield',
    category: 'Characters',
    image: '/images/gallery/healing-hands-solara.jpg',
  },
  {
    title: 'Frostfang Raiders',
    description: 'Viking war-ships brave the frozen seas, their dragon prows cutting through the storm',
    category: 'Battles',
    image: '/images/gallery/frostfang-raiders.jpg',
  },
  {
    title: 'Dracobloom',
    description: 'Blighted dragon wreathed in toxic spores, a terror of the corrupted wilds',
    category: 'Creatures',
    image: '/images/gallery/dracobloom.jpg',
  },
  {
    title: 'Cities of Asphodel',
    description: 'A great port city glows beneath storm clouds, its golden spire piercing the sky',
    category: 'Locations',
    image: '/images/gallery/cities-asphodel.jpg',
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
            World of Asphodel Gallery
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Concept art and illustrations from the World of Asphodel D&amp;D 5e campaign setting
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
                {/* Art Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 text-[10px] font-semibold bg-black/60 backdrop-blur-sm rounded text-foreground/80 uppercase tracking-wider">
                    {art.category}
                  </div>
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
