"use client";

interface Props {
  width?: number;
  className?: string;
  alt?: string;
}

export default function BcAiLogo({ width = 120, className = "", alt = "BC + AI" }: Props) {
  return (
    // mix-blend-mode: screen makes the black background transparent,
    // leaving only the white text paths visible on any dark surface
    <img
      src="/logos/bcai-darkmode.svg"
      width={width}
      height={width}
      alt={alt}
      className={className}
      style={{ mixBlendMode: "screen" }}
    />
  );
}
