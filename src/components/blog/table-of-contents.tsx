"use client";

/**
 * Table of Contents Component - Premium Design
 * Auto-generates TOC from article headings with scroll spy and smooth navigation
 */

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Extract headings from HTML content
  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const headingElements = tempDiv.querySelectorAll("h2, h3");
    const items: TOCItem[] = Array.from(headingElements).map((heading, index) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || `heading-${index}`;

      return {
        id,
        text,
        level: heading.tagName === "H2" ? 2 : 3,
      };
    });

    setHeadings(items);
  }, [content]);

  // Scroll spy to highlight active section
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        const firstVisible = visibleEntries[0];
        if (firstVisible) {
          setActiveId(firstVisible.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70%",
        threshold: 0,
      }
    );

    // Observe all heading elements in the article
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile TOC after selection
      if (isMobile) {
        setIsExpanded(false);
      }
    }
  }, [isMobile]);

  // Don't render for short articles
  if (headings.length < 3) return null;

  // Count h2 headings for progress
  const h2Headings = headings.filter((h) => h.level === 2);
  const activeH2Index = h2Headings.findIndex((h) => h.id === activeId);
  const currentH2 = headings.find((h) => h.id === activeId && h.level === 2);
  const progress = activeH2Index >= 0 ? ((activeH2Index + 1) / h2Headings.length) * 100 : 0;

  // Mobile version - collapsible
  if (isMobile) {
    return (
      <nav
        className={cn(
          "bg-cream-50 rounded-xl border border-cream-200 overflow-hidden",
          className
        )}
        aria-label="Table of contents"
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <div className="flex items-center gap-2 text-charcoal-900">
            <List className="h-4 w-4 text-ochre-500" />
            <span className="font-medium text-sm">
              {isExpanded ? "Table of Contents" : (currentH2?.text || "In this article")}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4 text-charcoal-500" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 border-t border-cream-200 pt-3">
                <ul className="space-y-1">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <button
                        onClick={() => scrollToHeading(heading.id)}
                        className={cn(
                          "w-full text-left py-2 px-3 rounded-lg text-sm transition-all",
                          "hover:bg-cream-100",
                          heading.level === 3 && "pl-6 text-xs",
                          activeId === heading.id
                            ? "bg-ochre-50 text-ochre-700 font-medium"
                            : "text-charcoal-600"
                        )}
                      >
                        <span className="line-clamp-1">{heading.text}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }

  // Desktop version - always visible with progress indicator
  return (
    <nav
      className={cn(
        "bg-cream-50 rounded-2xl border border-cream-200 overflow-hidden",
        className
      )}
      aria-label="Table of contents"
    >
      {/* Header with progress */}
      <div className="p-5 pb-4 border-b border-cream-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-charcoal-900">
            <List className="h-4 w-4 text-ochre-500" />
            <span className="font-medium text-sm">In this article</span>
          </div>
          <span className="text-xs text-charcoal-500">
            {h2Headings.length} sections
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-cream-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-ochre-500 to-ochre-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* TOC Items */}
      <div className="p-3 max-h-[60vh] overflow-y-auto">
        <div className="toc-nav">
          {headings.map((heading, index) => {
            const isActive = activeId === heading.id;
            const isH2 = heading.level === 2;

            return (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={cn(
                  "toc-item w-full text-left transition-all",
                  !isH2 && "toc-item-h3",
                  isActive && "active"
                )}
              >
                <span className="line-clamp-2">{heading.text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
