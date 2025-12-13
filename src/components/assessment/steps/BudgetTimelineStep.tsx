/**
 * =================================================================
 * STEP 5: Budget & Timeline
 * =================================================================
 */

"use client";

import { useFormContext, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Calculator, Clock, Building, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import { BUDGET_RANGES, URGENCY_OPTIONS, PROCUREMENT_TYPES } from "@/lib/assessment/types";
import type { AssessmentFormDataSchema } from "@/lib/assessment/schema";

const PREFERENCES = [
  { value: "purchase", label: "Purchase", description: "Outright ownership", icon: "💰" },
  { value: "lease", label: "Lease", description: "Fixed monthly payments", icon: "📅" },
  { value: "managed-print", label: "Managed Print", description: "All-inclusive service", icon: "✨" },
  { value: "undecided", label: "Not sure", description: "Help me decide", icon: "🤔" },
] as const;

export function BudgetTimelineStep() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<AssessmentFormDataSchema>();

  const selectedBudget = watch("budgetTimeline.budgetRange");
  const selectedUrgency = watch("budgetTimeline.urgency");
  const selectedProcurement = watch("budgetTimeline.procurementType");
  const selectedPreference = watch("budgetTimeline.preference");

  return (
    <motion.div
      variants={staggerContainerFast}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ochre-100 text-ochre-600 mb-4">
          <Calculator className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-charcoal-900">
          Budget & timeline
        </h2>
        <p className="mt-2 text-charcoal-600">
          Help us recommend solutions within your parameters.
        </p>
      </motion.div>

      {/* Budget range */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          <span className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-ochre-500" />
            Budget range
          </span>
        </label>
        <Controller
          name="budgetTimeline.budgetRange"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {BUDGET_RANGES.map((budget) => (
                <button
                  key={budget.value}
                  type="button"
                  onClick={() => field.onChange(budget.value)}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200",
                    selectedBudget === budget.value
                      ? "border-ochre-500 bg-ochre-50 text-ochre-700"
                      : "border-cream-200 bg-white text-charcoal-700 hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  {budget.label}
                </button>
              ))}
            </div>
          )}
        />
        {errors.budgetTimeline?.budgetRange && (
          <p className="mt-2 text-sm text-red-600">
            {errors.budgetTimeline.budgetRange.message}
          </p>
        )}
      </motion.div>

      {/* Timeline */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-ochre-500" />
            When do you need a solution?
          </span>
        </label>
        <Controller
          name="budgetTimeline.urgency"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-2">
              {URGENCY_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => field.onChange(option.value)}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200",
                    selectedUrgency === option.value
                      ? "border-ochre-500 bg-ochre-50 text-ochre-700"
                      : "border-cream-200 bg-white text-charcoal-700 hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        />
      </motion.div>

      {/* Procurement type */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          <span className="flex items-center gap-2">
            <Building className="w-4 h-4 text-ochre-500" />
            Type of organisation
          </span>
        </label>
        <Controller
          name="budgetTimeline.procurementType"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-2">
              {PROCUREMENT_TYPES.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => field.onChange(type.value)}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200",
                    selectedProcurement === type.value
                      ? "border-ochre-500 bg-ochre-50 text-ochre-700"
                      : "border-cream-200 bg-white text-charcoal-700 hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  {type.label}
                </button>
              ))}
            </div>
          )}
        />

        {/* IPP notice for government */}
        {(selectedProcurement === "government" || selectedProcurement === "indigenous-business") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 p-3 rounded-lg bg-sage-50 border border-sage-200"
          >
            <p className="text-sm text-sage-800">
              <span className="font-semibold">Good news!</span> As an IPP-registered,
              Supply Nation certified Indigenous business, we can help streamline your
              procurement process.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Acquisition preference */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          How would you prefer to acquire equipment?
        </label>
        <Controller
          name="budgetTimeline.preference"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-3">
              {PREFERENCES.map((pref) => (
                <button
                  key={pref.value}
                  type="button"
                  onClick={() => field.onChange(pref.value)}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all duration-200",
                    selectedPreference === pref.value
                      ? "border-ochre-500 bg-ochre-50"
                      : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  <span className="text-xl mb-1 block">{pref.icon}</span>
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      selectedPreference === pref.value
                        ? "text-ochre-700"
                        : "text-charcoal-800"
                    )}
                  >
                    {pref.label}
                  </span>
                  <span className="block text-xs text-charcoal-500 mt-1">
                    {pref.description}
                  </span>
                </button>
              ))}
            </div>
          )}
        />
      </motion.div>
    </motion.div>
  );
}
