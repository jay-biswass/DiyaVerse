"use client";

import Link from "next/link";
import DiyaSvg from "../ui/DiyaSvg";
import { MarigoldToran, GoldenBorderCorner } from "../ui/GoldenBorder";
import { sound } from "@/lib/sound";
import { Sparkles, Heart, Share2, Flame, Award, Globe } from "lucide-react";

export default function Footer() {
  const handleShare = async () => {
    sound.playDiyaSound();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "DiyaVerse — One Light. A Thousand Wishes. Infinite Celebrations.",
          text: "Celebrate the digital festival of lights with interactive diyas, personalized greeting cards, and AI wishes!",
          url: window.location.origin,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert("DiyaVerse link copied to clipboard!");
    }
  };

  return (
    <footer className="relative mt-24 border-t border-[#D4A64A]/30 bg-gradient-to-b from-[#27100D] via-[#1c090b] to-[#120405] text-[#F5E6C8] overflow-hidden">
      {/* Decorative Top Marigold Garland */}
      <MarigoldToran className="-mt-3 opacity-90" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8F2028]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <DiyaSvg lit={true} size={42} glow={true} />
              <div className="flex flex-col">
                <span className="font-cinzel text-2xl font-bold tracking-wider gold-gradient-text">
                  DiyaVerse
                </span>
                <span className="text-xs tracking-widest text-[#F5D79D]/80 font-poppins">
                  One Light. A Thousand Wishes. Infinite Celebrations.
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F5E6C8]/75 leading-relaxed max-w-md font-light">
              DiyaVerse is a premium digital celebration platform bringing the sacred traditions of Diwali to the modern web. From virtual diya altars and geometric rangolis to AI-crafted personalized greetings, we celebrate the eternal triumph of light over darkness.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#F5D79D] bg-[#54151F]/80 border border-[#D4A64A]/40 hover:bg-[#8F2028] transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share DiyaVerse</span>
              </button>

              <span className="text-xs text-[#F5D79D]/60 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#351014]/60 border border-[#D4A64A]/20">
                <Award className="w-3.5 h-3.5 text-[#D4A64A]" />
                GDG JISU & AWS Hackathon 2026
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-[#F5D79D] uppercase border-b border-[#D4A64A]/20 pb-2">
              Explore DiyaVerse
            </h4>
            <ul className="space-y-2 text-sm text-[#F5E6C8]/80">
              <li>
                <Link href="/" className="hover:text-[#F5D79D] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4A64A]">›</span> Home Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/celebrate" className="hover:text-[#F5D79D] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4A64A]">›</span> Virtual Diya Altar
                </Link>
              </li>
              <li>
                <Link href="/greeting" className="hover:text-[#F5D79D] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4A64A]">›</span> Card Studio & PNG Export
                </Link>
              </li>
              <li>
                <Link href="/ai-wishes" className="hover:text-[#F5D79D] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4A64A]">›</span> Gemini AI Wishes
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-[#F5D79D] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4A64A]">›</span> Global Community Wall
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F5D79D] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4A64A]">›</span> Sacred Traditions of Diwali
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contest & Tech Badges */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-[#F5D79D] uppercase border-b border-[#D4A64A]/20 pb-2">
              Technology & Event
            </h4>
            <div className="space-y-2 text-xs text-[#F5E6C8]/80">
              <div className="p-3 rounded-xl bg-[#351014]/60 border border-[#D4A64A]/25">
                <p className="font-medium text-[#F5D79D]">Organized By:</p>
                <p className="text-[11px] text-[#F5E6C8]/70 mt-0.5">
                  GDG on Campus JIS University & AWS Student Builder Group
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#351014]/60 border border-[#D4A64A]/25">
                <p className="font-medium text-[#F5D79D]">Powered By:</p>
                <p className="text-[11px] text-[#F5E6C8]/70 mt-0.5">
                  Google Gemini AI, Next.js App Router, Tailwind CSS, Framer Motion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#D4A64A]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5E6C8]/60 gap-4">
          <p className="flex items-center gap-1 text-center sm:text-left">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#8F2028] fill-[#8F2028]" /> for Diwali • All rights reserved &copy; 2026 DiyaVerse
          </p>
          <div className="flex items-center gap-4 text-[#F5D79D]/75 font-devanagari text-sm">
            <span>शुभ दीपावली</span>
            <span>•</span>
            <span>तमसो मा ज्योतिर्गमय</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
