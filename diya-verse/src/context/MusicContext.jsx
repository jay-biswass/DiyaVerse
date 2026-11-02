"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Music, Play, Pause, Volume2, VolumeX, Sparkles, ExternalLink } from "lucide-react";

const YOUTUBE_VIDEO_ID = "Kuq3vDEkWJo"; // User requested song: https://youtu.be/Kuq3vDEkWJo

const MusicContext = createContext({
  isPlaying: false,
  isMuted: false,
  toggleMusic: () => {},
  toggleMute: () => {},
  playMusic: () => {},
  pauseMusic: () => {},
});

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // 1. Load YouTube IFrame Player API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // 2. Initialize Player when YT is ready
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player("youtube-bg-music-player", {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            controls: 0,
            showinfo: 0,
            rel: 0,
            enablejsapi: 1,
            playsinline: 1,
            origin: typeof window !== "undefined" ? window.location.origin : "",
          },
          events: {
            onReady: (event) => {
              setIsPlayerReady(true);
              try {
                event.target.playVideo();
                setIsPlaying(true);
              } catch {
                // Autoplay might need user interaction
              }
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (
                event.data === window.YT.PlayerState.PAUSED ||
                event.data === window.YT.PlayerState.ENDED
              ) {
                setIsPlaying(false);
              }
            },
            onError: (err) => {
              console.warn("YouTube player notice:", err);
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // 3. Fallback for strict browser autoplay policies:
    // If the browser blocks silent autoplay on page load, trigger play on user's very first interaction!
    const handleFirstGesture = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.playVideo();
          setIsPlaying(true);
        } catch {}
      }
    };

    window.addEventListener("pointerdown", handleFirstGesture, { once: true });
    window.addEventListener("keydown", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };
  }, []);

  const toggleMusic = () => {
    if (!playerRef.current || typeof playerRef.current.getPlayerState !== "function") return;
    try {
      const state = playerRef.current.getPlayerState();
      if (state === 1) {
        // Playing -> Pause
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        // Paused/Ended/Unstarted -> Play
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch {
      // Retry
    }
  };

  const playMusic = () => {
    if (playerRef.current && typeof playerRef.current.playVideo === "function") {
      try {
        playerRef.current.playVideo();
        setIsPlaying(true);
      } catch {}
    }
  };

  const pauseMusic = () => {
    if (playerRef.current && typeof playerRef.current.pauseVideo === "function") {
      try {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } catch {}
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || typeof playerRef.current.isMuted !== "function") return;
    try {
      if (playerRef.current.isMuted()) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch {}
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        isMuted,
        toggleMusic,
        toggleMute,
        playMusic,
        pauseMusic,
      }}
    >
      {children}

      {/* Hidden YouTube IFrame Container */}
      <div
        id="youtube-player-hidden-container"
        className="fixed -top-[9999px] -left-[9999px] w-1 h-1 pointer-events-none opacity-0 overflow-hidden"
        aria-hidden="true"
      >
        <div id="youtube-bg-music-player" />
      </div>

      {/* Floating Bottom Festive Music Pill */}
      <div className="fixed bottom-4 right-4 z-40 select-none">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-festive border border-[#D4A64A]/40 shadow-2xl backdrop-blur-xl">
          {/* Animated Equalizer Waves when playing */}
          <button
            onClick={toggleMusic}
            title={isPlaying ? "Pause Diwali Song" : "Play Diwali Song"}
            className="flex items-center gap-1.5 focus:outline-none group"
          >
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-0.5 bg-[#F5D79D] rounded-full animate-pulse h-3" />
                <span className="w-0.5 bg-[#D4A64A] rounded-full animate-bounce h-4" />
                <span className="w-0.5 bg-[#E68A32] rounded-full animate-pulse h-2.5" />
                <span className="w-0.5 bg-[#F5D79D] rounded-full animate-bounce h-3.5" />
              </div>
            ) : (
              <Play className="w-3.5 h-3.5 text-[#F5D79D] group-hover:scale-110 transition-transform" />
            )}
            
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-semibold text-[#F5D79D] flex items-center gap-1">
                <span>{isPlaying ? "Diwali Song Playing" : "Diwali Song Paused"}</span>
                <span className="text-[9px] bg-[#8F2028] text-[#F5D79D] px-1 py-0.2 rounded font-normal">
                  Live
                </span>
              </span>
              <span className="text-[9px] text-[#F5E6C8]/60 font-light truncate max-w-[140px]">
                Ram Siya Ram / Festive Melody
              </span>
            </div>
          </button>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            title={isMuted ? "Unmute" : "Mute"}
            className="p-1 rounded-full text-[#F5D79D]/80 hover:text-[#F5D79D] transition-colors ml-1"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Direct YouTube link */}
          <a
            href={`https://youtu.be/${YOUTUBE_VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Open original video on YouTube"
            className="p-1 rounded-full text-[#F5D79D]/60 hover:text-[#F5D79D] transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
