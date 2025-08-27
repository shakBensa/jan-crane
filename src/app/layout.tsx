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
    title: "ג'אן מנופים – שירותי מנוף בדרום",
    description: "שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי.",
    siteName: "ג'אן מנופים",
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

// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["hebrew", "latin"], variable: "--font-heebo" });

const siteUrl = "https://jan-manofim.co.il";
const businessId = `${siteUrl}/#localbusiness`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ג׳אן מנופים | מנוף הרמה באשדוד, אשקלון, יבנה וגן יבנה",
    template: "%s | ג׳אן מנופים",
  },
  description:
    "מנוף הרמה עד קומה 23. שירותי מנוף לרהיטים, חומרי בניין, פרגולות ופאנלים סולאריים. שירות מהיר ומקצועי בדרום.",
  alternates: {
    canonical: "https://jan-manofim.co.il/",
    languages: {
      "he-IL": "https://jan-manofim.co.il/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    title: "ג׳אן מנופים – שירותי מנוף בדרום",
    description: "שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי.",
    siteName: "ג׳אן מנופים",
    locale: "he_IL",
    images: [
      {
        url: `${siteUrl}/1.jpg`,
        width: 1200,
        height: 630,
        alt: "ג׳אן מנופים – מנוף הרמה עד קומה 23",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};



// ---------- JSON-LD (global) ----------
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "ג'אן מנופים",
  inLanguage: "he-IL",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  url: siteUrl,
  name: "ג'אן מנופים",
  telephone: "+972-50-547-7789",
  inLanguage: "he-IL",
  priceRange: "₪₪",
  image: [`${siteUrl}/11.jpeg`],
  address: {
    "@type": "PostalAddress",
    addressLocality: "אשדוד",
    addressRegion: "מחוז הדרום",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.7874644,
    longitude: 34.6662908,
  },
  hasMap: "https://www.google.com/maps/place/31.7874644,34.6662908",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/16cAPR1D7K/",
    "https://www.instagram.com/jan.manofim.i",
    "https://www.tiktok.com/@jan_haramot",
  ],
  description:
    "שירותי מנוף הרמה עד 23 קומות באשדוד והסביבה. מתמחים בהרמת רהיטים, חומרי בניין, פאנלים סולאריים ועוד. שירות מקצועי ומהיר.",
  areaServed: [
    { "@type": "City", name: "אשדוד" },
    { "@type": "City", name: "יבנה" },
    { "@type": "City", name: "גן יבנה" },
    { "@type": "City", name: "אשקלון" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    reviewCount: 29,
    bestRating: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <Script id="jsonld-website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Script id="jsonld-localbusiness" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </head>
      <body className={`${heebo.variable} antialiased`}>{children}</body>
    </html>
  );
}
