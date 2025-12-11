import type { Metadata } from "next";
import { Award, Users, Heart, Target } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { DotPattern, ConcentricDotPattern } from "@/components/ui/dot-pattern";
import { AboutPageSchemas } from "@/components/seo/structured-data";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Us | Australia's First Indigenous Printer Dealer",
  description:
    "Meet Australia's first indigenous-owned enterprise printer dealer. Founded by Zac O'Brien & Ben Long. Supply Nation certified. Serving government since 2024.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Dreaming Print Solutions | Indigenous-Owned Enterprise",
    description:
      "Australia's first indigenous-owned enterprise printer dealer. 100% Indigenous owned. Supply Nation certified. IPP registered.",
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    icon: Heart,
    title: "Cultural Pride",
    description:
      "We honour our Indigenous heritage in everything we do, bringing traditional values of community and connection to modern business.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We deliver enterprise-grade solutions with the highest standards of quality, reliability, and customer service.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships with our clients, understanding their needs and growing together.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We operate with transparency and honesty, ensuring our clients can trust us completely.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <AboutPageSchemas />

      {/* Hero Section */}
      <Section background="cream" className="relative overflow-hidden">
        <DotPattern variant="ochre" opacity={0.06} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-3xl">
            <SectionTitle as="h1">
              Proudly Indigenous-Owned. Truly Enterprise-Ready.
            </SectionTitle>
            <SectionDescription>
              Dreaming Print Solutions represents a pioneering step in Australian
              business — the nation&apos;s first indigenous-owned enterprise printer
              and MFD hardware dealer.
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Our Story */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-charcoal-600">
                <p>
                  Founded by Zac O&apos;Brien and Ben Long, Dreaming Print Solutions
                  was born from a vision to create meaningful opportunities for
                  Indigenous Australians in the enterprise technology space.
                </p>
                <p>
                  We identified a unique gap in the market — while Indigenous
                  businesses thrive in print services like design and brochures,
                  no Indigenous-owned company was providing enterprise printer
                  hardware to government and corporate Australia.
                </p>
                <p>
                  Through the Indigenous Procurement Policy (IPP), we&apos;re now
                  positioned to serve Commonwealth government buyers who are
                  required to approach Indigenous businesses first for contracts
                  in our range.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl bg-cream-100 overflow-hidden">
              <ConcentricDotPattern variant="ochre" opacity={0.2} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl text-ochre-500 mb-2">100%</p>
                  <p className="text-charcoal-600">Indigenous Owned</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Our Values</SectionTitle>
            <SectionDescription>
              The principles that guide everything we do, honouring our heritage
              while delivering enterprise excellence.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent>
                  <div className="h-12 w-12 mx-auto rounded-xl bg-ochre-100 text-ochre-600 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg text-charcoal-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* IPP Advantage */}
      <Section background="charcoal" className="relative overflow-hidden">
        <ConcentricDotPattern variant="ochre" opacity={0.05} />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Indigenous Procurement Policy Advantage
            </h2>
            <p className="text-lg text-charcoal-300 mb-8">
              Under the IPP, Commonwealth government buyers are legally required to
              approach Indigenous businesses first for contracts valued between
              $80,000 and $200,000 (GST inclusive), and for all work delivered in
              remote areas regardless of value.
            </p>
            <p className="text-lg text-charcoal-300">
              Since 2015, the IPP has generated over{" "}
              <span className="text-ochre-400 font-semibold">$12.9 billion</span> in
              contracts for Indigenous businesses across 83,500+ contracts.
            </p>
          </div>
        </Container>
      </Section>

      {/* Team Section Placeholder */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Our Team</SectionTitle>
            <SectionDescription>
              Meet the people behind Dreaming Print Solutions.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "Zac O'Brien", role: "Co-Founder" },
              { name: "Ben Long", role: "Co-Founder" },
            ].map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent>
                  <div className="h-24 w-24 mx-auto rounded-full bg-cream-200 flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-charcoal-400" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-950">
                    {member.name}
                  </h3>
                  <p className="text-charcoal-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
