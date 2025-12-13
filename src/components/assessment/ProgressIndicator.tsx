/**
 * =================================================================
 * PROGRESS INDICATOR - Assessment Wizard
 * =================================================================
 *
 * A refined progress indicator that feels earned, not decorative.
 * Each step forward is a small celebration.
 *
 * Design principles:
 * - Minimal but meaningful
 * - Smooth, satisfying animations
 * - Clear visual hierarchy
 * - Mobile-first but desktop-refined
 */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { STEP_CONFIGS, type WizardStep } from "@/lib/assessment/types";

interface ProgressIndicatorProps {
  currentStep: WizardStep;
  totalSteps: number;
  onStepClick?: (step: WizardStep) => void;
  className?: string;
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  onStepClick,
  className,
}: ProgressIndicatorProps) {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop: Full progress with labels */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Background track */}
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-cream-200 rounded-full" />

          {/* Animated progress fill */}
          <motion.div
            className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-ochre-400 to-ochre-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Step dots */}
          <div className="relative flex justify-between">
            {STEP_CONFIGS.map((step) => {
              const isCompleted = currentStep > step.number;
              const isCurrent = currentStep === step.number;
              const isClickable = onStepClick && currentStep > step.number;

              return (
                <motion.button
                  key={step.number}
                  onClick={() => isClickable && onStepClick(step.number)}
                  disabled={!isClickable}
                  className={cn(
                    "relative flex flex-col items-center",
                    isClickable ? "cursor-pointer" : "cursor-default"
                  )}
                  whileHover={isClickable ? { scale: 1.05 } : undefined}
                  whileTap={isClickable ? { scale: 0.95 } : undefined}
                >
                  {/* Step circle */}
                  <motion.div
                    className={cn(
                      "relative z-10 flex items-center justify-center",
                      "w-10 h-10 rounded-full transition-all duration-300",
                      isCompleted && "bg-sage-500 shadow-lg shadow-sage-500/25",
                      isCurrent && "bg-ochre-500 shadow-lg shadow-ochre-500/25 ring-4 ring-ochre-100",
                      !isCompleted && !isCurrent && "bg-white border-2 border-cream-300"
                    )}
                    animate={{
                      scale: isCurrent ? 1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </motion.div>
                    ) : (
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          isCurrent ? "text-white" : "text-charcoal-400"
                        )}
                      >
                        {step.number}
                      </span>
                    )}
                  </motion.div>

                  {/* Step label */}
                  <div className="mt-3 text-center">
                    <p
                      className={cn(
                        "text-xs font-medium transition-colors duration-200",
                        isCurrent && "text-ochre-600",
                        isCompleted && "text-sage-600",
                        !isCurrent && !isCompleted && "text-charcoal-400"
                      )}
                    >
                      {step.title}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Minimal progress bar + step counter */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-charcoal-600">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-semibold text-ochre-600">
            {STEP_CONFIGS[currentStep - 1]?.title}
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative h-2 bg-cream-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-ochre-400 to-ochre-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Step dots - compact */}
        <div className="flex justify-between mt-3 px-1">
          {STEP_CONFIGS.map((step) => {
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;

            return (
              <div
                key={step.number}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  isCompleted && "bg-sage-500",
                  isCurrent && "bg-ochre-500 ring-2 ring-ochre-200",
                  !isCompleted && !isCurrent && "bg-cream-300"
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
