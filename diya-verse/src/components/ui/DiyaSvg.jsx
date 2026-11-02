"use client";

export default function DiyaSvg({
  lit = true,
  size = 120,
  glow = true,
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex flex-col items-center select-none ${
        onClick ? "cursor-pointer transition-transform hover:scale-105 active:scale-95" : ""
      } ${className}`}
      style={{ width: size, height: size * 1.05 }}
    >
      {/* Radiant Background Glow when lit */}
      {lit && glow && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-3/4 h-3/4 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 215, 157, 0.7) 0%, rgba(230, 138, 50, 0.4) 40%, rgba(84, 21, 31, 0) 75%)",
            filter: "blur(8px)",
          }}
        />
      )}

      <svg
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          {/* Flame Gradients */}
          <radialGradient
            id="flameCore"
            cx="50%"
            cy="70%"
            r="60%"
            fx="50%"
            fy="70%"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FFF2A3" />
            <stop offset="60%" stopColor="#F5A623" />
            <stop offset="95%" stopColor="#D0021B" />
          </radialGradient>

          <linearGradient id="flameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF275" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E68A32" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8F2028" stopOpacity="0.2" />
          </linearGradient>

          {/* Diya Clay & Gold Gradient */}
          <linearGradient id="clayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8F2028" />
            <stop offset="45%" stopColor="#54151F" />
            <stop offset="100%" stopColor="#27100D" />
          </linearGradient>

          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A64A" />
            <stop offset="50%" stopColor="#F5D79D" />
            <stop offset="100%" stopColor="#D4A64A" />
          </linearGradient>

          <linearGradient id="oilPool" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E68A32" />
            <stop offset="100%" stopColor="#8F2028" />
          </linearGradient>

          {/* Filter for glowing flame */}
          <filter id="flameGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- FLAME (Rendered only when lit) --- */}
        {lit && (
          <g className="animate-flame" style={{ transformOrigin: "50px 48px" }}>
            {/* Outer Aura */}
            <path
              d="M50 10 C43 25 38 35 38 48 C38 56 43 62 50 62 C57 62 62 56 62 48 C62 35 57 25 50 10 Z"
              fill="url(#flameOuter)"
              filter="url(#flameGlow)"
            />

            {/* Core Vibrant Flame */}
            <path
              d="M50 18 C45 28 42 36 42 47 C42 53 45 58 50 58 C55 58 58 53 58 47 C58 36 55 28 50 18 Z"
              fill="url(#flameCore)"
            />

            {/* Inner White Hot Seed */}
            <ellipse cx="50" cy="49" rx="3.5" ry="5.5" fill="#FFFFFF" opacity="0.9" />

            {/* Wick Tip Spark */}
            <circle cx="50" cy="51" r="1.5" fill="#FFEAA7" />
          </g>
        )}

        {/* --- WICK --- */}
        <path
          d="M50 49 Q49 53 48 57"
          stroke="#27100D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* --- DIYA BODY --- */}
        {/* Diya Base Shadow */}
        <ellipse cx="50" cy="98" rx="32" ry="6" fill="#000000" opacity="0.35" />

        {/* Clay Bowl Body */}
        <path
          d="M14 62 C18 84 32 95 50 95 C68 95 82 84 86 62 C78 64 62 65 50 65 C38 65 22 64 14 62 Z"
          fill="url(#clayGradient)"
          stroke="#D4A64A"
          strokeWidth="1.2"
        />

        {/* Traditional Ornamental Engravings on Clay */}
        <path
          d="M26 73 Q38 85 50 85 Q62 85 74 73"
          stroke="#D4A64A"
          strokeWidth="1"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.8"
        />
        <circle cx="50" cy="85" r="2" fill="#F5D79D" />
        <circle cx="40" cy="81" r="1.5" fill="#F5D79D" />
        <circle cx="60" cy="81" r="1.5" fill="#F5D79D" />
        <circle cx="32" cy="74" r="1.2" fill="#F5D79D" />
        <circle cx="68" cy="74" r="1.2" fill="#F5D79D" />

        {/* Oil Basin Top Ellipse */}
        <ellipse
          cx="50"
          cy="62"
          rx="36"
          ry="9"
          fill="url(#clayGradient)"
          stroke="url(#goldRim)"
          strokeWidth="2"
        />

        {/* Golden Ghee / Sacred Oil Pool */}
        <ellipse
          cx="50"
          cy="63"
          rx="30"
          ry="6.5"
          fill="url(#oilPool)"
          opacity="0.9"
        />

        {/* Oil Reflection Highlight */}
        {lit && (
          <ellipse
            cx="48"
            cy="62"
            rx="16"
            ry="2.8"
            fill="#FFF2A3"
            opacity="0.65"
          />
        )}

        {/* Diya Spout / Lip */}
        <path
          d="M47 55 Q50 51 53 55 Q51 58 47 55 Z"
          fill="#D4A64A"
          opacity="0.8"
        />

        {/* Golden Base Pedestal */}
        <path
          d="M38 95 Q50 98 62 95 L65 99 Q50 102 35 99 Z"
          fill="url(#goldRim)"
        />
      </svg>

      {/* Lit status indicator message for screen readers */}
      <span className="sr-only">
        {lit ? "Diya is glowing" : "Click to light the Diya"}
      </span>
    </div>
  );
}
