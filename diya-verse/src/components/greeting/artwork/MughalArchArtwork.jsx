"use client";

export default function MughalArchArtwork({
  color = "#D4A64A",
  className = "",
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 500 625"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mughalGoldLine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="35%" stopColor={color} />
            <stop offset="80%" stopColor="#A67C1E" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>

          {/* Jali pattern in top outer spandrels */}
          <pattern id="jaliPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M8 0 L16 8 L8 16 L0 8 Z" stroke={color} strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
            <circle cx="8" cy="8" r="0.8" fill={color} fillOpacity="0.15" />
          </pattern>
        </defs>

        {/* Outer framing double border */}
        <rect x="10" y="10" width="480" height="605" rx="18" stroke="url(#mughalGoldLine)" strokeWidth="2" />
        <rect x="15" y="15" width="470" height="595" rx="14" stroke={color} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />

        {/* Top Spandrels Jali Fill (strictly confined to top outer corners outside the arch) */}
        <path
          d="M15 15 L485 15 L485 95 C435 95 410 75 365 48 C325 30 290 14 250 8 C210 14 175 30 135 48 C90 75 65 95 15 95 Z"
          fill="url(#jaliPattern)"
        />

        {/* Grand High-Clearance Scalloped Mughal Arch */}
        {/* Apex at y=8, shoulders wide at x=30 & x=470, giving total clearance for text inside */}
        <path
          d="M 28 605
             L 28 140
             C 28 110 55 102 75 85
             C 95 68 120 58 145 42
             C 178 26 214 18 250 8
             C 286 18 322 26 355 42
             C 380 58 405 68 425 85
             C 445 102 472 110 472 140
             L 472 605"
          stroke="url(#mughalGoldLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Parallel Filigree Arch */}
        <path
          d="M 34 605
             L 34 144
             C 34 116 60 108 78 92
             C 98 75 122 64 146 48
             C 178 32 214 24 250 14
             C 286 24 322 32 354 48
             C 378 64 402 75 422 92
             C 440 108 466 116 466 144
             L 466 605"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 3"
          strokeOpacity="0.7"
        />

        {/* Arch Pinnacle Finial at very top edge */}
        <circle cx="250" cy="8" r="3.5" fill="#FFF2A3" stroke={color} strokeWidth="1" />
        <circle cx="250" cy="3" r="1.5" fill="#FFF2A3" />

        {/* Subtle Corner Miniature Lanterns at far outer corners (safely outside arch & text) */}
        <line x1="36" y1="15" x2="36" y2="45" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />
        <circle cx="36" cy="48" r="2.5" fill="#FFE082" />
        
        <line x1="464" y1="15" x2="464" y2="45" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />
        <circle cx="464" cy="48" r="2.5" fill="#FFE082" />

        {/* Decorative Column Capitals at arch base */}
        <rect x="22" y="136" width="12" height="6" fill={color} rx="1" />
        <rect x="466" y="136" width="12" height="6" fill={color} rx="1" />
      </svg>
    </div>
  );
}
