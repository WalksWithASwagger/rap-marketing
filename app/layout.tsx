import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorAccent from "@/components/CursorAccent";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://rap.bc-ai.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RAP — Responsible AI Professional Certification",
    template: "%s | RAP Certification",
  },
  description:
    "A 4-week certification program for leaders and practitioners who need to understand, implement, and govern responsible AI practices.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RAP — Responsible AI Professional Certification",
    description:
      "Lead with ethics in an AI-first world. 4 weeks. Real scenarios. Practical frameworks.",
    url: SITE_URL,
    siteName: "RAP Certification",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAP — Responsible AI Professional Certification",
    description:
      "Lead with ethics in an AI-first world. 4 weeks. Real scenarios. Practical frameworks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:rounded focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-forest-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollProgress />
        <CursorAccent />
        <Nav />
        <main id="main" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
