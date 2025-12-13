/**
 * =================================================================
 * PRINT ASSESSMENT - Zod Validation Schemas
 * =================================================================
 *
 * Comprehensive validation schemas for the assessment wizard.
 * Each step has its own schema for per-step validation.
 * Note: Using Zod 4 API with `error` parameter instead of `required_error`.
 */

import { z } from "zod";

// =====================================================================
// STEP 1: Business Profile Schema
// =====================================================================

export const businessProfileSchema = z.object({
  industry: z.enum([
    "government-federal",
    "government-state",
    "government-local",
    "education",
    "healthcare",
    "legal",
    "finance",
    "manufacturing",
    "professional-services",
    "not-for-profit",
    "indigenous-business",
    "retail",
    "hospitality",
    "construction",
    "other",
  ], {
    error: "Please select your industry",
  }),
  orgSize: z.enum(["small", "medium", "large", "enterprise"], {
    error: "Please select your organization size",
  }),
  employeeCount: z
    .number({
      error: "Please enter a valid number of employees",
    })
    .min(1, "Must have at least 1 employee")
    .max(100000, "Please enter a realistic employee count"),
  location: z
    .string({
      error: "Please enter your location",
    })
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location is too long"),
});

// =====================================================================
// STEP 2: Current Setup Schema
// =====================================================================

export const currentSetupSchema = z.object({
  brand: z
    .string({
      error: "Please select your current printer brand",
    })
    .min(1, "Please select your current printer brand"),
  model: z.string().optional().default(""),
  ageYears: z
    .number({
      error: "Please enter the age of your printer",
    })
    .min(0, "Age cannot be negative")
    .max(20, "If your printer is older than 20 years, it's definitely time for an upgrade!"),
  issues: z
    .array(
      z.enum([
        "high-running-costs",
        "frequent-breakdowns",
        "slow-print-speed",
        "poor-print-quality",
        "security-concerns",
        "no-scanning",
        "outdated-features",
        "end-of-life",
        "no-mobile-printing",
        "limited-paper-capacity",
        "poor-support",
        "no-duplex",
        "other",
      ])
    )
    .min(1, "Please select at least one issue you're experiencing"),
  contractType: z.enum(["owned", "leased", "managed-print", "unknown"], {
    error: "Please select your contract type",
  }),
});

// =====================================================================
// STEP 3: Print Volume Schema
// =====================================================================

export const printVolumeSchema = z.object({
  monthlyA4: z
    .number({
      error: "Please enter your monthly A4 print volume",
    })
    .min(0, "Volume cannot be negative")
    .max(1000000, "Please enter a realistic volume"),
  monthlyA3: z
    .number({
      error: "Please enter a valid number",
    })
    .min(0, "Volume cannot be negative")
    .max(500000, "Please enter a realistic volume")
    .optional()
    .default(0),
  colorPercentage: z
    .number({
      error: "Please estimate your color print percentage",
    })
    .min(0, "Percentage cannot be negative")
    .max(100, "Percentage cannot exceed 100%"),
  peakPeriods: z.string().optional().default(""),
});

// =====================================================================
// STEP 4: Workflow Needs Schema
// =====================================================================

export const workflowNeedsSchema = z.object({
  documentTypes: z
    .array(z.string())
    .min(1, "Please select at least one document type"),
  scanningNeeds: z.enum(["none", "occasional", "regular", "high-volume"], {
    error: "Please select your scanning requirements",
  }),
  securityLevel: z.enum(["basic", "standard", "high", "government-grade"], {
    error: "Please select your security requirements",
  }),
  cloudIntegration: z.boolean().default(false),
  mobilePrinting: z.boolean().default(false),
});

// =====================================================================
// STEP 5: Budget & Timeline Schema
// =====================================================================

export const budgetTimelineSchema = z.object({
  budgetRange: z.enum(
    ["under-5k", "5k-10k", "10k-20k", "20k-50k", "over-50k", "flexible"],
    {
      error: "Please select your budget range",
    }
  ),
  urgency: z.enum(["immediate", "1-3-months", "3-6-months", "planning"], {
    error: "Please select your timeline",
  }),
  procurementType: z.enum(["government", "corporate", "sme", "indigenous-business"], {
    error: "Please select your procurement type",
  }),
  preference: z.enum(["purchase", "lease", "managed-print", "undecided"], {
    error: "Please select your preference",
  }),
});

