/**
 * =================================================================
 * API: PDF Generation
 * =================================================================
 *
 * Generates a professional PDF report from assessment results.
 * POST /api/assessment/generate-pdf
 *
 * NOTE: This is a simplified implementation that generates HTML-based PDF.
 * For production, consider using @react-pdf/renderer with custom fonts.
 */

import { NextRequest, NextResponse } from "next/server";
import type { GeneratePDFRequest } from "@/lib/assessment/types";

export async function POST(request: NextRequest) {
  try {
    const body: GeneratePDFRequest = await request.json();
    const { assessmentData, analysis } = body;

    if (!assessmentData || !analysis) {
      return NextResponse.json(
        { success: false, error: "Missing required data" },
        { status: 400 }
      );
    }

    const { contactInfo, businessProfile, printVolume } = assessmentData;
    const primaryRec = analysis.recommendations.find((r) => r.priority === "primary");

    // Generate HTML content for PDF
    const htmlContent = generatePDFHTML(contactInfo, businessProfile, printVolume, analysis, primaryRec);

    // For now, return the HTML as a downloadable file
    // In production, this would be rendered to PDF using @react-pdf/renderer or puppeteer
    const response = new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": `attachment; filename="DPS-Print-Assessment-${contactInfo.company.replace(/\s+/g, "-")}.html"`,
      },
    });

    return response;

  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

