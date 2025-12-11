import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import {
  footerNavItems,
  legalNavItems,
  contactInfo,
  businessInfo,
} from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-square.png"
                alt="Dreaming Print Solutions"
                width={140}
                height={140}
                className="w-28 h-auto"
              />
            </Link>
            <p className="text-charcoal-300 text-sm leading-relaxed mb-6">
              Australia&apos;s first indigenous-owned enterprise printer and MFD
              hardware dealer. Proudly serving government and corporate clients
              with premium HP solutions.
            </p>

            {/* Supply Nation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-charcoal-900 rounded-lg">
              <div className="w-8 h-8 bg-ochre-500 rounded-full flex items-center justify-center text-xs font-bold">
                SN
              </div>
              <div className="text-xs">
                <p className="font-medium text-white">Supply Nation</p>
                <p className="text-charcoal-400">
                  {businessInfo.supplyNationStatus}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm text-charcoal-300",
                    "hover:text-ochre-400 transition-colors duration-200"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-3 text-sm text-charcoal-300 hover:text-ochre-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="break-all">{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-charcoal-300 hover:text-ochre-400 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-charcoal-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Business Hours / CTA */}
          <div>
            <h3 className="font-display text-lg mb-4">Get Started</h3>
            <p className="text-sm text-charcoal-300 mb-4">
              Ready to discuss your printing needs? Our team is here to help
              government and enterprise clients find the perfect solution.
            </p>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center",
                "px-5 py-2.5 rounded-lg",
                "bg-ochre-500 text-white text-sm font-medium",
                "hover:bg-ochre-600 transition-colors duration-200"
              )}
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-sm text-charcoal-400">
                &copy; {currentYear} {businessInfo.name}. All rights reserved.
              </p>
              {/* Legal Links */}
              <nav className="flex items-center gap-3">
                {legalNavItems.map((item, index) => (
                  <span key={item.href} className="flex items-center gap-3">
                    {index > 0 && (
                      <span className="text-charcoal-700">|</span>
                    )}
                    <Link
                      href={item.href}
                      className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </span>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-charcoal-500">
                Indigenous-Owned Enterprise
              </span>
              <span className="text-charcoal-700">|</span>
              <span className="text-xs text-charcoal-500">
                ABN: {businessInfo.abn}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
