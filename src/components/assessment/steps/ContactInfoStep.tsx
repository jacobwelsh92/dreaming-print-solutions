/**
 * =================================================================
 * STEP 6: Contact Information
 * =================================================================
 */

"use client";

import { useFormContext, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { User, Mail, Phone, Building2, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import type { AssessmentFormDataSchema } from "@/lib/assessment/schema";

const CONTACT_PREFERENCES = [
  { value: "email", label: "Email", icon: Mail },
  { value: "phone", label: "Phone", icon: Phone },
  { value: "either", label: "Either", icon: User },
] as const;

export function ContactInfoStep() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<AssessmentFormDataSchema>();

  const selectedContact = watch("contactInfo.preferredContact");

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
          <User className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-charcoal-900">
          Almost done!
        </h2>
        <p className="mt-2 text-charcoal-600">
          We&apos;ll send your personalized assessment report to this email.
        </p>
      </motion.div>

      {/* Name fields */}
      <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
        <Input
          label="First name"
          leftIcon={<User className="w-5 h-5" />}
          placeholder="John"
          error={errors.contactInfo?.firstName?.message}
          {...register("contactInfo.firstName")}
        />
        <Input
          label="Last name"
          placeholder="Smith"
          error={errors.contactInfo?.lastName?.message}
          {...register("contactInfo.lastName")}
        />
      </motion.div>

      {/* Email */}
      <motion.div variants={fadeInUp}>
        <Input
          type="email"
          label="Work email"
          leftIcon={<Mail className="w-5 h-5" />}
          placeholder="john.smith@company.com"
          hint="We'll send your assessment report here"
          error={errors.contactInfo?.email?.message}
          {...register("contactInfo.email")}
        />
      </motion.div>

      {/* Phone */}
      <motion.div variants={fadeInUp}>
        <Input
          type="tel"
          label="Phone number"
          leftIcon={<Phone className="w-5 h-5" />}
          placeholder="0412 345 678"
          hint="Australian format (e.g., 0412345678 or +61412345678)"
          error={errors.contactInfo?.phone?.message}
          {...register("contactInfo.phone")}
        />
      </motion.div>

      {/* Company */}
      <motion.div variants={fadeInUp}>
        <Input
          label="Company name"
          leftIcon={<Building2 className="w-5 h-5" />}
          placeholder="Acme Corporation"
          error={errors.contactInfo?.company?.message}
          {...register("contactInfo.company")}
        />
      </motion.div>

      {/* Job title */}
      <motion.div variants={fadeInUp}>
        <Input
          label="Job title"
          optional
          leftIcon={<Briefcase className="w-5 h-5" />}
          placeholder="Office Manager"
          {...register("contactInfo.jobTitle")}
        />
      </motion.div>

      {/* Preferred contact method */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm font-medium text-charcoal-800 mb-3">
          Preferred contact method
        </label>
        <Controller
          name="contactInfo.preferredContact"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-3 gap-3">
              {CONTACT_PREFERENCES.map((pref) => {
                const Icon = pref.icon;
                return (
                  <button
                    key={pref.value}
                    type="button"
                    onClick={() => field.onChange(pref.value)}
                    className={cn(
                      "p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-200",
                      selectedContact === pref.value
                        ? "border-ochre-500 bg-ochre-50"
                        : "border-cream-200 bg-white hover:border-cream-300 hover:bg-cream-50"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        selectedContact === pref.value
                          ? "text-ochre-600"
                          : "text-charcoal-400"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium",
                        selectedContact === pref.value
                          ? "text-ochre-700"
                          : "text-charcoal-700"
                      )}
                    >
                      {pref.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        />
      </motion.div>

      {/* Privacy note */}
      <motion.div variants={fadeInUp}>
        <p className="text-xs text-charcoal-500 text-center">
          By submitting this assessment, you agree to our{" "}
          <a href="/privacy-policy" className="text-ochre-600 hover:underline">
            Privacy Policy
          </a>
          . We&apos;ll use your information to prepare your personalized assessment
          and may contact you about our services.
        </p>
      </motion.div>
    </motion.div>
  );
}
