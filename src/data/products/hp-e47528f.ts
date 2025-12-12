import type { ProductDetail } from "@/types";

/**
 * =================================================================
 * HP Color LaserJet Managed MFP E47528f - Full Product Specifications
 * =================================================================
 *
 * Comprehensive product data for SEO-optimized product detail page.
 * All specifications sourced from official HP datasheet (November 2020).
 *
 * Product Number: 3QA75A
 * HP's entry-level Enterprise-class Color MFP
 */

export const hpE47528f: ProductDetail = {
  // Basic info (matches Product interface)
  id: "hp-e47528f",
  model: "E47528f",
  name: "HP Color LaserJet Managed MFP E47528f",
  format: "A4",
  color: true,
  speed: 27,
  volumeMin: 1500,
  volumeMax: 7500,
  idealFor: "Small teams, remote offices, small businesses",
  description:
    "Entry-level enterprise-class A4 colour MFP with print, copy, scan, and fax. Features HP's strongest security, 4.3-inch touchscreen, and compact design perfect for smaller workgroups.",
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
  productNumber: "3QA75A",

  // SEO & Marketing
  seoTitle: "HP E47528f A4 Colour MFP | Entry-Level Enterprise Printer | Dreaming Print Solutions",
  seoDescription:
    "HP Color LaserJet Managed MFP E47528f - Entry-level enterprise A4 colour printer with 27ppm, built-in fax, HP Wolf Security. Compact design for small teams. IPP-registered Indigenous supplier.",
  seoKeywords: [
    "HP E47528f",
    "HP Color LaserJet E47528",
    "HP E47528f price Australia",
    "HP A4 colour printer",
    "HP small office printer",
    "HP managed printer",
    "A4 multifunction printer",
    "small business colour printer",
    "HP Wolf Security printer",
    "compact office MFP",
    "HP enterprise printer small office",
    "27ppm colour printer",
    "HP printer with fax",
    "entry level enterprise printer",
  ],
  shortDescription:
    "Entry-level enterprise A4 colour MFP with HP's strongest security. Print, copy, scan, and fax at 27ppm in a compact design perfect for small teams and remote offices.",
  longDescription: `The HP Color LaserJet Managed MFP E47528f brings enterprise-class features to small teams and remote offices. As HP's entry-level managed MFP, it delivers the security and reliability of larger enterprise devices in a compact, cost-effective package.

Despite its smaller footprint, the E47528f doesn't compromise on security. It features HP Wolf Enterprise Security—the same self-healing protection found in HP's flagship devices—including HP Sure Start BIOS protection, firmware whitelisting, and real-time intrusion detection.

With print, copy, scan, and built-in fax capabilities all running at up to 27 pages per minute, this device handles the complete document workflow needs of small workgroups. The intuitive 4.3-inch colour touchscreen provides easy access to all functions, while HP FutureSmart firmware ensures your investment stays current with the latest features.

Optimised for managed environments with increased monthly page volumes and fewer interventions, the E47528f helps reduce printing costs while maintaining the quality and security standards your business requires.`,
  tagline: "Enterprise Security. Compact Design.",

  // Print specifications
  printSpecs: {
    speedBlackA4: 27,
    speedColorA4: 27,
    firstPageOutBlack: 9.5,
    firstPageOutColor: 11.0,
    resolution: "600 x 600 dpi",
    resolutionMax: "1200 x 1200 dpi (Fine Lines mode)",
    technology: "Laser",
    duplexPrint: true,
    duplexSpeed: 24,
    printLanguages: [
      "HP PCL 6",
      "HP PCL 5",
      "HP PostScript Level 3 emulation",
      "Native PDF printing (v 1.7)",
      "Apple AirPrint",
    ],
  },

  // Scan specifications
  scanSpecs: {
    colorScanning: true,
    scanSpeedSimplex: 29,
    scanSpeedDuplex: 46,
    scanResolutionOptical: "600 x 600 dpi",
    scanResolutionMax: "600 x 600 dpi",
    adfCapacity: 50,
    adfDuplex: true,
    flatbedSize: "216 x 297 mm (A4)",
    scanFormats: [
      "PDF",
      "JPEG",
      "TIFF",
      "MTIFF",
      "XPS",
      "Text (OCR)",
    ],
    scanDestinations: [
      "Scan to Email",
      "Scan to Network Folder",
      "Scan to USB Drive",
      "Scan to SharePoint",
      "Scan to FTP",
      "LAN/Internet Fax",
    ],
    ocrBuiltIn: false,
  },

  // Copy specifications
  copySpecs: {
    copySpeedBlack: 27,
    copySpeedColor: 27,
    firstCopyOutBlack: 9.6,
    firstCopyOutColor: 11.3,
    copyResolution: "600 x 600 dpi",
    maxCopies: 9999,
    reduceEnlarge: "25% to 400%",
  },

  // Fax specifications (built-in)
  faxSpecs: {
    faxSpeed: "33.6 kbps",
    faxResolution: "Up to 300 x 300 dpi",
    faxMemory: "Dependent on available disk space",
    speedDials: 1000,
  },

  // Paper handling
  paperHandling: {
    inputStandard: 300,
    inputMax: 850,
    outputStandard: 150,
    outputMax: 150,
    trayConfiguration: [
      "Tray 1: 50-sheet multipurpose tray",
      "Tray 2: 250-sheet input tray",
      "Optional Tray 3: 550-sheet feeder (CF404A)",
    ],
    mediaTypesSupported: [
      "Plain paper",
      "Bond paper",
      "Brochure paper",
      "Coloured paper",
      "Glossy paper",
      "Letterhead",
      "Photo paper",
      "Preprinted paper",
      "Prepunched paper",
      "Recycled paper",
      "Rough paper",
      "Postcards",
      "Labels",
      "Envelopes",
    ],
    mediaSizesSupported: [
      "A4",
      "A5",
      "A6",
      "RA4",
      "B5 (JIS)",
      "B6 (JIS)",
      "16K",
      "10 x 15 cm",
      "Envelopes (B5, C5, C6, DL)",
      "Custom sizes",
    ],
    mediaWeightMin: 60,
    mediaWeightMax: 200,
    envelopeCapacity: 10,
  },

  // Connectivity
  connectivity: {
    standardPorts: [
      "2 x Hi-Speed USB 2.0 Host",
      "1 x Hi-Speed USB 2.0 Device",
      "Gigabit Ethernet 10/100/1000T",
      "Fax port (RJ-11)",
    ],
    networkStandard: "Gigabit Ethernet 10/100/1000T",
    wirelessOptional: true,
    wirelessStandard: "HP Jetdirect 3100w BLE/NFC/Wireless Accessory (3JN69A)",
    mobileprint: [
      "HP ePrint",
      "Apple AirPrint",
      "Mopria Certified",
      "Wi-Fi Direct Printing",
      "NFC Touch-to-Print (optional)",
      "HP Roam (optional)",
      "PrinterOn Print",
    ],
    nfcTouchToPrint: true,
  },

  // Hardware
  hardware: {
    processor: "Single Core",
    processorSpeed: "800 MHz",
    memory: "2 GB",
    memoryMax: "2 GB",
    storage: "No hard disk",
    storageOptions: [],
    controlPanel: "Colour capacitive touch panel",
    controlPanelSize: "4.3 inch (10.9 cm)",
  },

  // Security features
  security: {
    features: [
      "HP Sure Start (BIOS protection with self-healing)",
      "Firmware whitelisting",
      "Run-time intrusion detection (Common Criteria certified)",
      "HP Connection Inspector",
      "Embedded Trusted Platform Module",
      "Storage encryption",
      "Encrypted PDF and Email (FIPS 140 validated)",
      "SSL/TLS (HTTPS)",
      "IPsec/Firewall",
      "802.1X authentication",
      "SNMPv3",
      "Kerberos/LDAP authentication",
      "1000 user PIN codes",
      "USB port disablement",
      "Security lock slot",
    ],
    certifications: [
      "Common Criteria Certified",
      "NIST SP 800-193 compliant",
    ],
    encryptionStandard: "FIPS 140 validated",
    secureErase: true,
    pullPrinting: true,
  },

  // Environmental
  environmental: {
    powerConsumptionPrinting: 581,
    powerConsumptionReady: 21.9,
    powerConsumptionSleep: 1.0,
    certifications: [
      "ENERGY STAR Certified",
      "Blue Angel",
      "EPEAT registered",
    ],
    operatingTemp: "15°C to 32.5°C",
    operatingHumidity: "10% to 90% RH",
    acousticPrinting: "49 dB(A)",
  },

  // Physical dimensions
  physical: {
    width: 415,
    depth: 472,
    height: 400,
    weight: 23.2,
  },

  // Duty cycle
  dutyCycle: {
    monthly: 65000,
    recommendedMonthly: 7500,
  },

  // Supplies (starter cartridges included, high-yield available through managed program)
  supplies: {
    cartridges: [
      { color: "Black (Starter)", partNumber: "Included", yield: 2400 },
      { color: "Cyan (Starter)", partNumber: "Included", yield: 2100 },
      { color: "Yellow (Starter)", partNumber: "Included", yield: 2100 },
      { color: "Magenta (Starter)", partNumber: "Included", yield: 2100 },
    ],
  },

  // Key accessories
  accessories: [
    {
      name: "550-Sheet Paper Feeder Tray",
      partNumber: "CF404A",
      description: "Adds 550 sheets of additional paper capacity",
      category: "paper-handling",
    },
    {
      name: "HP Jetdirect 3100w Wireless",
      partNumber: "3JN69A",
      description: "BLE/NFC/Wireless connectivity accessory",
      category: "connectivity",
    },
    {
      name: "HP Jetdirect LAN Accessory",
      partNumber: "8FP31A",
      description: "Second Ethernet port for network segmentation",
      category: "connectivity",
    },
    {
      name: "HP Universal USB Proximity Card Reader",
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
      name: "HP Foreign Interface Harness",
      partNumber: "B5L31A",
      description: "Connect third-party devices and solutions",
      category: "other",
    },
  ],

  // Use cases
  useCases: [
    {
      title: "Small Business Offices",
      description:
        "Complete print, copy, scan, and fax functionality in one compact device. Perfect for businesses with 1-10 employees needing enterprise-grade reliability.",
      icon: "Building2",
    },
    {
      title: "Remote & Branch Offices",
      description:
        "Enterprise security in a compact footprint ideal for satellite offices that need the same protection as headquarters without the space for larger devices.",
      icon: "Landmark",
    },
    {
      title: "Home Offices (Professional)",
      description:
        "Professional-grade output and security for executives and professionals working from home who need to maintain corporate document standards.",
      icon: "Heart",
    },
    {
      title: "Healthcare Clinics",
      description:
        "Compact enough for reception areas with the security features needed to protect patient information. Built-in fax for medical communications.",
      icon: "Heart",
    },
    {
      title: "Legal & Accounting Practices",
      description:
        "Secure document handling with pull printing and encryption. Built-in fax for legal document transmission with confidentiality requirements.",
      icon: "Scale",
    },
  ],

  // Key benefits
  keyBenefits: [
    {
      title: "Enterprise Security, Compact Size",
      description:
        "Full HP Wolf Enterprise Security including self-healing BIOS, intrusion detection, and firmware whitelisting—all in a desktop-friendly footprint.",
      icon: "Shield",
    },
    {
      title: "All-in-One Productivity",
      description:
        "Print, copy, scan, and fax in a single device. Built-in fax eliminates the need for a separate machine, saving space and cost.",
      icon: "TrendingUp",
    },
    {
      title: "Easy Fleet Management",
      description:
        "HP Web Jetadmin and HP FutureSmart firmware enable centralised management alongside larger enterprise devices.",
      icon: "Settings",
    },
    {
      title: "Lower Running Costs",
      description:
        "Optimised for managed environments with increased monthly volumes and fewer interventions, reducing total cost of ownership.",
      icon: "DollarSign",
    },
    {
      title: "Mobile Ready",
      description:
        "Print from any device with AirPrint, Mopria, Wi-Fi Direct, and optional NFC touch-to-print for instant mobile connectivity.",
      icon: "Cloud",
    },
    {
      title: "Sustainable Choice",
      description:
        "ENERGY STAR and Blue Angel certified with automatic duplex printing as default. HP End of Life Solutions for sustainable retirement.",
      icon: "Leaf",
    },
  ],

  // Warranty
  warranty: {
    standard: "1-year on-site repair with 24/7 phone support",
    options: [
      "3-year Next Business Day",
      "4-year Next Business Day",
      "5-year Next Business Day",
      "3-year 4-hour 9x5",
      "4-year 4-hour 9x5",
      "5-year 4-hour 9x5",
    ],
  },
};

export default hpE47528f;
