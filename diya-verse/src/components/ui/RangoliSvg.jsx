"use client";

export default function RangoliSvg({
  theme = "gold", // "gold", "marigold", "peacock", "kumkum"
  size = 340,
  animated = false,
  className = "",
}) {
  // Theme color maps
  const colorSchemes = {
    gold: {
      primary: "#D4A64A",
      secondary: "#F5D79D",
      tertiary: "#8F2028",
      accent: "#E68A32",
      center: "#F5E6C8",
    },
    marigold: {
      primary: "#E68A32",
      secondary: "#FFA726",
      tertiary: "#8F2028",
      accent: "#D4A64A",
      center: "#FFF3E0",
    },
    peacock: {
      primary: "#253D36",
      secondary: "#00897B",
      tertiary: "#D4A64A",
      accent: "#F5D79D",
      center: "#80CBC4",
    },
    kumkum: {
      primary: "#8F2028",
      secondary: "#54151F",
      tertiary: "#E68A32",
      accent: "#D4A64A",
      center: "#F5E6C8",
    },
  };

  const c = colorSchemes[theme] || colorSchemes.gold;

  // 12 outer petals
  const outerPetals = Array.from({ length: 12 }).map((_, i) => i * 30);
  // 8 middle petals
  const middlePetals = Array.from({ length: 8 }).map((_, i) => i * 45);
  // 8 inner stars
  const innerStars = Array.from({ length: 8 }).map((_, i) => i * 45 + 22.5);

  return (
    <div
      className={`relative inline-block select-none ${
        animated ? "animate-spin-slow" : ""
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <defs>
          <filter id="rangoliGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g transform="translate(200, 200)">
          {/* Outermost Decorative Ring */}
          <circle
            r="190"
            stroke={c.primary}
            strokeWidth="2"
            strokeDasharray="4 6"
            opacity="0.6"
          />
          <circle r="182" stroke={c.secondary} strokeWidth="1.5" />
          <circle
            r="174"
            stroke={c.primary}
            strokeWidth="1"
            strokeDasharray="2 4"
          />

          {/* 12 Outer Lotus Petals */}
          {outerPetals.map((deg, i) => (
            <g key={`outer-${i}`} transform={`rotate(${deg})`}>
              {/* Petal curve */}
              <path
                d="M0 -140 Q25 -170 0 -192 Q-25 -170 0 -140 Z"
                fill={i % 2 === 0 ? c.secondary : c.primary}
                opacity="0.85"
                stroke={c.tertiary}
                strokeWidth="1"
              />
              {/* Petal Inner Vein */}
              <line
                x1="0"
                y1="-145"
                x2="0"
                y2="-185"
                stroke={c.tertiary}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Tip Jewel Dot */}
              <circle cx="0" cy="-194" r="3.5" fill={c.accent} />
            </g>
          ))}

          {/* Middle Concentric Ring */}
          <circle
            r="135"
            stroke={c.tertiary}
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />
          <circle r="128" stroke={c.primary} strokeWidth="1.5" fill="none" />

          {/* 8 Middle Heart-Lotus Petals */}
          {middlePetals.map((deg, i) => (
            <g key={`mid-${i}`} transform={`rotate(${deg})`}>
              <path
                d="M0 -70 C35 -105 40 -125 0 -138 C-40 -125 -35 -105 0 -70 Z"
                fill={c.primary}
                stroke={c.secondary}
                strokeWidth="1.5"
                opacity="0.9"
              />
              {/* Inner Petal Tear */}
              <path
                d="M0 -85 C18 -105 18 -118 0 -126 C-18 -118 -18 -105 0 -85 Z"
                fill={c.tertiary}
                opacity="0.9"
              />
              <circle cx="0" cy="-110" r="3" fill={c.center} />
            </g>
          ))}

          {/* Intermediate Star / Diamond Layer */}
          {innerStars.map((deg, i) => (
            <g key={`star-${i}`} transform={`rotate(${deg})`}>
              <polygon
                points="0,-68 18,-86 0,-104 -18,-86"
                fill={c.accent}
                stroke={c.secondary}
                strokeWidth="1"
                opacity="0.95"
              />
              <circle cx="0" cy="-86" r="2.5" fill="#FFFFFF" />
            </g>
          ))}

          {/* Inner Ring with Pearl Beads */}
          <circle
            r="65"
            stroke={c.secondary}
            strokeWidth="2"
            fill="none"
          />
          <circle
            r="56"
            stroke={c.tertiary}
            strokeWidth="2.5"
            strokeDasharray="3 4"
            fill="none"
          />

          {/* Inner 8-Petal Rosette */}
          {middlePetals.map((deg, i) => (
            <g key={`rosette-${i}`} transform={`rotate(${deg + 22.5})`}>
              <path
                d="M0 -22 C14 -35 14 -48 0 -54 C-14 -48 -14 -35 0 -22 Z"
                fill={c.secondary}
                stroke={c.primary}
                strokeWidth="1"
              />
              <circle cx="0" cy="-42" r="2" fill={c.tertiary} />
            </g>
          ))}

          {/* Sacred Central Flower */}
          <circle
            r="22"
            fill={c.tertiary}
            stroke={c.primary}
            strokeWidth="2"
          />
          <circle
            r="14"
            fill={c.primary}
            stroke={c.secondary}
            strokeWidth="1.5"
          />
          <circle
            r="7"
            fill={c.center}
            filter="url(#rangoliGlow)"
          />
          <circle r="3" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
