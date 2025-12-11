"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, hint, error, id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const hintId = `${textareaId}-hint`;
    const errorId = `${textareaId}-error`;

    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "block text-sm font-medium text-charcoal-800",
              "mb-1.5"
            )}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
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
            "min-h-[120px] resize-y",
            className
          )}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? errorId : hint ? hintId : undefined
          }
          {...props}
        />

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

Textarea.displayName = "Textarea";

export { Textarea };
