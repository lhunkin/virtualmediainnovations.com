'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'World of Asphodel', href: 'https://worldofasphodel.com' },
      { label: 'World Builder', href: '#world-builder' },
      { label: 'Soundscapes', href: 'https://www.youtube.com/playlist?list=PLW8gSdbXbt_um43KRwmoaiS8qKoERe0NG' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'contact@virtualmediainnovations.com', href: 'mailto:contact@virtualmediainnovations.com' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-elevated border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-4">
              <div className="text-lg font-bold bg-gradient-to-r from-primary via-neon to-yellow bg-clip-text text-transparent">
                Virtual Media Innovations
              </div>
            </Link>
            <p className="text-foreground/70 text-sm mb-6">
              Building immersive virtual worlds and creative digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    title={social.label}
                    className="p-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} Virtual Media Innovations. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
