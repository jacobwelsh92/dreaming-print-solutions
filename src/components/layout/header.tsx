"use client";

/**
 * =================================================================
 * HEADER COMPONENT
 * =================================================================
 *
 * The header is the wayfinding system for the site. It should:
 * - ORIENT: Clear indication of where you are
 * - GUIDE: Easy navigation to key sections
 * - ADAPT: Responds to scroll state and device
 *
 * Mobile navigation is a first-class citizen with proper touch
 * targets (minimum 44px), clear visual hierarchy, and smooth
 * animation that doesn't feel sluggish.
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNavItems, contactInfo } from "@/data/navigation";
import { menuBackdrop, menuPanel, menuItem, easeOutFast } from "@/lib/animations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu handler
  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Toggle menu handler
  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      {/* Subtle bottom border - gradient accent line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[1px]",
          "bg-gradient-to-r from-transparent via-ochre-300/60 to-transparent",
          "transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-60"
        )}
      />
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/logo-header.png"
              alt="Dreaming Print Solutions"
              width={220}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-xl",
                    "transition-all duration-200",
                    isActive
                      ? "text-ochre-700 bg-ochre-50"
                      : "text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-100"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="text-sm text-charcoal-600 hover:text-ochre-600 transition-colors hidden lg:flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">{contactInfo.phone}</span>
            </a>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - proper touch target */}
          <button
            type="button"
            className={cn(
              "md:hidden",
              "flex items-center justify-center",
              "w-11 h-11 -mr-2", // 44px touch target
              "rounded-xl",
              "text-charcoal-700",
              "transition-colors duration-200",
              "hover:bg-cream-100 active:bg-cream-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-500 focus-visible:ring-offset-2"
            )}
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-charcoal-950/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu Panel - slides down from header */}
            <motion.div
              id="mobile-menu"
              className={cn(
                "fixed top-16 left-0 right-0 bottom-0",
                "bg-white md:hidden",
                "overflow-y-auto overscroll-contain"
              )}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Container className="py-6">
                {/* Navigation links */}
                <nav className="flex flex-col gap-1" role="navigation">
                  {mainNavItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: prefersReducedMotion ? 0 : index * 0.05,
                          duration: 0.2,
                        }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            // Proper touch target - full width, good height
                            "flex flex-col px-4 py-4 rounded-xl",
                            "min-h-[56px]", // Larger than minimum for comfort
                            "text-lg font-medium",
                            "transition-colors duration-150",
                            "active:scale-[0.98]",
                            isActive
                              ? "text-ochre-700 bg-ochre-50"
                              : "text-charcoal-800 active:bg-cream-100"
                          )}
                          onClick={closeMenu}
                        >
                          {item.label}
                          {item.description && (
                            <span className="text-sm font-normal text-charcoal-500 mt-1">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* CTA section */}
                <motion.div
                  className="mt-6 pt-6 border-t border-cream-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.25 }}
                >
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact" onClick={closeMenu}>
                      Get a Quote
                    </Link>
                  </Button>

                  {/* Phone number */}
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className={cn(
                      "flex items-center justify-center gap-3",
                      "mt-4 py-4 rounded-xl",
                      "text-charcoal-600",
                      "transition-colors duration-150",
                      "active:bg-cream-100"
                    )}
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">{contactInfo.phone}</span>
                  </a>
                </motion.div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
