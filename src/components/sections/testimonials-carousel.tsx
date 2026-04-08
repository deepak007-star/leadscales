"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Don't Just Take Our Word for It"
            subtitle="Hear from the home service business owners who've transformed their growth with LeadScale."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <ScrollReveal key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
