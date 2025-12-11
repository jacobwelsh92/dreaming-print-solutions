/**
 * DREAMING PRINT SOLUTIONS - Type Definitions
 */

// Product types
export interface Product {
  id: string;
  model: string;
  name: string;
  format: "A3" | "A4";
  color: boolean;
  speed: number; // pages per minute
  volumeMin: number;
  volumeMax: number;
  idealFor: string;
  description: string;
  features: string[];
  image?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organisation?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Trust badge types
export interface TrustBadge {
  id: string;
  name: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

// SEO metadata types
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// Generic response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Component prop types
export type Size = "sm" | "md" | "lg";
export type Variant = "primary" | "secondary" | "outline" | "ghost";
export type ColorScheme = "ochre" | "terracotta" | "sage" | "charcoal";

// Utility types
export type WithClassName<T = object> = T & { className?: string };
export type WithChildren<T = object> = T & { children?: React.ReactNode };
