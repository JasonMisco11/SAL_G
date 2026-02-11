import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAF Interior Limited | Transforming Spaces, Inspiring Lifestyles",
  description:
    "Professional interior design and furnishing company in Accra, Ghana. Specializing in residential, commercial, and corporate interior solutions with quality craftsmanship.",
  icons: {
    icon: siteConfig.logo,
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
