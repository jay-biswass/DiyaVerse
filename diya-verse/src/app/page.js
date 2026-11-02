import HeroSection from "@/components/home/HeroSection";
import DiwaliCountdown from "@/components/home/DiwaliCountdown";
import DiyaCounterSection from "@/components/home/DiyaCounterSection";
import FeatureShowcase from "@/components/home/FeatureShowcase";
import FestiveQuotesSection from "@/components/home/FestiveQuotesSection";
import Link from "next/link";
import { Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Spectacular Hero Section */}
      <HeroSection />

      {/* 2. Premium Live Diwali Countdown Timer */}
      <DiwaliCountdown />

      {/* 3. Interactive Diya Counter Altar */}
      <DiyaCounterSection />

      {/* 4. Feature Showcase */}
      <FeatureShowcase />

      {/* 5. Rotating Festive Message Section */}
      <FestiveQuotesSection />

      {/* 5. Pre-footer Call to Action Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="glass-festive rounded-3xl p-8 sm:p-12 border border-[#D4A64A]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8F2028]/30 via-transparent to-[#E68A32]/20 pointer-events-none" />
          
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient-text mb-4 relative z-10">
            Share the Radiance with Those You Cherish
          </h2>
          <p className="text-sm sm:text-base text-[#F5E6C8]/80 max-w-xl mx-auto mb-8 font-light relative z-10">
            Craft a personalized Diwali card in seconds or ask Google Gemini AI to write custom blessings for your loved ones.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              href="/greeting"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4" />
              <span>Create Free Greeting Card</span>
            </Link>

            <Link
              href="/ai-wishes"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-[#F5E6C8] bg-[#54151F]/80 border border-[#D4A64A]/50 hover:bg-[#8F2028] transition-all text-sm sm:text-base"
            >
              <span>Explore AI Wish Generator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
