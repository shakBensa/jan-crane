import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ג'אן מנופים – מנוף הרמה בדרום";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await fetch(
    new URL("./Heebo-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        dir="rtl"
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
          fontSize: 64,
          fontWeight: 800,
          direction: "rtl",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 54, marginBottom: 16 }}>ג'אן מנופים</div>
        <div style={{ fontSize: 28, opacity: 0.95 }}>
          מנוף הרמה באשדוד, אשקלון, יבנה וגן יבנה
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Heebo",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
