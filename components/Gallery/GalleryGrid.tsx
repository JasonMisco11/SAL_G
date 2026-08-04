"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface GalleryGridProps {
  images: { id: string; url: string; alt_text: string }[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <ScrollReveal
            key={img.id}
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
              onClick={() => setSelectedImage(img.url)}
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
                  src={img.url}
                  alt={img.alt_text || `Gallery Image ${idx + 1}`}
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors"
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
    </>
  );
}
