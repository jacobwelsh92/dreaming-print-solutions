"use client";

/**
 * =================================================================
 * HERO SECTION
 * =================================================================
 *
 * The moment of arrival. This is where visitors decide if they're
 * in the right place. Every element must earn its position.
 *
 * Design principles:
 * - PRESENCE: The hero should feel significant, grounded
 * - CLARITY: The value proposition is immediately clear
 * - AUTHENTICITY: Indigenous heritage is honored, not tokenized
 * - ENTERPRISE: Professional, trustworthy, capable
 *
 * The visual story:
 * The dot patterns suggest ancient mapping traditions meeting
 * modern precision. The typography has weight but also warmth.
 * The overall feeling should be: "These people know what they're
 * doing, and they do it their way."
 */

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroPattern, DotPattern, FlowPattern } from "@/components/ui/dot-pattern";
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  staggerContainerSlow,
  easeOutExpo,
  viewportOnce,
} from "@/lib/animations";

// Trust badge data
const trustIndicators = [
  {
    label: "IPP Registered",
    sublabel: "Indigenous Procurement Policy",
    color: "bg-sage-600",
  },
  {
    label: "HP Partner",
    sublabel: "Authorised Dealer",
    color: "bg-ochre-600",
  },
  {
    label: "Supply Nation",
    sublabel: "Certified Supplier",
    color: "bg-terracotta-600",
  },
] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100/80 to-white" />

      {/* Rich, layered pattern system */}
      <HeroPattern variant="ochre" intensity="medium" />

      {/* Subtle flow pattern on the right for movement */}
      <div className="absolute inset-y-0 right-0 w-2/3 opacity-30 hidden lg:block">
        <FlowPattern
          variant="terracotta"
          opacity={0.04}
          direction="diagonal"
          density="sparse"
          animated={!prefersReducedMotion}
        />
      </div>

      {/* Decorative gradient orb - like sunrise over red earth */}
      <motion.div
        className="absolute right-[-10%] top-[15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full hidden lg:block"
        style={{
          background: "radial-gradient(circle, rgba(194,94,53,0.08) 0%, rgba(194,94,53,0) 70%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
      />

      {/* Main content */}
      <Container className="relative z-10 flex-1 flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          className="w-full max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainerSlow}
        >
          {/* Heritage marker - small but meaningful */}
          <motion.div
            className="mb-8"
            variants={fadeIn}
          >
            <span className="inline-flex items-center gap-3 text-sm tracking-wide">
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-ochre-500" />
                <span className="w-2 h-2 rounded-full bg-terracotta-500" />
                <span className="w-2 h-2 rounded-full bg-sage-500" />
              </span>
              <span className="text-charcoal-600 font-medium">
                Australia&apos;s First Indigenous-Owned Enterprise Printer Dealer
              </span>
            </span>
          </motion.div>

          {/* Main headline - the stop-scrolling moment */}
          <motion.h1
            className="font-display text-charcoal-950 mb-8"
            variants={fadeInUp}
          >
            <span className="block text-display-xl md:text-display-2xl leading-[1.05] tracking-tight">
              Enterprise Print.
            </span>
            <span className="block text-display-xl md:text-display-2xl leading-[1.05] tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Indigenous Heart.</span>
                {/* Subtle underline accent */}
                <motion.span
                  className="absolute bottom-[0.1em] left-0 right-0 h-[0.08em] bg-ochre-400/40 -z-0"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Value proposition - clear and confident */}
          <motion.p
            className="text-body-lg md:text-body-xl text-charcoal-600 leading-relaxed max-w-2xl mb-10"
            variants={fadeInUp}
          >
            A proudly owned and operated Indigenous company delivering high quality,
            affordable printing solutions Australia wide. HP machines suited to your
            volume and workflow — for Indigenous businesses, government, and corporate.
          </motion.p>

          {/* CTAs - primary and secondary with clear hierarchy */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
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
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Trust indicators - anchored at bottom */}
      <div className="relative z-10 border-t border-cream-200/50 bg-white/60 backdrop-blur-sm">
        <Container>
          <motion.div
            className="py-6 md:py-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div className="flex flex-wrap justify-start md:justify-center gap-x-10 gap-y-4">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <span
                    className={`w-3 h-3 rounded-full ${indicator.color}`}
                    aria-hidden="true"
                  />
                  <div className="text-sm">
                    <span className="font-medium text-charcoal-950">
                      {indicator.label}
                    </span>
                    <span className="hidden sm:inline text-charcoal-500 ml-1.5">
                      · {indicator.sublabel}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
