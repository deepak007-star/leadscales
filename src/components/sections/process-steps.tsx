"use client";

import {
  Phone,
  Target,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { processSteps } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  Target,
  Rocket,
  TrendingUp,
};

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Process"
            title="How We 3x Your Leads in 90 Days"
            subtitle="A proven, repeatable process that's generated millions of leads for home service businesses."
          />
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Phone;
            return (
              <StaggerItem key={step.step}>
                <div className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-gradient-to-r from-indigo-300 to-indigo-100" />
                  )}
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center">
                      <div className="relative">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white border-2 border-indigo-100 shadow-sm">
                          <Icon className="h-8 w-8 text-indigo-600" />
                        </div>
                        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-6 font-heading text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
