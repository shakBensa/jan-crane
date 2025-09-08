// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// (Optional) helps some crawlers treat it like a stable asset
export const alt = "ג׳אן מנופים – שירותי מנוף הרמה עד 23 קומות";

export default async function OpengraphImage() {
  let fontData: ArrayBuffer | undefined;
  try {
    // app/ and public/ are siblings → ../public/...
    fontData = await fetch(
      new URL(".fonts/Heebo-VariableFont_wght.ttf", import.meta.url)
    ).then((r) => {
      if (!r.ok) throw new Error(`Font fetch failed: ${r.status}`);
      return r.arrayBuffer();
    });
  } catch {
    // Continue without a custom font so we still emit a valid PNG
    fontData = undefined;
  }

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
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 800, marginBottom: 16 }}>
          ג׳אן מנופים
        </div>
        <div style={{ fontSize: 28, opacity: 0.95 }}>
          שירותי מנוף הרמה עד ‏23 קומות, מקצועי ובטיחותי
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Heebo", data: fontData, style: "normal", weight: 600 }]
        : [],
    }
  );
}
