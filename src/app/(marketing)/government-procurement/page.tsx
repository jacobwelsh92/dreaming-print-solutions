import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Clock,
  Shield,
  Zap,
  Target,
  Award,
  AlertCircle,
  BookOpen,
  ExternalLink,
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
  policyMechanisms,
  governmentTargets,
  governmentBuyerBenefits,
  ippPageMeta,
  statePolicies,
} from "@/data/ipp-content";

export const metadata: Metadata = {
  title: ippPageMeta.governmentProcurement.title,
  description: ippPageMeta.governmentProcurement.description,
  keywords: [...ippPageMeta.governmentProcurement.keywords],
  alternates: {
    canonical: `${siteConfig.url}/government-procurement`,
  },
  openGraph: {
    title: ippPageMeta.governmentProcurement.title,
    description: ippPageMeta.governmentProcurement.description,
    url: `${siteConfig.url}/government-procurement`,
  },
};

const procurementPathways = [
  {
    icon: Zap,
    title: "Mandatory Set Aside",
    threshold: ippThresholds.msaRange,
    description: "You must give us the first opportunity to demonstrate value for money before approaching the open market.",
    action: "Search Supply Nation → Get Quote → Award if VFM met",
    highlight: true,
  },
  {
    icon: FileCheck,
    title: "Exemption 16",
    threshold: "Any value (SME)",
    description: "You can purchase directly from us without a tender process. Simple quote demonstrates value for money.",
    action: "Direct approach → Quote → Award",
    highlight: true,
  },
  {
    icon: Target,
    title: "MMR Compliance",
    threshold: "$7.5M+ contracts",
    description: "If you're a Tier 1 contractor, using us helps meet your 4% Indigenous supply chain target.",
    action: "Include in supply chain → Meet MMR targets",
    highlight: false,
  },
];

const complianceSteps = [
  {
    step: 1,
    title: "Search Supply Nation",
    description: "Use the Indigenous Business Direct database to find us",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Request a Quote",
    description: "Contact us for a competitive quote on your requirements",
    icon: FileCheck,
  },
  {
    step: 3,
    title: "Assess Value for Money",
    description: "Consider price, quality, capability, and social benefits",
    icon: CheckCircle2,
  },
  {
    step: 4,
    title: "Award & Document",
    description: "Award the contract and document your IPP compliance",
    icon: Award,
  },
];

