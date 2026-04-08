import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from home service business owners who've transformed their growth with LeadScale marketing services.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Our Clients Say"
        subtitle="Don't just take our word for it — hear from the home service professionals who've experienced the LeadScale difference."
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />

      {/* Stats bar */}
      <section className="py-12 bg-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="font-heading text-3xl font-bold text-white">
                  4.9/5
                </span>
                <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-indigo-100 text-sm">Average Rating</p>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-white">
                200+
              </div>
              <p className="text-indigo-100 text-sm">Client Reviews</p>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-white">
                97%
              </div>
              <p className="text-indigo-100 text-sm">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonials placeholder */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Video Testimonials"
              title="Hear Their Stories"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <ScrollReveal key={i}>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-200 to-indigo-100 flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <div className="h-0 w-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-indigo-600 ml-1" />
                    </div>
                    <p className="text-sm text-slate-500">
                      Video Testimonial {i}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Written testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Written Reviews"
              title="In Their Own Words"
            />
          </ScrollReveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t) => (
              <div key={t.id} className="break-inside-avoid">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Become Our Next Success Story?"
        subtitle="Join 500+ home service businesses that trust LeadScale to drive their growth."
      />
    </>
  );
}
