/**
 * =================================================================
 * FAQ DATA
 * =================================================================
 *
 * Frequently Asked Questions organized by category.
 * These power both the FAQ page and homepage FAQ section.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  order: number;
  featured?: boolean; // Show on homepage
}

export type FAQCategory =
  | "general"
  | "products"
  | "pricing"
  | "procurement"
  | "support"
  | "indigenous";

export const categoryLabels: Record<FAQCategory, string> = {
  general: "General",
  products: "Products",
  pricing: "Pricing & Quotes",
  procurement: "Government Procurement",
  support: "Support & Services",
  indigenous: "Indigenous Ownership",
};

export const faqItems: FAQItem[] = [
  // =================================================================
  // GENERAL
  // =================================================================
  {
    id: "general-1",
    question: "What makes Dreaming Print Solutions different from other printer dealers?",
    answer:
      "We're Australia's first indigenous-owned enterprise printer dealer. This means government buyers can leverage the Indigenous Procurement Policy (IPP) for streamlined procurement, while all clients benefit from our enterprise-grade HP solutions, dedicated support, and commitment to reconciliation through business excellence.",
    category: "general",
    order: 1,
    featured: true,
  },
  {
    id: "general-2",
    question: "What areas of Australia do you service?",
    answer:
      "We service all of Australia, from metropolitan areas to regional and remote locations. For remote deployments, we work with certified partners to ensure proper installation and ongoing support. Our managed print services include remote monitoring regardless of location.",
    category: "general",
    order: 2,
  },
  {
    id: "general-3",
    question: "How quickly can you deliver and install equipment?",
    answer:
      "Standard delivery for in-stock equipment is typically 5-10 business days to metropolitan areas. Regional delivery may take slightly longer. Installation is usually scheduled within 1-2 weeks of delivery. For urgent requirements, we can often accommodate expedited timelines - just let us know your needs.",
    category: "general",
    order: 3,
  },
  {
    id: "general-4",
    question: "Do you offer equipment demonstrations?",
    answer:
      "Yes, we can arrange demonstrations either at our facility or at your location. For larger fleet deployments, we recommend a site assessment where we can demonstrate equipment in the context of your actual environment and workflows.",
    category: "general",
    order: 4,
  },

  // =================================================================
  // PRODUCTS
  // =================================================================
  {
    id: "products-1",
    question: "What HP printer models do you supply?",
    answer:
      "We supply the HP Color LaserJet Enterprise MFD range, including A4 models (E47528f) and A3 models (E78625dn, E78630dn, E78640dn, E87750dn). These enterprise-grade devices offer speeds from 27-50 pages per minute and are designed for volumes from 1,000 to 100,000+ pages per month.",
    category: "products",
    order: 1,
    featured: true,
  },
  {
    id: "products-2",
    question: "What's the difference between A3 and A4 multifunction printers?",
    answer:
      "A4 printers handle standard letter-size documents up to 210x297mm. A3 printers can print up to 297x420mm (double A4 size), making them ideal for spreadsheets, marketing materials, and architectural drawings. A3 devices are generally larger but offer more flexibility for varied document requirements.",
    category: "products",
    order: 2,
  },
  {
    id: "products-3",
    question: "How do I know which printer is right for my organisation's volume?",
    answer:
      "We help you select based on your monthly print volume. As a guide: E47528f (1-5K pages), E78625dn (3-15K pages), E78630dn (5-20K pages), E78640dn (10-30K pages), E87750dn (20-100K+ pages). We recommend a print assessment to accurately determine your needs.",
    category: "products",
    order: 3,
  },
  {
    id: "products-4",
    question: "Do you supply consumables and replacement parts?",
    answer:
      "Yes, we supply genuine HP toner, drums, and maintenance kits for all models we sell. For managed print service clients, consumables are included and automatically shipped before you run out. We can also provide consumables-only supply agreements for existing HP devices.",
    category: "products",
    order: 4,
  },

  // =================================================================
  // PRICING
  // =================================================================
  {
    id: "pricing-1",
    question: "How does your pricing work for enterprise printers?",
    answer:
      "We provide customised quotes based on your requirements. Pricing considers the equipment model, volume requirements, service level, and whether you prefer outright purchase or leasing. All quotes include delivery, installation, and training. Contact us for a no-obligation quote.",
    category: "pricing",
    order: 1,
    featured: true,
  },
  {
    id: "pricing-2",
    question: "Do you offer leasing or rental options?",
    answer:
      "Yes, we offer flexible financing including operating leases, finance leases, and rental agreements. Leasing can preserve capital, provide predictable monthly costs, and include equipment upgrades at lease end. Our managed print services typically include equipment as part of a monthly fee.",
    category: "pricing",
    order: 2,
  },
  {
    id: "pricing-3",
    question: "Are there discounts for government buyers?",
    answer:
      "We offer competitive government pricing and can work within existing panel arrangements where applicable. For IPP-eligible purchases ($80K-$200K), government buyers can approach us directly for quotes without going to open tender, often resulting in faster procurement and competitive pricing.",
    category: "pricing",
    order: 3,
  },

  // =================================================================
  // PROCUREMENT / IPP
  // =================================================================
  {
    id: "procurement-1",
    question: "What is the Indigenous Procurement Policy (IPP)?",
    answer:
      "The IPP is an Australian Government policy requiring Commonwealth agencies to consider Indigenous businesses first for certain contracts. For contracts between $80,000 and $200,000 (GST inclusive), agencies must first approach Indigenous suppliers before going to open market. This creates opportunities for Indigenous businesses while giving agencies streamlined procurement options.",
    category: "procurement",
    order: 1,
    featured: true,
  },
  {
    id: "procurement-2",
    question: "How does buying from you help meet IPP targets?",
    answer:
      "Purchases from Dreaming Print Solutions count toward your agency's IPP targets. As a 100% Indigenous-owned, Supply Nation certified business, procurement from us is fully compliant with IPP requirements. We can provide all necessary documentation for your reporting.",
    category: "procurement",
    order: 2,
  },
  {
    id: "procurement-3",
    question: "What's the process for government procurement?",
    answer:
      "For IPP-eligible purchases: 1) Confirm your requirement and estimated value, 2) Contact us for a quote, 3) Evaluate our proposal against your needs, 4) Proceed with direct procurement if suitable. We can assist with procurement documentation and coordinate with your procurement team.",
    category: "procurement",
    order: 3,
  },
  {
    id: "procurement-4",
    question: "Do you have existing contracts or panels we can access?",
    answer:
      "We can supply through various government procurement arrangements. Contact us to discuss your specific requirements - we'll advise on the most efficient procurement pathway for your situation, whether that's direct IPP procurement, existing panels, or other arrangements.",
    category: "procurement",
    order: 4,
  },

  // =================================================================
  // SUPPORT
  // =================================================================
  {
    id: "support-1",
    question: "What does your managed print service include?",
    answer:
      "Our managed print service includes: equipment supply or use of existing devices, all consumables (toner, drums), proactive maintenance, break-fix support, remote monitoring, usage reporting, and a dedicated account manager. You pay a predictable monthly fee based on usage.",
    category: "support",
    order: 1,
  },
  {
    id: "support-2",
    question: "What's your response time for service calls?",
    answer:
      "For managed print service clients, we offer next business day response for most issues, with 4-hour response available for critical situations. Remote diagnostics often resolve issues immediately. Hardware replacement is typically completed within 24-48 hours.",
    category: "support",
    order: 2,
  },
  {
    id: "support-3",
    question: "What support do you provide after purchase?",
    answer:
      "All purchases include: installation and network configuration, user training, manufacturer warranty support, and phone/email support for questions. Extended support, maintenance agreements, and managed print services are available for comprehensive ongoing coverage.",
    category: "support",
    order: 3,
  },

  // =================================================================
  // INDIGENOUS OWNERSHIP
  // =================================================================
  {
    id: "indigenous-1",
    question: "Is Dreaming Print Solutions genuinely indigenous-owned?",
    answer:
      "Yes, Dreaming Print Solutions is 100% Indigenous-owned and operated. We are Supply Nation certified, which means our Indigenous ownership has been independently verified. Supply Nation certification is the gold standard for Indigenous business verification in Australia.",
    category: "indigenous",
    order: 1,
    featured: true,
  },
  {
    id: "indigenous-2",
    question: "How does purchasing from you support indigenous communities?",
    answer:
      "Purchasing from Indigenous businesses creates economic opportunities, employment, and self-determination in Indigenous communities. We're committed to Indigenous employment, supplier diversity, and community support. Every dollar spent with us contributes to the Indigenous business ecosystem.",
    category: "indigenous",
    order: 2,
  },
];

/**
 * Helper functions
 */
export function getFAQsByCategory(category: FAQCategory): FAQItem[] {
  return faqItems
    .filter((faq) => faq.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedFAQs(): FAQItem[] {
  return faqItems
    .filter((faq) => faq.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllCategories(): FAQCategory[] {
  const categories = new Set(faqItems.map((faq) => faq.category));
  return Array.from(categories);
}

export function searchFAQs(query: string): FAQItem[] {
  const lowerQuery = query.toLowerCase();
  return faqItems.filter(
    (faq) =>
      faq.question.toLowerCase().includes(lowerQuery) ||
      faq.answer.toLowerCase().includes(lowerQuery)
  );
}
