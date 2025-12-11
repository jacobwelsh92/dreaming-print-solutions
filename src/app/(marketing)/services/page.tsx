import type { Metadata } from "next";
import Link from "next/link";
import {
  Settings,
  FileText,
  Shield,
  BarChart3,
  Headphones,
  CheckCircle,
  ArrowRight,
  Zap,
  Cloud,
  Lock,
  RefreshCw,
  TrendingDown,
  Clock,
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
import { DotPattern, ConcentricDotPattern } from "@/components/ui/dot-pattern";
import { ServicesPageSchemas } from "@/components/seo/structured-data";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Managed Print Services & Document Management",
  description:
    "Managed print services and document management solutions for Australian businesses. Reduce costs, improve efficiency, and streamline workflows. Proudly indigenous owned.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Managed Print Services | Dreaming Print Solutions",
    description:
      "Managed print services and document management for Australian businesses. Indigenous-owned, serving businesses nationwide.",
    url: `${siteConfig.url}/services`,
  },
};

// MPS Features
const mpsFeatures = [
  {
    icon: RefreshCw,
    title: "Automatic Supply Replenishment",
    description: "Never run out of toner. We monitor levels and ship supplies before you need them.",
  },
  {
    icon: Settings,
    title: "Proactive Maintenance",
    description: "Scheduled servicing and rapid response to issues keeps your fleet running smoothly.",
  },
  {
    icon: BarChart3,
    title: "Usage Monitoring & Reporting",
    description: "Full visibility into print volumes, costs, and trends with regular reporting.",
  },
  {
    icon: Headphones,
    title: "Single Point of Contact",
    description: "One provider, one invoice, one contact for all your printing needs.",
  },
  {
    icon: Lock,
    title: "Secure Printing Solutions",
    description: "Enterprise-grade security with pull printing and document encryption.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Management",
    description: "Remote monitoring and management of your entire print fleet from anywhere.",
  },
];

// Document Management Features
const docFeatures = [
  {
    icon: Cloud,
    title: "Scan-to-Cloud Workflows",
    description: "Send scanned documents directly to cloud storage, email, or business applications.",
  },
  {
    icon: FileText,
    title: "Digital Document Archiving",
    description: "Organise, store, and retrieve documents efficiently with smart indexing.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate document routing, approvals, and processing to save time.",
  },
  {
    icon: Shield,
    title: "Secure Document Handling",
    description: "Control access, track changes, and maintain compliance with audit trails.",
  },
];

const benefits = [
  {
    stat: "30%",
    label: "Average Cost Reduction",
    description: "Through optimised fleet management and efficient workflows",
  },
  {
    stat: "99%",
    label: "Device Uptime",
    description: "Proactive maintenance keeps your printers running",
  },
  {
    stat: "24hr",
    label: "Response Time",
    description: "Fast support when you need it most",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data */}
      <ServicesPageSchemas />

      {/* Hero */}
      <Section background="cream" className="relative overflow-hidden">
        <DotPattern variant="sage" opacity={0.06} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-3xl">
            <SectionTitle as="h1">Our Services</SectionTitle>
            <SectionDescription>
              Comprehensive managed print services and document management solutions
              for Australian businesses. Reduce costs, improve efficiency, and
              streamline your document workflows.
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Managed Print Services */}
      <Section background="white" id="managed-print-services">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-ochre-100 text-ochre-600 flex items-center justify-center">
                  <Settings className="h-6 w-6" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal-950">
                  Managed Print Services
                </h2>
              </div>
              <p className="text-lg text-charcoal-600 mb-6">
                Complete print management including monitoring, maintenance, supplies,
                and support. Predictable costs with maximum uptime — we take care of
                everything so you can focus on your business.
              </p>
              <p className="text-charcoal-600 mb-8">
                Our managed print services transform your print environment from a
                cost centre into a strategic asset. With proactive monitoring,
                automatic supply replenishment, and expert support, you&apos;ll experience
                fewer interruptions and lower overall costs.
              </p>
              <Button asChild>
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Request a Free Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {mpsFeatures.map((feature) => (
                <Card key={feature.title} className="h-full">
                  <CardContent className="p-5">
                    <feature.icon className="h-6 w-6 text-ochre-500 mb-3" />
                    <h3 className="font-medium text-charcoal-950 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-charcoal-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Stats */}
      <Section background="charcoal" size="sm" className="relative overflow-hidden">
        <ConcentricDotPattern variant="ochre" opacity={0.05} />
        <Container className="relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <p className="text-5xl font-display text-ochre-400 mb-2">
                  {benefit.stat}
                </p>
                <p className="text-white font-medium mb-1">{benefit.label}</p>
                <p className="text-sm text-charcoal-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Document Management */}
      <Section background="cream" id="document-management">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-sage-100 text-sage-600 flex items-center justify-center">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal-950">
                  Document Management
                </h2>
              </div>
              <p className="text-lg text-charcoal-600 mb-6">
                Streamline document workflows with scanning, digital archiving, and
                secure document management tailored to your business needs.
              </p>
              <p className="text-charcoal-600 mb-8">
                Document management is the process by which control is applied to the
                lifecycle of documents within your business — from creation and review
                to publication, storage, retrieval, and deletion. Our solutions are
                designed to represent your document workflow and promote finding and
                sharing information easily.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 grid sm:grid-cols-2 gap-4">
              {docFeatures.map((feature) => (
                <Card key={feature.title} className="h-full">
                  <CardContent className="p-5">
                    <feature.icon className="h-6 w-6 text-sage-500 mb-3" />
                    <h3 className="font-medium text-charcoal-950 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-charcoal-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              {
                step: "1",
                title: "Contact",
                desc: "Reach out to discuss your requirements",
              },
              {
                step: "2",
                title: "Assessment",
                desc: "We analyse your current print environment",
              },
              {
                step: "3",
                title: "Proposal",
                desc: "Tailored solution designed for your needs",
              },
              {
                step: "4",
                title: "Implementation",
                desc: "Seamless deployment with ongoing support",
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-cream-300" />
                )}
                <div className="relative z-10 h-12 w-12 mx-auto rounded-full bg-ochre-500 text-white flex items-center justify-center text-xl font-bold mb-4">
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

      {/* Additional Services List */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Additional Solutions</SectionTitle>
            <SectionDescription>
              We also provide these complementary services to support your business.
            </SectionDescription>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Secure Printing Solutions",
              "Workflow Solutions",
              "Cost Allocation Software",
              "Cost Recovery Software",
              "Colour Management Systems",
              "Cloud-Based Technology Solutions",
              "Business Solution Integration",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-200"
              >
                <CheckCircle className="h-5 w-5 text-sage-500 shrink-0" />
                <span className="text-charcoal-700">{service}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="charcoal">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Optimise Your Print Environment?
            </h2>
            <p className="text-lg text-charcoal-300 mb-8">
              Contact us for a free assessment of your current print environment
              and discover how we can help reduce costs while improving productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-ochre-500 hover:bg-ochre-600"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Request a Free Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-charcoal-600 text-white hover:bg-charcoal-800"
              >
                <Link href="/products">View Our Printers</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
