import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ContactForm } from "@/components/contact";
import { contactInfo } from "@/data/navigation";
import { ContactPageSchemas } from "@/components/seo/structured-data";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Get a Quote | Contact Us",
  description:
    "Request a quote for HP enterprise printers. Fast response within 24 hours. Serving Australian government & corporate. IPP-registered indigenous supplier.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Get a Quote | Dreaming Print Solutions",
    description:
      "Request a quote for HP enterprise printers. Indigenous-owned, IPP registered. Government & corporate specialists.",
    url: `${siteConfig.url}/contact`,
  },
};

function ContactFormWrapper({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  // This will be resolved by Next.js
  return (
    <Suspense fallback={<div className="h-96 animate-pulse bg-cream-100 rounded-xl" />}>
      <ContactFormAsync searchParams={searchParams} />
    </Suspense>
  );
}

async function ContactFormAsync({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;
  return <ContactForm preselectedProduct={params.product} />;
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  return (
    <>
      {/* Structured Data */}
      <ContactPageSchemas />

      {/* Hero */}
      <Section background="cream" size="md" className="relative overflow-hidden">
        <DotPattern variant="ochre" opacity={0.05} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-2xl">
            <SectionTitle as="h1">Get in Touch</SectionTitle>
            <SectionDescription>
              Ready to discuss your print requirements? Our team is here to help
              government and enterprise clients find the perfect solution.
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactFormWrapper searchParams={searchParams} />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent>
                  <h3 className="font-display text-lg text-charcoal-950 mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-start gap-3 text-charcoal-600 hover:text-ochre-600 transition-colors"
                    >
                      <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                      <span className="break-all">{contactInfo.email}</span>
                    </a>

                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-charcoal-600 hover:text-ochre-600 transition-colors"
                    >
                      <Phone className="h-5 w-5 shrink-0" />
                      <span>{contactInfo.phone}</span>
                    </a>

                    <div className="flex items-start gap-3 text-charcoal-600">
                      <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                      <span>{contactInfo.address}</span>
                    </div>

                    <div className="flex items-start gap-3 text-charcoal-600">
                      <Clock className="h-5 w-5 mt-0.5 shrink-0" />
                      <div>
                        <p>Monday - Friday</p>
                        <p className="text-sm text-charcoal-500">9:00 AM - 5:00 PM AEST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h3 className="font-display text-lg text-charcoal-950 mb-3">
                    Response Time
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    We aim to respond to all enquiries within 1 business day.
                    For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-ochre-50 border-ochre-200">
                <CardContent>
                  <h3 className="font-display text-lg text-ochre-800 mb-3">
                    Government Buyers
                  </h3>
                  <p className="text-sm text-ochre-700">
                    As an IPP-registered Indigenous supplier, we can be directly
                    approached for contracts $80K-$200K. Contact us to discuss
                    your procurement requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
