type Props = {
  slug: string;
  className?: string;
};

export function ProjectVisual({ slug, className }: Props) {
  if (slug === "mlb-fouls") return <MlbVisual className={className} />;
  if (slug === "acrobat-sign") return <AcrobatVisual className={className} />;
  return null;
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
