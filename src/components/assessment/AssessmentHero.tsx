/**
 * =================================================================
 * ASSESSMENT HERO
 * =================================================================
 *
 * Premium hero section for the print assessment page.
 * Sets the tone: this is a valuable, professional tool.
 *
 * Design notes:
 * - Charcoal background for gravitas
 * - Ochre accents for brand warmth
 * - Clear value proposition
 * - Trust indicators prominent
 */

"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, FileText, Lock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer, staggerContainerSlow } from "@/lib/animations";

const benefits = [
  {
    icon: Sparkles,
    label: "AI-Powered",
    description: "Intelligent analysis",
  },
  {
    icon: Clock,
    label: "5 Minutes",
    description: "Quick & focused",
  },
  {
    icon: FileText,
    label: "PDF Report",
    description: "Professional deliverable",
  },
  {
    icon: Lock,
    label: "No Obligation",
    description: "Zero pressure",
  },
];

const trustPoints = [
  "Personalised product recommendations",
  "Detailed cost & savings analysis",
  "Workflow optimisation insights",
  "Delivered straight to your inbox",
];

export function AssessmentHero() {
  return (
    <section className="relative bg-charcoal-950 overflow-hidden">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-ochre-900/10 via-transparent to-transparent" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(196 90 50 / 0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Container className="relative z-10 py-20 md:py-28">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainerSlow}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ochre-500/20 border border-ochre-500/30 text-ochre-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Valued at $500 — Yours Free
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight"
          >
            Discover Your Perfect
            <br />
            <span className="text-ochre-400">Print Solution</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
          >
            Answer a few questions about your print environment. Our AI analyses your
            needs and delivers personalised recommendations, cost projections, and a
            professional report.
          </motion.p>

          {/* Benefits row */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.label}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-ochre-500/30"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-ochre-500/20 flex items-center justify-center mb-3 group-hover:bg-ochre-500/30 transition-colors">
                    <benefit.icon className="w-6 h-6 text-ochre-400" />
                  </div>
                  <span className="font-semibold text-white text-sm mb-1">
                    {benefit.label}
                  </span>
                  <span className="text-xs text-white/50">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust points */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {trustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 text-sm text-white/60"
              >
                <CheckCircle2 className="w-4 h-4 text-sage-500" />
                {point}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
