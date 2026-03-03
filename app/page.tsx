import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Lazy-load below-fold sections to reduce initial JS bundle
const About = dynamic(() => import("@/components/About"));
const Goals = dynamic(() => import("@/components/Goals"));
const Services = dynamic(() => import("@/components/Services"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const DesignProcess = dynamic(() => import("@/components/DesignProcess"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="w-full">
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
