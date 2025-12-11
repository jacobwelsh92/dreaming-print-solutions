/**
 * =================================================================
 * SITE CONFIGURATION
 * =================================================================
 *
 * Central configuration for all site metadata, contact info, and
 * business details. This is the single source of truth for:
 * - SEO metadata
 * - Structured data (JSON-LD)
 * - Contact information
 * - Social links
 *
 * UPDATE THESE VALUES before launch!
 */

export const siteConfig = {
  // =================================================================
  // BRAND IDENTITY
  // =================================================================
  name: "Dreaming Print Solutions",
  legalName: "Dreaming Print Solutions Pty Ltd",
  tagline: "Enterprise Print. Indigenous Heart.",
  description:
    "Australia's first indigenous-owned enterprise printer and MFD hardware dealer. HP enterprise solutions for government and corporate clients. Supply Nation certified. IPP registered supplier.",
  shortDescription:
    "Indigenous-owned enterprise printer dealer serving Australian government and corporate clients.",

  // =================================================================
  // URLS
  // =================================================================
  url: "https://dreamingprintsolutions.com.au",
  // Use this for development:
  // url: process.env.NEXT_PUBLIC_APP_URL || "https://dreamingprintsolutions.com.au",

  // =================================================================
  // CONTACT INFORMATION
  // =================================================================
  // ⚠️ UPDATE BEFORE LAUNCH - These are real business details
  contact: {
    email: "info@dreamingprintsolutions.com.au",
    phone: "+61 7 3186 8299", // UPDATE: Real phone number
    phoneDisplay: "07 3186 8299", // Display format
    address: {
      street: "123 Enterprise Street", // UPDATE: Real street address
      city: "Brisbane",
      state: "QLD",
      postcode: "4000", // UPDATE: Real postcode
      country: "Australia",
      full: "123 Enterprise Street, Brisbane QLD 4000", // UPDATE: Full address
      coordinates: {
        lat: -27.4698, // UPDATE: Real coordinates
        lng: 153.0251,
      },
    },
    hours: {
      weekdays: "8:30 AM - 5:00 PM",
      weekends: "Closed",
      timezone: "AEST",
    },
    responseTime: "24 hours",
  },

  // =================================================================
  // BUSINESS DETAILS
  // =================================================================
  // ⚠️ UPDATE BEFORE LAUNCH
  business: {
    abn: "12 345 678 901", // UPDATE: Real ABN
    acn: "123 456 789", // UPDATE: Real ACN if applicable
    founded: "2024",
    supplyNationNumber: "SN12345", // UPDATE: Real Supply Nation number
    supplyNationStatus: "Certified", // or "Certification in progress"
  },

  // =================================================================
  // SOCIAL LINKS
  // =================================================================
  // ⚠️ UPDATE BEFORE LAUNCH
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/dreaming-print-solutions", // UPDATE: Real LinkedIn
      icon: "linkedin",
    },
    // Add more as needed:
    // {
    //   name: "Facebook",
    //   url: "https://www.facebook.com/dreamingprintsolutions",
    //   icon: "facebook",
    // },
  ],

  // =================================================================
  // TEAM
  // =================================================================
  team: {
    founders: [
      {
        name: "Zac O'Brien",
        role: "Co-Founder & Director",
        bio: "With extensive experience in enterprise print solutions and a passion for supporting indigenous business growth, Zac leads our sales and client relationships.",
        linkedin: "https://www.linkedin.com/in/zac-obrien", // UPDATE
        image: "/images/team/zac-obrien.jpg", // UPDATE when photo available
      },
      {
        name: "Ben Long",
        role: "Co-Founder & Director",
        bio: "Ben brings deep technical expertise in print infrastructure and managed services, ensuring our clients receive best-in-class solutions and support.",
        linkedin: "https://www.linkedin.com/in/ben-long", // UPDATE
        image: "/images/team/ben-long.jpg", // UPDATE when photo available
      },
    ],
  },

  // =================================================================
  // SEO DEFAULTS
  // =================================================================
  seo: {
    titleTemplate: "%s | Dreaming Print Solutions",
    defaultTitle:
      "Enterprise Printers & MFDs | Indigenous-Owned Dealer | Dreaming Print Solutions",
    defaultDescription:
      "Australia's #1 indigenous-owned HP enterprise printer dealer. IPP registered. Government & corporate solutions. Supply Nation certified. Get a quote today.",
    keywords: [
      "indigenous printer dealer",
      "indigenous printer supplier australia",
      "aboriginal owned business",
      "enterprise printers",
      "HP MFD",
      "HP enterprise printer australia",
      "multifunction printer",
      "government printer procurement",
      "IPP supplier",
      "IPP registered printer dealer",
      "Supply Nation printer supplier",
      "managed print services",
      "managed print services brisbane",
      "document solutions",
      "A3 multifunction printer australia",
      "HP Color LaserJet Enterprise",
    ],
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: "Dreaming Print Solutions",
    },
    twitter: {
      cardType: "summary_large_image",
      // handle: "@dreamingprint", // Add when Twitter exists
    },
  },

  // =================================================================
  // CERTIFICATIONS & PARTNERSHIPS
  // =================================================================
  certifications: [
    {
      name: "Supply Nation",
      status: "Certified", // or "Certification in progress"
      url: "https://supplynation.org.au",
      logo: "/images/badges/supply-nation.svg",
    },
    {
      name: "HP Partner",
      status: "Authorised Partner",
      url: "https://www.hp.com",
      logo: "/images/badges/hp-partner.svg",
    },
    {
      name: "IPP Registered",
      status: "Registered Supplier",
      url: "https://www.niaa.gov.au/indigenous-affairs/economic-development/indigenous-procurement-policy-ipp",
      logo: "/images/badges/ipp-registered.svg",
    },
  ],

  // =================================================================
  // FEATURES / CAPABILITIES
  // =================================================================
  features: {
    services: [
      "Enterprise Printer Sales",
      "Managed Print Services",
      "Document Solutions",
      "Print Fleet Management",
      "Consumables Supply",
      "Maintenance & Support",
    ],
    brands: ["HP"],
    formats: ["A3", "A4"],
    industries: [
      "Federal Government",
      "State Government",
      "Local Government",
      "Corporate",
      "Education",
      "Healthcare",
    ],
  },
} as const;

// Type exports for type safety
export type SiteConfig = typeof siteConfig;
export type ContactInfo = typeof siteConfig.contact;
export type BusinessInfo = typeof siteConfig.business;
export type TeamMember = (typeof siteConfig.team.founders)[number];
