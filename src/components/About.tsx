'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Projects' },
  { number: '12', label: 'Virtual Worlds' },
  { number: '5K+', label: 'Assets' },
  { number: '100%', label: 'Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-neon/10 to-yellow/20" />
            <div className="absolute inset-0 bg-gradient-to-tl from-neon/30 to-primary/30" />
            <div className="absolute top-10 right-10 w-40 h-40 bg-primary/20 rounded-full filter blur-2xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-neon/20 rounded-full filter blur-2xl animate-pulse" />
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
              Virtual Media Innovations is a creative studio dedicated to building
              immersive digital experiences. We specialize in worldbuilding, concept
              art, game design, and RPG content creation.
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              With a passion for storytelling and cutting-edge design, we help creators
              bring their visions to life. Whether you're building a game world, designing
              characters, or creating an entire universe, we have the expertise to make
              it extraordinary.
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
                  className="glass-card p-4 rounded-lg"
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
