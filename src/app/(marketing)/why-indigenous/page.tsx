import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Building2,
  Landmark,
  BarChart3,
  Award,
  Shield,
  Heart,
  Target,
  Zap,
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
  ippThresholds,
  governmentBuyerBenefits,
  corporateBuyerBenefits,
  ippPageMeta,
  valueForMoneyFactors,
} from "@/data/ipp-content";

export const metadata: Metadata = {
  title: ippPageMeta.whyIndigenous.title,
  description: ippPageMeta.whyIndigenous.description,
  keywords: [...ippPageMeta.whyIndigenous.keywords],
  alternates: {
    canonical: `${siteConfig.url}/why-indigenous`,
  },
  openGraph: {
    title: ippPageMeta.whyIndigenous.title,
    description: ippPageMeta.whyIndigenous.description,
    url: `${siteConfig.url}/why-indigenous`,
  },
};

// Icon mapping for benefits
const iconMap = {
  CheckCircle: CheckCircle2,
  Target: Target,
  Zap: Zap,
  Clock: TrendingUp,
  Shield: Shield,
  Award: Award,
  FileCheck: CheckCircle2,
  BarChart3: BarChart3,
  TrendingUp: TrendingUp,
  Trophy: Award,
  Heart: Heart,
  Users: Users,
} as const;

const comparisonPoints = [
  {
    aspect: "Product Quality",
    standard: "HP Enterprise printers",
    indigenous: "HP Enterprise printers",
    note: "Identical products",
  },
  {
    aspect: "Warranties",
    standard: "Standard HP warranty",
    indigenous: "Standard HP warranty",
    note: "Same coverage",
  },
  {
    aspect: "Support",
    standard: "Professional support",
    indigenous: "Professional support",
    note: "Same service level",
  },
  {
    aspect: "Pricing",
    standard: "Competitive pricing",
    indigenous: "Competitive pricing",
    note: "Value for money",
  },
  {
    aspect: "Social Value Generated",
    standard: "$0",
    indigenous: "$4.41 per $1 spent",
    note: "The difference",
    highlight: true,
  },
  {
    aspect: "IPP Compliance",
    standard: "No contribution",
    indigenous: "Full compliance",
    note: "Meets targets",
    highlight: true,
  },
  {
    aspect: "RAP Progress",
    standard: "No contribution",
    indigenous: "Counts toward targets",
    note: "Measurable impact",
    highlight: true,
  },
];

const impactStats = [
  {
    value: ippStats.socialReturnMultiplierDisplay,
    label: "Social return for every $1 spent",
    description: "Research-verified multiplier effect",
  },
  {
    value: ippStats.employmentMultiplierDisplay,
    label: "More likely to employ Indigenous people",
    description: "Indigenous businesses create Indigenous jobs",
  },
  {
    value: ippStats.annualSocialValue,
    label: "Annual social value generated",
    description: "By Indigenous businesses across Australia",
  },
  {
    value: ippStats.totalContractValue,
    label: "IPP contracts since 2015",
    description: "Growing Indigenous business sector",
  },
];

