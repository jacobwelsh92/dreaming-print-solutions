import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Newspaper } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  blogPosts,
  getFeaturedPosts,
  getAllCategories,
  categoryLabels,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Blog | Enterprise Print Insights & Government Procurement Guides",
  description:
    "Expert insights on enterprise printing, government procurement under IPP, HP printer guides, and managed print services. Resources for Australian government and corporate buyers.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog | Dreaming Print Solutions",
    description:
      "Expert insights on enterprise printing, IPP procurement guides, and HP printer comparisons.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  // Get all posts sorted by date
  const allPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Get non-featured posts for the grid
  const regularPosts = allPosts.filter((post) => !post.featured);

  // Stats for the hero
  const totalArticles = blogPosts.length;
  const uniqueCategories = categories.length;

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="blog-hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-ochre-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-hero-pattern)" />
          </svg>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ochre-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-500/10 rounded-full blur-[100px]" />

        <Container className="relative z-10 py-20 md:py-28">
          <div className="max-w-4xl text-center md:text-left">
            {/* Eyebrow */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-ochre-500/20 flex items-center justify-center">
                <Newspaper className="h-4 w-4 text-ochre-400" />
              </div>
              <span className="text-ochre-400 font-medium text-sm tracking-wide uppercase">
                Insights & Resources
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Expert Guidance for{" "}
              <span className="text-ochre-400">Enterprise Print</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-charcoal-300 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
              In-depth articles on HP enterprise printers, government procurement
              under IPP, managed print services, and optimising your print environment.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-10">
              <div>
                <p className="text-3xl font-display text-white">{totalArticles}</p>
                <p className="text-sm text-charcoal-400">Articles</p>
              </div>
              <div className="h-12 w-px bg-charcoal-700" />
              <div>
                <p className="text-3xl font-display text-white">{uniqueCategories}</p>
                <p className="text-sm text-charcoal-400">Categories</p>
              </div>
              <div className="h-12 w-px bg-charcoal-700" />
              <div>
                <p className="text-3xl font-display text-white">Free</p>
                <p className="text-sm text-charcoal-400">All Resources</p>
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="ochre"
                className="cursor-pointer bg-ochre-500 hover:bg-ochre-600 transition-colors"
              >
                All Posts
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer border-charcoal-600 text-charcoal-300 hover:bg-charcoal-800 hover:text-white transition-colors"
                >
                  {categoryLabels[category]}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section background="white" size="lg">
          <Container>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-10 text-center md:text-left">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-charcoal-950 mb-2">
                  Featured Articles
                </h2>
                <p className="text-charcoal-600">
                  Our most popular guides and insights
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All Posts Grid */}
      <Section background="cream" size="lg">
        <Container>
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-10 text-center md:text-left">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-charcoal-950 mb-2">
                All Articles
              </h2>
              <p className="text-charcoal-600">
                Browse our complete collection of insights
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" size="md">
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-br from-ochre-500 to-ochre-600 rounded-3xl p-10 md:p-16">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="cta-blog-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="2" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-blog-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/20 mb-6">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Have Questions About Enterprise Print?
              </h2>
              <p className="text-lg text-ochre-100 mb-8">
                Our team is ready to help you navigate printer procurement,
                managed services, and everything in between.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-ochre-600 hover:bg-cream-100"
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/resources">View Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
