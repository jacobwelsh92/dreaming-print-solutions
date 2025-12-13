"use client";

/**
 * Reading Progress Indicator - Premium Design
 * Shows a sleek progress bar at the top as user scrolls through article
 * with gradient fill and smooth animation
 */

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ReadingProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Show progress bar only after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px (past hero)
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background track - subtle */}
      <div
        className={`fixed top-0 left-0 right-0 h-[3px] bg-cream-200/50 z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Progress fill - gradient */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[3px] z-50 origin-left transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          scaleX,
          background: "linear-gradient(90deg, #c45a32, #e8926a)",
        }}
      />

      {/* Glow effect at the leading edge */}
      <motion.div
        className={`fixed top-0 h-[3px] w-8 z-50 blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: useTransform(scaleX, (value) => `calc(${value * 100}% - 32px)`),
          background: "linear-gradient(90deg, transparent, #e8926a)",
        }}
      />
    </>
  );
}
