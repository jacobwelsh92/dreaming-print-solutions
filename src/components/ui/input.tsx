"use client";

/**
 * =================================================================
 * INPUT COMPONENT
 * =================================================================
 *
 * Form inputs must feel trustworthy and clear. They should:
 * - GUIDE: Labels and hints help users know what to enter
 * - RESPOND: Clear focus states and feedback
 * - FORGIVE: Error states are helpful, not punishing
 *
 * The input uses a subtle background tint on focus that makes
 * the active field feel "warm" - like sunlight falling on paper.
 */

import { forwardRef, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// =================================================================
// INPUT COMPONENT
// =================================================================

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label */
  label?: string;
  /** Helper text below input */
  hint?: string;
  /** Error message - shows error state when present */
  error?: string;
  /** Success state */
  success?: boolean;
  /** Icon on the left side */
  leftIcon?: React.ReactNode;
  /** Icon on the right side */
  rightIcon?: React.ReactNode;
  /** Make the field optional (adds "(optional)" to label) */
  optional?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      hint,
      error,
      success,
      leftIcon,
      rightIcon,
      optional,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate IDs for accessibility
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;

    const hasError = Boolean(error);
    const hasSuccess = success && !hasError;

    // Determine right icon based on state
    const stateIcon = hasError ? (
      <AlertCircle className="h-5 w-5 text-red-500" />
    ) : hasSuccess ? (
      <CheckCircle2 className="h-5 w-5 text-sage-600" />
    ) : null;

    const displayRightIcon = stateIcon || rightIcon;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block text-sm font-medium",
              "mb-2",
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

        {/* Input wrapper */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div
              className={cn(
                "absolute left-3.5 top-1/2 -translate-y-1/2",
                "pointer-events-none",
                disabled ? "text-charcoal-300" : "text-charcoal-400"
              )}
              aria-hidden="true"
            >
              {leftIcon}
            </div>
          )}

          {/* The input */}
          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            className={cn(
              // Base
              "w-full",
              "rounded-xl",
              "border-2",
              "bg-white",
              "px-4 py-3",
              "text-base text-charcoal-950",
              "placeholder:text-charcoal-400",

              // Transitions
              "transition-all duration-200 ease-out",

              // Focus ring - sits outside border
              "focus:outline-none",

              // States
              hasError
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

              // Icon padding
              leftIcon && "pl-11",
              displayRightIcon && "pr-11",

              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : hint ? hintId : undefined
            }
            {...props}
          />

          {/* Right icon or state icon */}
          {displayRightIcon && (
            <div
              className={cn(
                "absolute right-3.5 top-1/2 -translate-y-1/2",
                "pointer-events-none"
              )}
              aria-hidden="true"
            >
              {displayRightIcon}
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
              className="mt-2 text-sm text-red-600 flex items-start gap-1.5"
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

Input.displayName = "Input";

export { Input };
