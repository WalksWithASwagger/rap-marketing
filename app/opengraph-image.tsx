import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "RAP — Responsible AI Professional Certification";

export default async function Image() {
  return renderOgImage({
    title: "Responsible AI, professionally.",
    subtitle:
      "A 4-week cohort certification for leaders who need to govern AI in the real world.",
    bgImage: "/images/10a-cta-bold-hero.png",
    eyebrow: "RAP Certification",
  });
}
