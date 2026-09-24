type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth={2.6} />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function CandleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 21V11h4v10M13 21v-8h4v8M4 21h16" />
      <path d="M9 8c-1-1-1-2.5 0-4 1 1.5 1 3 0 4ZM15 10c-1-1-1-2.5 0-4 1 1.5 1 3 0 4Z" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2a5 5 0 0 1 5.5 5.8" />
    </svg>
  );
}

export function PotIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
      <path d="M2 10h2M20 10h2M9 6c0-1 1-1 1-2M13 6c0-1 1-1 1-2" />
    </svg>
  );
}
