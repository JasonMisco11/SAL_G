"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { X, ZoomIn, ImageIcon, Video, Play } from "lucide-react";

const galleryVideos = [
  {
    title: "Modern Interior Design",
    thumbnail:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1773225091/Screenshot_2026-03-11_102944_nocunk.jpg",
    videoUrl:
      "https://res.cloudinary.com/dshe5kflb/video/upload/v1773222097/IMG_4633_ccrppw.mp4",
    description: "Timeless Elegance: Interior Design Tour.",
    description:
      "Watch the complete transformation of a modern living room in Accra.",
  },
  {
    title: "Luxury Office Interior Design",
    thumbnail:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1773225397/Screenshot_2026-03-11_103512_et5pgi.jpg",
    videoUrl:
      "https://res.cloudinary.com/dshe5kflb/video/upload/v1773222067/IMG_4632_t7ehrm.mp4",
    description:
      "Watch the complete transformation of a modern living room in Accra.",
  },
];

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<"pictures" | "videos">("pictures");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof galleryVideos)[0] | null
  >(null);

  const images = siteConfig.galleryImages;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-14">
          <button
            onClick={() => setActiveTab("pictures")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "pictures"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Pictures
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "videos"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary"
            }`}
          >
            <Video className="w-4 h-4" />
            Videos
          </button>
        </div>

        {/* Pictures Tab */}
        {activeTab === "pictures" && (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative group rounded-md overflow-hidden cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(img)}
              >
                <div
                  className={`relative w-full ${
                    idx % 5 === 0
                      ? "h-[350px]"
                      : idx % 5 === 1
                        ? "h-[450px]"
                        : idx % 5 === 2
                          ? "h-[280px]"
                          : idx % 5 === 3
                            ? "h-[400px]"
                            : "h-[320px]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Interior Design Project ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-80" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryVideos.map((video, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play
                        className="w-7 h-7 text-primary ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Lightbox */}
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
            className="relative w-full max-w-5xl aspect-video sm:aspect-auto sm:h-[80vh]"
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

      {/* Video Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
