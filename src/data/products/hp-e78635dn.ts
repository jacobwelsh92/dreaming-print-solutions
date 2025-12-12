import type { ProductDetail } from "@/types";

/**
 * =================================================================
 * HP Color LaserJet Managed MFP E78635dn - Full Product Specifications
 * =================================================================
 *
 * Comprehensive product data for SEO-optimized product detail page.
 * All specifications sourced from official HP datasheet (August 2022).
 *
 * Product Number: 5QK18A (Base) + 8EP57AAE (Speed License)
 * HP's top-tier A3 Enterprise MFP with 35ppm speed - maximum in E786 series
 */

export const hpE78635dn: ProductDetail = {
  // Basic info (matches Product interface)
  id: "hp-e78635dn",
  model: "E78635dn",
  name: "HP Color LaserJet Managed MFP E78635dn",
  format: "A3",
  color: true,
  speed: 35,
  volumeMin: 10000,
  volumeMax: 30000,
  idealFor: "High-volume departments, enterprise workgroups",
  description:
    "Maximum performance A3 colour MFP with 35ppm print/copy speed, 180ipm scanning, and HP Wolf Enterprise Security. The fastest in the E786 series for demanding enterprise environments.",
  features: [
    "A3/A4 colour printing up to 35 ppm",
    "Scan speed up to 180 images per minute",
    "HP Wolf Enterprise Security with self-healing",
    "10.1-inch colour touchscreen",
    "200-sheet duplex ADF",
    "Up to 150,000 page monthly duty cycle",
  ],
  hasDetailPage: true,
  image: "/images/products/hp-e78635dn.jpg",
  productNumber: "5QK18A + 8EP57AAE",

  // SEO & Marketing
  seoTitle: "HP E78635dn A3 Colour MFP | 35ppm High-Volume Printer | Dreaming Print Solutions",
  seoDescription:
    "HP Color LaserJet Managed MFP E78635dn - Maximum performance A3 colour printer with 35ppm, 180ipm scanning, HP Wolf Security. For high-volume departments. IPP-registered Indigenous supplier.",
  seoKeywords: [
    "HP E78635dn",
    "HP Color LaserJet E78635",
    "HP E78635dn price Australia",
    "HP A3 colour printer",
    "HP 35ppm printer",
    "HP managed printer",
    "A3 multifunction printer",
    "high volume colour printer",
    "HP Wolf Security printer",
    "enterprise department printer",
    "HP enterprise MFP",
    "35ppm colour laser",
    "HP high volume printer",
    "A3 colour laser printer",
    "HP E786 series 35ppm",
  ],
  shortDescription:
    "Maximum performance A3 colour MFP with 35ppm printing, 180ipm scanning, and HP Wolf Enterprise Security. The fastest E786 series model for high-volume enterprise departments.",
  longDescription: `The HP Color LaserJet Managed MFP E78635dn represents the pinnacle of the E786 series, delivering 35 pages per minute for organisations that demand maximum throughput without compromise. This is the printer for departments where every minute counts.

Built on HP's proven enterprise platform with a powerful quad-core processor and 6GB of memory, the E78635dn handles the most complex documents and heaviest workloads with ease. The 200-sheet duplex automatic document feeder and scanning at up to 180 images per minute makes short work of large document digitisation projects.

HP Wolf Enterprise Security provides industry-leading protection that continuously monitors for threats and self-heals from attacks. Common Criteria certified run-time intrusion detection, HP Sure Start BIOS protection, and HP Memory Shield ensure your documents and network remain secure.

With a monthly duty cycle of up to 150,000 pages and recommended volume of 20,000 pages, this device is engineered for sustained high-volume performance. Expand capabilities further with professional finishing options, additional paper capacity up to 3,140 sheets, and optional wireless connectivity.`,
  tagline: "Maximum Speed. Enterprise Power.",

  // Print specifications
  printSpecs: {
    speedBlackA4: 35,
    speedColorA4: 35,
    firstPageOutBlack: 9.1,
    firstPageOutColor: 10.8,
    resolution: "600 x 600 dpi",
    resolutionMax: "1200 x 1200 dpi (Best/Fine Lines mode)",
    technology: "Laser",
    duplexPrint: true,
    duplexSpeed: 24,
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
      "RTF",
      "TXT",
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
    copySpeedBlack: 35,
    copySpeedColor: 35,
    firstCopyOutBlack: 4.8,
    firstCopyOutColor: 6.8,
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
    inputMax: 3140,
    outputStandard: 500,
    outputMax: 500,
    trayConfiguration: [
      "Tray 1: 100-sheet multipurpose tray (A3 capable)",
      "Tray 2: 520-sheet input tray (A4/Letter)",
      "Tray 3: 520-sheet input tray (A3 capable)",
      "Optional: 2 x 520-sheet dual tray/stand (6GW46A)",
      "Optional: 2000-sheet high capacity tray/stand (6GW48A)",
    ],
    mediaTypesSupported: [
      "Plain paper",
      "HP EcoEFFICIENT",
      "HP Matte 90g-200g",
      "HP Glossy 120g-150g",
      "HP Soft Gloss 120g",
      "Light 60-74g",
      "Bond paper",
      "Recycled paper",
      "Mid-Weight 96-110g",
      "Heavy 111-130g",
      "Extra Heavy 131-175g",
      "Cardstock 176-220g",
      "Light Paperboard 221-255g",
      "Paperboard 256-300g",
      "Colour Transparency",
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
      "A4R",
      "A5",
      "A5R",
      "A6",
      "RA4",
      "SRA4",
      "B4 (JIS)",
      "B5 (JIS)",
      "B6 (JIS)",
      "8K",
      "16K",
      "Oficio",
      "Postcards",
      "Envelopes (B5, C5, C6, DL)",
      "Custom sizes",
    ],
    mediaWeightMin: 60,
    mediaWeightMax: 300,
    envelopeCapacity: 10,
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
    storage: "32 GB eMMC (standard)",
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
      "HP Memory Shield with active system monitoring",
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
    powerConsumptionPrinting: 720,
    powerConsumptionReady: 32,
    powerConsumptionSleep: 0.8,
    certifications: [
      "ENERGY STAR Certified",
      "Blue Angel",
      "EPEAT Silver registered",
      "IT ECO Declaration",
    ],
    operatingTemp: "15°C to 30°C",
    operatingHumidity: "20% to 80% RH",
    acousticPrinting: "52 dB(A)",
  },

  // Physical dimensions
  physical: {
    width: 566,
    depth: 646,
    height: 848,
    weight: 82,
  },

  // Duty cycle
  dutyCycle: {
    monthly: 150000,
    recommendedMonthly: 20000,
  },

  // Supplies
  supplies: {
    cartridges: [
      { color: "Black (Standard)", partNumber: "W9140MC", yield: 14500 },
      { color: "Cyan (Standard)", partNumber: "W9141MC", yield: 12000 },
      { color: "Yellow (Standard)", partNumber: "W9142MC", yield: 12000 },
      { color: "Magenta (Standard)", partNumber: "W9143MC", yield: 12000 },
      { color: "Black (High Yield)", partNumber: "W9150MC", yield: 29000 },
      { color: "Cyan (High Yield)", partNumber: "W9151MC", yield: 24000 },
      { color: "Yellow (High Yield)", partNumber: "W9152MC", yield: 24000 },
      { color: "Magenta (High Yield)", partNumber: "W9153MC", yield: 24000 },
    ],
  },

  // Speed licenses
  speedLicenses: {
    baseSpeed: 25,
    upgrades: [
      { targetSpeed: 30, licenseNumber: "8EP56AAE" },
      { targetSpeed: 35, licenseNumber: "8EP57AAE" },
    ],
  },

  // Key accessories
  accessories: [
    {
      name: "2 x 520-Sheet Paper Tray/Stand",
      partNumber: "6GW46A",
      description: "Adds 1,040 sheets of additional A3-capable paper capacity with integrated stand",
      category: "paper-handling",
    },
    {
      name: "2000-Sheet High Capacity Paper Tray/Stand",
      partNumber: "6GW48A",
      description: "High-capacity paper tray for high-volume environments",
      category: "paper-handling",
    },
    {
      name: "HP LaserJet Workgroup Stand",
      partNumber: "6GW54A",
      description: "Matching stand without additional paper capacity",
      category: "paper-handling",
    },
    {
      name: "HP LaserJet 180ipm 200-Sheet DADF Scanner",
      partNumber: "5QK35A",
      description: "High-speed 200-sheet duplex ADF with 90ppm/180ipm scanning",
      category: "other",
    },
    {
      name: "HP LaserJet 240ipm 200-Sheet Flow DADF Scanner",
      partNumber: "5QK36A",
      description: "Ultra-high-speed Flow scanner with 120ppm/240ipm and advanced workflow features",
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
      name: "HP Accessibility Assistant",
      partNumber: "2MU47A",
      description: "Pull-out tray with keyboard and Braille markings for accessibility",
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
      title: "High-Volume Corporate Departments",
      description:
        "Handle sustained high-volume workloads with 35ppm speed and 150,000 page monthly duty cycle. Perfect for departments with 20-50+ users requiring maximum throughput.",
      icon: "Building2",
    },
    {
      title: "Government & Defence",
      description:
        "Common Criteria certified security meets government compliance requirements. IPP Indigenous procurement advantage for federal, state, and local government contracts.",
      icon: "Landmark",
    },
    {
      title: "Large Legal Practices",
      description:
        "High-speed A3 printing for court documents and briefs. Secure print release protects confidential client materials with enterprise-grade security.",
      icon: "Scale",
    },
    {
      title: "Universities & Large Schools",
      description:
        "Handle high-volume printing for course materials, exams, and administrative documents. A3 support for posters and large-format educational materials.",
      icon: "GraduationCap",
    },
    {
      title: "Hospital Administration",
      description:
        "Fast, secure document processing for patient records and administrative workflows. Common Criteria security for healthcare compliance requirements.",
      icon: "Heart",
    },
  ],

  // Key benefits
  keyBenefits: [
    {
      title: "Maximum E786 Performance",
      description:
        "35 pages per minute—the fastest speed in the E786 series. First page out in just 9.1 seconds black, 10.8 seconds colour.",
      icon: "Zap",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "HP Wolf Enterprise Security with Common Criteria certification, self-healing BIOS, run-time intrusion detection, and NIST SP 800-193 compliance.",
      icon: "Shield",
    },
    {
      title: "Built for Volume",
      description:
        "150,000 page monthly duty cycle handles the most demanding workloads. Recommended for up to 20,000 pages per month sustained use.",
      icon: "TrendingUp",
    },
    {
      title: "A3 Versatility",
      description:
        "Print, copy, and scan up to A3/11x17 inch documents. Essential for engineering drawings, marketing materials, and legal documents.",
      icon: "FileText",
    },
    {
      title: "Professional Finishing",
      description:
        "Optional inner finisher, booklet maker, and hole punch for professional document presentation without manual post-processing.",
      icon: "Settings",
    },
    {
      title: "Sustainable Excellence",
      description:
        "EPEAT Silver, ENERGY STAR, and Blue Angel certified. Toner cartridges made from 57% recycled plastic with 100% fiber-based packaging.",
      icon: "Leaf",
    },
  ],

  // Warranty
  warranty: {
    standard: "90-day parts only warranty",
    options: [
      "1-year Next Business Day with DMR (U03GVE)",
      "3-year Next Business Day with DMR (U03GWE)",
      "4-year Next Business Day with DMR (U03GXE)",
      "5-year Next Business Day with DMR (U03GYE)",
      "3-year 4-hour 9x5 with DMR (U03GZE)",
      "4-year 4-hour 9x5 with DMR (U03H0E)",
      "5-year 4-hour 9x5 with DMR (U03H1E)",
    ],
  },
};

export default hpE78635dn;
