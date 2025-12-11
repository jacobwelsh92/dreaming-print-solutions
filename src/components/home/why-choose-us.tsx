"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, Landmark } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ConcentricDotPattern } from "@/components/ui/dot-pattern";
import { fadeInUp } from "@/lib/animations";

const reasons = [
  {
    icon: Landmark,
    title: "Indigenous Procurement Policy",
    description:
      "As a registered IPP supplier, government buyers can directly approach us for contracts valued $80,000-$200,000. Streamlined procurement that meets policy requirements.",
  },
  {
    icon: Shield,
    title: "Supply Nation Certified",
    description:
      "Our Supply Nation certification provides assurance of genuine Indigenous ownership. Verified credentials you can trust for reconciliation goals.",
  },
  {
    icon: Users,
    title: "Enterprise Expertise",
    description:
      "Deep experience in government and corporate environments. We understand compliance requirements, security needs, and enterprise workflows.",
  },
  {
    icon: CheckCircle,
    title: "HP Partner Excellence",
    description:
      "Authorised HP partner with direct access to enterprise products, technical support, and competitive pricing. Industry-leading technology backed by reliable support.",
  },
];

export function WhyChooseUs() {
  return (
    <Section background="charcoal" className="relative overflow-hidden">
      {/* Decorative pattern */}
      <ConcentricDotPattern variant="ochre" opacity={0.05} />

      <Container className="relative z-10">
        <SectionHeader>
          <SectionTitle className="text-white">
            Why Partner With Dreaming Print Solutions
          </SectionTitle>
          <SectionDescription className="text-charcoal-300">
            The intersection of Indigenous business excellence, government
            procurement advantages, and enterprise-grade technology.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="flex gap-4"
              variants={fadeInUp}
              custom={index}
            >
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-xl bg-ochre-500/20 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-ochre-400" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-charcoal-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 pt-12 border-t border-charcoal-800 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={fadeInUp}
        >
          <div className="text-center">
            <p className="font-display text-4xl text-ochre-400 mb-1">$12.9B+</p>
            <p className="text-sm text-charcoal-400">
              IPP Contracts Since 2015
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-ochre-400 mb-1">83,500+</p>
            <p className="text-sm text-charcoal-400">
              Indigenous Contracts Awarded
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-ochre-400 mb-1">5</p>
            <p className="text-sm text-charcoal-400">
              HP Enterprise Models
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-ochre-400 mb-1">100%</p>
            <p className="text-sm text-charcoal-400">
              Indigenous Owned
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
