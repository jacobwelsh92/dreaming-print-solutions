import type { ProductDetail } from "@/types";

/**
 * =================================================================
 * HP Color LaserJet Managed MFP E78625dn - Full Product Specifications
 * =================================================================
 *
 * Comprehensive product data for SEO-optimized product detail page.
 * All specifications sourced from official HP datasheet (August 2022).
 *
 * Product Number: 5QK18A (Base unit at 25ppm)
 * Series: HP Color LaserJet Managed MFP E786 Core Printer Series
 */

export const hpE78625dn: ProductDetail = {
  // Basic info (matches Product interface)
  id: "hp-e78625dn",
  model: "E78625dn",
  name: "HP Color LaserJet Managed MFP E78625dn",
  format: "A3",
  color: true,
  speed: 25,
  volumeMin: 3000,
  volumeMax: 20000,
  idealFor: "Medium to large offices, government departments, corporate workgroups",
  description:
    "Enterprise A3 colour multifunction printer with print, copy, scan, and optional fax. Features HP Wolf Enterprise Security, 10.1-inch touchscreen, and upgradeable speed options up to 35ppm.",
  features: [
    "A3/A4 colour printing up to 25 ppm (upgradeable to 35 ppm)",
    "200-sheet automatic document feeder with dual-side scanning",
    "10.1-inch colour touchscreen with intuitive interface",
    "HP Wolf Enterprise Security with self-healing capabilities",
    "1,140-sheet standard input (expandable to 3,140 sheets)",
    "HP FutureSmart firmware for continuous improvements",
  ],
  hasDetailPage: true,
  image: "/images/products/hp-e78625dn.jpg",
  productNumber: "5QK18A",

  // SEO & Marketing
  seoTitle: "HP E78625dn A3 Colour MFP | Enterprise Printer | Dreaming Print Solutions",
  seoDescription:
    "HP Color LaserJet Managed MFP E78625dn - A3 enterprise multifunction printer with 25ppm print/copy/scan, HP Wolf Security, 10.1\" touchscreen. IPP-registered Indigenous supplier. Get a quote today.",
  seoKeywords: [
    "HP E78625dn",
    "HP Color LaserJet E78625",
    "HP E78625dn price Australia",
    "HP A3 colour printer",
    "HP enterprise MFP",
    "HP managed printer",
    "A3 multifunction printer",
    "enterprise colour copier",
    "HP Wolf Security printer",
    "government printer Australia",
    "IPP registered printer supplier",
    "HP E786 series",
    "25ppm colour printer",
    "A3 office printer",
  ],
  shortDescription:
    "Powerful A3 colour MFP designed for enterprise environments. Print, copy, and scan at 25ppm with industry-leading security and optional speed upgrades to 35ppm.",
  longDescription: `The HP Color LaserJet Managed MFP E78625dn is a powerhouse A3 colour multifunction printer built for demanding enterprise environments. Part of HP's E786 Core Printer Series, this device combines exceptional print quality with industry-leading security features and flexible configuration options.

Designed for medium to large workgroups, government departments, and corporate environments, the E78625dn delivers reliable 25 pages per minute output in both colour and black—with the flexibility to upgrade to 30 or 35 ppm through software licenses as your needs grow.

At its heart is HP Wolf Enterprise Security, providing multi-layered protection that automatically detects, stops, and recovers from attacks without IT intervention. Features like HP Sure Start (BIOS protection), HP Memory Shield, and Connection Inspector work together to keep your network secure.

The intuitive 10.1-inch colour touchscreen provides tablet-like navigation, while HP Workpath apps enable cloud-connected workflows. With standard paper capacity of 1,140 sheets expandable to 3,140, plus professional finishing options, the E78625dn handles everything from daily documents to complex print jobs with ease.`,
  tagline: "Powerful. Flexible. Secure.",

  // Print specifications
  printSpecs: {
    speedBlackA4: 25,
    speedColorA4: 25,
    speedBlackA3: 15, // A3 typically slower
    speedColorA3: 15,
    firstPageOutBlack: 11.1,
    firstPageOutColor: 13.0,
    resolution: "600 x 600 dpi",
    resolutionMax: "1200 x 1200 dpi",
    technology: "Laser",
    duplexPrint: true,
    duplexSpeed: 18,
    printLanguages: [
      "HP PCL 5c",
      "HP PCL 6",
      "HP PostScript Level 3 emulation",
      "PDF (v 1.7)",
      "Apple AirPrint",
    ],
  },

  // Scan specifications
  scanSpecs: {
    colorScanning: true,
    scanSpeedSimplex: 60,
    scanSpeedDuplex: 120,
    scanResolutionOptical: "600 x 600 dpi",
    scanResolutionMax: "600 x 600 dpi",
    adfCapacity: 200,
    adfDuplex: true,
    flatbedSize: "297 x 432 mm (A3/11x17 in)",
    scanFormats: [
      "PDF",
      "PDF/A",
      "High-Compression PDF",
      "JPEG",
      "TIFF",
      "MTIFF",
      "XPS",
      "RTF",
      "TXT",
    ],
    scanDestinations: [
      "Scan to Email",
      "Scan to Network Folder",
      "Scan to USB Drive",
      "Scan to SharePoint",
      "Scan to FTP/sFTP",
      "Scan to LAN Fax",
      "Scan to Internet Fax",
      "Scan to Job Storage",
    ],
    ocrBuiltIn: true,
  },

  // Copy specifications
  copySpecs: {
    copySpeedBlack: 25,
    copySpeedColor: 25,
    firstCopyOutBlack: 6.7,
    firstCopyOutColor: 8.9,
    copyResolution: "600 x 600 dpi",
    maxCopies: 9999,
    reduceEnlarge: "25% to 400%",
  },

  // Fax specifications (optional accessory)
  faxSpecs: {
    faxSpeed: "33.6 kbps",
    faxResolution: "Up to 300 x 300 dpi (400 x 400 dpi received)",
    faxMemory: "Up to 500 pages",
    speedDials: 1000,
  },

  // Paper handling
  paperHandling: {
    inputStandard: 1140,
    inputMax: 3140,
    outputStandard: 500,
    outputMax: 500,
    trayConfiguration: [
      "Tray 1: 100-sheet multipurpose (A3 capable)",
      "Tray 2: 520-sheet cassette (A4 only)",
      "Tray 3: 520-sheet cassette (A3 capable)",
      "Optional: 2 x 520-sheet dual tray/stand (A3 capable)",
    ],
    mediaTypesSupported: [
      "Plain paper",
      "HP EcoEFFICIENT",
      "HP Matte (90g, 105g, 120g, 150g, 200g)",
      "HP Soft Gloss 120g",
      "HP Glossy (120g, 150g)",
      "Bond paper",
      "Recycled paper",
      "Card stock (176-220g)",
      "Light Paperboard (221-255g)",
      "Paperboard (256-300g)",
      "Transparencies",
      "Labels",
      "Letterhead",
      "Envelopes",
      "Preprinted paper",
      "Pre-punched paper",
      "Coloured paper",
    ],
    mediaSizesSupported: [
      "A3",
      "A4",
      "A5",
      "A6",
      "RA4",
      "SRA4",
      "B4 (JIS)",
      "B5 (JIS)",
      "B6 (JIS)",
      "8K",
      "16K",
      "Oficio",
      "Letter",
      "Legal",
      "Ledger/Tabloid (11x17)",
      "Executive",
      "Postcard",
      "Envelopes (B5, C5, C6, DL)",
    ],
    mediaWeightMin: 60,
    mediaWeightMax: 300,
    envelopeCapacity: 10,
  },

  // Connectivity
  connectivity: {
    standardPorts: [
      "Gigabit Ethernet 10/100/1000T",
      "SuperSpeed USB 3.0 device port",
      "SuperSpeed USB 3.0 host port",
      "Hi-Speed USB 2.0 host port",
      "Hardware Integration Pocket (HIP2)",
    ],
    networkStandard: "Gigabit Ethernet 10/100/1000T",
    wirelessOptional: true,
    wirelessStandard: "HP Jetdirect 3100w BLE/NFC/Wireless Accessory",
    mobileprint: [
      "Apple AirPrint",
      "Mopria Certified",
      "Wi-Fi Direct Printing",
      "NFC Touch-to-Print (optional)",
      "HP Smart App",
      "PrinterOn Print",
    ],
    nfcTouchToPrint: true,
  },

  // Hardware
  hardware: {
    processor: "Quad Core + Dual Core",
    processorSpeed: "1.6 GHz (Quad) + 1.4 GHz (Dual)",
    memory: "6 GB",
    memoryMax: "6 GB",
    storage: "32 GB eMMC (standard)",
    storageOptions: [
      "HP LaserJet 500GB SED Hard Disk Drive",
      "HP 500GB CCC, FIPS Hard Disk Drive",
      "HP 500GB CCC, FIPS, TAA Hard Disk Drive",
      "HP LaserJet 32GB Multi Media Card",
    ],
    controlPanel: "Colour touchscreen with intuitive tablet-like interface",
    controlPanelSize: "10.1 inch (25.6 cm)",
  },

  // Security features
  security: {
    features: [
      "HP Sure Start (BIOS protection with automatic recovery)",
      "HP Memory Shield (runtime memory protection)",
      "HP Connection Inspector (network intrusion detection)",
      "Run-time intrusion detection (Common Criteria certified)",
      "Firmware whitelisting",
      "Secure boot",
      "HP Secure Encrypted Hard Disk (optional)",
      "AES 256-bit hardware encryption",
      "Secure File Erase",
      "Secure Erase Job Data",
      "Secure ATA Erase Disk",
      "User authentication support",
      "LDAP/Kerberos authentication",
      "IPsec support",
      "802.1X authentication",
      "SNMPv3 support",
      "Pull printing support",
    ],
    certifications: [
      "Common Criteria Certified",
      "NIST SP 800-193 compliant",
      "FIPS 140-2 validated (with optional HDD)",
    ],
    encryptionStandard: "AES 256-bit",
    secureErase: true,
    pullPrinting: true,
  },

  // Environmental
  environmental: {
    powerConsumptionPrinting: 580,
    powerConsumptionReady: 32,
    powerConsumptionSleep: 0.8,
    certifications: [
      "ENERGY STAR Certified",
      "EPEAT Silver",
      "Blue Angel (DE-UZ 219)",
      "IT ECO Declaration",
    ],
    operatingTemp: "15°C to 30°C",
    operatingHumidity: "20% to 80% RH",
    acousticPrinting: "50 dB(A)",
  },

  // Physical dimensions
  physical: {
    width: 566,
    depth: 646,
    height: 848,
    weight: 77.8,
    widthMax: 1681,
    depthMax: 1196,
    heightMax: 1241,
  },

  // Duty cycle
  dutyCycle: {
    monthly: 110000,
    recommendedMonthly: 20000,
  },

  // Supplies
  supplies: {
    cartridges: [
      { color: "Black", partNumber: "W9140MC", yield: 14500 },
      { color: "Black (High Yield)", partNumber: "W9150MC", yield: 29000 },
      { color: "Cyan", partNumber: "W9141MC", yield: 12000 },
      { color: "Cyan (High Yield)", partNumber: "W9151MC", yield: 24000 },
      { color: "Yellow", partNumber: "W9142MC", yield: 12000 },
      { color: "Yellow (High Yield)", partNumber: "W9152MC", yield: 24000 },
      { color: "Magenta", partNumber: "W9143MC", yield: 12000 },
      { color: "Magenta (High Yield)", partNumber: "W9153MC", yield: 24000 },
    ],
  },

  // Key accessories
  accessories: [
    {
      name: "2 x 520-Sheet Paper Tray/Stand",
      partNumber: "6GW46A",
      description: "Adds 1,040 sheets capacity with A3 support",
      category: "paper-handling",
    },
    {
      name: "2000-Sheet High Capacity Tray/Stand",
      partNumber: "6GW48A",
      description: "High-volume paper handling for busy environments",
      category: "paper-handling",
    },
    {
      name: "Inner Finisher",
      partNumber: "6GW49A",
      description: "Stapling and offset stacking",
      category: "finishing",
    },
    {
      name: "Stapler/Stacker Finisher",
      partNumber: "6GW55A",
      description: "Advanced stapling and stacking capabilities",
      category: "finishing",
    },
    {
      name: "Booklet Finisher",
      partNumber: "6GW51A",
      description: "Create professional booklets and saddle-stitch documents",
      category: "finishing",
    },
    {
      name: "2/3 Hole Punch Accessory",
      partNumber: "Y1G10A",
      description: "Integrated hole punching for filing",
      category: "finishing",
    },
    {
      name: "2/4 Hole Punch Accessory",
      partNumber: "Y1G11A",
      description: "European-style hole punching",
      category: "finishing",
    },
    {
      name: "HP Jetdirect 3100w Wireless",
      partNumber: "3JN69A",
      description: "BLE/NFC/Wireless connectivity accessory",
      category: "connectivity",
    },
    {
      name: "HP MFP 810 Analog Dual Fax",
      partNumber: "5QK14A",
      description: "Dual-line analog fax capability",
      category: "connectivity",
    },
    {
      name: "HP MFP 800 Analog Single Fax",
      partNumber: "7ZA08A",
      description: "Single-line analog fax capability",
      category: "connectivity",
    },
    {
      name: "HP 500GB SED Hard Disk Drive",
      partNumber: "5QK45A",
      description: "Self-encrypting drive for secure storage",
      category: "security",
    },
    {
      name: "HP USB Universal Card Reader",
      partNumber: "X3D03A",
      description: "Multi-format card reader for authentication",
      category: "security",
    },
    {
      name: "HP HIP2 Keystroke Reader",
      partNumber: "Y7C05A",
      description: "HID card reader for secure access",
      category: "security",
    },
    {
      name: "HP Accessibility Assistant",
      partNumber: "2MU47A",
      description: "Wheelchair-height pull-out keyboard and display arm",
      category: "other",
    },
  ],

  // Use cases
  useCases: [
    {
      title: "Government Departments",
      description:
        "IPP-eligible procurement with enterprise security meeting government compliance requirements. Common Criteria certified with NIST SP 800-193 alignment.",
      icon: "Landmark",
    },
    {
      title: "Corporate Workgroups",
      description:
        "Centralised printing hub for departments of 10-30 users with advanced workflow automation and seamless integration with business systems.",
      icon: "Building2",
    },
    {
      title: "Legal & Professional Services",
      description:
        "High-volume document handling with secure printing, confidential document management, and professional finishing options.",
      icon: "Scale",
    },
    {
      title: "Education & Research",
      description:
        "Versatile A3 capability for posters and presentations, cost-effective colour printing, and robust security for shared environments.",
      icon: "GraduationCap",
    },
    {
      title: "Healthcare Administration",
      description:
        "HIPAA-ready security features, quiet operation for office environments, and reliable high-volume document processing.",
      icon: "Heart",
    },
  ],

  // Key benefits
  keyBenefits: [
    {
      title: "Upgradeable Performance",
      description:
        "Start at 25ppm and upgrade to 30 or 35ppm via software license as your business grows—no hardware changes required.",
      icon: "TrendingUp",
    },
    {
      title: "Self-Healing Security",
      description:
        "HP Wolf Enterprise Security automatically detects, stops, and recovers from attacks without IT intervention.",
      icon: "Shield",
    },
    {
      title: "Cloud-Connected Workflows",
      description:
        "HP Workpath apps integrate directly with Microsoft 365, SharePoint, and other cloud services from the touchscreen.",
      icon: "Cloud",
    },
    {
      title: "Lower Total Cost",
      description:
        "Energy efficient design, high-yield cartridges, and HP's managed toner program reduce ongoing operational costs.",
      icon: "DollarSign",
    },
    {
      title: "Enterprise Fleet Management",
      description:
        "HP Web Jetadmin and HP Smart Device Services enable centralised control of your entire print fleet.",
      icon: "Settings",
    },
    {
      title: "Environmental Responsibility",
      description:
        "EPEAT Silver, ENERGY STAR, and Blue Angel certified. Toner cartridges made from 57%+ recycled plastic.",
      icon: "Leaf",
    },
  ],

  // Warranty
  warranty: {
    standard: "90-day parts-only warranty",
    options: [
      "1-year Next Business Day with DMR",
      "3-year Next Business Day with DMR",
      "4-year Next Business Day with DMR",
      "5-year Next Business Day with DMR",
      "3-year 4-hour 9x5 with DMR",
      "4-year 4-hour 9x5 with DMR",
      "5-year 4-hour 9x5 with DMR",
    ],
  },

  // Speed license upgrades
  speedLicenses: {
    baseSpeed: 25,
    upgrades: [
      { targetSpeed: 30, licenseNumber: "8EP56AAE" },
      { targetSpeed: 35, licenseNumber: "8EP57AAE" },
    ],
  },
};

export default hpE78625dn;
