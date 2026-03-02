import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogCategories } from "@/data/blog-posts";
import { siteConfig } from "@/config/site";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title:
    "Interior Design Blog | Tips, Trends & Ideas | SAF Interior Limited Accra",
  description:
    "Read expert interior design tips, latest trends, and inspiration for homes and offices in Accra, Ghana. Curtains, blinds, furniture, lighting, and more.",
  keywords: [
    "interior design blog Ghana",
    "home decor tips Accra",
    "curtain ideas Ghana",
    "furniture trends Ghana",
    "office fit-out tips Accra",
    "interior decorators blog",
  ],
  openGraph: {
    title: "Interior Design Blog | SAF Interior Limited",
    description:
      "Expert interior design insights, trends, and tips for homes and offices across Accra, Ghana.",
    type: "website",
    locale: "en_GH",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Blog | SAF Interior Limited",
    description:
      "Expert interior design insights for Accra, Ghana. Curtains, blinds, furniture, lighting & more.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const categories = getBlogCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[--color-primary-dark] via-[--color-primary] to-[--color-primary-muted] py-20 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDE0VjZoLTJWMGgtMnYySDE2VjBINHYyaC0ydjZIMHYyaDJ2Nmgydi0yaDJ2Mmg2di0yaDZ2LTJoMnptLTIgMGgtMnYtMmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-[1440px] mx-auto relative z-10 text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-white/60 mb-4">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Interior Design Insights
            <br />
            <span className="text-white/80">& Expert Tips</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover the latest trends, expert advice, and inspiration for
            creating beautiful spaces in Ghana. From curtains to ceilings, we
            cover it all.
          </p>
        </div>
      </section>

      {/* Blog List with Client-Side Filtering */}
      <BlogListClient posts={blogPosts} categories={categories} />
    </>
  );
}
