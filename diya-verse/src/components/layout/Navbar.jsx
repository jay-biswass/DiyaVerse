"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sound } from "@/lib/sound";
import DiyaSvg from "../ui/DiyaSvg";
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Music, 
  Menu, 
  X, 
  HeartHandshake, 
  Flame, 
  Bot, 
  Info 
} from "lucide-react";

import { useMusic } from "@/context/MusicContext";

function NavbarContent() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying: musicActive, isMuted, toggleMusic, toggleMute } = useMusic();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Virtual Diya", href: "/celebrate" },
    { name: "Greeting Creator", href: "/greeting" },
    { name: "AI Wishes", href: "/ai-wishes" },
    { name: "Community Wall", href: "/community" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#27100D]/90 backdrop-blur-md border-b border-[#D4A64A]/25 py-2.5 shadow-xl shadow-black/40"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          onClick={() => sound.playDiyaSound()}
        >
          <div className="relative w-9 h-10 transition-transform duration-300 group-hover:scale-110">
            <DiyaSvg lit={true} size={40} glow={true} />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider gold-gradient-text flex items-center gap-1">
              DiyaVerse
              <span className="text-xs bg-[#8F2028] text-[#F5D79D] px-1.5 py-0.5 rounded border border-[#D4A64A]/40 font-poppins font-normal">
                🪔
              </span>
            </span>
            <span className="text-[10px] tracking-widest text-[#F5D79D]/70 uppercase font-poppins -mt-1">
              Festival of Lights
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#F5D79D] bg-[#54151F]/80 border border-[#D4A64A]/40 shadow-inner"
                    : "text-[#F5E6C8]/80 hover:text-[#F5D79D] hover:bg-[#54151F]/30"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#D4A64A] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons: Audio toggles & Celebrate CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Ambient Festive Sitar/Tanpura Music Toggle */}
          <button
            onClick={toggleMusic}
            title={musicActive ? "Pause Festive Music" : "Play Festive Music"}
            className={`p-2 rounded-full border transition-all duration-200 flex items-center gap-1.5 text-xs ${
              musicActive
                ? "bg-[#8F2028] text-[#F5D79D] border-[#D4A64A] shadow-md shadow-[#E68A32]/20 animate-pulse"
                : "bg-[#351014]/60 text-[#F5E6C8]/70 border-[#D4A64A]/30 hover:border-[#D4A64A]/70"
            }`}
          >
            <Music className="w-4 h-4" />
            <span className="text-[11px] hidden lg:inline">
              {musicActive ? "Music On" : "Music"}
            </span>
          </button>

          {/* Mute SFX Toggle */}
          <button
            onClick={toggleMute}
            title={isMuted ? "Unmute Sound Effects" : "Mute Sound Effects"}
            className="p-2 rounded-full bg-[#351014]/60 text-[#F5E6C8]/70 border border-[#D4A64A]/30 hover:border-[#D4A64A]/70 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#F5D79D]" />}
          </button>

          {/* Primary CTA: Celebrate Now */}
          <Link
            href="/celebrate"
            onClick={() => sound.playCelebrationSound()}
            className="ml-1 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg shadow-[#D4A64A]/25 hover:shadow-[#D4A64A]/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Sparkles className="w-4 h-4" />
            <span>Celebrate Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleMusic}
            className={`p-2 rounded-full border ${
              musicActive
                ? "bg-[#8F2028] text-[#F5D79D] border-[#D4A64A]"
                : "bg-[#351014]/60 text-[#F5E6C8]/70 border-[#D4A64A]/30"
            }`}
          >
            <Music className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#F5E6C8] bg-[#351014]/80 border border-[#D4A64A]/30"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#27100D]/95 backdrop-blur-xl border-b border-[#D4A64A]/30 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    sound.playDiyaSound();
                  }}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "bg-[#54151F] text-[#F5D79D] border border-[#D4A64A]/40"
                      : "text-[#F5E6C8]/80 hover:bg-[#351014]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="text-xs text-[#D4A64A]">●</span>}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#D4A64A]/20 flex items-center justify-between">
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 text-sm text-[#F5E6C8]/80 py-2 px-3 rounded-lg bg-[#351014]"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#F5D79D]" />}
                <span>{isMuted ? "Unmute Sounds" : "Mute Sounds"}</span>
              </button>

              <Link
                href="/celebrate"
                onClick={() => {
                  setMobileMenuOpen(false);
                  sound.playCelebrationSound();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Celebrate</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Navbar() {
  return (
    <Suspense
      fallback={
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#27100D]/90 py-4 h-16 border-b border-[#D4A64A]/20" />
      }
    >
      <NavbarContent />
    </Suspense>
  );
}
