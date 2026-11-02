"use client";

import { useState } from "react";
import { TEMPLATES, CARD_CATEGORIES } from "@/data/cardTemplates";
import { Sparkles, Check, Flame, Palette } from "lucide-react";

export default function CardTemplateSelector({
  selectedTemplate = "royal-gold",
  onSelectTemplate,
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTemplates = TEMPLATES.filter((t) => {
    if (activeCategory === "all") return true;
    return t.category === activeCategory;
  });

  return (
    <div className="space-y-3">
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {CARD_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition-all duration-200 text-xs ${
                isActive
                  ? "bg-gradient-to-r from-[#D4A64A] to-[#E68A32] text-[#27100D] font-semibold shadow-md shadow-[#D4A64A]/25"
                  : "bg-[#27100D]/70 text-[#F5E6C8]/70 hover:text-[#F5D79D] hover:bg-[#3D1812] border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Grid of All 12 Templates with Visual Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
        {filteredTemplates.map((tmpl) => {
          const isSelected = selectedTemplate === tmpl.id;

          return (
            <button
              key={tmpl.id}
              type="button"
              onClick={() => onSelectTemplate(tmpl.id)}
              className={`group relative p-2.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? "border-[#D4A64A] bg-[#54151F] shadow-lg shadow-[#D4A64A]/25 scale-[1.02] ring-1 ring-[#D4A64A]/50"
                  : "border-white/10 bg-[#27100D]/60 hover:border-[#D4A64A]/40 hover:bg-[#351014]/60"
              }`}
            >
              {/* Miniature Visual Card Thumbnail Header */}
              <div
                className={`w-full h-12 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center border ${
                  tmpl.isLightCard ? "border-[#C59B3F]/40" : "border-white/10"
                } ${tmpl.bgClass}`}
              >
                {/* Visual miniature design cues */}
                {tmpl.id === "royal-gold" && (
                  <div className="w-8 h-8 rounded-full border border-[#D4A64A]/50 flex items-center justify-center">
                    <span className="text-xs">👑</span>
                  </div>
                )}
                {tmpl.id === "lakshmi-blessings" && (
                  <div className="w-8 h-8 rounded-full border border-[#E5B25D]/50 flex items-center justify-center bg-red-950/40">
                    <span className="text-xs">🪷</span>
                  </div>
                )}
                {tmpl.id === "traditional-diya" && (
                  <div className="flex items-center gap-0.5">
                    <span className="text-[10px] opacity-60">🪔</span>
                    <span className="text-xs">🪔</span>
                    <span className="text-[10px] opacity-60">🪔</span>
                  </div>
                )}
                {tmpl.id === "rangoli-celebration" && (
                  <div className="w-7 h-7 rounded-full border border-[#00E5FF]/60 flex items-center justify-center bg-teal-950/40">
                    <span className="text-xs">💠</span>
                  </div>
                )}
                {tmpl.id === "floral-diwali" && (
                  <div className="flex items-center gap-1 text-[11px]">
                    <span>🌼</span>
                    <span>🪔</span>
                    <span>🌼</span>
                  </div>
                )}
                {tmpl.id === "mughal-heritage" && (
                  <div className="w-7 h-9 border-t-2 border-x-2 border-[#D4A64A] rounded-t-full flex items-center justify-center">
                    <span className="text-[10px]">🕌</span>
                  </div>
                )}
                {tmpl.id === "minimal-elegance" && (
                  <div className="w-8 h-8 border border-[#C59B3F] rounded flex items-center justify-center bg-[#FAF5E8]">
                    <span className="text-[10px] text-[#2C1810]">✨</span>
                  </div>
                )}
                {tmpl.id === "festive-fireworks" && (
                  <div className="flex items-center gap-1 text-xs">
                    <span>✨</span>
                    <span>🎆</span>
                    <span>✨</span>
                  </div>
                )}
                {tmpl.id === "peacock-royalty" && (
                  <div className="w-8 h-8 rounded-full border border-[#00E5FF] flex items-center justify-center bg-teal-900/40">
                    <span className="text-xs">🦚</span>
                  </div>
                )}
                {tmpl.id === "vintage-postcard" && (
                  <div className="w-9 h-7 border border-[#8D6E63] rounded flex items-center justify-center bg-[#F4E8D1] text-[#3E2723]">
                    <span className="text-[9px] font-bold">DAK</span>
                  </div>
                )}
                {tmpl.id === "lotus-serenity" && (
                  <div className="w-8 h-8 rounded-full border border-[#FF80AB] flex items-center justify-center bg-pink-950/40">
                    <span className="text-xs">🌸</span>
                  </div>
                )}
                {tmpl.id === "grand-celebration" && (
                  <div className="flex items-center gap-1 text-[10px]">
                    <span>🏮</span>
                    <span className="text-xs">🪔</span>
                    <span>🏮</span>
                  </div>
                )}

                {/* Selected Checkmark Badge on Thumbnail */}
                {isSelected && (
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#D4A64A] text-[#27100D] flex items-center justify-center shadow">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
              </div>

              {/* Template Title & Tag */}
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <p className="font-semibold text-xs text-[#F5D79D] group-hover:text-white transition-colors truncate">
                    {tmpl.name}
                  </p>
                </div>
                <p className="text-[10px] text-[#F5E6C8]/60 line-clamp-2 leading-tight">
                  {tmpl.description}
                </p>
              </div>

              {/* Aesthetic Badge */}
              <div className="mt-1.5 pt-1.5 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-[#D4A64A] font-medium">
                  {tmpl.badgeText || tmpl.category}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: tmpl.accentColor }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

