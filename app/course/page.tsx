import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

type Entitlement = { slug: string; grantedAt: string };

export const metadata = {
  title: "Course",
  robots: { index: false, follow: false },
};

export default async function CourseLandingPage() {
  const user = await currentUser();
  const entitlements =
    (user?.publicMetadata?.entitlements as Entitlement[] | undefined) ?? [];
  const hasAsync = entitlements.some((e) => e.slug === "async-course");

  return (
    <section className="min-h-[80vh] bg-forest-950 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-6">
          Your course
        </p>
        <h1 className="font-serif text-cream text-4xl sm:text-6xl font-semibold mb-8 leading-tight">
          {hasAsync ? "Welcome back." : "No course access yet."}
        </h1>

        {hasAsync ? (
          <>
            <p className="text-cream/80 leading-relaxed mb-8">
              You have access to the RAP Async Self-Paced Course. The course modules are being ported into this site — they&apos;ll appear here shortly. In the meantime your enrollment is locked in.
            </p>
            <div className="bg-forest-900/60 border border-forest-700 rounded-2xl p-6">
              <p className="text-cream/60 text-sm font-mono">
                Your entitlements:
              </p>
              <ul className="mt-2 space-y-1">
                {entitlements.map((e) => (
                  <li key={e.slug} className="text-cream font-mono text-sm">
                    {e.slug}{" "}
                    <span className="text-cream/50">
                      (granted {new Date(e.grantedAt).toLocaleDateString()})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <p className="text-cream/80 leading-relaxed mb-8">
              You&apos;re signed in but haven&apos;t enrolled in the async course yet. Head to pricing to get started.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan text-forest-950 font-semibold border border-cyan hover:bg-cyan/90 transition-colors"
            >
              See pricing →
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
