"use client";

/**
 * Social Share Component
 * Elegant social sharing buttons for blog posts
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  variant?: "horizontal" | "vertical";
}

export function SocialShare({
  url,
  title,
  description = "",
  className,
  variant = "horizontal"
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "hover:bg-charcoal-100 hover:text-charcoal-700",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const isVertical = variant === "vertical";

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        isVertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {/* Share label */}
      <div className={cn(
        "flex items-center gap-2 text-sm text-charcoal-500",
        isVertical ? "mb-2" : "mr-2"
      )}>
        <Share2 className="h-4 w-4" />
        <span className="font-medium">Share</span>
      </div>

      {/* Share buttons */}
      <div className={cn(
        "flex gap-1",
        isVertical ? "flex-col" : "flex-row"
      )}>
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2.5 rounded-xl bg-cream-50 text-charcoal-600 transition-colors",
              link.color
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Share on ${link.name}`}
          >
            <link.icon className="h-4 w-4" />
          </motion.a>
        ))}

        {/* Copy link button */}
        <motion.button
          onClick={copyToClipboard}
          className={cn(
            "p-2.5 rounded-xl bg-cream-50 text-charcoal-600 transition-colors relative",
            "hover:bg-ochre-100 hover:text-ochre-600"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Copy link"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check className="h-4 w-4 text-green-600" />
              </motion.div>
            ) : (
              <motion.div
                key="link"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <LinkIcon className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          <AnimatePresence>
            {(showTooltip || copied) && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className={cn(
                  "absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1",
                  "text-xs font-medium text-white bg-charcoal-900 rounded-md whitespace-nowrap"
                )}
              >
                {copied ? "Copied!" : "Copy link"}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
