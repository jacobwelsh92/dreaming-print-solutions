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
    id: "hp-e47528f",
    model: "E47528f",
    name: "HP Color LaserJet Managed MFP E47528f",
    format: "A4",
    color: true,
    speed: 27,
    volumeMin: 1500,
    volumeMax: 7500,
    idealFor: "Small teams, remote offices",
    description:
      "Entry-level enterprise A4 colour MFP with print, copy, scan, and fax. HP Wolf Enterprise Security in a compact design perfect for smaller workgroups.",
    features: [
      "A4 colour printing up to 27 ppm",
      "Print, copy, scan, and built-in fax",
      "HP Wolf Enterprise Security with self-healing",
      "4.3-inch colour touchscreen",
      "Compact footprint for small offices",
      "ENERGY STAR and Blue Angel certified",
    ],
    hasDetailPage: true,
    image: "/images/products/hp-e47528f.png",
  },
  {
    id: "hp-e78625dn",
    model: "E78625dn",
    name: "HP Color LaserJet Managed MFP E78625dn",
    format: "A3",
    color: true,
    speed: 25,
    volumeMin: 3000,
    volumeMax: 20000,
    idealFor: "Medium to large offices",
    description:
      "Enterprise A3 colour MFP with HP Wolf Security, 10.1\" touchscreen, and upgradeable speed options up to 35ppm. Perfect for government and corporate workgroups.",
    features: [
      "A3/A4 colour printing up to 25 ppm (upgradeable to 35 ppm)",
      "Monthly duty cycle: up to 110,000 pages",
      "200-sheet automatic document feeder with duplex",
      "HP Wolf Enterprise Security with self-healing",
      "10.1-inch colour touchscreen",
      "1,140-sheet input (expandable to 3,140)",
    ],
    hasDetailPage: true,
    image: "/images/products/hp-e78625dn.jpg",
  },
  {
    id: "hp-e78630dn",
    model: "E78630dn",
    name: "HP Color LaserJet Managed MFP E78630dn",
    format: "A3",
    color: true,
    speed: 30,
    volumeMin: 5000,
    volumeMax: 20000,
    idealFor: "Busy teams, medium-large offices",
    description:
      "High-performance A3 colour MFP designed for demanding workgroups. 30ppm print/copy speed, 180ipm scanning, and HP Wolf Enterprise Security.",
    features: [
      "A3/A4 colour printing up to 30 ppm",
      "Scan speed up to 180 images per minute",
      "HP Wolf Enterprise Security with self-healing",
      "10.1-inch colour touchscreen",
      "200-sheet duplex ADF",
      "Upgradeable to 35ppm via license",
    ],
    hasDetailPage: true,
    image: "/images/products/hp-e78630dn.jpg",
  },
  {
    id: "hp-e78635dn",
    model: "E78635dn",
    name: "HP Color LaserJet Managed MFP E78635dn",
    format: "A3",
    color: true,
    speed: 35,
    volumeMin: 10000,
    volumeMax: 30000,
    idealFor: "High-volume departments",
    description:
      "Maximum performance A3 colour MFP with 35ppm speed and 150,000 page duty cycle. The fastest in the E786 series for demanding enterprise environments.",
    features: [
      "A3/A4 colour printing up to 35 ppm",
      "Up to 150,000 page monthly duty cycle",
      "HP Wolf Enterprise Security with self-healing",
      "10.1-inch colour touchscreen",
      "200-sheet duplex ADF",
      "Professional finishing options available",
    ],
    hasDetailPage: true,
    image: "/images/products/hp-e78635dn.jpg",
  },
  {
    id: "hp-e87750dn",
    model: "E87750dn",
    name: "HP Color LaserJet Managed MFP E87750dn",
    format: "A3",
    color: true,
    speed: 50,
    volumeMin: 20000,
    volumeMax: 100000,
    idealFor: "Enterprise / Production",
    description:
      "Production-class A3 colour MFP with 50ppm speed and 200,000 page duty cycle. Built for enterprise print rooms with upgrade path to 70ppm.",
    features: [
      "A3/A4 colour printing up to 50 ppm",
      "Up to 200,000 page monthly duty cycle",
      "HP Wolf Enterprise Security with self-healing",
      "10.1-inch colour touchscreen",
      "Up to 6,140 sheet paper capacity",
      "Upgradeable to 60ppm or 70ppm via license",
    ],
    hasDetailPage: true,
    image: "/images/products/hp-e87750dn.png",
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
