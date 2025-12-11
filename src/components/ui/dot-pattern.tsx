"use client";

/**
 * =================================================================
 * DREAMING PRINT SOLUTIONS - Dot Pattern System
 * =================================================================
 *
 * These patterns are the visual soul of the site.
 *
 * Inspired by (not appropriating) Indigenous Australian art traditions,
 * these patterns evoke the texture of the land - the way red earth
 * ripples in wind-carved waves, the rhythm of spinifex dots on
 * desert plains, the careful organization of nature.
 *
 * The patterns are:
 * - ALIVE: Subtle motion like the land breathing
 * - LAYERED: Multiple depths creating atmosphere
 * - ORGANIC: Imperfect, varied, human
 * - PURPOSEFUL: Guiding attention, not decorating
 *
 * We use geometric abstractions that honor the aesthetic without
 * copying sacred cultural symbols.
 */

import { useRef, useEffect, useMemo, memo } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// =================================================================
// COLOR SYSTEM
// Colors drawn from Australian landscape photography
// =================================================================

const PALETTE = {
  ochre: {
    primary: "#C25E35",    // Uluru at midday
    secondary: "#E88A66",  // Sandstone cliffs
    tertiary: "#F5C4A1",   // Desert sand
    accent: "#8B4513",     // Deep red earth
  },
  terracotta: {
    primary: "#8B4D3B",    // Red center clay
    secondary: "#A66B5A",  // Weathered rock
    tertiary: "#C99A8A",   // Dried creek bed
    accent: "#5D3328",     // Iron-rich earth
  },
  sage: {
    primary: "#5F8057",    // Eucalyptus leaves
    secondary: "#7D9B76",  // Bush after rain
    tertiary: "#AEC9A7",   // New growth
    accent: "#3D5235",     // Deep bush
  },
  charcoal: {
    primary: "#2A2A2A",    // Burnt country
    secondary: "#4A4A4A",  // Ash
    tertiary: "#6A6A6A",   // Smoke
    accent: "#1A1A1A",     // Night sky
  },
  cream: {
    primary: "#F5F0E8",    // Bleached bone
    secondary: "#EDE6D9",  // Shell
    tertiary: "#E5DBC8",   // Sand
    accent: "#D4C9B0",     // Dry grass
  },
} as const;

type ColorVariant = keyof typeof PALETTE;

// =================================================================
// SEEDED RANDOM
// Consistent "randomness" for visual variation without chaos
// =================================================================

