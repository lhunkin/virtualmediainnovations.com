'use client';

import Link from 'next/link';
import { Palette, Github, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/@larryhunkin5207', label: 'YouTube' },
  { icon: Github, href: 'https://github.com/lhunkin', label: 'GitHub' },
  { icon: Palette, href: 'https://www.deviantart.com/larryhunkin', label: 'DeviantArt' },
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
    title: 'Contact',
    links: [
      { label: 'About VMI', href: '#about' },
      { label: 'Get in Touch', href: '#contact' },
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
            <p className="text-foreground/70 text-sm mb-2">
              Created by <span className="text-foreground/90 font-medium">Larry Hunkin</span>
            </p>
            <p className="text-foreground/60 text-sm mb-6">
              Building immersive D&amp;D campaign worlds, ambient soundscapes,
              and creative tools for tabletop RPG creators. Based in Nova Scotia, Canada.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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

        {/* Copyright & Legal Notices */}
        <div className="border-t border-primary/10 pt-6 mb-6">
          <div className="space-y-3 text-foreground/50 text-xs leading-relaxed">
            <p>
              <span className="text-foreground/70 font-medium">World of Asphodel</span> &mdash;
              All lore, characters, locations, maps, artwork, and narrative content related to the World of Asphodel
              are &copy; {currentYear} Larry Hunkin / Virtual Media Innovations. All rights reserved.
              Unauthorized reproduction, distribution, or use of this content is prohibited.
            </p>
            <p>
              <span className="text-foreground/70 font-medium">World Builder Platform</span> &mdash;
              All templates, design systems, code, layouts, and tools provided through the World Builder platform
              are &copy; {currentYear} Virtual Media Innovations. Templates may be used to create personal campaign
              worlds but may not be redistributed, resold, or used for commercial purposes without written permission.
            </p>
            <p>
              <span className="text-foreground/70 font-medium">5e SRD Compatibility</span> &mdash;
              Game mechanics reference the System Reference Document 5.1 released under the
              Creative Commons Attribution 4.0 International License (CC BY 4.0) by Wizards of the Coast.
              &quot;Dungeons &amp; Dragons&quot; and &quot;D&amp;D&quot; are trademarks of Wizards of the Coast LLC.
              Virtual Media Innovations is not affiliated with or endorsed by Wizards of the Coast.
            </p>
            <p>
              <span className="text-foreground/70 font-medium">Soundscapes</span> &mdash;
              All ambient audio tracks in the &quot;Whispers of Morgath&quot; collection and the Roll &amp; Resonance
              channel are &copy; {currentYear} Larry Hunkin. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Virtual Media Innovations. All rights reserved.
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              Larry Hunkin &bull; contact@virtualmediainnovations.com
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
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
