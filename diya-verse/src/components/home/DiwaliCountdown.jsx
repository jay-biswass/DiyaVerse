"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import confetti from "canvas-confetti";
import DiyaSvg from "../ui/DiyaSvg";
import { Sparkles, Calendar, Clock, Flame } from "lucide-react";

/**
 * Diwali dates (IST midnight 00:00:00 Asia/Kolkata = UTC 18:30 on previous day)
 * Or standard Diwali day in Asia/Kolkata.
 * 2026: Nov 8, 2026 00:00:00 IST -> UTC: 2026-11-07T18:30:00.000Z
 * 2027: Oct 29, 2027 00:00:00 IST -> UTC: 2027-10-28T18:30:00.000Z
 * 2028: Oct 17, 2028 00:00:00 IST -> UTC: 2028-10-16T18:30:00.000Z
 * 2029: Nov 5, 2029 00:00:00 IST -> UTC: 2029-11-04T18:30:00.000Z
 * 2030: Oct 26, 2030 00:00:00 IST -> UTC: 2030-10-25T18:30:00.000Z
 */
const DIWALI_SCHEDULE = [
  { year: 2026, dateString: "2026-11-08T00:00:00+05:30", label: "8 November 2026" },
  { year: 2027, dateString: "2027-10-29T00:00:00+05:30", label: "29 October 2027" },
  { year: 2028, dateString: "2028-10-17T00:00:00+05:30", label: "17 October 2028" },
  { year: 2029, dateString: "2029-11-05T00:00:00+05:30", label: "5 November 2029" },
  { year: 2030, dateString: "2030-10-26T00:00:00+05:30", label: "26 October 2030" },
];

// Reference start timestamp for progress bar (e.g. 30 days before Diwali window, or previous month)
const WINDOW_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days scale for festive buildup

