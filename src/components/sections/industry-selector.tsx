"use client";

import {
  Thermometer,
  Wrench,
  Zap,
  Home,
  TreePine,
  Hammer,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { industries } from "@/data/industries";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Thermometer,
  Wrench,
  Zap,
  Home,
  TreePine,
  Hammer,
};

export function IndustrySelector() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Specialized Marketing for Your Industry"
            subtitle="We don't do generic marketing. Our strategies are tailored to the unique challenges and opportunities of your specific trade."
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Wrench;
            return (
              <Link
                key={industry.slug}
                href="/services"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/50 hover:border-indigo-200"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="font-heading text-sm font-semibold text-slate-900">
                  {industry.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
