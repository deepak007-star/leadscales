import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: cs.title,
    description: `See how ${cs.company} achieved incredible results with LeadScale marketing services.`,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={cs.company}
        subtitle={cs.title}
        breadcrumbs={[
          { label: "Case Studies", href: "/case-studies" },
          { label: cs.company, href: `/case-studies/${cs.slug}` },
        ]}
      />

      {/* Results banner */}
      <section className="relative py-12 bg-gradient-to-r from-indigo-600 to-sky-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cs.results.map((result) => (
              <div key={result.label} className="text-center">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  {result.value}
                </div>
                <p className="mt-1 text-sm text-indigo-100">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary">{cs.industry}</Badge>
              {cs.services.map((s) => (
                <Badge key={s} variant="outline">
                  {s}
                </Badge>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">
              The Challenge
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              {cs.challenge}
            </p>

            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">
              Our Solution
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              {cs.solution}
            </p>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal>
            <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-8 mb-10">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-slate-800 leading-relaxed italic">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-slate-900">
                {cs.testimonial.author}
              </p>
              <p className="text-sm text-slate-600">{cs.testimonial.role}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="More Success Stories" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((c) => (
              <ScrollReveal key={c.slug}>
                <CaseStudyCard caseStudy={c} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
