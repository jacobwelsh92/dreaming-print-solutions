/**
 * =================================================================
 * STEP 1: Business Profile
 * =================================================================
 */

"use client";

import { useFormContext, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Building2, MapPin, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import { INDUSTRIES, ORG_SIZES } from "@/lib/assessment/types";
import type { AssessmentFormDataSchema } from "@/lib/assessment/schema";

export function BusinessProfileStep() {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext<AssessmentFormDataSchema>();

  const selectedOrgSize = watch("businessProfile.orgSize");
  const selectedIndustry = watch("businessProfile.industry");

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
          <Building2 className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-charcoal-900">
          Tell us about your organisation
        </h2>
        <p className="mt-2 text-charcoal-600">
          This helps us understand your environment and requirements.
        </p>
      </motion.div>

      {/* Industry selection */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          What industry are you in?
        </label>
        <Controller
          name="businessProfile.industry"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {INDUSTRIES.map((industry) => (
                <button
                  key={industry.value}
                  type="button"
                  onClick={() => field.onChange(industry.value)}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-all duration-200",
                    selectedIndustry === industry.value
                      ? "border-ochre-500 bg-ochre-50 text-ochre-700"
                      : "border-cream-200 bg-white text-charcoal-700 hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  {industry.label}
                </button>
              ))}
            </div>
          )}
        />
        {errors.businessProfile?.industry && (
          <p className="mt-2 text-sm text-red-600">
            {errors.businessProfile.industry.message}
          </p>
        )}
      </motion.div>

      {/* Organisation size */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          Organisation size
        </label>
        <Controller
          name="businessProfile.orgSize"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ORG_SIZES.map((size) => (
                <button
                  key={size.value}
                  type="button"
                  onClick={() => field.onChange(size.value)}
                  className={cn(
                    "p-4 rounded-xl border-2 text-center transition-all duration-200",
                    selectedOrgSize === size.value
                      ? "border-ochre-500 bg-ochre-50"
                      : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                  )}
                >
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      selectedOrgSize === size.value
                        ? "text-ochre-700"
                        : "text-charcoal-800"
                    )}
                  >
                    {size.label}
                  </span>
                  <span className="block text-xs text-charcoal-500 mt-1">
                    {size.range}
                  </span>
                </button>
              ))}
            </div>
          )}
        />
        {errors.businessProfile?.orgSize && (
          <p className="mt-2 text-sm text-red-600">
            {errors.businessProfile.orgSize.message}
          </p>
        )}
      </motion.div>

      {/* Employee count */}
      <motion.div variants={fadeInUp}>
        <Input
          type="number"
          label="Approximate number of employees"
          leftIcon={<Users className="w-5 h-5" />}
          placeholder="e.g., 50"
          error={errors.businessProfile?.employeeCount?.message}
          {...register("businessProfile.employeeCount", {
            valueAsNumber: true,
          })}
        />
      </motion.div>

      {/* Location */}
      <motion.div variants={fadeInUp}>
        <Input
          label="Location"
          leftIcon={<MapPin className="w-5 h-5" />}
          placeholder="e.g., Brisbane, QLD"
          hint="City and state"
          error={errors.businessProfile?.location?.message}
          {...register("businessProfile.location")}
        />
      </motion.div>
    </motion.div>
  );
}
