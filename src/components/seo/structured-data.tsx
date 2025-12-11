/**
 * =================================================================
 * STRUCTURED DATA (JSON-LD) COMPONENTS
 * =================================================================
 *
 * These components inject Schema.org structured data into pages,
 * enabling rich snippets in Google search results.
 *
 * Why this matters:
 * - Organization schema: Establishes business identity in Knowledge Graph
 * - LocalBusiness schema: Enables "near me" and local pack results
 * - Product schema: Rich product snippets with specs
 * - WebSite schema: Enables sitelinks search box
 * - BreadcrumbList schema: Shows navigation path in results
 * - FAQPage schema: Wins FAQ rich snippets (massive SERP real estate)
 */

import { Product } from "@/types";
import { siteConfig } from "@/data/site-config";

// =================================================================
// ORGANIZATION SCHEMA
// =================================================================
// This establishes Dreaming Print Solutions in Google's Knowledge Graph

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo-square.png`,
      width: 500,
      height: 500,
    },
    image: [
      `${siteConfig.url}/images/logo-square.png`,
      `${siteConfig.url}/images/logo-header.png`,
    ],
    description: siteConfig.description,
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Zac O'Brien",
        jobTitle: "Co-Founder & Director",
      },
      {
        "@type": "Person",
        name: "Ben Long",
        jobTitle: "Co-Founder & Director",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postcode,
      addressCountry: "AU",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "sales",
        email: siteConfig.contact.email,
        areaServed: "AU",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        email: siteConfig.contact.email,
        areaServed: "AU",
        availableLanguage: "English",
      },
    ],
    sameAs: siteConfig.social.filter((s) => !s.url.includes("#")).map((s) => s.url),
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    slogan: siteConfig.tagline,
    knowsAbout: [
      "Enterprise Printers",
      "Multifunction Printers",
      "Managed Print Services",
      "Document Solutions",
      "Government Procurement",
      "Indigenous Procurement Policy",
      "HP Enterprise Products",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Supply Nation",
        url: "https://supplynation.org.au",
      },
    ],
    brand: {
      "@type": "Brand",
      name: "Dreaming Print Solutions",
      logo: `${siteConfig.url}/images/logo-square.png`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// LOCAL BUSINESS SCHEMA
// =================================================================
// This helps with local SEO and "near me" searches

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo-square.png`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.address.coordinates.lat,
      longitude: siteConfig.contact.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "State", name: "Queensland" },
      { "@type": "State", name: "New South Wales" },
      { "@type": "State", name: "Victoria" },
      { "@type": "State", name: "Western Australia" },
      { "@type": "State", name: "South Australia" },
      { "@type": "State", name: "Tasmania" },
      { "@type": "State", name: "Northern Territory" },
      { "@type": "State", name: "Australian Capital Territory" },
    ],
    serviceType: [
      "Enterprise Printer Sales",
      "Managed Print Services",
      "Document Solutions",
      "Printer Maintenance",
      "Print Fleet Management",
    ],
    paymentAccepted: ["Invoice", "Bank Transfer", "Credit Card"],
    currenciesAccepted: "AUD",
    sameAs: siteConfig.social.filter((s) => !s.url.includes("#")).map((s) => s.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// WEBSITE SCHEMA
// =================================================================
// Enables sitelinks search box in Google (when search is implemented)

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-AU",
    // Uncomment when search is implemented:
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: {
    //     "@type": "EntryPoint",
    //     urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    //   },
    //   "query-input": "required name=search_term_string",
    // },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// PRODUCT SCHEMA
// =================================================================
// Rich product snippets for each HP MFD model

interface ProductSchemaProps {
  product: Product;
}

export function ProductSchema({ product }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/products#${product.id}`,
    name: product.name,
    description: product.description,
    image: product.image || `${siteConfig.url}/images/logo-icon.png`,
    brand: {
      "@type": "Brand",
      name: "HP",
    },
    manufacturer: {
      "@type": "Organization",
      name: "HP Inc.",
      url: "https://www.hp.com",
    },
    model: product.model,
    sku: product.id,
    mpn: product.model,
    category: "Office Equipment > Printers > Multifunction Printers",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Enterprise",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Format",
        value: product.format,
      },
      {
        "@type": "PropertyValue",
        name: "Color",
        value: product.color ? "Color" : "Monochrome",
      },
      {
        "@type": "PropertyValue",
        name: "Print Speed",
        value: `${product.speed} ppm`,
      },
      {
        "@type": "PropertyValue",
        name: "Monthly Volume Range",
        value: `${product.volumeMin.toLocaleString()} - ${product.volumeMax.toLocaleString()} pages`,
      },
      {
        "@type": "PropertyValue",
        name: "Ideal For",
        value: product.idealFor,
      },
    ],
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products`,
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AUD",
        valueAddedTaxIncluded: true,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// PRODUCTS LIST SCHEMA
// =================================================================
// ItemList schema for the products page

interface ProductsListSchemaProps {
  products: Product[];
}

export function ProductsListSchema({ products }: ProductsListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "HP Enterprise Multifunction Printers",
    description:
      "Our range of HP Color LaserJet Enterprise MFDs for government and corporate environments",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        "@id": `${siteConfig.url}/products#${product.id}`,
        name: product.name,
        description: product.description,
        url: `${siteConfig.url}/products`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// BREADCRUMB SCHEMA
// =================================================================
// Shows navigation path in search results

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href === "/" ? siteConfig.url : `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// FAQ PAGE SCHEMA
// =================================================================
// Wins FAQ rich snippets - massive SERP real estate

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// SERVICE SCHEMA
// =================================================================
// For the services page

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
}

export function ServiceSchema({
  name,
  description,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =================================================================
// AGGREGATE SCHEMAS FOR PAGES
// =================================================================
// Combine multiple schemas for specific pages

export function HomePageSchemas() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
    </>
  );
}

export function AboutPageSchemas() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
    </>
  );
}

export function ServicesPageSchemas() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <ServiceSchema
        name="Managed Print Services"
        description="Comprehensive print management including supply monitoring, maintenance, and support for enterprise environments."
      />
      <ServiceSchema
        name="Hardware Sales"
        description="Premium HP enterprise printers and MFDs for government and corporate clients."
      />
      <ServiceSchema
        name="Document Solutions"
        description="Streamline document workflows with scanning, digital archiving, and secure document management."
      />
    </>
  );
}

interface ProductsPageSchemasProps {
  products: Product[];
}

export function ProductsPageSchemas({ products }: ProductsPageSchemasProps) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
        ]}
      />
      <ProductsListSchema products={products} />
      {products.map((product) => (
        <ProductSchema key={product.id} product={product} />
      ))}
    </>
  );
}

export function ContactPageSchemas() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
