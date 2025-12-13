import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative bg-charcoal-950 overflow-hidden py-16 md:py-24">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-ochre-900/10 via-transparent to-transparent" />
        {/* Indigenous pattern overlay */}
        <div className="absolute inset-0 opacity-[0.07]">
          <Image
            src="/images/indigenous-pattern.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-charcoal-300">
              Everything you need to know about enterprise printing, government
              procurement, and working with an indigenous-owned supplier.
            </p>
          </div>
        </Container>
      </section>

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
                <h2 className="font-display text-2xl text-charcoal-950 mb-6 text-center md:text-left">
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
