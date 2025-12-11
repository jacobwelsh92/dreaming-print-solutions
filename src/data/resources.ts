/**
 * =================================================================
 * RESOURCES DATA
 * =================================================================
 *
 * Downloadable resources and guides for the resources page.
 * These can be PDFs, guides, or links to detailed blog posts.
 */

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: ResourceType;
  url: string; // Could be internal blog link or PDF download
  downloadable: boolean;
  featured: boolean;
  icon: "file-text" | "book-open" | "download" | "calculator" | "shield" | "settings";
}

export type ResourceCategory =
  | "procurement-guides"
  | "product-guides"
  | "buying-guides"
  | "checklists"
  | "industry-reports";

export type ResourceType =
  | "guide"
  | "checklist"
  | "comparison"
  | "whitepaper"
  | "tool";

export const categoryLabels: Record<ResourceCategory, string> = {
  "procurement-guides": "Procurement Guides",
  "product-guides": "Product Guides",
  "buying-guides": "Buying Guides",
  "checklists": "Checklists & Tools",
  "industry-reports": "Industry Reports",
};

export const resources: Resource[] = [
  // Procurement Guides
  {
    id: "ipp-guide",
    title: "Indigenous Procurement Policy (IPP) Guide",
    description:
      "Complete guide to leveraging the IPP for print equipment procurement. Understand thresholds, requirements, and streamlined procurement pathways.",
    category: "procurement-guides",
    type: "guide",
    url: "/blog/understanding-indigenous-procurement-policy",
    downloadable: false,
    featured: true,
    icon: "book-open",
  },
  {
    id: "supply-nation-guide",
    title: "Supply Nation Certification Explained",
    description:
      "What Supply Nation certification means, how businesses are verified, and why it matters for your procurement compliance.",
    category: "procurement-guides",
    type: "guide",
    url: "/blog/supply-nation-certification-what-it-means-for-procurement",
    downloadable: false,
    featured: true,
    icon: "shield",
  },

  // Product Guides
  {
    id: "hp-comparison",
    title: "HP Enterprise Printer Comparison Guide",
    description:
      "Side-by-side comparison of HP E78625dn, E78630dn, and E78640dn models. Specifications, recommended volumes, and use cases.",
    category: "product-guides",
    type: "comparison",
    url: "/blog/hp-enterprise-printer-comparison-e78625-vs-e78630-vs-e78640",
    downloadable: false,
    featured: true,
    icon: "file-text",
  },
  {
    id: "hp-e87750-guide",
    title: "HP E87750dn High-Volume Guide",
    description:
      "Deep dive into the HP E87750dn flagship enterprise printer. Specifications, use cases, and total cost of ownership analysis.",
    category: "product-guides",
    type: "guide",
    url: "/blog/hp-e87750-high-volume-enterprise-printing",
    downloadable: false,
    featured: false,
    icon: "file-text",
  },
  {
    id: "a3-vs-a4",
    title: "A3 vs A4 Printer Selection Guide",
    description:
      "Understand the differences between A3 and A4 format printers and which is right for your organisation's document workflows.",
    category: "product-guides",
    type: "guide",
    url: "/blog/a3-vs-a4-printers-which-format-does-your-office-need",
    downloadable: false,
    featured: false,
    icon: "book-open",
  },

  // Buying Guides
  {
    id: "mps-guide",
    title: "Managed Print Services Overview",
    description:
      "Discover how managed print services reduce costs, improve efficiency, and free up IT resources. Typical savings and what's included.",
    category: "buying-guides",
    type: "guide",
    url: "/blog/managed-print-services-hidden-cost-savings",
    downloadable: false,
    featured: true,
    icon: "calculator",
  },
  {
    id: "fleet-assessment",
    title: "Print Volume Assessment Guide",
    description:
      "How to assess your print environment, identify inefficiencies, and right-size your fleet for optimal cost and performance.",
    category: "buying-guides",
    type: "guide",
    url: "/blog/print-volume-assessment-right-size-fleet",
    downloadable: false,
    featured: false,
    icon: "settings",
  },

  // Checklists
  {
    id: "security-checklist",
    title: "Enterprise Printer Security Guide",
    description:
      "Security considerations for network printers. HP security features, government compliance, and best practices for secure print environments.",
    category: "checklists",
    type: "checklist",
    url: "/blog/printer-security-enterprise-environment",
    downloadable: false,
    featured: false,
    icon: "shield",
  },
];

/**
 * Helper functions
 */
export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return resources.filter((r) => r.category === category);
}

export function getFeaturedResources(): Resource[] {
  return resources.filter((r) => r.featured);
}

export function getAllResourceCategories(): ResourceCategory[] {
  const categories = new Set(resources.map((r) => r.category));
  return Array.from(categories);
}
