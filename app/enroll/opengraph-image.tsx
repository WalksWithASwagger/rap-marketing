import { renderOgImage, size, contentType } from "@/lib/og";

export { size, contentType };
export const alt = "Enroll in RAP Certification";

export default async function Image() {
  return renderOgImage({
    title: "Enroll in RAP.",
    subtitle:
      "Same program, same team. Heading to the enrollment form on the course platform.",
    bgImage: "/images/10c-cta-path-forward.png",
    eyebrow: "Enroll",
  });
}
