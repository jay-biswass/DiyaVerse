"use client";

export function GoldenBorderCorner({ className = "", position = "top-left" }) {
  const rotationClass = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position] || "";

  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-10 pointer-events-none text-[#D4A64A] ${rotationClass} ${className}`}
    >
      <path
        d="M2 58 L2 18 C2 9.163 9.163 2 18 2 L58 2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 58 L8 22 C8 14.268 14.268 8 22 8 L58 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
      {/* Decorative Traditional Paisley / Leaf Curl */}
      <path
        d="M16 16 C22 10 32 12 30 20 C28 26 18 24 16 16 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <circle cx="12" cy="12" r="3" fill="#F5D79D" />
      <circle cx="2" cy="2" r="2" fill="#D4A64A" />
      <circle cx="45" cy="4" r="2" fill="#D4A64A" />
      <circle cx="4" cy="45" r="2" fill="#D4A64A" />
    </svg>
  );
}

export function MarigoldToran({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center pointer-events-none select-none py-1 ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 drop-shadow"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="marigoldGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF3E0" />
            <stop offset="40%" stopColor="#FFA726" />
            <stop offset="90%" stopColor="#E68A32" />
            <stop offset="100%" stopColor="#8F2028" />
          </radialGradient>
          <radialGradient id="mangoLeafGrad" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#388E3C" />
            <stop offset="100%" stopColor="#1B5E20" />
          </radialGradient>
        </defs>

        {/* Auspicious Red & Gold Thread */}
        <line x1="0" y1="8" x2="1200" y2="8" stroke="#D4A64A" strokeWidth="2.5" />
        <line x1="0" y1="10" x2="1200" y2="10" stroke="#8F2028" strokeWidth="1" strokeDasharray="6 4" />

        {/* 20 repeating Marigold blossoms & Mango leaves */}
        {Array.from({ length: 24 }).map((_, i) => {
          const x = i * 50 + 25;
          return (
            <g key={`toran-${i}`}>
              {/* Mango leaf pointing downward */}
              <path
                d={`M${x - 8} 8 Q${x} 32 ${x + 8} 8 Z`}
                fill="url(#mangoLeafGrad)"
                opacity="0.9"
              />
              {/* Marigold flower blossom */}
              <circle cx={x} cy="10" r="7.5" fill="url(#marigoldGrad)" />
              <circle cx={x} cy="10" r="3" fill="#FFF8E1" />
              {/* Tiny gold bell */}
              <circle cx={x} cy="26" r="2" fill="#D4A64A" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
