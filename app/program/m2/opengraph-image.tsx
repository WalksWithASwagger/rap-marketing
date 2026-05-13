import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Module 02: Core Ethics";

export default async function Image() {
  return renderOgImage({
    title: "Module 02 — Core Ethics",
    subtitle:
      "Bias, fairness, transparency, accountability. The arguments you have to make before you ship.",
    bgImage: "/images/06a-frameworks-integrated-venn.png",
    eyebrow: "Week 2 of 4",
  });
}
