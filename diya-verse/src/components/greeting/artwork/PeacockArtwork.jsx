"use client";

export default function PeacockArtwork({
  size = 120,
  variant = "crown", // "crown" | "corner" | "feather-pair"
  className = "",
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 0.8 }}
    >
      <svg
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="pkEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E676" />
            <stop offset="50%" stopColor="#00897B" />
            <stop offset="100%" stopColor="#004D40" />
          </linearGradient>

          <linearGradient id="pkRoyalBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#40C4FF" />
            <stop offset="40%" stopColor="#0288D1" />
            <stop offset="100%" stopColor="#01579B" />
          </linearGradient>

          <linearGradient id="pkGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="50%" stopColor="#D4A64A" />
            <stop offset="100%" stopColor="#8D6E63" />
          </linearGradient>

          <radialGradient id="pkEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="45%" stopColor="#1A237E" />
            <stop offset="85%" stopColor="#D4A64A" />
            <stop offset="100%" stopColor="#004D40" />
          </radialGradient>
        </defs>

        {/* Central Peacock Feather Crest */}
        {/* Left Sweeping Feather */}
        <g transform="translate(45, 10) rotate(-15 50 80)">
          {/* Feather Shaft */}
          <path d="M50 140 Q45 80 50 15" stroke="url(#pkGold)" strokeWidth="2" strokeLinecap="round" />
          {/* Barbs / Tendrils */}
          {Array.from({ length: 9 }).map((_, i) => {
            const y = 30 + i * 11;
            return (
              <g key={`pk-barb-l-${i}`}>
                <path d={`M50 ${y} Q${30} ${y - 4} ${20} ${y + 6}`} stroke="url(#pkEmerald)" strokeWidth="1" strokeOpacity="0.8" />
                <path d={`M50 ${y} Q${70} ${y - 4} ${80} ${y + 6}`} stroke="url(#pkEmerald)" strokeWidth="1" strokeOpacity="0.8" />
              </g>
            );
          })}
          {/* Feather Eye Outer Emerald Shell */}
          <path d="M50 15 C30 25 32 50 50 65 C68 50 70 25 50 15 Z" fill="url(#pkEmerald)" stroke="url(#pkGold)" strokeWidth="1.5" />
          {/* Feather Eye Royal Blue Core */}
          <ellipse cx="50" cy="40" rx="14" ry="18" fill="url(#pkRoyalBlue)" />
          {/* Iridescent Center Eye */}
          <ellipse cx="50" cy="42" rx="8" ry="10" fill="url(#pkEye)" />
          <circle cx="50" cy="42" r="3.5" fill="#000000" />
          <circle cx="51.5" cy="40.5" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Right Sweeping Feather */}
        <g transform="translate(55, 10) rotate(15 50 80)">
          {/* Feather Shaft */}
          <path d="M50 140 Q55 80 50 15" stroke="url(#pkGold)" strokeWidth="2" strokeLinecap="round" />
          {/* Barbs / Tendrils */}
          {Array.from({ length: 9 }).map((_, i) => {
            const y = 30 + i * 11;
            return (
              <g key={`pk-barb-r-${i}`}>
                <path d={`M50 ${y} Q${30} ${y - 4} ${20} ${y + 6}`} stroke="url(#pkEmerald)" strokeWidth="1" strokeOpacity="0.8" />
                <path d={`M50 ${y} Q${70} ${y - 4} ${80} ${y + 6}`} stroke="url(#pkEmerald)" strokeWidth="1" strokeOpacity="0.8" />
              </g>
            );
          })}
          {/* Feather Eye Outer Emerald Shell */}
          <path d="M50 15 C30 25 32 50 50 65 C68 50 70 25 50 15 Z" fill="url(#pkEmerald)" stroke="url(#pkGold)" strokeWidth="1.5" />
          {/* Feather Eye Royal Blue Core */}
          <ellipse cx="50" cy="40" rx="14" ry="18" fill="url(#pkRoyalBlue)" />
          {/* Iridescent Center Eye */}
          <ellipse cx="50" cy="42" rx="8" ry="10" fill="url(#pkEye)" />
          <circle cx="50" cy="42" r="3.5" fill="#000000" />
          <circle cx="51.5" cy="40.5" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Central Crown Diadem / Gem */}
        <path d="M90 140 Q100 120 110 140 Q100 132 90 140 Z" fill="url(#pkGold)" />
        <circle cx="100" cy="132" r="3" fill="#00E5FF" stroke="#D4A64A" strokeWidth="1" />
        <circle cx="100" cy="120" r="2" fill="#FFE082" />
      </svg>
    </div>
  );
}

