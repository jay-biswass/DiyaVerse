// Sound Engine for Festive Diwali Sounds
// Plays the custom "Heppy Diwali.mp3" audio track on button clicks and diya lighting!

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.lastPlayed = 0;
    this.audioPool = [];
    this.poolIndex = 0;

    if (typeof window !== "undefined") {
      try {
        this.initAudioPool();
      } catch {}
    }
  }

  initAudioPool() {
    if (typeof window !== "undefined" && (!this.audioPool || this.audioPool.length === 0)) {
      this.audioPool = [
        new Audio("/sounds/happy-diwali.mp3"),
        new Audio("/sounds/happy-diwali.mp3"),
        new Audio("/sounds/happy-diwali.mp3"),
      ];
      this.audioPool.forEach((a) => {
        a.preload = "auto";
        a.volume = 0.85;
      });
    }
  }

  initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Plays "Heppy Diwali.mp3" on button click or Diya lighting
  playButtonClickSound() {
    if (this.isMuted) return;
    const now = Date.now();
    // Debounce duplicate triggers within 60ms
    if (this.lastPlayed && now - this.lastPlayed < 60) return;
    this.lastPlayed = now;

    try {
      if (typeof window !== "undefined") {
        this.initAudioPool();
        const audio = this.audioPool[this.poolIndex];
        this.poolIndex = (this.poolIndex + 1) % this.audioPool.length;

        audio.currentTime = 0;
        audio.volume = 0.85;
        const playPromise = audio.play();
        if (playPromise) {
          playPromise.catch(() => {
            // Autoplay gesture blocked
          });
        }
      }
    } catch {}
  }

  // Diya lighting now plays the requested festive "Heppy Diwali" music
  playDiyaSound() {
    this.playButtonClickSound();
  }

  // Celebration sound
  playCelebrationSound() {
    this.playButtonClickSound();
  }

  // Firework explosion sound
  playFireworkSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.5;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1000, now);
      filter.frequency.exponentialRampToValueAtTime(80, now + 0.4);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch {}
  }

  setMuted(muted) {
    this.isMuted = muted;
  }
}

export const sound = new SoundSystem();
