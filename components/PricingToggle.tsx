"use client";

import { useState } from "react";
import Link from "next/link";

const prices = {
  member: [
    { label: "Early Bird Member", price: "$600", highlight: true },
    { label: "BC + AI Member", price: "$750", highlight: false },
  ],
  nonmember: [
    { label: "Early Bird", price: "$1,200", highlight: false },
    { label: "Standard", price: "$1,500", highlight: false },
  ],
};

export default function PricingToggle() {
  const [isMember, setIsMember] = useState(true);
  const list = isMember ? prices.member : prices.nonmember;

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setIsMember(false)}
          className={`text-sm font-semibold transition-colors ${!isMember ? "text-cream" : "text-muted"}`}
        >
          Non-member
        </button>
        <button
          onClick={() => setIsMember(!isMember)}
          className="relative w-12 h-6 rounded-full transition-colors focus:outline-none"
          style={{ backgroundColor: isMember ? "#68B091" : "#3a6644" }}
          aria-label="Toggle membership"
        >
          <span
            className="absolute top-1 w-4 h-4 bg-cream rounded-full shadow transition-all"
            style={{ left: isMember ? "1.5rem" : "0.25rem" }}
          />
        </button>
        <button
          onClick={() => setIsMember(true)}
          className={`text-sm font-semibold transition-colors ${isMember ? "text-cream" : "text-muted"}`}
        >
          BC + AI Member
        </button>
      </div>

      {/* Price cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {list.map(({ label, price, highlight }) => (
          <div
            key={label}
            className={`rounded-lg p-4 border text-center transition-all ${
              highlight
                ? "border-cyan bg-cyan/10"
                : "border-forest-600 bg-forest-800"
            }`}
          >
            <p
              className={`font-serif font-bold text-3xl mb-1 ${
                highlight ? "text-cyan glow-text" : "text-gold"
              }`}
            >
              {price}
            </p>
            <p className="text-muted text-xs">{label} CAD</p>
          </div>
        ))}
      </div>

      {isMember ? (
        <p className="text-muted text-sm mb-4">
          Members save up to{" "}
          <span className="text-growth font-semibold">$750</span> vs standard pricing.
        </p>
      ) : (
        <p className="text-muted text-sm mb-4">
          Join BC + AI ($340/yr) →{" "}
          <span className="text-growth font-semibold">save $410 net</span> before the program starts.
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <Link
          href="/pricing"
          className="px-5 py-2.5 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors text-sm"
        >
          Full Pricing Details →
        </Link>
        {!isMember && (
          <a
            href="https://bc-ai.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-growth/40 text-growth font-semibold rounded hover:border-growth transition-colors text-sm"
          >
            Join BC + AI →
          </a>
        )}
      </div>
    </div>
  );
}
