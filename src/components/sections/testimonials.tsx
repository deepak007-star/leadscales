"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import { industryImages } from "@/data/images";

interface TestimonialsProps {
  testimonials: IndustryData["testimonials"];
  color: string;
  industrySlug: string;
}

export function Testimonials({ testimonials, color, industrySlug }: TestimonialsProps) {
  const images = industryImages[industrySlug];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p
            className="section-label"
            style={{
              backgroundImage: `linear-gradient(135deg, ${color}, var(--color-secondary))`,
            }}
          >
            Featured Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Hear it from the pros who trust us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-gray-200"
            >
              {/* Top: Image banner */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={images.cards[i % images.cards.length]}
                  alt={t.company}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold text-white rounded-full"
                    style={{ backgroundColor: color }}
                  >
                    {t.company}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <Quote
                  className="h-7 w-7 mb-3 opacity-20"
                  style={{ color }}
                />
                <blockquote className="text-lg font-medium text-gray-900 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={images.testimonialAvatars[i % images.testimonialAvatars.length]}
                      alt={t.author}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                    <p className="text-gray-500 text-sm">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
