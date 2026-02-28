'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Virtual Media Innovations offer?',
    answer: 'I specialize in virtual world design, concept art, game assets, RPG design, animation, and creative direction. I create immersive digital experiences tailored to your project needs.',
  },
  {
    question: 'What is World of Asphodel?',
    answer: 'World of Asphodel is my flagship D&D 5e campaign world featuring intricate lore, detailed maps, and community features. Visit worldofasphodel.com to explore this living world.',
  },
  {
    question: 'When will the World Builder platform launch?',
    answer: 'The World Builder platform is coming soon. Join the waitlist on this site to be notified when it launches. It will allow anyone to create professional campaign world websites using my proven design system.',
  },
  {
    question: 'Are your worlds 5e SRD compatible?',
    answer: 'Yes! All my RPG content, including World of Asphodel and the upcoming World Builder platform, is fully compatible with D&D 5e rules and the Open Game License.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing varies based on project scope and requirements. I offer custom packages for concept art, game assets, worldbuilding, and more. Get in touch for a detailed quote.',
  },
  {
    question: 'Do you work with indie developers?',
    answer: 'Absolutely! I love working with indie developers and have flexible pricing options. Whether you need full-service creative direction or specific assets, I can tailor my services to your needs.',
  },
  {
    question: 'Do you offer retainer work?',
    answer: 'Yes, I offer retainer packages for ongoing creative projects. This is perfect for continuous asset creation, worldbuilding support, or sustained creative direction.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70">
            Find answers to common questions about my services
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="text-primary" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-primary/20"
                  >
                    <p className="px-6 py-4 text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
