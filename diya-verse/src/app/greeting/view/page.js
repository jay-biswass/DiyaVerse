"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { toPng } from "html-to-image";
import confetti from "canvas-confetti";
import GreetingCard from "@/components/greeting/GreetingCard";
import { sound } from "@/lib/sound";
import { Download, Sparkles, Share2, ArrowRight } from "lucide-react";

function GreetingViewerContent() {
  const searchParams = useSearchParams();
  const cardRef = useRef(null);
  const [cardData, setCardData] = useState({
    s: "A Friend",
    r: "You",
    rel: "Friend",
    l: "English",
    t: "royal-gold",
    f: "royal-serif",
    m: "Wishing you and your family a blessed and illuminated Diwali! May the divine lights guide your journey towards endless happiness and success.",
  });
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const raw = searchParams.get("card");
    if (raw) {
      try {
        const decoded = JSON.parse(
          decodeURIComponent(escape(atob(decodeURIComponent(raw))))
        );
        setCardData(decoded);
      } catch (err) {
        console.error("Failed to decode greeting payload", err);
      }
    }

    // Play celebration sound & confetti on card load
    sound.playCelebrationSound();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4A64A", "#F5D79D", "#8F2028", "#E68A32"],
    });
  }, [searchParams]);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsDownloading(true);
      sound.playDiyaSound();
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        quality: 0.98,
      });
      const link = document.createElement("a");
      link.download = `Diwali_Greeting_${cardData.r || "DiyaVerse"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
      {/* Received Greeting Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#54151F]/80 border border-[#D4A64A]/40 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-6 shadow-md">
        <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
        <span>Special Diwali Greeting Just For You</span>
      </div>

      <h1 className="font-playfair text-2xl sm:text-4xl font-bold gold-gradient-text text-center mb-8">
        A Heartfelt Blessing from {cardData.s || "Someone Special"}
      </h1>

      {/* Render the Greeting Card */}
      <div className="w-full flex justify-center mb-8">
        <GreetingCard
          ref={cardRef}
          sender={cardData.s}
          recipient={cardData.r}
          relationship={cardData.rel}
          language={cardData.l}
          template={cardData.t}
          message={cardData.m}
          cardFont={cardData.f || "royal-serif"}
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <Download className="w-4 h-4 text-[#8F2028]" />
          <span>{isDownloading ? "Generating Image..." : "Save Card as PNG"}</span>
        </button>

        <Link
          href="/greeting"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-xs sm:text-sm text-[#F5E6C8] bg-[#54151F]/80 border border-[#D4A64A]/50 hover:bg-[#8F2028] transition-all"
        >
          <span>Create Your Own Card</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function GreetingViewPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-[#F5D79D]">
          Loading greeting card...
        </div>
      }
    >
      <GreetingViewerContent />
    </Suspense>
  );
}
