import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Heart,
  Users,
  Award,
  BarChart3,
  FileText,
  Target,
  Briefcase,
  Trophy,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionEyebrow,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DotPattern, ConcentricDotPattern } from "@/components/ui/dot-pattern";
import { siteConfig } from "@/data/site-config";
import {
  ippStats,
  corporateBuyerBenefits,
  tier1ContractorBenefits,
  ippPageMeta,
  socialImpactData,
} from "@/data/ipp-content";

export const metadata: Metadata = {
  title: ippPageMeta.corporateProcurement.title,
  description: ippPageMeta.corporateProcurement.description,
  keywords: [...ippPageMeta.corporateProcurement.keywords],
  alternates: {
    canonical: `${siteConfig.url}/corporate-procurement`,
  },
  openGraph: {
    title: ippPageMeta.corporateProcurement.title,
    description: ippPageMeta.corporateProcurement.description,
    url: `${siteConfig.url}/corporate-procurement`,
  },
};

const rapTypes = [
  {
    type: "Reflect",
    description: "Building awareness and exploring relationships",
    procurementFocus: "Beginning Indigenous supplier engagement",
  },
  {
    type: "Innovate",
    description: "Developing and piloting initiatives",
    procurementFocus: "Setting initial procurement targets",
  },
  {
    type: "Stretch",
    description: "Expanding and embedding reconciliation",
    procurementFocus: "Measurable procurement commitments",
  },
  {
    type: "Elevate",
    description: "Leading and advocating for change",
    procurementFocus: "Significant Indigenous supplier spend",
  },
];

const esgMetrics = [
  {
    metric: "Social Return on Investment",
    value: `${ippStats.socialReturnMultiplierDisplay} per $1`,
    description: "Verified multiplier effect on Indigenous communities",
  },
  {
    metric: "Indigenous Employment",
    value: `${ippStats.employmentMultiplierDisplay}`,
    description: "More likely to employ Indigenous Australians",
  },
  {
    metric: "Community Benefit",
    value: ippStats.annualSocialValue,
    description: "Annual social value generated nationally",
  },
];

const companiesWithRAPs = [
  { name: "Commonwealth Bank", type: "Elevate", spend: "$62M+ FY25" },
  { name: "BHP", type: "Elevate", spend: "$300M+ annually" },
  { name: "Rio Tinto", type: "Elevate", spend: "$725M (2023)" },
  { name: "IAG Insurance", type: "Stretch", spend: "$10M target" },
  { name: "NAB", type: "Stretch", spend: "$1B lending program" },
  { name: "Telstra", type: "Elevate", spend: "$15M/year" },
];

