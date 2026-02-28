'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Volume2, VolumeX, Music } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
});

const PLAYLIST_ID = 'PLW8gSdbXbt_um43KRwmoaiS8qKoERe0NG';
const FIRST_VIDEO_ID = 't4LF3PItOFg'; // "The Black Fleet"

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Use specific video ID + playlist param — more reliable than videoseries for autoplay
  const embedUrl = `https://www.youtube.com/embed/${FIRST_VIDEO_ID}?list=${PLAYLIST_ID}&autoplay=1&mute=1&loop=1&rel=0&modestbranding=1&iv_load_policy=3&controls=1&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''}`;

  const toggleMute = useCallback(() => {
    if (iframeRef.current?.contentWindow) {
      if (isMuted) {
        // Use postMessage to unmute via YouTube iframe API
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
          '*'
        );
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }),
          '*'
        );
      } else {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'mute', args: [] }),
          '*'
        );
      }
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  // Attempt auto-unmute after video has had time to start playing
  // Browsers block unmute without user interaction, so we also listen for
  // any click/tap on the page as a "user gesture" to piggyback the unmute
  useEffect(() => {
    const attemptUnmute = () => {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
          '*'
        );
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }),
          '*'
        );
        setIsMuted(false);
      }
    };

    // Try after a delay (works on some browsers/desktop)
    const timer = setTimeout(attemptUnmute, 3000);

    // Also unmute on first user interaction anywhere on the page
    const handleInteraction = () => {
      attemptUnmute();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      {/* Particle Field Background */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Glow Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon/10 rounded-full filter blur-3xl animate-pulse" />

      {/* Video Player - separate stacking context, above grain overlay */}
      <div
        className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
        style={{ zIndex: 50 }}
      >
        {/* Player frame with glow */}
        <div className="relative group isolate">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 via-neon/30 to-primary/30 blur-md opacity-60" />
          <div className="relative rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
            <div className="aspect-video bg-black">
              <iframe
                ref={iframeRef}
                src={embedUrl}
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Whispers of Morgath — Roll & Resonance"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Player controls bar */}
        <div className="mt-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Music size={14} className="text-primary" />
            <div>
              <p className="text-primary text-xs font-semibold">Whispers of Morgath</p>
              <p className="text-foreground/40 text-[10px]">Roll &amp; Resonance</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Equalizer */}
            <div className="flex items-center gap-0.5">
              <span className="w-0.5 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-3 bg-neon rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-1.5 bg-neon rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
              <span className="w-0.5 h-4 bg-neon rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
            </div>

            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors ${
                isMuted
                  ? 'bg-neon/20 hover:bg-neon/30 animate-pulse'
                  : 'bg-primary/20 hover:bg-primary/30'
              }`}
              title={isMuted ? 'Click to unmute' : 'Click to mute'}
            >
              {isMuted ? (
                <VolumeX size={14} className="text-neon" />
              ) : (
                <Volume2 size={14} className="text-neon" />
              )}
              <span className={`text-[10px] ${isMuted ? 'text-neon font-semibold' : 'text-neon'}`}>
                {isMuted ? 'Click for Sound' : 'Playing'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* SEO-friendly h1 with brand name (visually hidden) + visual heading */}
        <h1 className="sr-only">
          Virtual Media Innovations — World of Asphodel D&amp;D 5e Campaign Setting &amp; World Builder by Larry Hunkin
        </h1>
        <motion.p
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-blue-green"
          role="heading"
          aria-level={2}
        >
          Enter the World of Asphodel
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A living D&amp;D 5e campaign setting with deep lore, immersive soundscapes,
          and a world builder platform to create your own. Created by Larry Hunkin.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://worldofasphodel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-primary to-neon text-black font-semibold rounded-lg hover:shadow-glow transition-all text-center"
          >
            Explore Asphodel
          </a>
          <a
            href="#world-builder"
            className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all text-center"
          >
            World Builder
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
