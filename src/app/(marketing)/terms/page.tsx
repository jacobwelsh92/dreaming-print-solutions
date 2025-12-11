import type { Metadata } from "next";
import {
  Section,
  SectionHeader,
  SectionTitle,
} from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Dreaming Print Solutions. Read our terms and conditions for using our website and services.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const lastUpdated = "December 2024";

  return (
    <>
      <Section background="cream" size="sm">
        <Container>
          <SectionHeader centered={false}>
            <SectionTitle as="h1">Terms of Service</SectionTitle>
            <p className="text-charcoal-600 mt-2">
              Last updated: {lastUpdated}
            </p>
          </SectionHeader>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="prose prose-lg max-w-3xl">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Dreaming Print Solutions website and services,
              you accept and agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our website or services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Dreaming Print Solutions provides enterprise printer hardware sales,
              managed print services, and document solutions to government and corporate
              clients throughout Australia.
            </p>

            <h2>3. Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in a way that:</p>
            <ul>
              <li>Does not infringe the rights of others</li>
              <li>Does not restrict or inhibit anyone else&apos;s use of the website</li>
              <li>Does not attempt to gain unauthorised access to our systems</li>
              <li>Does not transmit any harmful or malicious code</li>
            </ul>

            <h2>4. Quotes and Pricing</h2>
            <p>
              All quotes provided are valid for 30 days unless otherwise stated.
              Prices are in Australian dollars and are exclusive of GST unless
              indicated. We reserve the right to modify pricing at any time.
            </p>

            <h2>5. Orders and Payment</h2>
            <p>
              All orders are subject to acceptance and availability. Payment terms
              will be specified in individual quotes and invoices. Standard payment
              terms are 30 days from invoice date for approved credit accounts.
            </p>

            <h2>6. Delivery and Installation</h2>
            <p>
              Delivery timeframes are estimates only. We will make reasonable efforts
              to meet quoted delivery dates but are not liable for delays beyond our
              control. Installation services are provided as quoted.
            </p>

            <h2>7. Warranty and Support</h2>
            <p>
              All products are covered by manufacturer warranties. Additional warranty
              and support services may be available as specified in your service
              agreement. Managed print service agreements include support as detailed
              in the service contract.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images,
              is the property of Dreaming Print Solutions or our licensors and is
              protected by Australian and international copyright laws.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Dreaming Print Solutions shall
              not be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our website or services.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Dreaming Print Solutions and
              its officers, directors, employees, and agents from any claims, damages,
              or expenses arising from your breach of these terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of Queensland, Australia.
              Any disputes arising under these terms shall be subject to the exclusive
              jurisdiction of the courts of Queensland.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to this website.
              Your continued use of our website constitutes acceptance of any changes.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: {siteConfig.contact.email}</li>
              <li>Phone: {siteConfig.contact.phoneDisplay}</li>
              <li>Address: {siteConfig.contact.address.full}</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
