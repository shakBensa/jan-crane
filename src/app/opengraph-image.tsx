// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function OpengraphImage() {
  try {
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
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
          }}
        >
          <div style={{ fontSize: 54, fontWeight: 800, marginBottom: 16 }}>
            ג׳אן מנופים
          </div>
          <div style={{ fontSize: 28, opacity: 0.95 }}>
            שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי
          </div>
        </div>
      ),
      {
        ...size,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch {
    return new ImageResponse(
      (
        <div
          style={{
            width: size.width,
            height: size.height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0f276c",
            color: "#fff",
            fontSize: 64,
            fontWeight: 800,
          }}
        >
          ג׳אן מנופים
        </div>
      ),
      {
        ...size,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  }
}
