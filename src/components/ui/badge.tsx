import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "text-xs font-medium",
    "px-2.5 py-0.5",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        default: "bg-charcoal-100 text-charcoal-800",
        ochre: "bg-ochre-100 text-ochre-700",
        sage: "bg-sage-100 text-sage-700",
        terracotta: "bg-terracotta-100 text-terracotta-700",
        outline: "border border-charcoal-300 text-charcoal-700 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
