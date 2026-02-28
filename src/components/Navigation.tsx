'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'World of Asphodel', href: 'https://worldofasphodel.com', external: true },
    { label: 'World Builder', href: '#world-builder' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass glass-strong backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-lg font-bold bg-gradient-to-r from-primary via-neon to-yellow bg-clip-text text-transparent">
              Virtual Media Innovations
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="https://worldofasphodel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-primary to-neon text-black font-semibold rounded-lg hover:shadow-glow transition-all"
            >
              Explore Asphodel
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-3 pb-4"
            >
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="https://worldofasphodel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary to-neon text-black font-semibold rounded-lg hover:shadow-glow transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Explore Asphodel
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
