"use client";

/**
 * =================================================================
 * BUTTON COMPONENT
 * =================================================================
 *
 * Buttons are the primary call to action. They must feel:
 * - SOLID: Like pressing something real, not clicking a picture
 * - INTENTIONAL: Clear hierarchy between variants
 * - ACCESSIBLE: Visible focus, proper contrast, screen reader support
 *
 * The interaction design uses subtle scale changes that feel
 * grounded - not bouncy or playful, but substantial.
 */

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonInteraction, springResponsive } from "@/lib/animations";

// =================================================================
// VARIANT DEFINITIONS
// =================================================================

const buttonVariants = cva(
  [
    // Base layout
    "inline-flex items-center justify-center gap-2.5",
    "whitespace-nowrap",

    // Typography - slightly heavier for better legibility
    "font-medium tracking-wide",

    // Shape - larger radius feels more modern/premium
    "rounded-xl",

    // Transitions - everything transitions smoothly
    "transition-all duration-200 ease-out",

    // Focus state - visible and accessible
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",

    // Disabled state
    "disabled:pointer-events-none disabled:opacity-50",

    // Cursor
    "cursor-pointer",

    // Selection
    "select-none",
  ],
  {
    variants: {
      variant: {
        // PRIMARY - The main action, should draw the eye
        primary: [
          // Colors
          "bg-ochre-600 text-white",
          "hover:bg-ochre-700",
          "active:bg-ochre-800",

          // Shadow that reinforces the "raised" feel
          "shadow-[0_2px_4px_rgba(0,0,0,0.08),0_4px_12px_rgba(194,94,53,0.15)]",
          "hover:shadow-[0_4px_8px_rgba(0,0,0,0.1),0_8px_24px_rgba(194,94,53,0.2)]",
          "active:shadow-[0_1px_2px_rgba(0,0,0,0.08)]",

          // Focus ring
          "focus-visible:ring-ochre-500",
        ],

        // SECONDARY - Important but not primary
        secondary: [
          "bg-charcoal-900 text-white",
          "hover:bg-charcoal-800",
          "active:bg-charcoal-950",

          "shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)]",
          "hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.15)]",
          "active:shadow-[0_1px_2px_rgba(0,0,0,0.1)]",

          "focus-visible:ring-charcoal-500",
        ],

        // OUTLINE - Secondary action, pairs with primary
        outline: [
          // Border with subtle background
          "border-2 border-ochre-500/80 text-ochre-700",
          "bg-transparent",

          // Hover fills with color
          "hover:bg-ochre-50 hover:border-ochre-600",
          "active:bg-ochre-100",

          // Subtle shadow for depth
          "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
          "hover:shadow-[0_2px_4px_rgba(194,94,53,0.08)]",

          "focus-visible:ring-ochre-500",
        ],

        // GHOST - Minimal, for tertiary actions
        ghost: [
          "text-charcoal-700",
          "bg-transparent",

          "hover:bg-charcoal-100 hover:text-charcoal-900",
          "active:bg-charcoal-200",

          "focus-visible:ring-charcoal-400",
        ],

        // SUBTLE - Like ghost but warmer
        subtle: [
          "text-ochre-700",
          "bg-ochre-50/50",

          "hover:bg-ochre-100 hover:text-ochre-800",
          "active:bg-ochre-150",

          "focus-visible:ring-ochre-400",
        ],
      },

      size: {
        // Proportions carefully considered
        // Height : Horizontal Padding : Font Size
        sm: [
          "h-9 px-4",
          "text-sm",
          "rounded-lg", // Slightly smaller radius for small buttons
        ],
        md: [
          "h-11 px-5",
          "text-sm",
        ],
        lg: [
          "h-13 px-7",
          "text-base",
        ],
        xl: [
          "h-14 px-8",
          "text-base",
        ],
      },

      // Full width option
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

// =================================================================
// COMPONENT
// =================================================================

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  /** Button content */
  children: React.ReactNode;
  /** Show loading spinner */
  isLoading?: boolean;
  /** Icon before text */
  leftIcon?: React.ReactNode;
  /** Icon after text */
  rightIcon?: React.ReactNode;
  /** Render as child element (for Next.js Link) */
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    // For asChild, we need to use Slot from Radix
    // But we can't use motion with Slot directly
    // So we use a simpler approach for links
    if (asChild) {
      return (
        <Slot
          ref={ref as React.RefObject<HTMLElement>}
          className={cn(buttonVariants({ variant, size, fullWidth }), className)}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children}
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || isLoading}
        // Animation variants for interaction
        variants={buttonInteraction}
        initial="rest"
        whileHover={prefersReducedMotion ? undefined : "hover"}
        whileTap={prefersReducedMotion ? undefined : "tap"}
        transition={springResponsive}
        {...props}
      >
        {/* Loading spinner replaces left icon */}
        {isLoading ? (
          <Loader2
            className="h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        ) : leftIcon ? (
          <span className="shrink-0 -ml-0.5" aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}

        {/* Text content */}
        <span className={isLoading ? "opacity-70" : ""}>
          {children}
        </span>

        {/* Right icon */}
        {!isLoading && rightIcon && (
          <span className="shrink-0 -mr-0.5" aria-hidden="true">
            {rightIcon}
          </span>
        )}

        {/* Screen reader loading indicator */}
        {isLoading && (
          <span className="sr-only">Loading...</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
