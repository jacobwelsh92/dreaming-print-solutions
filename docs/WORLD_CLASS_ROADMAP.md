# Dreaming Print Solutions: World-Class Execution Roadmap

## Vision Statement
Position Dreaming Print Solutions as Australia's premier indigenous-owned enterprise print partner - not just a vendor, but the definitive authority on government print procurement and indigenous business excellence.

---

# PHASE 1: SEO FOUNDATION
**Goal**: Make Google understand exactly who we are, what we sell, and why we're the #1 choice for government buyers.

## 1.1 Structured Data (JSON-LD)

### Organization Schema
```
Purpose: Establish business identity in Google's Knowledge Graph
Location: src/components/seo/structured-data.tsx
```

**Required Fields:**
| Field | Value | Why It Matters |
|-------|-------|----------------|
| @type | Organization | Primary entity type |
| name | Dreaming Print Solutions | Brand recognition |
| legalName | Dreaming Print Solutions Pty Ltd | Legal verification |
| url | https://dreamingprintsolutions.com.au | Canonical domain |
| logo | Full URL to logo-square.png | Brand in search results |
| image | Array of brand images | Rich snippets |
| description | 160 chars max | Search snippet |
| foundingDate | 2024 | Establishes timeline |
| founders | Array with Zac & Ben | Personal connection |
| address | PostalAddress schema | Local SEO critical |
| contactPoint | Customer service details | Direct contact |
| sameAs | [LinkedIn, Facebook, etc.] | Social verification |
| areaServed | Australia (GeoShape) | Geographic targeting |
| hasOfferCatalog | Links to products | Product discovery |
| memberOf | Supply Nation, HP Partner | Trust signals |
| award | Any certifications | Authority building |
| slogan | "Enterprise Print. Indigenous Heart." | Brand recall |

### LocalBusiness Schema
```
Purpose: Appear in "near me" and local pack results
Location: Embedded in Organization or separate
```

**Required Fields:**
| Field | Value | Why It Matters |
|-------|-------|----------------|
| @type | LocalBusiness (or ProfessionalService) | Service business type |
| priceRange | "$$$$" | Enterprise pricing signal |
| openingHoursSpecification | Mon-Fri 8:30-17:00 | When to contact |
| telephone | Real phone number | Click-to-call |
| email | Real email | Direct contact |
| paymentAccepted | Invoice, Bank Transfer | B2B signals |
| currenciesAccepted | AUD | Local market |
| areaServed | All Australian states | National reach |

### Product Schema (for each of 5 HP MFDs)
```
Purpose: Rich product snippets in search, Google Shopping eligibility
Location: Products page + individual product sections
```

**Required Fields per Product:**
| Field | Value | Why It Matters |
|-------|-------|----------------|
| @type | Product | Product recognition |
| name | HP Color LaserJet Enterprise MFP [Model] | Full product name |
| description | Detailed 150+ char description | Search snippet |
| image | Product image URL | Visual search |
| brand.name | HP | Brand filtering |
| manufacturer | HP Inc. | Supply chain clarity |
| model | E78630dn etc. | Model search |
| sku | Unique identifier | Inventory reference |
| mpn | HP part number | Exact match |
| category | Office Equipment > Printers > Multifunction | Categorization |
| offers | Offer schema (see below) | Pricing signals |
| additionalProperty | Speed, volume, format specs | Feature search |
| isRelatedTo | Other models | Cross-discovery |
| audience | BusinessAudience | B2B targeting |

**Offer Schema (nested in Product):**
| Field | Value | Why It Matters |
|-------|-------|----------------|
| @type | Offer | Purchasable |
| availability | InStock / PreOrder | Inventory signal |
| priceSpecification | Quote-based | Enterprise pricing |
| seller | Organization reference | Trust link |
| areaServed | Australia | Shipping scope |
| eligibleRegion | AU states | Availability |

### WebSite Schema
```
Purpose: Enable sitelinks search box in Google
Location: Root layout
```

**Required Fields:**
| Field | Value |
|-------|-------|
| @type | WebSite |
| name | Dreaming Print Solutions |
| url | https://dreamingprintsolutions.com.au |
| potentialAction | SearchAction (when search implemented) |

### BreadcrumbList Schema
```
Purpose: Show navigation path in search results
Location: Each page dynamically
```

