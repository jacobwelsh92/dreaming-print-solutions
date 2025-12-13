/**
 * =================================================================
 * USE ASSESSMENT WIZARD - State Management Hook
 * =================================================================
 *
 * Central state management for the print assessment wizard.
 * Handles form state, step navigation, localStorage persistence,
 * and API interactions.
 */

"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assessmentSchema,
  defaultAssessmentValues,
  getStepFields,
  type AssessmentFormDataSchema,
} from "@/lib/assessment/schema";
import type {
  WizardStep,
  AnalysisResult,
  StoredProgress,
} from "@/lib/assessment/types";

const STORAGE_KEY = "dps-assessment-progress";
const STORAGE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours
const TOTAL_STEPS = 6;

export interface UseAssessmentWizardReturn {
  // Form state
  form: UseFormReturn<AssessmentFormDataSchema>;

  // Step navigation
  currentStep: WizardStep;
  totalSteps: number;
  progress: number; // 0-100
  isFirstStep: boolean;
  isLastStep: boolean;
  goToStep: (step: WizardStep) => void;
  nextStep: () => Promise<boolean>;
  prevStep: () => void;

  // Analysis state
  analysis: AnalysisResult | null;
  isAnalyzing: boolean;
  isSubmitting: boolean;
  error: string | null;

  // Actions
  submitAssessment: () => Promise<void>;
  resetAssessment: () => void;
  downloadPDF: () => Promise<void>;
  clearError: () => void;

  // Computed
  canProceed: boolean;
  hasStoredProgress: boolean;
}

/**
 * Load saved progress from localStorage
 */
function loadFromStorage(): StoredProgress | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed: StoredProgress = JSON.parse(stored);

    // Check if stored data has expired
    if (Date.now() - parsed.timestamp > STORAGE_EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

/**
 * Save progress to localStorage
 */
function saveToStorage(data: Partial<AssessmentFormDataSchema>, step: WizardStep): void {
  if (typeof window === "undefined") return;

  try {
    const progress: StoredProgress = {
      data,
      currentStep: step,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Failed to save progress to localStorage:", error);
  }
}

/**
 * Main hook for managing the assessment wizard state
 */
export function useAssessmentWizard(): UseAssessmentWizardReturn {
  // Load initial state from storage
  const storedProgress = useMemo(() => loadFromStorage(), []);

  // Step state
  const [currentStep, setCurrentStep] = useState<WizardStep>(
    storedProgress?.currentStep ?? 1
  );

  // Analysis state
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize form with react-hook-form
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<AssessmentFormDataSchema>({
    resolver: zodResolver(assessmentSchema) as any,
    mode: "onChange",
    defaultValues: storedProgress?.data
      ? { ...defaultAssessmentValues, ...storedProgress.data }
      : defaultAssessmentValues,
  });

  // Auto-save to localStorage on form changes
  useEffect(() => {
    const subscription = form.watch((data) => {
      saveToStorage(data as Partial<AssessmentFormDataSchema>, currentStep);
    });
    return () => subscription.unsubscribe();
  }, [form, currentStep]);

  // Computed values
  const progress = useMemo(
    () => Math.round((currentStep / TOTAL_STEPS) * 100),
    [currentStep]
  );

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === TOTAL_STEPS;
  const hasStoredProgress = storedProgress !== null;

  // Check if current step is valid
  const canProceed = useMemo(() => {
    const stepFields = getStepFields(currentStep);
    const errors = form.formState.errors;

    // Check if any step fields have errors
    return stepFields.every((field) => {
      const parts = field.split(".");
      let currentErrors: unknown = errors;
      for (const part of parts) {
        if (currentErrors && typeof currentErrors === "object" && part in currentErrors) {
          currentErrors = (currentErrors as Record<string, unknown>)[part];
        } else {
          return true; // No error for this field
        }
      }
      return currentErrors === undefined;
    });
  }, [currentStep, form.formState.errors]);

  /**
   * Go to a specific step
   */
  const goToStep = useCallback((step: WizardStep) => {
    if (step >= 1 && step <= TOTAL_STEPS) {
      setCurrentStep(step);
      setError(null);
    }
  }, []);

  /**
   * Validate current step and move to next
   */
  const nextStep = useCallback(async (): Promise<boolean> => {
    const stepFields = getStepFields(currentStep) as Array<keyof AssessmentFormDataSchema | `${keyof AssessmentFormDataSchema}.${string}`>;

    // Trigger validation for current step fields
    const isValid = await form.trigger(stepFields as never[]);

    if (isValid && currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => (prev + 1) as WizardStep);
      setError(null);
      return true;
    }

    return false;
  }, [currentStep, form]);

  /**
   * Go to previous step
   */
  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as WizardStep);
      setError(null);
    }
  }, [currentStep]);

  /**
   * Submit assessment for AI analysis
   */
  const submitAssessment = useCallback(async () => {
    setIsSubmitting(true);
    setIsAnalyzing(true);
    setError(null);

    try {
      const data = form.getValues();

      // Step 1: Get AI analysis
      const analyzeResponse = await fetch("/api/assessment/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessProfile: data.businessProfile,
          currentSetup: data.currentSetup,
          printVolume: data.printVolume,
          workflowNeeds: data.workflowNeeds,
          budgetTimeline: data.budgetTimeline,
        }),
      });

      if (!analyzeResponse.ok) {
        throw new Error("Failed to analyze assessment");
      }

      const analyzeResult = await analyzeResponse.json();

      if (!analyzeResult.success) {
        throw new Error(analyzeResult.error || "Analysis failed");
      }

      setAnalysis(analyzeResult.analysis);
      setIsAnalyzing(false);

      // Step 2: Submit lead data and send email
      const submitResponse = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assessmentData: data,
          analysis: analyzeResult.analysis,
        }),
      });

      if (!submitResponse.ok) {
        console.warn("Lead submission failed, but analysis succeeded");
      }

      // Clear stored progress on success
      localStorage.removeItem(STORAGE_KEY);

    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
      setAnalysis(null);
    } finally {
      setIsSubmitting(false);
      setIsAnalyzing(false);
    }
  }, [form]);

  /**
   * Download PDF report
   */
  const downloadPDF = useCallback(async () => {
    if (!analysis) {
      setError("No analysis available to download");
      return;
    }

    try {
      const data = form.getValues();

      const response = await fetch("/api/assessment/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assessmentData: data,
          analysis,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      // Create download link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `DPS-Print-Assessment-${data.contactInfo.company.replace(/\s+/g, "-")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to download PDF");
    }
  }, [analysis, form]);

  /**
   * Reset the assessment to start fresh
   */
  const resetAssessment = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    form.reset(defaultAssessmentValues);
    setCurrentStep(1);
    setAnalysis(null);
    setError(null);
  }, [form]);

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    form,
    currentStep,
    totalSteps: TOTAL_STEPS,
    progress,
    isFirstStep,
    isLastStep,
    goToStep,
    nextStep,
    prevStep,
    analysis,
    isAnalyzing,
    isSubmitting,
    error,
    submitAssessment,
    resetAssessment,
    downloadPDF,
    clearError,
    canProceed,
    hasStoredProgress,
  };
}
