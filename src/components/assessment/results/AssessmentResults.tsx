/**
 * =================================================================
 * ASSESSMENT RESULTS - Main Results Display
 * =================================================================
 *
 * The payoff. This is what they've been waiting for.
 * Every element should feel valuable, considered, professional.
 *
 * Design principles:
 * - REVEAL: Information appears in a satisfying sequence
 * - HIERARCHY: Most important info first
 * - VALUE: This feels worth $500
 * - ACTION: Clear next steps
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  RefreshCw,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AnalysisResult } from "@/lib/assessment/types";
import type { AssessmentFormDataSchema } from "@/lib/assessment/schema";

interface AssessmentResultsProps {
  analysis: AnalysisResult;
  formData: AssessmentFormDataSchema;
  onDownloadPDF: () => Promise<void>;
  onStartOver: () => void;
}

// Stagger animation for cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Product image mapping
const productImages: Record<string, string> = {
  "hp-e47528f": "/images/products/hp-e47528f.png",
  "hp-e78625dn": "/images/products/hp-e78625dn.jpg",
  "hp-e78630dn": "/images/products/hp-e78630dn.jpg",
  "hp-e78635dn": "/images/products/hp-e78635dn.jpg",
  "hp-e87750dn": "/images/products/hp-e87750dn.png",
};

export function AssessmentResults({
  analysis,
  formData,
  onDownloadPDF,
  onStartOver,
}: AssessmentResultsProps) {
  const primaryRec = analysis.recommendations.find((r) => r.priority === "primary");
  const alternativeRecs = analysis.recommendations.filter((r) => r.priority !== "primary");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto"
    >
      {/* Success header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 shadow-lg shadow-sage-500/30 mb-6"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="font-display text-3xl md:text-4xl text-charcoal-900 mb-4">
          Your Print Assessment is Ready
        </h1>
        <p className="text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
          {analysis.executiveSummary}
        </p>
      </motion.div>

      {/* Key metrics - Hero stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
      >
        <MetricCard
          icon={<DollarSign className="w-5 h-5" />}
          label="Current Annual Cost"
          value={`$${analysis.currentCostEstimate.annual.toLocaleString()}`}
          variant="neutral"
        />
        <MetricCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Potential Savings"
          value={`$${analysis.potentialSavings.annual.toLocaleString()}`}
          subvalue={`${analysis.potentialSavings.percentage}% reduction`}
          variant="success"
        />
        <MetricCard
          icon={<Clock className="w-5 h-5" />}
          label="Breakeven"
          value={`${analysis.roiProjection.breakevenMonths} months`}
          variant="ochre"
        />
        <MetricCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="3-Year Savings"
          value={`$${analysis.roiProjection.threeYearSavings.toLocaleString()}`}
          variant="terracotta"
        />
      </motion.div>

      {/* Primary recommendation - Hero card */}
      {primaryRec && (
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-ochre-100 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-ochre-600" />
            </div>
            <h2 className="text-xl font-display font-semibold text-charcoal-900">
              Recommended Solution
            </h2>
          </div>

          <div className="bg-white rounded-3xl border-2 border-ochre-200 shadow-xl shadow-ochre-500/5 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Product image */}
                <div className="flex-shrink-0 w-full md:w-48 h-48 relative rounded-2xl overflow-hidden bg-gradient-to-br from-cream-50 to-cream-100">
                  <Image
                    src={productImages[primaryRec.product.id] || "/images/products/hp-e78630dn.jpg"}
                    alt={primaryRec.product.name}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-ochre-500 text-white text-xs font-semibold shadow-lg">
                      {primaryRec.matchScore}% Match
                    </span>
                  </div>
                </div>

                {/* Product details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-2">
                        {primaryRec.product.name}
                      </h3>
                      <p className="text-charcoal-600">
                        {primaryRec.product.model} • {primaryRec.product.format} •{" "}
                        {primaryRec.product.printSpecs?.speedBlackA4 || primaryRec.product.speed} ppm
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm text-charcoal-500">Estimated</p>
                      <p className="text-3xl font-display font-semibold text-charcoal-900">
                        ${primaryRec.estimatedCost.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Reasons list */}
                  <div className="grid gap-3">
                    {primaryRec.reasons.map((reason, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-sage-50 border border-sage-100"
                      >
                        <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-charcoal-700">{reason}</span>
                      </div>
                    ))}
                  </div>

                  {/* View product link */}
                  <div className="mt-6">
                    <Link
                      href={`/products/${primaryRec.product.id}`}
                      className="inline-flex items-center gap-2 text-ochre-600 font-medium hover:text-ochre-700 transition-colors"
                    >
                      View full specifications
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Alternative recommendations */}
      {alternativeRecs.length > 0 && (
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-xl font-display font-semibold text-charcoal-900 mb-6">
            Alternative Options
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {alternativeRecs.map((rec, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-cream-200 shadow-lg shadow-charcoal-950/5 p-6 hover:border-cream-300 transition-colors"
              >
                <div className="flex gap-4">
                  {/* Mini product image */}
                  <div className="flex-shrink-0 w-20 h-20 relative rounded-xl overflow-hidden bg-cream-50">
                    <Image
                      src={productImages[rec.product.id] || "/images/products/hp-e78630dn.jpg"}
                      alt={rec.product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={cn(
                          "inline-block px-2 py-1 text-xs font-semibold rounded-full",
                          rec.priority === "alternative"
                            ? "bg-sage-100 text-sage-700"
                            : "bg-cream-100 text-charcoal-700"
                        )}
                      >
                        {rec.priority === "alternative" ? "Alternative" : "Budget Option"}
                      </span>
                      <span className="text-xs text-charcoal-500">
                        {rec.matchScore}% match
                      </span>
                    </div>
                    <h3 className="font-semibold text-charcoal-900 truncate">
                      {rec.product.name}
                    </h3>
                    <p className="text-sm text-charcoal-600">{rec.product.model}</p>
                    <p className="text-lg font-semibold text-charcoal-900 mt-2">
                      ${rec.estimatedCost.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Workflow insights */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-ochre-100 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-ochre-600" />
          </div>
          <h2 className="text-xl font-display font-semibold text-charcoal-900">
            Workflow Insights
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {analysis.workflowInsights.map((insight, i) => (
            <div
              key={i}
              className={cn(
                "p-6 rounded-2xl border",
                insight.impact === "high"
                  ? "bg-ochre-50 border-ochre-200"
                  : insight.impact === "medium"
                  ? "bg-cream-50 border-cream-200"
                  : "bg-white border-cream-200"
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={cn(
                    "text-xs font-semibold px-2.5 py-1 rounded-full",
                    insight.category === "efficiency" && "bg-sage-100 text-sage-700",
                    insight.category === "security" && "bg-charcoal-100 text-charcoal-700",
                    insight.category === "cost" && "bg-ochre-100 text-ochre-700",
                    insight.category === "sustainability" && "bg-sage-100 text-sage-700",
                    insight.category === "productivity" && "bg-terracotta-100 text-terracotta-700"
                  )}
                >
                  {insight.category}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium",
                    insight.impact === "high"
                      ? "text-ochre-600"
                      : insight.impact === "medium"
                      ? "text-charcoal-500"
                      : "text-charcoal-400"
                  )}
                >
                  {insight.impact} impact
                </span>
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">{insight.title}</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">{insight.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Security considerations */}
      {analysis.securityConsiderations.length > 0 && (
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-charcoal-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-charcoal-600" />
            </div>
            <h2 className="text-xl font-display font-semibold text-charcoal-900">
              Security Considerations
            </h2>
          </div>
          <div className="bg-charcoal-50 rounded-2xl p-6">
            <ul className="grid gap-3">
              {analysis.securityConsiderations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Actions */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        <Button
          size="lg"
          onClick={onDownloadPDF}
          leftIcon={<Download className="w-4 h-4" />}
          className="bg-gradient-to-r from-ochre-500 to-ochre-600 hover:from-ochre-600 hover:to-ochre-700"
        >
          Download PDF Report
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={onStartOver}
          leftIcon={<RefreshCw className="w-4 h-4" />}
        >
          Start New Assessment
        </Button>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        variants={itemVariants}
        className="text-center p-10 rounded-3xl bg-gradient-to-br from-charcoal-900 to-charcoal-950 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(196 90 50 / 0.5) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl font-display font-semibold text-white mb-3">
            Ready to take the next step?
          </h2>
          <p className="text-charcoal-300 mb-8 max-w-lg mx-auto">
            Our team will be in touch within 24 hours to discuss your assessment.
            Or reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0732505700"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ochre-500 text-white font-semibold hover:bg-ochre-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (07) 3250 5700
            </a>
            <a
              href="mailto:hello@dreamingprintsolutions.com.au"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-charcoal-700 text-white font-semibold hover:bg-charcoal-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper component for metric cards
function MetricCard({
  icon,
  label,
  value,
  subvalue,
  variant = "neutral",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subvalue?: string;
  variant?: "neutral" | "success" | "ochre" | "terracotta";
}) {
  const variantStyles = {
    neutral: "bg-charcoal-50 text-charcoal-600",
    success: "bg-sage-50 text-sage-600",
    ochre: "bg-ochre-50 text-ochre-600",
    terracotta: "bg-terracotta-50 text-terracotta-600",
  };

  return (
    <div className={cn("p-5 rounded-2xl", variantStyles[variant])}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-2xl font-display font-semibold text-charcoal-900">
        {value}
      </p>
      {subvalue && (
        <p className="text-xs text-charcoal-500 mt-1">{subvalue}</p>
      )}
    </div>
  );
}
