import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import GalleryGrid from "./GalleryGrid";
import { createClient } from "@/utils/supabase/server";

export const revalidate = 3600; // revalidate every hour, or rely on on-demand revalidation

export default async function Gallery() {
  const supabase = await createClient();
  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .order("display_order", { ascending: true })
    .limit(6); // Only show top 6 on the homepage

  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-muted mb-4">
              Our Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black max-w-2xl mx-auto leading-tight">
              Inspiration Gallery
            </h3>
            <p className="text-lg text-gray-500 mt-6 max-w-xl mx-auto">
              Explore our portfolio of transformed spaces and let us inspire
              your next project.
            </p>
          </div>
        </ScrollReveal>

        <GalleryGrid images={images || []} />

        {/* View Full Gallery CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold rounded-md hover:bg-primary-hover transition-all"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
