import { HeroHome } from "@/components/sections/hero-home";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { StatsCounter } from "@/components/sections/stats-counter";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { IndustrySelector } from "@/components/sections/industry-selector";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <SocialProofBar />
      <ServicesGrid />
      <ProcessSteps />
      <StatsCounter />
      <CaseStudiesPreview />
      <TestimonialsCarousel />
      <IndustrySelector />
      <CTASection />
    </>
  );
}
