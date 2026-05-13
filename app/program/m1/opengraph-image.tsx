import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Module 01: Foundations";

export default async function Image() {
  return renderOgImage({
    title: "Module 01 — Foundations",
    subtitle:
      "Technical grounding and the accuracy problem. Where AI breaks, and why the confidence gap matters.",
    bgImage: "/images/04b-curriculum-growing-seasons.png",
    eyebrow: "Week 1 of 4",
  });
}
