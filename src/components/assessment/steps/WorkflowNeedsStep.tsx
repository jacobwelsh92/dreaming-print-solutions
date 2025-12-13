/**
 * =================================================================
 * STEP 4: Workflow Needs
 * =================================================================
 */

"use client";

import { useFormContext, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Workflow, Scan, Shield, Cloud, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import { DOCUMENT_TYPES } from "@/lib/assessment/types";
import type { AssessmentFormDataSchema } from "@/lib/assessment/schema";

const SCANNING_NEEDS = [
  { value: "none", label: "None", description: "We don't scan documents" },
  { value: "occasional", label: "Occasional", description: "A few times per week" },
  { value: "regular", label: "Regular", description: "Daily scanning needs" },
  { value: "high-volume", label: "High volume", description: "Heavy scanning workload" },
] as const;

const SECURITY_LEVELS = [
  { value: "basic", label: "Basic", description: "Standard office security", icon: "🔓" },
  { value: "standard", label: "Standard", description: "PIN/badge access, secure print", icon: "🔒" },
  { value: "high", label: "High", description: "Encryption, audit trails", icon: "🛡️" },
  { value: "government-grade", label: "Government", description: "Common Criteria certified", icon: "🏛️" },
] as const;

export function WorkflowNeedsStep() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<AssessmentFormDataSchema>();

  const selectedDocTypes = watch("workflowNeeds.documentTypes") || [];
  const selectedScanning = watch("workflowNeeds.scanningNeeds");
  const selectedSecurity = watch("workflowNeeds.securityLevel");
  const cloudIntegration = watch("workflowNeeds.cloudIntegration");
  const mobilePrinting = watch("workflowNeeds.mobilePrinting");

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
          <Workflow className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-charcoal-900">
          Workflow requirements
        </h2>
        <p className="mt-2 text-charcoal-600">
          Tell us how you work so we can recommend the best features.
        </p>
      </motion.div>

      {/* Document types */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          What types of documents do you print most often?
        </label>
        <p className="text-sm text-charcoal-500 mb-3">Select all that apply</p>
        <Controller
          name="workflowNeeds.documentTypes"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {DOCUMENT_TYPES.map((docType) => {
                const isSelected = selectedDocTypes.includes(docType);
                return (
                  <button
                    key={docType}
                    type="button"
                    onClick={() => {
                      const newValue = isSelected
                        ? selectedDocTypes.filter((v) => v !== docType)
                        : [...selectedDocTypes, docType];
                      field.onChange(newValue);
                    }}
                    className={cn(
                      "px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-all duration-200",
                      isSelected
                        ? "border-ochre-500 bg-ochre-50 text-ochre-700"
                        : "border-cream-200 bg-white text-charcoal-700 hover:border-cream-300 hover:bg-cream-50"
                    )}
                  >
                    {docType}
                  </button>
                );
              })}
            </div>
          )}
        />
        {errors.workflowNeeds?.documentTypes && (
          <p className="mt-2 text-sm text-red-600">
            {errors.workflowNeeds.documentTypes.message}
          </p>
        )}
      </motion.div>

      {/* Scanning needs */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-2">
          <span className="flex items-center gap-2">
            <Scan className="w-4 h-4 text-ochre-500" />
            Scanning requirements
          </span>
        </label>
        <Controller
          name="workflowNeeds.scanningNeeds"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-3">
              {SCANNING_NEEDS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => field.onChange(option.value)}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all duration-200",
                    selectedScanning === option.value
                      ? "border-ochre-500 bg-ochre-50"
                      : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      selectedScanning === option.value
                        ? "text-ochre-700"
                        : "text-charcoal-800"
                    )}
                  >
                    {option.label}
                  </span>
                  <span className="block text-xs text-charcoal-500 mt-1">
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          )}
        />
      </motion.div>

      {/* Security level */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-2">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-ochre-500" />
            Security requirements
          </span>
        </label>
        <Controller
          name="workflowNeeds.securityLevel"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-3">
              {SECURITY_LEVELS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => field.onChange(option.value)}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all duration-200",
                    selectedSecurity === option.value
                      ? "border-ochre-500 bg-ochre-50"
                      : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  <span className="text-xl mb-1 block">{option.icon}</span>
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      selectedSecurity === option.value
                        ? "text-ochre-700"
                        : "text-charcoal-800"
                    )}
                  >
                    {option.label}
                  </span>
                  <span className="block text-xs text-charcoal-500 mt-1">
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          )}
        />
      </motion.div>

      {/* Additional features */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          Additional features needed
        </label>
        <div className="space-y-3">
          <Controller
            name="workflowNeeds.cloudIntegration"
            control={control}
            render={({ field }) => (
              <button
                type="button"
                onClick={() => field.onChange(!cloudIntegration)}
                className={cn(
                  "w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all duration-200",
                  cloudIntegration
                    ? "border-ochre-500 bg-ochre-50"
                    : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                    cloudIntegration ? "bg-ochre-500" : "bg-cream-100"
                  )}
                >
                  <Cloud
                    className={cn(
                      "w-5 h-5",
                      cloudIntegration ? "text-white" : "text-charcoal-400"
                    )}
                  />
                </div>
                <div className="text-left">
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      cloudIntegration ? "text-ochre-700" : "text-charcoal-800"
                    )}
                  >
                    Cloud integration
                  </span>
                  <span className="block text-xs text-charcoal-500">
                    Microsoft 365, Google Workspace, Dropbox
                  </span>
                </div>
              </button>
            )}
          />

          <Controller
            name="workflowNeeds.mobilePrinting"
            control={control}
            render={({ field }) => (
              <button
                type="button"
                onClick={() => field.onChange(!mobilePrinting)}
                className={cn(
                  "w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all duration-200",
                  mobilePrinting
                    ? "border-ochre-500 bg-ochre-50"
                    : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                    mobilePrinting ? "bg-ochre-500" : "bg-cream-100"
                  )}
                >
                  <Smartphone
                    className={cn(
                      "w-5 h-5",
                      mobilePrinting ? "text-white" : "text-charcoal-400"
                    )}
                  />
                </div>
                <div className="text-left">
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      mobilePrinting ? "text-ochre-700" : "text-charcoal-800"
                    )}
                  >
                    Mobile printing
                  </span>
                  <span className="block text-xs text-charcoal-500">
                    Print from phones and tablets
                  </span>
                </div>
              </button>
            )}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
