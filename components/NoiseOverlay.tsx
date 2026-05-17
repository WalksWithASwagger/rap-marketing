// Single fixed full-bleed SVG noise overlay.
// Gives backdrop-blurred surfaces something organic to bite against
// without compounding per-card filter cost.

export default function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04]"
      style={{ mixBlendMode: "overlay" }}
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="rap-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.05  0 0 0 0 0.1  0 0 0 0 0.05  0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#rap-noise)" />
      </svg>
    </div>
  );
}
