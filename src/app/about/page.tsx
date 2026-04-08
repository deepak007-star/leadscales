import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { team } from "@/data/team";
import {
  BarChart3,
  TrendingUp,
  Handshake,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LeadScale Service — the marketing agency built by home service professionals, for home service professionals.",
};

const values = [
  {
    icon: BarChart3,
    title: "Transparency",
    description:
      "You'll always know exactly where your money is going and what results you're getting. No smoke and mirrors.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description:
      "We don't chase vanity metrics. Every strategy is built to generate real leads and measurable revenue growth.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We're not just a vendor — we're an extension of your team. Your success is our success, and we act like it.",
  },
];

const comparison = [
  { us: "Home-service specialization", them: "Generic strategies for any industry" },
  { us: "Month-to-month flexibility", them: "Long-term contract lock-ins" },
  { us: "Transparent reporting & real metrics", them: "Vanity metrics & confusing reports" },
  { us: "Dedicated account manager", them: "Rotating contacts & slow responses" },
  { us: "Proven playbooks for your industry", them: "Experimenting with your budget" },
  { us: "You own all your accounts & data", them: "Proprietary systems & data lock-in" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About LeadScale Service"
        subtitle="We're home service marketing specialists on a mission to help every skilled tradesperson build the business they deserve."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Company Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-100 to-sky-100 flex items-center justify-center">
                <span className="font-heading text-4xl font-bold text-indigo-300/50">
                  Our Story
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-3">
                  Our Story
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Built by Home Service Pros, for Home Service Pros
                </h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    LeadScale Service was founded by Alex Rivera, a former HVAC
                    business owner who experienced firsthand the frustration of
                    working with marketing agencies that didn&apos;t understand
                    the home service industry.
                  </p>
                  <p>
                    After years of wasted budgets and broken promises from
                    generic agencies, Alex set out to build something different
                    — a marketing agency that speaks the language of trades
                    professionals and delivers the kind of results that
                    actually move the needle.
                  </p>
                  <p>
                    Today, LeadScale has helped over 500 home service
                    businesses across the country generate millions of qualified
                    leads and achieve sustainable growth. Our team combines deep
                    industry expertise with cutting-edge digital marketing
                    strategies to deliver results that other agencies simply
                    can&apos;t match.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Values"
              title="What We Stand For"
              subtitle="These aren't just words on a wall. They're the principles that guide every strategy we build and every dollar we spend."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <ScrollReveal key={value.title}>
                <div className="text-center p-8 rounded-2xl bg-white border border-slate-200">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Team"
              title="The People Behind Your Growth"
              subtitle="A team of experienced marketers who live and breathe the home service industry."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <ScrollReveal key={member.name}>
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-2xl bg-gradient-to-br from-indigo-100 to-sky-100 flex items-center justify-center mb-4">
                    <span className="font-heading text-3xl font-bold text-indigo-400">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="LeadScale vs. Other Agencies"
              subtitle="See why home service businesses choose LeadScale over generic marketing agencies."
            />
          </ScrollReveal>
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
              <div className="p-4 text-center font-heading font-semibold text-slate-500 text-sm">
                Other Agencies
              </div>
              <div className="p-4 text-center font-heading font-semibold text-indigo-600 text-sm bg-indigo-50">
                LeadScale Service
              </div>
            </div>
            {comparison.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-slate-100 last:border-0"
              >
                <div className="p-4 flex items-start gap-2 text-sm text-slate-500">
                  <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  {item.them}
                </div>
                <div className="p-4 flex items-start gap-2 text-sm text-slate-900 bg-indigo-50/50">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  {item.us}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with a Team That Gets It?"
        subtitle="Schedule a free strategy call and see how LeadScale can transform your marketing."
        buttonText="Schedule Your Free Call"
      />
    </>
  );
}
