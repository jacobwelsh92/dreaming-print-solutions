/**
 * =================================================================
 * PRINT ASSESSMENT PAGE
 * =================================================================
 *
 * AI-powered free print assessment tool that provides personalized
 * recommendations based on business needs.
 *
 * Design principles:
 * - PRESENCE: This is a premium lead-gen tool, treat it as such
 * - BREATHING ROOM: Generous spacing, nothing cramped
 * - DELIGHT: Subtle animations that feel earned
 * - TRUST: Professional, reassuring, enterprise-ready
 */

import type { Metadata } from "next";
import { AssessmentWizard } from "@/components/assessment";
import { siteConfig } from "@/data/site-config";
import { AssessmentHero } from "@/components/assessment/AssessmentHero";

export const metadata: Metadata = {
  title: "Free Print Assessment | AI-Powered Analysis",
  description:
    "Get a free, AI-powered print assessment for your organization. Receive personalized recommendations, cost analysis, and a professional PDF report. Takes only 5 minutes.",
  keywords: [
    "print assessment",
    "printer cost analysis",
    "MFP recommendations",
    "enterprise printer assessment",
    "print cost calculator",
    "HP printer assessment",
    "government print assessment",
    "corporate print solutions",
  ],
  alternates: {
    canonical: `${siteConfig.url}/print-assessment`,
  },
  openGraph: {
    title: "Free Print Assessment | Dreaming Print Solutions",
    description:
      "Get a free, AI-powered print assessment. Personalized recommendations, cost analysis, and professional PDF report in 5 minutes.",
    url: `${siteConfig.url}/print-assessment`,
  },
};

// JSON-LD structured data for the assessment tool
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Dreaming Print Solutions - Free Print Assessment",
  description:
    "AI-powered print assessment tool providing personalized printer recommendations and cost analysis",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
  },
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function PrintAssessmentPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Premium Hero */}
      <AssessmentHero />

      {/* Assessment Wizard */}
      <section className="relative bg-cream-50 py-16 md:py-24">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(212 204 190 / 0.4) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AssessmentWizard />
        </div>
      </section>
    </>
  );
}
