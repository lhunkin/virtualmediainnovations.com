'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Larry Hunkin',
    role: 'Founder & Creative Director',
    initials: 'LH',
    social: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' },
    ],
  },
  {
    name: 'Lead 3D Artist',
    role: 'Open Position',
    initials: '?',
    isOpen: true,
  },
  {
    name: 'Concept Artist',
    role: 'Open Position',
    initials: '?',
    isOpen: true,
  },
];

export default function Team() {
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
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            Our Team
          </h2>
          <p className="text-foreground/70">
            Meet the creative minds behind Virtual Media Innovations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="text-center"
            >
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center text-2xl font-bold ${
                  member.isOpen
                    ? 'bg-gradient-to-br from-primary/20 to-neon/20 text-foreground/50'
                    : 'bg-gradient-to-br from-primary to-neon text-black'
                }`}>
                  {member.initials}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-foreground/70 mb-4">{member.role}</p>

              {/* Social or Apply */}
              {member.isOpen ? (
                <button className="px-6 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-semibold transition-colors">
                  Apply Now
                </button>
              ) : (
                <div className="flex justify-center gap-4">
                  {member.social?.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className="p-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
