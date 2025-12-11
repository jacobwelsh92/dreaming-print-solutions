"use client";

/**
 * =================================================================
 * CARD COMPONENT
 * =================================================================
 *
 * Cards contain related content and actions. They should feel:
 * - CONTAINED: Clear boundaries that group content
 * - ELEVATED: Subtle shadow creates depth without distraction
 * - FLEXIBLE: Works for many content types
 *
 * The card uses a subtle border + shadow combination that feels
 * more grounded than pure shadow elevation. On hover (when enabled),
 * it lifts gently - like picking up a photograph from a table.
 */

import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { cardHover, easeOutFast } from "@/lib/animations";

// =================================================================
// CARD VARIANTS
// =================================================================

const cardVariants = cva(
  [
    // Base styling
    "relative overflow-hidden",
    "rounded-2xl",

    // Background
    "bg-white",

    // Border - subtle warmth
    "border border-cream-200/80",

    // Default shadow - grounded
    "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]",

    // Transition for hover states
    "transition-shadow duration-300 ease-out",
  ],
  {
    variants: {
      variant: {
        default: "",

        // Elevated - for emphasis
        elevated: [
          "shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)]",
        ],

        // Outlined - minimal, just border
        outlined: [
          "shadow-none",
          "border-cream-300",
        ],

        // Ghost - no border or shadow, just grouping
        ghost: [
          "border-transparent",
          "shadow-none",
          "bg-transparent",
        ],

        // Interactive - for clickable cards
        interactive: [
          "cursor-pointer",
          "hover:shadow-[0_4px_12px_rgba(0,0,0,0.08),0_12px_32px_rgba(0,0,0,0.08)]",
          "hover:border-cream-300",
          "active:shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
        ],

        // Featured - ochre accent
        featured: [
          "border-ochre-200",
          "shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_16px_rgba(194,94,53,0.08)]",
        ],
      },

      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "none",
    },
  }
);

// =================================================================
// CARD COMPONENT
// =================================================================

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Enable hover animation */
  hoverable?: boolean;
  /** Content */
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverable = false, variant, padding, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const shouldAnimate = hoverable && !prefersReducedMotion;

    const baseStyles = cn(cardVariants({ variant, padding }), className);

    if (shouldAnimate) {
      return (
        <motion.div
          ref={ref}
          className={baseStyles}
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          transition={easeOutFast}
          {...(props as React.ComponentProps<typeof motion.div>)}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={baseStyles} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// =================================================================
// CARD HEADER
// =================================================================

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-6 pt-6 pb-2",
          // Supports being followed by CardContent without double padding
          "[&+[data-card-content]]:pt-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

// =================================================================
// CARD TITLE
// =================================================================

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, as: Comp = "h3", ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          "font-display text-lg md:text-xl",
          "text-charcoal-950",
          "leading-snug",
          "tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

CardTitle.displayName = "CardTitle";

// =================================================================
// CARD DESCRIPTION
// =================================================================

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-sm text-charcoal-600",
          "mt-1.5",
          "leading-relaxed",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = "CardDescription";

// =================================================================
// CARD CONTENT
// =================================================================

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-card-content
        className={cn("p-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

// =================================================================
// CARD FOOTER
// =================================================================

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Add top border */
  bordered?: boolean;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, bordered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-6 pb-6 pt-4",
          "flex items-center gap-4",
          // Optional top border
          bordered && "border-t border-cream-200 mt-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

// =================================================================
// EXPORTS
// =================================================================

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};
