"use client";

export default function MarigoldGarlandArtwork({
  showSideDrops = true,
  className = "",
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 500 625"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Orange Marigold Radial Gradient */}
          <radialGradient id="mgOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8E1" />
            <stop offset="30%" stopColor="#FFB300" />
            <stop offset="70%" stopColor="#FB8C00" />
            <stop offset="100%" stopColor="#E65100" />
          </radialGradient>

          {/* Yellow Marigold Radial Gradient */}
          <radialGradient id="mgYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFEE" />
            <stop offset="40%" stopColor="#FFEE58" />
            <stop offset="80%" stopColor="#FDD835" />
            <stop offset="100%" stopColor="#F57F17" />
          </radialGradient>

          {/* Mango Leaf Gradient */}
          <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#43A047" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>
        </defs>

        {/* --- TOP GARLAND SWAG (Hugs the very top edge safely above text) --- */}
        <path d="M0 6 Q250 14 500 6" stroke="#D4A64A" strokeWidth="1.5" />
        <path d="M0 7 Q250 15 500 7" stroke="#8F2028" strokeWidth="0.6" strokeDasharray="4 2" />

        {/* 17 Compact Marigold Blossoms on the Top Garland */}
        {Array.from({ length: 17 }).map((_, i) => {
          const t = i / 16;
          const x = t * 476 + 12;
          // Very gentle curve staying strictly within y=6..14
          const y = 6 + Math.sin(t * Math.PI) * 7;
          const isOrange = i % 2 === 0;

          return (
            <g key={`mg-flower-${i}`}>
              {/* Mango leaf pointing downward, strictly kept compact */}
              <path
                d={`M${x - 3} ${y} Q${x} ${y + 8} ${x + 3} ${y} Z`}
                fill="url(#mangoLeaf)"
                stroke="#2E7D32"
                strokeWidth="0.3"
              />
              {/* Ruffled Flower Petals */}
              <circle cx={x} cy={y} r="6.5" fill={isOrange ? "url(#mgOrange)" : "url(#mgYellow)"} />
              <circle cx={x} cy={y} r="4.5" fill={isOrange ? "#FFA726" : "#FFEE58"} stroke={isOrange ? "#E65100" : "#F57F17"} strokeWidth="0.5" strokeDasharray="2 1" />
              <circle cx={x} cy={y} r="2.2" fill={isOrange ? "#E65100" : "#F57F17"} />
            </g>
          );
        })}

        {/* --- LEFT & RIGHT GARLAND DROPS (Outermost perimeter) --- */}
        {showSideDrops && (
          <>
            {/* Left Vertical Garland Drop */}
            {Array.from({ length: 10 }).map((_, i) => {
              const y = 30 + i * 55;
              const x = 7;
              const isOrange = i % 2 === 1;

              return (
                <g key={`mg-left-${i}`}>
                  <line x1="7" y1={y - 25} x2="7" y2={y + 25} stroke="#D4A64A" strokeWidth="0.7" />
                  <path
                    d={`M7 ${y} Q${12} ${y + 5} 7 ${y + 10} Z`}
                    fill="url(#mangoLeaf)"
                  />
                  <circle cx={x} cy={y} r="6" fill={isOrange ? "url(#mgOrange)" : "url(#mgYellow)"} />
                  <circle cx={x} cy={y} r="2" fill={isOrange ? "#E65100" : "#F57F17"} />
                </g>
              );
            })}

            {/* Right Vertical Garland Drop */}
            {Array.from({ length: 10 }).map((_, i) => {
              const y = 30 + i * 55;
              const x = 493;
              const isOrange = i % 2 === 1;

              return (
                <g key={`mg-right-${i}`}>
                  <line x1="493" y1={y - 25} x2="493" y2={y + 25} stroke="#D4A64A" strokeWidth="0.7" />
                  <path
                    d={`M493 ${y} Q${488} ${y + 5} 493 ${y + 10} Z`}
                    fill="url(#mangoLeaf)"
                  />
                  <circle cx={x} cy={y} r="6" fill={isOrange ? "url(#mgOrange)" : "url(#mgYellow)"} />
                  <circle cx={x} cy={y} r="2" fill={isOrange ? "#E65100" : "#F57F17"} />
                </g>
              );
            })}
          </>
        )}
      </svg>
    </div>
  );
}
