import type { ProductDetail } from "@/types";

/**
 * =================================================================
 * HP Color LaserJet Managed MFP E87750dn - Full Product Specifications
 * =================================================================
 *
 * Comprehensive product data for SEO-optimized product detail page.
 * All specifications sourced from official HP datasheet (August 2022).
 *
 * Product Number: 5QK20A (Base) + 8EP60AAE (Speed License)
 * HP's production-class A3 Enterprise MFP with 50ppm speed
 * Upgradeable to 60ppm or 70ppm via additional speed licenses
 */

export const hpE87750dn: ProductDetail = {
  // Basic info (matches Product interface)
  id: "hp-e87750dn",
  model: "E87750dn",
  name: "HP Color LaserJet Managed MFP E87750dn",
  format: "A3",
  color: true,
  speed: 50,
  volumeMin: 20000,
  volumeMax: 100000,
  idealFor: "Enterprise, production environments, print rooms",
  description:
    "Production-class A3 colour MFP with 50ppm print/copy speed, 180ipm scanning, and 200,000 page monthly duty cycle. Built for the most demanding enterprise environments with upgrade path to 70ppm.",
  features: [
    "A3/A4 colour printing up to 50 ppm",
    "Scan speed up to 180 images per minute",
    "HP Wolf Enterprise Security with self-healing",
    "10.1-inch colour touchscreen",
    "200-sheet duplex ADF",
    "Upgradeable to 60ppm or 70ppm via license",
  ],
  hasDetailPage: true,
  image: "/images/products/hp-e87750dn.png",
  productNumber: "5QK20A + 8EP60AAE",

  // SEO & Marketing
  seoTitle: "HP E87750dn A3 Production MFP | 50ppm Enterprise Printer | Dreaming Print Solutions",
  seoDescription:
    "HP Color LaserJet Managed MFP E87750dn - Production-class A3 colour printer with 50ppm, 200K duty cycle, HP Wolf Security. For enterprise print rooms. IPP-registered Indigenous supplier.",
  seoKeywords: [
    "HP E87750dn",
    "HP Color LaserJet E87750",
    "HP E87750dn price Australia",
    "HP A3 production printer",
    "HP 50ppm printer",
    "HP managed printer",
    "A3 production multifunction",
    "enterprise production printer",
    "HP Wolf Security printer",
    "high volume production printer",
    "HP enterprise MFP",
    "50ppm colour laser",
    "HP print room printer",
    "A3 colour production printer",
    "HP E877 series",
  ],
  shortDescription:
    "Production-class A3 colour MFP with 50ppm printing, 180ipm scanning, and 200,000 page monthly duty cycle. The workhorse for enterprise print rooms with upgrade path to 70ppm.",
  longDescription: `The HP Color LaserJet Managed MFP E87750dn is built for production environments where volume, speed, and reliability are non-negotiable. With 50 pages per minute printing and copying, a 200,000 page monthly duty cycle, and upgrade paths to 60ppm or 70ppm, this device handles the most demanding enterprise workloads.

Powered by HP's custom-designed quad-core processor and 6GB of memory, the E87750dn delivers industry-leading performance without compromise. The 200-sheet duplex automatic document feeder and scanning at up to 180 images per minute makes even the largest document digitisation projects manageable.

HP Wolf Enterprise Security provides the industry's most comprehensive protection with self-healing BIOS, run-time intrusion detection certified by Common Criteria, and HP Memory Shield. Your documents and network remain protected against evolving cyber threats.

Expand capacity with up to 6,140 sheets of paper input, professional finishing options including booklet making, and optional high-speed 300ipm Flow scanning. Six customisable colour panels let you match your corporate identity while HP FutureSmart firmware keeps your investment current with the latest features and security updates.`,
  tagline: "Production Power. Enterprise Security.",

  // Print specifications
  printSpecs: {
    speedBlackA4: 50,
    speedColorA4: 50,
    firstPageOutBlack: 7.6,
    firstPageOutColor: 8.8,
    resolution: "600 x 600 dpi",
    resolutionMax: "1200 x 1200 dpi (Best/Fine Lines mode, full speed)",
    technology: "Laser",
    duplexPrint: true,
    duplexSpeed: 50,
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
    scanSpeedSimplex: 90,
    scanSpeedDuplex: 180,
    scanResolutionOptical: "600 x 600 dpi",
    scanResolutionMax: "600 x 600 dpi",
    adfCapacity: 200,
    adfDuplex: true,
    flatbedSize: "297 x 432 mm (A3/11x17 in)",
    scanFormats: [
      "PDF",
      "Hi-Compression PDF",
      "PDF/A",
      "JPEG",
      "TIFF",
      "MTIFF",
      "XPS",
    ],
    scanDestinations: [
      "Scan to Email",
      "Scan to Network Folder",
      "Scan to USB Drive",
      "Scan to SharePoint",
      "Scan to FTP",
      "Scan to sFTP",
      "Scan to LAN Fax",
      "Scan to Internet Fax",
      "Scan to Job Storage",
    ],
    ocrBuiltIn: false,
  },

  // Copy specifications
  copySpecs: {
    copySpeedBlack: 50,
    copySpeedColor: 50,
    firstCopyOutBlack: 4.2,
    firstCopyOutColor: 5.6,
    copyResolution: "600 x 600 dpi",
    maxCopies: 9999,
    reduceEnlarge: "25% to 400%",
  },

  // Fax specifications (optional)
  faxSpecs: {
    faxSpeed: "33.6 kbps",
    faxResolution: "Up to 300 x 300 dpi (400 x 400 dpi received)",
    faxMemory: "Up to 500 pages",
    speedDials: 1000,
  },

  // Paper handling
  paperHandling: {
    inputStandard: 1140,
    inputMax: 6140,
    outputStandard: 500,
    outputMax: 500,
    trayConfiguration: [
      "Tray 1: 100-sheet multipurpose tray (A3/SRA3 capable)",
      "Tray 2: 520-sheet input tray (A4/Letter)",
      "Tray 3: 520-sheet input tray (A3 capable)",
      "Optional: 2 x 520-sheet dual tray/stand (6GW47A)",
      "Optional: 2000-sheet high capacity tray/stand (6GW57A)",
      "Optional: 3000-sheet high capacity tray/stand (6GW56A)",
    ],
    mediaTypesSupported: [
      "Plain paper",
      "HP EcoEFFICIENT",
      "HP Matte 90g-200g",
      "HP Glossy 120g-200g",
      "HP Soft Gloss 120g",
      "Light 60-74g",
      "Bond paper",
      "Recycled paper",
      "Mid-Weight 96-110g",
      "Heavy 111-130g",
      "Extra Heavy 131-175g",
      "Cardstock 176-220g",
      "Card Glossy 176-220g",
      "Light Paperboard 221-255g",
      "Paperboard 256-300g",
      "Heavy Paperboard",
      "Colour Transparency",
      "Labels",
      "Letterhead",
      "Envelopes",
      "Heavy Envelopes",
      "Preprinted paper",
      "Pre-punched paper",
      "Coloured paper",
    ],
    mediaSizesSupported: [
      "A3",
      "A4",
      "A4R",
      "A5",
      "A5R",
      "A6",
      "RA3",
      "SRA3",
      "RA4",
      "SRA4",
      "B4 (JIS)",
      "B5 (JIS)",
      "B6 (JIS)",
      "8K",
      "16K",
      "Oficio",
      "10x15cm",
      "Postcards (JIS)",
      "Envelopes (B5, C5, C6, DL)",
      "Custom sizes up to 320 x 457mm",
    ],
    mediaWeightMin: 60,
    mediaWeightMax: 325,
    envelopeCapacity: 50,
  },

  // Connectivity
  connectivity: {
    standardPorts: [
      "Gigabit Ethernet 10/100/1000T",
      "SuperSpeed USB 3.0 Host Port",
      "Hi-Speed USB 2.0 Host Port",
      "SuperSpeed USB 3.0 Device Port",
      "Hardware Integration Pocket (HIP2)",
    ],
    networkStandard: "Gigabit Ethernet 10/100/1000T",
    wirelessOptional: true,
    wirelessStandard: "HP Jetdirect 3100w BLE/NFC/Wireless Accessory (3JN69A)",
    mobileprint: [
      "Apple AirPrint",
      "Mopria Certified",
      "Wi-Fi Direct Printing",
      "NFC Touch-to-Print (optional)",
      "PrinterOn Print",
    ],
    nfcTouchToPrint: true,
  },

  // Hardware
  hardware: {
    processor: "Quad Core (1.6 GHz) + Dual Core (1.4 GHz)",
    processorSpeed: "1.6 GHz",
    memory: "6 GB",
    memoryMax: "6 GB",
    storage: "Optional HP LaserJet 500GB Hard Disk Drive",
    storageOptions: [
      "HP LaserJet 500GB SED Hard Disk Drive (5QK45A)",
      "HP 500GB CCC, FIPS Hard Disk Drive (9EQ11A)",
      "HP 500GB CCC, FIPS, TAA Hard Disk Drive (6HN31A)",
    ],
    controlPanel: "Colour Graphics Display with touchscreen",
    controlPanelSize: "10.1 inch (25.6 cm) WXGA",
  },

  // Security features
  security: {
    features: [
      "HP Sure Start (BIOS protection with self-healing)",
      "Firmware whitelisting",
      "Run-time intrusion detection (Common Criteria certified)",
      "HP Connection Inspector",
      "HP Memory Shield",
      "Embedded Trusted Platform Module",
      "AES 256 hardware encryption",
      "Secure File Erase (temporary job files)",
      "Secure Erase (job data)",
      "Secure ATA Erase (disk)",
      "SSL/TLS (HTTPS)",
      "IPsec/Firewall",
      "802.1X authentication",
      "SNMPv3",
      "LDAP/Kerberos authentication",
      "SMTP over SSL",
      "USB port disablement",
      "Security lock slot",
    ],
    certifications: [
      "Common Criteria Certified (ISO/IEC 15408)",
      "NIST SP 800-193 compliant",
    ],
    encryptionStandard: "AES 256",
    secureErase: true,
    pullPrinting: true,
  },

  // Environmental
  environmental: {
    powerConsumptionPrinting: 890,
    powerConsumptionReady: 41.5,
    powerConsumptionSleep: 0.8,
    certifications: [
      "ENERGY STAR Certified",
      "Blue Angel",
      "EPEAT Silver registered",
      "IT ECO Declaration",
    ],
    operatingTemp: "15°C to 30°C",
    operatingHumidity: "20% to 80% RH",
    acousticPrinting: "53 dB(A)",
  },

  // Physical dimensions
  physical: {
    width: 585,
    depth: 695,
    height: 908,
    weight: 102,
  },

  // Duty cycle
  dutyCycle: {
    monthly: 200000,
    recommendedMonthly: 60000,
  },

  // Supplies
  supplies: {
    cartridges: [
      { color: "Black (Standard)", partNumber: "W9160MC", yield: 25000 },
      { color: "Cyan (Standard)", partNumber: "W9161MC", yield: 22500 },
      { color: "Yellow (Standard)", partNumber: "W9162MC", yield: 22500 },
      { color: "Magenta (Standard)", partNumber: "W9163MC", yield: 22500 },
      { color: "Black (High Yield)", partNumber: "W9170MC", yield: 50000 },
      { color: "Cyan (High Yield)", partNumber: "W9171MC", yield: 45000 },
      { color: "Yellow (High Yield)", partNumber: "W9172MC", yield: 45000 },
      { color: "Magenta (High Yield)", partNumber: "W9173MC", yield: 45000 },
    ],
  },

  // Speed licenses
  speedLicenses: {
    baseSpeed: 40,
    upgrades: [
      { targetSpeed: 50, licenseNumber: "8EP60AAE" },
      { targetSpeed: 60, licenseNumber: "8EP61AAE" },
      { targetSpeed: 70, licenseNumber: "8EP62AAE" },
    ],
  },

  // Key accessories
  accessories: [
    {
      name: "2 x 520-Sheet Department Paper Tray/Stand",
      partNumber: "6GW47A",
      description: "Adds 1,040 sheets of additional A3-capable paper capacity with integrated stand",
      category: "paper-handling",
    },
    {
      name: "2000-Sheet High Capacity Paper Tray/Stand",
      partNumber: "6GW57A",
      description: "High-capacity paper tray for production environments",
      category: "paper-handling",
    },
    {
      name: "3000-Sheet High Capacity Paper Tray/Stand",
      partNumber: "6GW56A",
      description: "Maximum capacity paper tray for continuous production runs",
      category: "paper-handling",
    },
    {
      name: "HP LaserJet Department Stand",
      partNumber: "6GW53A",
      description: "Matching stand without additional paper capacity",
      category: "paper-handling",
    },
    {
      name: "HP LaserJet 180ipm 200-Sheet DADF Scanner",
      partNumber: "5QK38A",
      description: "High-speed 200-sheet duplex ADF with 90ppm/180ipm scanning",
      category: "other",
    },
    {
      name: "HP LaserJet 300ipm 300-Sheet Flow DADF Scanner",
      partNumber: "5QK39A",
      description: "Ultra-high-speed Flow scanner with 150ppm/300ipm, 300-sheet ADF, and advanced workflow features",
      category: "other",
    },
    {
      name: "HP LaserJet Inner Finisher",
      partNumber: "6GW49A",
      description: "Internal finishing with stapling capability",
      category: "finishing",
    },
    {
      name: "HP LaserJet Stapler/Stacker Finisher",
      partNumber: "6GW55A",
      description: "External stapler/stacker for professional document finishing",
      category: "finishing",
    },
    {
      name: "HP LaserJet Booklet Finisher",
      partNumber: "6GW51A",
      description: "Create professional saddle-stitched booklets automatically",
      category: "finishing",
    },
    {
      name: "HP LaserJet InnerFinisher 2/3 Hole Punch",
      partNumber: "155P7A",
      description: "Add 2/3 hole punching to the inner finisher",
      category: "finishing",
    },
    {
      name: "HP LaserJet InnerFinisher 2/4 Hole Punch",
      partNumber: "155P8A",
      description: "Add 2/4 hole punching for European filing systems",
      category: "finishing",
    },
    {
      name: "HP MFP 810 Analog Dual Fax",
      partNumber: "5QK14A",
      description: "Dual-line analog fax for high-volume fax environments",
      category: "connectivity",
    },
    {
      name: "HP MFP 800 Analog Single Fax",
      partNumber: "7ZA08A",
      description: "Single-line analog fax capability",
      category: "connectivity",
    },
    {
      name: "HP Jetdirect 3100w BLE/NFC/Wireless",
      partNumber: "3JN69A",
      description: "Add wireless, Bluetooth Low Energy, and NFC connectivity",
      category: "connectivity",
    },
    {
      name: "HP Jetdirect LAN Accessory",
      partNumber: "8FP31A",
      description: "Second Ethernet port for network segmentation",
      category: "connectivity",
    },
    {
      name: "HP USB Universal Card Reader",
      partNumber: "X3D03A",
      description: "Multi-format card reader for user authentication",
      category: "security",
    },
    {
      name: "HP HIP2 Keystroke Reader",
      partNumber: "Y7C05A",
      description: "HID card reader for secure print release",
      category: "security",
    },
    {
      name: "HP Legic Secure USB Reader",
      partNumber: "4QL32A",
      description: "Legic card reader for authentication",
      category: "security",
    },
    {
      name: "HP LaserJet 500GB SED Hard Disk Drive",
      partNumber: "5QK45A",
      description: "Self-encrypting hard disk for secure document storage",
      category: "security",
    },
    {
      name: "HP LaserJet Workflow Accelerator Card",
      partNumber: "6HN30A",
      description: "Hardware acceleration for complex workflow processing",
      category: "other",
    },
    {
      name: "HP Foreign Interface Harness",
      partNumber: "B5L31A",
      description: "Connect third-party devices and solutions",
      category: "other",
    },
  ],

  // Use cases
  useCases: [
    {
      title: "Enterprise Print Rooms",
      description:
        "Handle production-level workloads with 50ppm speed, 200,000 page monthly duty cycle, and up to 6,140 sheets capacity. Built for centralised print operations serving entire organisations.",
      icon: "Building2",
    },
    {
      title: "Government & Defence",
      description:
        "Common Criteria certified security meets the strictest government compliance requirements. IPP Indigenous procurement advantage for federal, state, and local government contracts.",
      icon: "Landmark",
    },
    {
      title: "Large Law Firms",
      description:
        "High-speed A3 printing for court documents, discovery materials, and briefs. Professional finishing for client-ready documents with enterprise-grade security.",
      icon: "Scale",
    },
    {
      title: "Universities & TAFE",
      description:
        "Production-class capacity for exam printing, course materials, and administrative documents. Six colour panels available to match institutional branding.",
      icon: "GraduationCap",
    },
    {
      title: "Hospital Print Services",
      description:
        "Centralised printing for patient materials, administrative documents, and medical records. Common Criteria security for healthcare compliance requirements.",
      icon: "Heart",
    },
  ],

  // Key benefits
  keyBenefits: [
    {
      title: "Production-Class Performance",
      description:
        "50 pages per minute with upgrade path to 60ppm or 70ppm. First page out in just 7.6 seconds black, 8.8 seconds colour.",
      icon: "Zap",
    },
    {
      title: "Massive Duty Cycle",
      description:
        "200,000 page monthly duty cycle handles the most demanding production workloads. Recommended for up to 60,000 pages per month sustained use.",
      icon: "TrendingUp",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "HP Wolf Enterprise Security with Common Criteria certification, self-healing BIOS, run-time intrusion detection, and NIST SP 800-193 compliance.",
      icon: "Shield",
    },
    {
      title: "Maximum Capacity",
      description:
        "Up to 6,140 sheets paper capacity with optional high-capacity trays. Supports media up to 325gsm for professional print applications.",
      icon: "FileText",
    },
    {
      title: "Professional Finishing",
      description:
        "Optional inner finisher, booklet maker, stapler/stacker, and hole punch for production-ready documents without manual post-processing.",
      icon: "Settings",
    },
    {
      title: "Customisable Design",
      description:
        "Six colour panel options—Lunar Gray, Comet Red, Cosmic Green, Constellation Yellow, Aurora Purple, and HP Blue—to match your corporate identity.",
      icon: "Leaf",
    },
  ],

  // Warranty
  warranty: {
    standard: "90-day parts only warranty",
    options: [
      "1-year Next Business Day with DMR (U03HDE)",
      "3-year Next Business Day with DMR (U03HFE)",
      "4-year Next Business Day with DMR (U03HGE)",
      "5-year Next Business Day with DMR (U03HHE)",
      "3-year 4-hour 9x5 with DMR (U03HJE)",
      "4-year 4-hour 9x5 with DMR (U03HKE)",
      "5-year 4-hour 9x5 with DMR (U03HLE)",
    ],
  },
};

export default hpE87750dn;