**Example for Products page:**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Home", "item": "/" },
    { "position": 2, "name": "Products", "item": "/products" }
  ]
}
```

### FAQPage Schema (Phase 2, but plan now)
```
Purpose: Win FAQ rich snippets - massive SERP real estate
Location: FAQ section/page
```

---

## 1.2 Sitemap Generation

### Dynamic Sitemap (src/app/sitemap.ts)
```typescript
Purpose: Tell Google every page that exists and their priority
```

**Pages to Include:**
| URL | Priority | Change Frequency | Notes |
|-----|----------|------------------|-------|
| / | 1.0 | weekly | Homepage highest priority |
| /about | 0.8 | monthly | Core page |
| /services | 0.8 | monthly | Core page |
| /products | 0.9 | weekly | High-value page |
| /contact | 0.7 | monthly | Conversion page |
| /faq | 0.6 | monthly | Support page |
| /privacy-policy | 0.3 | yearly | Legal page |
| /terms | 0.3 | yearly | Legal page |
| /blog/* | 0.7 | daily | Fresh content (future) |
| /case-studies/* | 0.7 | monthly | Social proof (future) |
| /resources/* | 0.6 | monthly | Lead magnets (future) |

**Technical Requirements:**
- LastModified dates from git or manual tracking
- Proper XML formatting
- Submit to Google Search Console
- Submit to Bing Webmaster Tools

---

## 1.3 Robots.txt

### File: public/robots.txt
```
Purpose: Control what search engines crawl
```

**Configuration:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/ (future)

# Sitemaps
Sitemap: https://dreamingprintsolutions.com.au/sitemap.xml

# Crawl-delay for politeness (optional)
Crawl-delay: 1
```

---

## 1.4 Technical SEO Enhancements

### Canonical URLs
```
Purpose: Prevent duplicate content issues
Location: Each page's metadata
```

**Implementation:**
- Add `alternates.canonical` to each page's metadata
- Handle trailing slashes consistently
- Handle www vs non-www (redirect in Vercel)

### Meta Enhancements per Page

**Homepage:**
| Meta | Current | Optimized |
|------|---------|-----------|
| Title | Dreaming Print Solutions \| Indigenous-Owned... | Enterprise Printers & MFDs \| Indigenous-Owned Dealer \| Dreaming Print |
| Description | Australia's first indigenous-owned... | Australia's #1 indigenous-owned HP enterprise printer dealer. IPP registered. Government & corporate solutions. Supply Nation certified. Get a quote → |

**Products Page:**
| Meta | Optimized |
|------|-----------|
| Title | HP Enterprise Printers & MFDs \| Compare Models \| Dreaming Print |
| Description | Compare HP Color LaserJet Enterprise MFDs. A3 & A4 models from 25-50ppm. Volume ranges 1K-100K pages. IPP-registered supplier. Request pricing → |

**Services Page:**
| Meta | Optimized |
|------|-----------|
| Title | Managed Print Services & Document Solutions \| Dreaming Print |
| Description | Enterprise managed print services for government & corporate. Hardware sales, supply management, maintenance & support. Indigenous-owned, HP certified. |

**About Page:**
| Meta | Optimized |
|------|-----------|
| Title | About Us \| Australia's First Indigenous Printer Dealer \| Dreaming Print |
| Description | Meet Australia's first indigenous-owned enterprise printer dealer. Founded by Zac O'Brien & Ben Long. Supply Nation certified. Serving government since 2024. |

**Contact Page:**
| Meta | Optimized |
|------|-----------|
| Title | Get a Quote \| Contact Dreaming Print Solutions |
| Description | Request a quote for HP enterprise printers. Fast response within 24 hours. Serving Australian government & corporate. Call [phone] or complete our form. |

---

## 1.5 Image SEO

### Current Issues:
- No product images (using icon placeholders)
- OG image is logo-based (not contextual)
- No alt text optimization

### Required Image Assets:
| Image | Dimensions | Purpose | Alt Text |
|-------|------------|---------|----------|
| hero-printers.webp | 1920x1080 | Hero background | HP enterprise printers in modern office |
| product-e47528f.webp | 800x600 | Product listing | HP Color LaserJet Enterprise MFP E47528f |
| product-e78625dn.webp | 800x600 | Product listing | HP Color LaserJet Enterprise MFP E78625dn |
| product-e78630dn.webp | 800x600 | Product listing | HP Color LaserJet Enterprise MFP E78630dn |
| product-e78640dn.webp | 800x600 | Product listing | HP Color LaserJet Enterprise MFP E78640dn |
| product-e87750dn.webp | 800x600 | Product listing | HP Color LaserJet Enterprise Flow MFP E87750dn |
| team-zac.webp | 400x400 | Team section | Zac O'Brien, Co-founder |
| team-ben.webp | 400x400 | Team section | Ben Long, Co-founder |
| office-brisbane.webp | 1200x800 | About page | Dreaming Print Solutions Brisbane office |
| supply-nation-badge.svg | 200x80 | Trust badge | Supply Nation Certified Supplier |
| hp-partner-badge.svg | 200x80 | Trust badge | Authorised HP Partner |
| og-homepage.png | 1200x630 | Social share | Branded OG with tagline |
| og-products.png | 1200x630 | Social share | Products OG with printer images |
| og-contact.png | 1200x630 | Social share | Contact OG with CTA |

