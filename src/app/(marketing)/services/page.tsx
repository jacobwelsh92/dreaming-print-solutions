import type { Metadata } from "next";
import Link from "next/link";
import {
  Printer,
  Settings,
  FileText,
  Shield,
  BarChart3,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed Print Services, Document Management, and Enterprise Solutions from Dreaming Print Solutions. Reduce costs and improve productivity.",
};

const services = [
  {
    icon: Printer,
    title: "Hardware Sales & Leasing",
    description:
      "Premium HP enterprise printers and multifunction devices for any scale. Purchase or flexible leasing options available.",
    features: [
      "A3 and A4 colour MFDs",
      "Enterprise-grade reliability",
      "Flexible financing options",
      "Volume-based pricing",
    ],
  },
  {
    icon: Settings,
    title: "Managed Print Services",
    description:
      "Complete print management including monitoring, maintenance, supplies, and support. Predictable costs with maximum uptime.",
    features: [
      "Automatic supply replenishment",
      "Proactive maintenance",
      "Usage monitoring & reporting",
      "Single point of contact",
    ],
  },
  {
    icon: FileText,
    title: "Document Solutions",
    description:
      "Streamline document workflows with scanning, digital archiving, and secure document management tailored to your needs.",
    features: [
      "Scan-to-cloud workflows",
      "Digital document archiving",
      "OCR & searchable PDFs",
      "Secure document routing",
    ],
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Cost Reduction",
    description:
      "Reduce print costs by up to 30% through optimised fleet management and efficient workflows.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description:
      "Enterprise-grade security features including secure print release and document encryption.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Local Australian support with rapid response times and expert technical assistance.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" className="relative overflow-hidden">
        <DotPattern variant="sage" opacity={0.06} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-3xl">
            <SectionTitle as="h1">
              Enterprise Print Services Built for Government & Corporate
            </SectionTitle>
            <SectionDescription>
              From hardware procurement to fully managed print services, we
              deliver comprehensive solutions designed for enterprise
              environments.
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardContent className="flex flex-col h-full">
                  <div className="h-14 w-14 rounded-xl bg-ochre-100 text-ochre-600 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7" />
                  </div>

                  <h2 className="font-display text-2xl text-charcoal-950 mb-3">
                    {service.title}
                  </h2>

                  <p className="text-charcoal-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 flex-grow">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-charcoal-700"
                      >
                        <CheckCircle className="h-4 w-4 text-sage-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Why Managed Print Services?</SectionTitle>
            <SectionDescription>
              Transform your print environment from a cost centre to a strategic
              asset.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-white shadow-card text-ochre-600 flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl text-charcoal-950 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>How It Works</SectionTitle>
            <SectionDescription>
              A simple process to transform your print environment.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "We analyse your current print environment" },
              { step: "2", title: "Proposal", desc: "Tailored solution designed for your needs" },
              { step: "3", title: "Implementation", desc: "Seamless deployment with minimal disruption" },
              { step: "4", title: "Support", desc: "Ongoing management and optimisation" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="h-12 w-12 mx-auto rounded-full bg-ochre-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-lg text-charcoal-950 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="charcoal">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Optimise Your Print Environment?
            </h2>
            <p className="text-lg text-charcoal-300 mb-8 max-w-2xl mx-auto">
              Contact us for a free assessment of your current print environment
              and discover how we can help reduce costs while improving
              productivity.
            </p>
            <Button
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              asChild
            >
              <Link href="/contact">Request a Free Assessment</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
