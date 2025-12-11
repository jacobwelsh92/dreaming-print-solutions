/**
 * =================================================================
 * PRODUCT DETAILS - Barrel Export
 * =================================================================
 *
 * Comprehensive product specifications for individual product pages.
 * Import detailed specs from here for SEO-optimized product pages.
 */

import { hpE78625dn } from "./hp-e78625dn";
import type { ProductDetail } from "@/types";

// Export all detailed products
export { hpE78625dn };

// Map of product IDs to detailed product data
export const productDetails: Record<string, ProductDetail> = {
  "hp-e78625dn": hpE78625dn,
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
