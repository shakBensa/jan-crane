import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Geist, Geist_Mono, Varela_Round } from "next/font/google";
import "./globals.css";
import GAAnalytics from "./ga-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jan-manofim.co.il'),
  title: "ג'אן מנופים | מנוף הרמה באשדוד, אשקלון, יבנה וגן יבנה",
  description: "מנוף הרמה עד קומה 23. שירותי מנוף לרהיטים, חומרי בניין, פרגולות, פאנלים סולאריים. שירות מהיר ומקצועי בדרום.",
  alternates: {
  canonical: "https://jan-manofim.co.il/",
  languages: { "he-IL": "https://jan-manofim.co.il/" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://jan-manofim.co.il/",
    title: "ג'אן מנופים | שירותי מנוף בדרום",
    description: "שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי.",
    siteName: "ג'אן מנופים",
    locale: "he_IL",
    images: [
      {
        url: "https://jan-manofim.co.il/opengraph-image.png?v=6",
        width: 1200,
        height: 630,
        alt: "ג׳אן מנופים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ג'אן מנופים | שירותי מנוף בדרום",
    description: "מנוף הרמה עד קומה 23 באשדוד, אשקלון, יבנה וגן יבנה.",
    images: ["/twitter-image.png?v=6"],
  },
  keywords: [
    "מנוף הרמה",
    "מנוף אשדוד",
    "מנוף אשקלון",
    "מנוף יבנה",
    "מנוף גן יבנה",
    "הובלת רהיטים במנוף",
    "הרמת פאנלים סולאריים",
  ],
  formatDetection: { telephone: true, address: true, email: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#011659",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.className} antialiased`}
      >
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
            <Suspense fallback={null}>
              <GAAnalytics id={GA_MEASUREMENT_ID} />
            </Suspense>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
