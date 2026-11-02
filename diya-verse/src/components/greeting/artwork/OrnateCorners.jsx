"use client";

export function LuxuryCorner({
  position = "top-left",
  variant = "royal", // "royal" | "floral" | "minimal" | "mughal"
  className = "",
  color = "#D4A64A",
}) {
  const rotationClass = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position] || "";

  if (variant === "minimal") {
    return (
      <svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 pointer-events-none ${rotationClass} ${className}`}
        style={{ color }}
      >
        <path d="M2 48 L2 6 C2 3.79 3.79 2 6 2 L48 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="6" cy="6" r="2.5" fill="currentColor" />
        <circle cx="2" cy="48" r="1.5" fill="currentColor" />
        <circle cx="48" cy="2" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "mughal") {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-12 h-12 pointer-events-none ${rotationClass} ${className}`}
        style={{ color }}
      >
        <path d="M4 76 L4 24 C4 12.954 12.954 4 24 4 L76 4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 76 L10 28 C10 18.059 18.059 10 28 10 L76 10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        {/* Mughal Arch Motif */}
        <path d="M16 16 C22 22 26 30 26 40 C26 30 30 26 40 26 C30 26 22 22 16 16 Z" fill="currentColor" fillOpacity="0.8" />
        <circle cx="16" cy="16" r="3" fill="#F5D79D" />
        <circle cx="5" cy="5" r="2" fill="currentColor" />
      </svg>
    );
  }

  // Default "royal" intricate corner
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 sm:w-14 sm:h-14 pointer-events-none ${rotationClass} ${className}`}
      style={{ color }}
    >
      <defs>
        <linearGradient id={`cornerGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="50%" stopColor="#D4A64A" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>
      {/* Outer framing lines */}
      <path d="M3 87 L3 24 C3 12.4 12.4 3 24 3 L87 3" stroke={`url(#cornerGrad-${position})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M9 87 L9 28 C9 17.5 17.5 9 28 9 L87 9" stroke={`url(#cornerGrad-${position})`} strokeWidth="1" strokeDasharray="3 3" />
      <path d="M14 87 L14 32 C14 22 22 14 32 14 L87 14" stroke={`url(#cornerGrad-${position})`} strokeWidth="1.2" opacity="0.6" />
      
      {/* Intricate Paisley / Floral Filigree */}
      <path
        d="M22 22 C34 14 50 18 46 32 C42 42 26 38 22 22 Z"
        fill={`url(#cornerGrad-${position})`}
        fillOpacity="0.85"
      />
      <path
        d="M26 36 C32 30 40 32 38 40 C35 46 27 43 26 36 Z"
        fill={`url(#cornerGrad-${position})`}
        fillOpacity="0.6"
      />
      <circle cx="20" cy="20" r="4.5" fill="#FFF2A3" />
      <circle cx="20" cy="20" r="2.5" fill="#54151F" />
      <circle cx="4" cy="4" r="2.5" fill="#D4A64A" />
      <circle cx="65" cy="6" r="2" fill="#D4A64A" />
      <circle cx="6" cy="65" r="2" fill="#D4A64A" />
    </svg>
  );
}

