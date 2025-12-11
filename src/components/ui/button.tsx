"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants as animationVariants } from "@/lib/animations";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium text-sm",
    "rounded-lg",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-500 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-ochre-500 text-white",
          "hover:bg-ochre-600",
          "active:bg-ochre-700",
          "shadow-sm",
        ],
        secondary: [
          "bg-terracotta-500 text-white",
          "hover:bg-terracotta-600",
          "active:bg-terracotta-700",
          "shadow-sm",
        ],
        outline: [
          "border-2 border-ochre-500 text-ochre-600",
          "bg-transparent",
          "hover:bg-ochre-50",
          "active:bg-ochre-100",
        ],
        ghost: [
          "text-charcoal-700",
          "bg-transparent",
          "hover:bg-charcoal-100",
          "active:bg-charcoal-200",
        ],
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        variants={animationVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
