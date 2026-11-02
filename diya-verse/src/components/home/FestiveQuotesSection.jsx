"use client";

import { useState, useEffect } from "react";
import { FESTIVE_QUOTES } from "@/data/greetings";
import DiyaSvg from "../ui/DiyaSvg";
import { Sparkles, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function FestiveQuotesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FESTIVE_QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % FESTIVE_QUOTES.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? FESTIVE_QUOTES.length - 1 : prev - 1
    );
  };

  const current = FESTIVE_QUOTES[currentIndex];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="relative glass-festive rounded-3xl p-8 sm:p-12 text-center border border-[#D4A64A]/30 shadow-xl overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#E68A32]/10 blur-[80px] pointer-events-none" />

        {/* Small top Diya icon */}
        <div className="flex justify-center mb-4">
          <DiyaSvg lit={true} size={50} glow={true} />
        </div>

        <div className="font-devanagari text-lg sm:text-xl text-[#F5D79D] font-semibold mb-3">
          {current.subtext}
        </div>

        {/* Main Quote */}
        <blockquote className="min-h-[100px] flex items-center justify-center">
          <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-[#F5E6C8] font-normal italic leading-relaxed transition-opacity duration-500 max-w-2xl">
            &ldquo;{current.quote}&rdquo;
          </p>
        </blockquote>

        <p className="mt-4 text-xs sm:text-sm text-[#D4A64A] uppercase tracking-widest font-medium">
          — {current.author}
        </p>

        {/* Carousel controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevQuote}
            className="p-2 rounded-full bg-[#351014]/60 text-[#F5D79D] border border-[#D4A64A]/30 hover:border-[#D4A64A] hover:bg-[#54151F] transition-colors"
            aria-label="Previous festive quote"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {FESTIVE_QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-[#D4A64A]"
                    : "w-2 bg-[#D4A64A]/30 hover:bg-[#D4A64A]/60"
                }`}
                aria-label={`Jump to quote ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="p-2 rounded-full bg-[#351014]/60 text-[#F5D79D] border border-[#D4A64A]/30 hover:border-[#D4A64A] hover:bg-[#54151F] transition-colors"
            aria-label="Next festive quote"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