export default function WhyIndigenousPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="cream" size="lg" className="relative overflow-hidden">
        <DotPattern variant="ochre" opacity={0.06} />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <SectionEyebrow className="text-ochre-600 mb-4">
              The Indigenous Advantage
            </SectionEyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-950 mb-6">
              Same Enterprise Quality.{" "}
              <span className="text-ochre-600">Greater Social Impact.</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-3xl">
              When you purchase from Dreaming Print Solutions, you get the same HP
              enterprise products available from any dealer. The difference? Every
              dollar generates {ippStats.socialReturnMultiplierDisplay} of social
              value for Indigenous communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-ochre-500 hover:bg-ochre-600">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/government-procurement">
                  Government Buyers
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/corporate-procurement">
                  Corporate Buyers
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* The $4.41 Multiplier */}
      <Section background="charcoal" className="relative overflow-hidden">
        <ConcentricDotPattern variant="ochre" opacity={0.05} />
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-ochre-500/20 mb-6">
              <TrendingUp className="h-10 w-10 text-ochre-400" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              The {ippStats.socialReturnMultiplierDisplay} Social Return
            </h2>
            <p className="text-xl text-charcoal-300 max-w-3xl mx-auto">
              Supply Nation research proves that for every $1 spent with an Indigenous
              business, {ippStats.socialReturnMultiplierDisplay} of social value is
              generated. That means your dollar is working 4 times harder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-charcoal-900/50 border border-charcoal-800 rounded-2xl p-6 text-center"
              >
                <p className="font-display text-3xl md:text-4xl text-ochre-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-white font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-charcoal-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What Changes When You Buy From Us */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>What Changes When You Buy From Us?</SectionTitle>
            <SectionDescription>
              The products and service are identical. The impact is transformational.
            </SectionDescription>
          </SectionHeader>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-charcoal-200">
                  <th className="text-left p-4 font-display text-charcoal-950">Aspect</th>
                  <th className="text-left p-4 font-display text-charcoal-600">Standard Supplier</th>
                  <th className="text-left p-4 font-display text-ochre-600">Dreaming Print Solutions</th>
                  <th className="text-left p-4 font-display text-charcoal-400">Note</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr
                    key={point.aspect}
                    className={`border-b border-charcoal-100 ${
                      point.highlight ? "bg-ochre-50" : index % 2 === 0 ? "bg-white" : "bg-cream-50"
                    }`}
                  >
                    <td className="p-4 font-medium text-charcoal-950">{point.aspect}</td>
                    <td className="p-4 text-charcoal-600">{point.standard}</td>
                    <td className={`p-4 ${point.highlight ? "text-ochre-600 font-medium" : "text-charcoal-600"}`}>
                      {point.indigenous}
                    </td>
                    <td className="p-4 text-sm text-charcoal-400">{point.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-ochre-50 rounded-2xl border border-ochre-200">
            <p className="text-center text-charcoal-700">
              <strong className="text-ochre-700">Bottom line:</strong> You get the same
              HP enterprise quality. Your organisation gets IPP/RAP compliance.
              Indigenous communities get economic opportunity. Everyone wins.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits by Buyer Type */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Benefits for Your Organisation</SectionTitle>
            <SectionDescription>
              Whether you&apos;re in government, corporate, or contracting, there are
              specific advantages to working with us.
            </SectionDescription>
          </SectionHeader>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Government Benefits */}
            <Card className="overflow-hidden">
              <div className="bg-charcoal-900 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-ochre-500/20 flex items-center justify-center">
                    <Landmark className="h-6 w-6 text-ochre-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white">Government Buyers</h3>
                    <p className="text-charcoal-400 text-sm">IPP compliance made simple</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {governmentBuyerBenefits.slice(0, 4).map((benefit) => {
                    const Icon = iconMap[benefit.icon as keyof typeof iconMap] || CheckCircle2;
                    return (
                      <li key={benefit.title} className="flex gap-3">
                        <div className="h-8 w-8 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-charcoal-950">{benefit.title}</p>
                          <p className="text-sm text-charcoal-600">{benefit.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 pt-6 border-t border-charcoal-100">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/government-procurement">
                      Learn About Government Procurement
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Corporate Benefits */}
            <Card className="overflow-hidden">
              <div className="bg-ochre-600 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white">Corporate Buyers</h3>
                    <p className="text-ochre-100 text-sm">Meet your RAP targets</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {corporateBuyerBenefits.slice(0, 4).map((benefit) => {
                    const Icon = iconMap[benefit.icon as keyof typeof iconMap] || CheckCircle2;
                    return (
                      <li key={benefit.title} className="flex gap-3">
                        <div className="h-8 w-8 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-charcoal-950">{benefit.title}</p>
                          <p className="text-sm text-charcoal-600">{benefit.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 pt-6 border-t border-charcoal-100">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/corporate-procurement">
                      Learn About Corporate Procurement
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Value for Money Explained */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow className="text-ochre-600 mb-4">
                Addressing the Cost Question
              </SectionEyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-6">
                &ldquo;Value for Money&rdquo; Isn&apos;t Just About Price
              </h2>
              <div className="prose prose-lg text-charcoal-600">
                <p>
                  A common misconception is that government procurement must always
                  choose the cheapest option. This isn&apos;t true.
                </p>
                <p>
                  The Commonwealth Procurement Rules explicitly allow consideration
                  of multiple factors when assessing value for money:
                </p>
              </div>
            </div>
            <div className="bg-cream-50 rounded-2xl p-8 border border-cream-200">
              <h3 className="font-display text-lg text-charcoal-950 mb-6">
                Official Value for Money Factors
              </h3>
              <ul className="space-y-4">
                {valueForMoneyFactors.map((item, index) => (
                  <li key={item.factor} className="flex gap-3">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      index === 3 ? "bg-ochre-500 text-white" : "bg-charcoal-200 text-charcoal-600"
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className={`font-medium ${index === 3 ? "text-ochre-600" : "text-charcoal-950"}`}>
                        {item.factor}
                      </p>
                      <p className="text-sm text-charcoal-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-cream-300">
                <p className="text-sm text-charcoal-600">
                  <strong className="text-ochre-600">Note:</strong> Factor #4 explicitly
                  includes Indigenous employment and ownership as valid considerations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Supply Nation Certification */}
      <Section background="cream">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-ochre-100 mb-6">
              <Award className="h-8 w-8 text-ochre-600" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-4">
              Supply Nation Certified
            </h2>
            <p className="text-xl text-charcoal-600 mb-8">
              Our Indigenous ownership has been independently verified by Supply Nation,
              Australia&apos;s leading directory of Indigenous businesses. This certification
              gives you confidence that your purchase genuinely supports Indigenous business.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-cream-200">
                <p className="font-display text-2xl text-ochre-500 mb-2">Verified</p>
                <p className="text-charcoal-600 text-sm">Indigenous ownership independently audited</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-cream-200">
                <p className="font-display text-2xl text-ochre-500 mb-2">Listed</p>
                <p className="text-charcoal-600 text-sm">On Indigenous Business Direct database</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-cream-200">
                <p className="font-display text-2xl text-ochre-500 mb-2">Compliant</p>
                <p className="text-charcoal-600 text-sm">Meets all IPP requirements</p>
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
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-charcoal-300 mb-8">
              Get the same HP enterprise quality while generating real social value.
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
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
