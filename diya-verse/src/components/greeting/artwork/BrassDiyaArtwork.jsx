"use client";

export default function BrassDiyaArtwork({
  size = 110,
  glow = true,
  variant = "ornate-brass", // "ornate-brass" | "clay-terracotta" | "minimal"
  flanked = false,
  className = "",
}) {
  const isTerracotta = variant === "clay-terracotta";

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: flanked ? size * 1.8 : size, height: size * 1.05 }}
    >
      <svg
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-xl"
      >
        <defs>
          {/* Flame Gradients */}
          <radialGradient id="bdFlameCore" cx="50%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFF2A3" />
            <stop offset="70%" stopColor="#FF9800" />
            <stop offset="95%" stopColor="#D84315" />
          </radialGradient>

          <linearGradient id="bdFlameAura" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF59D" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFA726" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#BF360C" stopOpacity="0" />
          </linearGradient>

          {/* Brass Metallic Gradient */}
          <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E1" />
            <stop offset="20%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#D4A64A" />
            <stop offset="80%" stopColor="#996515" />
            <stop offset="100%" stopColor="#5D4037" />
          </linearGradient>

          {/* Terracotta Clay Gradient */}
          <linearGradient id="clayMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAB91" />
            <stop offset="35%" stopColor="#D84315" />
            <stop offset="70%" stopColor="#871C1D" />
            <stop offset="100%" stopColor="#4E1010" />
          </linearGradient>

          <filter id="flameBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Warm Diya Radiance */}
        {glow && (
          <ellipse
            cx="100"
            cy="50"
            rx="55"
            ry="45"
            fill="#FFA726"
            fillOpacity="0.45"
            filter="url(#flameBlur)"
          />
        )}

        {/* Flanking Secondary Diyas if requested */}
        {flanked && (
          <>
            {/* Left Flanking Diya */}
            <g transform="translate(-50, 25) scale(0.65)">
              <ellipse cx="100" cy="50" rx="30" ry="25" fill="#FFA726" fillOpacity="0.3" filter="url(#flameBlur)" />
              <path d="M100 20 Q112 50 100 70 Q88 50 100 20 Z" fill="url(#bdFlameCore)" />
              <path d="M60 85 Q100 120 140 85 Q100 95 60 85 Z" fill={isTerracotta ? "url(#clayMetallic)" : "url(#brassMetallic)"} />
              <path d="M85 110 L115 110 L120 120 L80 120 Z" fill={isTerracotta ? "url(#clayMetallic)" : "url(#brassMetallic)"} />
            </g>
            {/* Right Flanking Diya */}
            <g transform="translate(115, 25) scale(0.65)">
              <ellipse cx="100" cy="50" rx="30" ry="25" fill="#FFA726" fillOpacity="0.3" filter="url(#flameBlur)" />
              <path d="M100 20 Q112 50 100 70 Q88 50 100 20 Z" fill="url(#bdFlameCore)" />
              <path d="M60 85 Q100 120 140 85 Q100 95 60 85 Z" fill={isTerracotta ? "url(#clayMetallic)" : "url(#brassMetallic)"} />
              <path d="M85 110 L115 110 L120 120 L80 120 Z" fill={isTerracotta ? "url(#clayMetallic)" : "url(#brassMetallic)"} />
            </g>
          </>
        )}

        {/* --- MAIN CENTRAL FLAME --- */}
        {/* Outer Flame Aura */}
        <path
          d="M100 8 Q122 45 100 75 Q78 45 100 8 Z"
          fill="url(#bdFlameAura)"
          className="animate-pulse"
        />
        {/* Inner Intense Flame Teardrop */}
        <path
          d="M100 18 Q115 50 100 72 Q85 50 100 18 Z"
          fill="url(#bdFlameCore)"
        />
        {/* White-Hot Flame Core */}
        <ellipse cx="100" cy="56" rx="6" ry="12" fill="#FFFFFF" fillOpacity="0.9" />

        {/* Cotton Wick tip */}
        <path d="M99 74 Q100 68 102 62" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />

        {/* --- BRASS LAMP BODY --- */}
        {/* Rim Highlight */}
        <ellipse
          cx="100"
          cy="85"
          rx="52"
          ry="12"
          fill={isTerracotta ? "#BF360C" : "#E5B25D"}
          stroke={isTerracotta ? "#FFAB91" : "#FFF9C4"}
          strokeWidth="1.2"
        />

        {/* Inner Oil Basin Shadow & Glow */}
        <ellipse cx="100" cy="85" rx="44" ry="8" fill="#3E1700" />
        <ellipse cx="100" cy="84" rx="36" ry="6" fill="#F57F17" fillOpacity="0.5" />

        {/* Main Curved Diya Body */}
        <path
          d="M48 85 C48 118 70 128 100 128 C130 128 152 118 152 85 C140 92 120 95 100 95 C80 95 60 92 48 85 Z"
          fill={isTerracotta ? "url(#clayMetallic)" : "url(#brassMetallic)"}
          stroke={isTerracotta ? "#FFAB91" : "#FFE082"}
          strokeWidth="1.5"
        />

        {/* Engraved Traditional Indian Motifs on Lamp Body */}
        <path
          d="M65 96 Q100 115 135 96"
          stroke={isTerracotta ? "#FFE0B2" : "#FFF8E1"}
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />
        <circle cx="100" cy="112" r="3" fill={isTerracotta ? "#FFE0B2" : "#FFF9C4"} />
        <circle cx="85" cy="108" r="2" fill={isTerracotta ? "#FFE0B2" : "#FFF9C4"} />
        <circle cx="115" cy="108" r="2" fill={isTerracotta ? "#FFE0B2" : "#FFF9C4"} />

        {/* Pedestal Neck & Stem */}
        <path
          d="M86 128 L114 128 L110 138 L90 138 Z"
          fill={isTerracotta ? "url(#clayMetallic)" : "url(#brassMetallic)"}
        />

        {/* Flared Royal Base */}
        <path
          d="M74 148 C85 138 115 138 126 148 L130 152 L70 152 Z"
          fill={isTerracotta ? "url(#clayMetallic)" : "url(#brassMetallic)"}
          stroke={isTerracotta ? "#FFAB91" : "#FFE082"}
          strokeWidth="1"
        />

        {/* Base Beaded Trim */}
        {Array.from({ length: 9 }).map((_, i) => (
          <circle
            key={`diya-base-${i}`}
            cx={76 + i * 6}
            cy="150"
            r="1.5"
            fill={isTerracotta ? "#FFE0B2" : "#FFFDE7"}
          />
        ))}
      </svg>
    </div>
  );
}

