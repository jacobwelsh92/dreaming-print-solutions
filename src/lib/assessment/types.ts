/**
 * =================================================================
 * PRINT ASSESSMENT - Type Definitions
 * =================================================================
 *
 * Comprehensive types for the AI-powered print assessment tool.
 * These types define the shape of form data, API responses, and
 * analysis results.
 */

import type { ProductDetail } from "@/types";

// =====================================================================
// FORM DATA TYPES
// =====================================================================

export type Industry =
  | "government-federal"
  | "government-state"
  | "government-local"
  | "education"
  | "healthcare"
  | "legal"
  | "finance"
  | "manufacturing"
  | "professional-services"
  | "not-for-profit"
  | "indigenous-business"
  | "retail"
  | "hospitality"
  | "construction"
  | "other";

export type OrgSize = "small" | "medium" | "large" | "enterprise";

export type PrinterIssue =
  | "high-running-costs"
  | "frequent-breakdowns"
  | "slow-print-speed"
  | "poor-print-quality"
  | "security-concerns"
  | "no-scanning"
  | "outdated-features"
  | "end-of-life"
  | "no-mobile-printing"
  | "limited-paper-capacity"
  | "poor-support"
  | "no-duplex"
  | "other";

export type ContractType = "owned" | "leased" | "managed-print" | "unknown";

export type ScanningNeeds = "none" | "occasional" | "regular" | "high-volume";

export type SecurityLevel = "basic" | "standard" | "high" | "government-grade";

export type BudgetRange =
  | "under-5k"
  | "5k-10k"
  | "10k-20k"
  | "20k-50k"
  | "over-50k"
  | "flexible";

export type Urgency = "immediate" | "1-3-months" | "3-6-months" | "planning";

export type ProcurementType = "government" | "corporate" | "sme" | "indigenous-business";

export type Preference = "purchase" | "lease" | "managed-print" | "undecided";

export type ContactPreference = "email" | "phone" | "either";

// Step 1: Business Profile
export interface BusinessProfileData {
  industry: Industry;
  orgSize: OrgSize;
  employeeCount: number;
  location: string;
}

// Step 2: Current Setup
export interface CurrentSetupData {
  brand: string;
  model: string;
  ageYears: number;
  issues: PrinterIssue[];
  contractType: ContractType;
}

// Step 3: Print Volume
export interface PrintVolumeData {
  monthlyA4: number;
  monthlyA3: number;
  colorPercentage: number;
  peakPeriods: string;
}

// Step 4: Workflow Needs
export interface WorkflowNeedsData {
  documentTypes: string[];
  scanningNeeds: ScanningNeeds;
  securityLevel: SecurityLevel;
  cloudIntegration: boolean;
  mobilePrinting: boolean;
}

// Step 5: Budget & Timeline
export interface BudgetTimelineData {
  budgetRange: BudgetRange;
  urgency: Urgency;
  procurementType: ProcurementType;
  preference: Preference;
}

// Step 6: Contact Info
export interface ContactInfoData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  preferredContact: ContactPreference;
}

// Complete assessment form data
export interface AssessmentFormData {
  businessProfile: BusinessProfileData;
  currentSetup: CurrentSetupData;
  printVolume: PrintVolumeData;
  workflowNeeds: WorkflowNeedsData;
  budgetTimeline: BudgetTimelineData;
  contactInfo: ContactInfoData;
}

// =====================================================================
// ANALYSIS RESULT TYPES
// =====================================================================

export interface CostBreakdown {
  toner: number;
  paper: number;
  maintenance: number;
  energy: number;
}

export interface CurrentCostEstimate {
  monthly: number;
  annual: number;
  breakdown: CostBreakdown;
}

export interface PotentialSavings {
  monthly: number;
  annual: number;
  percentage: number;
}

export interface ProductRecommendation {
  productId: string;
  product: ProductDetail;
  matchScore: number; // 0-100
  reasons: string[];
  estimatedCost: number;
  paybackPeriodMonths: number;
  priority: "primary" | "alternative" | "budget";
}

export interface WorkflowInsight {
  category: "efficiency" | "security" | "cost" | "sustainability" | "productivity";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
}

export interface ROIProjection {
  breakevenMonths: number;
  threeYearSavings: number;
  fiveYearSavings: number;
  annualizedROI: number; // percentage
}

export interface AnalysisResult {
  executiveSummary: string;
  currentCostEstimate: CurrentCostEstimate;
  potentialSavings: PotentialSavings;
  recommendations: ProductRecommendation[];
  workflowInsights: WorkflowInsight[];
  securityConsiderations: string[];
  roiProjection: ROIProjection;
  industryBenchmarks: {
    averageCostPerPage: number;
    typicalSavings: string;
    adoptionTrend: string;
  };
  generatedAt: string;
}

// =====================================================================
// API TYPES
// =====================================================================

export interface AnalyzeRequest {
  businessProfile: BusinessProfileData;
  currentSetup: CurrentSetupData;
  printVolume: PrintVolumeData;
  workflowNeeds: WorkflowNeedsData;
  budgetTimeline: BudgetTimelineData;
}

export interface AnalyzeResponse {
  success: boolean;
  analysis?: AnalysisResult;
  error?: string;
}

export interface GeneratePDFRequest {
  assessmentData: AssessmentFormData;
  analysis: AnalysisResult;
}

