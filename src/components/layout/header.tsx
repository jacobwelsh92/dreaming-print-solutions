"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNavItems } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Prevent body scroll when mobile menu is open
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl md:text-2xl text-charcoal-950"
          >
            <span className="text-ochre-500">Dreaming</span>
            <span>Print</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg",
                  "transition-colors duration-200",
                  pathname === item.href
                    ? "text-ochre-600 bg-ochre-50"
                    : "text-charcoal-700 hover:text-ochre-600 hover:bg-cream-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal-700 hover:text-ochre-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-charcoal-950/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              className={cn(
                "fixed top-16 left-0 right-0 bottom-0",
                "bg-white md:hidden",
                "overflow-y-auto"
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Container className="py-6">
                <nav className="flex flex-col gap-2">
                  {mainNavItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg",
                          "text-lg font-medium",
                          "transition-colors duration-200",
                          pathname === item.href
                            ? "text-ochre-600 bg-ochre-50"
                            : "text-charcoal-700 hover:bg-cream-100"
                        )}
                      >
                        {item.label}
                        {item.description && (
                          <span className="block text-sm font-normal text-charcoal-500 mt-0.5">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="mt-6 pt-6 border-t border-cream-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </motion.div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
