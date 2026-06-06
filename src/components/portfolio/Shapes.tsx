export const Star5 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <polygon points="50,5 61,38 95,38 67,58 78,92 50,72 22,92 33,58 5,38 39,38" fill="currentColor" />
  </svg>
);

export const Star8 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <polygon
      points="50,0 60,30 90,15 75,45 100,55 70,60 85,90 55,75 50,100 45,75 15,90 30,60 0,55 25,45 10,15 40,30"
      fill="currentColor"
    />
  </svg>
);

export const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <g fill="currentColor">
      <rect x="42" y="5" width="16" height="90" rx="3" />
      <rect x="42" y="5" width="16" height="90" rx="3" transform="rotate(60 50 50)" />
      <rect x="42" y="5" width="16" height="90" rx="3" transform="rotate(120 50 50)" />
    </g>
  </svg>
);

export const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 30" className={className} fill="none" aria-hidden>
    <path d="M2 15 Q 17 0 32 15 T 62 15 T 92 15 T 118 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);