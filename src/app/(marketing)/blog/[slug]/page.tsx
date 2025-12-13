import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag, ChevronRight, BookOpen, Share2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BlogCard,
  ReadingProgress,
  SocialShare,
  TableOfContents,
  AuthorBio,
} from "@/components/blog";
import {
  blogPosts,
  getBlogPostBySlug,
  getRecentPosts,
  categoryLabels,
  type BlogPost,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

const categoryIcons: Record<string, string> = {
  "industry-insights": "📊",
  "government-procurement": "🏛️",
  "product-guides": "🖨️",
  "sustainability": "🌿",
  "company-news": "📰",
};

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const publishedTime = new Date(post.publishedAt).toISOString();
  const modifiedTime = post.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : publishedTime;

  return {
    title: `${post.title} | Dreaming Print Solutions`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [post.author.name],
      section: categoryLabels[post.category],
      tags: post.tags,
      images: [
        {
          url: `${siteConfig.url}${post.featuredImage.url}`,
          width: 1200,
          height: 630,
          alt: post.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteConfig.url}${post.featuredImage.url}`],
    },
    other: {
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "article:author": post.author.name,
      "article:section": categoryLabels[post.category],
      "article:tag": post.tags.join(", "),
    },
  };
}

// Comprehensive Article structured data
function ArticleSchema({ post }: { post: BlogPost }) {
  const wordCount = post.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const publishedDate = new Date(post.publishedAt).toISOString();
  const modifiedDate = post.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : publishedDate;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/blog/${post.slug}#article`,
    isPartOf: {
      "@id": `${siteConfig.url}/blog/${post.slug}#webpage`,
    },
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${post.featuredImage.url}`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: post.author.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-square.png`,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-square.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}#webpage`,
    },
    keywords: post.tags.join(", "),
    articleSection: categoryLabels[post.category],
    wordCount: wordCount,
    timeRequired: `PT${post.readingTime}M`,
    inLanguage: "en-AU",
    copyrightYear: new Date(post.publishedAt).getFullYear(),
    copyrightHolder: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article .lead", "article h2"],
    },
  };

  // WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/blog/${post.slug}#webpage`,
    url: `${siteConfig.url}/blog/${post.slug}`,
    name: post.title,
    description: post.excerpt,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${post.featuredImage.url}`,
    },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${siteConfig.url}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${siteConfig.url}/blog/${post.slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}

// Process content to add IDs to headings for TOC
function processContent(content: string): string {
  return content.replace(/<h([234])>(.*?)<\/h\1>/g, (match, level, text) => {
    const id = text
      .toLowerCase()
      .replace(/<[^>]*>/g, "") // Remove any HTML tags
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
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

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const updatedDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const processedContent = processContent(post.content);
  const icon = categoryIcons[post.category] || "📄";

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // If not enough related by category, fill with recent posts
  const recentPosts =
    relatedPosts.length < 2
      ? getRecentPosts(3).filter(
          (p) => p.id !== post.id && !relatedPosts.find((r) => r.id === p.id)
        )
      : [];

  const suggestedPosts = [...relatedPosts, ...recentPosts].slice(0, 2);
  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      {/* Reading Progress */}
      <ReadingProgress />

      {/* Structured Data */}
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero Section - Premium Design */}
      <section className="relative bg-charcoal-950 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-ochre-900/10 via-transparent to-transparent" />

        {/* Indigenous pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]">
          <Image
            src="/images/indigenous-pattern.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ochre-500/5 to-transparent" />

        <Container className="relative z-10 py-16 md:py-20 lg:py-24">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-charcoal-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-ochre-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-charcoal-600" />
            <Link href="/blog" className="hover:text-ochre-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-charcoal-600" />
            <span className="text-charcoal-500 truncate max-w-[200px] md:max-w-[300px]">
              {post.title}
            </span>
          </nav>

          <div className="max-w-4xl">
            {/* Category & Reading time row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge
                variant="ochre"
                className="shadow-lg shadow-ochre-500/20"
              >
                <span className="mr-1.5">{icon}</span>
                {categoryLabels[post.category]}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-charcoal-400">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white mb-6 leading-[1.1] text-balance">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-charcoal-300 mb-8 leading-relaxed max-w-3xl text-pretty">
              {post.excerpt}
            </p>

            {/* Author & Date meta */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-charcoal-800">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-ochre-400 to-ochre-600 flex items-center justify-center shadow-lg shadow-ochre-500/20">
                  <span className="text-xl">{icon}</span>
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{post.author.name}</p>
                  <p className="text-xs text-charcoal-400">{post.author.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-charcoal-700 hidden sm:block" />

              {/* Date info */}
              <div className="flex flex-col gap-0.5 text-sm">
                <span className="flex items-center gap-1.5 text-charcoal-300">
                  <Calendar className="h-4 w-4" />
                  Published {formattedDate}
                </span>
                {updatedDate && updatedDate !== formattedDate && (
                  <span className="text-charcoal-500 text-xs">
                    Updated {updatedDate}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Article Content */}
      <Section background="white" className="py-12 md:py-16 lg:py-20">
        <Container className="max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-20">
            {/* Sidebar - Left on desktop */}
            <aside className="hidden lg:block lg:w-64 xl:w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <TableOfContents content={post.content} />

                {/* Social Share */}
                <div className="p-5 bg-cream-50 rounded-2xl border border-cream-200">
                  <SocialShare
                    url={articleUrl}
                    title={post.title}
                    description={post.excerpt}
                    variant="vertical"
                  />
                </div>

                {/* Quick Stats */}
                <div className="p-5 bg-cream-50 rounded-2xl border border-cream-200">
                  <h4 className="text-xs uppercase tracking-wider text-charcoal-500 font-medium mb-3">
                    Article Info
                  </h4>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-charcoal-500">Reading time</dt>
                      <dd className="font-medium text-charcoal-900">{post.readingTime} min</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-charcoal-500">Category</dt>
                      <dd className="font-medium text-charcoal-900">{categoryLabels[post.category]}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-charcoal-500">Published</dt>
                      <dd className="font-medium text-charcoal-900">
                        {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0 lg:max-w-3xl">
              {/* Mobile TOC - Collapsible */}
              <div className="lg:hidden mb-8">
                <TableOfContents content={post.content} />
              </div>

              {/* Article body with premium prose styling */}
              <article
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tags Section */}
              <div className="mt-12 pt-8 border-t border-cream-200">
                <div className="flex items-start gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-600 mt-1">
                    <Tag className="h-4 w-4" />
                    Tags:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:bg-ochre-50 hover:border-ochre-200 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Social Share */}
              <div className="mt-8 pt-8 border-t border-cream-200 lg:hidden">
                <SocialShare
                  url={articleUrl}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>

              {/* Author Bio */}
              <AuthorBio author={post.author} className="mt-12" />

              {/* CTA Box */}
              <div className="mt-12 relative overflow-hidden bg-gradient-to-br from-ochre-500 via-ochre-600 to-terracotta-600 rounded-2xl p-8 md:p-10 text-white">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id="cta-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-dots)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-ochre-200" />
                    <span className="text-sm font-medium text-ochre-200 uppercase tracking-wide">
                      Get Expert Help
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-3">
                    Need Help With Your Print Environment?
                  </h3>
                  <p className="text-ochre-100 mb-6 max-w-2xl leading-relaxed">
                    Whether you&apos;re looking for new equipment, managed services, or
                    guidance on IPP procurement, our team is here to help government
                    and corporate clients find the right solution.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="bg-white text-ochre-600 hover:bg-cream-100 shadow-lg shadow-ochre-900/20">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                      <Link href="/products">View Products</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      {suggestedPosts.length > 0 && (
        <Section background="cream" size="md">
          <Container>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-charcoal-950 mb-2">
                  Continue Reading
                </h2>
                <p className="text-charcoal-600">
                  More insights on enterprise printing and procurement
                </p>
              </div>
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {suggestedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
