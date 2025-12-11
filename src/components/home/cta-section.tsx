"use client";

/**
 * =================================================================
 * CTA SECTION
 * =================================================================
 *
 * The final call to action. After scrolling through the page,
 * visitors should feel confident enough to take the next step.
 *
 * The design is warm and inviting - not pushy. The ochre
 * gradient creates visual interest while the copy is direct.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientDots, DotPattern } from "@/components/ui/dot-pattern";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { contactInfo } from "@/data/navigation";

export function CTASection() {
  return (
    <Section
      background="ochre"
      size="xl"
      className="relative overflow-hidden"
    >
      {/* Background pattern */}
      <DotPattern
        variant="terracotta"
        opacity={0.08}
        spacing={36}
        dotSize={3}
        organic
        seed={77}
        animated={false}
      />

      {/* Fade from edges */}
      <GradientDots
        variant="ochre"
        opacity={0.1}
        fadeFrom="edges"
      />

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Headline */}
          <motion.h2
            className="font-display text-display-lg md:text-display-xl text-charcoal-950 mb-6"
            variants={fadeInUp}
          >
            Ready to Get Started?
          </motion.h2>

          {/* Supporting copy */}
          <motion.p
            className="text-body-lg md:text-body-xl text-charcoal-700 mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Whether you need a single device or a complete fleet, we&apos;ll
            help you find the right solution for your organisation.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              asChild
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="h-4 w-4" />}
              asChild
            >
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                {contactInfo.phone}
              </a>
            </Button>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            variants={fadeInUp}
          >
            <span className="w-16 h-px bg-charcoal-300" />
            <span className="text-sm text-charcoal-500">or</span>
            <span className="w-16 h-px bg-charcoal-300" />
          </motion.div>

          {/* Email option */}
          <motion.div variants={fadeInUp}>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-charcoal-700 hover:text-charcoal-900 transition-colors group"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">{contactInfo.email}</span>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-ochre-200"
            variants={fadeInUp}
          >
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-charcoal-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage-500" />
                IPP Registered
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ochre-600" />
                HP Authorised
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta-500" />
                Supply Nation Certified
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
