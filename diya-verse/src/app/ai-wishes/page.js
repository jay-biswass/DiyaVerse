"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import DiyaSvg from "@/components/ui/DiyaSvg";
import { GoldenBorderCorner } from "@/components/ui/GoldenBorder";
import { RELATIONSHIPS, LANGUAGES, STYLES } from "@/data/greetings";
import { sound } from "@/lib/sound";
import { 
  Bot, 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  Smartphone, 
  ArrowRight, 
  RotateCcw,
  Flame,
  Award
} from "lucide-react";

export default function AIWishesPage() {
  const router = useRouter();

  // Form states
  const [sender, setSender] = useState("Jay");
  const [recipient, setRecipient] = useState("Rahul");
  const [relationship, setRelationship] = useState("Best Friend");
  const [language, setLanguage] = useState("English");
  const [tone, setTone] = useState("Emotional");
  const [context, setContext] = useState(
    "Remind him of our college Diwali celebrations and hope we meet soon."
  );

  // Generation status & result
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(
    "May this Diwali illuminate your journey with happiness, success, and unforgettable memories. Thinking back to our college Diwali days brings such a smile—may our bond of friendship continue to shine brighter with every passing year. Wishing you a truly blessed and prosperous Diwali!"
  );
  const [source, setSource] = useState("gemini-2.5-flash");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e) => {
    if (e) e.preventDefault();
    sound.playDiyaSound();
    setLoading(true);

    try {
      const res = await fetch("/api/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender,
          recipient,
          relationship,
          language,
          tone,
          context,
        }),
      });

      const data = await res.json();
      if (data.message) {
        setResult(data.message);
        setSource(data.source || "gemini-ai");
        sound.playCelebrationSound();
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#D4A64A", "#F5D79D", "#E68A32"],
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while generating wish. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    sound.playDiyaSound();
    navigator.clipboard.writeText(
      `🪔 Diwali Wish for ${recipient}\n\n"${result}"\n\n— From ${sender}\nCreated with Google Gemini AI on DiyaVerse 🪔`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    sound.playDiyaSound();
    const text = encodeURIComponent(
      `🪔 Happy Diwali ${recipient}!\n\n"${result}"\n\n— With love from ${sender} (Powered by Google Gemini AI)`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleUseInCard = () => {
    sound.playCelebrationSound();
    // Navigate to greeting creator with query parameters
    const query = new URLSearchParams({
      s: sender,
      r: recipient,
      rel: relationship,
      l: language,
      st: tone,
      m: result,
    }).toString();
    router.push(`/greeting?${query}`);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/30 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-3">
          <Bot className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>Google Gemini AI Integration</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-5xl font-bold gold-gradient-text mb-3">
          Personalized Diwali Wish Generator
        </h1>

        <p className="text-sm sm:text-base text-[#F5E6C8]/80 font-light">
          Harness the creativity of Google Gemini AI to craft heartfelt, culturally authentic Diwali greetings tailored to your relationship, language, and cherished memories.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* --- FORM SECTION --- */}
        <div className="lg:col-span-7 glass-festive rounded-3xl p-6 sm:p-8 border border-[#D4A64A]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#D4A64A]/20 pb-4">
            <h2 className="font-cinzel text-lg font-bold text-[#F5D79D] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4A64A]" />
              Prompt Parameters
            </h2>
            <span className="text-[11px] text-[#F5D79D]/70 bg-[#351014] px-2.5 py-1 rounded-full border border-[#D4A64A]/20">
              @google/genai SDK
            </span>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                  Sender Name
                </label>
                <input
                  type="text"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  placeholder="e.g. Jay"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                  Recipient Name
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="e.g. Rahul"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                  Relationship
                </label>
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] focus:outline-none focus:border-[#D4A64A] text-sm cursor-pointer"
                >
                  <option value="Best Friend" className="bg-[#27100D]">Best Friend</option>
                  {RELATIONSHIPS.map((rel) => (
                    <option key={rel} value={rel} className="bg-[#27100D]">
                      {rel}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] focus:outline-none focus:border-[#D4A64A] text-sm cursor-pointer"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code} className="bg-[#27100D]">
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                  Tone & Sentiment
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] focus:outline-none focus:border-[#D4A64A] text-sm cursor-pointer"
                >
                  {STYLES.map((s) => (
                    <option key={s} value={s} className="bg-[#27100D]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                Personal Note or Shared Memory (Optional)
              </label>
              <textarea
                rows={3}
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Mention an inside joke, a shared milestone, or hope to meet during the holidays..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg hover:shadow-[#D4A64A]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#8F2028]" />
              <span>{loading ? "Google Gemini is Composing..." : "Generate Personalized AI Wish"}</span>
            </button>
          </form>
        </div>

        {/* --- OUTPUT SECTION --- */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-festive rounded-3xl p-6 sm:p-8 border border-[#D4A64A]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-2 left-2">
              <GoldenBorderCorner position="top-left" className="w-6 h-6 opacity-60" />
            </div>
            <div className="absolute top-2 right-2">
              <GoldenBorderCorner position="top-right" className="w-6 h-6 opacity-60" />
            </div>

            {/* AI Status Header */}
            <div className="flex items-center justify-between border-b border-[#D4A64A]/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <DiyaSvg lit={true} size={30} glow={true} />
                <span className="font-cinzel text-xs font-bold text-[#F5D79D] uppercase tracking-wider">
                  Generated Diwali Wish
                </span>
              </div>
              <span className="text-[10px] text-[#F5D79D] bg-[#8F2028]/70 px-2 py-0.5 rounded-full border border-[#D4A64A]/30">
                {source}
              </span>
            </div>

            {/* Generated Wish Box */}
            <div className="min-h-[160px] flex items-center justify-center p-4 rounded-2xl bg-[#27100D]/70 border border-white/5 relative">
              {loading ? (
                <div className="flex flex-col items-center gap-3 py-6">
                  <div className="relative animate-flame">
                    <DiyaSvg lit={true} size={60} glow={true} />
                  </div>
                  <span className="text-xs text-[#F5D79D] animate-pulse">
                    Igniting words of light with Gemini AI...
                  </span>
                </div>
              ) : (
                <p
                  className={`text-sm sm:text-base leading-relaxed text-[#F5E6C8] font-normal italic drop-shadow-sm ${
                    language === "Hindi" || language === "Bengali"
                      ? "font-devanagari text-base"
                      : "font-playfair"
                  }`}
                >
                  &ldquo;{result}&rdquo;
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-2.5">
              <button
                onClick={handleUseInCard}
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#F5D79D] to-[#D4A64A] text-[#27100D] shadow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Use this Message in Greeting Card</span>
                <ArrowRight className="w-4 h-4 text-[#8F2028]" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopy}
                  className="py-2.5 px-3 rounded-xl text-xs font-medium bg-[#351014] text-[#F5E6C8] border border-[#D4A64A]/30 hover:border-[#D4A64A] flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F5D79D]" />
                      <span>Copy Wish</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="py-2.5 px-3 rounded-xl text-xs font-medium bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/30 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-2 text-xs font-medium text-[#F5D79D]/75 hover:text-[#F5D79D] flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Regenerate Another Variation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
