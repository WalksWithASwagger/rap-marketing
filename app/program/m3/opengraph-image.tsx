import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Module 03: Societal Impact";

export default async function Image() {
  return renderOgImage({
    title: "Module 03 — Societal Impact",
    subtitle:
      "Labour, environment, democracy, equity. The frames you need to name the harms before they ship.",
    bgImage: "/images/08a-practical-theory-vs-practice.png",
    eyebrow: "Week 3 of 4",
  });
}