### Image Optimization Config (next.config.ts):
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
}
```

---

## 1.6 Placeholder Value Updates

### CRITICAL - Must Update Before Launch:

| Placeholder | Location | Required Value |
|-------------|----------|----------------|
| Phone: 0400 000 000 | navigation.ts | Real business phone |
| ABN: XX XXX XXX XXX | footer.tsx | Real ABN |
| LinkedIn: # | navigation.ts | Real LinkedIn company page |
| Address: Brisbane, Queensland | navigation.ts | Full street address |
| Email: info@dreamingprintsolutions.com.au | navigation.ts | Verify email works |
| Supply Nation: "Certification in progress" | footer.tsx | Update when certified |
| Team photos | about/page.tsx | Real headshots |

---

## 1.7 Deliverables Checklist

### Files to Create:
- [ ] `src/components/seo/structured-data.tsx` - JSON-LD components
- [ ] `src/components/seo/breadcrumbs.tsx` - Breadcrumb UI + schema
- [ ] `src/app/sitemap.ts` - Dynamic sitemap generation
- [ ] `public/robots.txt` - Crawler directives

### Files to Modify:
- [ ] `src/app/layout.tsx` - Add Organization schema
- [ ] `src/app/(marketing)/page.tsx` - Add WebSite schema
- [ ] `src/app/(marketing)/products/page.tsx` - Add Product schemas
- [ ] `src/app/(marketing)/about/page.tsx` - Enhanced metadata
- [ ] `src/app/(marketing)/services/page.tsx` - Enhanced metadata
- [ ] `src/app/(marketing)/contact/page.tsx` - Add LocalBusiness schema
- [ ] `src/data/navigation.ts` - Update placeholders
- [ ] `src/components/layout/footer.tsx` - Update ABN
- [ ] `next.config.ts` - Image optimization

### External Actions:
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Submit sitemap to both
- [ ] Verify domain ownership
- [ ] Request indexing of key pages

---

# PHASE 2: TRUST & CONVERSION
**Goal**: Convert visitors into leads by proving our credibility and answering all their questions.

## 2.1 Testimonials System

### Data Structure (src/data/testimonials.ts):
```typescript
interface Testimonial {
  id: string;
  quote: string;           // 50-150 words
  author: {
    name: string;
    title: string;
    organisation: string;
    image?: string;        // Optional headshot
  };
  rating?: number;         // 1-5 stars
  date: string;            // ISO date
  category: 'government' | 'corporate' | 'education' | 'healthcare';
  featured: boolean;       // Show on homepage
  productMentioned?: string; // Link to product
  metrics?: {              // Quantifiable results
    costSaving?: string;   // "35% reduction"
    timeSaving?: string;   // "2 hours/week"
    satisfactionScore?: number;
  };
}
```

### Required Testimonials (Minimum 6):
| Category | Organisation Type | Key Message |
|----------|-------------------|-------------|
| Government | Federal department | IPP procurement ease |
| Government | State agency | Compliance & security |
| Corporate | Large enterprise | Cost savings & reliability |
| Corporate | SME | Service quality |
| Education | University | Volume & support |
| Healthcare | Hospital/clinic | Reliability & uptime |

### Components to Build:
1. **TestimonialCard** - Individual testimonial display
   - Quote with quotation marks styling
   - Author info with optional photo
   - Star rating (if applicable)
   - Organisation logo (if provided)
   - Category badge

2. **TestimonialsSection** - Homepage carousel/grid
   - 3 featured testimonials
   - Smooth carousel on mobile
   - Grid on desktop
   - "View all testimonials" link

3. **TestimonialsPage** - Full testimonials page (/testimonials)
   - Filter by category
   - All testimonials displayed
   - Schema markup for each

### Schema: Review + AggregateRating
```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47",
  "bestRating": "5"
}
```

---

## 2.2 FAQ System

### Data Structure (src/data/faq.ts):
```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;          // Can include markdown
  category: FAQCategory;
  order: number;           // Display order
  relatedProducts?: string[];
  relatedServices?: string[];
}

type FAQCategory =
  | 'general'
  | 'products'
  | 'pricing'
  | 'procurement'      // IPP, government buying
  | 'support'
  | 'indigenous';      // About indigenous ownership
