"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { X, ZoomIn, ArrowRight } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = siteConfig.galleryImages.slice(0, 6);

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

        {/* CSS Columns Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <ScrollReveal
              key={idx}
              delay={
                idx % 3 === 0
                  ? "delay-0"
                  : idx % 3 === 1
                    ? "delay-100"
                    : "delay-200"
              }
            >
              <div
                className="relative group rounded-md overflow-hidden cursor-pointer mb-6 break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(img)}
              >
                <div
                  className={`relative w-full ${
                    idx % 4 === 0
                      ? "h-[300px]"
                      : idx % 4 === 1
                        ? "h-[450px]"
                        : idx % 4 === 2
                          ? "h-[250px]"
                          : "h-[400px]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Gallery Image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video sm:aspect-auto sm:h-[80vh] bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
