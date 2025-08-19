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

export const metadata = {
  metadataBase: new URL('https://jan-manofim.co.il'),
  title: "ג׳אן מנופים – מנוף הרמה באשדוד, אשקלון, יבנה וגן יבנה",
  description: "מנוף הרמה עד קומה 23. שירותי מנוף לרהיטים, חומרי בניין, פרגולות, פאנלים סולאריים. שירות מהיר ומקצועי בדרום.",
  alternates: { canonical: "https://jan-manofim.co.il/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://jan-manofim.co.il/",
    title: "ג׳אן מנופים – שירותי מנוף בדרום",
    description: "שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי.",
    siteName: "ג׳אן מנופים",
    locale: "he_IL",
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
