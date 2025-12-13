"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { products, formatVolume } from "@/data/products";

export function ProductsPreview() {
  // Show first 3 products as preview
  const featuredProducts = products.slice(0, 3);

  return (
    <Section background="cream">
      <Container>
        <SectionHeader>
          <SectionTitle>HP Enterprise Range</SectionTitle>
          <SectionDescription>
            Industry-leading HP multifunction printers designed for reliability,
            security, and performance. Solutions for every workgroup size.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div key={product.id} variants={fadeInUp} custom={index}>
              <Link href={`/products/${product.id}`}>
                <Card hoverable className="h-full group">
                  <CardContent className="flex flex-col h-full text-center md:text-left">
                    {/* Product Image */}
                    <div className="aspect-[4/3] rounded-lg bg-white flex items-center justify-center mb-4 overflow-hidden border border-cream-200">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="text-charcoal-300 text-sm">
                          Image coming soon
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <Badge variant="ochre">{product.format}</Badge>
                      <Badge variant="sage">Colour</Badge>
                    </div>

                    <h3 className="font-display text-lg text-charcoal-950 mb-1 group-hover:text-ochre-600 transition-colors">
                      HP {product.model}
                    </h3>

                    <p className="text-sm text-charcoal-600 mb-4">
                      {product.idealFor}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 pt-4 mt-auto border-t border-cream-200">
                      <div className="flex items-center gap-1.5 text-sm text-charcoal-600">
                        <Zap className="h-4 w-4 text-ochre-500" />
                        <span>{product.speed} ppm</span>
                      </div>
                      <div className="text-sm text-charcoal-600">
                        {formatVolume(product.volumeMin, product.volumeMax)}/mo
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" variants={fadeInUp}>
          <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />} asChild>
            <Link href="/products">View Full Product Range</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
