import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how LeadScale has helped home service businesses generate more leads and grow revenue with real case studies and results.",
};

export default function CaseStudiesPage() {
  const featured = caseStudies.find((cs) => cs.featured);
  const rest = caseStudies.filter((cs) => cs !== featured);

  return (
    <>
      <PageHero
        title="Client Success Stories"
        subtitle="Real results from real home service businesses. See the strategies and outcomes that make LeadScale different."
        breadcrumbs={[{ label: "Case Studies", href: "/case-studies" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          {featured && (
            <ScrollReveal>
              <div className="mb-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-50 to-sky-50 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-indigo-200 to-sky-200 flex items-center justify-center">
                    <span className="font-heading text-4xl font-bold text-indigo-400/50">
                      {featured.company}
                    </span>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-flex self-start items-center rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold mb-4">
                      Featured
                    </span>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-slate-900">
                      {featured.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {featured.results.map((r) => (
                        <span
                          key={r.label}
                          className="inline-flex items-center text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-full px-3 py-1.5"
                        >
                          {r.value} {r.label}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {featured.challenge.slice(0, 200)}...
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((cs) => (
              <ScrollReveal key={cs.slug}>
                <CaseStudyCard caseStudy={cs} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Every success story starts with a conversation. Let's talk about your business goals."
      />
    </>
  );
}
