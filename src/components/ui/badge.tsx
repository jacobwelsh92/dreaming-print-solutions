"use client";

/**
 * =================================================================
 * BADGE COMPONENT
 * =================================================================
 *
 * Badges are small status indicators or labels. They should:
 * - INFORM: Quickly convey status or category
 * - COMPLEMENT: Not compete with primary content
 * - DISTINGUISH: Clear visual difference between variants
 */

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// =================================================================
// BADGE VARIANTS
// =================================================================

const badgeVariants = cva(
  [
    // Base layout
    "inline-flex items-center justify-center gap-1.5",
    "rounded-full",
    "whitespace-nowrap",

    // Typography - small but legible
    "text-xs font-semibold tracking-wide uppercase",

    // Default padding
    "px-3 py-1",
  ],
  {
    variants: {
      variant: {
        // Default - neutral
        default: [
          "bg-cream-200/80",
          "text-charcoal-700",
          "ring-1 ring-inset ring-cream-300/50",
        ],

        // Ochre - primary accent
        ochre: [
          "bg-ochre-100",
          "text-ochre-800",
          "ring-1 ring-inset ring-ochre-200/50",
        ],

        // Sage - success / positive
        sage: [
          "bg-sage-100",
          "text-sage-800",
          "ring-1 ring-inset ring-sage-200/50",
        ],

        // Terracotta - warning / attention
        terracotta: [
          "bg-terracotta-100",
          "text-terracotta-800",
          "ring-1 ring-inset ring-terracotta-200/50",
        ],

        // Outline - minimal
        outline: [
          "bg-transparent",
          "text-charcoal-700",
          "ring-1 ring-inset ring-charcoal-300",
        ],

        // Solid - high emphasis
        solid: [
          "bg-charcoal-900",
          "text-white",
        ],

        // Solid ochre - for CTAs
        "solid-ochre": [
          "bg-ochre-600",
          "text-white",
        ],
      },

      size: {
        sm: "text-[10px] px-2 py-0.5",
        md: "text-xs px-3 py-1",
        lg: "text-xs px-4 py-1.5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// =================================================================
// BADGE COMPONENT
// =================================================================

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional leading icon */
  icon?: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {icon && (
          <span className="shrink-0 -ml-0.5" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
