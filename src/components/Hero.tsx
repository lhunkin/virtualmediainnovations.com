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
  const [isMuted, setIsMuted] = useState(true); // Start muted (browser requires it)
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initAttempted = useRef(false);
  const unmutedRef = useRef(false);

  // Load YouTube IFrame API and create player
  useEffect(() => {
    if (initAttempted.current) return;
    initAttempted.current = true;

    const createPlayer = () => {
      // Make sure the target div exists
      const targetEl = document.getElementById('yt-player');
      if (!targetEl || playerRef.current) return;

      playerRef.current = new window.YT.Player('yt-player', {
        height: '100%',
        width: '100%',
        playerVars: {
          listType: 'playlist',
          list: PLAYLIST_ID,
          autoplay: 1,
          mute: 1, // MUST start muted for autoplay to work in all browsers
          loop: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          controls: 1,
          playsinline: 1, // Critical for iOS autoplay
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : '',
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            // Force play muted first
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              // Once video is confirmed playing, unmute after a short delay
              if (!unmutedRef.current) {
                unmutedRef.current = true;
                setTimeout(() => {
                  try {
                    event.target.unMute();
                    event.target.setVolume(100);
                    setIsMuted(false);
                  } catch (e) {
                    // Browser blocked unmute — user will need to click
                  }
                }, 1500);
              }
            }
          },
          onError: (event: any) => {
            // On error, retry with next video in playlist
            console.log('YT player error:', event.data);
            try {
              event.target.nextVideo();
            } catch (e) {}
          },
        },
      });
    };

    const waitForAPI = () => {
      if (window.YT && window.YT.Player) {
        createPlayer();
      } else {
        // Poll until YT API is ready (more reliable than callback)
        const interval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(interval);
            createPlayer();
          }
        }, 100);
        // Clear interval after 15 seconds as safety
        setTimeout(() => clearInterval(interval), 15000);
      }
    };

    // Load the API script if not already loaded
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      document.head.appendChild(tag);
    }

    // Also set the global callback as a fallback
    const existingCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (existingCallback) existingCallback();
      createPlayer();
    };

    // Start polling as the primary mechanism
    waitForAPI();

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy(); } catch (e) {}
        playerRef.current = null;
      }
    };
  }, []);

  const toggleMute = useCallback(() => {
    if (playerRef.current) {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          playerRef.current.setVolume(100);
          // If not playing yet, try to start
          if (!isPlaying) {
            playerRef.current.playVideo();
          }
        } else {
          playerRef.current.mute();
        }
      } catch (e) {}
    }
    setIsMuted(!isMuted);
  }, [isMuted, isPlaying]);

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
