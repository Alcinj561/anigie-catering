type LogoMarkProps = {
  className?: string;
};

// Original mark: a plate with crossed fork and spoon, topped by a chef hat.
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="30" cy="36" r="24" fill="var(--color-cocoa)" />
      <circle cx="30" cy="36" r="17" fill="none" stroke="var(--color-cream)" strokeWidth="2" opacity="0.55" />
      <g fill="var(--color-cream)">
        {/* fork */}
        <g transform="rotate(-38 30 36)">
          <rect x="28.6" y="30" width="2.8" height="20" rx="1.4" />
          <path d="M25 20h1.6v8h1.2v-8h1.6v8h1.2v-8h1.6v8h1.2v-8H35v9.5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4Z" />
        </g>
        {/* spoon */}
        <g transform="rotate(38 30 36)">
          <rect x="28.6" y="31" width="2.8" height="19" rx="1.4" />
          <ellipse cx="30" cy="25" rx="4.6" ry="7" />
        </g>
      </g>
      {/* chef hat */}
      <g>
        <path
          d="M40 18c-3.6 0-6-2.8-5.2-6.2.6-2.6 3.3-4.3 6-3.8C42 5.3 44.8 4 47.6 4.6c2.4.5 4.2 2.4 4.6 4.7 2.9-.4 5.6 1.7 5.8 4.6.2 2.8-1.9 4.9-4.5 5.1V24H40Z"
          fill="var(--color-cream)"
          stroke="var(--color-cocoa-deep)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <rect x="40" y="21" width="13.5" height="4" rx="1" fill="var(--color-tomato)" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function Logo({ className = "", tone = "light" }: LogoProps) {
  const text = tone === "light" ? "text-cream" : "text-charcoal";
  const sub = tone === "light" ? "text-cocoa-light" : "text-cocoa";
  return (
    <span className={`inline-flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-wide min-[380px]:text-xl ${text}`}>ANIGIE</span>
        <span className={`mt-1 whitespace-nowrap text-[0.6rem] max-[359px]:hidden font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em] ${sub}`}>
          Kitchen &amp; Catering
        </span>
      </span>
    </span>
  );
}
