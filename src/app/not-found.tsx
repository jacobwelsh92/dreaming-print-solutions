import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center relative overflow-hidden">
      <DotPattern variant="ochre" opacity={0.05} />

      <Container className="relative z-10">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-ochre-500 font-display text-8xl md:text-9xl mb-4">
            404
          </p>

          <h1 className="font-display text-3xl md:text-4xl text-charcoal-950 mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-charcoal-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
            moved or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button leftIcon={<Home className="h-4 w-4" />} asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button
              variant="outline"
              leftIcon={<ArrowLeft className="h-4 w-4" />}
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
