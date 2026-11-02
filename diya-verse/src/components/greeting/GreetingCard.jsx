"use client";

import { forwardRef } from "react";
import DiyaSvg from "../ui/DiyaSvg";
import RangoliSvg from "../ui/RangoliSvg";
import { GoldenBorderCorner, MarigoldToran } from "../ui/GoldenBorder";
import { Sparkles } from "lucide-react";

const GreetingCard = forwardRef(function GreetingCard(
  {
    sender = "Aarav",
    recipient = "Priya",
    message = "Wishing you and your loved ones a very Happy Diwali! May this sacred festival illuminate your path with joy, radiant health, and boundless prosperity.",
    template = "royal-gold",
    language = "English",
    relationship = "Friend",
    cardFont = "royal-serif",
    customHeader = "",
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
          defaultHeader: "शुभ दीपावली",
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
          defaultHeader: "तमसो मा ज्योतिर्गमय",
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
          defaultHeader: "शुभ दीपावली",
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
          defaultHeader: language === "Hindi" ? "शुभ दीपावली" : language === "Bengali" ? "শুভ দীপাবলি" : "HAPPY DIWALI",
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
          defaultHeader: language === "Hindi" ? "शुभ दीपावली" : language === "Bengali" ? "শুভ দীপাবলি" : "HAPPY DIWALI",
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
          defaultHeader: language === "Hindi" ? "दीपावली की हार्दिक शुभकामनाएँ" : language === "Bengali" ? "শুভ দীপাবলি" : "HAPPY DEEPAVALI",
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

  // Resolve Header Text dynamically based on language & template
  const getResolvedHeader = () => {
    if (customHeader && customHeader.trim()) return customHeader.trim();

    if (language === "Hindi") {
      if (template === "traditional-diya") return "तमसो मा ज्योतिर्गमय";
      if (template === "rangoli-celebration" || template === "festive-fireworks") {
        return "दीपावली की हार्दिक शुभकामनाएँ";
      }
      return "शुभ दीपावली";
    }

    if (language === "Bengali") {
      if (template === "traditional-diya") return "তমসো মা জ্যোতির্গময়";
      return "শুভ দীপাবলি";
    }

    // English
    if (template === "traditional-diya") return "TAMASO MA JYOTIRGAMAYA";
    if (template === "festive-fireworks") return "HAPPY DEEPAVALI";
    if (template === "royal-gold") return "SHUBH DEEPAWALI";
    return "HAPPY DIWALI";
  };

  const resolvedHeader = getResolvedHeader();

  // Resolve Header Font Family
  const getHeaderFontClass = () => {
    if (language === "Bengali") return "font-bengali";
    if (language === "Hindi") {
      if (cardFont === "festive-ornate") return "font-rozha";
      if (cardFont === "warm-handwritten") return "font-kalam";
      if (cardFont === "temple-classic") return "font-yatra";
      if (cardFont === "modern-festive") return "font-devanagari";
      return "font-devanagari";
    }
    // English
    if (cardFont === "festive-ornate") return "font-rozha";
    if (cardFont === "poetic-cursive") return "font-great-vibes text-3xl sm:text-4xl";
    if (cardFont === "warm-handwritten") return "font-kalam";
    if (cardFont === "temple-classic") return "font-cinzel";
    if (cardFont === "modern-festive") return "font-poppins";
    return details.fontFamily || "font-playfair";
  };

  // Resolve Message Font Family
  const getMessageFontClass = () => {
    if (language === "Bengali") {
      if (cardFont === "modern-festive") return "font-hind text-sm sm:text-base";
      return "font-bengali text-sm sm:text-base";
    }
    if (language === "Hindi") {
      switch (cardFont) {
        case "festive-ornate":
          return "font-rozha text-sm sm:text-base font-medium";
        case "warm-handwritten":
          return "font-kalam text-base sm:text-lg font-medium";
        case "temple-classic":
          return "font-yatra text-sm sm:text-base";
        case "modern-festive":
          return "font-devanagari text-sm sm:text-base";
        case "royal-serif":
        default:
          return "font-devanagari text-sm sm:text-base font-normal";
      }
    }
    // English
    switch (cardFont) {
      case "festive-ornate":
        return "font-rozha text-sm sm:text-base";
      case "warm-handwritten":
        return "font-kalam text-base sm:text-lg font-medium";
      case "temple-classic":
        return "font-cinzel text-xs sm:text-sm font-medium tracking-wide";
      case "poetic-cursive":
        return "font-caveat text-lg sm:text-xl font-medium";
      case "modern-festive":
        return "font-poppins text-xs sm:text-sm";
      case "royal-serif":
      default:
        return "font-playfair text-sm sm:text-base italic";
    }
  };

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
        <div className="flex items-center justify-center gap-1.5 text-xs tracking-widest text-[#F5D79D]/80 uppercase mb-1 font-poppins">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>{details.tagline}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
        </div>

        <h3
          className={`${getHeaderFontClass()} text-2xl sm:text-3xl font-bold tracking-wide drop-shadow leading-tight`}
          style={{ color: details.accentColor }}
        >
          {resolvedHeader}
        </h3>

        {/* Recipient Badge */}
        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-white/10 text-xs text-[#F5E6C8]">
          <span className="text-[#F5D79D]/70 font-light font-poppins">To My Dearest</span>
          <span
            className={`font-semibold text-[#F5D79D] ${
              language === "Bengali"
                ? "font-bengali"
                : language === "Hindi"
                ? "font-devanagari"
                : "font-playfair"
            }`}
          >
            {recipient || "Loved One"}
          </span>
          {relationship && relationship !== "Other" && (
            <span className="text-[10px] text-[#D4A64A] ml-1 font-poppins">({relationship})</span>
          )}
        </div>
      </div>

      {/* --- Centerpiece Glowing Diya --- */}
      <div className="my-auto flex flex-col items-center justify-center py-2 relative z-10">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <DiyaSvg lit={true} size={details.diyaSize} glow={true} />
        </div>

        {/* Personalized Message Body with dynamic typography */}
        <div className="mt-3 text-center px-2 sm:px-4">
          <p
            className={`leading-relaxed text-[#F5E6C8] drop-shadow-sm transition-all duration-200 ${getMessageFontClass()}`}
          >
            &ldquo;{message}&rdquo;
          </p>
        </div>
      </div>

      {/* --- Card Footer: Sender --- */}
      <div className="relative z-10 pt-3 border-t border-[#D4A64A]/25 flex items-center justify-between text-xs">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-[#F5D79D]/70 font-light font-poppins">
            With Warm Blessings,
          </span>
          <span
            className={`font-semibold text-sm text-[#F5D79D] ${
              language === "Bengali"
                ? "font-bengali"
                : language === "Hindi"
                ? "font-devanagari"
                : cardFont === "warm-handwritten"
                ? "font-kalam"
                : "font-playfair"
            }`}
          >
            {sender || "A Well-Wisher"}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-[#F5D79D]/70 bg-black/25 px-2.5 py-1 rounded-full border border-white/10 font-cinzel">
          <span>DiyaVerse</span>
          <span>🪔</span>
        </div>
      </div>
    </div>
  );
});

export default GreetingCard;
