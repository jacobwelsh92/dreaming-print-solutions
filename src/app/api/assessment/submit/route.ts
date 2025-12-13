/**
 * =================================================================
 * API: Assessment Submission
 * =================================================================
 *
 * Handles lead capture and email notifications for completed assessments.
 * POST /api/assessment/submit
 */

import { NextRequest, NextResponse } from "next/server";
import type { SubmitRequest, SubmitResponse } from "@/lib/assessment/types";

export async function POST(request: NextRequest) {
  try {
    const body: SubmitRequest = await request.json();
    const { assessmentData, analysis } = body;

    // Validate required fields
    if (!assessmentData?.contactInfo || !analysis) {
      return NextResponse.json<SubmitResponse>(
        { success: false, error: "Missing required data" },
        { status: 400 }
      );
    }

    const { contactInfo, businessProfile, printVolume, budgetTimeline } = assessmentData;
    const primaryRec = analysis.recommendations.find((r) => r.priority === "primary");

    // Generate a unique assessment ID
    const assessmentId = `DPS-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Check if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "benlong@dreamingprintsolutions.com.au";

    if (resendApiKey && !resendApiKey.startsWith("re_xxxxx")) {
      // Production mode: send via Resend
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      // Send lead notification to business
      await resend.emails.send({
        from: "Dreaming Print Solutions <noreply@dreamingprintsolutions.com.au>",
        to: [contactEmail],
        subject: `🖨️ New Print Assessment Lead: ${contactInfo.company}`,
        html: buildBusinessNotificationEmail(assessmentId, assessmentData, analysis),
      });

      // Send assessment summary to customer
      await resend.emails.send({
        from: "Dreaming Print Solutions <noreply@dreamingprintsolutions.com.au>",
        to: [contactInfo.email],
        subject: "Your Print Assessment Results - Dreaming Print Solutions",
        html: buildCustomerEmail(contactInfo.firstName, analysis, primaryRec),
      });
    } else {
      // Mock mode: log to console
      console.log("=== ASSESSMENT SUBMISSION (Mock Mode) ===");
      console.log("Assessment ID:", assessmentId);
      console.log("Contact:", contactInfo.firstName, contactInfo.lastName);
      console.log("Email:", contactInfo.email);
      console.log("Company:", contactInfo.company);
      console.log("Industry:", businessProfile.industry);
      console.log("Volume:", printVolume.monthlyA4, "pages/month");
      console.log("Budget:", budgetTimeline.budgetRange);
      console.log("Primary Recommendation:", primaryRec?.product.name);
      console.log("Potential Savings:", `$${analysis.potentialSavings.annual}/year`);
      console.log("==========================================");
    }

    return NextResponse.json<SubmitResponse>({
      success: true,
      assessmentId,
    });

  } catch (error) {
    console.error("Assessment submission error:", error);
    return NextResponse.json<SubmitResponse>(
      { success: false, error: "Failed to submit assessment" },
      { status: 500 }
    );
  }
}

/**
 * Build HTML email for business notification
 */
function buildBusinessNotificationEmail(
  assessmentId: string,
  data: SubmitRequest["assessmentData"],
  analysis: SubmitRequest["analysis"]
): string {
  const { contactInfo, businessProfile, currentSetup, printVolume, budgetTimeline } = data;
  const primaryRec = analysis.recommendations.find((r) => r.priority === "primary");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #1c1b1a; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #c45a32; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f2e8; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
        .section h3 { margin-top: 0; color: #c45a32; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .metric { display: inline-block; background: #688c5a; color: white; padding: 10px 15px; border-radius: 8px; margin: 5px; }
        .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #c45a32; margin: 15px 0; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px; border-bottom: 1px solid #eee; }
        td:first-child { font-weight: bold; width: 40%; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🎯 New Assessment Lead</h1>
          <p style="margin: 5px 0 0; opacity: 0.9;">Assessment ID: ${assessmentId}</p>
        </div>

        <div class="content">
          <div class="section">
            <h3>📞 Contact Information</h3>
            <table>
              <tr><td>Name</td><td>${contactInfo.firstName} ${contactInfo.lastName}</td></tr>
              <tr><td>Email</td><td><a href="mailto:${contactInfo.email}">${contactInfo.email}</a></td></tr>
              <tr><td>Phone</td><td><a href="tel:${contactInfo.phone}">${contactInfo.phone}</a></td></tr>
              <tr><td>Company</td><td>${contactInfo.company}</td></tr>
              ${contactInfo.jobTitle ? `<tr><td>Job Title</td><td>${contactInfo.jobTitle}</td></tr>` : ""}
              <tr><td>Preferred Contact</td><td>${contactInfo.preferredContact}</td></tr>
            </table>
          </div>

          <div class="section">
            <h3>🏢 Business Profile</h3>
            <table>
              <tr><td>Industry</td><td>${businessProfile.industry}</td></tr>
              <tr><td>Organisation Size</td><td>${businessProfile.orgSize}</td></tr>
              <tr><td>Employees</td><td>${businessProfile.employeeCount}</td></tr>
              <tr><td>Location</td><td>${businessProfile.location}</td></tr>
            </table>
          </div>

          <div class="section">
            <h3>🖨️ Current Setup</h3>
            <table>
              <tr><td>Current Brand</td><td>${currentSetup.brand}</td></tr>
              ${currentSetup.model ? `<tr><td>Model</td><td>${currentSetup.model}</td></tr>` : ""}
              <tr><td>Age</td><td>${currentSetup.ageYears} years</td></tr>
              <tr><td>Issues</td><td>${currentSetup.issues.join(", ")}</td></tr>
              <tr><td>Contract Type</td><td>${currentSetup.contractType}</td></tr>
            </table>
          </div>

          <div class="section">
            <h3>📊 Print Volume</h3>
            <table>
              <tr><td>Monthly A4</td><td>${printVolume.monthlyA4.toLocaleString()} pages</td></tr>
              <tr><td>Monthly A3</td><td>${(printVolume.monthlyA3 || 0).toLocaleString()} pages</td></tr>
              <tr><td>Color Ratio</td><td>${printVolume.colorPercentage}%</td></tr>
            </table>
          </div>

          <div class="section">
            <h3>💰 Budget & Timeline</h3>
            <table>
              <tr><td>Budget</td><td>${budgetTimeline.budgetRange}</td></tr>
              <tr><td>Urgency</td><td>${budgetTimeline.urgency}</td></tr>
              <tr><td>Procurement Type</td><td>${budgetTimeline.procurementType}</td></tr>
              <tr><td>Preference</td><td>${budgetTimeline.preference}</td></tr>
            </table>
          </div>

          <div class="highlight">
            <h3 style="margin-top: 0; color: #c45a32;">💡 AI Analysis Summary</h3>
            <p>${analysis.executiveSummary}</p>

            <div style="margin-top: 15px;">
              <span class="metric">💵 Potential Savings: $${analysis.potentialSavings.annual.toLocaleString()}/year</span>
              <span class="metric">📈 ROI: ${analysis.roiProjection.annualizedROI}%</span>
              <span class="metric">⏱️ Breakeven: ${analysis.roiProjection.breakevenMonths} months</span>
            </div>

            ${primaryRec ? `
              <p style="margin-top: 15px;"><strong>Primary Recommendation:</strong> ${primaryRec.product.name} (${primaryRec.product.model})</p>
              <p><strong>Estimated Value:</strong> $${primaryRec.estimatedCost.toLocaleString()}</p>
            ` : ""}
          </div>

          <p style="text-align: center; color: #666; margin-top: 20px;">
            Generated ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })} AEST
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Build HTML email for customer
 */
function buildCustomerEmail(
  firstName: string,
  analysis: SubmitRequest["analysis"],
  primaryRec: SubmitRequest["analysis"]["recommendations"][0] | undefined
): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #1c1b1a; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #c45a32, #96503d); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #fefdfb; padding: 30px; border: 1px solid #f8f2e8; border-radius: 0 0 8px 8px; }
        .metric-box { background: #f8f2e8; padding: 20px; border-radius: 8px; text-align: center; margin: 10px; flex: 1; }
        .metric-value { font-size: 24px; font-weight: bold; color: #c45a32; }
        .metric-label { font-size: 12px; color: #666; margin-top: 5px; }
        .cta-button { display: inline-block; background: #c45a32; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 10px 5px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">Your Print Assessment Results</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">Dreaming Print Solutions</p>
        </div>

        <div class="content">
          <p>Hi ${firstName},</p>

          <p>Thank you for completing your print assessment! We've analysed your requirements and have some exciting insights to share.</p>

          <h2 style="color: #c45a32;">Executive Summary</h2>
          <p>${analysis.executiveSummary}</p>

          <div style="display: flex; flex-wrap: wrap; margin: 20px -10px;">
            <div class="metric-box">
              <div class="metric-value">$${analysis.potentialSavings.annual.toLocaleString()}</div>
              <div class="metric-label">Potential Annual Savings</div>
            </div>
            <div class="metric-box">
              <div class="metric-value">${analysis.potentialSavings.percentage}%</div>
              <div class="metric-label">Cost Reduction</div>
            </div>
            <div class="metric-box">
              <div class="metric-value">${analysis.roiProjection.breakevenMonths} mo</div>
              <div class="metric-label">Breakeven Period</div>
            </div>
          </div>

          ${primaryRec ? `
            <h2 style="color: #c45a32;">Our Top Recommendation</h2>
            <div style="background: #f8f2e8; padding: 20px; border-radius: 8px; border-left: 4px solid #c45a32;">
              <h3 style="margin-top: 0;">${primaryRec.product.name}</h3>
              <p style="color: #666; margin: 5px 0;">${primaryRec.product.model}</p>
              <p><strong>Why it's a great fit:</strong></p>
              <ul>
                ${primaryRec.reasons.map((r) => `<li>${r}</li>`).join("")}
              </ul>
            </div>
          ` : ""}

          <h2 style="color: #c45a32;">What's Next?</h2>
          <p>One of our print solutions specialists will be in touch within 24 hours to discuss your assessment in detail. In the meantime, feel free to reach out if you have any questions.</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="tel:1300000000" class="cta-button">Call Us: 1300 000 000</a>
            <a href="mailto:hello@dreamingprintsolutions.com.au" class="cta-button" style="background: #688c5a;">Email Us</a>
          </div>

          <hr style="border: none; border-top: 1px solid #f8f2e8; margin: 30px 0;">

          <h3 style="color: #c45a32;">Why Choose Dreaming Print Solutions?</h3>
          <ul>
            <li><strong>Indigenous-Owned:</strong> Australia's first Indigenous-owned enterprise printer dealer</li>
            <li><strong>IPP Registered:</strong> Simplify government procurement compliance</li>
            <li><strong>Supply Nation Certified:</strong> Independently verified Indigenous business</li>
            <li><strong>HP Partner:</strong> Full access to enterprise product line and support</li>
          </ul>

          <p>We look forward to helping you transform your print infrastructure!</p>

          <p>
            Kind regards,<br>
            <strong>The Dreaming Print Solutions Team</strong>
          </p>
        </div>

        <div class="footer">
          <p>Dreaming Print Solutions</p>
          <p>Australia's First Indigenous-Owned Enterprise Printer Dealer</p>
          <p>Supply Nation Certified • IPP Registered • HP Partner</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