```

### Required FAQs (Minimum 20):

**General (5):**
1. What makes Dreaming Print Solutions different from other printer dealers?
2. What areas of Australia do you service?
3. How quickly can you deliver and install equipment?
4. Do you offer equipment demonstrations?
5. What support do you provide after purchase?

**Products (4):**
1. What HP printer models do you supply?
2. What's the difference between A3 and A4 multifunction printers?
3. How do I know which printer is right for my organisation's volume?
4. Do you supply consumables and replacement parts?

**Pricing (3):**
1. How does your pricing work for enterprise printers?
2. Do you offer leasing or rental options?
3. Are there discounts for government buyers?

**Procurement/IPP (4):**
1. What is the Indigenous Procurement Policy (IPP)?
2. How does buying from you help meet IPP targets?
3. What's the process for government procurement?
4. Do you have existing contracts or panels we can access?

**Support (2):**
1. What does your managed print service include?
2. What's your response time for service calls?

**Indigenous Ownership (2):**
1. Is Dreaming Print Solutions genuinely indigenous-owned?
2. How does purchasing from you support indigenous communities?

### Components to Build:
1. **FAQAccordion** - Expandable Q&A component
   - Animated expand/collapse
   - Accessible keyboard navigation
   - Plus/minus or chevron indicator
   - Answer supports markdown/links

2. **FAQSection** - Homepage snippet (top 5 questions)
   - "Have questions?" heading
   - Top 5 most common
   - "View all FAQs" link

3. **FAQPage** - Full FAQ page (/faq)
   - Category filtering
   - Search within FAQs
   - Contact CTA if question not found
   - FAQPage schema for all items

### Schema: FAQPage
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Indigenous Procurement Policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The IPP is an Australian Government policy..."
      }
    }
  ]
}
```

---

## 2.3 Client Logos / Trust Bar

### Component: TrustLogosBar
```
Purpose: Social proof through brand association
Location: Homepage (below hero), About page
```

### Logo Categories:
1. **Certification Badges** (always show):
   - Supply Nation Certified
   - HP Authorised Partner
   - IPP Registered Supplier

2. **Client Logos** (as available):
   - Government departments (with permission)
   - Corporate clients (with permission)
   - "Trusted by 50+ organisations" if can't show logos

### Design Requirements:
- Grayscale logos (color on hover)
- Consistent height (40-60px)
- Infinite scroll animation (subtle)
- "As seen in" or "Trusted by" heading
- Mobile: 2 rows, smaller logos

---

## 2.4 Case Studies

### Data Structure (src/data/case-studies.ts):
```typescript
interface CaseStudy {
  id: string;
  slug: string;              // URL-friendly
  title: string;             // "Department of X Transforms Print Operations"
  client: {
    name: string;            // Can be anonymised
    industry: string;
    size: string;            // "500+ employees"
    logo?: string;
  };
  challenge: string;         // 100-200 words
  solution: string;          // 150-250 words
  results: {
    metrics: Array<{
      label: string;         // "Cost Reduction"
      value: string;         // "42%"
      description?: string;
    }>;
    testimonialId?: string;  // Link to testimonial
  };
  productsUsed: string[];    // Product IDs
  servicesUsed: string[];    // Service types
  timeline: string;          // "3 months"
  image: string;             // Hero image
  publishedDate: string;
  featured: boolean;
}
```

### Required Case Studies (Minimum 3):
| Client Type | Focus | Key Metric |
|-------------|-------|------------|
| Federal Government | IPP procurement | Compliance + savings |
| State Government | Fleet replacement | Volume + uptime |
| Corporate | Managed print services | Cost reduction |

### Components to Build:
1. **CaseStudyCard** - Preview card for listings
2. **CaseStudyPage** - Full case study template
3. **CaseStudiesGrid** - Listing page
4. **RelatedCaseStudies** - Shown on product/service pages

### Pages:
- `/case-studies` - Listing page
- `/case-studies/[slug]` - Individual case study

---

## 2.5 Team Section Enhancement

### Required for Each Team Member:
| Field | Zac O'Brien | Ben Long |
|-------|-------------|----------|
| Photo | Professional headshot | Professional headshot |
| Title | Co-Founder & Director | Co-Founder & Director |
| Bio | 100-150 words | 100-150 words |
| LinkedIn | Real URL | Real URL |
| Quote | Personal statement | Personal statement |
| Expertise | Sales, Government | Operations, Technology |

### Component Enhancements:
- Hover effect showing bio
- LinkedIn icon link
- Professional photo styling
- Schema.org Person markup

---

## 2.6 Deliverables Checklist

