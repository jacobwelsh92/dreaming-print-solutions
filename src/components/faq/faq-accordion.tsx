"use client";

/**
 * FAQ Accordion Component
 * Animated, accessible accordion for FAQ items
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function FAQAccordion({
  items,
  allowMultiple = false,
  className,
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("divide-y divide-cream-200", className)}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div key={item.id} className="py-0">
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                "w-full py-5 flex items-start justify-between gap-4 text-left",
                "transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-500 focus-visible:ring-offset-2 rounded-lg -mx-2 px-2"
              )}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span
                className={cn(
                  "font-medium text-charcoal-950 transition-colors",
                  isOpen && "text-ochre-600"
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "shrink-0 h-6 w-6 rounded-full flex items-center justify-center transition-colors",
                  isOpen
                    ? "bg-ochre-100 text-ochre-600"
                    : "bg-cream-100 text-charcoal-500"
                )}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 pr-10">
                    <p className="text-charcoal-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Single FAQ Item (non-accordion, always open)
 */
interface FAQItemDisplayProps {
  item: FAQItem;
  className?: string;
}

export function FAQItemDisplay({ item, className }: FAQItemDisplayProps) {
  return (
    <div className={cn("py-4", className)}>
      <h3 className="font-medium text-charcoal-950 mb-2">{item.question}</h3>
      <p className="text-charcoal-600 leading-relaxed">{item.answer}</p>
    </div>
  );
}