export default function DiwaliCountdown() {
  const [hasMounted, setHasMounted] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [hasCelebrated, setHasCelebrated] = useState(false);

  // Determine current active Diwali target
  const currentTarget = useMemo(() => {
    // A festival celebration lasts 24 hours after Diwali begins
    const FESTIVAL_DURATION_MS = 24 * 60 * 60 * 1000;
    for (const item of DIWALI_SCHEDULE) {
      const targetMs = new Date(item.dateString).getTime();
      if (now < targetMs + FESTIVAL_DURATION_MS) {
        return {
          ...item,
          targetMs,
          endMs: targetMs + FESTIVAL_DURATION_MS,
        };
      }
    }
    // Fallback to latest
    const last = DIWALI_SCHEDULE[DIWALI_SCHEDULE.length - 1];
    const targetMs = new Date(last.dateString).getTime();
    return {
      ...last,
      targetMs,
      endMs: targetMs + FESTIVAL_DURATION_MS,
    };
  }, [now]);

  // Update timer every second
  useEffect(() => {
    setHasMounted(true);
    setNow(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Time diff calculation
  const diffMs = currentTarget.targetMs - now;
  const isDiwaliDay = diffMs <= 0 && now < currentTarget.endMs;

  // Trigger celebration confetti on Diwali arrival
  const triggerCelebration = useCallback(() => {
    try {
      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isReduced) return;

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4A64A", "#E68A32", "#8F2028", "#FFD700", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isDiwaliDay && !hasCelebrated) {
      setHasCelebrated(true);
      triggerCelebration();
    }
  }, [isDiwaliDay, hasCelebrated, triggerCelebration]);

  // Calculate days, hours, minutes, seconds
  const timeLeft = useMemo(() => {
    if (diffMs <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  }, [diffMs]);

  // Progress computation (percentage of 30-day journey to Diwali)
  const progressPercent = useMemo(() => {
    if (diffMs <= 0) return 100;
    const elapsed = WINDOW_DURATION_MS - diffMs;
    if (elapsed <= 0) return 5;
    const pct = Math.min(100, Math.max(5, (elapsed / WINDOW_DURATION_MS) * 100));
    return Math.round(pct);
  }, [diffMs]);

  // Format two digits helper
  const pad = (num) => String(num).padStart(2, "0");

  return (
    <section
      aria-label="Diwali Countdown Timer"
      className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] rounded-full bg-gradient-to-r from-[#D4A64A]/10 via-[#8F2028]/20 to-[#E68A32]/10 blur-[90px] pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative glass-festive rounded-3xl p-6 sm:p-10 border border-[#D4A64A]/30 shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Subtle Ornamental Corner Accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4A64A]/50 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4A64A]/50 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4A64A]/50 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4A64A]/50 rounded-br-sm pointer-events-none" />

        {/* Header with animated Diya */}
        <div className="text-center flex flex-col items-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <DiyaSvg lit={true} size={42} glow={true} className="animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/30 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
            <span>Auspicious Diwali Countdown • Asia/Kolkata</span>
          </div>

          <h2 className="font-playfair text-2xl sm:text-4xl font-bold gold-gradient-text tracking-wide mb-2">
            The Festival of Lights Is Almost Here
          </h2>

          <p className="text-xs sm:text-sm text-[#F5E6C8]/80 max-w-lg font-light flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D4A64A]" />
            <span>
              Diwali {currentTarget.year} arrives on{" "}
              <strong className="text-[#F5D79D] font-medium">{currentTarget.label}</strong>
            </span>
          </p>
        </div>

        {/* Active Festival Banner (when countdown hits 0) */}
        {isDiwaliDay ? (
          <div className="py-8 px-4 text-center space-y-4">
            <div className="inline-block p-4 rounded-3xl bg-[#54151F]/90 border border-[#D4A64A] shadow-xl animate-bounce">
              <DiyaSvg lit={true} size={84} glow={true} />
            </div>
            <h3 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#F5D79D] drop-shadow-md">
              ✨ Happy Diwali! Shubh Deepavali! ✨
            </h3>
            <p className="text-sm sm:text-base text-[#F5E6C8] max-w-md mx-auto">
              May the divine illumination bring boundless joy, health, wealth, and prosperity to you and your loved ones!
            </p>
            <button
              onClick={triggerCelebration}
              className="mt-3 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              🎉 Shower Festive Flowers
            </button>
          </div>
        ) : (
          <>
            {/* Live Number Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto mb-7">
              {/* DAYS */}
              <div className="relative group flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-gradient-to-b from-[#3E0E14]/90 to-[#23090C]/90 border border-[#D4A64A]/30 shadow-lg shadow-black/40 hover:border-[#D4A64A]/70 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(212,166,74,0.15),transparent_70%)] pointer-events-none" />
                <span className="font-playfair text-3xl sm:text-5xl font-extrabold gold-gradient-text tracking-tight drop-shadow-sm">
                  {hasMounted ? timeLeft.days : "00"}
                </span>
                <span className="text-[10px] sm:text-xs text-[#F5D79D]/80 uppercase tracking-widest font-medium mt-1">
                  Days
                </span>
              </div>

              {/* HOURS */}
              <div className="relative group flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-gradient-to-b from-[#3E0E14]/90 to-[#23090C]/90 border border-[#D4A64A]/30 shadow-lg shadow-black/40 hover:border-[#D4A64A]/70 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(212,166,74,0.15),transparent_70%)] pointer-events-none" />
                <span className="font-playfair text-3xl sm:text-5xl font-extrabold gold-gradient-text tracking-tight drop-shadow-sm">
                  {hasMounted ? pad(timeLeft.hours) : "00"}
                </span>
                <span className="text-[10px] sm:text-xs text-[#F5D79D]/80 uppercase tracking-widest font-medium mt-1">
                  Hours
                </span>
              </div>

              {/* MINUTES */}
              <div className="relative group flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-gradient-to-b from-[#3E0E14]/90 to-[#23090C]/90 border border-[#D4A64A]/30 shadow-lg shadow-black/40 hover:border-[#D4A64A]/70 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(212,166,74,0.15),transparent_70%)] pointer-events-none" />
                <span className="font-playfair text-3xl sm:text-5xl font-extrabold gold-gradient-text tracking-tight drop-shadow-sm">
                  {hasMounted ? pad(timeLeft.minutes) : "00"}
                </span>
                <span className="text-[10px] sm:text-xs text-[#F5D79D]/80 uppercase tracking-widest font-medium mt-1">
                  Minutes
                </span>
              </div>

              {/* SECONDS */}
              <div className="relative group flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-gradient-to-b from-[#3E0E14]/90 to-[#23090C]/90 border border-[#D4A64A]/30 shadow-lg shadow-black/40 hover:border-[#D4A64A]/70 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(212,166,74,0.15),transparent_70%)] pointer-events-none" />
                <span className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#FFF2A3] tracking-tight drop-shadow-[0_0_12px_rgba(212,166,74,0.5)]">
                  {hasMounted ? pad(timeLeft.seconds) : "00"}
                </span>
                <span className="text-[10px] sm:text-xs text-[#F5D79D]/80 uppercase tracking-widest font-medium mt-1">
                  Seconds
                </span>
              </div>
            </div>

            {/* Subtle Progress Bar */}
            <div className="max-w-2xl mx-auto space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#F5E6C8]/70">
                <span className="flex items-center gap-1 text-[#F5D79D]">
                  <Flame className="w-3 h-3 text-[#E68A32]" />
                  <span>Festive Buildup</span>
                </span>
                <span>{progressPercent}% towards Diwali</span>
              </div>

              <div className="w-full h-2 rounded-full bg-black/40 border border-[#D4A64A]/20 p-0.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#8F2028] via-[#E68A32] to-[#D4A64A] transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-[10px] sm:text-[11px] text-[#F5E6C8]/60 text-center font-light pt-1">
                Synchronized with Indian Standard Time (Asia/Kolkata). Diyas will automatically light up upon arrival!
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

