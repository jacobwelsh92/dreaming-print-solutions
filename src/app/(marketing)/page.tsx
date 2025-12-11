import {
  Hero,
  ServicesOverview,
  ProductsPreview,
  WhyChooseUs,
  FAQPreview,
  CTASection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProductsPreview />
      <WhyChooseUs />
      <FAQPreview />
      <CTASection />
    </>
  );
}
