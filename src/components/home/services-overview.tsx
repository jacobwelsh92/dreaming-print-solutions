"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Printer, FileText, Settings, ArrowRight } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

const services = [
  {
    icon: Printer,
    title: "Hardware Sales",
    description:
      "Premium HP enterprise printers and MFDs. A3 and A4 colour devices for any scale, from small teams to production environments.",
    href: "/products",
  },
  {
    icon: Settings,
    title: "Managed Print Services",
    description:
      "Comprehensive print management including supply monitoring, maintenance, and support. Reduce costs while improving productivity.",
    href: "/services",
  },
  {
    icon: FileText,
    title: "Document Solutions",
    description:
      "Streamline document workflows with scanning, digital archiving, and secure document management tailored to your business.",
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <Section background="white">
      <Container>
        <SectionHeader>
          <SectionTitle>Enterprise Print Solutions</SectionTitle>
          <SectionDescription>
            From hardware to managed services, we provide end-to-end print
            solutions designed for government and corporate environments.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeInUp} custom={index}>
              <Card hoverable className="h-full">
                <CardContent className="flex flex-col h-full">
                  <div className="h-12 w-12 rounded-xl bg-ochre-100 text-ochre-600 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-xl text-charcoal-950 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-charcoal-600 text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-ochre-600 text-sm font-medium hover:text-ochre-700 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
