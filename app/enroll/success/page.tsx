import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're in",
  description: "Welcome to RAP. Your enrollment is confirmed.",
  robots: { index: false, follow: false },
};

export default function EnrollSuccessPage() {
  return (
    <section className="min-h-[80vh] bg-forest-950 flex items-center justify-center py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-6">
          Enrollment confirmed
        </p>
        <h1
          className="font-serif font-semibold text-cream leading-[1.05] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          You&apos;re in. Welcome to RAP.
        </h1>
        <p className="text-cream/80 text-lg leading-relaxed mb-12">
          Your purchase is confirmed. A receipt is on its way to your email. Head into the course whenever you&apos;re ready — no pressure, no schedule.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/course"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan text-forest-950 font-semibold border border-cyan hover:bg-cyan/90 transition-colors shadow-[0_0_40px_-10px_rgba(0,221,204,0.45)]"
          >
            Start the course →
          </Link>
          <Link
            href="/"
            className="text-cream/70 hover:text-cyan transition-colors underline underline-offset-4"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
