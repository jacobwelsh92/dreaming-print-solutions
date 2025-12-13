/**
 * =================================================================
 * NAVIGATION DATA
 * =================================================================
 *
 * Centralized navigation configuration used by header, footer,
 * and mobile menu components.
 *
 * Contact info is now sourced from site-config.ts for consistency.
 */

import type { NavItem } from "@/types";
import { siteConfig } from "./site-config";

// =================================================================
// RESOURCES DROPDOWN ITEMS
// =================================================================
// Premium resources shown in the mega dropdown

export interface ResourceNavItem {
  label: string;
  href: string;
  description: string;
  type: "guide" | "comparison" | "tool" | "checklist";
  icon: "book" | "scale" | "calculator" | "shield" | "clipboard" | "file";
  featured?: boolean;
}

export const resourcesDropdownItems: ResourceNavItem[] = [
  {
    label: "Free Print Assessment",
    href: "/print-assessment",
    description: "AI-powered analysis of your print environment with personalised recommendations",
    type: "tool",
    icon: "calculator",
    featured: true,
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Industry insights, procurement guides, and enterprise printing best practices",
    type: "guide",
    icon: "file",
    featured: true,
  },
  {
    label: "Indigenous Procurement Policy Guide",
    href: "/blog/understanding-indigenous-procurement-policy",
    description: "Complete guide to leveraging the IPP for print equipment procurement",
    type: "guide",
    icon: "book",
  },
  {
    label: "Supply Nation Certification Explained",
    href: "/blog/supply-nation-certification-what-it-means-for-procurement",
    description: "What certification means and why it matters for procurement compliance",
    type: "guide",
    icon: "shield",
  },
  {
    label: "HP Enterprise Printer Comparison",
    href: "/blog/hp-enterprise-printer-comparison-e78625-vs-e78630-vs-e78640",
    description: "Side-by-side comparison of E78625, E78630, and E78635 models",
    type: "comparison",
    icon: "scale",
  },
  {
    label: "Managed Print Services Overview",
    href: "/blog/managed-print-services-hidden-cost-savings",
    description: "How MPS reduces costs, improves efficiency, and frees up IT resources",
    type: "guide",
    icon: "clipboard",
  },
];

// =================================================================
// MAIN NAVIGATION
// =================================================================
// Used in header and mobile menu

export const mainNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    description: "Our story and indigenous ownership",
  },
  {
    label: "Services",
    href: "/services",
    description: "Managed Print Services & Document Solutions",
  },
  {
    label: "Products",
    href: "/products",
    description: "HP Enterprise MFD Range",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch for a quote",
  },
];

// =================================================================
// FOOTER NAVIGATION
// =================================================================
// Used in footer component

export const footerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Assessment", href: "/print-assessment" },
  { label: "Why Indigenous", href: "/why-indigenous" },
  { label: "Government Procurement", href: "/government-procurement" },
  { label: "Corporate Procurement", href: "/corporate-procurement" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// =================================================================
// LEGAL LINKS
// =================================================================
// Footer legal section

export const legalNavItems: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  // { label: "Accessibility", href: "/accessibility" }, // Phase 5
];

// =================================================================
// CONTACT INFO
// =================================================================
// Re-exported from site-config for backward compatibility

export const contactInfo = {
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phoneDisplay,
  phoneRaw: siteConfig.contact.phone, // For tel: links
  address: siteConfig.contact.address.full,
  hours: siteConfig.contact.hours.weekdays,
  responseTime: siteConfig.contact.responseTime,
};

// =================================================================
// SOCIAL LINKS
// =================================================================
// Re-exported from site-config

export const socialLinks = siteConfig.social.map((social) => ({
  name: social.name,
  href: social.url,
  icon: social.icon,
}));

// =================================================================
// BUSINESS INFO
// =================================================================
// For footer and legal displays

export const businessInfo = {
  abn: siteConfig.business.abn,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  supplyNationStatus: siteConfig.business.supplyNationStatus,
};
