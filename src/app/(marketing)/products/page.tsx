import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Printer, Zap, ArrowRight, CheckCircle } from "lucide-react";
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
import { DotPattern } from "@/components/ui/dot-pattern";
import { products, formatVolume } from "@/data/products";
import { ProductsPageSchemas } from "@/components/seo/structured-data";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "HP Enterprise Printers & MFDs | Compare Models",
  description:
    "Compare HP Color LaserJet Enterprise MFDs. A3 & A4 models from 25-50ppm. Volume ranges 1K-100K pages. IPP-registered indigenous supplier. Request pricing today.",
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: "HP Enterprise Printers & MFDs | Dreaming Print Solutions",
    description:
      "Compare HP Color LaserJet Enterprise MFDs. A3 & A4 models from 25-50ppm. Indigenous-owned, IPP registered supplier.",
    url: `${siteConfig.url}/products`,
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Product Structured Data for SEO */}
      <ProductsPageSchemas products={products} />

      {/* Hero */}
      <Section background="cream" className="relative overflow-hidden">
        <DotPattern variant="terracotta" opacity={0.05} />
        <Container className="relative z-10">
          <SectionHeader centered={false} className="max-w-3xl">
            <SectionTitle as="h1">HP Enterprise Printer Range</SectionTitle>
            <SectionDescription>
              Industry-leading multifunction printers designed for reliability,
              security, and enterprise performance. From small teams to
              production environments.
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Products Grid */}
      <Section background="white">
        <Container>
          <div className="space-y-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-6 p-6 lg:p-8">
                  {/* Product Image */}
                  <div className="aspect-[4/3] lg:aspect-square rounded-xl bg-cream-100 flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-contain p-4"
                      />
                    ) : (
                      <Printer className="h-20 w-20 text-charcoal-300" />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="ochre">{product.format}</Badge>
                      <Badge variant="sage">Colour</Badge>
                      <Badge variant="outline">{product.idealFor}</Badge>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl text-charcoal-950 mb-2">
                      HP {product.model}
                    </h2>

                    <p className="text-charcoal-600 mb-4">{product.description}</p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-6 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-ochre-500" />
                        <span className="text-charcoal-700">
                          <strong>{product.speed}</strong> pages/min
                        </span>
                      </div>
                      <div className="text-charcoal-700">
                        <strong>
                          {formatVolume(product.volumeMin, product.volumeMax)}
                        </strong>{" "}
                        pages/month
                      </div>
                      <div className="text-charcoal-700">
                        <strong>{product.format}</strong> format
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {product.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm text-charcoal-600"
                        >
                          <CheckCircle className="h-4 w-4 text-sage-500 mt-0.5 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {product.hasDetailPage && (
                        <Button
                          rightIcon={<ArrowRight className="h-4 w-4" />}
                          asChild
                        >
                          <Link href={`/products/${product.id}`}>
                            View Full Specs
                          </Link>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                        asChild
                      >
                        <Link href={`/contact?product=${product.model}`}>
                          Request Quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* HP Partnership */}
      <Section background="cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 w-16 mx-auto rounded-2xl bg-white shadow-card flex items-center justify-center text-2xl font-bold text-ochre-600 mb-6">
              HP
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-4">
              Authorised HP Partner
            </h2>
            <p className="text-lg text-charcoal-600 mb-8">
              As an authorised HP partner, we provide direct access to the full
              enterprise product range, genuine supplies, and manufacturer-backed
              support. HP&apos;s industry-leading technology combined with our
              Indigenous business advantage.
            </p>
            <Button
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              asChild
            >
              <Link href="/contact">Discuss Your Requirements</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
