"use client";

import { useState } from "react";

type Props = {
  slug: "async-self-paced" | "rap-coaching-single" | "rap-coaching-4pack";
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function EnrollAsyncButton({
  slug,
  label,
  variant = "primary",
  className = "",
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });

      if (res.status === 401) {
        const redirect = encodeURIComponent(`/pricing?enroll=${slug}`);
        window.location.href = `/sign-in?redirect_url=${redirect}`;
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Checkout failed (${res.status})`);
      }

      const { url } = (await res.json()) as { url: string };
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  }

  const base =
    variant === "primary"
      ? "bg-cyan text-forest-950 font-semibold border border-cyan hover:bg-cyan/90"
      : "bg-forest-900/40 text-cream font-medium border border-cream/30 hover:border-cyan hover:text-cyan";

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base tracking-wide transition-colors shadow-[0_0_40px_-10px_rgba(0,221,204,0.45)] hover:shadow-[0_0_60px_-8px_rgba(0,221,204,0.7)] disabled:opacity-60 disabled:cursor-wait ${base} ${className}`}
      >
        {loading ? "Loading…" : label}
      </button>
      {error ? (
        <p className="text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
