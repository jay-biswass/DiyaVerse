"use client";

export default function VintageStampArtwork({
  className = "",
}) {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 130 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-28 drop-shadow-md overflow-visible transform rotate-2 hover:rotate-0 transition-transform"
      >
        <defs>
          <filter id="vintagePaper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" />
            <feComposite in="SourceGraphic" in2="noise" operator="over" />
          </filter>
        </defs>

        {/* --- Scalloped Postage Stamp Border (Simulating perforation holes) --- */}
        <rect x="5" y="5" width="120" height="140" fill="#EAD9BA" stroke="#8D6E63" strokeWidth="1" />
        <rect x="11" y="11" width="108" height="128" fill="#F4E8D1" stroke="#5D4037" strokeWidth="1.5" />
        <rect x="15" y="15" width="100" height="120" stroke="#8D6E63" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />

        {/* Perforation simulated edge dots */}
        {Array.from({ length: 11 }).map((_, i) => (
          <circle key={`perf-t-${i}`} cx={15 + i * 10} cy="5" r="2" fill="#3D261A" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <circle key={`perf-b-${i}`} cx={15 + i * 10} cy="145" r="2" fill="#3D261A" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <circle key={`perf-l-${i}`} cx="5" cy={15 + i * 10} r="2" fill="#3D261A" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <circle key={`perf-r-${i}`} cx="125" cy={15 + i * 10} r="2" fill="#3D261A" />
        ))}

        {/* Stamp Content Header */}
        <text
          x="65"
          y="28"
          textAnchor="middle"
          fontSize="9"
          fontFamily="serif"
          fontWeight="bold"
          fill="#5D4037"
          letterSpacing="1.5"
        >
          INDIA POST
        </text>
        <line x1="25" y1="32" x2="105" y2="32" stroke="#8D6E63" strokeWidth="0.8" />

        {/* Engraved Diya Artwork inside Stamp */}
        <ellipse cx="65" cy="55" rx="14" ry="12" fill="#FFA726" fillOpacity="0.3" />
        <path d="M65 40 Q71 55 65 65 Q59 55 65 40 Z" fill="#D84315" />
        <ellipse cx="65" cy="58" rx="3" ry="5" fill="#FFE082" />
        <path d="M45 74 Q65 92 85 74 Q65 80 45 74 Z" fill="#6D4C41" stroke="#3E2723" strokeWidth="1" />
        <path d="M57 88 L73 88 L70 94 L60 94 Z" fill="#5D4037" />

        {/* Stamp Denomination & Festive Greeting */}
        <text
          x="65"
          y="108"
          textAnchor="middle"
          fontSize="8"
          fontFamily="serif"
          fontWeight="bold"
          fill="#4E342E"
          letterSpacing="1"
        >
          शुभ दीपावली
        </text>
        <text
          x="65"
          y="120"
          textAnchor="middle"
          fontSize="7"
          fontFamily="sans-serif"
          fill="#6D4C41"
          letterSpacing="0.8"
        >
          DIWALI 2026
        </text>
        <text
          x="65"
          y="131"
          textAnchor="middle"
          fontSize="8"
          fontFamily="serif"
          fontWeight="bold"
          fill="#871C1D"
        >
          ₹ 5.00
        </text>

        {/* --- Circular Postmark / Cancellation Stamp Overlap --- */}
        <g transform="translate(15, 30) rotate(-22 50 50)" opacity="0.65">
          <circle cx="50" cy="50" r="32" stroke="#5D4037" strokeWidth="1.8" fill="none" />
          <circle cx="50" cy="50" r="28" stroke="#5D4037" strokeWidth="0.8" strokeDasharray="3 2" fill="none" />
          <text x="50" y="38" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fontWeight="bold" fill="#5D4037">
            DELHI G.P.O.
          </text>
          <text x="50" y="52" textAnchor="middle" fontSize="7" fontFamily="sans-serif" fontWeight="bold" fill="#871C1D">
            02 NOV 2026
          </text>
          <text x="50" y="65" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="#5D4037">
            DIWALI DAK
          </text>
          {/* Cancellation Wavy Lines */}
          <path d="M78 40 Q88 35 98 40 Q108 45 118 40" stroke="#5D4037" strokeWidth="1.2" />
          <path d="M78 48 Q88 43 98 48 Q108 53 118 48" stroke="#5D4037" strokeWidth="1.2" />
          <path d="M78 56 Q88 51 98 56 Q108 61 118 56" stroke="#5D4037" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