export default function CorporateProcurementPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="ochre" size="lg" className="relative overflow-hidden">
        <ConcentricDotPattern variant="terracotta" opacity={0.1} />
        <Container className="relative z-10">
          <div className="max-w-4xl text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                <Building2 className="h-4 w-4 text-white" />
                <span className="text-white/90 text-sm font-medium">For Corporate Buyers</span>
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Meet Your RAP Targets with{" "}
              <span className="text-ochre-100">Indigenous Print Solutions</span>
            </h1>
            <p className="text-xl text-ochre-100 mb-8 max-w-3xl mx-auto md:mx-0">
              Turn your print procurement into measurable social impact. Same HP
              enterprise quality. Tangible progress on your Reconciliation Action Plan.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-charcoal-900 hover:bg-charcoal-800 text-white">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Social Value Multiplier */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <SectionEyebrow className="text-ochre-600 mb-4">
                Measurable Impact
              </SectionEyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-6">
                The {ippStats.socialReturnMultiplierDisplay} Social Return
              </h2>
              <div className="prose prose-lg text-charcoal-600 text-left">
                <p>
                  Supply Nation research proves that for every dollar spent with an
                  Indigenous business, <strong className="text-ochre-600">{ippStats.socialReturnMultiplierDisplay} of
                  social value</strong> is generated.
                </p>
                <p>
                  This isn&apos;t charity — it&apos;s smart procurement. You get the same HP
                  enterprise products available anywhere, plus quantifiable social impact
                  for your ESG reporting.
                </p>
              </div>
              <div className="mt-8 p-4 bg-ochre-50 rounded-xl border border-ochre-200">
                <p className="text-sm text-charcoal-600">
                  <strong className="text-ochre-700">Example:</strong> A $100,000 print
                  procurement generates <strong>${(100000 * ippStats.socialReturnMultiplier).toLocaleString()}</strong> in
                  social value for Indigenous communities.
                </p>
              </div>
            </div>
            <div className="bg-charcoal-900 rounded-2xl p-8">
              <h3 className="font-display text-xl text-white mb-6">
                ESG Reporting Metrics
              </h3>
              <div className="space-y-6">
                {esgMetrics.map((metric) => (
                  <div key={metric.metric} className="flex justify-between items-start border-b border-charcoal-800 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="text-charcoal-300 text-sm">{metric.metric}</p>
                      <p className="text-xs text-charcoal-500 mt-1">{metric.description}</p>
                    </div>
                    <p className="font-display text-xl text-ochre-400">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* RAP Alignment */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionEyebrow className="text-ochre-600">
              Reconciliation Action Plans
            </SectionEyebrow>
            <SectionTitle>Where Does Your RAP Sit?</SectionTitle>
            <SectionDescription>
              Over 2,500 Australian organisations have RAPs. Wherever you are in your
              reconciliation journey, Indigenous procurement supports your commitments.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rapTypes.map((rap, index) => (
              <Card key={rap.type} className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  index === 0 ? "bg-sage-500" :
                  index === 1 ? "bg-terracotta-500" :
                  index === 2 ? "bg-ochre-500" :
                  "bg-charcoal-900"
                }`} />
                <CardContent className="pt-6">
                  <h3 className="font-display text-lg text-charcoal-950 mb-2">
                    {rap.type} RAP
                  </h3>
                  <p className="text-sm text-charcoal-600 mb-4">{rap.description}</p>
                  <div className="pt-4 border-t border-charcoal-100">
                    <p className="text-xs text-charcoal-500 uppercase tracking-wide mb-1">
                      Procurement Focus
                    </p>
                    <p className="text-sm text-ochre-600 font-medium">
                      {rap.procurementFocus}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal-600 mb-6">
              Don&apos;t have a RAP yet? Indigenous procurement is still valuable for
              ESG reporting, stakeholder expectations, and competitive advantage on
              government tenders.
            </p>
            <Button asChild variant="outline">
              <Link href="https://www.reconciliation.org.au" target="_blank" rel="noopener noreferrer">
                Learn About RAPs at Reconciliation Australia
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Benefits Grid */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Corporate Benefits</SectionTitle>
            <SectionDescription>
              Why leading Australian companies are prioritising Indigenous suppliers.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateBuyerBenefits.map((benefit) => {
              const iconMap: Record<string, typeof CheckCircle2> = {
                FileCheck: FileText,
                BarChart3: BarChart3,
                TrendingUp: TrendingUp,
                Trophy: Trophy,
                Heart: Heart,
                Users: Users,
              };
              const Icon = iconMap[benefit.icon] || CheckCircle2;

              return (
                <Card key={benefit.title}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-ochre-100 text-ochre-600 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg text-charcoal-950 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-charcoal-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* For Tier 1 Contractors */}
      <Section background="charcoal">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow className="text-ochre-400 mb-4">
                Government Contractors
              </SectionEyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                Strengthen Your Indigenous Participation Plan
              </h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-charcoal-300">
                  If you bid on government contracts over $7.5 million, you need Indigenous
                  businesses in your supply chain. The Mandatory Minimum Requirements (MMR)
                  require <strong className="text-ochre-400">4% Indigenous participation</strong> —
                  either workforce or supply chain.
                </p>
                <p className="text-charcoal-300">
                  Using Dreaming Print Solutions for your print and document needs
                  contributes directly to that 4% target, strengthening your tender
                  submissions.
                </p>
              </div>
            </div>
            <div className="bg-charcoal-900/50 border border-charcoal-800 rounded-2xl p-8">
              <h3 className="font-display text-xl text-white mb-6">
                How We Help Contractors
              </h3>
              <ul className="space-y-4">
                {tier1ContractorBenefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-ochre-500/20 text-ochre-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{benefit.title}</p>
                      <p className="text-sm text-charcoal-400">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Companies Leading the Way */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Companies Leading the Way</SectionTitle>
            <SectionDescription>
              Australia&apos;s largest companies have significant Indigenous procurement commitments.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companiesWithRAPs.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-xl p-6 border border-cream-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg text-charcoal-950">
                      {company.name}
                    </h3>
                    <span className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded ${
                      company.type === "Elevate" ? "bg-charcoal-900 text-white" :
                      "bg-ochre-100 text-ochre-700"
                    }`}>
                      {company.type} RAP
                    </span>
                  </div>
                  <Briefcase className="h-5 w-5 text-charcoal-400" />
                </div>
                <p className="text-ochre-600 font-display text-lg">{company.spend}</p>
                <p className="text-xs text-charcoal-500 mt-1">Indigenous procurement</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-charcoal-600">
              These companies are investing billions in Indigenous suppliers. Is your
              organisation keeping pace?
            </p>
          </div>
        </Container>
      </Section>

      {/* Impact Categories */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Where Your Dollars Go</SectionTitle>
            <SectionDescription>
              The social return from Indigenous procurement flows into multiple impact areas.
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {socialImpactData.impactCategories.map((category) => (
                <div
                  key={category.category}
                  className="bg-cream-50 rounded-xl p-4 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-ochre-100 mx-auto mb-3 flex items-center justify-center">
                    <span className="font-display text-ochre-600">
                      {Math.round(category.weight * 100)}%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-charcoal-950">
                    {category.category}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-charcoal-500 mt-6">
              Based on Supply Nation&apos;s &ldquo;Sleeping Giant Rises&rdquo; social impact research
            </p>
          </div>
        </Container>
      </Section>

      {/* Getting Started */}
      <Section background="cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeader centered>
              <SectionTitle>Getting Started is Simple</SectionTitle>
              <SectionDescription>
                Three steps to turn your print procurement into social impact.
              </SectionDescription>
            </SectionHeader>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-ochre-500 text-white flex items-center justify-center shrink-0 font-display text-xl">
                  1
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border border-cream-200">
                  <h3 className="font-display text-lg text-charcoal-950 mb-2">
                    Assess Your Print Needs
                  </h3>
                  <p className="text-charcoal-600">
                    What&apos;s your current print volume? What equipment do you need? We supply
                    HP enterprise MFPs from small office to production-class.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-ochre-500 text-white flex items-center justify-center shrink-0 font-display text-xl">
                  2
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border border-cream-200">
                  <h3 className="font-display text-lg text-charcoal-950 mb-2">
                    Get a Competitive Quote
                  </h3>
                  <p className="text-charcoal-600">
                    We&apos;ll provide pricing that demonstrates value for money — competitive
                    with any supplier, plus the added social value.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-ochre-500 text-white flex items-center justify-center shrink-0 font-display text-xl">
                  3
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border border-cream-200">
                  <h3 className="font-display text-lg text-charcoal-950 mb-2">
                    Report Your Impact
                  </h3>
                  <p className="text-charcoal-600">
                    Document your Indigenous procurement for RAP progress, ESG reporting,
                    and stakeholder communications. We can provide certification documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="charcoal">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Make Your Procurement Count?
            </h2>
            <p className="text-xl text-charcoal-300 mb-8">
              Turn routine print purchases into meaningful reconciliation progress.
              Contact us for a quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-ochre-500 hover:bg-ochre-600">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-charcoal-600 text-white hover:bg-charcoal-800">
                <Link href="/why-indigenous">Learn More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
