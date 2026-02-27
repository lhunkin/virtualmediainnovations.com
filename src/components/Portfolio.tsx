'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Worlds', 'Characters', 'Environments', 'Motion'];

const projects = [
  {
    title: 'Crystalline Realm',
    description: 'A sprawling fantasy world with intricate magic systems',
    category: 'Worlds',
    tags: ['Fantasy', 'Worldbuilding', 'Lore'],
  },
  {
    title: 'Character Collection Vol. 1',
    description: 'Diverse character designs for RPG campaigns',
    category: 'Characters',
    tags: ['Character Design', 'Fantasy', 'Diverse Cast'],
  },
  {
    title: 'Cyberpunk Metropolis',
    description: 'Urban environment design with cyberpunk aesthetics',
    category: 'Environments',
    tags: ['Sci-Fi', 'Environment', 'Cyberpunk'],
  },
  {
    title: 'Action Sequence Reel',
    description: 'High-energy motion graphics and animations',
    category: 'Motion',
    tags: ['Animation', 'Motion Graphics', 'Action'],
  },
  {
    title: 'Lost Civilization',
    description: 'Ancient world with historical and fantastical elements',
    category: 'Worlds',
    tags: ['History', 'Fantasy', 'Exploration'],
  },
  {
    title: 'Environmental Concepts',
    description: 'Diverse landscape and architecture concepts',
    category: 'Environments',
    tags: ['Concept Art', 'Landscapes', 'Architecture'],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            Our Portfolio
          </h2>
          <p className="text-foreground/70">
            Showcasing our best creative work
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

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${activeCategory}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-neon/20 group-hover:from-primary/30 group-hover:to-neon/30 transition-all" />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