function seededRandom(seed: number): () => number {
  return function () {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}

// =================================================================
// STANDARD DOT PATTERN
// The workhorse - simple but alive
// =================================================================

interface DotPatternProps {
  /** Color variant from our earth palette */
  variant?: ColorVariant;
  /** Overall opacity - let the pattern breathe behind content */
  opacity?: number;
  /** Dot radius in pixels */
  dotSize?: number;
  /** Space between dot centers */
  spacing?: number;
  /** Enable subtle floating animation */
  animated?: boolean;
  /** Add slight position variation for organic feel */
  organic?: boolean;
  /** Random seed for consistent variation */
  seed?: number;
  className?: string;
}

const DotPattern = memo(function DotPattern({
  variant = "ochre",
  opacity = 0.08,
  dotSize = 3,
  spacing = 28,
  animated = true,
  organic = true,
  seed = 42,
  className,
}: DotPatternProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colors = PALETTE[variant];
  const patternId = `dot-${variant}-${seed}`;

  // Generate organic offsets
  const offsets = useMemo(() => {
    if (!organic) return null;
    const random = seededRandom(seed);
    // Generate multiple offset pairs for pattern variation
    return Array.from({ length: 9 }, () => ({
      x: (random() - 0.5) * 4,
      y: (random() - 0.5) * 4,
      scale: 0.8 + random() * 0.4,
      opacity: 0.7 + random() * 0.3,
    }));
  }, [organic, seed]);

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      aria-hidden="true"
    >
      {/* Base layer - consistent grid */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            {organic && offsets && offsets[0] ? (
              // 3x3 grid within each pattern cell for variation
              <>
                <circle
                  cx={spacing / 2 + offsets[0].x}
                  cy={spacing / 2 + offsets[0].y}
                  r={(dotSize / 2) * offsets[0].scale}
                  fill={colors.primary}
                  opacity={offsets[0].opacity}
                />
              </>
            ) : (
              <circle
                cx={spacing / 2}
                cy={spacing / 2}
                r={dotSize / 2}
                fill={colors.primary}
              />
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity={opacity} />
      </svg>

      {/* Subtle movement layer */}
      {shouldAnimate && (
        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern
                id={`${patternId}-float`}
                x="0"
                y="0"
                width={spacing * 2}
                height={spacing * 2}
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx={spacing}
                  cy={spacing}
                  r={dotSize / 3}
                  fill={colors.secondary}
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#${patternId}-float)`}
              opacity={opacity * 0.5}
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
});

DotPattern.displayName = "DotPattern";

// =================================================================
// FLOW PATTERN
// Dots that suggest movement, like water through dry country
// =================================================================

interface FlowPatternProps {
  variant?: ColorVariant;
  opacity?: number;
  /** Direction of the flow */
  direction?: "horizontal" | "vertical" | "diagonal";
  /** Density of the pattern */
  density?: "sparse" | "normal" | "dense";
  animated?: boolean;
  className?: string;
}

const FlowPattern = memo(function FlowPattern({
  variant = "ochre",
  opacity = 0.06,
  direction = "horizontal",
  density = "normal",
  animated = true,
  className,
}: FlowPatternProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const colors = PALETTE[variant];

  const spacingMap = {
    sparse: 48,
    normal: 32,
    dense: 20,
  };
  const spacing = spacingMap[density];

  const rotation = {
    horizontal: 0,
    vertical: 90,
    diagonal: 45,
  };

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `rotate(${rotation[direction]}deg) scale(1.5)`,
          transformOrigin: "center center",
        }}
        animate={
          shouldAnimate
            ? {
                x: [0, -spacing * 2, 0],
              }
            : undefined
        }
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ minWidth: "150%", minHeight: "150%" }}>
          <defs>
            <pattern
              id={`flow-${variant}-${direction}`}
              x="0"
              y="0"
              width={spacing * 3}
              height={spacing}
              patternUnits="userSpaceOnUse"
            >
              {/* Flowing line of dots with varying sizes */}
              <circle cx={spacing * 0.3} cy={spacing / 2} r="2" fill={colors.primary} opacity="0.6" />
              <circle cx={spacing * 0.8} cy={spacing / 2} r="2.5" fill={colors.primary} opacity="0.8" />
              <circle cx={spacing * 1.4} cy={spacing / 2} r="3" fill={colors.primary} opacity="1" />
              <circle cx={spacing * 2.0} cy={spacing / 2} r="2.5" fill={colors.primary} opacity="0.8" />
              <circle cx={spacing * 2.5} cy={spacing / 2} r="2" fill={colors.secondary} opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#flow-${variant}-${direction})`} opacity={opacity} />
        </svg>
      </motion.div>
    </motion.div>
  );
});

FlowPattern.displayName = "FlowPattern";

// =================================================================
// CONCENTRIC PATTERN
// Ripples like water in a billabong, or the rings of a story
// =================================================================

interface ConcentricPatternProps {
  variant?: ColorVariant;
  opacity?: number;
  /** Size of each concentric group */
  size?: "small" | "medium" | "large";
  /** Number of rings around center */
  rings?: 2 | 3 | 4;
  animated?: boolean;
  className?: string;
}

const ConcentricPattern = memo(function ConcentricPattern({
  variant = "ochre",
  opacity = 0.1,
  size = "medium",
  rings = 3,
  animated = true,
  className,
}: ConcentricPatternProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const colors = PALETTE[variant];

  const sizeMap = {
    small: 60,
    medium: 100,
    large: 160,
  };
  const cellSize = sizeMap[size];
  const center = cellSize / 2;

  // Calculate ring radii based on count
  const ringRadii = useMemo(() => {
    const maxRadius = center - 8;
    return Array.from({ length: rings }, (_, i) =>
      ((i + 1) / rings) * maxRadius
    );
  }, [rings, center]);

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id={`concentric-${variant}-${size}-${rings}`}
            x="0"
            y="0"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            {/* Rings from outside in */}
            {ringRadii.map((radius, i) => (
              <circle
                key={i}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={i === rings - 1 ? colors.primary : colors.secondary}
                strokeWidth={i === rings - 1 ? 2 : 1.5}
                opacity={0.3 + (i / rings) * 0.5}
              />
            ))}
            {/* Center dot */}
            <circle
              cx={center}
              cy={center}
              r={4}
              fill={colors.primary}
            />
            {/* Corner dots */}
            <circle cx="0" cy="0" r="2.5" fill={colors.tertiary} opacity="0.5" />
            <circle cx={cellSize} cy="0" r="2.5" fill={colors.tertiary} opacity="0.5" />
            <circle cx="0" cy={cellSize} r="2.5" fill={colors.tertiary} opacity="0.5" />
            <circle cx={cellSize} cy={cellSize} r="2.5" fill={colors.tertiary} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#concentric-${variant}-${size}-${rings})`} opacity={opacity} />
      </svg>

      {/* Gentle pulse animation on center dots */}
      {shouldAnimate && (
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern
                id={`concentric-pulse-${variant}`}
                x="0"
                y="0"
                width={cellSize}
                height={cellSize}
                patternUnits="userSpaceOnUse"
              >
                <circle cx={center} cy={center} r="6" fill={colors.secondary} />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#concentric-pulse-${variant})`}
              opacity={opacity * 0.3}
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
});

ConcentricPattern.displayName = "ConcentricPattern";

// =================================================================
// SCATTER PATTERN
// Organic, irregular distribution like stones on a creek bed
// =================================================================

interface ScatterPatternProps {
  variant?: ColorVariant;
  opacity?: number;
  /** How many dots per cell */
  density?: number;
  /** Random seed for consistent generation */
  seed?: number;
  animated?: boolean;
  className?: string;
}

const ScatterPattern = memo(function ScatterPattern({
  variant = "ochre",
  opacity = 0.08,
  density = 5,
  seed = 123,
  animated = true,
  className,
}: ScatterPatternProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const colors = PALETTE[variant];
  const cellSize = 80;

  // Generate scattered dots
  const dots = useMemo(() => {
    const random = seededRandom(seed);
    return Array.from({ length: density }, () => ({
      x: random() * cellSize,
      y: random() * cellSize,
      r: 1.5 + random() * 2.5,
      color: random() > 0.7 ? colors.secondary : colors.primary,
      opacity: 0.5 + random() * 0.5,
    }));
  }, [seed, density, colors]);

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      aria-hidden="true"
    >
      <motion.svg
        className="absolute inset-0 w-full h-full"
        animate={
          shouldAnimate
            ? {
                y: [0, -4, 0],
                x: [0, 2, 0],
              }
            : undefined
        }
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <defs>
          <pattern
            id={`scatter-${variant}-${seed}`}
            x="0"
            y="0"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            {dots.map((dot, i) => (
              <circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r={dot.r}
                fill={dot.color}
                opacity={dot.opacity}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#scatter-${variant}-${seed})`} opacity={opacity} />
      </motion.svg>
    </motion.div>
  );
});

ScatterPattern.displayName = "ScatterPattern";

// =================================================================
// GRADIENT DOTS
// Dots that fade, creating depth and drawing the eye
// =================================================================

interface GradientDotsProps {
  variant?: ColorVariant;
  opacity?: number;
  /** Which edges to fade from */
  fadeFrom?: "top" | "bottom" | "left" | "right" | "center" | "edges";
  className?: string;
}

const GradientDots = memo(function GradientDots({
  variant = "ochre",
  opacity = 0.12,
  fadeFrom = "edges",
  className,
}: GradientDotsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const colors = PALETTE[variant];
  const spacing = 24;

  const gradientMap = {
    top: "to bottom",
    bottom: "to top",
    left: "to right",
    right: "to left",
    center: "circle at center",
    edges: "circle at center",
  };

  const isRadial = fadeFrom === "center" || fadeFrom === "edges";
  const gradientColors = fadeFrom === "edges"
    ? "transparent 0%, black 50%, black 50%, transparent 100%"
    : fadeFrom === "center"
    ? "black 0%, black 30%, transparent 70%"
    : "black 0%, transparent 100%";

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2 }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id={`gradient-dots-${variant}`}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={spacing / 2} cy={spacing / 2} r="2.5" fill={colors.primary} />
          </pattern>
          <mask id={`gradient-mask-${fadeFrom}`}>
            <rect
              width="100%"
              height="100%"
              fill={isRadial
                ? `url(#radial-gradient-${fadeFrom})`
                : `url(#linear-gradient-${fadeFrom})`
              }
            />
          </mask>
          {isRadial ? (
            <radialGradient id={`radial-gradient-${fadeFrom}`} cx="50%" cy="50%" r="50%">
              {fadeFrom === "edges" ? (
                <>
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="30%" stopColor="white" stopOpacity="1" />
                  <stop offset="70%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </>
              )}
            </radialGradient>
          ) : (
            <linearGradient
              id={`linear-gradient-${fadeFrom}`}
              x1={fadeFrom === "right" ? "100%" : "0%"}
              y1={fadeFrom === "bottom" ? "100%" : "0%"}
              x2={fadeFrom === "left" ? "100%" : fadeFrom === "right" ? "0%" : "0%"}
              y2={fadeFrom === "top" ? "100%" : fadeFrom === "bottom" ? "0%" : "100%"}
            >
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          )}
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#gradient-dots-${variant})`}
          mask={`url(#gradient-mask-${fadeFrom})`}
          opacity={opacity}
        />
      </svg>
    </motion.div>
  );
});

GradientDots.displayName = "GradientDots";

// =================================================================
// HERO PATTERN
// The centrepiece - a rich, layered composition for hero sections
// =================================================================

interface HeroPatternProps {
  variant?: ColorVariant;
  /** Overall intensity */
  intensity?: "subtle" | "medium" | "bold";
  className?: string;
}

const HeroPattern = memo(function HeroPattern({
  variant = "ochre",
  intensity = "medium",
  className,
}: HeroPatternProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const colors = PALETTE[variant];

  const opacityMap = {
    subtle: 0.04,
    medium: 0.07,
    bold: 0.12,
  };
  const baseOpacity = opacityMap[intensity];

  return (
    <motion.div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      aria-hidden="true"
    >
      {/* Layer 1: Large scattered dots for depth */}
      <ScatterPattern
        variant={variant}
        opacity={baseOpacity}
        density={3}
        seed={1}
        animated={!prefersReducedMotion}
      />

      {/* Layer 2: Medium grid for structure */}
      <DotPattern
        variant={variant}
        opacity={baseOpacity * 0.8}
        dotSize={2.5}
        spacing={32}
        organic
        seed={42}
        animated={!prefersReducedMotion}
      />

      {/* Layer 3: Flowing dots for movement */}
      <FlowPattern
        variant={variant}
        opacity={baseOpacity * 0.5}
        direction="diagonal"
        density="sparse"
        animated={!prefersReducedMotion}
      />

      {/* Layer 4: Edge fade for focus */}
      <GradientDots
        variant={variant}
        opacity={baseOpacity * 1.5}
        fadeFrom="edges"
      />
    </motion.div>
  );
});

HeroPattern.displayName = "HeroPattern";

// =================================================================
// EXPORTS
// =================================================================

export {
  DotPattern,
  FlowPattern,
  ConcentricPattern,
  ScatterPattern,
  GradientDots,
  HeroPattern,
  PALETTE,
};

export type {
  DotPatternProps,
  FlowPatternProps,
  ConcentricPatternProps,
  ScatterPatternProps,
  GradientDotsProps,
  HeroPatternProps,
  ColorVariant,
};

// Legacy export for backwards compatibility
export { ConcentricPattern as ConcentricDotPattern };
export type { ConcentricPatternProps as ConcentricDotPatternProps };
