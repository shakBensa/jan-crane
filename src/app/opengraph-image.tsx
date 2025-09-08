// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ג׳אן מנופים – מנוף הרמה בדרום"; // note the Hebrew geresh U+05F3
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Put Heebo-Bold.ttf (or NotoSansHebrew-Bold.ttf) next to this file
  const heebo = await fetch(new URL("./Heebo-Bold.ttf", import.meta.url)).then(
    (r) => r.arrayBuffer()
  );

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
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
          color: "#fff",
          textAlign: "center",
          padding: 48,
          // global defaults (still apply BiDi per-node below)
          direction: "rtl",
        }}
      >
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            marginBottom: 16,
            unicodeBidi: "bidi-override", // <- force RTL order
            direction: "rtl",
          }}
        >
          ג׳אן מנופים
        </div>

        <div
          style={{
            fontSize: 28,
            opacity: 0.95,
            unicodeBidi: "bidi-override",
            direction: "rtl",
          }}
        >
          מנוף הרמה באשדוד, אשקלון, יבנה וגן יבנה
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Heebo", data: heebo, weight: 700, style: "normal" }],
    }
  );
}
