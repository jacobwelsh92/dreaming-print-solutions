import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, phone, organisation, message } = result.data;

    // Check if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "benlong@dreamingprintsolutions.com.au";

    if (resendApiKey && !resendApiKey.startsWith("re_xxxxx")) {
      // Production mode: send via Resend
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      // Send notification email to business
      await resend.emails.send({
        from: "Dreaming Print Solutions <noreply@dreamingprintsolutions.com.au>",
        to: [contactEmail],
        subject: `New Enquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${organisation ? `<p><strong>Organisation:</strong> ${organisation}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      // Send confirmation email to user
      await resend.emails.send({
        from: "Dreaming Print Solutions <noreply@dreamingprintsolutions.com.au>",
        to: [email],
        subject: "Thank you for contacting Dreaming Print Solutions",
        html: `
          <h2>Thank you for your enquiry, ${name}!</h2>
          <p>We have received your message and will be in touch within 1 business day.</p>
          <p>If your matter is urgent, please call us directly.</p>
          <br>
          <p>Kind regards,<br>The Dreaming Print Solutions Team</p>
        `,
      });
    } else {
      // Mock mode: log to console
      console.log("=== CONTACT FORM SUBMISSION (Mock Mode) ===");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone ?? "Not provided");
      console.log("Organisation:", organisation ?? "Not provided");
      console.log("Message:", message);
      console.log("==========================================");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