export interface GeneratePDFResponse {
  success: boolean;
  pdfUrl?: string;
  error?: string;
}

export interface SubmitRequest {
  assessmentData: AssessmentFormData;
  analysis: AnalysisResult;
}

export interface SubmitResponse {
  success: boolean;
  assessmentId?: string;
  error?: string;
}

// =====================================================================
// WIZARD STATE TYPES
// =====================================================================

export type WizardStep = 1 | 2 | 3 | 4 | 5 | 6;

export interface WizardState {
  currentStep: WizardStep;
  formData: Partial<AssessmentFormData>;
  analysis: AnalysisResult | null;
  isSubmitting: boolean;
  isAnalyzing: boolean;
  error: string | null;
}

export interface StoredProgress {
  data: Partial<AssessmentFormData>;
  currentStep: WizardStep;
  timestamp: number;
}

// =====================================================================
// UI TYPES
// =====================================================================

export interface StepConfig {
  number: WizardStep;
  title: string;
  description: string;
  icon: string;
}

export const STEP_CONFIGS: StepConfig[] = [
  {
    number: 1,
    title: "Business Profile",
    description: "Tell us about your organisation",
    icon: "Building2",
  },
  {
    number: 2,
    title: "Current Setup",
    description: "Your existing print environment",
    icon: "Printer",
  },
  {
    number: 3,
    title: "Print Volume",
    description: "Monthly printing requirements",
    icon: "BarChart3",
  },
  {
    number: 4,
    title: "Workflow Needs",
    description: "Document and security requirements",
    icon: "Workflow",
  },
  {
    number: 5,
    title: "Budget & Timeline",
    description: "Investment parameters",
    icon: "Calculator",
  },
  {
    number: 6,
    title: "Contact Details",
    description: "How we can reach you",
    icon: "User",
  },
];

// =====================================================================
// CONSTANTS
// =====================================================================

export const INDUSTRIES: { value: Industry; label: string }[] = [
  { value: "government-federal", label: "Federal Government" },
  { value: "government-state", label: "State Government" },
  { value: "government-local", label: "Local Government" },
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "legal", label: "Legal" },
  { value: "finance", label: "Finance & Banking" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "professional-services", label: "Professional Services" },
  { value: "not-for-profit", label: "Not-for-Profit" },
  { value: "indigenous-business", label: "Indigenous Business" },
  { value: "retail", label: "Retail" },
  { value: "hospitality", label: "Hospitality" },
  { value: "construction", label: "Construction" },
  { value: "other", label: "Other" },
];

export const ORG_SIZES: { value: OrgSize; label: string; range: string }[] = [
  { value: "small", label: "Small", range: "1-20 employees" },
  { value: "medium", label: "Medium", range: "21-100 employees" },
  { value: "large", label: "Large", range: "101-500 employees" },
  { value: "enterprise", label: "Enterprise", range: "500+ employees" },
];

export const PRINTER_ISSUES: { value: PrinterIssue; label: string }[] = [
  { value: "high-running-costs", label: "High running costs" },
  { value: "frequent-breakdowns", label: "Frequent breakdowns" },
  { value: "slow-print-speed", label: "Slow print speed" },
  { value: "poor-print-quality", label: "Poor print quality" },
  { value: "security-concerns", label: "Security concerns" },
  { value: "no-scanning", label: "No/poor scanning" },
  { value: "outdated-features", label: "Outdated features" },
  { value: "end-of-life", label: "End of life/support" },
  { value: "no-mobile-printing", label: "No mobile printing" },
  { value: "limited-paper-capacity", label: "Limited paper capacity" },
  { value: "poor-support", label: "Poor vendor support" },
  { value: "no-duplex", label: "No automatic duplex" },
  { value: "other", label: "Other issues" },
];

export const BUDGET_RANGES: { value: BudgetRange; label: string }[] = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-20k", label: "$10,000 - $20,000" },
  { value: "20k-50k", label: "$20,000 - $50,000" },
  { value: "over-50k", label: "Over $50,000" },
  { value: "flexible", label: "Flexible / Not sure" },
];

export const URGENCY_OPTIONS: { value: Urgency; label: string }[] = [
  { value: "immediate", label: "Immediate (within 2 weeks)" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "planning", label: "Just planning / researching" },
];

export const PROCUREMENT_TYPES: { value: ProcurementType; label: string }[] = [
  { value: "government", label: "Government / Public Sector" },
  { value: "corporate", label: "Corporate / Enterprise" },
  { value: "sme", label: "Small-Medium Business" },
  { value: "indigenous-business", label: "Indigenous Business" },
];

export const COMMON_PRINTER_BRANDS = [
  "HP",
  "Canon",
  "Xerox",
  "Konica Minolta",
  "Ricoh",
  "Brother",
  "Epson",
  "Kyocera",
  "Sharp",
  "Lexmark",
  "Samsung",
  "OKI",
  "Toshiba",
  "Unknown / Multiple",
  "Other",
];

export const DOCUMENT_TYPES = [
  "General office documents",
  "Financial reports",
  "Legal documents",
  "Marketing materials",
  "Technical drawings / CAD",
  "Patient/client records",
  "Forms / Applications",
  "Labels / ID cards",
  "Photos / Graphics",
  "Large format (A3+)",
];