function generatePDFHTML(
  contactInfo: GeneratePDFRequest["assessmentData"]["contactInfo"],
  businessProfile: GeneratePDFRequest["assessmentData"]["businessProfile"],
  printVolume: GeneratePDFRequest["assessmentData"]["printVolume"],
  analysis: GeneratePDFRequest["analysis"],
  primaryRec: GeneratePDFRequest["analysis"]["recommendations"][0] | undefined
): string {
  const totalVolume = printVolume.monthlyA4 + (printVolume.monthlyA3 || 0);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Print Assessment Report - ${contactInfo.company}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      color: #1c1b1a;
      line-height: 1.6;
      background: white;
    }

    .page {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
    }

    .cover {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: linear-gradient(135deg, #c45a32 0%, #96503d 100%);
      color: white;
      padding: 60px 40px;
      page-break-after: always;
    }

    .cover h1 {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .cover .subtitle {
      font-size: 24px;
      opacity: 0.9;
      margin-bottom: 40px;
    }

    .cover .prepared-for {
      margin-top: 60px;
      font-size: 18px;
    }

    .cover .company-name {
      font-size: 28px;
      font-weight: 600;
      margin-top: 10px;
    }

    .cover .date {
      margin-top: 40px;
      opacity: 0.8;
    }

    .badges {
      display: flex;
      gap: 20px;
      margin-top: 60px;
      padding: 20px;
      background: rgba(255,255,255,0.1);
      border-radius: 12px;
    }

    .badge {
      padding: 10px 20px;
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 8px;
      font-size: 14px;
    }

    h2 {
      font-size: 28px;
      color: #c45a32;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #f8f2e8;
    }

    h3 {
      font-size: 20px;
      color: #1c1b1a;
      margin-bottom: 15px;
    }

    .section {
      margin-bottom: 40px;
    }

    .executive-summary {
      background: #f8f2e8;
      padding: 30px;
      border-radius: 12px;
      border-left: 4px solid #c45a32;
      margin-bottom: 40px;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }

    .metric-card {
      background: #fefdfb;
      border: 1px solid #f8f2e8;
      border-radius: 12px;
      padding: 25px;
      text-align: center;
    }

    .metric-value {
      font-size: 32px;
      font-weight: 700;
      color: #c45a32;
    }

    .metric-label {
      font-size: 14px;
      color: #666;
      margin-top: 5px;
    }

    .recommendation-card {
      background: linear-gradient(135deg, #fefdfb 0%, #f8f2e8 100%);
      border: 2px solid #c45a32;
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 30px;
    }

    .recommendation-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 20px;
    }

    .match-score {
      background: #c45a32;
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
    }

    .reasons-list {
      list-style: none;
      padding: 0;
    }

    .reasons-list li {
      padding: 10px 0;
      padding-left: 30px;
      position: relative;
      border-bottom: 1px solid #f8f2e8;
    }

    .reasons-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #688c5a;
      font-weight: bold;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #f8f2e8;
    }

    th {
      background: #f8f2e8;
      font-weight: 600;
      color: #1c1b1a;
    }

    .insight-card {
      background: #fefdfb;
      border: 1px solid #f8f2e8;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 15px;
    }

    .insight-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .insight-category {
      background: #688c5a;
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
    }

    .footer {
      margin-top: 60px;
      padding-top: 30px;
      border-top: 2px solid #f8f2e8;
      text-align: center;
    }

    .footer-logo {
      font-size: 20px;
      font-weight: 700;
      color: #c45a32;
      margin-bottom: 10px;
    }

    .footer-tagline {
      color: #666;
      font-size: 14px;
    }

    .page-break {
      page-break-before: always;
    }

    @media print {
      .page {
        padding: 20px;
      }

      .cover {
        min-height: 100vh;
      }
    }
  </style>
</head>
<body>
  <!-- Cover Page -->
  <div class="cover">
    <h1>Print Infrastructure Assessment</h1>
    <p class="subtitle">Powered by AI Analysis</p>

    <div class="prepared-for">Prepared for</div>
    <div class="company-name">${contactInfo.company}</div>

    <div class="date">${new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</div>

    <div class="badges">
      <div class="badge">Supply Nation Certified</div>
      <div class="badge">IPP Registered</div>
      <div class="badge">HP Partner</div>
    </div>
  </div>

  <!-- Executive Summary -->
  <div class="page">
    <h2>Executive Summary</h2>

    <div class="executive-summary">
      <p style="font-size: 18px;">${analysis.executiveSummary}</p>
    </div>

    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-value">$${analysis.currentCostEstimate.annual.toLocaleString()}</div>
        <div class="metric-label">Current Annual Cost</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">$${analysis.potentialSavings.annual.toLocaleString()}</div>
        <div class="metric-label">Potential Annual Savings</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">${analysis.potentialSavings.percentage}%</div>
        <div class="metric-label">Cost Reduction</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">${analysis.roiProjection.breakevenMonths} months</div>
        <div class="metric-label">Breakeven Period</div>
      </div>
    </div>

    <div class="section">
      <h3>Assessment Overview</h3>
      <table>
        <tr><td>Company</td><td>${contactInfo.company}</td></tr>
        <tr><td>Contact</td><td>${contactInfo.firstName} ${contactInfo.lastName}</td></tr>
        <tr><td>Industry</td><td>${businessProfile.industry}</td></tr>
        <tr><td>Organisation Size</td><td>${businessProfile.orgSize} (${businessProfile.employeeCount} employees)</td></tr>
        <tr><td>Monthly Print Volume</td><td>${totalVolume.toLocaleString()} pages</td></tr>
        <tr><td>Colour Ratio</td><td>${printVolume.colorPercentage}% colour</td></tr>
      </table>
    </div>
  </div>

  <!-- Recommendations -->
  <div class="page page-break">
    <h2>Recommended Solutions</h2>

    ${primaryRec ? `
    <div class="recommendation-card">
      <div class="recommendation-header">
        <div>
          <span class="match-score">${primaryRec.matchScore}% Match</span>
          <span style="margin-left: 10px; color: #688c5a; font-weight: 600;">Primary Recommendation</span>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 14px; color: #666;">Estimated Investment</div>
          <div style="font-size: 24px; font-weight: 700; color: #c45a32;">$${primaryRec.estimatedCost.toLocaleString()}</div>
        </div>
      </div>

      <h3 style="font-size: 24px; margin-bottom: 5px;">${primaryRec.product.name}</h3>
      <p style="color: #666; margin-bottom: 20px;">${primaryRec.product.model}</p>

      <h4 style="margin-bottom: 15px;">Why This Solution</h4>
      <ul class="reasons-list">
        ${primaryRec.reasons.map((r) => `<li>${r}</li>`).join("")}
      </ul>

      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #f8f2e8;">
        <strong>Payback Period:</strong> ${primaryRec.paybackPeriodMonths} months
      </div>
    </div>
    ` : ""}

    ${analysis.recommendations.filter((r) => r.priority !== "primary").length > 0 ? `
    <h3>Alternative Options</h3>
    ${analysis.recommendations.filter((r) => r.priority !== "primary").map((rec) => `
      <div class="insight-card">
        <div class="insight-header">
          <strong>${rec.product.name}</strong>
          <span class="insight-category" style="background: ${rec.priority === "alternative" ? "#688c5a" : "#666"}">
            ${rec.priority === "alternative" ? "Alternative" : "Budget Option"}
          </span>
        </div>
        <p style="color: #666;">${rec.product.model} • ${rec.matchScore}% match • $${rec.estimatedCost.toLocaleString()}</p>
      </div>
    `).join("")}
    ` : ""}
  </div>

  <!-- Cost Analysis -->
  <div class="page page-break">
    <h2>Cost Analysis</h2>

    <div class="section">
      <h3>Current Cost Breakdown (Monthly)</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Monthly Cost</th>
            <th>Annual Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Toner/Ink</td>
            <td>$${analysis.currentCostEstimate.breakdown.toner.toLocaleString()}</td>
            <td>$${(analysis.currentCostEstimate.breakdown.toner * 12).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Paper</td>
            <td>$${analysis.currentCostEstimate.breakdown.paper.toLocaleString()}</td>
            <td>$${(analysis.currentCostEstimate.breakdown.paper * 12).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Maintenance</td>
            <td>$${analysis.currentCostEstimate.breakdown.maintenance.toLocaleString()}</td>
            <td>$${(analysis.currentCostEstimate.breakdown.maintenance * 12).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>$${analysis.currentCostEstimate.breakdown.energy.toLocaleString()}</td>
            <td>$${(analysis.currentCostEstimate.breakdown.energy * 12).toLocaleString()}</td>
          </tr>
          <tr style="font-weight: 700; background: #f8f2e8;">
            <td>Total</td>
            <td>$${analysis.currentCostEstimate.monthly.toLocaleString()}</td>
            <td>$${analysis.currentCostEstimate.annual.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h3>ROI Projection</h3>
      <table>
        <tr>
          <td>Breakeven Period</td>
          <td><strong>${analysis.roiProjection.breakevenMonths} months</strong></td>
        </tr>
        <tr>
          <td>3-Year Savings</td>
          <td><strong>$${analysis.roiProjection.threeYearSavings.toLocaleString()}</strong></td>
        </tr>
        <tr>
          <td>5-Year Savings</td>
          <td><strong>$${analysis.roiProjection.fiveYearSavings.toLocaleString()}</strong></td>
        </tr>
        <tr>
          <td>Annualized ROI</td>
          <td><strong>${analysis.roiProjection.annualizedROI}%</strong></td>
        </tr>
      </table>
    </div>
  </div>

  <!-- Insights -->
  <div class="page page-break">
    <h2>Workflow Insights</h2>

    ${analysis.workflowInsights.map((insight) => `
      <div class="insight-card">
        <div class="insight-header">
          <strong>${insight.title}</strong>
          <span class="insight-category">${insight.category}</span>
        </div>
        <p style="color: #666; margin-top: 10px;">${insight.description}</p>
        <p style="margin-top: 10px; font-size: 14px;"><strong>Impact:</strong> ${insight.impact}</p>
      </div>
    `).join("")}

    ${analysis.securityConsiderations.length > 0 ? `
    <div class="section" style="margin-top: 40px;">
      <h3>Security Considerations</h3>
      <ul>
        ${analysis.securityConsiderations.map((item) => `<li style="margin-bottom: 10px;">${item}</li>`).join("")}
      </ul>
    </div>
    ` : ""}
  </div>

  <!-- Footer / Contact -->
  <div class="page page-break">
    <h2>Next Steps</h2>

    <div class="executive-summary">
      <h3 style="margin-bottom: 15px;">Ready to Transform Your Print Infrastructure?</h3>
      <p>Our team of print solutions specialists is ready to help you implement these recommendations. Here's what happens next:</p>
      <ol style="margin-top: 15px; padding-left: 20px;">
        <li style="margin-bottom: 10px;">We'll contact you within 24 hours to discuss this assessment</li>
        <li style="margin-bottom: 10px;">Schedule a detailed consultation at your convenience</li>
        <li style="margin-bottom: 10px;">Receive a formal quote tailored to your requirements</li>
        <li style="margin-bottom: 10px;">Begin your print transformation journey</li>
      </ol>
    </div>

    <div class="footer">
      <div class="footer-logo">Dreaming Print Solutions</div>
      <div class="footer-tagline">Australia's First Indigenous-Owned Enterprise Printer Dealer</div>
      <div style="margin-top: 20px;">
        <p><strong>Phone:</strong> 1300 000 000</p>
        <p><strong>Email:</strong> hello@dreamingprintsolutions.com.au</p>
        <p><strong>Web:</strong> dreamingprintsolutions.com.au</p>
      </div>
      <div style="margin-top: 30px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
        <span style="padding: 10px 20px; background: #f8f2e8; border-radius: 8px;">Supply Nation Certified</span>
        <span style="padding: 10px 20px; background: #f8f2e8; border-radius: 8px;">IPP Registered</span>
        <span style="padding: 10px 20px; background: #f8f2e8; border-radius: 8px;">HP Authorized Partner</span>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
