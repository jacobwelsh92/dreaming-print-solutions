import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Heart, Target, Linkedin, ArrowRight, Building2, Handshake } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DotPattern, ConcentricDotPattern } from "@/components/ui/dot-pattern";
import { AboutPageSchemas } from "@/components/seo/structured-data";
import { siteConfig } from "@/data/site-config";

// Team member data - photos go in /public/images/team/
const teamMembers = [
  {
    name: "Zac O'Brien",
    role: "Co-Founder & Director",
    image: "/images/team/zac-obrien.jpg",
    bio: "With extensive experience in enterprise sales and a passion for Indigenous business development, Zac leads client relationships and strategic growth initiatives.",
    linkedin: "#",
  },
  {
    name: "Ben Long",
    role: "Co-Founder & Director",
    image: "/images/team/ben-long.jpg",
    bio: "Ben brings deep technical expertise in print infrastructure and managed services, ensuring clients receive best-in-class solutions and ongoing support.",
    linkedin: "#",
  },
];

export const metadata: Metadata = {
  title: "About Us | Proudly Indigenous Owned & Operated",
  description:
    "Dreaming Print Solutions is a proudly owned and operated indigenous company delivering high quality copiers, printers, and MFDs. Affordable printing solutions Australia wide.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Dreaming Print Solutions | Proudly Indigenous Owned",
    description:
      "A proudly owned and operated indigenous company delivering high quality printing solutions Australia wide. Supply Nation certified.",
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
    icon: Handshake,
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

// What we supply - full capabilities
const capabilities = [
  "Copiers, Printers & MFDs",
  "A4 and A3 Multifunction Printers",
  "Production Printers",
  "Secure Printing Solutions",
  "Workflow Solutions",
  "Cost Allocation & Recovery Software",
  "Colour Management Systems",
  "Document Management Automation",
  "Cloud-Based Technology Solutions",
  "Business Solution Integration",
];

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <AboutPageSchemas />

      {/* Hero Section */}
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
              Proudly Indigenous Owned & Operated
            </h1>
            <p className="text-xl text-charcoal-300">
              Delivering high quality, affordable printing solutions Australia wide.
            </p>
          </div>
        </Container>
      </section>

      {/* About Us - Main Copy */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-6">
                About Us
              </h2>
              <div className="prose prose-lg text-charcoal-600 text-left">
                <p>
                  Here at Dreaming Print Solutions, we are a <strong>proudly owned and
                  operated indigenous company</strong> delivering high quality, Copiers,
                  Printers, and Multi-Functional Devices (MFDs), affordable printing
                  solutions Australia wide.
                </p>
                <p>
                  We supply HP machines suited to your volume and workflow, including
                  A4 and A3 multifunction printers and production printers along with
                  Secure Printing Solutions, Workflow Solutions, Cost Allocation, Cost
                  Recovery Software, Colour Management Systems, Document Management
                  Automation, Cloud-Based Technology Solutions, and full Business
                  Solution Integration.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl bg-cream-100 overflow-hidden">
              <ConcentricDotPattern variant="ochre" opacity={0.2} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl text-ochre-500 mb-2">100%</p>
                  <p className="text-charcoal-600 font-medium">Indigenous Owned</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Supporting Indigenous Business */}
      <Section background="charcoal" className="relative overflow-hidden">
        <ConcentricDotPattern variant="ochre" opacity={0.05} />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-ochre-500/20 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-ochre-400" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white">
                Supporting Indigenous Business
              </h2>
            </div>
            <p className="text-xl text-charcoal-300 mb-8 leading-relaxed">
              We believe there is an untapped market in the print industry for
              connecting with and supporting other indigenous owned and operated
              businesses across Australia.
            </p>
            <p className="text-lg text-charcoal-300 mb-8">
              While we serve all businesses Australia-wide, we are particularly
              passionate about supporting fellow Indigenous enterprises. When you
              choose Dreaming Print Solutions, you&apos;re not just getting premium
              printing equipment — you&apos;re supporting Indigenous economic empowerment
              and business growth.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild className="bg-ochre-500 hover:bg-ochre-600">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-charcoal-600 text-white hover:bg-charcoal-800">
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Supply */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>What We Supply</SectionTitle>
            <SectionDescription>
              Comprehensive printing solutions for businesses of all sizes.
            </SectionDescription>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-200"
              >
                <div className="h-2 w-2 rounded-full bg-ochre-500 shrink-0" />
                <span className="text-charcoal-700">{capability}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="white">
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
      <Section background="cream">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-6">
                Indigenous Procurement Policy
              </h2>
              <div className="prose prose-lg text-charcoal-600 text-left">
                <p>
                  Under the IPP, Commonwealth government buyers are required to
                  approach Indigenous businesses first for contracts valued between
                  $80,000 and $200,000 (GST inclusive), and for all work delivered in
                  remote areas regardless of value.
                </p>
                <p>
                  Since 2015, the IPP has generated over{" "}
                  <strong className="text-ochre-600">$12.9 billion</strong> in
                  contracts for Indigenous businesses across 83,500+ contracts.
                </p>
                <p>
                  As a Supply Nation certified business, we are verified and ready
                  to serve government departments seeking to meet their IPP targets.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-cream-200">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-cream-200">
                  <p className="text-4xl font-display text-ochre-500 mb-1">$80K - $200K</p>
                  <p className="text-charcoal-600">IPP Direct Sourcing Threshold</p>
                </div>
                <div className="text-center pb-6 border-b border-cream-200">
                  <p className="text-4xl font-display text-ochre-500 mb-1">$12.9B+</p>
                  <p className="text-charcoal-600">Contracted to Indigenous Business Since 2015</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display text-ochre-500 mb-1">83,500+</p>
                  <p className="text-charcoal-600">Contracts Awarded</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Our Team</SectionTitle>
            <SectionDescription>
              Meet the founders behind Dreaming Print Solutions.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-cream-100 to-cream-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-20 w-20 mx-auto rounded-full bg-white/80 flex items-center justify-center mb-3">
                          <Users className="h-10 w-10 text-charcoal-400" />
                        </div>
                        <p className="text-sm text-charcoal-500">Photo coming soon</p>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl text-charcoal-950">
                          {member.name}
                        </h3>
                        <p className="text-ochre-600 font-medium">{member.role}</p>
                      </div>
                      {member.linkedin && member.linkedin !== "#" && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-charcoal-400 hover:text-ochre-600 hover:bg-ochre-50 transition-colors"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="charcoal">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-charcoal-300 mb-8">
              Whether you&apos;re an Indigenous business, government department, or
              corporate organisation, we&apos;re here to help with your printing needs.
            </p>
            <Button asChild size="lg" className="bg-ochre-500 hover:bg-ochre-600">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
