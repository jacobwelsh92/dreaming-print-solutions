"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "cream" | "charcoal";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
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
    const backgroundStyles = {
      white: "bg-white",
      cream: "bg-cream-100",
      charcoal: "bg-charcoal-950 text-white",
    };

    const paddingStyles = {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-20",
      lg: "py-20 md:py-28",
      xl: "py-24 md:py-32",
    };

    const combinedStyles = cn(
      backgroundStyles[background],
      paddingStyles[size],
      className
    );

    if (animate) {
      return (
        <motion.section
          ref={ref}
          id={id}
          className={combinedStyles}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
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

export interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, children, centered = true }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "mb-12 md:mb-16",
          centered && "text-center mx-auto max-w-3xl",
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
          "font-display text-3xl md:text-4xl lg:text-5xl",
          "text-charcoal-950",
          "leading-tight",
          className
        )}
      >
        {children}
      </Comp>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

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
          "mt-4 text-lg md:text-xl",
          "text-charcoal-600",
          "leading-relaxed",
          className
        )}
      >
        {children}
      </p>
    );
  }
);

SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionTitle, SectionDescription };
