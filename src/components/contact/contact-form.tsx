"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  preselectedProduct?: string;
}

export function ContactForm({ preselectedProduct }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: preselectedProduct
        ? `I'm interested in the HP ${preselectedProduct}. Please provide more information and pricing.`
        : "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="h-16 w-16 mx-auto rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl text-charcoal-950 mb-2">
            Message Sent!
          </h3>
          <p className="text-charcoal-600 mb-6">
            Thank you for your enquiry. We&apos;ll be in touch within 1 business day.
          </p>
          <Button variant="outline" onClick={() => setSubmitStatus(null)}>
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-red-800">Something went wrong</p>
                <p className="text-sm text-red-600">
                  Please try again or email us directly.
                </p>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              label="Name *"
              placeholder="Your full name"
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="Email *"
              type="email"
              placeholder="you@company.com"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              label="Phone"
              type="tel"
              placeholder="04XX XXX XXX"
              error={errors.phone?.message}
              {...register("phone")}
            />
            <Input
              label="Organisation"
              placeholder="Your company or agency"
              error={errors.organisation?.message}
              {...register("organisation")}
            />
          </div>

          <Textarea
            label="Message *"
            placeholder="Tell us about your print requirements..."
            error={errors.message?.message}
            className="min-h-[150px]"
            {...register("message")}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full"
            isLoading={isSubmitting}
            rightIcon={!isSubmitting ? <Send className="h-4 w-4" /> : undefined}
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </Button>

          <p className="text-xs text-charcoal-500 text-center">
            We typically respond within 1 business day. Your information is kept
            confidential.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
