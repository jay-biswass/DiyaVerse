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
  CARD_FONTS
} from "@/data/greetings";
import { getRandomPresetWish, getDefaultPresetWish } from "@/data/presetWishes";
import { sound } from "@/lib/sound";
import { 
  Download, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  RotateCcw, 
  Smartphone,
  ExternalLink
} from "lucide-react";

export default function GreetingPage() {
  const cardRef = useRef(null);

  // Form states
  const [sender, setSender] = useState("Aarav");
  const [recipient, setRecipient] = useState("Priya");
  const [relationship, setRelationship] = useState("Friend");
  const [showRelationship, setShowRelationship] = useState(true);
  const [language, setLanguage] = useState("English");
  const [style, setStyle] = useState("Traditional");
  const [template, setTemplate] = useState("royal-gold");
  const [colorVariant, setColorVariant] = useState("");
  const [customHeader, setCustomHeader] = useState("");
  const [cardFont, setCardFont] = useState("royal-serif");
  const [message, setMessage] = useState(() =>
    getDefaultPresetWish({
      tone: "Traditional",
      language: "English",
      recipient: "Priya",
      sender: "Aarav",
    })
  );

  // Status states
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const currentTmpl = TEMPLATES.find((t) => t.id === template) || TEMPLATES[0];

  // Update wish with rich preset wish collection
  const applyPresetWish = (lang = language, st = style, rec = recipient, snd = sender) => {
    sound.playDiyaSound();
    const wish = getRandomPresetWish({
      tone: st,
      language: lang,
      recipient: rec,
      sender: snd,
      currentWish: message,
    });
    setMessage(wish);
  };

  // Handle template selection
  const handleSelectTemplate = (id) => {
    sound.playDiyaSound();
    setTemplate(id);
    setColorVariant(""); // Reset color variant to template default
  };

  // Generate shareable URL on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataPayload = {
        s: sender,
        r: recipient,
        rel: relationship,
        sr: showRelationship,
        l: language,
        t: template,
        cv: colorVariant,
        f: cardFont,
        ch: customHeader,
        m: message,
      };
      const encoded = encodeURIComponent(
        btoa(unescape(encodeURIComponent(JSON.stringify(dataPayload))))
      );
      setShareUrl(`${window.location.origin}/greeting/view?card=${encoded}`);
    }
  }, [sender, recipient, relationship, showRelationship, language, template, colorVariant, cardFont, customHeader, message]);

  // Download Card as High-Res PNG using html-to-image
  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsDownloading(true);
      sound.playCelebrationSound();

      // Ensure all web fonts and assets are ready
      if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      await new Promise((resolve) => setTimeout(resolve, 200));

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3, // Ultra-crisp 3x print resolution
        quality: 1,
      });

      const link = document.createElement("a");
      const safeName = recipient ? recipient.replace(/[^a-zA-Z0-9]/g, "_") : "Loved_One";
      link.download = `Diwali_Greeting_${safeName}_DiyaVerse.png`;
      link.href = dataUrl;
      link.click();

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#D4A64A", "#F5D79D", "#E68A32", "#8F2028"],
      });
    } catch (err) {
      console.error("Failed to export card:", err);
      alert("Failed to export card image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Copy card message text
  const handleCopyMessage = () => {
    sound.playDiyaSound();
    navigator.clipboard.writeText(
      `🪔 Happy Diwali!\n\nDear ${recipient},\n\n"${message}"\n\nWith warm blessings,\n${sender}\n\nCrafted on DiyaVerse 🪔`
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
      `🪔 Happy Diwali! I created a personalized luxury Diwali card for you on DiyaVerse:\n\n${shareUrl}`
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

  // Reset form to defaults
  const handleReset = () => {
    sound.playDiyaSound();
    setSender("Aarav");
    setRecipient("Priya");
    setRelationship("Friend");
    setShowRelationship(true);
    setLanguage("English");
    setStyle("Traditional");
    setTemplate("royal-gold");
    setColorVariant("");
    setCustomHeader("");
    setCardFont("royal-serif");
    setMessage(
      getDefaultPresetWish({
        tone: "Traditional",
        language: "English",
        recipient: "Priya",
        sender: "Aarav",
      })
    );
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Studio Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/40 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>Luxury Greeting Studio</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-5xl font-bold gold-gradient-text mb-2.5">
          Diwali Greeting Card Studio
        </h1>

        <p className="text-sm sm:text-base text-[#F5E6C8]/80 font-light">
          Craft bespoke, culturally authentic digital cards with royal Indian aesthetics, miniature motifs, high-resolution PNG export, and instant sharing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* --- LEFT COLUMN: Design Studio Controls --- */}
        <div className="lg:col-span-7 glass-festive rounded-3xl p-5 sm:p-7 border border-[#D4A64A]/30 shadow-2xl space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-[#D4A64A]/20 pb-3">
            <h2 className="font-playfair text-lg font-bold tracking-wide text-[#F5D79D] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4A64A]" />
              <span>CARD PERSONALIZATION</span>
            </h2>

            <button
              onClick={handleReset}
              title="Reset all settings to defaults"
              className="text-xs text-[#F5D79D]/70 hover:text-[#F5D79D] flex items-center gap-1.5 transition-colors p-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Form</span>
            </button>
          </div>

          {/* Recipient & Sender Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                Recipient&apos;s Name
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="e.g. Priya"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
              />
            </div>
          </div>

          {/* Relationship, Language & Greeting Tone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                  applyPresetWish(newLang, style, recipient, sender);
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
                  applyPresetWish(language, newStyle, recipient, sender);
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

          {/* SELECT FESTIVE CARD THEME (12 DESIGNS) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider">
                Select Festive Card Theme ({TEMPLATES.length} Designs)
              </label>
              <span className="text-[11px] text-[#D4A64A] font-medium">
                {currentTmpl.name}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {TEMPLATES.map((tmpl) => {
                const isSelected = template === tmpl.id;
                return (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => handleSelectTemplate(tmpl.id)}
                    className={`text-left p-3 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "border-[#D4A64A] bg-[#54151F]/90 shadow-md shadow-[#D4A64A]/20 ring-1 ring-[#D4A64A]"
                        : "border-white/10 bg-[#27100D]/60 hover:border-white/20 hover:bg-[#27100D]/90"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-xs text-[#F5D79D] truncate">
                        {tmpl.name}
                      </p>
                      <p className="text-[10px] text-[#F5E6C8]/60 mt-0.5 line-clamp-1">
                        {tmpl.tagline || tmpl.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Background Palette Color Variants (if available for chosen template) */}
            {currentTmpl.colorVariants && currentTmpl.colorVariants.length > 0 && (
              <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-[#F5D79D] font-medium mr-1">
                  Palette:
                </span>
                <button
                  type="button"
                  onClick={() => setColorVariant("")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] border transition-all ${
                    colorVariant === ""
                      ? "border-[#D4A64A] bg-[#54151F] text-[#F5D79D] font-semibold"
                      : "border-white/10 bg-[#27100D]/70 text-[#F5E6C8]/70 hover:border-white/30"
                  }`}
                >
                  Default
                </button>
                {currentTmpl.colorVariants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      sound.playDiyaSound();
                      setColorVariant(v.id);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] border transition-all flex items-center gap-1.5 ${
                      colorVariant === v.id
                        ? "border-[#D4A64A] bg-[#54151F] text-[#F5D79D] font-semibold"
                        : "border-white/10 bg-[#27100D]/70 text-[#F5E6C8]/70 hover:border-white/30"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${v.bg}`} />
                    <span>{v.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* FESTIVE TYPOGRAPHY & FONTS (9 STYLES) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider">
                Festive Typography & Fonts
              </label>
              <span className="text-[11px] text-[#D4A64A] font-medium">
                {CARD_FONTS.find((f) => f.id === cardFont)?.name || "Royal Serif"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {CARD_FONTS.map((font) => {
                const isSelected = cardFont === font.id;
                return (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => {
                      sound.playDiyaSound();
                      setCardFont(font.id);
                    }}
                    className={`p-2.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "border-[#D4A64A] bg-[#54151F]/90 shadow-md shadow-[#D4A64A]/20 ring-1 ring-[#D4A64A]"
                        : "border-white/10 bg-[#27100D]/60 hover:border-white/20 hover:bg-[#27100D]/90"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <p className="font-medium text-xs text-[#F5D79D] truncate">
                        {font.name}
                      </p>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-[#F5D79D]/85 font-serif shrink-0">
                        {font.sample}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#F5E6C8]/60 line-clamp-1 leading-tight">
                      {font.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PERSONALIZED MESSAGE */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider">
                Personalized Message
              </label>
              <button
                type="button"
                onClick={() => applyPresetWish(language, style, recipient, sender)}
                className="text-xs text-[#D4A64A] hover:text-[#F5D79D] hover:underline flex items-center gap-1 font-semibold transition-colors active:scale-95"
                title="Generate another heartfelt wish in this tone & language"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4A64A] animate-pulse" />
                <span>Regenerate Preset Wish</span>
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

          {/* Optional Title & Relationship Badge Controls */}
          <div className="pt-2 border-t border-white/5 space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-medium text-[#F5D79D]/80 uppercase tracking-wider">
                Custom Card Title (Optional)
              </label>
              {customHeader && (
                <button
                  type="button"
                  onClick={() => setCustomHeader("")}
                  className="text-[10px] text-[#D4A64A] hover:underline"
                >
                  Reset Default
                </button>
              )}
            </div>
            <input
              type="text"
              value={customHeader}
              onChange={(e) => setCustomHeader(e.target.value)}
              placeholder={`Default: ${currentTmpl.headerText?.[language] || "शुभ दीपावली"}`}
              className="w-full px-3.5 py-2 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/25 text-[#F5E6C8] placeholder-white/25 focus:outline-none focus:border-[#D4A64A] text-xs"
            />

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="showRel"
                checked={showRelationship}
                onChange={(e) => setShowRelationship(e.target.checked)}
                className="rounded border-[#D4A64A]/40 text-[#D4A64A] focus:ring-0 bg-[#27100D] cursor-pointer"
              />
              <label htmlFor="showRel" className="text-xs text-[#F5E6C8]/80 cursor-pointer select-none">
                Display relationship badge ({relationship}) under recipient name
              </label>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Live Card Preview & Actions --- */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-6">
          {/* Live Card Container with subtle frame */}
          <div className="w-full flex justify-center">
            <GreetingCard
              ref={cardRef}
              sender={sender}
              recipient={recipient}
              relationship={relationship}
              showRelationship={showRelationship}
              language={language}
              template={template}
              colorVariant={colorVariant}
              cardFont={cardFont}
              customHeader={customHeader}
              message={message}
            />
          </div>

          {/* Card Action Buttons */}
          <div className="w-full max-w-[500px] glass-festive rounded-2xl p-5 border border-[#D4A64A]/30 space-y-3 shadow-xl">
            <h3 className="font-cinzel text-xs font-semibold text-[#F5D79D] uppercase tracking-wider text-center">
              Export & Share Your Card
            </h3>

            {/* Primary Action: Download Ultra-Res PNG */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full py-3 rounded-xl font-semibold text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] via-[#D4A64A] to-[#E68A32] shadow-lg hover:shadow-[#D4A64A]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#8F2028]" />
              <span>{isDownloading ? "Rendering High-Res PNG..." : "Download High-Res PNG (3x Print Scale)"}</span>
            </button>

            {/* Secondary Actions: WhatsApp & Copy */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={handleWhatsAppShare}
                className="py-2.5 px-3 rounded-xl font-medium text-xs text-[#F5E6C8] bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-all flex items-center justify-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Share WhatsApp</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="py-2.5 px-3 rounded-xl font-medium text-xs text-[#F5E6C8] bg-white/5 border border-white/10 hover:border-[#D4A64A]/40 transition-all flex items-center justify-center gap-1.5"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#D4A64A]" />
                    <span>Copy Card Link</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={handleCopyMessage}
              className="w-full py-2 rounded-xl text-xs text-[#F5E6C8]/70 hover:text-[#F5D79D] bg-black/20 hover:bg-black/30 border border-white/5 transition-all flex items-center justify-center gap-1.5"
            >
              {copiedMessage ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span>Greeting Text Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#D4A64A]" />
                  <span>Copy Message Text Only</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
