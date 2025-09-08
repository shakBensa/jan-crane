import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ג'אן מנופים – מנוף הרמה בדרום";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const { width, height } = size;
  // Bundle font with the route (no network fetch)
  const fontData = await fetch(
      new URL("./opengraph-assets/Heebo-VariableFont_wght.ttf", import.meta.url)
  ).then((r) => r.arrayBuffer());
  return new ImageResponse(
    (
      <div
        dir="rtl"
        lang="he"
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#011659",
          color: "#fff",
          fontSize: 60,
          fontWeight: 800,
          direction: "rtl",
        }}
      >
        <div style={{ fontSize: 50, marginBottom: 16, unicodeBidi: "bidi-override", direction: "rtl" }}>ג'אן מנופים</div>
        <div style={{ fontSize: 26, opacity: 0.95, unicodeBidi: "bidi-override", direction: "rtl" }}>
          שירותי מנוף הרמה עד קומה 23
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
