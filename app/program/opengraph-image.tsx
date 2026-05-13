import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "The RAP Program — four weeks, four arguments";

export default async function Image() {
  return renderOgImage({
    title: "Four weeks. Four arguments.",
    subtitle:
      "Foundations, Core Ethics, Societal Impact, The Human Element — the curriculum arc.",
    bgImage: "/images/04a-curriculum-journey-arc.png",
    eyebrow: "Program",
  });
}
