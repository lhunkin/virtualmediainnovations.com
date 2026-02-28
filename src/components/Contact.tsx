'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const infoCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@virtualmediainnovations.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote Studio',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          from_name: 'VMI Website Contact Form',
          subject: `New Inquiry: ${formData.projectType || 'General'} - ${formData.name}`,
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-foreground/70">
            Get in touch to discuss your next creative project with Larry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.label}
                </h3>
                <p className="text-foreground/70">{card.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-card p-8 rounded-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface rounded-lg border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface rounded-lg border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface rounded-lg border border-primary/30 text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a project type...</option>
                <option value="world-design">Virtual World Design</option>
                <option value="concept-art">Concept Art &amp; Illustration</option>
                <option value="game-assets">Video Game Assets</option>
                <option value="rpg-design">RPG &amp; Tabletop Design</option>
                <option value="animation">Animation &amp; Motion</option>
                <option value="creative-direction">Creative Direction</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-surface rounded-lg border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary resize-none transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-neon text-black font-semibold rounded-lg hover:shadow-glow transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-6 p-4 bg-neon/20 border border-neon rounded-lg flex items-center gap-3"
            >
              <CheckCircle className="text-neon flex-shrink-0" size={24} />
              <p className="text-neon font-medium">
                Thanks for reaching out! I&apos;ll be in touch soon.
              </p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3"
            >
              <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
              <p className="text-red-400 font-medium">
                Something went wrong. Please email us directly at contact@virtualmediainnovations.com
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
