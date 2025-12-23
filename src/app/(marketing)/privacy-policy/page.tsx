import type { Metadata } from "next";
import {
  Section,
  SectionHeader,
  SectionTitle,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Dreaming Print Solutions. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 2024";

  return (
    <>
      <Section background="cream" size="sm">
        <Container>
          <SectionHeader centered={false}>
            <SectionTitle as="h1">Privacy Policy</SectionTitle>
            <p className="text-charcoal-600 mt-2">
              Last updated: {lastUpdated}
            </p>
          </SectionHeader>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="prose prose-lg max-w-3xl">
            <h2>1. Introduction</h2>
            <p>
              Dreaming Print Solutions Pty Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>
            <p>
              We comply with the Australian Privacy Principles (APPs) contained in the
              Privacy Act 1988 (Cth).
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and contact details (email, phone number, address)</li>
              <li>Organisation name and job title</li>
              <li>Information you provide in enquiry forms</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect certain technical information, including:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes</li>
              <li>Process and fulfil orders</li>
              <li>Send you relevant communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations (e.g., email services)</li>
              <li>Professional advisers (lawyers, accountants)</li>
              <li>Government authorities when required by law</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect
              your personal information against unauthorised access, alteration,
              disclosure, or destruction.
            </p>

            <h2>6. Your Rights</h2>
            <p>Under Australian privacy law, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with the OAIC</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience and analyse
              website traffic. You can control cookies through your browser settings.
            </p>

            <h2>8. Third-Party Services</h2>
            <p>Our website may use the following third-party services:</p>
            <ul>
              <li>Vercel (hosting and analytics)</li>
              <li>Resend (email delivery)</li>
            </ul>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of any changes by posting the new policy on this page and updating the
              &ldquo;Last updated&rdquo; date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise
              your rights, please contact us:
            </p>
            <ul>
              <li>Email: {siteConfig.contact.email}</li>
              <li>Phone: {siteConfig.contact.phoneDisplay}</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