### Files to Create:
- [ ] `src/data/testimonials.ts` - Testimonial data
- [ ] `src/data/faq.ts` - FAQ content
- [ ] `src/data/case-studies.ts` - Case study data
- [ ] `src/components/testimonials/testimonial-card.tsx`
- [ ] `src/components/testimonials/testimonials-section.tsx`
- [ ] `src/components/faq/faq-accordion.tsx`
- [ ] `src/components/faq/faq-section.tsx`
- [ ] `src/components/trust/trust-logos-bar.tsx`
- [ ] `src/components/case-studies/case-study-card.tsx`
- [ ] `src/app/(marketing)/faq/page.tsx`
- [ ] `src/app/(marketing)/case-studies/page.tsx`
- [ ] `src/app/(marketing)/case-studies/[slug]/page.tsx`

### Files to Modify:
- [ ] `src/app/(marketing)/page.tsx` - Add testimonials, FAQ snippet, trust bar
- [ ] `src/app/(marketing)/about/page.tsx` - Enhanced team section, trust bar
- [ ] `src/components/layout/footer.tsx` - Add testimonial snippet

### Content Required:
- [ ] 6+ testimonials (real or approved mock)
- [ ] 20+ FAQ items
- [ ] 3+ case studies
- [ ] Team photos and bios
- [ ] Client logos (with permission)
- [ ] Certification badges (Supply Nation, HP)

---

# PHASE 3: CONTENT & LEAD GENERATION
**Goal**: Become the authority on government print procurement, capture leads at every stage.

## 3.1 Blog Infrastructure

### URL Structure:
```
/blog                     - Blog listing
/blog/[slug]              - Individual post
/blog/category/[category] - Category listing
/blog/tag/[tag]           - Tag listing (optional)
```

### Data Structure (src/data/blog.ts):
```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;           // 150-200 chars
  content: string;           // MDX content
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: BlogCategory;
  tags: string[];
  featuredImage: {
    url: string;
    alt: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;       // Minutes
  featured: boolean;
  seo: {
    title?: string;          // Override
    description?: string;
  };
}

type BlogCategory =
  | 'industry-insights'      // Print industry trends
  | 'government-procurement' // IPP, buying guides
  | 'product-guides'         // Printer comparisons
  | 'sustainability'         // Environmental focus
  | 'case-studies'           // Success stories (cross-link)
  | 'company-news';          // Announcements
```

### Initial Blog Content Plan (12 Articles):

**Government Procurement (4 - Highest SEO value):**
1. "The Complete Guide to Indigenous Procurement Policy (IPP) for Print Equipment"
2. "How Government Agencies Can Meet IPP Targets Through Print Procurement"
3. "Understanding Indigenous Business Verification: Supply Nation Explained"
4. "Government Printer Procurement: Direct Sourcing vs Tender"

**Product Guides (3 - Mid-funnel content):**
1. "A3 vs A4 Printers: Which Format Does Your Office Need?"
2. "How to Calculate Your Monthly Print Volume"
3. "HP Enterprise vs Commercial Printers: What's the Difference?"

**Industry Insights (3 - Top-of-funnel):**
1. "The Future of Enterprise Print: Trends for 2025"
2. "Managed Print Services: The Hidden Cost Savings"
3. "Print Security: Protecting Sensitive Documents in Government"

**Sustainability (2 - Values-aligned):**
1. "Sustainable Printing: How Modern MFDs Reduce Environmental Impact"
2. "The Circular Economy of Enterprise Printers"

### Components to Build:
1. **BlogCard** - Article preview card
2. **BlogGrid** - Article listing layout
3. **BlogPost** - Full article template with TOC
4. **BlogSidebar** - Categories, popular posts, newsletter
5. **AuthorCard** - Author info at article end
6. **RelatedPosts** - Related articles section
7. **ShareButtons** - Social sharing
8. **TableOfContents** - For long articles

