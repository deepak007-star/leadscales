"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Target, BarChart3, Play, X } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import { industryImages } from "@/data/images";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  PhoneCall,
  Target,
  BarChart3,
};

interface SolutionSectionProps {
  solution: IndustryData["solution"];
  color: string;
  industrySlug: string;
}

export function SolutionSection({ solution, color, industrySlug }: SolutionSectionProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const images = industryImages[industrySlug];

  return (
    <>
      <section id="solutions" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p
                className="section-label"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${color}, var(--color-secondary))`,
                }}
              >
                One Solution
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
                {solution.headline}
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                {solution.description}
              </p>
              <a
                href="/contact"
                className="btn-pill btn-pill-primary mt-6 inline-flex text-sm"
                style={{ backgroundColor: color }}
              >
                {solution.cta}
              </a>
            </div>

            {/* Right: Video thumbnail */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <button
                onClick={() => setVideoOpen(true)}
                className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/10"
              >
                <Image
                  src={images.hero}
                  alt="Watch how it works"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="h-20 w-20 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-block">
                    See how it works
                  </p>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {solution.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] || PhoneCall;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 p-7 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Icon with image background */}
                    <div className="relative h-14 w-14 rounded-2xl overflow-hidden mb-5">
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: `${color}15` }}
                      />
                      <div className="relative h-full w-full flex items-center justify-center">
                        <Icon className="h-6 w-6" style={{ color }} />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${images.video}?autoplay=1`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
