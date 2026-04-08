"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";

const clients = [
  "Comfort Air HVAC",
  "Precision Plumbing",
  "Spark Electric",
  "Summit Roofing",
  "CoolBreeze AC",
  "Elite Plumbing",
  "HomeShield Roofing",
  "Wright's Electrical",
  "Greenscape Landscaping",
  "ProFlow Plumbing",
  "AirMax HVAC",
  "BrightStar Electric",
];

export function SocialProofBar() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <ScrollReveal>
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
          Trusted by 500+ Home Service Companies Nationwide
        </p>
      </ScrollReveal>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="flex h-12 items-center justify-center rounded-lg bg-white border border-slate-200 px-6 text-sm font-medium text-slate-500 whitespace-nowrap">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
