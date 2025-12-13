/**
 * =================================================================
 * ANALYZING STATE
 * =================================================================
 *
 * The moment of anticipation. This loading state should feel
 * purposeful, not frustrating. The user should believe
 * something valuable is happening.
 *
 * Design notes:
 * - Animated elements that feel alive
 * - Copy that explains what's happening
 * - Premium, considered aesthetic
 */

"use client";

import { motion } from "framer-motion";
import { Sparkles, BarChart3, FileSearch, Lightbulb } from "lucide-react";

const steps = [
  { icon: FileSearch, label: "Analysing your requirements", delay: 0 },
  { icon: BarChart3, label: "Calculating cost projections", delay: 1.5 },
  { icon: Lightbulb, label: "Generating recommendations", delay: 3 },
  { icon: Sparkles, label: "Preparing your report", delay: 4.5 },
];

export function AnalyzingState() {
  return (
    <div className="bg-white rounded-3xl border border-cream-200 shadow-xl shadow-charcoal-950/5 overflow-hidden">
      <div className="p-12 md:p-16">
        <div className="max-w-md mx-auto text-center">
          {/* Animated orb */}
          <div className="relative w-32 h-32 mx-auto mb-10">
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-ochre-400 to-ochre-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-ochre-400/50"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner orb */}
            <motion.div
              className="absolute inset-6 rounded-full bg-gradient-to-br from-ochre-400 to-ochre-600 shadow-lg shadow-ochre-500/50 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            {/* Orbiting dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-ochre-400"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  x: [
                    Math.cos((i * 2 * Math.PI) / 3) * 60 - 6,
                    Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 60 - 6,
                    Math.cos((i * 2 * Math.PI) / 3 + 2 * Math.PI) * 60 - 6,
                  ],
                  y: [
                    Math.sin((i * 2 * Math.PI) / 3) * 60 - 6,
                    Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 60 - 6,
                    Math.sin((i * 2 * Math.PI) / 3 + 2 * Math.PI) * 60 - 6,
                  ],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl md:text-3xl text-charcoal-900 mb-3"
          >
            Analysing Your Assessment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-600 mb-10"
          >
            Our AI is reviewing your requirements and preparing personalised recommendations.
          </motion.p>

          {/* Progress steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step.delay, duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-cream-50 border border-cream-200"
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    delay: step.delay + 0.3,
                    duration: 0.3,
                  }}
                >
                  <step.icon className="w-5 h-5 text-ochre-500" />
                </motion.div>
                <span className="text-sm font-medium text-charcoal-700">
                  {step.label}
                </span>
                <motion.div
                  className="ml-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: step.delay + 1, type: "spring" }}
                >
                  <div className="w-5 h-5 rounded-full bg-sage-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="mt-8 text-sm text-charcoal-400"
          >
            This usually takes 5-10 seconds
          </motion.p>
        </div>
      </div>
    </div>
  );
}
