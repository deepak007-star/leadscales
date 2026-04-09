"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IndustryData } from "@/data/industries";
import { industryImages } from "@/data/images";

interface CTASectionProps {
  cta: IndustryData["ctaSection"];
  color: string;
  industrySlug: string;
}

export function CTASection({ cta, color, industrySlug }: CTASectionProps) {
  const images = industryImages[industrySlug];

  return (
    <section
      id="get-started"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src={images.cta}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Gradient tint */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, ${color}, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-[60rem] px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {cta.headline}
          </h2>
          <p className="mt-4 text-xl text-gray-300">{cta.subtext}</p>
          <a
            href="/contact"
            className="btn-pill btn-pill-primary mt-8 inline-flex text-base"
            style={{ backgroundColor: color }}
          >
            {cta.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
