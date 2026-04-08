import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ServiceCard } from "@/components/shared/service-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { services } from "@/data/services";
import { servicesFaqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our complete suite of digital marketing services designed for home service businesses — SEO, PPC, Web Design, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="A complete digital marketing toolkit designed to help home service businesses generate more leads, more calls, and more revenue."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ScrollReveal key={service.slug}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Services FAQ"
        subtitle="Common questions about our marketing services."
        faqs={servicesFaqs}
      />

      <CTASection
        title="Not Sure Which Services You Need?"
        subtitle="Book a free strategy call and we'll build a custom plan for your business."
        buttonText="Let's Talk"
      />
    </>
  );
}
