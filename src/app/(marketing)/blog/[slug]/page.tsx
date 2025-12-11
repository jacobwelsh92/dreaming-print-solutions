import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog";
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

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // If not enough related by category, fill with recent posts
  const recentPosts =
    relatedPosts.length < 2
      ? getRecentPosts(3).filter((p) => p.id !== post.id && !relatedPosts.find((r) => r.id === p.id))
      : [];

  const suggestedPosts = [...relatedPosts, ...recentPosts].slice(0, 2);

  return (
    <>
      {/* Structured Data */}
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <Section background="cream" size="sm" className="relative overflow-hidden">
        <DotPattern variant="ochre" opacity={0.04} />
        <Container className="relative z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-charcoal-600 hover:text-ochre-600 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Category */}
          <Badge variant="ochre" className="mb-4">
            {categoryLabels[post.category]}
          </Badge>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal-950 mb-4 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime} min read
            </span>
            <span className="text-charcoal-400">|</span>
            <span>By {post.author.name}</span>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Article body */}
            <article
              className="prose prose-lg prose-charcoal max-w-none
                prose-headings:font-display prose-headings:text-charcoal-950
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-charcoal-700 prose-p:leading-relaxed
                prose-li:text-charcoal-700
                prose-a:text-ochre-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-charcoal-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-cream-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-charcoal-400" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-ochre-50 rounded-2xl">
              <h3 className="font-display text-xl text-charcoal-950 mb-2">
                Need Help With Your Print Environment?
              </h3>
              <p className="text-charcoal-600 mb-4">
                Whether you&apos;re looking for new equipment or managed services,
                we&apos;re here to help government and corporate clients find the
                right solution.
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      {suggestedPosts.length > 0 && (
        <Section background="cream" size="sm">
          <Container>
            <h2 className="font-display text-2xl text-charcoal-950 mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {suggestedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
