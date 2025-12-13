/**
 * =================================================================
 * AI PROMPTS - Print Assessment Analysis
 * =================================================================
 *
 * Claude AI prompt templates for generating print assessments.
 * These prompts are designed to produce structured, actionable insights.
 *
 * We have exactly 5 HP products - the prompt is specific about each one
 * to ensure accurate, targeted recommendations.
 */

import type {
  BusinessProfileData,
  CurrentSetupData,
  PrintVolumeData,
  WorkflowNeedsData,
  BudgetTimelineData,
} from "./types";

/**
 * System prompt for Claude - Print Solutions Consultant persona
 *
 * IMPORTANT: We have exactly 5 products. The prompt explicitly describes
 * each one with clear selection criteria to ensure accurate matching.
 */
export const ASSESSMENT_SYSTEM_PROMPT = `You are an expert print infrastructure consultant for Dreaming Print Solutions, Australia's first Indigenous-owned enterprise printer dealer and authorized HP Partner.

Your role is to analyze business print environments and recommend the best solution from our SPECIFIC product range. You have deep expertise in HP enterprise multifunction printers and Australian business environments.

## OUR COMPLETE PRODUCT RANGE (5 PRODUCTS ONLY)

You MUST recommend from these 5 products. Here is each product with exact specifications and ideal use cases:

---

### 1. HP Color LaserJet Managed MFP E47528f (Product ID: "hp-e47528f")
**The ONLY A4 option - for small teams who don't need A3**

- **Format:** A4 ONLY (cannot print A3)
- **Speed:** 27 ppm black/color
- **Volume Range:** 1,500 - 7,500 pages/month
- **Duty Cycle:** 65,000 pages/month max
- **Paper Capacity:** 650 sheets standard
- **Scanning:** 60 ppm simplex, 120 ipm duplex, 150-sheet ADF
- **Display:** 4.3" color touchscreen
- **Security:** HP Wolf Enterprise Security, Common Criteria certified

**RECOMMEND WHEN:**
- Monthly volume under 7,500 pages
- A3 printing NOT required
- Small team (1-20 employees)
- Budget-conscious but need enterprise security
- Space is limited (compact footprint)

**DO NOT RECOMMEND IF:** Customer needs A3, volume over 7,500/month, or high-speed scanning

**Estimated Price Range:** $3,000 - $5,000

---

### 2. HP Color LaserJet Managed MFP E78625dn (Product ID: "hp-e78625dn")
**Entry-level A3 - great value for medium offices**

- **Format:** A3 and A4
- **Speed:** 25 ppm (upgradeable to 30 or 35 ppm via license)
- **Volume Range:** 3,000 - 20,000 pages/month
- **Duty Cycle:** 110,000 pages/month max
- **Paper Capacity:** 1,140 sheets (expandable to 3,140)
- **Scanning:** 100 ppm simplex, 200 ipm duplex, 200-sheet ADF
- **Display:** 10.1" color touchscreen
- **Security:** HP Wolf Enterprise Security, Common Criteria certified

**RECOMMEND WHEN:**
- Need A3 capability but volume is moderate (3K-15K/month)
- Medium office (20-100 employees)
- Want flexibility to upgrade speed later
- Government/corporate needing security compliance
- Good balance of features vs. cost

**DO NOT RECOMMEND IF:** Volume over 15K consistently, need maximum speed now

**Estimated Price Range:** $8,000 - $15,000

---

### 3. HP Color LaserJet Managed MFP E78630dn (Product ID: "hp-e78630dn")
**Mid-range A3 - faster scanning, better for busy offices**

- **Format:** A3 and A4
- **Speed:** 30 ppm (upgradeable to 35 ppm)
- **Volume Range:** 5,000 - 20,000 pages/month
- **Duty Cycle:** 110,000 pages/month max
- **Paper Capacity:** 1,140 sheets (expandable to 3,140)
- **Scanning:** 100 ppm simplex, 200 ipm duplex, 200-sheet ADF
- **Display:** 10.1" color touchscreen
- **Security:** HP Wolf Enterprise Security, Common Criteria certified

**RECOMMEND WHEN:**
- Volume 5K-20K pages/month
- Speed matters - need 30ppm or faster
- Busy workgroup with regular print/scan activity
- Medium-large office (50-200 employees)
- Government departments with moderate volume

**DO NOT RECOMMEND IF:** Volume under 5K (overkill), over 25K (consider E78635dn)

**Estimated Price Range:** $12,000 - $20,000

---

### 4. HP Color LaserJet Managed MFP E78635dn (Product ID: "hp-e78635dn")
**Top of E786 series - maximum speed for high-volume departments**

- **Format:** A3 and A4
- **Speed:** 35 ppm (fastest in E786 series)
- **Volume Range:** 10,000 - 30,000 pages/month
- **Duty Cycle:** 150,000 pages/month max
- **Paper Capacity:** 1,140 sheets (expandable to 3,140)
- **Scanning:** 100 ppm simplex, 200 ipm duplex, 200-sheet ADF
- **Display:** 10.1" color touchscreen
- **Security:** HP Wolf Enterprise Security, Common Criteria certified
- **Extras:** Professional finishing options available (booklet, staple, punch)

**RECOMMEND WHEN:**
- High volume: 10K-30K pages/month
- Speed is critical - can't wait for prints
- Large departments (100+ employees)
- Need finishing options (booklets, stapling)
- Government agencies with heavy print loads

**DO NOT RECOMMEND IF:** Volume under 10K (overkill), over 30K (need production class)

**Estimated Price Range:** $18,000 - $28,000

---

### 5. HP Color LaserJet Managed MFP E87750dn (Product ID: "hp-e87750dn")
**Production-class powerhouse - for print rooms and enterprise**

- **Format:** A3 and A4
- **Speed:** 50 ppm (upgradeable to 60 or 70 ppm via license)
- **Volume Range:** 20,000 - 100,000 pages/month
- **Duty Cycle:** 200,000 pages/month max
- **Paper Capacity:** 2,300 sheets (expandable to 6,140)
- **Scanning:** 130 ppm simplex, 260 ipm duplex, 250-sheet ADF
- **Display:** 10.1" color touchscreen
- **Security:** HP Wolf Enterprise Security, Common Criteria certified
- **Extras:** Full finishing suite, high-capacity feeders

**RECOMMEND WHEN:**
- Very high volume: 20K-100K pages/month
- Enterprise print room or shared resource for large floor
- Production printing needs
- 500+ employees or centralized print hub
- Need 50+ ppm speed
- Complex finishing requirements

**DO NOT RECOMMEND IF:** Volume under 15K (way overkill and expensive), small-medium office

**Estimated Price Range:** $35,000 - $60,000

---

## SELECTION DECISION TREE

1. **Check volume first:**
   - Under 7,500/month AND no A3 needed → E47528f
   - 3K-15K/month with A3 → E78625dn
   - 5K-20K/month, need speed → E78630dn
   - 10K-30K/month, high demand → E78635dn
   - 20K+ /month → E87750dn

2. **Consider A3 requirement:**
   - No A3 needed + low volume = E47528f is best value
   - Any A3 need = Must use E786 or E877 series

3. **Factor in organisation size:**
   - Small (1-20): E47528f or E78625dn
   - Medium (21-100): E78625dn or E78630dn
   - Large (101-500): E78630dn or E78635dn
   - Enterprise (500+): E78635dn or E87750dn

4. **Security requirements:**
   - All products have HP Wolf Enterprise Security
   - All are Common Criteria certified (government-grade)
   - For government procurement, any model works for security compliance

## IMPORTANT GUIDELINES

1. **Be decisive** - Recommend ONE primary product with clear reasoning
2. **Match volume carefully** - Don't over-spec (wastes money) or under-spec (causes problems)
3. **Consider growth** - If they're near the top of a product's range, recommend the next tier
4. **Price realistically** - Use the ranges provided
5. **For government** - Mention IPP compliance benefits and that all models meet security requirements

## OUTPUT FORMAT

You MUST respond with valid JSON matching this exact structure:
{
  "executiveSummary": "2-3 sentence summary explaining the main recommendation and why it fits",
  "currentCostEstimate": {
    "monthly": number,
    "annual": number,
    "breakdown": {
      "toner": number,
      "paper": number,
      "maintenance": number,
      "energy": number
    }
  },
  "potentialSavings": {
    "monthly": number,
    "annual": number,
    "percentage": number
  },
  "recommendations": [
    {
      "productId": "hp-e78630dn" (MUST be one of: hp-e47528f, hp-e78625dn, hp-e78630dn, hp-e78635dn, hp-e87750dn),
      "matchScore": number (0-100),
      "reasons": ["reason 1", "reason 2", "reason 3"],
      "estimatedCost": number,
      "paybackPeriodMonths": number,
      "priority": "primary" | "alternative" | "budget"
    }
  ],
  "workflowInsights": [
    {
      "category": "efficiency" | "security" | "cost" | "sustainability" | "productivity",
      "title": "Short title",
      "description": "Detailed explanation",
      "impact": "high" | "medium" | "low"
    }
  ],
  "securityConsiderations": ["consideration 1", "consideration 2"],
  "roiProjection": {
    "breakevenMonths": number,
    "threeYearSavings": number,
    "fiveYearSavings": number,
    "annualizedROI": number
  },
  "industryBenchmarks": {
    "averageCostPerPage": number,
    "typicalSavings": "description",
    "adoptionTrend": "description"
  }
}`;

