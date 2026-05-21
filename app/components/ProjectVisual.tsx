type Props = {
  slug: string;
  className?: string;
};

export function ProjectVisual({ slug, className }: Props) {
  if (slug === "atlas") return <AtlasVisual className={className} />;
  if (slug === "mlb-fouls") return <MlbVisual className={className} />;
  if (slug === "acrobat-sign") return <AcrobatVisual className={className} />;
  return null;
}

function AtlasVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 80"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <rect width="400" height="80" fill="#18181b" />
      {/* Source nodes */}
      <circle cx="55" cy="18" r="3.5" fill="#14b8a6" opacity="0.9" />
      <circle cx="40" cy="40" r="3.5" fill="#14b8a6" opacity="0.9" />
      <circle cx="55" cy="62" r="3.5" fill="#14b8a6" opacity="0.9" />
      <circle cx="76" cy="10" r="2.5" fill="#14b8a6" opacity="0.5" />
      <circle cx="76" cy="70" r="2.5" fill="#14b8a6" opacity="0.5" />
      {/* Connection lines to center */}
      <line x1="58" y1="18" x2="155" y2="40" stroke="#14b8a6" strokeWidth="0.7" opacity="0.35" />
      <line x1="44" y1="40" x2="155" y2="40" stroke="#14b8a6" strokeWidth="0.7" opacity="0.35" />
      <line x1="58" y1="62" x2="155" y2="40" stroke="#14b8a6" strokeWidth="0.7" opacity="0.35" />
      <line x1="78" y1="10" x2="155" y2="40" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2" />
      <line x1="78" y1="70" x2="155" y2="40" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2" />
      {/* Central synthesis node */}
      <circle cx="165" cy="40" r="13" fill="#0f766e" opacity="0.12" />
      <circle cx="165" cy="40" r="7" fill="#0f766e" opacity="0.35" />
      <circle cx="165" cy="40" r="3.5" fill="#14b8a6" />
      {/* Lines from center to insight cards */}
      <line x1="178" y1="34" x2="200" y2="23" stroke="#14b8a6" strokeWidth="0.6" opacity="0.3" />
      <line x1="178" y1="46" x2="200" y2="57" stroke="#14b8a6" strokeWidth="0.6" opacity="0.3" />
      {/* Insight card — risk */}
      <rect x="200" y="10" width="88" height="26" rx="3" fill="#27272a" />
      <rect x="210" y="18" width="48" height="1.8" rx="1" fill="#52525b" />
      <rect x="210" y="23" width="34" height="1.5" rx="1" fill="#52525b" opacity="0.55" />
      <circle cx="278" cy="23" r="5" fill="#dc2626" opacity="0.8" />
      {/* Insight card — opportunity */}
      <rect x="200" y="44" width="88" height="26" rx="3" fill="#27272a" />
      <rect x="210" y="52" width="42" height="1.8" rx="1" fill="#52525b" />
      <rect x="210" y="57" width="30" height="1.5" rx="1" fill="#52525b" opacity="0.55" />
      <circle cx="278" cy="57" r="5" fill="#059669" opacity="0.8" />
      {/* Ghost card far right */}
      <rect x="304" y="20" width="72" height="40" rx="3" fill="#27272a" opacity="0.35" />
      <rect x="314" y="29" width="38" height="1.5" rx="1" fill="#52525b" opacity="0.3" />
      <rect x="314" y="35" width="28" height="1.5" rx="1" fill="#52525b" opacity="0.2" />
      <rect x="314" y="41" width="33" height="1.5" rx="1" fill="#52525b" opacity="0.2" />
    </svg>
  );
}

function MlbVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 80"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="mlb-grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5e9645" />
          <stop offset="100%" stopColor="#3a6428" />
        </linearGradient>
        <radialGradient id="mlb-dirt" cx="50%" cy="115%" r="85%">
          <stop offset="0%" stopColor="#d09766" />
          <stop offset="55%" stopColor="#a86b3e" />
          <stop offset="100%" stopColor="#7d4e2e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="80" fill="url(#mlb-grass)" />
      <rect x="0" y="0" width="50" height="80" fill="white" opacity="0.04" />
      <rect x="100" y="0" width="50" height="80" fill="white" opacity="0.04" />
      <rect x="200" y="0" width="50" height="80" fill="white" opacity="0.04" />
      <rect x="300" y="0" width="50" height="80" fill="white" opacity="0.04" />
      <ellipse cx="200" cy="115" rx="220" ry="85" fill="url(#mlb-dirt)" />
      <path
        d="M 200 35 L 245 70 L 200 105 L 155 70 Z"
        fill="none"
        stroke="#fdfbf5"
        strokeWidth="1.4"
        strokeOpacity="0.85"
      />
      <circle cx="200" cy="70" r="4" fill="#9d6438" />
      <g transform="translate(335,28)">
        <circle r="11" fill="#fdfbf5" />
        <path
          d="M -8,-3 Q 0,2 8,-3"
          stroke="#c14a3a"
          strokeWidth="1.3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M -8,3 Q 0,-2 8,3"
          stroke="#c14a3a"
          strokeWidth="1.3"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function AcrobatVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 80"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="adobe-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec3b29" />
          <stop offset="100%" stopColor="#a51f12" />
        </linearGradient>
      </defs>
      <rect width="400" height="80" fill="url(#adobe-red)" />
      <g transform="rotate(-4 200 40)">
        <rect
          x="115"
          y="6"
          width="170"
          height="68"
          rx="3"
          fill="#fdfbf5"
        />
        <rect
          x="130"
          y="18"
          width="105"
          height="2"
          fill="#cbc7be"
          rx="1"
        />
        <rect
          x="130"
          y="26"
          width="135"
          height="2"
          fill="#cbc7be"
          rx="1"
        />
        <rect x="130" y="34" width="85" height="2" fill="#cbc7be" rx="1" />
        <rect
          x="130"
          y="42"
          width="120"
          height="2"
          fill="#cbc7be"
          rx="1"
        />
        <path
          d="M 130,60 Q 148,50 165,60 T 200,57 T 235,62 T 260,58"
          stroke="#1f1e1c"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(345,18)">
        <circle r="15" fill="#fdfbf5" opacity="0.96" />
        <path
          d="M -6.5 0 L -2 5 L 6.5 -4.5"
          stroke="#ec3b29"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
