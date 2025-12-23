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
  tagline: "Proudly Indigenous. Enterprise Ready.",
  description:
    "A proudly owned and operated indigenous company delivering high quality Copiers, Printers, and Multi-Functional Devices (MFDs), affordable printing solutions Australia wide. HP machines suited to your volume and workflow. Supply Nation certified. IPP registered supplier.",
  shortDescription:
    "Proudly indigenous owned and operated, delivering high quality printing solutions Australia wide.",

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
    email: "benlong@dreamingprintsolutions.com.au",
    phone: "+61459088771",
    phoneDisplay: "0459 088 771",
    // Address removed per client request
    hours: {
      weekdays: "8:30am - 5:00pm",
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
    abn: "46 691 772 853",
    acn: "", // Not applicable
    founded: "2024",
    supplyNationNumber: "", // Registration number if applicable
    supplyNationStatus: "Registered", // Registered Supplier
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
        name: "Ben Long",
        role: "Founder & Director",
        bio: "Ben is a proud Anmatyerre man who has bloodlines through Ti Tree, Darwin, and the Tiwi Islands. He is currently playing for the Gold Coast Suns and is one of the Indigenous leaders at the club. He has started this business as a way he can help Indigenous businesses and the community, and any businesses, now and after his football career.",
        linkedin: "#",
        image: "/images/team/ben-long.png",
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
      "Business Printers & MFDs",
      "Managed Print Services",
      "Document Management",
      "Secure Printing Solutions",
      "Workflow Solutions",
      "Cost Allocation & Recovery Software",
      "Colour Management Systems",
      "Document Management Automation",
      "Cloud-Based Technology Solutions",
      "Business Solution Integration",
    ],
    brands: ["HP"],
    formats: ["A3", "A4"],
    industries: [
      "Indigenous Businesses",
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
