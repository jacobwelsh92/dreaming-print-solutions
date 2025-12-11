"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { contactInfo } from "@/data/navigation";

export function CTASection() {
  return (
    <Section background="white" className="relative overflow-hidden">
      <DotPattern variant="sage" opacity={0.06} spacing={40} />

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal-950 mb-4"
            variants={fadeInUp}
          >
            Ready to Transform Your Print Environment?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-charcoal-600 mb-8"
            variants={fadeInUp}
          >
            Let us help you find the right enterprise print solution. Our team
            specialises in government and corporate environments.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeInUp}
          >
            <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />} asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Phone className="h-4 w-4" />}
              asChild
            >
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                Call Us Today
              </a>
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-charcoal-500"
            variants={fadeInUp}
          >
            No obligation quote. IPP-registered supplier. Enterprise expertise.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
