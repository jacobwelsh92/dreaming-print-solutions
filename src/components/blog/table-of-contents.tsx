"use client";

/**
 * Table of Contents Component
 * Auto-generates TOC from article headings with scroll spy
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";
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

  // Extract headings from HTML content
  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const h2s = tempDiv.querySelectorAll("h2, h3");
    const items: TOCItem[] = Array.from(h2s).map((heading, index) => {
      const id = heading.textContent
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || `heading-${index}`;

      return {
        id,
        text: heading.textContent || "",
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
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

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length < 3) return null; // Don't show for short articles

  return (
    <nav
      className={cn(
        "bg-cream-50 rounded-xl p-5 border border-cream-200",
        className
      )}
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 mb-4 text-charcoal-950">
        <List className="h-4 w-4" />
        <span className="font-medium text-sm">In this article</span>
      </div>

      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "w-full text-left py-1.5 px-3 rounded-lg text-sm transition-all",
                "hover:bg-cream-100 hover:text-ochre-600",
                heading.level === 3 && "pl-6",
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
    </nav>
  );
}
