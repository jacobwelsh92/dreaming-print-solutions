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
 * - HUMAN: Real imagery creates connection and trust
 */

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerContainerSlow,
  viewportOnce,
} from "@/lib/animations";

// Trust badge data
const trustIndicators = [
  {
    label: "IPP Registered",
    sublabel: "Indigenous Procurement Policy",
    color: "bg-sage-500",
  },
  {
    label: "HP Partner",
    sublabel: "Authorised Dealer",
    color: "bg-ochre-500",
  },
  {
    label: "Supply Nation",
    sublabel: "Certified Supplier",
    color: "bg-terracotta-500",
  },
] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-office.webp"
          alt="Professional office environment with multifunction printer"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/75 to-charcoal-950/60" />
        {/* Subtle ochre tint at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ochre-900/20 via-transparent to-transparent" />
      </div>

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
                <span className="w-2 h-2 rounded-full bg-ochre-400" />
                <span className="w-2 h-2 rounded-full bg-terracotta-400" />
                <span className="w-2 h-2 rounded-full bg-sage-400" />
              </span>
              <span className="text-white/80 font-medium">
                Australia&apos;s First Indigenous-Owned Enterprise Printer Dealer
              </span>
            </span>
          </motion.div>

          {/* Main headline - the stop-scrolling moment */}
          <motion.h1
            className="font-display text-white mb-10 md:mb-12"
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
                  className="absolute bottom-[0.1em] left-0 right-0 h-[0.08em] bg-ochre-400/60 -z-0"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Value proposition - clear and confident */}
          <motion.p
            className="text-body-lg md:text-body-xl text-white/80 leading-relaxed max-w-2xl mb-10 md:mb-12"
            variants={fadeInUp}
          >
            A proudly owned and operated Indigenous company delivering high quality,
            affordable printing solutions Australia wide. HP machines suited to your
            volume and workflow — for Indigenous businesses, government, and corporate.
          </motion.p>

          {/* Free Print Assessment - Lead Magnet */}
          <motion.div
            className="mb-10 md:mb-12"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-ochre-500/20 border border-ochre-400/30 backdrop-blur-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ochre-500">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm md:text-base">
                  Free Print Assessment
                </p>
                <p className="text-white/70 text-xs md:text-sm">
                  Valued at $500 — Discover how much you could save
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs - primary and secondary with clear hierarchy */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
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
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              asChild
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Trust indicators - anchored at bottom */}
      <div className="relative z-10 border-t border-white/10 bg-charcoal-950/60 backdrop-blur-md">
        <Container>
          <motion.div
            className="py-6 md:py-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div className="flex flex-wrap justify-start md:justify-center gap-x-10 gap-y-4">
              {trustIndicators.map((indicator) => (
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
                    <span className="font-medium text-white">
                      {indicator.label}
                    </span>
                    <span className="hidden sm:inline text-white/60 ml-1.5">
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
