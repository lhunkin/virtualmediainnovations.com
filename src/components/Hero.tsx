'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Volume2, VolumeX, Music } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
});

const PLAYLIST_ID = 'PLW8gSdbXbt_um43KRwmoaiS8qKoERe0NG';

// Extend window for YouTube IFrame API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Hero() {
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load YouTube IFrame API and create player
  useEffect(() => {
    // Load the API script
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }

    const initPlayer = () => {
      if (playerRef.current) return; // already initialized

      playerRef.current = new window.YT.Player('yt-player', {
        height: '100%',
        width: '100%',
        playerVars: {
          listType: 'playlist',
          list: PLAYLIST_ID,
          autoplay: 1,
          mute: 1, // must start muted for autoplay to work
          loop: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          controls: 1,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            // Start playing muted (autoplay), then unmute after a brief delay
            event.target.playVideo();
            setTimeout(() => {
              try {
                event.target.unMute();
                event.target.setVolume(100);
              } catch (e) {
                // Browser may still block unmute
              }
            }, 1000);
          },
          onStateChange: (event: any) => {
            // If video starts playing, try to unmute
            if (event.data === window.YT.PlayerState.PLAYING) {
              try {
                if (event.target.isMuted() && !isMuted) {
                  event.target.unMute();
                  event.target.setVolume(100);
                }
              } catch (e) {}
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      // Cleanup
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy(); } catch (e) {}
        playerRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleMute = useCallback(() => {
    if (playerRef.current) {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          playerRef.current.setVolume(100);
        } else {
          playerRef.current.mute();
        }
      } catch (e) {}
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

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
      <motion.div
        className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
        style={{ zIndex: 50 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Player frame with glow */}
        <div className="relative group isolate">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 via-neon/30 to-primary/30 blur-md opacity-60" />
          <div className="relative rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
            <div className="aspect-video bg-black" ref={containerRef}>
              <div id="yt-player" />
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
            {isReady && (
              <div className="flex items-center gap-0.5">
                <span className="w-0.5 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-3 bg-neon rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-1.5 bg-neon rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                <span className="w-0.5 h-4 bg-neon rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
              </div>
            )}

            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
              title={isMuted ? 'Click to unmute' : 'Click to mute'}
            >
              {isMuted ? (
                <VolumeX size={14} className="text-foreground/50" />
              ) : (
                <Volume2 size={14} className="text-neon" />
              )}
              <span className={`text-[10px] ${isMuted ? 'text-foreground/50' : 'text-neon'}`}>
                {isMuted ? 'Unmute' : 'Playing'}
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-blue-green"
        >
          Enter the World of Asphodel
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A living D&D 5e campaign setting with deep lore, immersive soundscapes,
          and a world builder platform to create your own.
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
