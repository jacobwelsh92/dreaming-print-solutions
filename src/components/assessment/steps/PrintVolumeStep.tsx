/**
 * =================================================================
 * STEP 3: Print Volume
 * =================================================================
 */

"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { BarChart3, FileText, Palette } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import type { AssessmentFormDataSchema } from "@/lib/assessment/schema";

export function PrintVolumeStep() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<AssessmentFormDataSchema>();

  const colorPercentage = watch("printVolume.colorPercentage") || 30;
  const monthlyA4 = watch("printVolume.monthlyA4") || 0;
  const monthlyA3 = watch("printVolume.monthlyA3") || 0;
  const totalVolume = monthlyA4 + monthlyA3;

  // Volume category helper
  const getVolumeCategory = (volume: number) => {
    if (volume < 2000) return { label: "Light", color: "text-sage-600" };
    if (volume < 10000) return { label: "Medium", color: "text-ochre-600" };
    if (volume < 50000) return { label: "High", color: "text-terracotta-600" };
    return { label: "Enterprise", color: "text-charcoal-800" };
  };

  const volumeCategory = getVolumeCategory(totalVolume);

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
          <BarChart3 className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-charcoal-900">
          Your print volume
        </h2>
        <p className="mt-2 text-charcoal-600">
          Understanding your volume helps us recommend the right equipment.
        </p>
      </motion.div>

      {/* Volume inputs */}
      <motion.div variants={fadeInUp} className="space-y-6">
        <Input
          type="number"
          label="Monthly A4 pages"
          leftIcon={<FileText className="w-5 h-5" />}
          placeholder="e.g., 5000"
          hint="Estimate your total monthly A4 prints (black & white + color)"
          error={errors.printVolume?.monthlyA4?.message}
          {...register("printVolume.monthlyA4", { valueAsNumber: true })}
        />

        <Input
          type="number"
          label="Monthly A3 pages"
          leftIcon={<FileText className="w-5 h-5" />}
          placeholder="e.g., 500"
          hint="Leave as 0 if you don't print A3"
          optional
          error={errors.printVolume?.monthlyA3?.message}
          {...register("printVolume.monthlyA3", { valueAsNumber: true })}
        />
      </motion.div>

      {/* Volume summary */}
      {totalVolume > 0 && (
        <motion.div
          variants={fadeInUp}
          className="p-4 rounded-xl bg-cream-50 border border-cream-200"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-charcoal-600">Total monthly volume:</span>
            <span className="font-semibold text-charcoal-900">
              {totalVolume.toLocaleString()} pages
            </span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-charcoal-600">Volume category:</span>
            <span className={cn("font-semibold", volumeCategory.color)}>
              {volumeCategory.label}
            </span>
          </div>
        </motion.div>
      )}

      {/* Color percentage */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          <span className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-ochre-500" />
            Color vs black & white ratio
          </span>
        </label>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            className="w-full h-2 bg-cream-200 rounded-lg appearance-none cursor-pointer accent-ochre-500"
            {...register("printVolume.colorPercentage", { valueAsNumber: true })}
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-charcoal-800" />
              <span className="text-sm text-charcoal-600">
                B&W: {100 - colorPercentage}%
              </span>
            </div>
            <div className="px-3 py-1 rounded-full bg-ochre-100 text-ochre-700 text-sm font-medium">
              {colorPercentage}% Color
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500" />
              <span className="text-sm text-charcoal-600">
                Color: {colorPercentage}%
              </span>
            </div>
          </div>
        </div>
        {errors.printVolume?.colorPercentage && (
          <p className="mt-2 text-sm text-red-600">
            {errors.printVolume.colorPercentage.message}
          </p>
        )}
      </motion.div>

      {/* Peak periods */}
      <motion.div variants={fadeInUp}>
        <Input
          label="Peak usage periods"
          optional
          placeholder="e.g., End of financial year, board meetings"
          hint="When do you experience higher than normal print volumes?"
          {...register("printVolume.peakPeriods")}
        />
      </motion.div>
    </motion.div>
  );
}
