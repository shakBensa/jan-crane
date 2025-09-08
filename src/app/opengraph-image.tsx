// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ג׳אן מנופים – מנוף הרמה בדרום";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Load your font from app/fonts
  const heebo = await fetch(
    new URL("./fonts/Heebo-VariableFont_wght.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

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
          direction: "rtl",
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
      fonts: [
        {
          name: "Heebo",
          data: heebo,
          style: "normal",
          weight: 400, // variable font → you can set 100–900
        },
      ],
    }
  );
}
