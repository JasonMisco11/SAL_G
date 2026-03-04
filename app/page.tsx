import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { siteConfig } from "@/config/site";

// Lazy-load below-fold sections to reduce initial JS bundle
const About = dynamic(() => import("@/components/About"));
const Goals = dynamic(() => import("@/components/Goals"));
const Services = dynamic(() => import("@/components/Services"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const DesignProcess = dynamic(() => import("@/components/DesignProcess"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

// JSON-LD structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://safinterior.com/#organization",
      name: siteConfig.name,
      url: "https://safinterior.com",
      logo: {
        "@type": "ImageObject",
        url: "https://safinterior.com/SA.png",
      },
      description: siteConfig.description,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        email: siteConfig.contact.email,
        areaServed: "GH",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://safinterior.com/#business",
      name: siteConfig.name,
      description: siteConfig.overview,
      url: "https://safinterior.com",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      image: "https://safinterior.com/SA.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 5.6037,
        longitude: -0.187,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://safinterior.com/#website",
      url: "https://safinterior.com",
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": "https://safinterior.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://safinterior.com/#webpage",
      url: "https://safinterior.com",
      name: "SAF Interior Limited | Transforming Spaces, Inspiring Lifestyles",
      description: siteConfig.description,
      isPartOf: {
        "@id": "https://safinterior.com/#website",
      },
      about: {
        "@id": "https://safinterior.com/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="w-full">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <About />
      <Goals />
      <Services />
      <Gallery />
      <DesignProcess />
      <Contact />
      <Footer />
    </main>
  );
}
