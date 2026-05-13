import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FOREST = "#1E3A2B";
const FOREST_DEEP = "#0F1F17";
const CYAN = "#00DDCC";
const CREAM = "#F5F1E8";

export interface OgProps {
  title: string;
  subtitle?: string;
  bgImage?: string; // /images/...
  eyebrow?: string;
}

async function loadImageAsDataUrl(publicPath: string): Promise<string | null> {
  try {
    const filePath = join(process.cwd(), "public", publicPath.replace(/^\//, ""));
    const buf = await readFile(filePath);
    const base64 = buf.toString("base64");
    return `data:image/png;base64,${base64}`;
  } catch {
    return null;
  }
}

export async function renderOgImage({ title, subtitle, bgImage, eyebrow }: OgProps) {
  const bgDataUrl = bgImage ? await loadImageAsDataUrl(bgImage) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: FOREST,
          backgroundImage: bgDataUrl ? `url(${bgDataUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Dark forest scrim for legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${FOREST_DEEP}EE 0%, ${FOREST}CC 60%, ${FOREST_DEEP}E6 100%)`,
            display: "flex",
          }}
        />

        {/* Top row: eyebrow */}
        <div
          style={{
            display: "flex",
            position: "relative",
            color: CYAN,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow ?? "RAP Certification"}
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            gap: 24,
            maxWidth: 1000,
          }}
        >
          {/* Cyan accent line */}
          <div
            style={{
              width: 96,
              height: 6,
              backgroundColor: CYAN,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: title.length > 40 ? 72 : 88,
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 30,
                color: CREAM,
                opacity: 0.85,
                lineHeight: 1.35,
                display: "flex",
                maxWidth: 900,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom row: wordmark */}
        <div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: CREAM,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: CREAM,
              }}
            >
              RAP
            </div>
            <div
              style={{
                fontSize: 18,
                color: CYAN,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Responsible AI Professional
            </div>
          </div>
          <div
            style={{
              fontSize: 18,
              color: CREAM,
              opacity: 0.7,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            BC + AI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
