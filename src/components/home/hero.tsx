"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DotPattern } from "@/components/ui/dot-pattern";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-cream-100 to-white overflow-hidden">
      {/* Background Pattern */}
      <DotPattern
        variant="ochre"
        opacity={0.08}
        spacing={32}
        dotSize={3}
        className="z-0"
      />

      <Container className="relative z-10 py-16 md:py-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-ochre-100 text-ochre-700"
            variants={fadeInUp}
          >
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">
              Australia&apos;s First Indigenous-Owned Enterprise Printer Dealer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-950 leading-tight mb-6"
            variants={fadeInUp}
          >
            Enterprise Print Solutions{" "}
            <span className="text-gradient-ochre">Built on Heritage</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            We bring together Indigenous business excellence and HP&apos;s leading
            technology to deliver premium managed print services for government
            and corporate clients across Australia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={fadeInUp}
          >
            <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />} asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">View Products</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap gap-6 pt-8 border-t border-cream-300"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 text-charcoal-600">
              <Shield className="h-5 w-5 text-sage-500" />
              <span className="text-sm font-medium">IPP Registered Supplier</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-600">
              <div className="h-5 w-5 rounded-full bg-ochre-500 flex items-center justify-center text-white text-xs font-bold">
                HP
              </div>
              <span className="text-sm font-medium">Authorised HP Partner</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-600">
              <div className="h-5 w-5 rounded-full bg-sage-500 flex items-center justify-center text-white text-xs font-bold">
                SN
              </div>
              <span className="text-sm font-medium">Supply Nation Certified</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-ochre-100/50 to-transparent rounded-l-full hidden lg:block" />
    </section>
  );
}
