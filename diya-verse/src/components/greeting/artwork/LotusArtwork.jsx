"use client";

export default function LotusArtwork({
  size = 120,
  variant = "gold", // "gold" | "sacred-pink" | "minimal"
  className = "",
}) {
  const isPink = variant === "sacred-pink";

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 0.75 }}
    >
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="lotusGoldPetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="45%" stopColor="#E5B25D" />
            <stop offset="100%" stopColor="#9C6B1C" />
          </linearGradient>

          <linearGradient id="lotusPinkPetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFCCD5" />
            <stop offset="50%" stopColor="#E91E63" />
            <stop offset="100%" stopColor="#880E4F" />
          </linearGradient>

          <linearGradient id="lotusCenterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="100%" stopColor="#F57F17" />
          </linearGradient>

          <filter id="lotusAura" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Lotus Glow */}
        <ellipse cx="80" cy="70" rx="50" ry="25" fill="#D4A64A" fillOpacity="0.25" filter="url(#lotusAura)" />

        {/* Base Water-Lily / Calyx Leaves */}
        <path d="M40 85 Q80 105 120 85 Q80 92 40 85 Z" fill="#2E7D32" fillOpacity="0.7" stroke="#D4A64A" strokeWidth="0.8" />
        <path d="M25 82 Q55 92 80 88 Q45 80 25 82 Z" fill="#1B5E20" fillOpacity="0.6" />
        <path d="M135 82 Q105 92 80 88 Q115 80 135 82 Z" fill="#1B5E20" fillOpacity="0.6" />

        {/* Outer Flanking Petals */}
        <path
          d="M15 72 Q45 50 70 80 Q35 90 15 72 Z"
          fill={isPink ? "url(#lotusPinkPetal)" : "url(#lotusGoldPetal)"}
          fillOpacity="0.85"
          stroke="#FFE082"
          strokeWidth="0.8"
        />
        <path
          d="M145 72 Q115 50 90 80 Q125 90 145 72 Z"
          fill={isPink ? "url(#lotusPinkPetal)" : "url(#lotusGoldPetal)"}
          fillOpacity="0.85"
          stroke="#FFE082"
          strokeWidth="0.8"
        />

        {/* Mid-Outer Petals */}
        <path
          d="M30 55 Q55 35 75 75 Q45 80 30 55 Z"
          fill={isPink ? "url(#lotusPinkPetal)" : "url(#lotusGoldPetal)"}
          fillOpacity="0.9"
          stroke="#FFE082"
          strokeWidth="0.9"
        />
        <path
          d="M130 55 Q105 35 85 75 Q115 80 130 55 Z"
          fill={isPink ? "url(#lotusPinkPetal)" : "url(#lotusGoldPetal)"}
          fillOpacity="0.9"
          stroke="#FFE082"
          strokeWidth="0.9"
        />

        {/* Middle Pair Petals */}
        <path
          d="M48 38 Q70 20 80 65 Q60 70 48 38 Z"
          fill={isPink ? "url(#lotusPinkPetal)" : "url(#lotusGoldPetal)"}
          stroke="#FFF2A3"
          strokeWidth="1"
        />
        <path
          d="M112 38 Q90 20 80 65 Q100 70 112 38 Z"
          fill={isPink ? "url(#lotusPinkPetal)" : "url(#lotusGoldPetal)"}
          stroke="#FFF2A3"
          strokeWidth="1"
        />

        {/* Central Crown Petal */}
        <path
          d="M80 12 Q94 40 80 72 Q66 40 80 12 Z"
          fill={isPink ? "url(#lotusPinkPetal)" : "url(#lotusGoldPetal)"}
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />

        {/* Central Lotus Bud Core / Golden Pollen */}
        <ellipse cx="80" cy="65" rx="12" ry="7" fill="url(#lotusCenterGrad)" />
        <circle cx="75" cy="64" r="1.5" fill="#FFFDE7" />
        <circle cx="80" cy="63" r="1.5" fill="#FFFDE7" />
        <circle cx="85" cy="64" r="1.5" fill="#FFFDE7" />

        {/* Decorative Base Pedestal Beads */}
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={`lotus-bead-${i}`} cx={48 + i * 8} cy="88" r="1.5" fill="#FFF2A3" />
        ))}
      </svg>
    </div>
  );
}