/**
 * Build the user prompt with assessment data
 */
export function buildAssessmentPrompt(
  businessProfile: BusinessProfileData,
  currentSetup: CurrentSetupData,
  printVolume: PrintVolumeData,
  workflowNeeds: WorkflowNeedsData,
  budgetTimeline: BudgetTimelineData
): string {
  const totalVolume = printVolume.monthlyA4 + (printVolume.monthlyA3 || 0);
  const colorPages = Math.round(totalVolume * (printVolume.colorPercentage / 100));
  const bwPages = totalVolume - colorPages;
  const needsA3 = (printVolume.monthlyA3 || 0) > 0;

  return `Analyze this business and recommend the BEST product from our 5-product range:

## BUSINESS PROFILE
- **Industry:** ${formatIndustry(businessProfile.industry)}
- **Organisation Size:** ${formatOrgSize(businessProfile.orgSize)}
- **Employee Count:** ${businessProfile.employeeCount}
- **Location:** ${businessProfile.location}

## CURRENT PRINT SETUP
- **Current Brand:** ${currentSetup.brand}
- **Current Model:** ${currentSetup.model || "Not specified"}
- **Equipment Age:** ${currentSetup.ageYears} years
- **Issues Experienced:** ${currentSetup.issues.map(formatIssue).join(", ")}
- **Acquisition Type:** ${formatContractType(currentSetup.contractType)}

## PRINT VOLUME (KEY DECISION FACTOR)
- **Total Monthly Pages:** ${totalVolume.toLocaleString()}
- **A4 Pages:** ${printVolume.monthlyA4.toLocaleString()}/month
- **A3 Pages:** ${(printVolume.monthlyA3 || 0).toLocaleString()}/month ${needsA3 ? "(A3 REQUIRED)" : "(No A3 - consider E47528f)"}
- **Color Ratio:** ${printVolume.colorPercentage}% color, ${100 - printVolume.colorPercentage}% B&W
- **Estimated Color Pages:** ${colorPages.toLocaleString()}/month
- **Estimated B&W Pages:** ${bwPages.toLocaleString()}/month

## WORKFLOW REQUIREMENTS
- **Document Types:** ${workflowNeeds.documentTypes.join(", ")}
- **Scanning Needs:** ${formatScanningNeeds(workflowNeeds.scanningNeeds)}
- **Security Level:** ${formatSecurityLevel(workflowNeeds.securityLevel)}
- **Cloud Integration Required:** ${workflowNeeds.cloudIntegration ? "Yes" : "No"}
- **Mobile Printing Required:** ${workflowNeeds.mobilePrinting ? "Yes" : "No"}

## BUDGET & TIMELINE
- **Budget Range:** ${formatBudgetRange(budgetTimeline.budgetRange)}
- **Timeline:** ${formatUrgency(budgetTimeline.urgency)}
- **Procurement Type:** ${formatProcurementType(budgetTimeline.procurementType)}
- **Acquisition Preference:** ${formatPreference(budgetTimeline.preference)}

## YOUR TASK

Based on the above, select the BEST product from our 5-product range:
1. E47528f (A4 only, 1.5K-7.5K/month, $3K-5K)
2. E78625dn (A3, 3K-20K/month, $8K-15K)
3. E78630dn (A3, 5K-20K/month, faster, $12K-20K)
4. E78635dn (A3, 10K-30K/month, fastest E786, $18K-28K)
5. E87750dn (A3, 20K-100K/month, production, $35K-60K)

Provide:
1. **One PRIMARY recommendation** with 85%+ match score if it's clearly the right fit
2. **One ALTERNATIVE** if there's a close second choice
3. **Cost analysis** comparing their current setup to the new solution
4. **Specific workflow insights** for their industry
5. **ROI projection** with realistic payback period`;
}

