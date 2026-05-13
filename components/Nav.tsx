"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BcAiLogo from "./BcAiLogo";

const links = [
  { href: "/program", label: "Program" },
  { href: "/methodology", label: "Methodology" },
  { href: "/instructors", label: "Instructors" },
  { href: "/cohorts", label: "Cohorts" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-forest-950/95 backdrop-blur-md border-b border-forest-700">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo — BC+AI | RAP */}
        <Link href="/" className="flex items-center gap-3 group">
          <BcAiLogo width={52} className="opacity-90 group-hover:opacity-100 transition-opacity" />
          <span className="text-forest-600 text-lg font-light select-none">|</span>
          <span className="font-serif font-bold text-lg tracking-tight text-gold group-hover:text-yellow-300 transition-colors">
            RAP
          </span>
          <span className="hidden sm:block text-muted text-xs font-sans font-normal leading-tight max-w-[130px]">
            Responsible AI Professional
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-cream font-medium"
                  : "text-muted hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enroll"
            className="ml-2 px-4 py-2 bg-orange text-black text-sm font-bold rounded hover:bg-orange/90 transition-colors glow-box"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-forest-700 bg-forest-950 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted hover:text-cream transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enroll"
            className="mt-2 px-4 py-2 bg-orange text-black text-sm font-bold rounded text-center"
            onClick={() => setOpen(false)}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
