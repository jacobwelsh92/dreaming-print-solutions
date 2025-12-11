import { Header, Footer } from "@/components/layout";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
