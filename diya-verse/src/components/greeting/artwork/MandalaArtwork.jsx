"use client";

export default function MandalaArtwork({
  size = 320,
  opacity = 0.25,
  color = "#D4A64A",
  className = "",
  style = {},
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <defs>
          <radialGradient id="mandalaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="40%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="250" cy="250" r="230" fill="url(#mandalaGlow)" />
        <circle cx="250" cy="250" r="240" stroke={color} strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="250" cy="250" r="225" stroke={color} strokeWidth="2" />
        <circle cx="250" cy="250" r="215" stroke={color} strokeWidth="1" strokeDasharray="6 3" />
        <circle cx="250" cy="250" r="170" stroke={color} strokeWidth="1.5" />
        <circle cx="250" cy="250" r="120" stroke={color} strokeWidth="2" />
        <circle cx="250" cy="250" r="70" stroke={color} strokeWidth="1.5" />
        <circle cx="250" cy="250" r="25" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />

        {/* 16 Radial Floral Petals Outer Ring */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = i * 22.5;
          return (
            <g key={`outer-petal-${i}`} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M250 25 Q235 90 250 170 Q265 90 250 25 Z"
                stroke={color}
                strokeWidth="1.5"
                fill={color}
                fillOpacity="0.08"
              />
              <circle cx="250" cy="40" r="4" fill={color} />
              <path d="M250 60 Q240 110 250 145 Q260 110 250 60 Z" stroke={color} strokeWidth="0.8" />
            </g>
          );
        })}

        {/* 16 Middle Pointed Diamond Petals */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = i * 22.5 + 11.25;
          return (
            <g key={`mid-petal-${i}`} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M250 80 Q240 135 250 175 Q260 135 250 80 Z"
                stroke={color}
                strokeWidth="1.2"
                fill={color}
                fillOpacity="0.12"
              />
              <circle cx="250" cy="95" r="2.5" fill={color} />
            </g>
          );
        })}

        {/* 12 Inner Sacred Lotus Petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          return (
            <g key={`inner-petal-${i}`} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M250 130 Q235 180 250 220 Q265 180 250 130 Z"
                stroke={color}
                strokeWidth="1.5"
                fill={color}
                fillOpacity="0.18"
              />
              <circle cx="250" cy="145" r="3" fill="#FFF2A3" />
            </g>
          );
        })}

        {/* Center Star Core */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45;
          return (
            <g key={`star-point-${i}`} transform={`rotate(${angle} 250 250)`}>
              <line x1="250" y1="225" x2="250" y2="250" stroke={color} strokeWidth="2" />
              <circle cx="250" cy="215" r="2" fill={color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

