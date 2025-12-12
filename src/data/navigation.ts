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
