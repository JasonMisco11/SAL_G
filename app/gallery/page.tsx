import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | SAF Interior Limited - Our Work & Projects",
  description:
    "Browse our portfolio of stunning interior design projects in Accra, Ghana. View photos and videos of residential, commercial, and office transformations by SAF Interior Limited.",
  keywords: [
    "interior design gallery Ghana",
    "SAF Interior projects",
    "home design photos Accra",
    "office interior gallery",
    "interior design videos Ghana",
  ],
  openGraph: {
    title: "Gallery | SAF Interior Limited",
    description:
      "Explore our portfolio of beautiful interior transformations across Accra, Ghana.",
    type: "website",
    locale: "en_GH",
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-dark via-primary to-primary-muted py-20 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDE0VjZoLTJWMGgtMnYySDE2VjBINHYyaC0ydjZIMHYyaDJ2Nmgydi0yaDJ2Mmg2di0yaDZ2LTJoMnptLTIgMGgtMnYtMmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-[1440px] mx-auto relative z-10 text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-white/60 mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Project Gallery
            <br />
            <span className="text-white/80">& Showcase</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of beautifully designed spaces. From cozy
            homes to elegant offices, see how we transform interiors across
            Ghana.
          </p>
        </div>
      </section>

      {/* Gallery Content with Client-Side Tabs */}
      <GalleryClient />
    </>
  );
}
