"use client";

/**
 * =================================================================
 * CTA SECTION
 * =================================================================
 *
 * The final call to action with inline contact form.
 * Captures leads without requiring navigation to contact page.
 */

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientDots, DotPattern } from "@/components/ui/dot-pattern";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { contactInfo } from "@/data/navigation";

export function CTASection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate form submission - replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section
      background="ochre"
      size="xl"
      className="relative overflow-hidden"
    >
      {/* Background pattern */}
      <DotPattern
        variant="terracotta"
        opacity={0.08}
        spacing={36}
        dotSize={3}
        organic
        seed={77}
        animated={false}
      />

      {/* Fade from edges */}
      <GradientDots
        variant="ochre"
        opacity={0.1}
        fadeFrom="edges"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            {/* Headline */}
            <motion.h2
              className="font-display text-display-lg md:text-display-xl text-charcoal-950 mb-6"
              variants={fadeInUp}
            >
              Ready to Get Started?
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
              className="text-body-lg md:text-body-xl text-charcoal-700 mb-8"
              variants={fadeInUp}
            >
              Whether you&apos;re an Indigenous business, government department,
              or corporate organisation — we&apos;re here to help with your printing needs.
            </motion.p>

            {/* Contact options */}
            <motion.div className="space-y-4 mb-8 flex flex-col items-center md:items-start" variants={fadeInUp}>
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="flex items-center gap-3 text-charcoal-700 hover:text-charcoal-900 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-ochre-200 flex items-center justify-center group-hover:bg-ochre-300 transition-colors">
                  <Phone className="h-5 w-5 text-ochre-700" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">{contactInfo.phone}</p>
                  <p className="text-sm text-charcoal-500">Mon-Fri 8:30am - 5:00pm</p>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-charcoal-700 hover:text-charcoal-900 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-ochre-200 flex items-center justify-center group-hover:bg-ochre-300 transition-colors">
                  <Mail className="h-5 w-5 text-ochre-700" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">{contactInfo.email}</p>
                  <p className="text-sm text-charcoal-500">We respond within 24 hours</p>
                </div>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="pt-8 border-t border-ochre-200"
              variants={fadeInUp}
            >
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-charcoal-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ochre-600" />
                  100% Indigenous Owned
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage-500" />
                  IPP Registered
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-terracotta-500" />
                  Supply Nation Certified
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Inline form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-ochre-900/10">
              <h3 className="font-display text-xl text-charcoal-950 mb-2">
                Get a Free Quote
              </h3>
              <p className="text-charcoal-600 text-sm mb-6">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {formState === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-sage-600" />
                  </div>
                  <h4 className="font-display text-lg text-charcoal-950 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-charcoal-600 text-sm">
                    We&apos;ve received your enquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-cream-300 focus:border-ochre-500 focus:ring-2 focus:ring-ochre-500/20 outline-none transition-all text-charcoal-900 placeholder:text-charcoal-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-cream-300 focus:border-ochre-500 focus:ring-2 focus:ring-ochre-500/20 outline-none transition-all text-charcoal-900 placeholder:text-charcoal-400"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-cream-300 focus:border-ochre-500 focus:ring-2 focus:ring-ochre-500/20 outline-none transition-all text-charcoal-900 placeholder:text-charcoal-400"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-cream-300 focus:border-ochre-500 focus:ring-2 focus:ring-ochre-500/20 outline-none transition-all text-charcoal-900 placeholder:text-charcoal-400 resize-none"
                      placeholder="Tell us about your printing needs..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={formState === "loading"}
                    rightIcon={
                      formState === "loading" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )
                    }
                  >
                    {formState === "loading" ? "Sending..." : "Send Enquiry"}
                  </Button>
                  {formState === "error" && (
                    <p className="text-red-600 text-sm text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
