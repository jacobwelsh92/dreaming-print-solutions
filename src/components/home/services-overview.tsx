"use client";

/**
 * =================================================================
 * SERVICES OVERVIEW
 * =================================================================
 *
 * This section introduces our core offerings. It should feel:
 * - CONFIDENT: We know what we're doing
 * - APPROACHABLE: Not intimidating or overly technical
 * - ORGANIZED: Clear categorization helps visitors self-select
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { Printer, FileText, Settings, ArrowRight } from "lucide-react";
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
import { fadeInUp, staggerContainerFast } from "@/lib/animations";

const services = [
  {
    icon: Printer,
    title: "Enterprise Hardware",
    description:
      "Premium HP multifunction printers designed for Australian government and corporate environments. A3 and A4 colour devices from small teams to production print.",
    href: "/products",
    accent: "ochre" as const,
  },
  {
    icon: Settings,
    title: "Managed Print Services",
    description:
      "Proactive supply monitoring, preventative maintenance, and responsive support. We keep your fleet running while you focus on your work.",
    href: "/services",
    accent: "sage" as const,
  },
  {
    icon: FileText,
    title: "Document Workflows",
    description:
      "Streamline document capture, digital archiving, and secure information management. Transform paper processes into digital efficiency.",
    href: "/services",
    accent: "terracotta" as const,
  },
] as const;

const accentColors = {
  ochre: {
    bg: "bg-ochre-100",
    icon: "text-ochre-700",
    hover: "group-hover:bg-ochre-200",
  },
  sage: {
    bg: "bg-sage-100",
    icon: "text-sage-700",
    hover: "group-hover:bg-sage-200",
  },
  terracotta: {
    bg: "bg-terracotta-100",
    icon: "text-terracotta-700",
    hover: "group-hover:bg-terracotta-200",
  },
};

export function ServicesOverview() {
  return (
    <Section background="cream" size="lg">
      <Container>
        <SectionHeader>
          <SectionEyebrow>What We Do</SectionEyebrow>
          <SectionTitle>End-to-End Print Solutions</SectionTitle>
          <SectionDescription>
            From hardware selection to ongoing management, we partner with you
            to deliver print infrastructure that just works.
          </SectionDescription>
        </SectionHeader>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainerFast}
        >
          {services.map((service) => {
            const colors = accentColors[service.accent];
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Link href={service.href} className="block h-full group">
                  <Card
                    variant="interactive"
                    className="h-full transition-all duration-300"
                  >
                    <CardContent className="flex flex-col h-full p-6 lg:p-8">
                      {/* Icon */}
                      <div
                        className={`h-14 w-14 rounded-2xl ${colors.bg} ${colors.icon} ${colors.hover}
                          flex items-center justify-center mb-6 transition-colors duration-300`}
                      >
                        <service.icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl text-charcoal-950 mb-3 group-hover:text-ochre-700 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-charcoal-600 text-base leading-relaxed flex-grow mb-6">
                        {service.description}
                      </p>

                      {/* Link */}
                      <span className="inline-flex items-center gap-2 text-ochre-600 text-sm font-semibold group-hover:text-ochre-700 transition-colors">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary CTA */}
        <motion.div className="mt-16 text-center" variants={fadeInUp}>
          <p className="text-charcoal-600 mb-6">
            Not sure what you need? We&apos;ll help you find the right solution.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
