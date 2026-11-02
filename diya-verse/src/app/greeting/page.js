"use client";

import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import confetti from "canvas-confetti";
import GreetingCard from "@/components/greeting/GreetingCard";
import { 
  TEMPLATES, 
  RELATIONSHIPS, 
  LANGUAGES, 
  STYLES, 
  SAMPLE_WISHES 
} from "@/data/greetings";
import { sound } from "@/lib/sound";
import { 
  Download, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  RotateCcw, 
  MessageSquare, 
  Smartphone,
  ExternalLink,
  Flame,
  Palette
} from "lucide-react";

export default function GreetingPage() {
  const cardRef = useRef(null);

  // Form states
  const [sender, setSender] = useState("Aarav");
  const [recipient, setRecipient] = useState("Priya");
  const [relationship, setRelationship] = useState("Friend");
  const [language, setLanguage] = useState("English");
  const [style, setStyle] = useState("Traditional");
  const [template, setTemplate] = useState("royal-gold");
  const [message, setMessage] = useState(
    SAMPLE_WISHES["English"]["Traditional"]
  );

  // Status states
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  // Update sample message when language or style changes
  const applyPresetWish = (lang = language, st = style) => {
    sound.playDiyaSound();
    const wish =
      SAMPLE_WISHES[lang]?.[st] ||
      SAMPLE_WISHES["English"]["Traditional"];
    setMessage(wish);
  };

  // Generate shareable URL on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataPayload = {
        s: sender,
        r: recipient,
        rel: relationship,
        l: language,
        t: template,
        m: message,
      };
      const encoded = encodeURIComponent(
        btoa(unescape(encodeURIComponent(JSON.stringify(dataPayload))))
      );
      setShareUrl(`${window.location.origin}/greeting/view?card=${encoded}`);
    }
  }, [sender, recipient, relationship, language, template, message]);

  // Download Card as PNG using html-to-image
  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsDownloading(true);
      sound.playCelebrationSound();

      // Small delay to ensure crisp render
      await new Promise((resolve) => setTimeout(resolve, 150));

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2, // High resolution
        quality: 0.98,
      });

      const link = document.createElement("a");
      link.download = `Diwali_Greeting_${recipient || "Card"}_DiyaVerse.png`;
      link.href = dataUrl;
      link.click();

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#D4A64A", "#F5D79D", "#E68A32"],
      });
    } catch (err) {
      console.error("Failed to export card:", err);
      alert("Failed to export card. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Copy card message text
  const handleCopyMessage = () => {
    sound.playDiyaSound();
    navigator.clipboard.writeText(
      `🪔 Happy Diwali!\n\nDear ${recipient},\n\n"${message}"\n\nWith love and blessings,\n${sender}\n\nCreated on DiyaVerse 🪔`
    );
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  // Copy shareable link
  const handleCopyLink = () => {
    sound.playDiyaSound();
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // WhatsApp Share
  const handleWhatsAppShare = () => {
    sound.playDiyaSound();
    const text = encodeURIComponent(
      `🪔 Happy Diwali! I created a personalized Diwali card for you on DiyaVerse:\n\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  // Native Web Share API
  const handleNativeShare = async () => {
    sound.playDiyaSound();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Diwali Greeting for ${recipient} from ${sender}`,
          text: `"${message}" — Celebrate Diwali on DiyaVerse!`,
          url: shareUrl,
        });
      } catch {}
    } else {
      handleCopyLink();
    }
  };

  // Reset form
  const handleReset = () => {
    sound.playDiyaSound();
    setSender("");
    setRecipient("");
    setRelationship("Friend");
    setLanguage("English");
    setStyle("Traditional");
    setTemplate("royal-gold");
    setMessage(SAMPLE_WISHES["English"]["Traditional"]);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/30 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>Card Studio</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-5xl font-bold gold-gradient-text mb-3">
          Personalized Diwali Greeting Creator
        </h1>

        <p className="text-sm sm:text-base text-[#F5E6C8]/80 font-light">
          Design your custom digital card with authentic Indian festive aesthetics, download high-res PNGs, and share with loved ones worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* --- LEFT COLUMN: Customization Controls (Form) --- */}
        <div className="lg:col-span-7 glass-festive rounded-3xl p-6 sm:p-8 border border-[#D4A64A]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#D4A64A]/20 pb-4">
            <h2 className="font-cinzel text-lg font-bold text-[#F5D79D] flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#D4A64A]" />
              Card Personalization
            </h2>
            <button
              onClick={handleReset}
              className="text-xs text-[#F5D79D]/70 hover:text-[#F5D79D] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Form
            </button>
          </div>

          {/* Sender & Recipient inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                Recipient&apos;s Name
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                Sender&apos;s Name
              </label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="e.g. Aarav"
                className="w-full px-4 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
              />
            </div>
          </div>

          {/* Relationship, Language & Tone Style */}
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
                onChange={(e) => {
                  const newLang = e.target.value;
                  setLanguage(newLang);
                  applyPresetWish(newLang, style);
                }}
                className="w-full px-3 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] focus:outline-none focus:border-[#D4A64A] text-sm cursor-pointer"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-[#27100D]">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                Greeting Tone
              </label>
              <select
                value={style}
                onChange={(e) => {
                  const newStyle = e.target.value;
                  setStyle(newStyle);
                  applyPresetWish(language, newStyle);
                }}
                className="w-full px-3 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] focus:outline-none focus:border-[#D4A64A] text-sm cursor-pointer"
              >
                {STYLES.map((st) => (
                  <option key={st} value={st} className="bg-[#27100D]">
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Theme Selector (6 Templates) */}
          <div>
            <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-2">
              Select Festive Card Theme (6 Designs)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  type="button"
                  onClick={() => {
                    sound.playDiyaSound();
                    setTemplate(tmpl.id);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                    template === tmpl.id
                      ? "border-[#D4A64A] bg-[#54151F] shadow-md shadow-[#D4A64A]/20 scale-[1.02]"
                      : "border-white/10 bg-[#27100D]/60 hover:border-[#D4A64A]/40"
                  }`}
                >
                  <p className="font-semibold text-xs text-[#F5D79D]">{tmpl.name}</p>
                  <p className="text-[10px] text-[#F5E6C8]/60 mt-0.5 line-clamp-1">
                    {tmpl.tagline}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider">
                Personalized Message
              </label>
              <button
                type="button"
                onClick={() => applyPresetWish(language, style)}
                className="text-xs text-[#D4A64A] hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                Regenerate Preset Wish
              </button>
            </div>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your heartfelt festive message..."
              className="w-full px-4 py-3 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm leading-relaxed"
            />
          </div>
        </div>

        {/* --- RIGHT COLUMN: Live Card Preview & Actions --- */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-6">
          {/* Live Card Container */}
          <div className="w-full flex justify-center">
            <GreetingCard
              ref={cardRef}
              sender={sender}
              recipient={recipient}
              relationship={relationship}
              language={language}
              template={template}
              message={message}
            />
          </div>

          {/* Card Action Buttons */}
          <div className="w-full max-w-[500px] glass-festive rounded-2xl p-5 border border-[#D4A64A]/30 space-y-3">
            <h3 className="font-cinzel text-xs font-semibold text-[#F5D79D] uppercase tracking-wider text-center">
              Card Actions & Sharing
            </h3>

            {/* Primary Action: Download PNG */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full py-3 rounded-xl font-semibold text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg hover:shadow-[#D4A64A]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#8F2028]" />
              <span>{isDownloading ? "Generating PNG..." : "Download Card as PNG"}</span>
            </button>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={handleCopyMessage}
                className="py-2.5 px-3 rounded-xl text-xs font-medium bg-[#351014] text-[#F5E6C8] border border-[#D4A64A]/30 hover:border-[#D4A64A] flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedMessage ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#F5D79D]" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="py-2.5 px-3 rounded-xl text-xs font-medium bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/30 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Shareable Link row */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 px-3 py-2 rounded-lg bg-[#27100D] border border-white/10 text-xs text-[#F5E6C8]/70 truncate focus:outline-none"
              />
              <button
                onClick={handleNativeShare}
                className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#54151F] text-[#F5D79D] border border-[#D4A64A]/40 hover:bg-[#8F2028] flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
