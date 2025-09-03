import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ג'אן מנופים – מנוף הרמה בדרום";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  const { width, height } = size;
  return new ImageResponse(
    (
      <div
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
        }}
      >
        <div style={{ fontSize: 50, marginBottom: 16 }}>ג'אן מנופים</div>
        <div style={{ fontSize: 26, opacity: 0.95 }}>
          שירותי מנוף הרמה עד קומה 23
        </div>
      </div>
    ),
    { ...size }
  );
}

