"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import DiyaSvg from "@/components/ui/DiyaSvg";
import RangoliSvg from "@/components/ui/RangoliSvg";
import { GoldenBorderCorner } from "@/components/ui/GoldenBorder";
import FireworksCanvas from "@/components/celebration/FireworksCanvas";
import { sound } from "@/lib/sound";
import { 
  Sparkles, 
  Flame, 
  Palette, 
  PartyPopper, 
  RotateCcw, 
  Plus, 
  Check, 
  Heart,
  Volume2
} from "lucide-react";

export default function CelebratePage() {
  const [activeTab, setActiveTab] = useState("diyas"); // "diyas", "rangoli", "fireworks"

  // 9 Sacred Diyas setup (Maha Diya + 8 Ashtalakshmi Diyas)
  const [sanctumDiyas, setSanctumDiyas] = useState([
    { id: 1, name: "Adi Lakshmi (Origin)", lit: true },
    { id: 2, name: "Dhanya Lakshmi (Abundance)", lit: true },
    { id: 3, name: "Dhairya Lakshmi (Courage)", lit: false },
    { id: 4, name: "Gaja Lakshmi (Prosperity)", lit: true },
    { id: 5, name: "Maha Diya (Supreme Radiance)", lit: true, isMaha: true },
    { id: 6, name: "Santana Lakshmi (Family)", lit: false },
    { id: 7, name: "Vijaya Lakshmi (Victory)", lit: true },
    { id: 8, name: "Vidya Lakshmi (Wisdom)", lit: true },
    { id: 9, name: "Dhana Lakshmi (Wealth)", lit: false },
  ]);

  // Rangoli controls
  const [rangoliTheme, setRangoliTheme] = useState("gold");
  const [isSpinning, setIsSpinning] = useState(true);

  // Toggle individual diya
  const toggleDiya = (id) => {
    setSanctumDiyas((prev) =>
      prev.map((d) => {
        if (d.id === id) {
          const next = !d.lit;
          if (next) sound.playDiyaSound();
          return { ...d, lit: next };
        }
        return d;
      })
    );
  };

  // Light all diyas
  const handleLightAll = () => {
    sound.playCelebrationSound();
    setSanctumDiyas((prev) => prev.map((d) => ({ ...d, lit: true })));
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#D4A64A", "#F5D79D", "#E68A32"],
    });
  };

  // Reset sanctum
  const handleResetSanctum = () => {
    sound.playDiyaSound();
    setSanctumDiyas((prev) =>
      prev.map((d) => ({
        ...d,
        lit: d.isMaha ? true : false,
      }))
    );
  };

  // Add a new diya to the collection
  const handleAddDiya = () => {
    if (sanctumDiyas.length >= 18) {
      alert("Sanctum is fully illuminated with 18 sacred diyas!");
      return;
    }
    sound.playDiyaSound();
    const newId = Date.now();
    setSanctumDiyas((prev) => [
      ...prev,
      {
        id: newId,
        name: `Deva Diya #${prev.length + 1}`,
        lit: true,
      },
    ]);
  };

  const totalLit = sanctumDiyas.filter((d) => d.lit).length;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/30 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>Interactive Sanctum</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-5xl font-bold gold-gradient-text mb-3">
          Virtual Diwali Celebration Sanctuary
        </h1>

        <p className="text-sm sm:text-base text-[#F5E6C8]/80 font-light">
          Experience the sacred ritual of Deepavali. Light the Ashtalakshmi lamps, admire meditative rangolis, and launch celebratory fireworks into the night sky.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <button
          onClick={() => {
            sound.playDiyaSound();
            setActiveTab("diyas");
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "diyas"
              ? "bg-gradient-to-r from-[#F5D79D] to-[#D4A64A] text-[#27100D] shadow-lg shadow-[#D4A64A]/25 scale-105"
              : "bg-[#351014]/60 text-[#F5E6C8]/75 border border-[#D4A64A]/25 hover:border-[#D4A64A]/50"
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>Diya Altar ({totalLit}/{sanctumDiyas.length})</span>
        </button>

        <button
          onClick={() => {
            sound.playDiyaSound();
            setActiveTab("rangoli");
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "rangoli"
              ? "bg-gradient-to-r from-[#F5D79D] to-[#D4A64A] text-[#27100D] shadow-lg shadow-[#D4A64A]/25 scale-105"
              : "bg-[#351014]/60 text-[#F5E6C8]/75 border border-[#D4A64A]/25 hover:border-[#D4A64A]/50"
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>Rangoli Studio</span>
        </button>

        <button
          onClick={() => {
            sound.playFireworkSound();
            setActiveTab("fireworks");
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "fireworks"
              ? "bg-gradient-to-r from-[#F5D79D] to-[#D4A64A] text-[#27100D] shadow-lg shadow-[#D4A64A]/25 scale-105"
              : "bg-[#351014]/60 text-[#F5E6C8]/75 border border-[#D4A64A]/25 hover:border-[#D4A64A]/50"
          }`}
        >
          <PartyPopper className="w-4 h-4" />
          <span>Sky Fireworks</span>
        </button>
      </div>

      {/* --- TAB 1: DIYA ALTAR --- */}
      {activeTab === "diyas" && (
        <div className="glass-festive rounded-3xl p-6 sm:p-10 border border-[#D4A64A]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-3 left-3">
            <GoldenBorderCorner position="top-left" />
          </div>
          <div className="absolute top-3 right-3">
            <GoldenBorderCorner position="top-right" />
          </div>

          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#F5D79D] mb-2">
              Ashtalakshmi Sacred Diya Altar
            </h2>
            <p className="text-xs sm:text-sm text-[#F5E6C8]/75 font-light">
              Tap each lamp to invoke the blessings of courage, prosperity, wisdom, and victory. Add more diyas or illuminate them all at once.
            </p>
          </div>

          {/* Diya Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center py-6">
            {sanctumDiyas.map((diya) => (
              <div
                key={diya.id}
                onClick={() => toggleDiya(diya.id)}
                className={`relative flex flex-col items-center p-3.5 rounded-2xl cursor-pointer transition-all duration-300 w-full max-w-[170px] ${
                  diya.lit
                    ? "bg-[#54151F]/40 border border-[#D4A64A]/40 shadow-lg shadow-[#D4A64A]/10 scale-100"
                    : "bg-[#27100D]/60 border border-white/5 opacity-70 hover:opacity-100 hover:scale-105"
                } ${diya.isMaha ? "border-[#D4A64A] bg-[#54151F]/70 -translate-y-1" : ""}`}
              >
                {diya.isMaha && (
                  <span className="absolute -top-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#D4A64A] text-[#27100D] uppercase tracking-wider">
                    Maha Diya
                  </span>
                )}
                <DiyaSvg
                  lit={diya.lit}
                  size={diya.isMaha ? 105 : 85}
                  glow={true}
                />
                <span className="text-xs font-medium text-[#F5D79D] mt-2 text-center line-clamp-1">
                  {diya.name}
                </span>
                <span className="text-[10px] text-[#F5E6C8]/60 mt-0.5">
                  {diya.lit ? "Illuminated" : "Tap to Light"}
                </span>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div className="mt-8 pt-6 border-t border-[#D4A64A]/20 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleLightAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] to-[#D4A64A] shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#8F2028]" />
              <span>Light All Lamps</span>
            </button>

            <button
              onClick={handleAddDiya}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#F5D79D] bg-[#54151F]/80 border border-[#D4A64A]/40 hover:bg-[#8F2028] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Another Diya</span>
            </button>

            <button
              onClick={handleResetSanctum}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#F5E6C8]/70 hover:text-[#F5D79D] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Altar</span>
            </button>
          </div>
        </div>
      )}

      {/* --- TAB 2: RANGOLI STUDIO --- */}
      {activeTab === "rangoli" && (
        <div className="glass-festive rounded-3xl p-6 sm:p-10 border border-[#D4A64A]/30 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#F5D79D] mb-2">
              Vedic Mandala Rangoli Studio
            </h2>
            <p className="text-xs sm:text-sm text-[#F5E6C8]/75 font-light">
              Rangolis represent cosmic harmony, welcome positive divine energies, and celebrate joy at the threshold of every Indian home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Centerpiece Rangoli with Animation */}
            <div className="md:col-span-7 flex flex-col items-center justify-center p-6">
              <div className="relative">
                <RangoliSvg
                  theme={rangoliTheme}
                  size={360}
                  animated={isSpinning}
                />
              </div>
              <span className="text-[11px] text-[#F5D79D]/70 mt-4">
                {isSpinning ? "Meditative Slow Rotation" : "Static Sacred Geometry"}
              </span>
            </div>

            {/* Rangoli Customization Controls */}
            <div className="md:col-span-5 space-y-6 bg-[#27100D]/70 p-6 rounded-2xl border border-[#D4A64A]/25">
              <h3 className="font-cinzel text-sm font-bold text-[#F5D79D] uppercase tracking-wider">
                Select Herbal Color Theme
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "gold", name: "Royal Gold", bg: "bg-[#D4A64A]" },
                  { id: "marigold", name: "Marigold Dawn", bg: "bg-[#E68A32]" },
                  { id: "peacock", name: "Peacock Emerald", bg: "bg-[#253D36]" },
                  { id: "kumkum", name: "Sacred Kumkum", bg: "bg-[#8F2028]" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      sound.playDiyaSound();
                      setRangoliTheme(t.id);
                    }}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                      rangoliTheme === t.id
                        ? "border-[#D4A64A] bg-[#54151F] shadow-md shadow-[#D4A64A]/20"
                        : "border-white/10 hover:border-[#D4A64A]/30"
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${t.bg} border border-white/40`} />
                    <span className="text-xs font-medium text-[#F5E6C8]">{t.name}</span>
                  </button>
                ))}
              </div>

              {/* Rotation toggle */}
              <div className="pt-2 flex items-center justify-between border-t border-[#D4A64A]/20">
                <span className="text-xs text-[#F5E6C8]/80 font-medium">
                  Spin Animation
                </span>
                <button
                  onClick={() => setIsSpinning(!isSpinning)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    isSpinning
                      ? "bg-[#8F2028] text-[#F5D79D] border-[#D4A64A]"
                      : "bg-[#351014] text-[#F5E6C8]/60 border-white/10"
                  }`}
                >
                  {isSpinning ? "Spinning" : "Paused"}
                </button>
              </div>

              {/* Cultural snippet */}
              <div className="p-3.5 rounded-xl bg-[#351014]/60 border border-[#D4A64A]/20 text-[11px] text-[#F5E6C8]/75 leading-relaxed">
                <strong className="text-[#F5D79D]">Cultural Symbolism:</strong> The 12 lotus petals denote the 12 sun cycles of the Vedic year, while the concentric sacred circles represent endless cosmic protection.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 3: FIREWORKS --- */}
      {activeTab === "fireworks" && (
        <div className="space-y-4">
          <FireworksCanvas />
        </div>
      )}
    </div>
  );
}