// =====================================================================
// STEP 6: Contact Info Schema
// =====================================================================

const australianPhoneRegex = /^(\+61|0)[2-9]\d{8}$/;

export const contactInfoSchema = z.object({
  firstName: z
    .string({
      error: "First name is required",
    })
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),
  lastName: z
    .string({
      error: "Last name is required",
    })
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),
  email: z
    .string({
      error: "Email is required",
    })
    .email("Please enter a valid email address"),
  phone: z
    .string({
      error: "Phone number is required",
    })
    .regex(
      australianPhoneRegex,
      "Please enter a valid Australian phone number (e.g., 0412345678 or +61412345678)"
    ),
  company: z
    .string({
      error: "Company name is required",
    })
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  jobTitle: z.string().optional().default(""),
  preferredContact: z.enum(["email", "phone", "either"], {
    error: "Please select your preferred contact method",
  }),
});

// =====================================================================
// COMPLETE ASSESSMENT SCHEMA
// =====================================================================

export const assessmentSchema = z.object({
  businessProfile: businessProfileSchema,
  currentSetup: currentSetupSchema,
  printVolume: printVolumeSchema,
  workflowNeeds: workflowNeedsSchema,
  budgetTimeline: budgetTimelineSchema,
  contactInfo: contactInfoSchema,
});

// =====================================================================
// TYPE EXPORTS
// =====================================================================

export type BusinessProfileFormData = z.infer<typeof businessProfileSchema>;
export type CurrentSetupFormData = z.infer<typeof currentSetupSchema>;
export type PrintVolumeFormData = z.infer<typeof printVolumeSchema>;
export type WorkflowNeedsFormData = z.infer<typeof workflowNeedsSchema>;
export type BudgetTimelineFormData = z.infer<typeof budgetTimelineSchema>;
export type ContactInfoFormData = z.infer<typeof contactInfoSchema>;
export type AssessmentFormDataSchema = z.infer<typeof assessmentSchema>;

// =====================================================================
// STEP SCHEMAS MAP
// =====================================================================

export const stepSchemas = {
  1: businessProfileSchema,
  2: currentSetupSchema,
  3: printVolumeSchema,
  4: workflowNeedsSchema,
  5: budgetTimelineSchema,
  6: contactInfoSchema,
} as const;

// Helper to get fields for a specific step
export function getStepFields(step: number): string[] {
  switch (step) {
    case 1:
      return ["businessProfile.industry", "businessProfile.orgSize", "businessProfile.employeeCount", "businessProfile.location"];
    case 2:
      return ["currentSetup.brand", "currentSetup.model", "currentSetup.ageYears", "currentSetup.issues", "currentSetup.contractType"];
    case 3:
      return ["printVolume.monthlyA4", "printVolume.monthlyA3", "printVolume.colorPercentage", "printVolume.peakPeriods"];
    case 4:
      return ["workflowNeeds.documentTypes", "workflowNeeds.scanningNeeds", "workflowNeeds.securityLevel", "workflowNeeds.cloudIntegration", "workflowNeeds.mobilePrinting"];
    case 5:
      return ["budgetTimeline.budgetRange", "budgetTimeline.urgency", "budgetTimeline.procurementType", "budgetTimeline.preference"];
    case 6:
      return ["contactInfo.firstName", "contactInfo.lastName", "contactInfo.email", "contactInfo.phone", "contactInfo.company", "contactInfo.jobTitle", "contactInfo.preferredContact"];
    default:
      return [];
  }
}

// =====================================================================
// DEFAULT VALUES
// =====================================================================

export const defaultAssessmentValues: AssessmentFormDataSchema = {
  businessProfile: {
    industry: "professional-services",
    orgSize: "medium",
    employeeCount: 50,
    location: "",
  },
  currentSetup: {
    brand: "",
    model: "",
    ageYears: 3,
    issues: [],
    contractType: "owned",
  },
  printVolume: {
    monthlyA4: 5000,
    monthlyA3: 0,
    colorPercentage: 30,
    peakPeriods: "",
  },
  workflowNeeds: {
    documentTypes: [],
    scanningNeeds: "regular",
    securityLevel: "standard",
    cloudIntegration: false,
    mobilePrinting: false,
  },
  budgetTimeline: {
    budgetRange: "flexible",
    urgency: "1-3-months",
    procurementType: "corporate",
    preference: "undecided",
  },
  contactInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    preferredContact: "email",
  },
};
