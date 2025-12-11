import type { NextConfig } from "next";

/**
 * =================================================================
 * NEXT.JS CONFIGURATION
 * =================================================================
 *
 * Performance, security, and SEO optimizations for production.
 */

const nextConfig: NextConfig = {
  // =================================================================
  // IMAGE OPTIMIZATION
  // =================================================================
  images: {
    // Enable modern image formats for better compression
    formats: ["image/avif", "image/webp"],

    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images for 30 days
    minimumCacheTTL: 60 * 60 * 24 * 30,

    // Allow images from these domains (add HP, etc. as needed)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hp.com",
      },
    ],
  },

  // =================================================================
  // SECURITY HEADERS
  // =================================================================
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/:path*",
        headers: [
          // Prevent clickjacking - don't allow site in iframes
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Prevent MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Disable browser features we don't need
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // XSS Protection (legacy, but still useful)
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // DNS prefetch control
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Strict Transport Security (HTTPS only)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Content Security Policy
          // This is a baseline - adjust based on actual needs
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://vercel.live https://vitals.vercel-insights.com https://va.vercel-scripts.com wss://ws-us3.pusher.com",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "base-uri 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },

  // =================================================================
  // REDIRECTS
  // =================================================================
  async redirects() {
    return [
      // Redirect www to non-www (canonical URL)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.dreamingprintsolutions.com.au",
          },
        ],
        destination: "https://dreamingprintsolutions.com.au/:path*",
        permanent: true,
      },
      // Common typos/alternatives
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/contact",
        permanent: false, // Temporary - might add dedicated quote page
      },
      {
        source: "/get-a-quote",
        destination: "/contact",
        permanent: false,
      },
    ];
  },

  // =================================================================
  // TRAILING SLASH
  // =================================================================
  // Ensure consistent URLs (no trailing slash)
  trailingSlash: false,

  // =================================================================
  // POWERED BY HEADER
  // =================================================================
  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // =================================================================
  // COMPRESSION
  // =================================================================
  // Enable gzip/brotli compression
  compress: true,

  // =================================================================
  // STRICT MODE
  // =================================================================
  // Enable React strict mode for better development
  reactStrictMode: true,

  // =================================================================
  // EXPERIMENTAL FEATURES
  // =================================================================
  experimental: {
    // Optimize package imports for smaller bundles
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
