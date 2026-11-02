"use client";

import Link from "next/link";
import { sound } from "@/lib/sound";
import { 
  Sparkles, 
  Send, 
  Flame, 
  Bot, 
  Palette, 
  Users, 
  ArrowRight,
  PartyPopper
} from "lucide-react";

export default function FeatureShowcase() {
  const features = [
    {
      id: "greeting-cards",
      title: "Personalized Greeting Cards",
      description: "Design exquisite royal cards with 6 authentic Diwali themes, custom typography, and high-resolution PNG download.",
      href: "/greeting",
      icon: Send,
      badge: "6 Royal Themes",
      accent: "from-[#D4A64A] to-[#E68A32]",
      tag: "Create & Share",
    },
    {
      id: "ai-wishes",
      title: "Google Gemini AI Wishes",
      description: "Harness Google Gemini AI to compose heartfelt, humorous, or emotional Diwali wishes in English, Hindi, and Bengali.",
      href: "/ai-wishes",
      icon: Bot,
      badge: "Powered by Gemini",
      accent: "from-[#F5D79D] to-[#D4A64A]",
      tag: "Intelligent Generative",
    },
    {
      id: "virtual-diya",
      title: "Virtual Diya Altar",
      description: "Kindle the Ashtalakshmi sacred diyas in an immersive 3D-styled sanctum with authentic flame physics and temple bells.",
      href: "/celebrate",
      icon: Flame,
      badge: "Sacred Altar",
      accent: "from-[#E68A32] to-[#8F2028]",
      tag: "Interactive Ritual",
    },
    {
      id: "fireworks",
      title: "Fireworks & Sky Celebration",
      description: "Ignite radiant digital firecrackers, golden cascades, and vibrant sky bursts with real-time particle physics.",
      href: "/celebrate",
      icon: PartyPopper,
      badge: "Touch & Click Bursts",
      accent: "from-[#8F2028] to-[#54151F]",
      tag: "Joyful Spectacle",
    },
    {
      id: "rangoli-creator",
      title: "Rangoli Art Studio",
      description: "Explore sacred mandala symmetries, rotate intricate geometries, and swap vibrant herbal color palettes.",
      href: "/celebrate",
      icon: Palette,
      badge: "Vedic Mandalas",
      accent: "from-[#253D36] to-[#D4A64A]",
      tag: "Sacred Geometry",
    },
    {
      id: "community-wall",
      title: "Community Greeting Wall",
      description: "Read and post Diwali blessings alongside visitors worldwide. Share joy and receive festive digital love.",
      href: "/community",
      icon: Users,
      badge: "Global Blessings",
      accent: "from-[#54151F] to-[#27100D]",
      tag: "Live Fellowship",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/30 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>The DiyaVerse Experience</span>
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text mb-4">
          Tradition Meets Next-Gen Technology
        </h2>

        <p className="text-sm sm:text-base text-[#F5E6C8]/80 leading-relaxed font-light">
          Every corner of DiyaVerse is crafted with intention—honoring rich Indian cultural roots while delivering an unforgettable interactive celebration.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => sound.playDiyaSound()}
              className="group relative glass-festive glass-festive-hover rounded-2xl p-7 flex flex-col justify-between border border-[#D4A64A]/25 overflow-hidden"
            >
              {/* Subtle accent corner highlight */}
              <div
                className={`absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br ${item.accent} opacity-15 blur-2xl group-hover:opacity-30 transition-opacity`}
              />

              <div>
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#54151F]/80 border border-[#D4A64A]/40 text-[#F5D79D] group-hover:scale-110 group-hover:bg-[#8F2028] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-[#D4A64A] bg-[#27100D]/70 px-2.5 py-1 rounded-full border border-[#D4A64A]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-[#F5D79D] group-hover:text-[#FFFFFF] transition-colors mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#F5E6C8]/75 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div className="pt-4 border-t border-[#D4A64A]/15 flex items-center justify-between text-xs font-semibold text-[#D4A64A] group-hover:text-[#F5D79D]">
                <span className="tracking-wide uppercase">{item.tag}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
