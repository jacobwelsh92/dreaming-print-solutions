"use client";

/**
 * FAQ Preview Component
 * Shows featured FAQ items on the homepage with link to full FAQ page
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/faq";
import { DotPattern } from "@/components/ui/dot-pattern";
import { getFeaturedFAQs } from "@/data/faq";

export function FAQPreview() {
  const featuredFAQs = getFeaturedFAQs();

  return (
    <Section background="cream" className="relative overflow-hidden">
      <DotPattern variant="terracotta" opacity={0.03} />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - Header */}
          <div className="lg:col-span-2">
            <SectionHeader centered={false} className="sticky top-24">
              <SectionTitle>Common Questions</SectionTitle>
              <SectionDescription>
                Quick answers to help you understand enterprise printing, IPP
                procurement, and working with an indigenous-owned supplier.
              </SectionDescription>
              <Button asChild variant="outline" className="mt-6 group">
                <Link href="/faq" className="inline-flex items-center gap-2">
                  View All FAQs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </SectionHeader>
          </div>

          {/* Right column - FAQ Accordion */}
          <div className="lg:col-span-3">
            <FAQAccordion items={featuredFAQs} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
