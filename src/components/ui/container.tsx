import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * =================================================================
 * CONTAINER COMPONENT
 * =================================================================
 *
 * The container creates consistent horizontal boundaries for content.
 * Padding is responsive - tighter on mobile, more generous on desktop.
 * Max-widths are carefully chosen to maintain readable line lengths.
 */

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Maximum width constraint */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** Remove horizontal padding */
  noPadding?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = "lg", noPadding = false, ...props }, ref) => {
    // Max-widths calibrated for optimal reading
    // Based on 16px base: 65-75 characters per line is ideal
    const sizeStyles = {
      sm: "max-w-2xl",     // 672px - narrow content, great for text
      md: "max-w-4xl",     // 896px - comfortable reading width
      lg: "max-w-6xl",     // 1152px - standard page width
      xl: "max-w-7xl",     // 1280px - expansive layouts
      "2xl": "max-w-[1400px]", // Extra wide for data-dense pages
      full: "max-w-full",  // Full width, edge to edge
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          // Responsive horizontal padding
          // Mobile: 16px, Tablet: 24px, Desktop: 32px, Large: 48px
          !noPadding && "px-4 sm:px-6 lg:px-8 xl:px-12",
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
