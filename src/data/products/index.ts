/**
 * =================================================================
 * PRODUCT DETAILS - Barrel Export
 * =================================================================
 *
 * Comprehensive product specifications for individual product pages.
 * Import detailed specs from here for SEO-optimized product pages.
 */

import { hpE78625dn } from "./hp-e78625dn";
import { hpE47528f } from "./hp-e47528f";
import { hpE78630dn } from "./hp-e78630dn";
import { hpE78635dn } from "./hp-e78635dn";
import { hpE87750dn } from "./hp-e87750dn";
import type { ProductDetail } from "@/types";

// Export all detailed products
export { hpE78625dn, hpE47528f, hpE78630dn, hpE78635dn, hpE87750dn };

// Map of product IDs to detailed product data
export const productDetails: Record<string, ProductDetail> = {
  "hp-e78625dn": hpE78625dn,
  "hp-e47528f": hpE47528f,
  "hp-e78630dn": hpE78630dn,
  "hp-e78635dn": hpE78635dn,
  "hp-e87750dn": hpE87750dn,
};

// Helper function to get detailed product by ID
export function getProductDetail(id: string): ProductDetail | undefined {
  return productDetails[id];
}

// Helper function to get detailed product by model
export function getProductDetailByModel(model: string): ProductDetail | undefined {
  const normalizedModel = model.toLowerCase().replace(/[-\s]/g, "");
  return Object.values(productDetails).find(
    (product) => product.model.toLowerCase().replace(/[-\s]/g, "") === normalizedModel
  );
}

// Get all products that have detail pages
export function getProductsWithDetailPages(): ProductDetail[] {
  return Object.values(productDetails);
}

// Get all product slugs for static generation
export function getAllProductSlugs(): string[] {
  return Object.keys(productDetails);
}
