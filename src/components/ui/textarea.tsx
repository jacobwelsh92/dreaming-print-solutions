"use client";

/**
 * =================================================================
 * TEXTAREA COMPONENT
 * =================================================================
 *
 * Textareas are for longer-form input. The design matches Input
 * but with considerations for multi-line content.
 */

import { forwardRef, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// =================================================================
// TEXTAREA COMPONENT
// =================================================================

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Field label */
  label?: string;
  /** Helper text below textarea */
  hint?: string;
  /** Error message - shows error state when present */
  error?: string;
  /** Success state */
  success?: boolean;
  /** Make the field optional (adds "(optional)" to label) */
  optional?: boolean;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      hint,
      error,
      success,
      optional,
      showCount,
      maxLength,
      id,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    // Generate IDs for accessibility
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const hintId = `${textareaId}-hint`;
    const errorId = `${textareaId}-error`;

    const hasError = Boolean(error);
    const hasSuccess = success && !hasError;

    // Character count
    const currentLength = typeof value === "string" ? value.length : 0;
    const isOverLimit = maxLength ? currentLength > maxLength : false;

    return (
      <div className="w-full">
        {/* Label row */}
        {(label || (showCount && maxLength)) && (
          <div className="flex items-baseline justify-between mb-2">
            {label && (
              <label
                htmlFor={textareaId}
                className={cn(
                  "block text-sm font-medium",
                  disabled ? "text-charcoal-400" : "text-charcoal-800"
                )}
              >
                {label}
                {optional && (
                  <span className="ml-1.5 font-normal text-charcoal-400">
                    (optional)
                  </span>
                )}
              </label>
            )}

            {showCount && maxLength && (
              <span
                className={cn(
                  "text-xs tabular-nums",
                  isOverLimit ? "text-red-500" : "text-charcoal-400"
                )}
              >
                {currentLength}/{maxLength}
              </span>
            )}
          </div>
        )}

        {/* Textarea wrapper with optional state indicator */}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            disabled={disabled}
            value={value}
            maxLength={maxLength}
            className={cn(
              // Base
              "w-full",
              "rounded-xl",
              "border-2",
              "bg-white",
              "px-4 py-3",
              "text-base text-charcoal-950",
              "placeholder:text-charcoal-400",

              // Size
              "min-h-[140px]",
              "resize-y",

              // Transitions
              "transition-all duration-200 ease-out",

              // Focus ring
              "focus:outline-none",

              // States
              hasError || isOverLimit
                ? [
                    "border-red-400",
                    "bg-red-50/30",
                    "focus:border-red-500",
                    "focus:ring-2 focus:ring-red-500/20",
                  ]
                : hasSuccess
                ? [
                    "border-sage-400",
                    "focus:border-sage-500",
                    "focus:ring-2 focus:ring-sage-500/20",
                  ]
                : [
                    "border-cream-300",
                    "hover:border-cream-400",
                    "focus:border-ochre-500",
                    "focus:bg-ochre-50/30",
                    "focus:ring-2 focus:ring-ochre-500/20",
                  ],

              // Disabled
              "disabled:cursor-not-allowed",
              "disabled:bg-cream-100",
              "disabled:border-cream-200",
              "disabled:text-charcoal-400",
              "disabled:resize-none",

              className
            )}
            aria-invalid={hasError || isOverLimit}
            aria-describedby={
              hasError ? errorId : hint ? hintId : undefined
            }
            {...props}
          />

          {/* State indicator - positioned in bottom right */}
          {(hasError || hasSuccess) && (
            <div
              className="absolute bottom-3 right-3 pointer-events-none"
              aria-hidden="true"
            >
              {hasError ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
              ) : hasSuccess ? (
                <CheckCircle2 className="h-5 w-5 text-sage-600" />
              ) : null}
            </div>
          )}
        </div>

        {/* Hint or error message */}
        <AnimatePresence mode="wait">
          {hasError ? (
            <motion.p
              key="error"
              id={errorId}
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-2 text-sm text-red-600"
            >
              {error}
            </motion.p>
          ) : hint ? (
            <motion.p
              key="hint"
              id={hintId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="mt-2 text-sm text-charcoal-500"
            >
              {hint}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
