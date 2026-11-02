"use client";

import { forwardRef } from "react";
import DiyaSvg from "../ui/DiyaSvg";
import RangoliSvg from "../ui/RangoliSvg";
import { LuxuryCorner } from "./artwork/OrnateCorners";
import MandalaArtwork from "./artwork/MandalaArtwork";
import LotusArtwork from "./artwork/LotusArtwork";
import BrassDiyaArtwork from "./artwork/BrassDiyaArtwork";
import MughalArchArtwork from "./artwork/MughalArchArtwork";
import MarigoldGarlandArtwork from "./artwork/MarigoldGarlandArtwork";
import PeacockArtwork from "./artwork/PeacockArtwork";
import LanternArtwork from "./artwork/LanternArtwork";
import FireworksArtwork from "./artwork/FireworksArtwork";
import VintageStampArtwork from "./artwork/VintageStampArtwork";
import { TEMPLATES, CARD_FONTS } from "@/data/cardTemplates";
import { Sparkles, Heart } from "lucide-react";

const GreetingCard = forwardRef(function GreetingCard(
  {
    sender = "Aarav",
    recipient = "Priya",
    message = "May the divine light of Diwali guide your path, bring peace to your heart, and fill your home with prosperity. Wishing you and your family a blessed and beautiful Diwali!",
    template = "royal-gold",
    language = "English",
    relationship = "Friend",
    cardFont = "royal-serif",
    customHeader = "",
    colorVariant = "",
    showRelationship = true,
  },
  ref
) {
  // Find current template metadata
  const tmpl = TEMPLATES.find((t) => t.id === template) || TEMPLATES[0];
  const isLight = tmpl.isLightCard || false;

  // Resolve Header Text dynamically
  const resolvedHeader = (() => {
    if (customHeader && customHeader.trim()) return customHeader.trim();
    if (tmpl.headerText && tmpl.headerText[language]) {
      return tmpl.headerText[language];
    }
    if (language === "Hindi") return "शुभ दीपावली";
    if (language === "Bengali") return "শুভ দীপাবলি";
    return "HAPPY DIWALI";
  })();

  // Resolve active color variant background if selected
  const activeBgClass = (() => {
    if (colorVariant && tmpl.colorVariants) {
      const v = tmpl.colorVariants.find((cv) => cv.id === colorVariant);
      if (v) return `bg-gradient-to-br ${v.bg}`;
    }
    return tmpl.bgClass;
  })();

  // Resolve font configurations
  const activeFontObj = CARD_FONTS.find((f) => f.id === cardFont) || CARD_FONTS[0];

  const getHeaderFontClass = () => {
    if (language === "Bengali") return "font-bengali";
    if (language === "Hindi") {
      return activeFontObj.devanagariClass || "font-devanagari";
    }
    // English
    if (cardFont === "festive-ornate") return "font-rozha";
    if (cardFont === "poetic-cursive" || cardFont === "elegant-calligraphy") return "font-great-vibes text-3xl sm:text-4xl";
    if (cardFont === "warm-handwritten") return "font-kalam";
    if (cardFont === "temple-classic" || cardFont === "traditional-indian") return "font-cinzel";
    if (cardFont === "modern-festive") return "font-poppins";
    if (cardFont === "luxury-editorial") return "font-cormorant";
    return "font-playfair";
  };

  const getMessageFontClass = () => {
    const len = message?.length || 0;
    const sizeClass =
      len > 220
        ? "text-[11px] sm:text-xs leading-snug"
        : len > 130
        ? "text-xs sm:text-sm leading-relaxed"
        : "text-sm sm:text-base leading-relaxed";

    if (language === "Bengali") {
      return `${activeFontObj.bengaliClass} ${sizeClass}`;
    }
    if (language === "Hindi") {
      return `${activeFontObj.devanagariClass} ${sizeClass}`;
    }
    // English
    switch (cardFont) {
      case "festive-ornate":
        return `font-rozha ${sizeClass}`;
      case "warm-handwritten":
        return `font-kalam text-sm sm:text-base font-medium leading-relaxed`;
      case "temple-classic":
      case "traditional-indian":
        return `font-cinzel text-xs sm:text-sm font-medium tracking-wide leading-relaxed`;
      case "poetic-cursive":
      case "elegant-calligraphy":
        return `font-caveat text-base sm:text-lg font-medium leading-snug`;
      case "modern-festive":
        return `font-poppins ${sizeClass}`;
      case "luxury-editorial":
        return `font-cormorant text-sm sm:text-base italic leading-relaxed`;
      case "royal-serif":
      default:
        return `font-playfair ${sizeClass} italic`;
    }
  };

  const getNameFontClass = () => {
    if (language === "Bengali") return "font-bengali";
    if (language === "Hindi") return activeFontObj.devanagariClass || "font-devanagari";
    if (cardFont === "warm-handwritten") return "font-kalam";
    if (cardFont === "luxury-editorial") return "font-cormorant";
    return "font-playfair";
  };

  // Accent and text colors
  const accent = tmpl.accentColor || "#D4A64A";
  const textColor = tmpl.textColor || (isLight ? "#2C1810" : "#F5E6C8");

  return (
    <div
      ref={ref}
      id="diwali-greeting-card"
      className={`relative w-full max-w-[500px] aspect-[4/5] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl overflow-hidden select-none transition-all duration-300 ${activeBgClass} ${tmpl.borderClass}`}
      style={{
        color: textColor,
        boxShadow: isLight
          ? `0 20px 45px rgba(0, 0, 0, 0.25), 0 0 25px ${accent}25`
          : `0 25px 55px rgba(0, 0, 0, 0.75), 0 0 35px ${accent}30`,
      }}
    >
      {/* =========================================================================
          TEMPLATE-SPECIFIC UNIQUE BACKGROUND ARTWORK & COMPOSITIONS (12 DESIGNS)
         ========================================================================= */}

      {/* 1. ROYAL GOLD */}
      {tmpl.id === "royal-gold" && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <MandalaArtwork size={420} color={accent} opacity={0.3} />
          </div>
          <LuxuryCorner position="top-left" variant="royal" color={accent} className="absolute top-2 left-2" />
          <LuxuryCorner position="top-right" variant="royal" color={accent} className="absolute top-2 right-2" />
          <LuxuryCorner position="bottom-left" variant="royal" color={accent} className="absolute bottom-2 left-2" />
          <LuxuryCorner position="bottom-right" variant="royal" color={accent} className="absolute bottom-2 right-2" />
        </>
      )}

      {/* 2. LAKSHMI DIVINE BLESSINGS */}
      {tmpl.id === "lakshmi-blessings" && (
        <>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-25 pointer-events-none">
            <MandalaArtwork size={320} color={accent} opacity={0.35} />
          </div>
          <LuxuryCorner position="top-left" variant="mughal" color={accent} className="absolute top-2 left-2" />
          <LuxuryCorner position="top-right" variant="mughal" color={accent} className="absolute top-2 right-2" />
          <LuxuryCorner position="bottom-left" variant="mughal" color={accent} className="absolute bottom-2 left-2" />
          <LuxuryCorner position="bottom-right" variant="mughal" color={accent} className="absolute bottom-2 right-2" />
        </>
      )}

      {/* 3. TRADITIONAL DIYA GLOW */}
      {tmpl.id === "traditional-diya" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(230,138,50,0.35)_0%,transparent_60%)] pointer-events-none" />
          <LuxuryCorner position="top-left" variant="royal" color={accent} className="absolute top-2 left-2 opacity-70" />
          <LuxuryCorner position="top-right" variant="royal" color={accent} className="absolute top-2 right-2 opacity-70" />
          <LuxuryCorner position="bottom-left" variant="royal" color={accent} className="absolute bottom-2 left-2 opacity-70" />
          <LuxuryCorner position="bottom-right" variant="royal" color={accent} className="absolute bottom-2 right-2 opacity-70" />
        </>
      )}

      {/* 4. RANGOLI CELEBRATION */}
      {tmpl.id === "rangoli-celebration" && (
        <>
          <div className="absolute -top-20 -right-20 opacity-15 pointer-events-none">
            <RangoliSvg theme="peacock" size={320} />
          </div>
          <div className="absolute -bottom-24 -left-24 opacity-15 pointer-events-none">
            <RangoliSvg theme="marigold" size={300} />
          </div>
          <LuxuryCorner position="top-left" variant="royal" color={accent} className="absolute top-2 left-2 opacity-80" />
          <LuxuryCorner position="bottom-right" variant="royal" color={accent} className="absolute bottom-2 right-2 opacity-80" />
        </>
      )}

      {/* 5. FLORAL DIWALI */}
      {tmpl.id === "floral-diwali" && (
        <>
          <MarigoldGarlandArtwork showSideDrops={true} />
        </>
      )}

      {/* 6. MUGHAL HERITAGE */}
      {tmpl.id === "mughal-heritage" && (
        <>
          <MughalArchArtwork color={accent} />
        </>
      )}

      {/* 7. MINIMAL ELEGANCE */}
      {tmpl.id === "minimal-elegance" && (
        <>
          <div className="absolute inset-3 border border-[#C59B3F]/40 rounded-2xl pointer-events-none" />
          <LuxuryCorner position="top-left" variant="minimal" color={accent} className="absolute top-4 left-4" />
          <LuxuryCorner position="top-right" variant="minimal" color={accent} className="absolute top-4 right-4" />
          <LuxuryCorner position="bottom-left" variant="minimal" color={accent} className="absolute bottom-4 left-4" />
          <LuxuryCorner position="bottom-right" variant="minimal" color={accent} className="absolute bottom-4 right-4" />
        </>
      )}

      {/* 8. FESTIVE FIREWORKS */}
      {tmpl.id === "festive-fireworks" && (
        <>
          <FireworksArtwork color={accent} />
          <LuxuryCorner position="top-left" variant="minimal" color={accent} className="absolute top-2 left-2 opacity-80" />
          <LuxuryCorner position="top-right" variant="minimal" color={accent} className="absolute top-2 right-2 opacity-80" />
          <LuxuryCorner position="bottom-left" variant="minimal" color={accent} className="absolute bottom-2 left-2 opacity-80" />
          <LuxuryCorner position="bottom-right" variant="minimal" color={accent} className="absolute bottom-2 right-2 opacity-80" />
        </>
      )}

      {/* 9. PEACOCK ROYALTY */}
      {tmpl.id === "peacock-royalty" && (
        <>
          <LuxuryCorner position="top-left" variant="royal" color="#00E5FF" className="absolute top-2 left-2 opacity-70" />
          <LuxuryCorner position="top-right" variant="royal" color="#00E5FF" className="absolute top-2 right-2 opacity-70" />
          <LuxuryCorner position="bottom-left" variant="royal" color="#00E5FF" className="absolute bottom-2 left-2 opacity-70" />
          <LuxuryCorner position="bottom-right" variant="royal" color="#00E5FF" className="absolute bottom-2 right-2 opacity-70" />
        </>
      )}

      {/* 10. VINTAGE POSTCARD */}
      {tmpl.id === "vintage-postcard" && (
        <>
          {/* Authentic Postage Stamp in Top-Right */}
          <div className="absolute top-3 right-3 z-20">
            <VintageStampArtwork />
          </div>
          {/* Faint Postal Divider Line in Center */}
          <div className="absolute top-16 bottom-14 left-1/2 w-px bg-[#8D6E63]/25 pointer-events-none" />
          <div className="absolute inset-2 border border-[#8D6E63]/40 rounded-2xl pointer-events-none" />
        </>
      )}

      {/* 11. LOTUS SERENITY */}
      {tmpl.id === "lotus-serenity" && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
            <MandalaArtwork size={380} color="#FF80AB" opacity={0.3} />
          </div>
          <LuxuryCorner position="top-left" variant="minimal" color="#FF80AB" className="absolute top-3 left-3 opacity-60" />
          <LuxuryCorner position="top-right" variant="minimal" color="#FF80AB" className="absolute top-3 right-3 opacity-60" />
          <LuxuryCorner position="bottom-left" variant="minimal" color="#FF80AB" className="absolute bottom-3 left-3 opacity-60" />
          <LuxuryCorner position="bottom-right" variant="minimal" color="#FF80AB" className="absolute bottom-3 right-3 opacity-60" />
        </>
      )}

      {/* 12. GRAND CELEBRATION */}
      {tmpl.id === "grand-celebration" && (
        <>
          {/* Left Hanging Festive Lantern (Kandil) cleanly tucked in corner */}
          <div className="absolute top-0 left-2 z-10 opacity-95">
            <LanternArtwork size={28} color="#FFD700" />
          </div>
          {/* Right Hanging Festive Lantern (Kandil) cleanly tucked in corner */}
          <div className="absolute top-0 right-2 z-10 opacity-95">
            <LanternArtwork size={28} color="#FFD700" />
          </div>
          <MarigoldGarlandArtwork showSideDrops={false} />
          {/* Bottom Luxury Corners only to prevent collision with top lanterns */}
          <LuxuryCorner position="bottom-left" variant="royal" color="#FFD700" className="absolute bottom-2 left-2" />
          <LuxuryCorner position="bottom-right" variant="royal" color="#FFD700" className="absolute bottom-2 right-2" />
        </>
      )}

      {/* =========================================================================
          --- CARD HEADER & GREETING TITLE ---
         ========================================================================= */}
      <div
        className={`relative z-10 text-center mx-auto w-full ${
          tmpl.id === "vintage-postcard"
            ? "pt-2 pr-28 text-left"
            : tmpl.id === "floral-diwali"
            ? "pt-7 sm:pt-8 px-10 sm:px-12"
            : tmpl.id === "grand-celebration"
            ? "pt-6 sm:pt-7 px-12 sm:px-14"
            : tmpl.id === "mughal-heritage"
            ? "pt-7 sm:pt-8 px-10 sm:px-12"
            : "pt-3 px-4"
        }`}
      >
        {/* Festive Tagline / Subtitle */}
        <div
          className={`flex items-center gap-1.5 text-[10px] sm:text-xs tracking-widest uppercase mb-1 font-poppins ${
            tmpl.id === "vintage-postcard" ? "justify-start text-[#5D4037]/80" : "justify-center text-[#F5D79D]/80"
          }`}
          style={{ color: isLight ? "#5D4037" : `${accent}DD` }}
        >
          <Sparkles className="w-3 h-3 flex-shrink-0" style={{ color: accent }} />
          <span className="truncate max-w-[280px] sm:max-w-[320px]">{tmpl.tagline}</span>
          <Sparkles className="w-3 h-3 flex-shrink-0" style={{ color: accent }} />
        </div>

        {/* Main Sacred Greeting Title */}
        <h3
          className={`${getHeaderFontClass()} text-xl sm:text-2xl md:text-3xl font-bold tracking-wide drop-shadow leading-tight max-w-[280px] sm:max-w-[330px] mx-auto`}
          style={{ color: accent }}
        >
          {resolvedHeader}
        </h3>

        {/* Recipient Badge */}
        <div
          className={`mt-1.5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs shadow-sm ${
            isLight
              ? "bg-[#EAD9BA]/70 border border-[#8D6E63]/30 text-[#3E2723]"
              : "bg-black/35 border border-white/10 text-[#F5E6C8]"
          }`}
        >
          <span className="opacity-70 font-light font-poppins">To My Dearest</span>
          <span className={`font-semibold ${getNameFontClass()}`} style={{ color: isLight ? "#6A1A24" : "#F5D79D" }}>
            {recipient || "Loved One"}
          </span>
          {showRelationship && relationship && relationship !== "Other" && (
            <span className="text-[10px] ml-1 font-poppins font-normal opacity-75" style={{ color: accent }}>
              ({relationship})
            </span>
          )}
        </div>
      </div>

      {/* =========================================================================
          --- CENTERPIECE ARTWORK & PERSONALIZED MESSAGE ---
         ========================================================================= */}
      <div className="my-auto flex flex-col items-center justify-center py-1 relative z-10 w-full">
        {/* Distinct Artwork Per Template */}
        <div className="mb-2 transform hover:scale-105 transition-transform duration-300">
          {/* Lakshmi Blessings -> Sacred Lotus */}
          {tmpl.id === "lakshmi-blessings" && (
            <div className="flex flex-col items-center gap-1">
              <LotusArtwork size={110} variant="sacred-pink" />
              <BrassDiyaArtwork size={70} glow={true} />
            </div>
          )}

          {/* Traditional Diya Glow -> Flanked Trio Brass Diyas */}
          {tmpl.id === "traditional-diya" && (
            <BrassDiyaArtwork size={105} glow={true} flanked={true} variant="ornate-brass" />
          )}

          {/* Peacock Royalty -> Royal Feather Crest + Lamp */}
          {tmpl.id === "peacock-royalty" && (
            <div className="flex flex-col items-center">
              <PeacockArtwork size={135} />
              <BrassDiyaArtwork size={65} glow={true} />
            </div>
          )}

          {/* Lotus Serenity -> Blooming Sacred Lotus Pedestal */}
          {tmpl.id === "lotus-serenity" && (
            <div className="flex flex-col items-center">
              <LotusArtwork size={125} variant="sacred-pink" />
              <BrassDiyaArtwork size={65} glow={true} />
            </div>
          )}

          {/* Mughal Heritage -> Royal Diya */}
          {tmpl.id === "mughal-heritage" && (
            <BrassDiyaArtwork size={72} glow={true} variant="ornate-brass" />
          )}

          {/* Minimal Elegance -> Ultra Delicate Slender Diya */}
          {tmpl.id === "minimal-elegance" && (
            <div className="p-2 rounded-full border border-[#C59B3F]/30 bg-[#F5EEDB]/50">
              <DiyaSvg lit={true} size={65} glow={true} />
            </div>
          )}

          {/* Vintage Postcard -> Classic Engraved Diya */}
          {tmpl.id === "vintage-postcard" && (
            <BrassDiyaArtwork size={75} glow={true} variant="clay-terracotta" />
          )}

          {/* Grand Celebration -> Tri-Diya Array */}
          {tmpl.id === "grand-celebration" && (
            <BrassDiyaArtwork size={78} glow={true} flanked={true} variant="ornate-brass" />
          )}

          {/* Floral Diwali -> Diya nestled in floral halo */}
          {tmpl.id === "floral-diwali" && (
            <div className="relative">
              <BrassDiyaArtwork size={72} glow={true} variant="ornate-brass" />
            </div>
          )}

          {/* Default / Royal Gold / Rangoli / Fireworks -> Classic Glowing Diya */}
          {["royal-gold", "rangoli-celebration", "festive-fireworks"].includes(tmpl.id) && (
            <BrassDiyaArtwork size={85} glow={true} variant="ornate-brass" />
          )}
        </div>

        {/* Personalized Message Body Container */}
        <div
          className={`w-full max-w-[440px] text-center px-3 sm:px-5 py-2 rounded-2xl transition-all duration-200 ${
            tmpl.id === "festive-fireworks"
              ? "bg-black/60 backdrop-blur-md border border-[#FFD54F]/30 shadow-xl"
              : tmpl.id === "minimal-elegance"
              ? "bg-[#FAF5E8]/60 border border-[#C59B3F]/20"
              : tmpl.id === "vintage-postcard"
              ? "bg-[#F3E7CE]/70 border border-[#8D6E63]/25"
              : "bg-black/20 backdrop-blur-sm border border-white/5"
          }`}
        >
          <p
            className={`drop-shadow-sm font-normal ${getMessageFontClass()}`}
            style={{ color: textColor }}
          >
            &ldquo;{message}&rdquo;
          </p>
        </div>
      </div>

      {/* =========================================================================
          --- CARD FOOTER & SENDER SIGNATURE ---
         ========================================================================= */}
      <div
        className={`relative z-10 pt-2.5 border-t flex items-center justify-between text-xs ${
          isLight ? "border-[#8D6E63]/30" : "border-[#D4A64A]/25"
        }`}
      >
        {/* Sender details */}
        <div className="flex flex-col text-left">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-wider font-light font-poppins"
            style={{ color: isLight ? "#6D4C41" : "#F5D79D" }}
          >
            With Warm Blessings,
          </span>
          <span
            className={`font-semibold text-xs sm:text-sm ${getNameFontClass()}`}
            style={{ color: isLight ? "#4E1010" : "#F5D79D" }}
          >
            {sender || "A Well-Wisher"}
          </span>
        </div>

        {/* Authentic DiyaVerse Emblem */}
        <div
          className={`flex items-center gap-1 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border shadow-sm font-cinzel ${
            isLight
              ? "bg-[#EAD9BA]/80 border-[#8D6E63]/30 text-[#4E1010]"
              : "bg-black/30 border-white/10 text-[#F5D79D]/85"
          }`}
        >
          <span>DiyaVerse</span>
          <span className="text-xs">🪔</span>
        </div>
      </div>
    </div>
  );
});

export default GreetingCard;
