"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { caseStudies } from "@/data/case-studies";
import { ArrowRight } from "lucide-react";

export function CaseStudiesPreview() {
  const featured = caseStudies.filter((cs) => cs.featured).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="Real Results for Real Businesses"
            subtitle="See how we've helped home service companies like yours generate more leads and grow revenue."
          />
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((cs) => (
            <StaggerItem key={cs.slug}>
              <CaseStudyCard caseStudy={cs} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
