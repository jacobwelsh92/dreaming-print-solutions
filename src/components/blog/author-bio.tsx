"use client";

/**
 * Author Bio Component
 * Professional author card for blog posts
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AuthorBioProps {
  author: {
    name: string;
    role: string;
    image?: string;
  };
  className?: string;
}

export function AuthorBio({ author, className }: AuthorBioProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-gradient-to-br from-cream-50 to-white rounded-2xl p-6 md:p-8 border border-cream-200",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Author Avatar */}
        <div className="shrink-0">
          <div className="h-20 w-20 rounded-2xl bg-ochre-100 flex items-center justify-center">
            {author.image ? (
              <img
                src={author.image}
                alt={author.name}
                className="h-20 w-20 rounded-2xl object-cover"
              />
            ) : (
              <Building2 className="h-10 w-10 text-ochre-600" />
            )}
          </div>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-ochre-600 font-medium mb-1">
            About the Author
          </p>
          <h3 className="font-display text-xl text-charcoal-950 mb-1">
            {author.name}
          </h3>
          <p className="text-charcoal-500 text-sm mb-4">{author.role}</p>

          <p className="text-charcoal-600 leading-relaxed mb-4">
            Dreaming Print Solutions is Australia&apos;s first indigenous-owned enterprise
            printer dealer. We specialise in HP enterprise solutions for government
            and corporate clients, offering expert guidance on procurement, managed
            print services, and print fleet optimisation.
          </p>

          <Button asChild variant="outline" size="sm" className="group">
            <Link href="/about" className="inline-flex items-center gap-2">
              Learn more about us
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
