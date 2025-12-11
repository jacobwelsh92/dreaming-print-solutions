import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  Download,
  Calculator,
  Shield,
  Settings,
  ArrowRight,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  resources,
  getFeaturedResources,
  getAllResourceCategories,
  categoryLabels,
  type Resource,
} from "@/data/resources";
import { siteConfig } from "@/data/site-config";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Resources | Enterprise Print Guides, IPP Procurement & Product Comparisons",
  description:
    "Free resources for enterprise print buyers. IPP procurement guides, HP printer comparisons, managed print services information, and security best practices for government and corporate buyers.",
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
  openGraph: {
    title: "Resources | Dreaming Print Solutions",
    description:
      "Free guides and resources for enterprise print procurement, IPP compliance, and HP printer selection.",
    url: `${siteConfig.url}/resources`,
  },
};

const iconMap = {
  "file-text": FileText,
  "book-open": BookOpen,
  "download": Download,
  "calculator": Calculator,
  "shield": Shield,
  "settings": Settings,
};

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = iconMap[resource.icon];

  return (
    <Link href={resource.url} className="group block">
      <Card className="h-full p-6 transition-all duration-200 hover:shadow-lg hover:border-ochre-200 group-focus-visible:ring-2 group-focus-visible:ring-ochre-500">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-ochre-50 flex items-center justify-center text-ochre-600 group-hover:bg-ochre-100 transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-charcoal-950 mb-1 group-hover:text-ochre-600 transition-colors">
              {resource.title}
            </h3>
            <p className="text-sm text-charcoal-600 line-clamp-2">
              {resource.description}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-xs">
                {resource.type}
              </Badge>
              {resource.downloadable && (
                <Badge variant="ochre" className="text-xs">
                  Download
                </Badge>
              )}
            </div>
          </div>
          <ArrowRight className="shrink-0 h-5 w-5 text-charcoal-300 group-hover:text-ochre-500 group-hover:translate-x-1 transition-all" />
        </div>
      </Card>
    </Link>
  );
}

export default function ResourcesPage() {
  const featuredResources = getFeaturedResources();
  const categories = getAllResourceCategories();

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ]}
      />

      {/* Hero */}
      <Section background="cream" size="sm" className="relative overflow-hidden">
        <DotPattern variant="sage" opacity={0.05} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-3xl">
            <SectionTitle as="h1">Resources & Guides</SectionTitle>
            <SectionDescription>
              Free guides and tools to help you navigate enterprise print
              procurement, understand IPP requirements, and select the right
              equipment for your organisation.
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <Section background="white" size="sm">
          <Container>
            <h2 className="font-display text-2xl text-charcoal-950 mb-6">
              Featured Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All Resources by Category */}
      {categories.map((category, index) => (
        <Section
          key={category}
          background={index % 2 === 0 ? "cream" : "white"}
          size="sm"
        >
          <Container>
            <h2 className="font-display text-xl text-charcoal-950 mb-6">
              {categoryLabels[category]}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources
                .filter((r) => r.category === category)
                .map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* CTA Section */}
      <Section background="charcoal" size="sm">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
              Need Personalised Guidance?
            </h2>
            <p className="text-charcoal-300 mb-6">
              Our team can provide tailored recommendations based on your
              specific requirements, volume, and procurement pathway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-ochre-500 text-white font-medium hover:bg-ochre-600 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent border border-charcoal-600 text-white font-medium hover:bg-charcoal-800 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
