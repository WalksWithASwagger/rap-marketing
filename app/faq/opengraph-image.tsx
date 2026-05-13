import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "RAP Frequently Asked Questions";

export default async function Image() {
  return renderOgImage({
    title: "Twelve answers before you enroll.",
    subtitle:
      "Time commitment, prerequisites, refunds, what makes RAP different from every other AI course.",
    bgImage: "/images/07b-alumni-orbital-community.png",
    eyebrow: "FAQ",
  });
}
