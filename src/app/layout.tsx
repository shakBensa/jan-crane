import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "דף הבית - ג׳אן מנופים | שירותי מנוף באזור אשדוד, הדרום והמרכז",
  description: "שירותי מנוף הרמה מקצועיים באשדוד והדרום. הרמת רהיטים, חומרי בניין, פאנלים סולאריים ועוד. שירות 24/7 ⭐ 050-5477789",
  keywords: "מנוף הרמה, מנוף אשדוד, הרמת רהיטים, מנוף יבנה, מנוף אשקלון, הרמה לגובה",
  openGraph: {
    title: "ג׳אן מנופים - מנוף הרמה עד 23 קומות",
    description: "שירותי מנוף הרמה מקצועיים באשדוד והדרום",
    type: "website",
    locale: "he_IL",
    url: "https://jan-manofim.co.il/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
