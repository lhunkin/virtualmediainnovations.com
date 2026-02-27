'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Virtual Worlds',
    excerpt: 'Exploring emerging technologies and trends shaping immersive digital experiences.',
    category: 'Coming Soon',
    date: 'February 2026',
    readTime: '5 min read',
  },
  {
    title: 'Designing for World of Asphodel',
    excerpt: 'Behind-the-scenes look at our process for creating a living D&D campaign world.',
    category: 'Coming Soon',
    date: 'February 2026',
    readTime: '7 min read',
  },
  {
    title: '5e SRD Compatibility Guide',
    excerpt: 'Everything you need to know about making your content compatible with D&D 5e.',
    category: 'Coming Soon',
    date: 'February 2026',
    readTime: '6 min read',
  },
];

export default function BlogList() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blogPosts.map((post, index) => (
        <motion.article
          key={index}
          variants={itemVariants}
          className="glass-card p-6 sm:p-8 rounded-xl hover:shadow-glow transition-all group cursor-pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-3">
                {post.category}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-gradient-blue-green transition-all">
                {post.title}
              </h2>
              <p className="text-foreground/70 text-lg mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
