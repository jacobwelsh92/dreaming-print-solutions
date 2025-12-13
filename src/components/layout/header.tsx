"use client";

/**
 * =================================================================
 * HEADER COMPONENT - World-Class Navigation
 * =================================================================
 *
 * The header is the wayfinding system for the site. Every pixel
 * has been considered. Every interaction refined.
 *
 * Design principles:
 * - ORIENT: Crystal clear indication of where you are
 * - GUIDE: Effortless navigation to key sections
 * - ADAPT: Responds elegantly to scroll state and device
 * - DELIGHT: Micro-interactions that feel premium
 *
 * Mobile navigation is a first-class citizen with proper touch
 * targets (minimum 44px), clear visual hierarchy, and buttery
 * smooth animations.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Scale,
  Calculator,
  Shield,
  ClipboardList,
  FileText,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNavItems, contactInfo, resourcesDropdownItems, type ResourceNavItem } from "@/data/navigation";

// Icon mapping for resource items
const iconMap = {
  book: BookOpen,
  scale: Scale,
  calculator: Calculator,
  shield: Shield,
  clipboard: ClipboardList,
  file: FileText,
};

// Type badge colors
const typeBadgeColors = {
  guide: "bg-sage-100 text-sage-700",
  comparison: "bg-ochre-100 text-ochre-700",
  tool: "bg-terracotta-100 text-terracotta-700",
  checklist: "bg-cream-200 text-charcoal-700",
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    setIsResourcesOpen(false);
    setIsMobileResourcesOpen(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu handler
  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileResourcesOpen(false);
  }, []);

  // Toggle menu handler
  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Resources dropdown handlers with delay for better UX
  const handleResourcesEnter = useCallback(() => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    setIsResourcesOpen(true);
  }, []);

  const handleResourcesLeave = useCallback(() => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  }, []);

  // Check if any resource path is active
  const isResourcesActive = resourcesDropdownItems.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/")
  );

  return (
    <>
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
        {/* Full-width nav container */}
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8 lg:px-12">
          {/* Logo - Left */}
          <Link
            href="/"
            className="relative flex items-center transition-opacity hover:opacity-90 shrink-0"
          >
            <Image
              src="/images/logo-header.png"
              alt="Dreaming Print Solutions"
              width={220}
              height={50}
              className="h-10 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 xl:px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap",
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

            {/* Resources Dropdown */}
            <div
              ref={resourcesRef}
              className="relative"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button
                className={cn(
                  "relative px-3 xl:px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap",
                  "transition-all duration-200 flex items-center gap-1.5",
                  isResourcesActive || isResourcesOpen
                    ? "text-ochre-700 bg-ochre-50"
                    : "text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-100"
                )}
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isResourcesOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "absolute top-full right-0 mt-2 w-[420px]",
                      "bg-white rounded-2xl shadow-2xl",
                      "border border-cream-200",
                      "overflow-hidden"
                    )}
                  >
                    {/* Decorative top border */}
                    <div className="h-1 bg-gradient-to-r from-ochre-400 via-terracotta-400 to-ochre-400" />

                    {/* Featured items */}
                    <div className="p-3 bg-gradient-to-b from-cream-50 to-white border-b border-cream-100">
                      <div className="grid grid-cols-2 gap-2">
                        {resourcesDropdownItems
                          .filter((item) => item.featured)
                          .map((item) => {
                            const Icon = iconMap[item.icon];
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                  "group flex items-start gap-3 p-3 rounded-xl",
                                  "bg-white border border-cream-200",
                                  "hover:border-ochre-200 hover:shadow-md",
                                  "transition-all duration-200"
                                )}
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div
                                  className={cn(
                                    "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                                    "bg-gradient-to-br from-ochre-100 to-ochre-50",
                                    "group-hover:from-ochre-200 group-hover:to-ochre-100",
                                    "transition-colors duration-200"
                                  )}
                                >
                                  <Icon className="h-5 w-5 text-ochre-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-charcoal-900 text-sm group-hover:text-ochre-700 transition-colors">
                                      {item.label}
                                    </span>
                                    {item.href === "/print-assessment" && (
                                      <Sparkles className="h-3.5 w-3.5 text-ochre-500" />
                                    )}
                                  </div>
                                  <p className="text-xs text-charcoal-500 mt-0.5 line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    </div>

                    {/* Regular items */}
                    <div className="p-3">
                      <p className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold px-2 mb-2">
                        Guides & Resources
                      </p>
                      <div className="space-y-1">
                        {resourcesDropdownItems
                          .filter((item) => !item.featured)
                          .map((item) => {
                            const Icon = iconMap[item.icon];
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                  "group flex items-start gap-3 p-2.5 rounded-xl",
                                  "hover:bg-cream-50",
                                  "transition-all duration-200"
                                )}
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div
                                  className={cn(
                                    "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
                                    "bg-cream-100 group-hover:bg-ochre-100",
                                    "transition-colors duration-200"
                                  )}
                                >
                                  <Icon className="h-4 w-4 text-charcoal-500 group-hover:text-ochre-600 transition-colors" />
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-charcoal-800 text-sm group-hover:text-ochre-700 transition-colors">
                                      {item.label}
                                    </span>
                                    <span
                                      className={cn(
                                        "text-[10px] uppercase tracking-wide font-semibold px-1.5 py-0.5 rounded",
                                        typeBadgeColors[item.type]
                                      )}
                                    >
                                      {item.type}
                                    </span>
                                  </div>
                                  <p className="text-xs text-charcoal-500 mt-0.5 line-clamp-1">
                                    {item.description}
                                  </p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-charcoal-300 group-hover:text-ochre-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                              </Link>
                            );
                          })}
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="p-3 bg-charcoal-950 flex items-center justify-between">
                      <div className="text-white">
                        <p className="text-sm font-medium">Need expert guidance?</p>
                        <p className="text-xs text-charcoal-400">Our team is here to help</p>
                      </div>
                      <Button asChild size="sm" className="bg-ochre-500 hover:bg-ochre-600">
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA - Right */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="text-sm text-charcoal-600 hover:text-ochre-600 transition-colors hidden xl:flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">{contactInfo.phone}</span>
            </a>
            <Button asChild size="sm">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button - proper touch target */}
          <button
            type="button"
            className={cn(
              "lg:hidden relative z-[60]",
              "flex items-center justify-center",
              "w-11 h-11", // 44px touch target
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
            <span className="sr-only">
              {isMobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Rendered outside header for proper stacking */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - Full screen overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-charcoal-950/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu Panel - Premium slide-in design */}
            <motion.div
              id="mobile-menu"
              className={cn(
                "fixed inset-x-0 top-16 bottom-0 z-50",
                "bg-white lg:hidden",
                "overflow-y-auto overscroll-contain",
                "shadow-2xl"
              )}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Decorative top border */}
              <div className="h-1 bg-gradient-to-r from-ochre-400 via-terracotta-400 to-ochre-400" />

              <Container className="py-6">
                {/* Navigation links */}
                <nav className="flex flex-col gap-1" role="navigation">
                  {mainNavItems.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: prefersReducedMotion ? 0 : index * 0.04,
                          duration: 0.25,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            // Proper touch target - full width, good height
                            "group flex items-center justify-between px-4 py-4 rounded-2xl",
                            "min-h-[60px]",
                            "transition-all duration-200",
                            "active:scale-[0.98]",
                            isActive
                              ? "bg-ochre-50 border border-ochre-100"
                              : "hover:bg-cream-100 border border-transparent"
                          )}
                          onClick={closeMenu}
                        >
                          <div className="flex flex-col">
                            <span className={cn(
                              "text-lg font-medium",
                              isActive ? "text-ochre-700" : "text-charcoal-900"
                            )}>
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="text-sm text-charcoal-500 mt-0.5">
                                {item.description}
                              </span>
                            )}
                          </div>
                          <ArrowRight className={cn(
                            "w-5 h-5 transition-transform duration-200",
                            "group-hover:translate-x-1",
                            isActive ? "text-ochre-400" : "text-charcoal-300"
                          )} />
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Resources Section - Expandable */}
                  <motion.div
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : mainNavItems.length * 0.04,
                      duration: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <button
                      onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                      className={cn(
                        "w-full group flex items-center justify-between px-4 py-4 rounded-2xl",
                        "min-h-[60px]",
                        "transition-all duration-200",
                        "active:scale-[0.98]",
                        isMobileResourcesOpen || isResourcesActive
                          ? "bg-ochre-50 border border-ochre-100"
                          : "hover:bg-cream-100 border border-transparent"
                      )}
                    >
                      <div className="flex flex-col text-left">
                        <span className={cn(
                          "text-lg font-medium",
                          isMobileResourcesOpen || isResourcesActive ? "text-ochre-700" : "text-charcoal-900"
                        )}>
                          Resources
                        </span>
                        <span className="text-sm text-charcoal-500 mt-0.5">
                          Guides, tools, and insights
                        </span>
                      </div>
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        isMobileResourcesOpen || isResourcesActive ? "text-ochre-400" : "text-charcoal-300",
                        isMobileResourcesOpen && "rotate-180"
                      )} />
                    </button>

                    {/* Expandable Resources List */}
                    <AnimatePresence>
                      {isMobileResourcesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-3 px-2 space-y-1">
                            {resourcesDropdownItems.map((item) => {
                              const Icon = iconMap[item.icon];
                              const isActive = pathname === item.href;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={cn(
                                    "flex items-start gap-3 p-3 rounded-xl",
                                    "transition-all duration-200",
                                    isActive
                                      ? "bg-ochre-100 border border-ochre-200"
                                      : "bg-cream-50 hover:bg-cream-100 border border-transparent"
                                  )}
                                  onClick={closeMenu}
                                >
                                  <div
                                    className={cn(
                                      "shrink-0 w-9 h-9 rounded-lg flex items-center justify-center",
                                      isActive
                                        ? "bg-ochre-200"
                                        : "bg-white"
                                    )}
                                  >
                                    <Icon className={cn(
                                      "h-4 w-4",
                                      isActive ? "text-ochre-700" : "text-charcoal-500"
                                    )} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className={cn(
                                        "font-medium text-sm",
                                        isActive ? "text-ochre-700" : "text-charcoal-800"
                                      )}>
                                        {item.label}
                                      </span>
                                      <span
                                        className={cn(
                                          "text-[10px] uppercase tracking-wide font-semibold px-1.5 py-0.5 rounded",
                                          typeBadgeColors[item.type]
                                        )}
                                      >
                                        {item.type}
                                      </span>
                                    </div>
                                    <p className="text-xs text-charcoal-500 mt-0.5 line-clamp-2">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </nav>

                {/* CTA section */}
                <motion.div
                  className="mt-8 pt-6 border-t border-cream-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.3,
                    duration: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Button
                    className="w-full h-14 text-base rounded-2xl"
                    size="lg"
                    asChild
                  >
                    <Link href="/contact" onClick={closeMenu}>
                      Get a Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  {/* Phone number - Premium styling */}
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className={cn(
                      "flex items-center justify-center gap-3",
                      "mt-4 py-4 rounded-2xl",
                      "bg-cream-100 hover:bg-cream-200",
                      "text-charcoal-700 font-medium",
                      "transition-all duration-200",
                      "active:scale-[0.98]"
                    )}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                      <Phone className="h-5 w-5 text-ochre-600" />
                    </div>
                    <span>{contactInfo.phone}</span>
                  </a>
                </motion.div>

                {/* Trust indicator */}
                <motion.div
                  className="mt-8 pt-6 border-t border-cream-200 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.4,
                    duration: 0.3,
                  }}
                >
                  <p className="text-xs text-charcoal-400">
                    Indigenous-Owned • Supply Nation Certified • HP Partner
                  </p>
                </motion.div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
