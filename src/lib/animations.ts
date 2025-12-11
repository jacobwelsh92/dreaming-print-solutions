import type { Variants, Transition, TargetAndTransition } from "framer-motion";

/**
 * =================================================================
 * DREAMING PRINT SOLUTIONS - Animation System
 * =================================================================
 *
 * Animation is not decoration. It's communication.
 *
 * Every motion in this system is designed to feel:
 * - GROUNDED: Like the weight of red earth, not floaty or digital
 * - PURPOSEFUL: Movement that guides attention, not distracts
 * - RESPECTFUL: Honours users who prefer reduced motion
 *
 * The easing curves are inspired by natural movement - the way
 * dust settles after a vehicle passes on an outback road, the
 * gentle sway of spinifex grass, the unhurried pace of the land.
 */

// =================================================================
// TRANSITION PRESETS
// Reusable timing configurations
// =================================================================

/**
 * The signature transition - used for most UI interactions.
 * Feels substantial and intentional without being slow.
 */
export const easeOutExpo: Transition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Faster version for micro-interactions.
 * Quick but not jarring.
 */
export const easeOutFast: Transition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Gentle, dignified movement.
 * For elements that should feel soft and welcoming.
 */
export const easeGentle: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

/**
 * Spring physics for interactive elements.
 * Tuned to feel organic, not bouncy.
 */
export const springSubtle: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

export const springResponsive: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 35,
  mass: 0.8,
};

/**
 * For staggered children - creates a wave effect.
 */
export const staggerChildren = (staggerDuration = 0.08): Transition => ({
  staggerChildren: staggerDuration,
  delayChildren: 0.1,
});

// =================================================================
// ENTRANCE ANIMATIONS
// How elements arrive on screen
// =================================================================

/**
 * Fade up - The workhorse entrance animation.
 * Elements rise from below like heat shimmer over desert.
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutExpo,
  },
};

/**
 * Subtle fade up - For less prominent elements.
 */
export const fadeInUpSubtle: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutFast,
  },
};

/**
 * Fade in place - When direction isn't needed.
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: easeGentle,
  },
};

/**
 * Scale in - For elements that should feel like they're
 * emerging from the page itself.
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easeOutExpo,
  },
};

/**
 * Slide from left - For elements entering from the side.
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOutExpo,
  },
};

/**
 * Slide from right.
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOutExpo,
  },
};

// =================================================================
// CONTAINER ANIMATIONS
// For orchestrating child animations
// =================================================================

/**
 * Standard stagger container.
 * Children animate in sequence with 80ms delay between each.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

/**
 * Fast stagger - For lists and grids.
 */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/**
 * Slow stagger - For hero sections where each element
 * deserves attention.
 */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// =================================================================
// INTERACTION ANIMATIONS
// Response to user input
// =================================================================

/**
 * Button interaction states.
 * Subtle scale gives tactile feedback without being cartoonish.
 */
export const buttonInteraction: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: springResponsive,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

/**
 * Card hover - Lifts slightly on hover.
 * The shadow deepens to reinforce the illusion of elevation.
 */
export const cardHover: Variants = {
  rest: {
    y: 0,
    transition: easeOutFast,
  },
  hover: {
    y: -6,
    transition: springGentle,
  },
};

/**
 * Link underline animation.
 * For text links with animated underlines.
 */
export const linkUnderline: Variants = {
  rest: {
    scaleX: 0,
    originX: 0,
  },
  hover: {
    scaleX: 1,
    transition: easeOutFast,
  },
};

// =================================================================
// PAGE & SECTION ANIMATIONS
// Large-scale transitions
// =================================================================

/**
 * Page transition - Subtle fade for route changes.
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/**
 * Section reveal - For scroll-triggered animations.
 * More dramatic than standard fade-in.
 */
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// =================================================================
// MOBILE MENU ANIMATIONS
// =================================================================

/**
 * Mobile menu backdrop.
 */
export const menuBackdrop: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

/**
 * Mobile menu panel - Slides in from right.
 */
export const menuPanel: Variants = {
  closed: {
    x: "100%",
    transition: springSubtle,
  },
  open: {
    x: 0,
    transition: springGentle,
  },
};

/**
 * Mobile menu items - Staggered fade-in.
 */
export const menuItem: Variants = {
  closed: {
    opacity: 0,
    x: 20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: easeOutFast,
  },
};

// =================================================================
// DECORATIVE ANIMATIONS
// For visual elements like the dot patterns
// =================================================================

/**
 * Dot pattern fade - Slow, atmospheric reveal.
 */
export const patternReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.3,
    },
  },
};

/**
 * Subtle pulse - For elements that should draw gentle attention.
 */
export const subtlePulse: TargetAndTransition = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

/**
 * Float animation - Gentle up-down movement.
 * Like dust motes in a shaft of light.
 */
export const float: TargetAndTransition = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

// =================================================================
// SCROLL TRIGGER SETTINGS
// For use with whileInView
// =================================================================

/**
 * Standard viewport detection.
 * Once: true means animation only plays once.
 * Margin creates a buffer so animation starts before element is fully visible.
 */
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

/**
 * Eager viewport detection - triggers earlier.
 */
export const viewportEager = {
  once: true,
  margin: "-40px" as const,
};

/**
 * Repeating viewport detection - for elements that
 * should animate every time they come into view.
 */
export const viewportRepeat = {
  once: false,
  margin: "-100px" as const,
  amount: 0.3 as const,
};

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Creates a delayed version of any variants object.
 */
export function withDelay(variants: Variants, delay: number): Variants {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === "object" && "transition" in variants.visible
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };
}

/**
 * Creates custom stagger timing.
 */
export function createStagger(
  staggerDuration: number,
  delayStart = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delayStart,
      },
    },
  };
}
