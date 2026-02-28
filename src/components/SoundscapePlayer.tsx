'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const PLAYLIST_ID = 'PLW8gSdbXbt_um43KRwmoaiS8qKoERe0NG';

export default function SoundscapePlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative z-30 bg-black/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-2">
          {/* Play/Pause Toggle */}
          <button
            onClick={handleClick}
            className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            title={isPlaying ? 'Click to pause' : 'Click to play'}
          >
            {isPlaying ? (
              <>
                <div className="flex items-center gap-0.5">
                  <span className="w-0.5 h-3 bg-neon rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="w-0.5 h-4 bg-neon rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-0.5 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                  <span className="w-0.5 h-5 bg-neon rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
                </div>
                <Volume2 size={16} className="text-neon" />
              </>
            ) : (
              <VolumeX size={16} className="text-foreground/50" />
            )}
          </button>

          {/* Track Info */}
          <div className="flex items-center gap-2 min-w-0">
            <Music size={14} className="text-primary flex-shrink-0" />
            <p className="text-foreground/70 text-xs truncate">
              <span className="text-primary font-semibold">Whispers of Morgath</span>
              <span className="text-foreground/40 mx-1.5">|</span>
              <span>Roll &amp; Resonance</span>
            </p>
          </div>

          {/* YouTube Link */}
          <a
            href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex-shrink-0 text-primary/60 hover:text-primary text-xs transition-colors hidden sm:block"
          >
            View Playlist
          </a>
        </div>
      </div>

      {/* Hidden YouTube Player - drives audio */}
      <div className="absolute -left-[9999px] w-1 h-1 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=${isPlaying ? 1 : 0}&mute=0&loop=1&shuffle=0&rel=0&modestbranding=1&enablejsapi=1`}
          title="World of Asphodel - Whispers of Morgath Soundtrack"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-1 h-1 border-0"
        />
      </div>
    </section>
  );
}
