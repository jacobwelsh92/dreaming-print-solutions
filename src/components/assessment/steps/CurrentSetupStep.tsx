/**
 * =================================================================
 * STEP 2: Current Setup
 * =================================================================
 */

"use client";

import { useFormContext, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Printer, Clock, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import { COMMON_PRINTER_BRANDS, PRINTER_ISSUES } from "@/lib/assessment/types";
import type { AssessmentFormDataSchema } from "@/lib/assessment/schema";

const CONTRACT_TYPES = [
  { value: "owned", label: "Owned outright", description: "You purchased the equipment" },
  { value: "leased", label: "Leased", description: "Monthly lease payments" },
  { value: "managed-print", label: "Managed Print", description: "Includes supplies & service" },
  { value: "unknown", label: "Not sure", description: "I need to check" },
] as const;

export function CurrentSetupStep() {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext<AssessmentFormDataSchema>();

  const selectedBrand = watch("currentSetup.brand");
  const selectedIssues = watch("currentSetup.issues") || [];
  const selectedContract = watch("currentSetup.contractType");

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
          <Printer className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-charcoal-900">
          Your current print setup
        </h2>
        <p className="mt-2 text-charcoal-600">
          Tell us about your existing equipment and challenges.
        </p>
      </motion.div>

      {/* Current brand */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          Current printer brand
        </label>
        <Controller
          name="currentSetup.brand"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {COMMON_PRINTER_BRANDS.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => field.onChange(brand)}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200",
                    selectedBrand === brand
                      ? "border-ochre-500 bg-ochre-50 text-ochre-700"
                      : "border-cream-200 bg-white text-charcoal-700 hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  {brand}
                </button>
              ))}
            </div>
          )}
        />
        {errors.currentSetup?.brand && (
          <p className="mt-2 text-sm text-red-600">
            {errors.currentSetup.brand.message}
          </p>
        )}
      </motion.div>

      {/* Model (optional) */}
      <motion.div variants={fadeInUp}>
        <Input
          label="Model number"
          optional
          placeholder="e.g., HP LaserJet Pro MFP M428fdw"
          hint="If you know it — helps us compare specifications"
          {...register("currentSetup.model")}
        />
      </motion.div>

      {/* Age */}
      <motion.div variants={fadeInUp}>
        <Input
          type="number"
          label="How old is your current printer?"
          leftIcon={<Clock className="w-5 h-5" />}
          placeholder="Years"
          hint="Approximate age in years"
          error={errors.currentSetup?.ageYears?.message}
          {...register("currentSetup.ageYears", { valueAsNumber: true })}
        />
      </motion.div>

      {/* Issues */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-2">
          <span className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-ochre-500" />
            What issues are you experiencing?
          </span>
        </label>
        <p className="text-sm text-charcoal-500 mb-3">Select all that apply</p>
        <Controller
          name="currentSetup.issues"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {PRINTER_ISSUES.map((issue) => {
                const isSelected = selectedIssues.includes(issue.value);
                return (
                  <button
                    key={issue.value}
                    type="button"
                    onClick={() => {
                      const newValue = isSelected
                        ? selectedIssues.filter((v) => v !== issue.value)
                        : [...selectedIssues, issue.value];
                      field.onChange(newValue);
                    }}
                    className={cn(
                      "px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-all duration-200",
                      isSelected
                        ? "border-ochre-500 bg-ochre-50 text-ochre-700"
                        : "border-cream-200 bg-white text-charcoal-700 hover:border-cream-300 hover:bg-cream-50"
                    )}
                  >
                    {issue.label}
                  </button>
                );
              })}
            </div>
          )}
        />
        {errors.currentSetup?.issues && (
          <p className="mt-2 text-sm text-red-600">
            {errors.currentSetup.issues.message}
          </p>
        )}
      </motion.div>

      {/* Contract type */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          How is your current equipment acquired?
        </label>
        <Controller
          name="currentSetup.contractType"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-3">
              {CONTRACT_TYPES.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => field.onChange(type.value)}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all duration-200",
                    selectedContract === type.value
                      ? "border-ochre-500 bg-ochre-50"
                      : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      selectedContract === type.value
                        ? "text-ochre-700"
                        : "text-charcoal-800"
                    )}
                  >
                    {type.label}
                  </span>
                  <span className="block text-xs text-charcoal-500 mt-1">
                    {type.description}
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
