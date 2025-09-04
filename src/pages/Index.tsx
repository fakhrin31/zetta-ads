import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ShowcaseSection from "@/components/ShowcaseSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ShowcaseSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default Index;