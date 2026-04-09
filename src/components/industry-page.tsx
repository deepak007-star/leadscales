"use client";

import type { IndustryData } from "@/data/industries";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { SolutionSection } from "@/components/sections/solution-section";
import { OfferingsGrid } from "@/components/sections/offerings-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Partners } from "@/components/sections/partners";
import { CTASection } from "@/components/sections/cta-section";
import { SuccessStories } from "@/components/sections/success-stories";
import { Insights } from "@/components/sections/insights";

interface IndustryPageProps {
  industry: IndustryData;
}

export function IndustryPage({ industry }: IndustryPageProps) {
  return (
    <div
      style={{
        ["--accent" as string]: industry.color,
        ["--accent-light" as string]: industry.colorLight,
        ["--accent-dark" as string]: industry.colorDark,
      }}
    >
      <Header industryColor={industry.color} />
      <main className="flex-1">
        <Hero industry={industry} />
        <ClientLogos logos={industry.clientLogos} color={industry.color} />
        <SolutionSection
          solution={industry.solution}
          color={industry.color}
          industrySlug={industry.slug}
        />
        <OfferingsGrid
          offerings={industry.offerings}
          color={industry.color}
          colorLight={industry.colorLight}
          industrySlug={industry.slug}
        />
        <Testimonials
          testimonials={industry.testimonials}
          color={industry.color}
          industrySlug={industry.slug}
        />
        <Partners
          partners={industry.partners}
          industryName={industry.name}
          color={industry.color}
          industrySlug={industry.slug}
        />
        <CTASection
          cta={industry.ctaSection}
          color={industry.color}
          industrySlug={industry.slug}
        />
        <SuccessStories
          stories={industry.successStories}
          color={industry.color}
        />
        <Insights
          insights={industry.insights}
          color={industry.color}
          industrySlug={industry.slug}
        />
      </main>
      <Footer industryColor={industry.color} />
    </div>
  );
}
