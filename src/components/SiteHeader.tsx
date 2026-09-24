"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Icons";
import { business } from "@/content/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#home" className="min-w-0 rounded-md" aria-label={`${business.name}, back to top`}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-cream/85">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded transition-colors hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-tomato px-3 py-2.5 text-sm font-semibold text-white min-[380px]:px-4 shadow-lg shadow-tomato/20 transition hover:bg-[#ad361b]"
          >
            <PhoneIcon className="hidden h-4 w-4 min-[380px]:block" />
            Call Now
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-white/10 bg-charcoal md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-cream/90 hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
