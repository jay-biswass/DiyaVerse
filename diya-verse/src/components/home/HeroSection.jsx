"use client";

import { useState } from "react";
import Link from "next/link";
import DiyaSvg from "../ui/DiyaSvg";
import RangoliSvg from "../ui/RangoliSvg";
import FloatingParticles from "./FloatingParticles";
import { sound } from "@/lib/sound";
import { Sparkles, HeartHandshake, ArrowRight, Flame } from "lucide-react";

export default function HeroSection() {
  const [heroDiyaLit, setHeroDiyaLit] = useState(true);

  const handleHeroDiyaClick = () => {
    const nextState = !heroDiyaLit;
    setHeroDiyaLit(nextState);
    if (nextState) {
      sound.playDiyaSound();
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
      {/* Floating particles background */}
      <FloatingParticles count={32} />

      {/* Atmospheric radial golden & crimson glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[#D4A64A]/10 via-[#8F2028]/25 to-transparent blur-[140px] pointer-events-none" />

      {/* Background Rotating Rangoli Artwork */}
      <div className="absolute -top-16 -right-16 md:right-10 opacity-20 pointer-events-none">
        <RangoliSvg theme="gold" size={480} animated={true} />
      </div>
      <div className="absolute -bottom-24 -left-20 md:left-10 opacity-15 pointer-events-none">
        <RangoliSvg theme="marigold" size={420} animated={true} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Small Festival Sub-heading */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#54151F]/80 border border-[#D4A64A]/40 text-[#F5D79D] text-xs uppercase tracking-[0.25em] mb-4 shadow-md backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>The Festival of Lights</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
        </div>

        {/* Traditional Hindi Heading */}
        <h2 className="font-devanagari text-2xl sm:text-3xl md:text-4xl text-[#F5D79D] font-bold tracking-wide drop-shadow mb-2">
          शुभ दीपावली
        </h2>

        {/* Main Golden Headline */}
        <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight gold-gradient-text max-w-4xl leading-[1.15] mb-6">
          Let Your Light Shine.
        </h1>

        {/* Supporting Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5E6C8]/85 max-w-2xl font-light leading-relaxed mb-8">
          Celebrate the festival of lights with beautiful greetings, glowing diyas, joyful memories, and endless wishes. Bring the sacred magic of Diwali to the digital world.
        </p>

        {/* Interactive Centerpiece Diya */}
        <div className="relative my-4 flex flex-col items-center">
          <div
            onClick={handleHeroDiyaClick}
            className="cursor-pointer group transition-transform duration-300 hover:scale-110 active:scale-95"
            title={heroDiyaLit ? "Click to extinguish flame" : "Click to light the sacred Diya"}
          >
            <DiyaSvg lit={heroDiyaLit} size={150} glow={true} />
          </div>
          <span className="text-[11px] text-[#F5D79D]/75 mt-2 flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#E68A32]" />
            {heroDiyaLit ? "Touch Diya to toggle flame" : "Touch Diya to ignite sacred flame"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link
            href="/greeting"
            onClick={() => sound.playDiyaSound()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg shadow-[#D4A64A]/30 hover:shadow-[#D4A64A]/50 hover:scale-105 active:scale-95 transition-all duration-200 text-sm sm:text-base"
          >
            <span>Create Your Greeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/celebrate"
            onClick={() => sound.playCelebrationSound()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-[#F5E6C8] bg-[#54151F]/70 border border-[#D4A64A]/50 hover:bg-[#8F2028] hover:border-[#D4A64A] transition-all duration-200 text-sm sm:text-base backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#F5D79D]" />
            <span>Explore Celebration</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
