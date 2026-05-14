import type { Metadata } from "next";
import Image from "next/image";
import EnrollHandoff from "@/components/EnrollHandoff";
import imageMeta from "@/lib/image-meta.json";
import { REGISTRATION_URL } from "@/lib/links";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

const REDIRECT_URL = REGISTRATION_URL;

export const metadata: Metadata = {
  title: "Enroll",
  description:
    "Heading to RAP registration on Luma. Pick your cohort and reserve a seat.",
  alternates: { canonical: "/enroll" },
  openGraph: {
    title: "Enroll in RAP",
    description: "Heading to RAP registration on Luma — pick your cohort.",
    url: "/enroll",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enroll in RAP",
    description: "Heading to RAP registration on Luma — pick your cohort.",
  },
};

export default function EnrollPage() {
  const bg = "/images/10c-cta-path-forward.png";
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`3;url=${REDIRECT_URL}`} />
      </noscript>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-950">
        <div className="absolute inset-0">
          <Image
            src={bg}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder={meta[bg]?.blurDataURL ? "blur" : undefined}
            blurDataURL={meta[bg]?.blurDataURL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-forest-950/95" />
        </div>

        <div className="relative z-10 px-6 py-20 flex justify-center w-full">
          <EnrollHandoff redirectUrl={REDIRECT_URL} delayMs={2000} />
        </div>

        {/* No-JS fallback link */}
        <noscript>
          <div className="absolute bottom-8 left-0 right-0 text-center text-cream/80 text-sm z-20">
            JavaScript is off. You&apos;ll be redirected in 3 seconds, or{" "}
            <a href={REDIRECT_URL} className="text-cyan underline">
              click here
            </a>
            .
          </div>
        </noscript>
      </section>
    </>
  );
}