export default function GovernmentProcurementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-charcoal-950 overflow-hidden py-20 md:py-28">
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
          <div className="max-w-4xl text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ochre-500/20 rounded-full">
                <Landmark className="h-4 w-4 text-ochre-400" />
                <span className="text-ochre-300 text-sm font-medium">For Government Buyers</span>
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Simplify IPP Compliance with{" "}
              <span className="text-ochre-400">Enterprise Print Solutions</span>
            </h1>
            <p className="text-xl text-charcoal-300 mb-8 max-w-3xl mx-auto md:mx-0">
              As an IPP-registered, Supply Nation certified Indigenous business, we make
              it easy for government buyers to meet procurement targets while getting
              enterprise-grade HP printers and MFDs.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-ochre-500 hover:bg-ochre-600">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-charcoal-600 text-white hover:bg-charcoal-800">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Thresholds */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-ochre-50 border-2 border-ochre-200 rounded-2xl p-6 text-center">
              <p className="font-display text-3xl md:text-4xl text-ochre-600 mb-2">
                {ippThresholds.msaRange}
              </p>
              <p className="text-charcoal-700 font-medium">Mandatory Set Aside</p>
              <p className="text-sm text-charcoal-500 mt-2">Must consider Indigenous suppliers first</p>
            </div>
            <div className="bg-charcoal-900 rounded-2xl p-6 text-center">
              <p className="font-display text-3xl md:text-4xl text-ochre-400 mb-2">
                Any Value
              </p>
              <p className="text-white font-medium">Exemption 16</p>
              <p className="text-sm text-charcoal-400 mt-2">Direct procurement with Indigenous SMEs</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-2xl p-6 text-center">
              <p className="font-display text-3xl md:text-4xl text-charcoal-700 mb-2">
                {ippThresholds.mmrThresholdDisplay}+
              </p>
              <p className="text-charcoal-700 font-medium">MMR Threshold</p>
              <p className="text-sm text-charcoal-500 mt-2">4% Indigenous participation required</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Your Procurement Pathways */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionEyebrow className="text-ochre-600">
              How to Work With Us
            </SectionEyebrow>
            <SectionTitle>Your Procurement Pathways</SectionTitle>
            <SectionDescription>
              Multiple options for compliant Indigenous procurement, depending on your contract value.
            </SectionDescription>
          </SectionHeader>

          <div className="grid lg:grid-cols-3 gap-8">
            {procurementPathways.map((pathway) => (
              <Card
                key={pathway.title}
                className={`overflow-hidden ${pathway.highlight ? "ring-2 ring-ochre-500" : ""}`}
              >
                <CardContent className="p-0">
                  <div className={`p-6 ${pathway.highlight ? "bg-ochre-500" : "bg-charcoal-100"}`}>
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${
                      pathway.highlight ? "bg-white/20" : "bg-white"
                    }`}>
                      <pathway.icon className={`h-6 w-6 ${pathway.highlight ? "text-white" : "text-ochre-600"}`} />
                    </div>
                    <h3 className={`font-display text-xl mb-1 ${pathway.highlight ? "text-white" : "text-charcoal-950"}`}>
                      {pathway.title}
                    </h3>
                    <p className={`text-sm font-mono ${pathway.highlight ? "text-ochre-100" : "text-charcoal-600"}`}>
                      {pathway.threshold}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-charcoal-600 mb-4">{pathway.description}</p>
                    <div className="bg-cream-50 rounded-lg p-3">
                      <p className="text-sm text-charcoal-500">
                        <strong className="text-charcoal-700">Process:</strong> {pathway.action}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mandatory Set Aside Deep Dive */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <SectionEyebrow className="text-ochre-600 mb-4">
                {ippThresholds.msaRange} Contracts
              </SectionEyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-6">
                Mandatory Set Aside (MSA)
              </h2>
              <div className="prose prose-lg text-charcoal-600 text-left">
                <p>{policyMechanisms.mandatorySetAside.fullDescription}</p>
              </div>
              <div className="mt-8 p-4 bg-ochre-50 border-l-4 border-ochre-500 rounded-r-lg">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-ochre-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ochre-800">This is not optional</p>
                    <p className="text-sm text-ochre-700">
                      MSA compliance is mandatory under the Commonwealth Procurement Rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cream-50 rounded-2xl p-8 border border-cream-200">
              <h3 className="font-display text-lg text-charcoal-950 mb-6">
                Compliance Steps
              </h3>
              <div className="space-y-6">
                {complianceSteps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-ochre-500 text-white flex items-center justify-center shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <p className="font-medium text-charcoal-950">{step.title}</p>
                      <p className="text-sm text-charcoal-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Exemption 16 */}
      <Section background="charcoal">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-ochre-500/20 mb-6">
                <Zap className="h-8 w-8 text-ochre-400" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Exemption 16: The Game Changer
              </h2>
              <p className="text-xl text-charcoal-300">
                Direct procurement from Indigenous SMEs at <strong className="text-ochre-400">any contract value</strong>.
              </p>
            </div>

            <div className="bg-charcoal-900/50 border border-charcoal-800 rounded-2xl p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-charcoal-300">{policyMechanisms.exemption16.fullDescription}</p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-charcoal-800/50 rounded-xl p-6">
                  <h4 className="font-display text-lg text-white mb-3">What This Means</h4>
                  <ul className="space-y-2 text-charcoal-300">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>Skip the formal tender process</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>Simple quote demonstrates VFM</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>Faster procurement timeline</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>Reduced administrative burden</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-ochre-500/20 rounded-xl p-6 border border-ochre-500/30">
                  <h4 className="font-display text-lg text-ochre-300 mb-3">Requirements</h4>
                  <ul className="space-y-2 text-charcoal-300">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>Supplier is an SME (&lt;200 employees)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>50%+ Indigenous owned</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>Value for money demonstrated</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-ochre-400 shrink-0" />
                      <span>Appropriate sign-off authority</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Government Targets */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Increasing Government Targets</SectionTitle>
            <SectionDescription>
              Indigenous procurement targets are rising every year. The pressure to find
              qualified Indigenous suppliers will only grow.
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden">
              <div className="grid grid-cols-6 gap-0">
                {governmentTargets.map((target, index) => (
                  <div
                    key={target.year}
                    className={`p-4 text-center border-r border-cream-200 last:border-r-0 ${
                      index === 1 ? "bg-ochre-50" : ""
                    }`}
                  >
                    <p className="text-sm text-charcoal-500 mb-1">{target.year}</p>
                    <p className={`font-display text-2xl ${index === 1 ? "text-ochre-600" : "text-charcoal-700"}`}>
                      {target.display}
                    </p>
                    {index === 1 && (
                      <p className="text-xs text-ochre-600 mt-1">Current</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-charcoal-600 mt-6">
              By 2030, the Commonwealth target will reach <strong className="text-ochre-600">4%</strong> of
              total contract value. Start building your Indigenous supplier relationships now.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Why Government Buyers Choose Us</SectionTitle>
            <SectionDescription>
              We make IPP compliance straightforward while delivering enterprise-grade solutions.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentBuyerBenefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6 text-center md:text-left">
                  <div className="h-12 w-12 rounded-xl bg-ochre-100 text-ochre-600 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg text-charcoal-950 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* State Policies */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>State Government Policies</SectionTitle>
            <SectionDescription>
              Indigenous procurement policies exist at all levels of government.
            </SectionDescription>
          </SectionHeader>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-cream-200">
              <thead>
                <tr className="border-b border-cream-200">
                  <th className="text-left p-4 font-display text-charcoal-950">Jurisdiction</th>
                  <th className="text-left p-4 font-display text-charcoal-950">Policy</th>
                  <th className="text-left p-4 font-display text-charcoal-950">Target</th>
                  <th className="text-left p-4 font-display text-charcoal-950">Key Threshold</th>
                </tr>
              </thead>
              <tbody>
                {statePolicies.map((policy, index) => (
                  <tr key={policy.state} className={index % 2 === 0 ? "bg-white" : "bg-cream-50"}>
                    <td className="p-4 font-medium text-charcoal-950">{policy.state}</td>
                    <td className="p-4 text-charcoal-600">{policy.policyName}</td>
                    <td className="p-4 text-ochre-600 font-medium">{policy.target}</td>
                    <td className="p-4 text-charcoal-500 text-sm">{policy.keyThreshold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Resources */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Official Resources</SectionTitle>
            <SectionDescription>
              Learn more about Indigenous procurement requirements from official sources.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://www.niaa.gov.au/indigenous-procurement-policy-ipp"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-50 rounded-xl p-6 border border-cream-200 hover:border-ochre-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Landmark className="h-8 w-8 text-ochre-600" />
                <ExternalLink className="h-4 w-4 text-charcoal-400 group-hover:text-ochre-600" />
              </div>
              <h3 className="font-display text-lg text-charcoal-950 mb-2">
                NIAA - IPP Overview
              </h3>
              <p className="text-sm text-charcoal-600">
                Official Indigenous Procurement Policy guidance from NIAA.
              </p>
            </a>
            <a
              href="https://supplynation.org.au"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-50 rounded-xl p-6 border border-cream-200 hover:border-ochre-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="h-8 w-8 text-ochre-600" />
                <ExternalLink className="h-4 w-4 text-charcoal-400 group-hover:text-ochre-600" />
              </div>
              <h3 className="font-display text-lg text-charcoal-950 mb-2">
                Supply Nation
              </h3>
              <p className="text-sm text-charcoal-600">
                Australia&apos;s largest directory of verified Indigenous businesses.
              </p>
            </a>
            <a
              href="https://www.finance.gov.au/government/procurement"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-50 rounded-xl p-6 border border-cream-200 hover:border-ochre-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="h-8 w-8 text-ochre-600" />
                <ExternalLink className="h-4 w-4 text-charcoal-400 group-hover:text-ochre-600" />
              </div>
              <h3 className="font-display text-lg text-charcoal-950 mb-2">
                Dept. of Finance
              </h3>
              <p className="text-sm text-charcoal-600">
                Commonwealth Procurement Rules and exemptions.
              </p>
            </a>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="charcoal">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Simplify Your IPP Compliance?
            </h2>
            <p className="text-xl text-charcoal-300 mb-8">
              Get a quote for enterprise HP printers from a verified Indigenous supplier.
              Same products. Simpler procurement. Greater impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-ochre-500 hover:bg-ochre-600">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-charcoal-600 text-white hover:bg-charcoal-800">
                <Link href="/why-indigenous">Learn Why Indigenous</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
