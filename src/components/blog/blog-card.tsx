/**
 * Blog Card Component
 * Used in blog listing pages and related posts sections
 */

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost, categoryLabels } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (featured) {
    return (
      <Card className={cn("overflow-hidden group", className)}>
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-[16/10] md:aspect-auto bg-gradient-to-br from-cream-100 to-cream-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-2xl bg-ochre-100 flex items-center justify-center">
                  <span className="text-2xl font-display text-ochre-600">
                    {post.title.charAt(0)}
                  </span>
                </div>
              </div>
              {/* Uncomment when images are added:
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              */}
            </div>

            {/* Content */}
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <Badge variant="ochre" className="self-start mb-3">
                {categoryLabels[post.category]}
              </Badge>

              <h3 className="font-display text-2xl md:text-3xl text-charcoal-950 mb-3 group-hover:text-ochre-600 transition-colors">
                {post.title}
              </h3>

              <p className="text-charcoal-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </div>

              <span className="inline-flex items-center gap-2 text-ochre-600 font-medium group-hover:gap-3 transition-all">
                Read article
                <ArrowRight className="h-4 w-4" />
              </span>
            </CardContent>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card className={cn("overflow-hidden group h-full", className)}>
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-cream-100 to-cream-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-xl bg-ochre-100 flex items-center justify-center">
              <span className="text-xl font-display text-ochre-600">
                {post.title.charAt(0)}
              </span>
            </div>
          </div>
          {/* Uncomment when images are added:
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          */}
        </div>

        {/* Content */}
        <CardContent className="p-5 flex flex-col flex-grow">
          <Badge variant="outline" className="self-start mb-3 text-xs">
            {categoryLabels[post.category]}
          </Badge>

          <h3 className="font-display text-lg text-charcoal-950 mb-2 group-hover:text-ochre-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-charcoal-600 mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-charcoal-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime} min
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
