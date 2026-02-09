import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Goals from "@/components/Goals";
import DesignProcess from "@/components/DesignProcess";
import Footer from "@/components/Footer";
import InfiniteScroll from "@/components/ui/InfiniteScroll";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Goals />
      <Services />
      <InfiniteScroll />
      <DesignProcess />
      <Contact />
      <Footer />
    </main>
  );
}
