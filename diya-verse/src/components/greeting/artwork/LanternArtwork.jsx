"use client";

export default function LanternArtwork({
  size = 60,
  color = "#D4A64A",
  className = "",
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 1.6 }}
    >
      <svg
        viewBox="0 0 100 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="kandilBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="40%" stopColor="#FFA000" />
            <stop offset="80%" stopColor="#D84315" />
            <stop offset="100%" stopColor="#871C1D" />
          </linearGradient>

          <radialGradient id="kandilGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFF176" />
            <stop offset="80%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#E65100" />
          </radialGradient>
        </defs>

        {/* Top Hanging Cord & Ring */}
        <line x1="50" y1="0" x2="50" y2="24" stroke={color} strokeWidth="1.2" />
        <circle cx="50" cy="24" r="3" stroke={color} strokeWidth="1.2" fill="none" />

        {/* Top Pyramid Canopy */}
        <path d="M50 28 L72 46 L28 46 Z" fill="#D4A64A" stroke="#FFF2A3" strokeWidth="0.8" />

        {/* Central Geometric Diamond Core (Illuminated Kandil) */}
        <polygon points="50,42 82,70 50,98 18,70" fill="url(#kandilBody)" stroke="#FFF2A3" strokeWidth="1.2" />

        {/* Glowing Center Core */}
        <polygon points="50,50 72,70 50,90 28,70" fill="url(#kandilGlow)" />
        <circle cx="50" cy="70" r="5" fill="#FFFFFF" fillOpacity="0.85" className="animate-pulse" />

        {/* 4 Corner Star Points */}
        <polygon points="50,42 55,32 50,34 45,32" fill="#D4A64A" />
        <polygon points="82,70 94,74 90,70 94,66" fill="#D4A64A" />
        <polygon points="18,70 6,74 10,70 6,66" fill="#D4A64A" />
        <polygon points="50,98 55,108 50,106 45,108" fill="#D4A64A" />

        {/* Bottom Cap */}
        <path d="M38 96 L62 96 L54 105 L46 105 Z" fill="#D4A64A" stroke="#FFF2A3" strokeWidth="0.8" />

        {/* Silk Tassels / Golden Ribbons Streaming Downward */}
        <g stroke={color} strokeWidth="1.2" strokeLinecap="round">
          {/* Central longest tassel */}
          <path d="M50 105 Q48 130 50 155" strokeWidth="1.5" />
          <circle cx="50" cy="157" r="1.8" fill={color} />

          {/* Left tassels */}
          <path d="M44 105 Q38 128 40 148" />
          <circle cx="40" cy="150" r="1.3" fill={color} />
          <path d="M38 105 Q32 124 34 140" />
          <circle cx="34" cy="142" r="1.3" fill={color} />

          {/* Right tassels */}
          <path d="M56 105 Q62 128 60 148" />
          <circle cx="60" cy="150" r="1.3" fill={color} />
          <path d="M62 105 Q68 124 66 140" />
          <circle cx="66" cy="142" r="1.3" fill={color} />
        </g>
      </svg>
    </div>
  );
}
