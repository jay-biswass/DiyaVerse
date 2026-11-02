"use client";

import { forwardRef } from "react";
import DiyaSvg from "../ui/DiyaSvg";
import RangoliSvg from "../ui/RangoliSvg";
import { GoldenBorderCorner, MarigoldToran } from "../ui/GoldenBorder";
import { Sparkles, Heart } from "lucide-react";

const GreetingCard = forwardRef(function GreetingCard(
  {
    sender = "Aarav",
    recipient = "Priya",
    message = "Wishing you and your loved ones a very Happy Diwali! May this sacred festival illuminate your path with joy, radiant health, and boundless prosperity.",
    template = "royal-gold",
    language = "English",
    relationship = "Friend",
  },
  ref
) {
  // Template specific designs
  const renderTemplateDetails = () => {
    switch (template) {
      case "royal-gold":
        return {
          wrapperClass:
            "bg-gradient-to-br from-[#54151F] via-[#351014] to-[#27100D] border-2 border-[#D4A64A]",
          headerText: "शुभ दीपावली",
          tagline: "Shree Lakshmi - Ganesha Krupa",
          fontFamily: "font-playfair",
          accentColor: "#D4A64A",
          diyaSize: 80,
          showRangoli: true,
          rangoliTheme: "gold",
        };

      case "traditional-diya":
        return {
          wrapperClass:
            "bg-gradient-to-b from-[#351014] via-[#54151F] to-[#27100D] border-2 border-[#E68A32]",
          headerText: "तमसो मा ज्योतिर्गमय",
          tagline: "Lead us from Darkness unto Light",
          fontFamily: "font-cinzel",
          accentColor: "#E68A32",
          diyaSize: 95,
          showRangoli: false,
        };

      case "rangoli-celebration":
        return {
          wrapperClass:
            "bg-gradient-to-tr from-[#253D36] via-[#351014] to-[#8F2028] border-2 border-[#F5D79D]",
          headerText: "தீபாவளி நல்வாழ்த்துக்கள்",
          tagline: "Vibrant Colours of Joy & Hope",
          fontFamily: "font-poppins",
          accentColor: "#F5D79D",
          diyaSize: 75,
          showRangoli: true,
          rangoliTheme: "peacock",
        };

      case "floral-diwali":
        return {
          wrapperClass:
            "bg-gradient-to-br from-[#8F2028] via-[#54151F] to-[#451014] border-2 border-[#E68A32]",
          headerText: "শুভ দীপাবলি",
          tagline: "Auspicious Marigolds & Eternal Peace",
          fontFamily: "font-playfair",
          accentColor: "#E68A32",
          diyaSize: 80,
          showRangoli: false,
          showToran: true,
        };

      case "minimal-elegance":
        return {
          wrapperClass:
            "bg-gradient-to-b from-[#1c0a0c] via-[#27100D] to-[#140608] border border-[#D4A64A]/70 shadow-2xl",
          headerText: "HAPPY DIWALI",
          tagline: "Grace • Illumination • Harmony",
          fontFamily: "font-cinzel",
          accentColor: "#D4A64A",
          diyaSize: 70,
          showRangoli: false,
        };

      case "festive-fireworks":
      default:
        return {
          wrapperClass:
            "bg-gradient-to-b from-[#0e0717] via-[#210c29] to-[#351014] border-2 border-[#F5D79D]",
          headerText: "HAPPY DEEPAVALI",
          tagline: "Infinite Sparks of Happiness",
          fontFamily: "font-poppins",
          accentColor: "#F5D79D",
          diyaSize: 85,
          showRangoli: true,
          rangoliTheme: "marigold",
        };
    }
  };

  const details = renderTemplateDetails();

  return (
    <div
      ref={ref}
      id="diwali-greeting-card"
      className={`relative w-full max-w-[500px] aspect-[4/5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-[#F5E6C8] shadow-2xl overflow-hidden select-none transition-all duration-300 ${details.wrapperClass}`}
      style={{
        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px ${details.accentColor}25`,
      }}
    >
      {/* Background Decorative Rangoli if enabled */}
      {details.showRangoli && (
        <div className="absolute -top-16 -right-16 opacity-15 pointer-events-none">
          <RangoliSvg theme={details.rangoliTheme} size={280} />
        </div>
      )}

      {/* Decorative Toran if enabled */}
      {details.showToran && (
        <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-80">
          <MarigoldToran />
        </div>
      )}

      {/* Golden Corner Embellishments */}
      <div className="absolute top-2 left-2 pointer-events-none">
        <GoldenBorderCorner position="top-left" className="w-8 h-8 opacity-80" />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none">
        <GoldenBorderCorner position="top-right" className="w-8 h-8 opacity-80" />
      </div>
      <div className="absolute bottom-2 left-2 pointer-events-none">
        <GoldenBorderCorner position="bottom-left" className="w-8 h-8 opacity-80" />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none">
        <GoldenBorderCorner position="bottom-right" className="w-8 h-8 opacity-80" />
      </div>

      {/* --- Card Header --- */}
      <div className="text-center relative z-10 pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs tracking-widest text-[#F5D79D]/80 uppercase mb-1">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>{details.tagline}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
        </div>

        <h3
          className={`font-devanagari text-2xl sm:text-3xl font-bold tracking-wide drop-shadow`}
          style={{ color: details.accentColor }}
        >
          {details.headerText}
        </h3>

        {/* Recipient Badge */}
        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-white/10 text-xs text-[#F5E6C8]">
          <span className="text-[#F5D79D]/70">To My Dearest</span>
          <span className="font-semibold text-[#F5D79D]">{recipient || "Loved One"}</span>
          {relationship && relationship !== "Other" && (
            <span className="text-[10px] text-[#D4A64A] ml-1">({relationship})</span>
          )}
        </div>
      </div>

      {/* --- Centerpiece Glowing Diya --- */}
      <div className="my-auto flex flex-col items-center justify-center py-2 relative z-10">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <DiyaSvg lit={true} size={details.diyaSize} glow={true} />
        </div>

        {/* Personalized Message Body */}
        <div className="mt-3 text-center px-2 sm:px-4">
          <p
            className={`text-sm sm:text-base leading-relaxed text-[#F5E6C8] font-normal italic drop-shadow-sm ${
              language === "Hindi" || language === "Bengali"
                ? "font-devanagari text-base"
                : details.fontFamily
            }`}
          >
            &ldquo;{message}&rdquo;
          </p>
        </div>
      </div>

      {/* --- Card Footer: Sender --- */}
      <div className="relative z-10 pt-3 border-t border-[#D4A64A]/25 flex items-center justify-between text-xs">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-[#F5D79D]/70">
            With Warm Blessings,
          </span>
          <span className="font-semibold text-sm text-[#F5D79D] font-playfair">
            {sender || "A Well-Wisher"}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-[#F5D79D]/70 bg-black/25 px-2.5 py-1 rounded-full border border-white/10">
          <span>DiyaVerse</span>
          <span>🪔</span>
        </div>
      </div>
    </div>
  );
});

export default GreetingCard;
