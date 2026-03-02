import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { siteConfig } from "@/config/site";

// Static generation for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | SAF Interior Limited Blog`,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      locale: "en_GH",
      siteName: siteConfig.name,
      images: [
        {
          url: post.coverImage,
          width: 800,
          height: 450,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough related posts from same category, fill with other posts
  const additionalPosts =
    relatedPosts.length < 3
      ? blogPosts
          .filter(
            (p) =>
              p.slug !== post.slug &&
              !relatedPosts.find((rp) => rp.slug === p.slug),
          )
          .slice(0, 3 - relatedPosts.length)
      : [];

  const allRelated = [...relatedPosts, ...additionalPosts];

  // JSON-LD Schema for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://safinterior.com",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero / Cover Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[900px] mx-auto px-6 pb-12 w-full">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex items-center gap-2 text-sm text-white/60"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white/80 truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                </svg>
                {post.author}
              </span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <time dateTime={post.date} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                    clipRule="evenodd"
                  />
                </svg>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <div
            className="prose prose-lg max-w-none
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-5
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:text-gray-600
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:text-gray-600
              [&_li]:mb-2 [&_li]:leading-relaxed
              [&_strong]:text-gray-900
              [&_a]:text-[--color-primary] [&_a]:underline [&_a]:hover:text-[--color-primary-hover]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-[--color-primary-light] hover:text-[--color-primary] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {allRelated.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                Continue Reading
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-black">
                Related Articles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allRelated.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-[--color-primary] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <time dateTime={related.date}>
                        {new Date(related.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{related.readTime}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[--color-primary] transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[--color-primary-dark] to-[--color-primary]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Let SAF Interior Limited bring your interior design vision to life.
            Book a free consultation today.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-[--color-primary] px-8 py-3.5 font-semibold rounded-sm hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
