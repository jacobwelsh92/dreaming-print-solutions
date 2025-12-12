"use client";

/**
 * =================================================================
 * WHY CHOOSE US
 * =================================================================
 *
 * This section establishes credibility and differentiation.
 * The Indigenous ownership isn't just a checkbox - it's a
 * genuine advantage that benefits buyers and community.
 *
 * Key messaging:
 * - IPP advantages are concrete and actionable
 * - Enterprise capability is established
 * - Values alignment matters to modern procurement
 */

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Users, Landmark, Building2, Award } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionEyebrow,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScatterPattern, FlowPattern } from "@/components/ui/dot-pattern";
import { fadeInUp, staggerContainer, staggerContainerFast } from "@/lib/animations";

const advantages = [
  {
    icon: Users,
    title: "Supporting Indigenous Business",
    description:
      "We believe there is an untapped market in the print industry for connecting with and supporting other Indigenous-owned businesses. When you choose us, you support Indigenous economic empowerment.",
    highlight: "100%",
    highlightLabel: "Indigenous owned & operated",
  },
  {
    icon: Landmark,
    title: "Streamlined Government Procurement",
    description:
      "IPP-registered suppliers enable direct approaches for contracts $80K–$200K. Skip lengthy tender processes while meeting Indigenous procurement targets.",
    highlight: "$80K–$200K",
    highlightLabel: "Direct approach threshold",
  },
  {
    icon: Building2,
    title: "Enterprise-Grade Capability",
    description:
      "Deep understanding of government compliance, security requirements, and enterprise workflows. We speak your language and understand your constraints.",
    highlight: "Enterprise",
    highlightLabel: "Ready from day one",
  },
  {
    icon: Award,
    title: "HP Partner Excellence",
    description:
      "Authorised HP partner status means direct access to the full enterprise product line, technical expertise, and competitive pricing.",
    highlight: "Authorised",
    highlightLabel: "HP Partner",
  },
] as const;

const stats = [
  { value: "$12.9B+", label: "IPP contracts awarded since 2015" },
  { value: "83,500+", label: "Indigenous contracts nationally" },
  { value: "3%", label: "Government procurement target" },
  { value: "100%", label: "Indigenous ownership" },
] as const;

export function WhyChooseUs() {
  return (
    <Section background="charcoal" size="xl" className="relative overflow-hidden">
      {/* Background patterns - subtle, not distracting */}
      <ScatterPattern
        variant="ochre"
        opacity={0.03}
        density={3}
        seed={99}
        animated={false}
      />
      <div className="absolute inset-y-0 left-0 w-1/2">
        <FlowPattern
          variant="terracotta"
          opacity={0.02}
          direction="diagonal"
          density="sparse"
          animated={false}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader>
          <SectionEyebrow className="text-ochre-400">
            Why Partner With Us
          </SectionEyebrow>
          <SectionTitle className="text-white">
            Indigenous Excellence Meets Enterprise Capability
          </SectionTitle>
          <SectionDescription className="text-white/80">
            The strategic advantage of working with Australia&apos;s first
            Indigenous-owned enterprise printer dealer.
          </SectionDescription>
        </SectionHeader>

        {/* Advantages grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
          variants={staggerContainer}
        >
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.title}
              className="group relative"
              variants={fadeInUp}
            >
              {/* Card with subtle border */}
              <div className="relative p-6 lg:p-8 rounded-2xl bg-charcoal-900/50 border border-charcoal-800 hover:border-charcoal-700 transition-colors duration-300">
                {/* Icon */}
                <div className="h-14 w-14 rounded-2xl bg-ochre-500/15 flex items-center justify-center mb-6 group-hover:bg-ochre-500/20 transition-colors duration-300">
                  <advantage.icon
                    className="h-7 w-7 text-ochre-400"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  {advantage.description}
                </p>

                {/* Highlight stat */}
                <div className="pt-4 border-t border-charcoal-800">
                  <span className="text-ochre-400 font-display text-2xl">
                    {advantage.highlight}
                  </span>
                  <span className="ml-3 text-white/60 text-sm">
                    {advantage.highlightLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-20"
          variants={fadeInUp}
        >
          <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-ochre-600/20 via-ochre-500/10 to-transparent border border-ochre-500/20">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
              variants={staggerContainerFast}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  variants={fadeInUp}
                >
                  <p className="font-display text-3xl lg:text-4xl text-white mb-2 tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/70 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Callout for all target markets */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            Whether you&apos;re an Indigenous business, government department meeting
            IPP targets, or a corporate organisation — we deliver high quality,
            affordable printing solutions tailored to your needs.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
