import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Goals from "@/components/Goals";
import DesignProcess from "@/components/DesignProcess";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

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
