/**
 * DREAMING PRINT SOLUTIONS - Type Definitions
 */

// Product types - Basic listing info
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
  hasDetailPage?: boolean; // Whether full specs page exists
}

// Detailed product specifications for individual product pages
export interface ProductDetail extends Product {
  // SEO & Marketing
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  shortDescription: string;
  longDescription: string;
  tagline: string;

  // Print specifications
  printSpecs: {
    speedBlackA4: number;
    speedColorA4: number;
    speedBlackA3?: number;
    speedColorA3?: number;
    firstPageOutBlack: number; // seconds
    firstPageOutColor: number;
    resolution: string;
    resolutionMax: string;
    technology: string;
    duplexPrint: boolean;
    duplexSpeed?: number;
    printLanguages: string[];
  };

  // Scan specifications
  scanSpecs: {
    colorScanning: boolean;
    scanSpeedSimplex: number; // ppm
    scanSpeedDuplex: number; // ipm
    scanResolutionOptical: string;
    scanResolutionMax: string;
    adfCapacity: number;
    adfDuplex: boolean;
    flatbedSize: string;
    scanFormats: string[];
    scanDestinations: string[];
    ocrBuiltIn: boolean;
  };

  // Copy specifications
  copySpecs: {
    copySpeedBlack: number;
    copySpeedColor: number;
    firstCopyOutBlack: number;
    firstCopyOutColor: number;
    copyResolution: string;
    maxCopies: number;
    reduceEnlarge: string;
  };

  // Fax specifications (optional)
  faxSpecs?: {
    faxSpeed: string;
    faxResolution: string;
    faxMemory: string;
    speedDials: number;
  };

  // Paper handling
  paperHandling: {
    inputStandard: number;
    inputMax: number;
    outputStandard: number;
    outputMax?: number;
    trayConfiguration: string[];
    mediaTypesSupported: string[];
    mediaSizesSupported: string[];
    mediaWeightMin: number; // g/m²
    mediaWeightMax: number;
    envelopeCapacity?: number;
  };

  // Connectivity
  connectivity: {
    standardPorts: string[];
    networkStandard: string;
    wirelessOptional: boolean;
    wirelessStandard?: string;
    mobileprint: string[];
    nfcTouchToPrint: boolean;
  };

  // Hardware
  hardware: {
    processor: string;
    processorSpeed: string;
    memory: string;
    memoryMax: string;
    storage: string;
    storageOptions?: string[];
    controlPanel: string;
    controlPanelSize: string;
  };

  // Security features
  security: {
    features: string[];
    certifications: string[];
    encryptionStandard: string;
    secureErase: boolean;
    pullPrinting: boolean;
  };

  // Environmental
  environmental: {
    powerConsumptionPrinting: number; // watts
    powerConsumptionReady: number;
    powerConsumptionSleep: number;
    certifications: string[];
    operatingTemp: string;
    operatingHumidity: string;
    acousticPrinting: string;
  };

  // Physical
  physical: {
    width: number; // mm
    depth: number;
    height: number;
    weight: number; // kg
    widthMax?: number;
    depthMax?: number;
    heightMax?: number;
  };

  // Duty cycle
  dutyCycle: {
    monthly: number;
    recommendedMonthly: number;
  };

  // Supplies
  supplies: {
    cartridges: {
      color: string;
      partNumber: string;
      yield: number;
    }[];
  };

  // Accessories
  accessories: {
    name: string;
    partNumber: string;
    description: string;
    category: "paper-handling" | "finishing" | "security" | "connectivity" | "other";
  }[];

  // Use cases / ideal for
  useCases: {
    title: string;
    description: string;
    icon: string;
  }[];

  // Key selling points
  keyBenefits: {
    title: string;
    description: string;
    icon: string;
  }[];

  // Warranty
  warranty: {
    standard: string;
    options: string[];
  };

  // Product number
  productNumber: string;

  // Speed license options for upgradeable models
  speedLicenses?: {
    baseSpeed: number;
    upgrades: {
      targetSpeed: number;
      licenseNumber: string;
    }[];
  };
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
