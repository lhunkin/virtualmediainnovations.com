'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Choose Template',
    description: 'Select from professionally designed world templates',
  },
  {
    number: 2,
    title: 'Build Your World',
    description: 'Customize maps, lore, characters, and mechanics',
  },
  {
    number: 3,
    title: 'Go Live',
    description: 'Publish your campaign world website instantly',
  },
  {
    number: 4,
    title: 'Grow & Connect',
    description: 'Build community and engage your players',
  },
];

export default function WorldBuilder() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

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
    <section id="world-builder" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            World Builder Platform
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Spin up your own professional campaign world website using the same
            design system as World of Asphodel. Free, 5e SRD compatible.
          </p>
          <div className="inline-block px-4 py-2 bg-yellow/20 text-yellow font-semibold rounded-full text-sm">
            Coming Soon
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative glass-card p-6 rounded-xl"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-neon rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30" size={24} />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Join the Waitlist
          </h3>
          <p className="text-foreground/70 text-center mb-6">
            Be the first to know when World Builder launches
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-3 text-foreground/50" size={20} />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-surface rounded-lg border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-neon text-black font-semibold rounded-lg hover:shadow-glow transition-all"
            >
              {submitted ? 'Thanks for signing up!' : 'Get Early Access'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
