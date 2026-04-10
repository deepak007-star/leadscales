"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Thermometer,
  Wrench,
  Home,
  TreePine,
  Stethoscope,
  Building2,
  Zap,
  ArrowRight,
  Phone,
} from "lucide-react";
import { industries } from "@/data/industries";
import { homeImages, industryImages } from "@/data/images";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string; color?: string; style?: React.CSSProperties }>> = {
  hvac: Thermometer,
  plumbing: Wrench,
  roofing: Home,
  gardening: TreePine,
  dentist: Stethoscope,
  "real-estate-agent": Building2,
  electrician: Zap,
};

export function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const active = industries[activeIndex];

  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{
        ["--accent" as string]: active.color,
        ["--accent-light" as string]: active.colorLight,
        ["--accent-dark" as string]: active.colorDark,
      }}
    >
      <Header industryColor={active.color} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with animated crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={industryImages[active.slug].hero}
              alt={active.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)`,
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background: `radial-gradient(ellipse at 60% 30%, ${active.color}, transparent 65%)`,
            }}
          />
        </AnimatePresence>

        <div className="relative mx-auto max-w-[73rem] px-6 lg:px-8 py-32 lg:py-40 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={mounted ? { opacity: 0 } : undefined}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="section-label mb-6"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${active.color}, var(--color-secondary))`,
                }}
              >
                Marketing Made for Pros
              </p>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white">
                Digital marketing{" "}
                <span className="block">
                  solutions for{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={active.slug}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${active.color}, var(--color-secondary))`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {active.name.toLowerCase()}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <AnimatePresence mode="wait">
                <motion.p
                  key={active.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
                >
                  {active.heroDescription}
                </motion.p>
              </AnimatePresence>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/${active.slug}`}
                  className="btn-pill btn-pill-primary inline-flex text-base"
                  style={{ backgroundColor: active.color }}
                >
                  Explore {active.name} Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-pill btn-pill-outline inline-flex text-base"
                  style={{ color: active.color, borderColor: active.color }}
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>

              {/* Accolades */}
              <div className="mt-12 flex flex-wrap gap-4">
                {active.accolades.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm"
                  >
                    <div
                      className="h-5 w-5 rounded flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ backgroundColor: active.color }}
                    >
                      {a.label.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-white/70">{a.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Industry selector */}
            <div>
              <p className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">
                Select your industry
              </p>
              <div className="space-y-3">
                {industries.map((ind, i) => {
                  const Icon = iconMap[ind.slug] || Wrench;
                  const isActive = i === activeIndex;
                  return (
                    <motion.button
                      key={ind.slug}
                      onClick={() => setActiveIndex(i)}
                      whileHover={{ x: 4 }}
                      className={`w-full text-left rounded-2xl p-5 transition-all duration-300 border ${
                        isActive
                          ? "border-white/20 bg-white/10 backdrop-blur-sm"
                          : "border-transparent bg-white/5 hover:bg-white/8"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Industry thumbnail */}
                        <div
                          className="relative h-12 w-12 rounded-xl overflow-hidden shrink-0"
                        >
                          <Image
                            src={homeImages.industryCards[ind.slug]}
                            alt={ind.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                          <div
                            className="absolute inset-0 mix-blend-overlay transition-opacity"
                            style={{
                              backgroundColor: isActive ? ind.color : "transparent",
                              opacity: isActive ? 0.5 : 0,
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-lg font-semibold text-white">
                            {ind.name}
                          </h3>
                          <p className="text-sm text-gray-400 truncate">
                            {ind.tagline}
                          </p>
                        </div>
                        <ArrowRight
                          className="h-5 w-5 shrink-0 transition-colors"
                          style={{ color: isActive ? ind.color : "rgba(255,255,255,0.3)" }}
                        />
                      </div>

                      {/* Expanded content for active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-white/10">
                              <div className="flex gap-4">
                                {ind.successStories.slice(0, 2).map((s, si) => (
                                  <div key={si} className="flex-1">
                                    <span
                                      className="font-heading text-2xl font-bold"
                                      style={{ color: ind.color }}
                                    >
                                      {s.stat}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {s.statLabel}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <Link
                                href={`/${ind.slug}`}
                                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                                style={{ color: ind.color }}
                              >
                                View {ind.name} Solutions
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Home Service Clients" },
              { value: "3.2M+", label: "Leads Generated" },
              { value: "12x", label: "Average ROI" },
              { value: "97%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl lg:text-4xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries overview with images */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-label">Industries We Serve</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Marketing built for your specific trade
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We don&apos;t do generic marketing. Every strategy is built specifically
              for your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => {
              return (
                <Link
                  key={ind.slug}
                  href={`/${ind.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/50"
                >
                  {/* Card image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={homeImages.industryCards[ind.slug]}
                      alt={ind.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay"
                      style={{ backgroundColor: ind.color }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {ind.tagline}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: ind.color }}
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA with background image */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src={homeImages.heroBackground}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{
            background: `radial-gradient(ellipse at center, var(--color-primary), transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-[60rem] px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to grow your home service business?
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Book a free strategy session and see exactly how we&apos;ll fill your pipeline.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="btn-pill btn-pill-primary text-base"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-pill btn-pill-outline text-base"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
