"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Everything You Need to Dominate Your Market"
            subtitle="From SEO to PPC, web design to reputation management — we provide the complete marketing toolkit for home service businesses."
          />
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
