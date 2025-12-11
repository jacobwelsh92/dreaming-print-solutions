"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DotPatternProps {
  className?: string;
  variant?: "ochre" | "terracotta" | "sage" | "charcoal";
  opacity?: number;
  dotSize?: number;
  spacing?: number;
  animated?: boolean;
}

function DotPattern({
  className,
  variant = "ochre",
  opacity = 0.1,
  dotSize = 4,
  spacing = 24,
  animated = true,
}: DotPatternProps) {
  const colorMap = {
    ochre: "#C25E35",
    terracotta: "#8B4D3B",
    sage: "#7D9B76",
    charcoal: "#1A1A1A",
  };

  const color = colorMap[variant];
  const patternId = `dot-pattern-${variant}`;

  const svgContent = (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={spacing / 2} cy={spacing / 2} r={dotSize / 2} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity={opacity} />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {svgContent}
      </motion.div>
    );
  }

  return svgContent;
}

DotPattern.displayName = "DotPattern";

// Variant with concentric circles (more traditional dot painting style)
export interface ConcentricDotPatternProps {
  className?: string;
  variant?: "ochre" | "terracotta" | "sage";
  opacity?: number;
}

function ConcentricDotPattern({
  className,
  variant = "ochre",
  opacity = 0.15,
}: ConcentricDotPatternProps) {
  const colorMap = {
    ochre: ["#C25E35", "#E88A66", "#F5B99F"],
    terracotta: ["#8B4D3B", "#C5907F", "#DBB9B0"],
    sage: ["#5F8057", "#7D9B76", "#AEC9A7"],
  };

  const colors = colorMap[variant];

  return (
    <motion.div
      className={cn("absolute inset-0 overflow-hidden", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id={`concentric-${variant}`}
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Outer ring */}
            <circle cx="40" cy="40" r="16" fill="none" stroke={colors[2]} strokeWidth="2" />
            {/* Middle ring */}
            <circle cx="40" cy="40" r="10" fill="none" stroke={colors[1]} strokeWidth="2" />
            {/* Center dot */}
            <circle cx="40" cy="40" r="4" fill={colors[0]} />

            {/* Corner dots */}
            <circle cx="0" cy="0" r="3" fill={colors[1]} />
            <circle cx="80" cy="0" r="3" fill={colors[1]} />
            <circle cx="0" cy="80" r="3" fill={colors[1]} />
            <circle cx="80" cy="80" r="3" fill={colors[1]} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#concentric-${variant})`} />
      </svg>
    </motion.div>
  );
}

ConcentricDotPattern.displayName = "ConcentricDotPattern";

export { DotPattern, ConcentricDotPattern };
