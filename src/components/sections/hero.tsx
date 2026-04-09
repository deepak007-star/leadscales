"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import { industryImages } from "@/data/images";
import { siteConfig } from "@/lib/constants";

interface HeroProps {
  industry: IndustryData;
}

export function Hero({ industry }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const images = industryImages[industry.slug];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={images.hero}
        alt={`${industry.name} services`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.5) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          background: `radial-gradient(ellipse at 70% 30%, ${industry.color}, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-[73rem] px-6 lg:px-8 py-28 lg:py-32 w-full">
        <motion.div
          initial={mounted ? { opacity: 0 } : undefined}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Section label */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="section-label mb-5"
            style={{
              backgroundImage: `linear-gradient(135deg, ${industry.color}, var(--color-secondary))`,
            }}
          >
            {industry.name} Marketing
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={mounted ? { opacity: 0, y: 30 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            <span className="block text-white">Maximize</span>
            <span
              className="block"
              style={{
                backgroundImage: `linear-gradient(135deg, ${industry.color}, var(--color-secondary))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {industry.heroHeadline}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-4 font-heading text-xl sm:text-2xl text-white/90 font-medium"
          >
            {industry.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
          >
            {industry.heroDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="btn-pill btn-pill-primary text-base"
              style={{ backgroundColor: industry.color }}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-pill btn-pill-outline text-base"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </motion.div>

          {/* Accolades badges */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {industry.accolades.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm"
              >
                <div
                  className="h-5 w-5 rounded-md flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ backgroundColor: industry.color }}
                >
                  {a.label.charAt(0)}
                </div>
                <span className="text-xs font-medium text-white/80">{a.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
