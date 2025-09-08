// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  let fontData: ArrayBuffer | undefined;
  try {
    fontData = await fetch(
      new URL("./opengraph-assets/Heebo-VariableFont_wght.ttf", import.meta.url)
    ).then((r) => {
      if (!r.ok) throw new Error(`Font fetch failed: ${r.status}`);
      return r.arrayBuffer();
    });
  } catch {
    fontData = undefined; // continue without custom font
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
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            marginBottom: 16,
            unicodeBidi: "bidi-override",
            direction: "rtl",
          }}
        >
          ג׳אן מנופים
        </div>
        <div
          style={{ fontSize: 28, opacity: 0.95, unicodeBidi: "bidi-override", direction: "rtl" }}
        >
          שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי
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
