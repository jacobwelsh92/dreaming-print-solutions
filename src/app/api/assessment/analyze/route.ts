/**
 * =================================================================
 * API: Assessment Analysis
 * =================================================================
 *
 * Endpoint for generating AI-powered print assessments using Claude.
 * POST /api/assessment/analyze
 */

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { productDetails } from "@/data/products/index";
import {
  ASSESSMENT_SYSTEM_PROMPT,
  buildAssessmentPrompt,
} from "@/lib/assessment/prompts";
import type { AnalyzeRequest, AnalysisResult, ProductRecommendation } from "@/lib/assessment/types";

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: AnalyzeRequest = await request.json();
    const {
      businessProfile,
      currentSetup,
      printVolume,
      workflowNeeds,
      budgetTimeline,
    } = body;

    // Validate required fields
    if (!businessProfile || !currentSetup || !printVolume || !workflowNeeds || !budgetTimeline) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for API key
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY not configured");
      return NextResponse.json(
        { success: false, error: "AI service not configured" },
        { status: 500 }
      );
    }

    // Build the prompt
    const userPrompt = buildAssessmentPrompt(
      businessProfile,
      currentSetup,
      printVolume,
      workflowNeeds,
      budgetTimeline
    );

    // Call Claude API
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      system: ASSESSMENT_SYSTEM_PROMPT,
    });

    // Extract text content
    const textBlock = message.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text response from AI");
    }

    // Parse JSON response
    let analysisData: Omit<AnalysisResult, "recommendations" | "generatedAt"> & {
      recommendations: Array<Omit<ProductRecommendation, "product"> & { productId: string }>;
    };

    try {
      // Extract JSON from response (handle potential markdown code blocks)
      let jsonText = textBlock.text;
      const jsonMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch && jsonMatch[1]) {
        jsonText = jsonMatch[1];
      }
      analysisData = JSON.parse(jsonText.trim());
    } catch (parseError) {
      console.error("Failed to parse AI response:", textBlock.text);
      throw new Error("Invalid response format from AI");
    }

    // Hydrate product recommendations with full product data
    const recommendations: ProductRecommendation[] = analysisData.recommendations.map((rec) => {
      const product = productDetails[rec.productId];
      if (!product) {
        console.warn(`Product not found: ${rec.productId}`);
      }
      return {
        ...rec,
        product: product || {
          id: rec.productId,
          model: rec.productId,
          name: "Unknown Product",
          format: "A4" as const,
          color: true,
          speed: 0,
          volumeMin: 0,
          volumeMax: 0,
          idealFor: "",
          description: "",
          features: [],
        },
      } as ProductRecommendation;
    });

    // Build final analysis result
    const analysis: AnalysisResult = {
      ...analysisData,
      recommendations,
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      analysis,
    });

  } catch (error) {
    console.error("Assessment analysis error:", error);

    // Handle specific error types
    if (error instanceof Anthropic.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { success: false, error: "AI service authentication failed" },
          { status: 500 }
        );
      }
      if (error.status === 429) {
        return NextResponse.json(
          { success: false, error: "AI service rate limited. Please try again in a moment." },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Analysis failed",
      },
      { status: 500 }
    );
  }
}
