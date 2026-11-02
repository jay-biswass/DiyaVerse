"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";
import { Sparkles, Volume2, VolumeX, RotateCcw } from "lucide-react";

export default function FireworksCanvas() {
  const canvasRef = useRef(null);
  const [burstCount, setBurstCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    // Resize canvas
    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Color palettes for fireworks
    const colors = [
      ["#D4A64A", "#F5D79D", "#FFE57F"], // Gold
      ["#FF5252", "#FF1744", "#D50000"], // Vermilion
      ["#FF9100", "#FF6D00", "#FFAB40"], // Saffron
      ["#69F0AE", "#00E676", "#00B0FF"], // Emerald & Cyan
      ["#E040FB", "#7C4DFF", "#651FFF"], // Royal Violet
    ];

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.012;
        this.radius = Math.random() * 2.5 + 1.5;
        this.gravity = 0.08;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.vx *= 0.98;
        this.alpha -= this.decay;
      }

      draw(context) {
        context.save();
        context.globalAlpha = Math.max(0, this.alpha);
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.shadowBlur = 10;
        context.shadowColor = this.color;
        context.fill();
        context.restore();
      }
    }

    const triggerBurst = (x, y) => {
      sound.playFireworkSound();
      const palette = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 45; i++) {
        const color = palette[Math.floor(Math.random() * palette.length)];
        particles.push(new Particle(x, y, color));
      }
      setBurstCount((prev) => prev + 1);
    };

    // Canvas click/touch handler
    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      triggerBurst(x, y);
    };

    canvas.addEventListener("pointerdown", handleCanvasClick);

    // Animation loop
    const render = () => {
      ctx.fillStyle = "rgba(18, 5, 8, 0.22)"; // trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointerdown", handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const triggerGrandFinale = () => {
    sound.playCelebrationSound();
    sound.playFireworkSound();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#D4A64A", "#F5D79D", "#8F2028", "#E68A32", "#69F0AE"],
    });

    // Also dispatch bursts on canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          sound.playFireworkSound();
          const evt = new PointerEvent("pointerdown", {
            clientX: canvas.getBoundingClientRect().left + Math.random() * w,
            clientY: canvas.getBoundingClientRect().top + Math.random() * (h * 0.7),
          });
          canvas.dispatchEvent(evt);
        }, i * 250);
      }
    }
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden border border-[#D4A64A]/30 shadow-2xl bg-[#0e0407]">
      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair block"
      />

      {/* Floating Instructions & Badge */}
      <div className="absolute top-4 left-4 pointer-events-none select-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#54151F]/80 border border-[#D4A64A]/40 text-[#F5D79D] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          Touch or click anywhere in the night sky
        </span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none select-none">
        <span className="text-xs text-[#F5D79D]/80 bg-black/40 px-3 py-1 rounded-full border border-white/10">
          Explosions: <strong className="text-[#F5D79D]">{burstCount}</strong>
        </span>
      </div>

      {/* Bottom Grand Finale Trigger Bar */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center pointer-events-auto px-4">
        <button
          onClick={triggerGrandFinale}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-[#8F2028]" />
          <span>Launch Grand Diwali Finale Fireworks 🎆</span>
        </button>
      </div>
    </div>
  );
}
