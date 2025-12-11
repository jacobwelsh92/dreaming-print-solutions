import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/blog";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  blogPosts,
  getFeaturedPosts,
  getAllCategories,
  categoryLabels,
} from "@/data/blog";
import { siteConfig } from "@/data/site-config";

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

  // Get non-featured posts for the grid
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero */}
      <Section background="cream" size="sm" className="relative overflow-hidden">
        <DotPattern variant="sage" opacity={0.05} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-3xl">
            <SectionTitle as="h1">Insights & Resources</SectionTitle>
            <SectionDescription>
              Expert guidance on enterprise printing, government procurement,
              and making the most of your print environment.
            </SectionDescription>
          </SectionHeader>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="ochre" className="cursor-pointer">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-cream-100"
              >
                {categoryLabels[category]}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section background="white" size="sm">
          <Container>
            <h2 className="font-display text-2xl text-charcoal-950 mb-6">
              Featured Articles
            </h2>
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All Posts Grid */}
      <Section background="cream" size="md">
        <Container>
          <h2 className="font-display text-2xl text-charcoal-950 mb-6">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* More coming soon message */}
          <div className="mt-12 text-center">
            <p className="text-charcoal-500">
              More articles coming soon. Check back regularly for new insights.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="charcoal" size="sm">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
              Have Questions About Enterprise Print?
            </h2>
            <p className="text-charcoal-300 mb-6">
              Our team is ready to help you navigate printer procurement,
              managed services, and everything in between.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-ochre-500 text-white font-medium hover:bg-ochre-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
