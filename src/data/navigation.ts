import type { NavItem } from "@/types";

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
    description: "Managed Print Services & Document Management",
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

export const footerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  email: "benlong@dreamingprintsolutions.com.au",
  phone: "0400 000 000", // Placeholder - update with real number
  address: "Brisbane, Queensland, Australia",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "#", // Update with real LinkedIn URL
    icon: "linkedin",
  },
];
