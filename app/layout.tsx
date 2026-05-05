import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RAP — Responsible AI Professional Certification",
  description:
    "A 4-week certification program for leaders and practitioners who need to understand, implement, and govern responsible AI practices.",
  openGraph: {
    title: "RAP — Responsible AI Professional Certification",
    description:
      "Lead with ethics in an AI-first world. 4 weeks. Real scenarios. Practical frameworks.",
    url: "https://rap.bc-ai.ca",
    siteName: "RAP Certification",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
