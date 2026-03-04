import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://safinterior.com"),
  title: {
    default: "SAF Interior Limited | Transforming Spaces, Inspiring Lifestyles",
    template: "%s | SAF Interior Limited",
  },
  description:
    "Professional interior design and furnishing company in Accra, Ghana. Specializing in residential, commercial, and corporate interior solutions with quality craftsmanship.",
  keywords: [
    "interior design Ghana",
    "interior design Accra",
    "SAF Interior",
    "home design Ghana",
    "office interior Accra",
    "furniture design Ghana",
    "curtains and blinds Accra",
    "interior renovation Ghana",
    "residential interior design",
    "commercial interior design",
  ],
  authors: [{ name: "SAF Interior Limited" }],
  creator: "SAF Interior Limited",
  publisher: "SAF Interior Limited",
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: siteConfig.name,
    title: "SAF Interior Limited | Transforming Spaces, Inspiring Lifestyles",
    description:
      "Professional interior design and furnishing company in Accra, Ghana. Specializing in residential, commercial, and corporate interior solutions.",
    images: [
      {
        url: siteConfig.logo,
        width: 800,
        height: 600,
        alt: "SAF Interior Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAF Interior Limited | Transforming Spaces, Inspiring Lifestyles",
    description:
      "Professional interior design in Accra, Ghana. Residential, commercial, and corporate interior solutions.",
    images: [siteConfig.logo],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
