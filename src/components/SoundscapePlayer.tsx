'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

const PLAYLIST_ID = 'PLW8gSdbXbt_um43KRwmoaiS8qKoERe0NG';

export default function SoundscapePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  const handleClick = () => {
    setHasInteracted(true);
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-neon/5" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            <Music className="inline-block mr-1" size={14} />
            Soundscapes
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
            Whispers of Morgath
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Immerse yourself in the ambient soundscapes of the World of Asphodel.
            Hover over the player to begin your journey.
          </p>
        </motion.div>

        {/* Player Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="relative group cursor-pointer"
        >
          {/* Glow effect on hover */}
          <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-neon/30 to-primary/30 blur-lg transition-opacity duration-500 ${
            isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
          }`} />

          {/* Main player card */}
          <div className="relative glass-strong rounded-xl overflow-hidden">
            {/* Hover overlay when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 transition-opacity group-hover:bg-black/40">
                <div className="text-center">
                  <Volume2 className="mx-auto mb-3 text-primary animate-pulse" size={48} />
                  <p className="text-foreground/80 text-lg font-semibold">
                    Hover to Listen
                  </p>
                  <p className="text-foreground/50 text-sm mt-1">
                    13 ambient tracks from the World of Asphodel
                  </p>
                </div>
              </div>
            )}

            {/* Playing indicator */}
            {isPlaying && (
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-full">
                <div className="flex items-center gap-1">
                  <span className="w-1 h-3 bg-neon rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-4 bg-neon rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                  <span className="w-1 h-5 bg-neon rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
                </div>
                <span className="text-neon text-xs font-semibold">Now Playing</span>
              </div>
            )}

            {/* YouTube Embed */}
            <div className="aspect-video">
              {hasInteracted ? (
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=${isPlaying ? 1 : 0}&mute=0&loop=1&shuffle=0&rel=0&modestbranding=1&color=white&iv_load_policy=3`}
                  title="World of Asphodel - Whispers of Morgath Soundtrack"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-surface via-surface-elevated to-surface flex items-center justify-center">
                  <div className="text-center opacity-50">
                    <Music size={64} className="mx-auto mb-4 text-primary/50" />
                    <p className="text-foreground/30 text-sm">World of Asphodel Soundtrack</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Track info bar */}
          <div className="mt-4 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-neon flex items-center justify-center">
                <Music size={18} className="text-black" />
              </div>
              <div>
                <p className="text-foreground text-sm font-semibold">Roll &amp; Resonance</p>
                <p className="text-foreground/50 text-xs">World of Asphodel Soundtrack Collection</p>
              </div>
            </div>
            <a
              href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary text-sm font-semibold rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
