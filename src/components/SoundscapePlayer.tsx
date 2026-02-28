'use client';

import { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const PLAYLIST_ID = 'PLW8gSdbXbt_um43KRwmoaiS8qKoERe0NG';

export default function SoundscapePlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Force iframe reload to apply mute change
    setShowVideo(false);
    setTimeout(() => setShowVideo(true), 50);
  };

  return (
    <div className="fixed top-[64px] left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-1.5">
          {/* Small visible video embed */}
          <div className="w-20 h-12 flex-shrink-0 rounded overflow-hidden bg-surface">
            {showVideo && (
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&shuffle=0&rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3`}
                title="World of Asphodel - Whispers of Morgath Soundtrack"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full border-0"
              />
            )}
          </div>

          {/* Track Info */}
          <div className="flex items-center gap-2 min-w-0">
            <Music size={14} className="text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-primary text-xs font-semibold truncate">Whispers of Morgath</p>
              <p className="text-foreground/40 text-[10px] truncate">Roll &amp; Resonance</p>
            </div>
          </div>

          {/* Equalizer bars (always shown since autoplay) */}
          <div className="flex items-center gap-0.5 flex-shrink-0">
            <span className="w-0.5 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 h-3 bg-neon rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 h-1.5 bg-neon rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            <span className="w-0.5 h-4 bg-neon rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
          </div>

          {/* Mute/Unmute Toggle */}
          <button
            onClick={toggleMute}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            title={isMuted ? 'Click to unmute' : 'Click to mute'}
          >
            {isMuted ? (
              <>
                <VolumeX size={14} className="text-foreground/50" />
                <span className="text-foreground/50 text-[10px] hidden sm:inline">Unmute</span>
              </>
            ) : (
              <>
                <Volume2 size={14} className="text-neon" />
                <span className="text-neon text-[10px] hidden sm:inline">Playing</span>
              </>
            )}
          </button>

          {/* YouTube Link */}
          <a
            href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex-shrink-0 text-primary/60 hover:text-primary text-[10px] transition-colors hidden sm:block"
          >
            Full Playlist →
          </a>
        </div>
      </div>
    </div>
  );
}
