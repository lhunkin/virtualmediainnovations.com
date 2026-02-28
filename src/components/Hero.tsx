'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Volume2, VolumeX, Music, Play, Pause, SkipForward } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
});

// First 5 tracks from Whispers of Morgath playlist
const TRACKS = [
  { id: 't4LF3PItOFg', title: 'The Black Fleet' },
  { id: '2t-bZI5EBxo', title: 'Ravencrest Hungers' },
  { id: 'XtsBlg2Bfuw', title: "Mistress's Might" },
  { id: '9pVs_mA85DA', title: 'The Knot That Remains' },
  { id: 'HTZ5BiiXeXs', title: 'The Eternal Flame' },
];

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const suppressPauseRef = useRef(false);

  // Load YouTube IFrame API and create player
  useEffect(() => {
    // If API is already loaded, create player directly
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    // Load the API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // YouTube API calls this when ready
    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    function createPlayer() {
      if (playerRef.current) return; // already created

      playerRef.current = new window.YT.Player('yt-player', {
        videoId: TRACKS[0].id,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,        // Hide native controls — prevents "More videos" overlay
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,   // Hide annotations
          playsinline: 1,
          disablekb: 1,        // Disable keyboard controls
          fs: 0,               // Disable fullscreen button
          showinfo: 0,
          loop: 0,             // We handle looping manually via playlist cycling
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPlayerReady = useCallback(() => {
    setPlayerReady(true);
    setIsPlaying(true);
    // Player auto-starts muted due to playerVars
  }, []);

  const onPlayerStateChange = useCallback(
    (event: any) => {
      const state = event.data;

      // YT.PlayerState.PLAYING = 1
      if (state === 1) {
        setIsPlaying(true);
      }

      // YT.PlayerState.PAUSED = 2
      // Auto-resume if YouTube paused it (e.g., "More videos" overlay)
      if (state === 2 && !suppressPauseRef.current) {
        // YouTube paused the video — fight back!
        setTimeout(() => {
          if (playerRef.current && playerRef.current.getPlayerState() === 2) {
            playerRef.current.playVideo();
          }
        }, 100);
      }

      // YT.PlayerState.ENDED = 0  — play next track
      if (state === 0) {
        const nextIndex = (currentTrack + 1) % TRACKS.length;
        setCurrentTrack(nextIndex);
        if (playerRef.current) {
          playerRef.current.loadVideoById({
            videoId: TRACKS[nextIndex].id,
            startSeconds: 0,
          });
        }
      }
    },
    [currentTrack]
  );

  // Re-attach event listener when currentTrack changes
  useEffect(() => {
    if (playerRef.current && playerRef.current.addEventListener) {
      // The YT API doesn't support removing/re-adding listeners easily,
      // but the callback closure captures currentTrack, so we need to
      // update the player's internal reference
      playerRef.current.removeEventListener?.('onStateChange', onPlayerStateChange);
      playerRef.current.addEventListener('onStateChange', onPlayerStateChange);
    }
  }, [onPlayerStateChange]);

  const toggleMute = useCallback(() => {
    if (!playerRef.current || !playerReady) return;
    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  }, [isMuted, playerReady]);

  const togglePlay = useCallback(() => {
    if (!playerRef.current || !playerReady) return;
    if (isPlaying) {
      suppressPauseRef.current = true;
      playerRef.current.pauseVideo();
      setIsPlaying(false);
      // Reset suppress after a moment
      setTimeout(() => {
        suppressPauseRef.current = false;
      }, 500);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  }, [isPlaying, playerReady]);

  const skipTrack = useCallback(() => {
    if (!playerRef.current || !playerReady) return;
    const nextIndex = (currentTrack + 1) % TRACKS.length;
    setCurrentTrack(nextIndex);
    playerRef.current.loadVideoById({
      videoId: TRACKS[nextIndex].id,
      startSeconds: 0,
    });
  }, [currentTrack, playerReady]);

  // Auto-unmute on first user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (playerRef.current && playerReady) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        setIsMuted(false);
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [playerReady]);

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
            <div className="aspect-video bg-black relative" ref={containerRef}>
              {/* YouTube player will be injected here */}
              <div id="yt-player" className="absolute inset-0 w-full h-full" />

              {/* Transparent overlay to block YouTube's click-to-pause and overlays */}
              <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={togglePlay}
                title={isPlaying ? 'Click to pause' : 'Click to play'}
              />

              {/* Play/Pause indicator on click */}
              {!isPlaying && playerReady && (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Player controls bar */}
        <div className="mt-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Music size={14} className="text-primary" />
            <div>
              <p className="text-primary text-xs font-semibold">Whispers of Morgath</p>
              <p className="text-foreground/40 text-[10px]">
                {TRACKS[currentTrack].title} — Roll &amp; Resonance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Equalizer */}
            {isPlaying && (
              <div className="flex items-center gap-0.5">
                <span className="w-0.5 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-3 bg-neon rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-1.5 bg-neon rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                <span className="w-0.5 h-4 bg-neon rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
              </div>
            )}

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause size={12} className="text-neon" />
              ) : (
                <Play size={12} className="text-neon ml-0.5" />
              )}
            </button>

            {/* Skip */}
            <button
              onClick={skipTrack}
              className="p-1.5 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
              title="Next track"
            >
              <SkipForward size={12} className="text-neon" />
            </button>

            {/* Mute toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
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
