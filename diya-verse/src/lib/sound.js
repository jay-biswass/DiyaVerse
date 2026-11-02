// Web Audio API Synthesizer for Festive Diwali Sounds
// 100% self-contained, high performance, zero copyright issues, works offline & mobile!

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientPlaying = false;
    this.ambientGain = null;
    this.oscillators = [];
    this.lfo = null;
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

  // Soft temple bell / chime when lighting a Diya
  playDiyaSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Resonant bell fundamental frequencies
      const freqs = [587.33, 880, 1174.66, 1760]; // D5, A5, D6, A6 (warm Indian Raga Bhupali harmonic)
      
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        const initialGain = 0.15 / (idx + 1);
        gain.gain.setValueAtTime(initialGain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + idx * 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.5 + idx * 0.3);
      });
    } catch {
      // Audio autoplay policy fail safe
    }
  }

  // Firework burst / celebration pop
  playFireworkSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Noise burst for explosion
      const bufferSize = this.ctx.sampleRate * 0.6;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(80, now + 0.5);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);

      // Low end thud
      const thud = this.ctx.createOscillator();
      const thudGain = this.ctx.createGain();
      thud.type = "sine";
      thud.frequency.setValueAtTime(150, now);
      thud.frequency.exponentialRampToValueAtTime(30, now + 0.3);
      thudGain.gain.setValueAtTime(0.4, now);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      thud.connect(thudGain);
      thudGain.connect(this.ctx.destination);

      thud.start(now);
      thud.stop(now + 0.35);
    } catch {
      // Audio autoplay policy fail safe
    }
  }

  // Celebration chime arpeggio
  playCelebrationSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C Major festive arpeggio
      
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.9);
      });
    } catch {
      // Audio autoplay policy fail safe
    }
  }

  // Music is now driven by YouTube track Kuq3vDEkWJo
  toggleAmbientMusic() {
    return false;
  }

  startAmbientMusic() {
    if (this.ambientPlaying || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.08, now + 2); // gentle fade in
      this.ambientGain.connect(this.ctx.destination);

      // Tanpura frequencies: Sa (C3 - 130.81), Pa (G3 - 196.00), Sa' (C4 - 261.63), Ga (E4 - 329.63)
      const freqs = [130.81, 196.00, 261.63, 329.63];
      this.oscillators = [];

      freqs.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.type = i % 2 === 0 ? "sawtooth" : "sine";
        osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), now);

        // Lowpass filter for warm acoustic wooden resonance
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(600 + i * 150, now);

        oscGain.gain.setValueAtTime(0.2 / (i + 1), now);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(this.ambientGain);

        osc.start(now);
        this.oscillators.push(osc);
      });

      this.ambientPlaying = true;
    } catch {
      this.ambientPlaying = false;
    }
  }

  stopAmbientMusic() {
    if (!this.ambientPlaying) return;
    try {
      if (this.ambientGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 1);
        setTimeout(() => {
          this.oscillators.forEach(osc => {
            try { osc.stop(); } catch {}
          });
          this.oscillators = [];
          this.ambientPlaying = false;
        }, 1100);
      } else {
        this.ambientPlaying = false;
      }
    } catch {
      this.ambientPlaying = false;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted && this.ambientPlaying) {
      this.stopAmbientMusic();
    }
  }
}

export const sound = new SoundSystem();
