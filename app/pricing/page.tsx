import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | RAP Certification",
  description:
    "Responsible AI Professional certification pricing — $600 to $1,500 CAD. Membership math makes it a no-brainer.",
};

const tiers = [
  {
    name: "Early Bird + Member",
    price: "$600",
    highlight: true,
    who: "Best value: BC + AI member who registers early",
    includes: ["Stack both discounts", "50% member discount + 20% early bird", "Full program access", "Certificate + Custom GPT", "Alumni network access"],
    note: "Register ~6 weeks before cohort start",
  },
  {
    name: "BC + AI Member",
    price: "$750",
    highlight: false,
    who: "Current BC + AI members",
    includes: ["50% member discount", "Full program access", "Certificate + Custom GPT", "Alumni network access"],
    note: "Membership: $340/year",
  },
  {
    name: "Early Bird",
    price: "$1,200",
    highlight: false,
    who: "Non-members registering early",
    includes: ["20% early bird discount", "Full program access", "Certificate + Custom GPT", "Alumni network access"],
    note: "Register ~6 weeks before cohort start",
  },
  {
    name: "Standard",
    price: "$1,500",
    highlight: false,
    who: "Full price for non-members",
    includes: ["Full program access", "Certificate + Custom GPT", "Alumni network access"],
    note: "All prices in CAD",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Investment
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-6">
          What&apos;s it cost?<br />Less than you think.
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          We price for access, not exclusivity. Membership discounts are substantial
          by design — the math works in your favour.
        </p>
      </section>

      {/* Art tile */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="rounded-xl overflow-hidden border border-forest-600">
          <div className="relative w-full" style={{ aspectRatio: "16/4" }}>
            <Image
              src="/images/05a-30seats-forest-gathering.png"
              alt="30 seats — small cohort, high access"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-forest-900/60" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-cream font-bold mb-2">
                  25–30 seats per cohort.
                </p>
                <p className="text-cream/70 text-lg">Small enough to matter. Big enough for diverse perspectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 border flex flex-col ${
                tier.highlight
                  ? "border-gold bg-forest-800"
                  : "border-forest-600 bg-forest-800/50"
              }`}
            >
              {tier.highlight && (
                <span className="self-start px-2 py-0.5 bg-gold text-forest-950 text-xs font-semibold rounded mb-3">
                  Best Value
                </span>
              )}
              <p className="text-muted text-sm mb-2">{tier.name}</p>
              <p className="font-serif text-4xl font-bold text-gold mb-1">{tier.price}</p>
              <p className="text-muted text-xs mb-4">CAD</p>
              <p className="text-cream text-sm mb-5 leading-relaxed">{tier.who}</p>
              <ul className="space-y-2 mb-5 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-muted text-sm">
                    <span className="text-accent shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted text-xs border-t border-forest-700 pt-3 mt-auto">{tier.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership math */}
      <section className="bg-forest-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                The Math
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold mb-6">
                Membership pays for itself<br />before the course even starts.
              </h2>
              <div className="space-y-4 text-muted">
                <div className="flex justify-between py-3 border-b border-forest-700">
                  <span>Standard RAP price</span>
                  <span className="text-cream font-semibold">$1,500</span>
                </div>
                <div className="flex justify-between py-3 border-b border-forest-700">
                  <span>Member RAP price</span>
                  <span className="text-cream font-semibold">$750</span>
                </div>
                <div className="flex justify-between py-3 border-b border-forest-700">
                  <span>Savings from membership</span>
                  <span className="text-accent font-semibold">−$750</span>
                </div>
                <div className="flex justify-between py-3 border-b border-forest-700">
                  <span>BC + AI annual membership</span>
                  <span className="text-cream font-semibold">$340</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-cream font-bold">Net benefit to joining</span>
                  <span className="text-gold font-bold text-xl">$410</span>
                </div>
              </div>
              <p className="text-muted text-sm mt-4">
                Plus: ongoing community access, monthly office hours, 7 special interest
                groups, 850+ Discord members, and first access to future programs.
              </p>
            </div>

            <div className="bg-forest-800 rounded-xl p-8 border border-forest-600">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                BC + AI Membership Includes
              </p>
              <ul className="space-y-3">
                {[
                  "Vancouver AI Meetups (250+ monthly attendees)",
                  "7 Special Interest Groups",
                  "850+ Discord member community",
                  "Monthly Friday Office Hours (free, open to all)",
                  "Member pricing on RAP and future programs",
                  "First access to new education initiatives",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted text-sm">
                    <span className="text-gold shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-forest-700">
                <p className="text-cream font-semibold mb-1">$340 / year</p>
                <p className="text-muted text-sm mb-4">BC + AI Ecosystem Association membership</p>
                <a
                  href="https://bc-ai.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-forest-500 text-accent text-sm font-semibold rounded hover:border-accent transition-colors"
                >
                  Learn more at bc-ai.ca →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group registrations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-forest-800 rounded-xl p-6 border border-forest-600">
            <p className="text-gold font-semibold mb-3">Group Registrations</p>
            <p className="text-muted text-sm leading-relaxed">
              Teams are welcome. We don&apos;t offer corporate discounts — everyone pays based
              on their membership status. Teams often find shared cohort experience valuable
              for internal alignment. Contact us to discuss group enrollment.
            </p>
          </div>
          <div className="bg-forest-800 rounded-xl p-6 border border-forest-600">
            <p className="text-gold font-semibold mb-3">Payment Options</p>
            <p className="text-muted text-sm leading-relaxed">
              Payment platform TBD (Stripe/Eventbrite/Luma). Payment options including
              installments will be clarified when registration opens. Questions? Email
              hello@bc-ai.ca.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="font-serif text-3xl text-cream font-bold mb-6">
          Ready to invest in your practice?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/enroll"
            className="px-8 py-4 bg-gold text-forest-950 font-semibold rounded hover:bg-yellow-400 transition-colors"
          >
            Enroll Now
          </Link>
          <Link
            href="/cohorts"
            className="px-8 py-4 border border-forest-500 text-accent font-semibold rounded hover:border-accent transition-colors"
          >
            View 2026 Cohorts
          </Link>
        </div>
      </section>
    </>
  );
}
