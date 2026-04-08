"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { PricingCard } from "@/components/shared/pricing-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { pricingTiers } from "@/data/pricing";
import { pricingFaqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <PageHero
        title="Transparent Pricing"
        subtitle="No hidden fees, no long-term contracts. Choose a plan that fits your business and start growing today."
        breadcrumbs={[{ label: "Pricing", href: "/pricing" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                !annual ? "text-slate-900" : "text-slate-500"
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative h-7 w-12 rounded-full transition-colors",
                annual ? "bg-indigo-600" : "bg-slate-300"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform",
                  annual ? "translate-x-5.5" : "translate-x-0.5"
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                annual ? "text-slate-900" : "text-slate-500"
              )}
            >
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs font-semibold">
                Save 20%
              </span>
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <ScrollReveal key={tier.name}>
                <PricingCard tier={tier} annual={annual} />
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            All plans include a 30-day money-back guarantee. No long-term contracts required.
          </p>
        </div>
      </section>

      <FAQSection
        title="Pricing FAQ"
        subtitle="Common questions about our pricing and plans."
        faqs={pricingFaqs}
      />

      <CTASection
        title="Need a Custom Package?"
        subtitle="Every business is different. Let's build a plan tailored to your specific goals and budget."
        buttonText="Contact Sales"
      />
    </>
  );
}
