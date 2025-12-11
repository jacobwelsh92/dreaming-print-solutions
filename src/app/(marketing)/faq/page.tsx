import type { Metadata } from "next";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/faq";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  faqItems,
  getFAQsByCategory,
  getAllCategories,
  categoryLabels,
  type FAQCategory,
} from "@/data/faq";
import { siteConfig } from "@/data/site-config";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions About Enterprise Printing & IPP",
  description:
    "Find answers to common questions about enterprise HP printers, government procurement under the Indigenous Procurement Policy (IPP), managed print services, and working with Australia's first indigenous-owned enterprise printer dealer.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: "FAQ | Dreaming Print Solutions",
    description:
      "Common questions about enterprise printing, IPP procurement, and indigenous-owned business certification.",
    url: `${siteConfig.url}/faq`,
  },
};

export default function FAQPage() {
  const categories = getAllCategories();

  return (
    <>
      {/* Structured Data */}
      <FAQSchema faqs={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      {/* Hero */}
      <Section background="cream" size="sm" className="relative overflow-hidden">
        <DotPattern variant="ochre" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-3xl">
            <SectionTitle as="h1">Frequently Asked Questions</SectionTitle>
            <SectionDescription>
              Everything you need to know about enterprise printing, government
              procurement, and working with an indigenous-owned supplier.
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* FAQ Sections by Category */}
      {categories.map((category) => {
        const categoryFAQs = getFAQsByCategory(category);

        return (
          <Section
            key={category}
            background={category === "general" || category === "pricing" || category === "support" ? "white" : "cream"}
            size="sm"
            id={category}
          >
            <Container>
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl text-charcoal-950 mb-6">
                  {categoryLabels[category]}
                </h2>
                <FAQAccordion items={categoryFAQs} />
              </div>
            </Container>
          </Section>
        );
      })}

      {/* CTA Section */}
      <Section background="charcoal" size="sm">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-charcoal-300 mb-6">
              Our team is here to help. Whether you need advice on equipment
              selection, procurement pathways, or managed services, we&apos;re happy
              to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-ochre-500 text-white font-medium hover:bg-ochre-600 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent border border-charcoal-600 text-white font-medium hover:bg-charcoal-800 transition-colors"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
