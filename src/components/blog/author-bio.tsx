"use client";

/**
 * Author Bio Component - Premium Design
 * Professional author card with gradient accents and clear call-to-action
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ArrowRight, MapPin, Award } from "lucide-react";
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
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-cream-50 via-white to-cream-50 rounded-2xl border border-cream-200",
        className
      )}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ochre-100/50 to-transparent rounded-bl-full" />

      <div className="relative p-6 md:p-8">
        {/* Label */}
        <div className="flex items-center gap-2 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-ochre-200 to-transparent" />
          <span className="text-xs uppercase tracking-wider text-ochre-600 font-semibold px-2">
            About the Author
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-ochre-200 to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Author Avatar */}
          <div className="shrink-0">
            <div className="relative">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-ochre-400 to-ochre-600 flex items-center justify-center shadow-lg shadow-ochre-500/20">
                {author.image ? (
                  <img
                    src={author.image}
                    alt={author.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                ) : (
                  <Building2 className="h-10 w-10 text-white" />
                )}
              </div>
              {/* Supply Nation badge */}
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white shadow-md flex items-center justify-center border border-cream-200">
                <Award className="h-4 w-4 text-ochre-500" />
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl text-charcoal-950 mb-1">
              {author.name}
            </h3>
            <p className="text-charcoal-500 text-sm mb-4 flex items-center gap-2">
              <span>{author.role}</span>
              <span className="text-charcoal-300">•</span>
              <span className="flex items-center gap-1 text-ochre-600">
                <MapPin className="h-3 w-3" />
                Brisbane, Australia
              </span>
            </p>

            <p className="text-charcoal-600 leading-relaxed mb-5 text-[0.9375rem]">
              Dreaming Print Solutions is Australia&apos;s first indigenous-owned enterprise
              printer dealer. We specialise in HP enterprise solutions for government
              and corporate clients, offering expert guidance on procurement, managed
              print services, and print fleet optimisation.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ochre-50 border border-ochre-100 text-xs font-medium text-ochre-700">
                <Award className="h-3 w-3" />
                Supply Nation Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 border border-cream-200 text-xs font-medium text-charcoal-700">
                100% Indigenous Owned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 border border-cream-200 text-xs font-medium text-charcoal-700">
                Authorised HP Partner
              </span>
            </div>

            <Button asChild variant="outline" size="sm" className="group">
              <Link href="/about" className="inline-flex items-center gap-2">
                Learn more about us
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
