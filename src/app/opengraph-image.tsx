// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpengraphImage() {
  // Bundle font with the route (no network fetch)
  const fontData = await fetch(
    new URL("../public/fonts/Heebo-VariableFont_wght.ttf", import.meta.url)
  ).then((r) => r.arrayBuffer());

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
          background: "#0f276c",
          color: "#fff",
          textAlign: "center",
          padding: 48,
          direction: "rtl",
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 800, marginBottom: 16, unicodeBidi: "plaintext", direction: "rtl" }}>
          ג׳אן מנופים
        </div>
        <div style={{ fontSize: 28, opacity: 0.95, unicodeBidi: "plaintext", direction: "rtl" }}>
          ‏שירותי מנוף הרמה עד ‏23 קומות, מקצועי ובטיחותי
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Heebo", data: fontData, style: "normal", weight: 600 },
      ],
    }
  );
}
