"use client";

/**
 * =================================================================
 * SECTION COMPONENT
 * =================================================================
 *
 * Sections divide page content into meaningful blocks. They provide:
 * - RHYTHM: Consistent vertical spacing creates visual flow
 * - CONTRAST: Background changes mark content shifts
 * - ANIMATION: Scroll-triggered reveals add life
 *
 * The spacing scale is generous - content needs room to breathe.
 * On mobile, spacing reduces proportionally but maintains rhythm.
 */

import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

// =================================================================
// SECTION COMPONENT
// =================================================================

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Background variant */
  background?: "white" | "cream" | "cream-dark" | "charcoal" | "ochre";
  /** Vertical padding size */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** Enable scroll-triggered animation */
  animate?: boolean;
  /** Section ID for navigation */
  id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      children,
      background = "white",
      size = "lg",
      animate = true,
      id,
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();
    const shouldAnimate = animate && !prefersReducedMotion;

    // Background colors with subtle warmth
    const backgroundStyles = {
      white: "bg-white",
      cream: "bg-cream-50",
      "cream-dark": "bg-cream-100",
      charcoal: "bg-charcoal-950 text-white",
      ochre: "bg-ochre-50",
    };

    // Generous vertical padding - content needs room
    const paddingStyles = {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-20 lg:py-24",
      lg: "py-20 md:py-28 lg:py-32",
      xl: "py-24 md:py-32 lg:py-40",
      "2xl": "py-32 md:py-40 lg:py-48",
    };

    const combinedStyles = cn(
      backgroundStyles[background],
      paddingStyles[size],
      className
    );

    if (shouldAnimate) {
      return (
        <motion.section
          ref={ref}
          id={id}
          className={combinedStyles}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {children}
        </motion.section>
      );
    }

    return (
      <section ref={ref} id={id} className={combinedStyles}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

// =================================================================
// SECTION HEADER
// =================================================================

export interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  /** Center the header */
  centered?: boolean;
  /** Maximum width constraint */
  maxWidth?: "sm" | "md" | "lg" | "none";
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, children, centered = true, maxWidth = "lg" }, ref) => {
    const maxWidthStyles = {
      sm: "max-w-xl",
      md: "max-w-2xl",
      lg: "max-w-3xl",
      none: "",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "mb-12 md:mb-16 lg:mb-20",
          centered && "text-center mx-auto",
          maxWidthStyles[maxWidth],
          className
        )}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

// =================================================================
// SECTION TITLE
// =================================================================

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, children, as: Comp = "h2" }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          // Use the display typography scale
          "font-display",
          "text-display-lg md:text-display-xl",
          "text-charcoal-950",
          "leading-[1.1]",
          "tracking-tight",
          // Dark background override
          "section-charcoal:text-white",
          className
        )}
      >
        {children}
      </Comp>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

// =================================================================
// SECTION DESCRIPTION
// =================================================================

export interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const SectionDescription = forwardRef<HTMLParagraphElement, SectionDescriptionProps>(
  ({ className, children }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "mt-4 md:mt-6",
          "text-body-lg md:text-body-xl",
          "text-charcoal-600",
          "leading-relaxed",
          // Dark background override
          "section-charcoal:text-charcoal-300",
          className
        )}
      >
        {children}
      </p>
    );
  }
);

SectionDescription.displayName = "SectionDescription";

// =================================================================
// SECTION EYEBROW
// A small label above the title
// =================================================================

export interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

const SectionEyebrow = forwardRef<HTMLParagraphElement, SectionEyebrowProps>(
  ({ className, children }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "mb-3 md:mb-4",
          "text-sm font-semibold tracking-wider uppercase",
          "text-ochre-600",
          className
        )}
      >
        {children}
      </p>
    );
  }
);

SectionEyebrow.displayName = "SectionEyebrow";

// =================================================================
// EXPORTS
// =================================================================

export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionEyebrow,
};
