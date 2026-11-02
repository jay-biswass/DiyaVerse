"use client";

export default function FireworksArtwork({
  color = "#F5D79D",
  className = "",
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 500 625"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="fwBurstGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#FFD54F" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#FF9800" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E65100" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="fwBurstGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9C4" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#D4A64A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2A080D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- Top Left Major Golden Burst (cx=110, cy=110) --- */}
        <circle cx="110" cy="110" r="85" fill="url(#fwBurstGlow1)" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const r1 = 18;
          const r2 = 65 + (i % 2 === 0 ? 15 : 0);
          const x1 = 110 + Math.cos(angle) * r1;
          const y1 = 110 + Math.sin(angle) * r1;
          const x2 = 110 + Math.cos(angle) * r2;
          const y2 = 110 + Math.sin(angle) * r2;
          return (
            <g key={`fw1-${i}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFE082" strokeWidth={i % 2 === 0 ? 1.5 : 0.8} strokeDasharray="3 3" />
              <circle cx={x2} cy={y2} r={i % 2 === 0 ? 2 : 1.2} fill="#FFF9C4" />
            </g>
          );
        })}

        {/* --- Top Right Secondary Burst (cx=390, cy=140) --- */}
        <circle cx="390" cy="140" r="75" fill="url(#fwBurstGlow2)" />
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i * 25.7 * Math.PI) / 180;
          const r1 = 15;
          const r2 = 55 + (i % 2 === 0 ? 12 : 0);
          const x1 = 390 + Math.cos(angle) * r1;
          const y1 = 140 + Math.sin(angle) * r1;
          const x2 = 390 + Math.cos(angle) * r2;
          const y2 = 140 + Math.sin(angle) * r2;
          return (
            <g key={`fw2-${i}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD54F" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx={x2} cy={y2} r="1.5" fill="#FFFFFF" />
            </g>
          );
        })}

        {/* --- Bottom Left Anar / Fountain Sparkles (cx=60, cy=540) --- */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = ((-30 - i * 12) * Math.PI) / 180;
          const dist = 40 + i * 8;
          const x2 = 60 + Math.cos(angle) * dist;
          const y2 = 540 + Math.sin(angle) * dist;
          return (
            <g key={`anar-${i}`}>
              <path d={`M60 540 Q${(60 + x2) / 2 + 5} ${(540 + y2) / 2} ${x2} ${y2}`} stroke="#FFA726" strokeWidth="1.2" opacity="0.6" />
              <circle cx={x2} cy={y2} r="1.8" fill="#FFF2A3" />
            </g>
          );
        })}

        {/* --- Bottom Right Anar / Fountain Sparkles (cx=440, cy=540) --- */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = ((-150 + i * 12) * Math.PI) / 180;
          const dist = 40 + i * 8;
          const x2 = 440 + Math.cos(angle) * dist;
          const y2 = 540 + Math.sin(angle) * dist;
          return (
            <g key={`anar-r-${i}`}>
              <path d={`M440 540 Q${(440 + x2) / 2 - 5} ${(540 + y2) / 2} ${x2} ${y2}`} stroke="#FFA726" strokeWidth="1.2" opacity="0.6" />
              <circle cx={x2} cy={y2} r="1.8" fill="#FFF2A3" />
            </g>
          );
        })}

        {/* Floating Festive Starbursts & Embers */}
        {[
          { cx: 250, cy: 75, r: 2.5 },
          { cx: 180, cy: 190, r: 1.5 },
          { cx: 330, cy: 220, r: 1.5 },
          { cx: 80, cy: 280, r: 2 },
          { cx: 420, cy: 300, r: 2 },
          { cx: 160, cy: 450, r: 1.5 },
          { cx: 350, cy: 460, r: 2 },
        ].map((star, idx) => (
          <g key={`star-${idx}`}>
            <circle cx={star.cx} cy={star.cy} r={star.r} fill="#FFF9C4" />
            <line x1={star.cx - 6} y1={star.cy} x2={star.cx + 6} y2={star.cy} stroke="#FFE082" strokeWidth="0.8" />
            <line x1={star.cx} y1={star.cy - 6} x2={star.cx} y2={star.cy + 6} stroke="#FFE082" strokeWidth="0.8" />
          </g>
        ))}
      </svg>
    </div>
  );
}

