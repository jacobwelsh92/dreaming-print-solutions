"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", label, hint, error, leftIcon, rightIcon, id, ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;

    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block text-sm font-medium text-charcoal-800",
              "mb-1.5"
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            className={cn(
              "w-full rounded-lg",
              "border bg-white",
              "px-4 py-2.5",
              "text-sm text-charcoal-950 placeholder:text-charcoal-400",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              hasError
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-charcoal-200 focus:border-ochre-500 focus:ring-ochre-500/20",
              "disabled:cursor-not-allowed disabled:bg-charcoal-50 disabled:text-charcoal-500",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : hint ? hintId : undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400">
              {rightIcon}
            </div>
          )}
        </div>

        {hint && !hasError && (
          <p id={hintId} className="mt-1.5 text-sm text-charcoal-500">
            {hint}
          </p>
        )}

        {hasError && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
