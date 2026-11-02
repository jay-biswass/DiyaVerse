"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import DiyaSvg from "../ui/DiyaSvg";
import { GoldenBorderCorner } from "../ui/GoldenBorder";
import { sound } from "@/lib/sound";
import { Flame, Sparkles, RotateCcw, Heart } from "lucide-react";

export default function DiyaCounterSection() {
  // Altar of 7 traditional sacred Diyas
  const [diyas, setDiyas] = useState([
    { id: 1, name: "Pratham Diya (Hope)", lit: true },
    { id: 2, name: "Dwitiya Diya (Peace)", lit: false },
    { id: 3, name: "Tritiya Diya (Prosperity)", lit: true },
    { id: 4, name: "Maha Diya (Love & Light)", lit: true, isCenter: true },
    { id: 5, name: "Panchama Diya (Wisdom)", lit: false },
    { id: 6, name: "Shashta Diya (Joy)", lit: true },
    { id: 7, name: "Saptama Diya (Unity)", lit: false },
  ]);

  const [totalLitCount, setTotalLitCount] = useState(108);

  useEffect(() => {
    // Load persisted count if any
    const saved = localStorage.getItem("diyaverse_lit_count");
    if (saved) {
      setTotalLitCount(parseInt(saved, 10));
    }
  }, []);

  const toggleDiya = (id) => {
    setDiyas((prev) =>
      prev.map((d) => {
        if (d.id === id) {
          const nextLit = !d.lit;
          if (nextLit) {
            sound.playDiyaSound();
            const newCount = totalLitCount + 1;
            setTotalLitCount(newCount);
            localStorage.setItem("diyaverse_lit_count", newCount.toString());

            // Trigger gentle golden celebration spark
            confetti({
              particleCount: 20,
              spread: 45,
              origin: { y: 0.7 },
              colors: ["#D4A64A", "#F5D79D", "#E68A32"],
            });
          }
          return { ...d, lit: nextLit };
        }
        return d;
      })
    );
  };

  const lightAllDiyas = () => {
    sound.playCelebrationSound();
    setDiyas((prev) => prev.map((d) => ({ ...d, lit: true })));
    const newCount = totalLitCount + diyas.filter((d) => !d.lit).length;
    setTotalLitCount(newCount);
    localStorage.setItem("diyaverse_lit_count", newCount.toString());

    // Big festive confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#D4A64A", "#F5D79D", "#8F2028", "#E68A32"],
    });
  };

  const resetDiyas = () => {
    setDiyas((prev) =>
      prev.map((d, index) => ({
        ...d,
        lit: index === 3, // keep central Maha Diya lit
      }))
    );
  };

  const litCount = diyas.filter((d) => d.lit).length;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Decorative festive card container */}
      <div className="relative glass-festive rounded-3xl p-6 sm:p-10 md:p-12 border border-[#D4A64A]/30 shadow-2xl overflow-hidden">
        {/* Ornate Gold Corners */}
        <div className="absolute top-3 left-3">
          <GoldenBorderCorner position="top-left" />
        </div>
        <div className="absolute top-3 right-3">
          <GoldenBorderCorner position="top-right" />
        </div>
        <div className="absolute bottom-3 left-3">
          <GoldenBorderCorner position="bottom-left" />
        </div>
        <div className="absolute bottom-3 right-3">
          <GoldenBorderCorner position="bottom-right" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8F2028]/60 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#D4A64A]/30">
            <Flame className="w-3.5 h-3.5 text-[#E68A32]" />
            <span>Interactive Ritual</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text mb-3">
            Spread the Light
          </h2>

          <p className="text-sm sm:text-base text-[#F5E6C8]/80 leading-relaxed font-light">
            Every diya represents hope, happiness, and positivity. Tap on any unlit diya to kindle its sacred flame and illuminate the world.
          </p>

          {/* Global Counter Badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#54151F]/80 border border-[#D4A64A]/50 shadow-inner">
            <span className="text-xs uppercase tracking-widest text-[#F5D79D]/80">
              Diyas Lit Across DiyaVerse:
            </span>
            <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5D79D] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E68A32] animate-pulse" />
              {totalLitCount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Traditional Diya Altar Array */}
        <div className="relative z-10 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6 items-end justify-items-center">
            {diyas.map((diya) => (
              <div
                key={diya.id}
                onClick={() => toggleDiya(diya.id)}
                className={`flex flex-col items-center p-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                  diya.lit
                    ? "bg-[#54151F]/40 border border-[#D4A64A]/40 shadow-lg shadow-[#D4A64A]/10 scale-100"
                    : "bg-[#27100D]/50 border border-white/5 opacity-70 hover:opacity-100 hover:scale-105"
                } ${diya.isCenter ? "sm:col-span-2 md:col-span-1 -translate-y-2" : ""}`}
              >
                <DiyaSvg
                  lit={diya.lit}
                  size={diya.isCenter ? 110 : 85}
                  glow={true}
                />
                <span className="text-[11px] font-medium text-[#F5D79D] mt-2 text-center">
                  {diya.name.split(" ")[0]}
                </span>
                <span className="text-[9px] text-[#F5E6C8]/60 uppercase tracking-wider">
                  {diya.lit ? "Glowing" : "Tap to Light"}
                </span>
              </div>
            ))}
          </div>

          {/* Action Toolbar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={lightAllDiyas}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] to-[#D4A64A] shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#8F2028]" />
              <span>Light All 7 Diyas</span>
            </button>

            <button
              onClick={resetDiyas}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium text-[#F5E6C8]/75 bg-[#351014]/70 border border-[#D4A64A]/30 hover:text-[#F5D79D] hover:border-[#D4A64A] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Altar</span>
            </button>
          </div>

          {/* Altar Progress Message */}
          <div className="mt-6 text-center text-xs text-[#F5D79D]/75 flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#8F2028] fill-[#8F2028]" />
            <span>
              {litCount === 7
                ? "All sacred diyas are glowing bright! May your home be blessed with eternal light."
                : `${litCount} of 7 diyas illuminated. Keep spreading the radiance.`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
