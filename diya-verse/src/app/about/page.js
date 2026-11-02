"use client";

import DiyaSvg from "@/components/ui/DiyaSvg";
import RangoliSvg from "@/components/ui/RangoliSvg";
import { GoldenBorderCorner, MarigoldToran } from "@/components/ui/GoldenBorder";
import { Sparkles, Calendar, Heart, Award, Flame, Sun, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const fiveDays = [
    {
      day: "Day 1",
      title: "Dhanteras (Dhantrayodashi)",
      subtext: "Celebration of Wealth & Health",
      desc: "Dedicated to Lord Dhanvantari, the physician of the gods, and Goddess Lakshmi. Homes welcome prosperity, gold, and brass utensils are brought home, and the first earthen lamps are lit at dusk.",
    },
    {
      day: "Day 2",
      title: "Naraka Chaturdashi (Chhoti Diwali)",
      subtext: "Triumph of Virtue over Vice",
      desc: "Commemorates the liberation of the world from darkness by Lord Krishna. People take sacred herbal oil baths before dawn to cleanse negativity and prepare for illumination.",
    },
    {
      day: "Day 3",
      title: "Lakshmi Puja (The Main Diwali)",
      subtext: "The Cosmic Festival of Lights",
      desc: "The sacred night of the new moon (Amavasya). Families perform Lakshmi-Ganesha puja, light rows of glowing diyas across every threshold, exchange sweets, and illuminate the night sky with fireworks.",
    },
    {
      day: "Day 4",
      title: "Govardhan Puja (Annakut)",
      subtext: "Gratitude to Mother Nature",
      desc: "Celebrates Lord Krishna lifting Mount Govardhan to shield humanity from torrential rains. Families prepare grand feasts of gratitude and honor livestock and harvest.",
    },
    {
      day: "Day 5",
      title: "Bhai Dooj (Yama Dwitiya)",
      subtext: "Sacred Bond of Siblings",
      desc: "Honors the eternal bond between brothers and sisters, recalling Yamraj visiting his sister the Yamuna. Sisters apply auspicious tilak and pray for long life and happiness.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/30 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>Sacred Heritage</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
          The Essence of Deepavali & DiyaVerse
        </h1>

        <p className="text-sm sm:text-base text-[#F5E6C8]/85 leading-relaxed font-light">
          Deepavali—derived from the Sanskrit words <em>Dīpa</em> (light/lamp) and <em>Āvalī</em> (row or series)—is the celebration of light triumphing over darkness, knowledge over ignorance, and hope over despair.
        </p>
      </div>

      {/* Symbolism Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-festive rounded-2xl p-6 border border-[#D4A64A]/25 text-center flex flex-col items-center">
          <DiyaSvg lit={true} size={65} glow={true} className="mb-3" />
          <h3 className="font-playfair text-lg font-bold text-[#F5D79D] mb-1">
            The Clay Diya
          </h3>
          <p className="text-xs text-[#F5E6C8]/75 leading-relaxed">
            The earthen clay represents the human body, the sacred oil symbolizes our attachments, and the cotton wick is the intellect. Burning them produces the flame of pure consciousness.
          </p>
        </div>

        <div className="glass-festive rounded-2xl p-6 border border-[#D4A64A]/25 text-center flex flex-col items-center">
          <div className="my-2">
            <RangoliSvg theme="marigold" size={65} />
          </div>
          <h3 className="font-playfair text-lg font-bold text-[#F5D79D] mb-1">
            Rangoli Mandala
          </h3>
          <p className="text-xs text-[#F5E6C8]/75 leading-relaxed">
            Drawn at home entrances using vibrant powdered minerals and rice flour, Rangolis create sacred energetic portals that welcome Goddess Lakshmi and feed visiting insects and birds.
          </p>
        </div>

        <div className="glass-festive rounded-2xl p-6 border border-[#D4A64A]/25 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-[#54151F] border border-[#D4A64A]/40 flex items-center justify-center text-[#F5D79D] my-2">
            <Sun className="w-7 h-7 text-[#D4A64A]" />
          </div>
          <h3 className="font-playfair text-lg font-bold text-[#F5D79D] mb-1">
            Tamso Ma Jyotirgamaya
          </h3>
          <p className="text-xs text-[#F5E6C8]/75 leading-relaxed">
            From the Brihadaranyaka Upanishad, this ancient prayer reminds us to continually journey from shadows toward illumination, compassion, and universal brotherhood.
          </p>
        </div>
      </div>

      {/* The 5 Sacred Days of Diwali */}
      <div className="glass-festive rounded-3xl p-6 sm:p-10 border border-[#D4A64A]/30 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8F2028]/60 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>The Festive Cycle</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold gold-gradient-text">
            The Five Sacred Days of Diwali
          </h2>
        </div>

        <div className="space-y-6">
          {fiveDays.map((item, idx) => (
            <div
              key={item.day}
              className="p-5 rounded-2xl bg-[#27100D]/70 border border-[#D4A64A]/20 flex flex-col sm:flex-row gap-4 sm:items-start"
            >
              <div className="sm:w-28 shrink-0">
                <span className="text-xs font-bold text-[#D4A64A] bg-[#54151F] px-2.5 py-1 rounded-full border border-[#D4A64A]/30">
                  {item.day}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#F5D79D]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#D4A64A] uppercase tracking-wider font-medium mb-1">
                  {item.subtext}
                </p>
                <p className="text-xs sm:text-sm text-[#F5E6C8]/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contest & Team Credits Banner */}
      <div className="glass-festive rounded-3xl p-6 sm:p-10 border border-[#D4A64A]/30 text-center relative overflow-hidden">
        <div className="absolute top-2 left-2">
          <GoldenBorderCorner position="top-left" />
        </div>
        <div className="absolute top-2 right-2">
          <GoldenBorderCorner position="top-right" />
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8F2028]/70 border border-[#D4A64A]/40 text-[#F5D79D] text-xs font-semibold uppercase">
            <Award className="w-4 h-4 text-[#D4A64A]" />
            <span>Contest Submission</span>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold gold-gradient-text">
            Created for GDG on Campus JIS University & AWS Student Builder Group
          </h2>

          <p className="text-xs sm:text-sm text-[#F5E6C8]/80 leading-relaxed font-light">
            DiyaVerse was architected to unite timeless Indian festive heritage with modern generative AI and interactive web technologies. Built with Next.js App Router, Google Gemini SDK, Tailwind CSS, and Web Audio synthesis.
          </p>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#F5D79D]/75 font-devanagari text-base">
            <span>सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज</span>
            <span>•</span>
            <span>शुभं करोति कल्याणम्</span>
          </div>
        </div>
      </div>
    </div>
  );
}
