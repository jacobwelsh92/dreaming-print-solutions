/**
 * =================================================================
 * ASSESSMENT WIZARD - Main Component
 * =================================================================
 *
 * The heart of the assessment experience. Every interaction
 * should feel considered, every transition smooth.
 *
 * Design principles:
 * - FLOW: Steps feel connected, not fragmented
 * - BREATHING ROOM: Generous padding, nothing cramped
 * - FEEDBACK: Users always know what's happening
 * - DELIGHT: Small moments of satisfaction
 */

"use client";

import { FormProvider } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAssessmentWizard } from "@/hooks/useAssessmentWizard";
import { ProgressIndicator } from "./ProgressIndicator";
import { BusinessProfileStep } from "./steps/BusinessProfileStep";
import { CurrentSetupStep } from "./steps/CurrentSetupStep";
import { PrintVolumeStep } from "./steps/PrintVolumeStep";
import { WorkflowNeedsStep } from "./steps/WorkflowNeedsStep";
import { BudgetTimelineStep } from "./steps/BudgetTimelineStep";
import { ContactInfoStep } from "./steps/ContactInfoStep";
import { AssessmentResults } from "./results/AssessmentResults";
import { AnalyzingState } from "./AnalyzingState";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2, AlertCircle, RotateCcw, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { WizardStep } from "@/lib/assessment/types";

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
  }),
};

interface AssessmentWizardProps {
  className?: string;
}

export function AssessmentWizard({ className }: AssessmentWizardProps) {
  const wizard = useAssessmentWizard();

  // Show analyzing state
  if (wizard.isAnalyzing) {
    return (
      <div className={cn("w-full", className)}>
        <AnalyzingState />
      </div>
    );
  }

  // If we have analysis results, show the results view
  if (wizard.analysis) {
    return (
      <div className={cn("w-full", className)}>
        <AssessmentResults
          analysis={wizard.analysis}
          formData={wizard.form.getValues()}
          onDownloadPDF={wizard.downloadPDF}
          onStartOver={wizard.resetAssessment}
        />
      </div>
    );
  }

  // Determine step direction for animations
  const getStepComponent = (step: WizardStep) => {
    switch (step) {
      case 1:
        return <BusinessProfileStep />;
      case 2:
        return <CurrentSetupStep />;
      case 3:
        return <PrintVolumeStep />;
      case 4:
        return <WorkflowNeedsStep />;
      case 5:
        return <BudgetTimelineStep />;
      case 6:
        return <ContactInfoStep />;
      default:
        return null;
    }
  };

  const handleNext = async () => {
    if (wizard.isLastStep) {
      await wizard.submitAssessment();
    } else {
      await wizard.nextStep();
    }
  };

  return (
    <FormProvider {...wizard.form}>
      <motion.div
        className={cn("w-full", className)}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Progress indicator */}
        <motion.div variants={fadeInUp} className="mb-10 md:mb-14">
          <ProgressIndicator
            currentStep={wizard.currentStep}
            totalSteps={wizard.totalSteps}
            onStepClick={(step) => {
              // Only allow going back to completed steps
              if (step < wizard.currentStep) {
                wizard.goToStep(step);
              }
            }}
          />
        </motion.div>

        {/* Error message */}
        <AnimatePresence mode="wait">
          {wizard.error && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="mb-8 p-5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-red-800">
                  Something went wrong
                </p>
                <p className="text-sm text-red-600 mt-1">{wizard.error}</p>
              </div>
              <button
                onClick={wizard.clearError}
                className="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors p-1"
                aria-label="Dismiss error"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step content with animation */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={wizard.currentStep}
              initial="enter"
              animate="center"
              exit="exit"
              variants={stepVariants}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* Step card - Premium styling */}
              <div className="bg-white rounded-3xl border border-cream-200 shadow-xl shadow-charcoal-950/5 overflow-hidden">
                {/* Card content with generous padding */}
                <div className="p-8 md:p-12">
                  {getStepComponent(wizard.currentStep)}
                </div>

                {/* Card footer with navigation */}
                <div className="px-8 md:px-12 py-6 bg-cream-50/50 border-t border-cream-200">
                  <div className="flex items-center justify-between gap-4">
                    {/* Back button */}
                    <Button
                      type="button"
                      variant="ghost"
                      size="lg"
                      onClick={wizard.prevStep}
                      disabled={wizard.isFirstStep || wizard.isSubmitting}
                      leftIcon={<ArrowLeft className="w-4 h-4" />}
                      className={cn(
                        "text-charcoal-600 hover:text-charcoal-900",
                        wizard.isFirstStep && "invisible"
                      )}
                    >
                      Back
                    </Button>

                    {/* Next / Submit button */}
                    <Button
                      type="button"
                      size="lg"
                      onClick={handleNext}
                      disabled={wizard.isSubmitting}
                      rightIcon={
                        wizard.isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : wizard.isLastStep ? (
                          <Sparkles className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )
                      }
                      className={cn(
                        "min-w-[160px]",
                        wizard.isLastStep && "bg-gradient-to-r from-ochre-500 to-ochre-600 hover:from-ochre-600 hover:to-ochre-700"
                      )}
                    >
                      {wizard.isSubmitting
                        ? "Processing..."
                        : wizard.isLastStep
                        ? "Get My Results"
                        : "Continue"}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Start over link */}
        {wizard.hasStoredProgress && wizard.currentStep > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <button
              type="button"
              onClick={wizard.resetAssessment}
              className="inline-flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Start over
            </button>
          </motion.div>
        )}
      </motion.div>
    </FormProvider>
  );
}
