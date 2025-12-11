import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
  FileText,
  Copy,
  Settings,
  Cpu,
  HardDrive,
  Monitor,
  Wifi,
  Cloud,
  Leaf,
  Phone,
  Download,
  TrendingUp,
  DollarSign,
  Scale,
  GraduationCap,
  Heart,
  Landmark,
  Building2,
  ChevronDown,
  ChevronUp,
  Package,
  Layers,
  Lock,
  Plug,
  Box,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DotPattern, ConcentricDotPattern } from "@/components/ui/dot-pattern";
import { siteConfig } from "@/data/site-config";
import {
  getProductDetail,
  getAllProductSlugs,
} from "@/data/products/index";

// Icon mapping for dynamic icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Shield,
  Cloud,
  DollarSign,
  Settings,
  Leaf,
  Landmark,
  Building2,
  Scale,
  GraduationCap,
  Heart,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all products with detail pages
export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductDetail(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.seoKeywords,
    alternates: {
      canonical: `${siteConfig.url}/products/${slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `${siteConfig.url}/products/${slug}`,
      type: "website",
      images: product.image
        ? [{ url: product.image, alt: product.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductDetail(slug);

  if (!product) {
    notFound();
  }

  // Format numbers with commas
  const formatNumber = (num: number) => num.toLocaleString("en-AU");

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.seoDescription,
            brand: {
              "@type": "Brand",
              name: "HP",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Hewlett-Packard",
            },
            sku: product.productNumber,
            mpn: product.model,
            category: "Multifunction Printer",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "AUD",
              seller: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "24",
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <Section background="cream" size="sm" className="border-b border-cream-200">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-charcoal-500 hover:text-ochre-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-charcoal-300">/</span>
            <Link
              href="/products"
              className="text-charcoal-500 hover:text-ochre-600 transition-colors"
            >
              Products
            </Link>
            <span className="text-charcoal-300">/</span>
            <span className="text-charcoal-900 font-medium">{product.model}</span>
          </nav>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section background="cream" className="relative overflow-hidden">
        <DotPattern variant="ochre" opacity={0.04} />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl bg-white shadow-card flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-contain p-4"
                    priority
                  />
                ) : (
                  <Printer className="h-48 w-48 text-charcoal-300" />
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="ochre">{product.format}</Badge>
                <Badge variant="sage">Colour</Badge>
                <Badge variant="outline">Enterprise</Badge>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal-950 mb-4">
                HP {product.model}
              </h1>

              <p className="text-lg text-charcoal-600 mb-6">
                {product.shortDescription}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-cream-200">
                  <Zap className="h-5 w-5 text-ochre-500 mb-2" />
                  <p className="text-2xl font-display text-charcoal-950">
                    {product.speed} ppm
                  </p>
                  <p className="text-sm text-charcoal-500">Print Speed</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-cream-200">
                  <FileText className="h-5 w-5 text-sage-500 mb-2" />
                  <p className="text-2xl font-display text-charcoal-950">
                    {formatNumber(product.dutyCycle.monthly)}
                  </p>
                  <p className="text-sm text-charcoal-500">Monthly Duty Cycle</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-cream-200">
                  <Layers className="h-5 w-5 text-terracotta-500 mb-2" />
                  <p className="text-2xl font-display text-charcoal-950">
                    {formatNumber(product.paperHandling.inputMax)}
                  </p>
                  <p className="text-sm text-charcoal-500">Max Paper Capacity</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-cream-200">
                  <Shield className="h-5 w-5 text-charcoal-500 mb-2" />
                  <p className="text-2xl font-display text-charcoal-950">HP Wolf</p>
                  <p className="text-sm text-charcoal-500">Enterprise Security</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  asChild
                >
                  <Link href={`/contact?product=${product.model}`}>
                    Request a Quote
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<Phone className="h-4 w-4" />}
                  asChild
                >
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-charcoal-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage-500" />
                  IPP Registered Supplier
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ochre-500" />
                  Supply Nation Certified
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Benefits */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Why Choose the HP {product.model}</SectionTitle>
            <SectionDescription>{product.tagline}</SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyBenefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon] || CheckCircle;
              return (
                <Card key={benefit.title}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-ochre-100 text-ochre-600 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg text-charcoal-950 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-charcoal-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Detailed Specifications */}
      <Section background="cream" id="specifications">
        <Container>
          <SectionHeader>
            <SectionTitle>Full Specifications</SectionTitle>
            <SectionDescription>
              Comprehensive technical specifications for the HP {product.model}
            </SectionDescription>
          </SectionHeader>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Print Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Printer className="h-5 w-5 text-ochre-500" />
                  Print Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow
                  label="Print Speed (A4, Black)"
                  value={`Up to ${product.printSpecs.speedBlackA4} ppm`}
                />
                <SpecRow
                  label="Print Speed (A4, Colour)"
                  value={`Up to ${product.printSpecs.speedColorA4} ppm`}
                />
                <SpecRow
                  label="First Page Out (Black)"
                  value={`As fast as ${product.printSpecs.firstPageOutBlack} seconds`}
                />
                <SpecRow
                  label="First Page Out (Colour)"
                  value={`As fast as ${product.printSpecs.firstPageOutColor} seconds`}
                />
                <SpecRow
                  label="Print Resolution"
                  value={product.printSpecs.resolution}
                />
                <SpecRow
                  label="Maximum Resolution"
                  value={product.printSpecs.resolutionMax}
                />
                <SpecRow
                  label="Duplex Printing"
                  value={product.printSpecs.duplexPrint ? "Automatic" : "Manual"}
                />
                <SpecRow
                  label="Print Technology"
                  value={product.printSpecs.technology}
                />
                <SpecRow
                  label="Print Languages"
                  value={product.printSpecs.printLanguages.join(", ")}
                />
              </CardContent>
            </Card>

            {/* Scan Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-sage-500" />
                  Scan Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow
                  label="Scan Speed (Simplex)"
                  value={`Up to ${product.scanSpecs.scanSpeedSimplex} ppm`}
                />
                <SpecRow
                  label="Scan Speed (Duplex)"
                  value={`Up to ${product.scanSpecs.scanSpeedDuplex} ipm`}
                />
                <SpecRow
                  label="Optical Resolution"
                  value={product.scanSpecs.scanResolutionOptical}
                />
                <SpecRow
                  label="ADF Capacity"
                  value={`${product.scanSpecs.adfCapacity} sheets`}
                />
                <SpecRow
                  label="Duplex ADF"
                  value={product.scanSpecs.adfDuplex ? "Yes" : "No"}
                />
                <SpecRow
                  label="Flatbed Size"
                  value={product.scanSpecs.flatbedSize}
                />
                <SpecRow
                  label="Built-in OCR"
                  value={product.scanSpecs.ocrBuiltIn ? "Yes" : "No"}
                />
                <SpecRow
                  label="Scan Formats"
                  value={product.scanSpecs.scanFormats.join(", ")}
                />
              </CardContent>
            </Card>

            {/* Copy Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Copy className="h-5 w-5 text-terracotta-500" />
                  Copy Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow
                  label="Copy Speed (Black)"
                  value={`Up to ${product.copySpecs.copySpeedBlack} cpm`}
                />
                <SpecRow
                  label="Copy Speed (Colour)"
                  value={`Up to ${product.copySpecs.copySpeedColor} cpm`}
                />
                <SpecRow
                  label="First Copy Out (Black)"
                  value={`As fast as ${product.copySpecs.firstCopyOutBlack} seconds`}
                />
                <SpecRow
                  label="First Copy Out (Colour)"
                  value={`As fast as ${product.copySpecs.firstCopyOutColor} seconds`}
                />
                <SpecRow
                  label="Copy Resolution"
                  value={product.copySpecs.copyResolution}
                />
                <SpecRow
                  label="Maximum Copies"
                  value={formatNumber(product.copySpecs.maxCopies)}
                />
                <SpecRow
                  label="Reduce/Enlarge"
                  value={product.copySpecs.reduceEnlarge}
                />
              </CardContent>
            </Card>

            {/* Paper Handling */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-charcoal-500" />
                  Paper Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow
                  label="Standard Input"
                  value={`${formatNumber(product.paperHandling.inputStandard)} sheets`}
                />
                <SpecRow
                  label="Maximum Input"
                  value={`${formatNumber(product.paperHandling.inputMax)} sheets`}
                />
                <SpecRow
                  label="Output Capacity"
                  value={`${formatNumber(product.paperHandling.outputStandard)} sheets`}
                />
                <SpecRow
                  label="Media Weight"
                  value={`${product.paperHandling.mediaWeightMin} - ${product.paperHandling.mediaWeightMax} g/m²`}
                />
                <SpecRow
                  label="Duplex"
                  value="Automatic"
                />
              </CardContent>
            </Card>

            {/* Hardware */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-ochre-500" />
                  Hardware
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow label="Processor" value={product.hardware.processor} />
                <SpecRow
                  label="Processor Speed"
                  value={product.hardware.processorSpeed}
                />
                <SpecRow label="Memory" value={product.hardware.memory} />
                <SpecRow label="Storage" value={product.hardware.storage} />
                <SpecRow
                  label="Control Panel"
                  value={product.hardware.controlPanelSize}
                />
              </CardContent>
            </Card>

            {/* Connectivity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Wifi className="h-5 w-5 text-sage-500" />
                  Connectivity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow
                  label="Network"
                  value={product.connectivity.networkStandard}
                />
                <SpecRow
                  label="Wireless"
                  value={product.connectivity.wirelessOptional ? "Optional" : "No"}
                />
                <SpecRow
                  label="NFC Touch-to-Print"
                  value={product.connectivity.nfcTouchToPrint ? "Yes" : "No"}
                />
                <SpecRow
                  label="Mobile Printing"
                  value={product.connectivity.mobileprint.slice(0, 3).join(", ")}
                />
              </CardContent>
            </Card>

            {/* Environmental */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Leaf className="h-5 w-5 text-sage-600" />
                  Environmental
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow
                  label="Power (Printing)"
                  value={`${product.environmental.powerConsumptionPrinting} watts`}
                />
                <SpecRow
                  label="Power (Ready)"
                  value={`${product.environmental.powerConsumptionReady} watts`}
                />
                <SpecRow
                  label="Power (Sleep)"
                  value={`${product.environmental.powerConsumptionSleep} watts`}
                />
                <SpecRow
                  label="Noise Level"
                  value={product.environmental.acousticPrinting}
                />
                <SpecRow
                  label="Certifications"
                  value={product.environmental.certifications.slice(0, 3).join(", ")}
                />
              </CardContent>
            </Card>

            {/* Physical */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Box className="h-5 w-5 text-charcoal-500" />
                  Dimensions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SpecRow
                  label="Width"
                  value={`${product.physical.width} mm`}
                />
                <SpecRow
                  label="Depth"
                  value={`${product.physical.depth} mm`}
                />
                <SpecRow
                  label="Height"
                  value={`${product.physical.height} mm`}
                />
                <SpecRow label="Weight" value={`${product.physical.weight} kg`} />
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Security Features */}
      <Section background="charcoal" className="relative overflow-hidden">
        <ConcentricDotPattern variant="ochre" opacity={0.05} />
        <Container className="relative z-10">
          <SectionHeader>
            <SectionTitle className="text-white">
              HP Wolf Enterprise Security
            </SectionTitle>
            <SectionDescription className="text-charcoal-300">
              The world&apos;s most secure printing with multi-layered, self-healing protection
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.security.features.slice(0, 9).map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-800/50 border border-charcoal-700"
              >
                <Shield className="h-5 w-5 text-ochre-400 shrink-0 mt-0.5" />
                <span className="text-charcoal-200">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {product.security.certifications.map((cert) => (
              <Badge
                key={cert}
                variant="outline"
                className="border-charcoal-600 text-charcoal-300"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ideal For / Use Cases */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Ideal For</SectionTitle>
            <SectionDescription>
              The HP {product.model} is perfect for these environments
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.useCases.map((useCase) => {
              const IconComponent = iconMap[useCase.icon] || Building2;
              return (
                <Card key={useCase.title}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-sage-100 text-sage-600 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg text-charcoal-950 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-charcoal-600 text-sm">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Scan Destinations */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Digital Sending Destinations</SectionTitle>
            <SectionDescription>
              Scan and send documents directly to your preferred destinations
            </SectionDescription>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {product.scanSpecs.scanDestinations.map((destination) => (
              <div
                key={destination}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-200"
              >
                <CheckCircle className="h-5 w-5 text-sage-500 shrink-0" />
                <span className="text-charcoal-700">{destination}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Supplies */}
      <Section background="white">
        <Container>
          <SectionHeader>
            <SectionTitle>Toner Cartridges</SectionTitle>
            <SectionDescription>
              Genuine HP toner cartridges with high yields for lower running costs
            </SectionDescription>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.supplies.cartridges.map((cartridge) => (
              <Card key={cartridge.partNumber}>
                <CardContent className="p-5 text-center">
                  <div
                    className={`h-12 w-12 mx-auto rounded-full mb-3 ${
                      cartridge.color.toLowerCase().includes("black")
                        ? "bg-charcoal-900"
                        : cartridge.color.toLowerCase().includes("cyan")
                        ? "bg-cyan-500"
                        : cartridge.color.toLowerCase().includes("yellow")
                        ? "bg-yellow-400"
                        : "bg-pink-500"
                    }`}
                  />
                  <p className="font-medium text-charcoal-950">{cartridge.color}</p>
                  <p className="text-sm text-charcoal-500 mb-2">
                    {cartridge.partNumber}
                  </p>
                  <p className="text-sm text-charcoal-600">
                    ~{formatNumber(cartridge.yield)} pages
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Accessories */}
      <Section background="cream">
        <Container>
          <SectionHeader>
            <SectionTitle>Optional Accessories</SectionTitle>
            <SectionDescription>
              Expand capabilities with professional accessories
            </SectionDescription>
          </SectionHeader>

          <div className="space-y-6">
            {/* Group accessories by category */}
            {(
              [
                { key: "paper-handling", label: "Paper Handling", icon: Layers },
                { key: "finishing", label: "Finishing", icon: Package },
                { key: "security", label: "Security", icon: Lock },
                { key: "connectivity", label: "Connectivity", icon: Plug },
              ] as const
            ).map(({ key, label, icon: Icon }) => {
              const categoryAccessories = product.accessories.filter(
                (a) => a.category === key
              );
              if (categoryAccessories.length === 0) return null;
              return (
                <div key={key}>
                  <h3 className="flex items-center gap-2 text-lg font-display text-charcoal-950 mb-4">
                    <Icon className="h-5 w-5 text-ochre-500" />
                    {label}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryAccessories.map((accessory) => (
                      <Card key={accessory.partNumber}>
                        <CardContent className="p-4">
                          <p className="font-medium text-charcoal-950 mb-1">
                            {accessory.name}
                          </p>
                          <p className="text-xs text-ochre-600 mb-2">
                            {accessory.partNumber}
                          </p>
                          <p className="text-sm text-charcoal-600">
                            {accessory.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Speed Upgrade Options */}
      {product.speedLicenses && (
        <Section background="white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeader>
                <SectionTitle>Upgradeable Performance</SectionTitle>
                <SectionDescription>
                  Scale your productivity with software speed licenses
                </SectionDescription>
              </SectionHeader>

              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="border-ochre-200 bg-ochre-50/50">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-display text-ochre-600 mb-2">
                      {product.speedLicenses.baseSpeed}
                    </p>
                    <p className="text-sm text-charcoal-600">ppm (Base)</p>
                  </CardContent>
                </Card>
                {product.speedLicenses.upgrades.map((upgrade) => (
                  <Card key={upgrade.licenseNumber}>
                    <CardContent className="p-6 text-center">
                      <p className="text-4xl font-display text-charcoal-950 mb-2">
                        {upgrade.targetSpeed}
                      </p>
                      <p className="text-sm text-charcoal-600">ppm (Upgrade)</p>
                      <p className="text-xs text-charcoal-400 mt-2">
                        {upgrade.licenseNumber}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="mt-6 text-sm text-charcoal-500">
                No hardware changes required. Upgrade at any point during your contract.
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section background="ochre" className="relative overflow-hidden">
        <DotPattern variant="terracotta" opacity={0.08} />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-charcoal-700 mb-8">
              Contact us for a personalised quote on the HP {product.model}.
              As an IPP-registered Indigenous supplier, we offer competitive
              pricing for government and corporate clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                asChild
              >
                <Link href={`/contact?product=${product.model}`}>
                  Request a Quote
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/products">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  View All Products
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

// Helper component for specification rows
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4 py-2 border-b border-cream-100 last:border-0">
      <span className="text-sm text-charcoal-500">{label}</span>
      <span className="text-sm text-charcoal-900 font-medium text-right max-w-[60%]">
        {value}
      </span>
    </div>
  );
}
