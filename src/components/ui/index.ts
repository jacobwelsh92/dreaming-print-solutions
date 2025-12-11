/**
 * =================================================================
 * UI COMPONENT LIBRARY
 * =================================================================
 *
 * Dreaming Print Solutions - "Earth Meets Enterprise"
 *
 * Every component in this library is designed to feel:
 * - GROUNDED: Solid, reliable, trustworthy
 * - WARM: Approachable without being casual
 * - PRECISE: Attention to detail that builds confidence
 */

// =================================================================
// BUTTON
// =================================================================
export { Button, buttonVariants, type ButtonProps } from "./button";

// =================================================================
// CARD
// =================================================================
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
  type CardProps,
  type CardHeaderProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardContentProps,
  type CardFooterProps,
} from "./card";

// =================================================================
// FORM INPUTS
// =================================================================
export { Input, type InputProps } from "./input";
export { Textarea, type TextareaProps } from "./textarea";

// =================================================================
// BADGE
// =================================================================
export { Badge, badgeVariants, type BadgeProps } from "./badge";

// =================================================================
// LAYOUT
// =================================================================
export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionEyebrow,
  type SectionProps,
  type SectionHeaderProps,
  type SectionTitleProps,
  type SectionDescriptionProps,
  type SectionEyebrowProps,
} from "./section";

export { Container, type ContainerProps } from "./container";

// =================================================================
// PATTERNS
// =================================================================
export {
  // Pattern components
  DotPattern,
  FlowPattern,
  ConcentricPattern,
  ScatterPattern,
  GradientDots,
  HeroPattern,
  // Color palette
  PALETTE,
  // Legacy alias for backwards compatibility
  ConcentricDotPattern,
  // Types
  type DotPatternProps,
  type FlowPatternProps,
  type ConcentricPatternProps,
  type ScatterPatternProps,
  type GradientDotsProps,
  type HeroPatternProps,
  type ColorVariant,
} from "./dot-pattern";
