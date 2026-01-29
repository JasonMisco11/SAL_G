import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InfiniteScroll from "@/components/ui/InfiniteScroll";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <InfiniteScroll /> 
      <Contact />
    </main>
  );
}


