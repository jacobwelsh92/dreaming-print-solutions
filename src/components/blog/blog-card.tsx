"use client";

/**
 * Blog Card Component - Premium Design
 * Professional card design for blog listings with visual hierarchy
 */

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { BlogPost, categoryLabels } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

// Category-specific gradient backgrounds for visual variety
const categoryGradients: Record<string, string> = {
  "industry-insights": "from-sage-500/20 via-sage-400/10 to-cream-100",
  "government-procurement": "from-ochre-500/20 via-ochre-400/10 to-cream-100",
  "product-guides": "from-terracotta-500/20 via-terracotta-400/10 to-cream-100",
  "sustainability": "from-sage-600/20 via-sage-500/10 to-cream-100",
  "company-news": "from-charcoal-500/20 via-charcoal-400/10 to-cream-100",
};

// Category icons for visual interest
const categoryIcons: Record<string, string> = {
  "industry-insights": "📊",
  "government-procurement": "🏛️",
  "product-guides": "🖨️",
  "sustainability": "🌿",
  "company-news": "📰",
};

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const gradient = categoryGradients[post.category] || categoryGradients["industry-insights"];
  const icon = categoryIcons[post.category] || "📄";

  // Featured card - large horizontal layout for hero posts
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("group", className)}
      >
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Visual Side */}
              <div className={cn(
                "relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px]",
                "bg-gradient-to-br",
                gradient
              )}>
                {/* Abstract pattern overlay */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id={`pattern-${post.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-charcoal-400" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${post.id})`} />
                  </svg>
                </div>

                {/* Category icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">{icon}</span>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-4 rounded-[2rem] border-2 border-white/30 group-hover:border-white/50 transition-colors" />
                  </div>
                </div>

                {/* Category badge - positioned in corner */}
                <div className="absolute top-6 left-6">
                  <Badge variant="ochre" className="shadow-md">
                    {categoryLabels[post.category]}
                  </Badge>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formattedDate}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-charcoal-300" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} min read
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl text-charcoal-950 mb-4 group-hover:text-ochre-600 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-charcoal-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-ochre-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-ochre-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal-900">{post.author.name}</p>
                      <p className="text-xs text-charcoal-500">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-ochre-600 font-medium group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Regular card - vertical layout for grid
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn("group h-full", className)}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="h-full bg-white rounded-xl border border-cream-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-ochre-200 transition-all duration-300">
          {/* Visual Header */}
          <div className={cn(
            "relative aspect-[16/9]",
            "bg-gradient-to-br",
            gradient
          )}>
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id={`grid-${post.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="currentColor" className="text-charcoal-400" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${post.id})`} />
              </svg>
            </div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{icon}</span>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs shadow-sm">
                {categoryLabels[post.category]}
              </Badge>
            </div>

            {/* Reading time badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs text-charcoal-600 shadow-sm">
                <Clock className="h-3 w-3" />
                {post.readingTime} min
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Date */}
            <p className="text-xs text-charcoal-500 mb-2 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </p>

            {/* Title */}
            <h3 className="font-display text-lg text-charcoal-950 mb-2 group-hover:text-ochre-600 transition-colors line-clamp-2 leading-snug">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-charcoal-600 line-clamp-2 mb-4">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-cream-100">
              <span className="text-xs text-charcoal-500">{post.author.name}</span>
              <span className="text-ochre-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