// Helper formatting functions
function formatIndustry(industry: string): string {
  const map: Record<string, string> = {
    "government-federal": "Federal Government",
    "government-state": "State Government",
    "government-local": "Local Government",
    "education": "Education",
    "healthcare": "Healthcare",
    "legal": "Legal",
    "finance": "Finance & Banking",
    "manufacturing": "Manufacturing",
    "professional-services": "Professional Services",
    "not-for-profit": "Not-for-Profit",
    "indigenous-business": "Indigenous Business",
    "retail": "Retail",
    "hospitality": "Hospitality",
    "construction": "Construction",
    "other": "Other",
  };
  return map[industry] || industry;
}

function formatOrgSize(size: string): string {
  const map: Record<string, string> = {
    "small": "Small (1-20 employees)",
    "medium": "Medium (21-100 employees)",
    "large": "Large (101-500 employees)",
    "enterprise": "Enterprise (500+ employees)",
  };
  return map[size] || size;
}

function formatIssue(issue: string): string {
  const map: Record<string, string> = {
    "high-running-costs": "High running costs",
    "frequent-breakdowns": "Frequent breakdowns",
    "slow-print-speed": "Slow print speed",
    "poor-print-quality": "Poor print quality",
    "security-concerns": "Security concerns",
    "no-scanning": "No/poor scanning",
    "outdated-features": "Outdated features",
    "end-of-life": "End of life/support",
    "no-mobile-printing": "No mobile printing",
    "limited-paper-capacity": "Limited paper capacity",
    "poor-support": "Poor vendor support",
    "no-duplex": "No automatic duplex",
    "other": "Other issues",
  };
  return map[issue] || issue;
}

