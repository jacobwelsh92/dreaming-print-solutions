import type { Product } from "@/types";

/**
 * =================================================================
 * PRODUCT DATA
 * =================================================================
 *
 * HP Enterprise printer range supplied by Dreaming Print Solutions.
 * These are the core business printers we supply.
 *
 * Model numbers as specified:
 * - HP E47525F (A4)
 * - HP E78625DN (A3)
 * - HP E78630DN (A3)
 * - HP E78640DN (A3)
 * - HP E87750DW (A3 Production)
 */

export const products: Product[] = [
  {
    id: "hp-e47525f",
    model: "E47525f",
    name: "HP Color LaserJet Enterprise MFP E47525f",
    format: "A4",
    color: true,
    speed: 25,
    volumeMin: 1000,
    volumeMax: 5000,
    idealFor: "Small teams, remote offices",
    description:
      "Compact A4 colour MFP ideal for small workgroups. Delivers reliable performance with low running costs and enterprise-grade security.",
    features: [
      "A4 colour printing up to 25 ppm",
      "Monthly volume: 1,000-5,000 pages",
      "Automatic duplex printing",
      "Single-pass dual-head scanning",
      "HP Wolf Enterprise Security",
      "Energy Star certified",
    ],
  },
  {
    id: "hp-e78625dn",
    model: "E78625dn",
    name: "HP Color LaserJet Enterprise Flow MFP E78625dn",
    format: "A3",
    color: true,
    speed: 25,
    volumeMin: 3000,
    volumeMax: 15000,
    idealFor: "Medium offices",
    description:
      "Versatile A3 colour MFP with advanced workflow features. Perfect balance of capability and efficiency for busy office environments.",
    features: [
      "A3/A4 colour printing up to 25 ppm",
      "Monthly volume: 3,000-15,000 pages",
      "200-sheet automatic document feeder",
      "Advanced scanning workflows",
      "HP Sure Start security",
      "Optional finishing solutions",
    ],
  },
  {
    id: "hp-e78630dn",
    model: "E78630dn",
    name: "HP Color LaserJet Enterprise Flow MFP E78630dn",
    format: "A3",
    color: true,
    speed: 30,
    volumeMin: 5000,
    volumeMax: 20000,
    idealFor: "Busy teams",
    description:
      "High-performance A3 colour MFP designed for demanding workgroups. Fast, reliable, and packed with enterprise features.",
    features: [
      "A3/A4 colour printing up to 30 ppm",
      "Monthly volume: 5,000-20,000 pages",
      "Best-in-class security",
      "HP JetIntelligence technology",
      "Customizable touchscreen interface",
      "Seamless mobile printing",
    ],
  },
  {
    id: "hp-e78640dn",
    model: "E78640dn",
    name: "HP Color LaserJet Enterprise Flow MFP E78640dn",
    format: "A3",
    color: true,
    speed: 40,
    volumeMin: 10000,
    volumeMax: 30000,
    idealFor: "High-volume departments",
    description:
      "Enterprise-grade A3 colour MFP for high-demand environments. Exceptional speed meets professional quality output.",
    features: [
      "A3/A4 colour printing up to 40 ppm",
      "Monthly volume: 10,000-30,000 pages",
      "Up to 6,600-page paper capacity",
      "Advanced workflow automation",
      "Consistent colour accuracy",
      "Multiple finishing options",
    ],
  },
  {
    id: "hp-e87750dw",
    model: "E87750dw",
    name: "HP Color LaserJet Enterprise Flow MFP E87750dw",
    format: "A3",
    color: true,
    speed: 50,
    volumeMin: 20000,
    volumeMax: 100000,
    idealFor: "Enterprise / Production",
    description:
      "Production-level A3 colour MFP for the most demanding enterprise environments. Maximum throughput, reliability, and professional finishing capabilities.",
    features: [
      "A3/A4 colour printing up to 50 ppm",
      "Monthly volume: 20,000-100,000 pages",
      "Enterprise-grade reliability",
      "HP FutureSmart firmware",
      "Advanced fleet management",
      "Professional finishing capabilities",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductByModel(model: string): Product | undefined {
  return products.find((product) => product.model.toLowerCase() === model.toLowerCase());
}

export function formatVolume(min: number, max: number): string {
  const formatNum = (n: number) => {
    if (n >= 1000) {
      return `${Math.round(n / 1000)}K`;
    }
    return n.toString();
  };
  return `${formatNum(min)}-${formatNum(max)}`;
}
