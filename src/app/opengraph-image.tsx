// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ג׳אן מנופים – מנוף הרמה בדרום";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const heebo = await fetch(
    new URL("./fonts/Heebo-VariableFont_wght.ttf", import.meta.url)
  ).then(r => r.arrayBuffer());

  const title = "ג׳אן מנופים";
  // RLM before the number helps BiDi with “23”
  const subtitle = "‏שירותי מנוף הרמה עד ‏23 קומות, מקצועי ובטיחותי";

  return new ImageResponse(
    (
      <div
        dir="rtl"
        lang="he"
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // avoid strong gradients (see #2 below)
          background: "#0f276c",
          color: "#fff",
          textAlign: "center",
          padding: 48,
          direction: "rtl",
        }}
      >
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            marginBottom: 16,
            unicodeBidi: "plaintext",
            direction: "rtl",
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.95,
            unicodeBidi: "plaintext",
            direction: "rtl",
            whiteSpace: "pre-wrap",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Heebo", data: heebo, style: "normal", weight: 700 }],
    }
  );
}