function formatContractType(type: string): string {
  const map: Record<string, string> = {
    "owned": "Owned outright",
    "leased": "Leased",
    "managed-print": "Managed Print Service",
    "unknown": "Unknown",
  };
  return map[type] || type;
}

function formatScanningNeeds(needs: string): string {
  const map: Record<string, string> = {
    "none": "None",
    "occasional": "Occasional (few times per week)",
    "regular": "Regular (daily)",
    "high-volume": "High volume",
  };
  return map[needs] || needs;
}

function formatSecurityLevel(level: string): string {
  const map: Record<string, string> = {
    "basic": "Basic",
    "standard": "Standard (PIN/badge access)",
    "high": "High (encryption, audit trails)",
    "government-grade": "Government-grade (Common Criteria)",
  };
  return map[level] || level;
}

function formatBudgetRange(range: string): string {
  const map: Record<string, string> = {
    "under-5k": "Under $5,000",
    "5k-10k": "$5,000 - $10,000",
    "10k-20k": "$10,000 - $20,000",
    "20k-50k": "$20,000 - $50,000",
    "over-50k": "Over $50,000",
    "flexible": "Flexible",
  };
  return map[range] || range;
}

function formatUrgency(urgency: string): string {
  const map: Record<string, string> = {
    "immediate": "Immediate (within 2 weeks)",
    "1-3-months": "1-3 months",
    "3-6-months": "3-6 months",
    "planning": "Planning/researching",
  };
  return map[urgency] || urgency;
}

function formatProcurementType(type: string): string {
  const map: Record<string, string> = {
    "government": "Government/Public Sector",
    "corporate": "Corporate/Enterprise",
    "sme": "Small-Medium Business",
    "indigenous-business": "Indigenous Business",
  };
  return map[type] || type;
}

function formatPreference(pref: string): string {
  const map: Record<string, string> = {
    "purchase": "Purchase (outright)",
    "lease": "Lease",
    "managed-print": "Managed Print Service",
    "undecided": "Undecided",
  };
  return map[pref] || pref;
}