### Schema: Article + BlogPosting
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "...",
  "image": "..."
}
```

---

## 3.2 Resources / Downloads Section

### URL Structure:
```
/resources                 - Resource library
/resources/[category]      - Category view
/resources/[slug]          - Individual resource (gated or ungated)
```

### Resource Types:
| Type | Gate? | Purpose |
|------|-------|---------|
| Product Datasheets | No | Sales enablement |
| Buyer's Guides | Email gate | Lead capture |
| Whitepapers | Email gate | Lead capture |
| Case Study PDFs | Email gate | Lead nurture |
| Comparison Charts | No | Decision support |
| ROI Calculators | No | Self-service |
| Government Forms | No | Procurement help |

### Data Structure (src/data/resources.ts):
```typescript
interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  category: ResourceCategory;
  fileUrl?: string;         // For downloads
  thumbnailUrl: string;
  gated: boolean;
  downloadCount?: number;
  publishedAt: string;
  relatedProducts?: string[];
}
```

### Required Resources (Initial 8):

**Ungated (4):**
1. HP Enterprise MFD Comparison Chart (PDF)
2. Print Volume Calculator Guide
3. IPP Quick Reference Card
4. Managed Print Services Overview

**Gated (4):**
1. "Government Print Procurement Playbook" (comprehensive guide)
2. "Total Cost of Ownership: Enterprise Printers" (whitepaper)
3. "Managed Print Services ROI Calculator" (spreadsheet)
4. "Case Study Bundle: Government Success Stories"

### Components to Build:
1. **ResourceCard** - Resource preview with type badge
2. **ResourceGrid** - Filterable resource listing
3. **ResourceGate** - Email capture modal for gated content
4. **DownloadButton** - Track downloads
5. **ResourcePage** - Individual resource page with preview

---

## 3.3 Newsletter System

### Components:
1. **NewsletterSignup** - Inline form component
   - Email input + submit
   - Privacy consent checkbox
   - Success/error states
   - Placed in: footer, blog sidebar, resource pages

2. **NewsletterModal** - Exit-intent popup (optional)
   - Trigger on exit intent
   - Offer lead magnet
   - One-time show per session

### API Integration:
```typescript
// src/app/api/newsletter/route.ts
// Integration options: Resend Audiences, Mailchimp, ConvertKit
```

### Email Sequences to Plan:
1. **Welcome Sequence** (3 emails)
   - Email 1: Welcome + top resources
   - Email 2: About us + team intro
   - Email 3: Product overview + consultation offer

2. **Nurture Sequence** (monthly)
   - New blog posts
   - Industry news
   - Product updates

---

## 3.4 Lead Magnet Strategy

### Primary Lead Magnet:
**"The Government Print Procurement Playbook"**
- 20+ page PDF guide
- Covers IPP, tender process, supplier selection
- Includes checklists and templates
- Promoted across site

### Secondary Lead Magnets:
1. Product comparison spreadsheet
2. ROI calculator template
3. Print audit checklist
4. Managed services evaluation guide

### Distribution Points:
- Homepage CTA
- Blog post CTAs
- Resource page
- Exit intent popup
- Thank you page upsells

---

## 3.5 Deliverables Checklist

### Files to Create:
- [ ] `src/data/blog.ts` - Blog post structure
- [ ] `src/data/resources.ts` - Resource library data
- [ ] `src/components/blog/blog-card.tsx`
- [ ] `src/components/blog/blog-grid.tsx`
- [ ] `src/components/blog/blog-post.tsx`
- [ ] `src/components/blog/table-of-contents.tsx`
- [ ] `src/components/resources/resource-card.tsx`
- [ ] `src/components/resources/resource-gate.tsx`
- [ ] `src/components/newsletter/newsletter-signup.tsx`
- [ ] `src/app/(marketing)/blog/page.tsx`
- [ ] `src/app/(marketing)/blog/[slug]/page.tsx`
- [ ] `src/app/(marketing)/resources/page.tsx`
- [ ] `src/app/api/newsletter/route.ts`

### Content Required:
- [ ] 12 initial blog articles (can be phased)
- [ ] 8 downloadable resources
- [ ] Lead magnet PDF design
- [ ] Email sequence copy
- [ ] Author bios and photos

---

# PHASE 4: ADVANCED FEATURES
**Goal**: Give users self-service tools that competitors don't have.

## 4.1 Product Comparison Tool

### URL: /products/compare?models=E78630dn,E78640dn

### Features:
1. **Model Selector**
   - Select 2-4 models to compare
   - Add/remove models dynamically
   - Pre-populated from URL params

2. **Comparison Table**
   - Side-by-side specifications
   - Highlight differences
   - Category groupings (Speed, Volume, Features)
   - Mobile: Swipeable cards

3. **Recommendation Engine**
   - Based on volume input
   - Suggests ideal model
   - "Why this model" explanation

### Components to Build:
1. **CompareSelector** - Model selection UI
2. **CompareTable** - Specification comparison grid
3. **CompareRecommendation** - AI-style recommendation
4. **CompareCTA** - "Get quote for selected models"

---

## 4.2 Quote Calculator

### URL: /quote-calculator

### Input Fields:
| Field | Type | Purpose |
|-------|------|---------|
| Monthly print volume | Number + unit | Size equipment |
| Color vs mono ratio | Slider (%) | Determine model needs |
| Number of users | Number | Scale assessment |
| Current equipment age | Select | Urgency indicator |
| Priority | Multi-select | Speed, cost, features |
| Organisation type | Select | Government, corporate, etc. |
| Lease vs purchase | Toggle | Pricing structure |

### Output:
1. **Recommended Models** (1-3 options)
2. **Estimated Monthly Cost Range**
3. **Comparison to Industry Average**
4. **"Speak to an Expert" CTA**

### Lead Capture:
- Option to save quote (requires email)
- Email quote to self
- Schedule consultation

---

## 4.3 ROI Calculator

### URL: /resources/roi-calculator (or embedded component)

### Inputs:
| Field | Purpose |
|-------|---------|
| Current monthly print cost | Baseline |
| Number of devices | Fleet size |
| Average device age | Efficiency baseline |
| IT hours on print support | Hidden cost |
| Paper usage per month | Sustainability angle |

### Outputs:
1. **Potential Annual Savings** ($$)
2. **Break-even Timeline**
3. **Environmental Impact** (trees, CO2)
4. **Hours Saved** (IT, admin)

### Visual:
- Before/after comparison chart
- Savings over 3/5 year projection
- Downloadable PDF report

---

## 4.4 Search Functionality

### Implementation Options:
1. **Client-side search** (simple, good for small content)
   - Fuse.js for fuzzy matching
   - Search products, FAQs, blog posts

2. **Algolia** (better for scale)
   - Full-text search
   - Faceted filtering
   - Analytics on searches

### Search Scope:
- Products (model, features, specs)
- Blog posts (title, content, tags)
- FAQs (questions and answers)
- Resources (title, description)
- Pages (about, services, etc.)

### UI Component:
- Command palette style (Cmd+K)
- Modal overlay
- Recent searches
- Popular searches
- Category filters

---

## 4.5 Deliverables Checklist

### Files to Create:
- [ ] `src/app/(marketing)/products/compare/page.tsx`
- [ ] `src/app/(marketing)/quote-calculator/page.tsx`
- [ ] `src/components/products/compare-selector.tsx`
- [ ] `src/components/products/compare-table.tsx`
- [ ] `src/components/calculator/quote-calculator.tsx`
- [ ] `src/components/calculator/roi-calculator.tsx`
- [ ] `src/components/search/search-modal.tsx`
- [ ] `src/components/search/search-results.tsx`
- [ ] `src/lib/search.ts` - Search indexing logic

---

# PHASE 5: COMPLIANCE & SECURITY
**Goal**: Protect the business legally and build trust through transparency.

## 5.1 Privacy Policy

### URL: /privacy-policy

### Required Sections (Australian Privacy Act 1988):
1. **Introduction** - Who we are, policy scope
2. **Information We Collect**
   - Personal info (name, email, phone)
   - Technical info (IP, browser, cookies)
   - Business info (organisation, role)
3. **How We Collect Information**
   - Forms (contact, newsletter, quote)
   - Cookies and analytics
   - Third-party services
4. **How We Use Information**
   - Respond to enquiries
   - Send marketing (with consent)
   - Improve services
   - Legal obligations
5. **Information Sharing**
   - Service providers (Resend, Vercel, analytics)
   - Legal requirements
   - No selling data
6. **Data Security**
   - Encryption
   - Access controls
   - Retention periods
7. **Your Rights**
   - Access your data
   - Correct your data
   - Delete your data
   - Withdraw consent
8. **Cookies**
   - Types used
   - How to control
9. **Third-Party Services**
   - Vercel (hosting)
   - Resend (email)
   - Google Analytics (if used)
10. **Changes to Policy**
11. **Contact for Privacy Concerns**

### Template: Generate compliant privacy policy

---

## 5.2 Terms of Service

### URL: /terms

### Required Sections:
1. **Acceptance of Terms**
2. **Description of Services**
3. **User Obligations**
4. **Intellectual Property**
5. **Limitation of Liability**
6. **Indemnification**
7. **Dispute Resolution**
8. **Governing Law** (Queensland, Australia)
9. **Modifications**
10. **Contact Information**

---

## 5.3 Cookie Consent

### Requirements:
- Banner on first visit
- Option to accept all / reject non-essential
- Link to cookie policy
- Remember preference
- Don't load tracking until consented

### Components to Build:
1. **CookieBanner** - Bottom banner with accept/reject
2. **CookieSettings** - Modal for granular control
3. **useCookieConsent** - Hook for checking consent

### Cookie Categories:
| Category | Purpose | Required? |
|----------|---------|-----------|
| Essential | Site function | Yes |
| Analytics | Performance tracking | No |
| Marketing | Ad targeting | No |

---

## 5.4 Accessibility Statement

### URL: /accessibility

### Content:
1. Our commitment to accessibility
2. Standards we follow (WCAG 2.1 AA)
3. Accessibility features
4. Known limitations
5. Feedback mechanism
6. Testing methodology

---

## 5.5 Security Headers (next.config.ts)

```typescript
headers: [
  {
    source: '/:path*',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live; ..."
      },
    ],
  },
]
```

---

## 5.6 Deliverables Checklist

### Files to Create:
- [ ] `src/app/(marketing)/privacy-policy/page.tsx`
- [ ] `src/app/(marketing)/terms/page.tsx`
- [ ] `src/app/(marketing)/accessibility/page.tsx`
- [ ] `src/components/cookie/cookie-banner.tsx`
- [ ] `src/components/cookie/cookie-settings.tsx`
- [ ] `src/hooks/use-cookie-consent.ts`

### Files to Modify:
- [ ] `next.config.ts` - Security headers
- [ ] `src/app/layout.tsx` - Add cookie banner
- [ ] `src/components/layout/footer.tsx` - Add policy links

### Legal Review:
- [ ] Have privacy policy reviewed by legal
- [ ] Have terms of service reviewed by legal
- [ ] Verify GDPR compliance (if serving EU)
- [ ] Verify Australian Privacy Act compliance

---

# EXECUTION PRIORITY MATRIX

| Phase | Effort | Impact | Priority | Timeline |
|-------|--------|--------|----------|----------|
| 1.1 Structured Data | Medium | Critical | P0 | Day 1 |
| 1.2 Sitemap | Low | Critical | P0 | Day 1 |
| 1.3 Robots.txt | Low | High | P0 | Day 1 |
| 1.4 Meta Optimization | Low | High | P0 | Day 1 |
| 1.5 Image Assets | Medium | High | P1 | Day 2 |
| 1.6 Placeholder Updates | Low | Critical | P0 | Day 1 |
| 2.1 Testimonials | Medium | Critical | P1 | Day 2-3 |
| 2.2 FAQ System | Medium | High | P1 | Day 2-3 |
| 2.3 Trust Logos | Low | High | P1 | Day 2 |
| 2.4 Case Studies | High | High | P2 | Week 2 |
| 2.5 Team Section | Low | Medium | P1 | Day 3 |
| 3.1 Blog Infra | High | High | P2 | Week 2 |
| 3.2 Resources | Medium | High | P2 | Week 2 |
| 3.3 Newsletter | Medium | High | P2 | Week 2 |
| 4.1 Compare Tool | Medium | Medium | P3 | Week 3 |
| 4.2 Quote Calc | High | High | P3 | Week 3 |
| 4.3 ROI Calc | Medium | Medium | P3 | Week 3 |
| 4.4 Search | Medium | Medium | P3 | Week 3 |
| 5.1 Privacy Policy | Low | Critical | P1 | Day 3 |
| 5.2 Terms | Low | High | P1 | Day 3 |
| 5.3 Cookie Consent | Medium | High | P1 | Day 3 |
| 5.4 Accessibility | Low | Medium | P2 | Week 2 |
| 5.5 Security Headers | Low | High | P1 | Day 1 |

---

# SUCCESS METRICS

## SEO Metrics (Track via Google Search Console):
- [ ] All pages indexed
- [ ] Rich snippets appearing (FAQ, Products)
- [ ] Position for "indigenous printer supplier"
- [ ] Position for "IPP printer dealer"
- [ ] Position for "HP enterprise printer Australia"
- [ ] Organic traffic growth (month over month)

## Conversion Metrics (Track via Vercel Analytics + custom events):
- [ ] Quote request submissions
- [ ] Newsletter signups
- [ ] Resource downloads
- [ ] Contact form completions
- [ ] Time on site
- [ ] Pages per session
- [ ] Bounce rate

## Technical Metrics (Track via Lighthouse + Vercel):
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 95
- [ ] Core Web Vitals all green
- [ ] Zero JavaScript errors

## Business Metrics:
- [ ] Leads generated per month
- [ ] Lead-to-quote ratio
- [ ] Quote-to-sale ratio
- [ ] Average deal size
- [ ] Customer acquisition cost

---

# APPENDIX: KEYWORD STRATEGY

## Primary Keywords (Target directly):
1. "indigenous printer supplier australia" - Low competition, high intent
2. "IPP registered printer dealer" - Very low competition
3. "HP enterprise printer australia" - Medium competition
4. "government printer procurement" - Medium competition
5. "supply nation printer supplier" - Very low competition

## Secondary Keywords (Support content):
1. "managed print services brisbane"
2. "HP color laserjet enterprise MFP"
3. "A3 multifunction printer australia"
4. "enterprise document solutions"
5. "print fleet management australia"

## Long-tail Keywords (Blog content):
1. "how to meet IPP targets procurement"
2. "indigenous business certification australia"
3. "enterprise printer cost per page"
4. "HP E78630dn vs E78640dn comparison"
5. "managed print services ROI calculator"

---

*This roadmap positions Dreaming Print Solutions to dominate the indigenous enterprise print market through technical excellence, content authority, and conversion optimization.*
