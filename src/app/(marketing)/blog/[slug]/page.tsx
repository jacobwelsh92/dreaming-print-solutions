import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag, ChevronRight } from "lucide-react";
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
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  blogPosts,
  getBlogPostBySlug,
  getRecentPosts,
  categoryLabels,
  type BlogPost,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

// Category-specific gradient backgrounds
const categoryGradients: Record<string, string> = {
  "industry-insights": "from-sage-500/20 via-sage-400/10 to-cream-100",
  "government-procurement": "from-ochre-500/20 via-ochre-400/10 to-cream-100",
  "product-guides": "from-terracotta-500/20 via-terracotta-400/10 to-cream-100",
  "sustainability": "from-sage-600/20 via-sage-500/10 to-cream-100",
  "company-news": "from-charcoal-500/20 via-charcoal-400/10 to-cream-100",
};

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

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Article structured data
function ArticleSchema({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.featuredImage.url}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-square.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: categoryLabels[post.category],
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Process content to add IDs to headings for TOC
function processContent(content: string): string {
  return content.replace(/<h([23])>(.*?)<\/h\1>/g, (match, level, text) => {
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

  const processedContent = processContent(post.content);
  const gradient = categoryGradients[post.category] || categoryGradients["industry-insights"];
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient based on category */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-charcoal-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        <Container className="relative z-10 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-sm text-charcoal-600 mb-8">
            <Link href="/" className="hover:text-ochre-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-charcoal-400" />
            <Link href="/blog" className="hover:text-ochre-600 transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-charcoal-400" />
            <span className="text-charcoal-400 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            {/* Category badge */}
            <Badge variant="ochre" className="mb-6 shadow-sm">
              {categoryLabels[post.category]}
            </Badge>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-950 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-charcoal-600 mb-8 leading-relaxed max-w-3xl mx-auto md:mx-0">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <span className="text-2xl">{icon}</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-charcoal-900">{post.author.name}</p>
                  <p className="text-sm text-charcoal-500">{post.author.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-charcoal-200 hidden sm:block" />

              {/* Date & Reading time */}
              <div className="flex items-center gap-4 text-sm text-charcoal-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <Section background="white" size="lg">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - TOC & Share */}
            <aside className="lg:col-span-3 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Table of Contents */}
                <TableOfContents content={post.content} />

                {/* Social Share - Desktop */}
                <div className="hidden lg:block">
                  <SocialShare
                    url={articleUrl}
                    title={post.title}
                    description={post.excerpt}
                    variant="vertical"
                    className="p-4 bg-cream-50 rounded-xl border border-cream-200"
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 lg:order-1">
              {/* Article body */}
              <article
                className="prose prose-lg prose-charcoal max-w-none
                  prose-headings:font-display prose-headings:text-charcoal-950 prose-headings:scroll-mt-24
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-cream-200
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-charcoal-700 prose-p:leading-relaxed
                  prose-li:text-charcoal-700 prose-li:leading-relaxed
                  prose-a:text-ochre-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-charcoal-900 prose-strong:font-semibold
                  prose-ul:my-6 prose-ol:my-6
                  prose-table:my-8 prose-table:overflow-hidden prose-table:rounded-xl prose-table:border prose-table:border-cream-200
                  prose-th:bg-cream-50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-medium prose-th:text-charcoal-900
                  prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-cream-100
                  prose-blockquote:border-l-4 prose-blockquote:border-ochre-400 prose-blockquote:bg-ochre-50/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-code:bg-cream-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-ochre-700 prose-code:before:content-none prose-code:after:content-none"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Social Share - Mobile */}
              <div className="mt-12 pt-8 border-t border-cream-200 lg:hidden">
                <SocialShare
                  url={articleUrl}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-cream-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-charcoal-400" />
                  <span className="text-sm font-medium text-charcoal-600 mr-2">Tags:</span>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <AuthorBio author={post.author} className="mt-12" />

              {/* CTA Box */}
              <div className="mt-12 relative overflow-hidden bg-gradient-to-br from-ochre-500 to-ochre-600 rounded-2xl p-8 md:p-10 text-white text-center md:text-left">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id="cta-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="2" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl md:text-3xl mb-3">
                    Need Help With Your Print Environment?
                  </h3>
                  <p className="text-ochre-100 mb-6 max-w-2xl mx-auto md:mx-0">
                    Whether you&apos;re looking for new equipment, managed services, or
                    guidance on IPP procurement, our team is here to help government
                    and corporate clients find the right solution.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Button asChild variant="secondary" className="bg-white text-ochre-600 hover:bg-cream-100">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
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
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 mb-8 text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl text-charcoal-950">
                Continue Reading
              </h2>
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
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
