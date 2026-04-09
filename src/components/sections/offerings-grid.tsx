"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import { industryImages } from "@/data/images";

interface OfferingsGridProps {
  offerings: IndustryData["offerings"];
  color: string;
  colorLight: string;
  industrySlug: string;
}

export function OfferingsGrid({ offerings, color, colorLight, industrySlug }: OfferingsGridProps) {
  const images = industryImages[industrySlug];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p
            className="section-label"
            style={{
              backgroundImage: `linear-gradient(135deg, ${color}, var(--color-secondary))`,
            }}
          >
            Own the Block
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Everything you need online to dominate your market
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offerings.map((item, i) => {
            // Some cards get background images
            const hasImage = i === 0 || i === 5;
            const offeringImage = hasImage ? images.offerings[i === 0 ? 0 : 2] : null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.dark
                    ? "text-white min-h-[280px]"
                    : item.accent
                      ? "text-gray-900"
                      : "bg-white text-gray-900 border border-gray-200"
                }`}
                style={
                  item.accent
                    ? { backgroundColor: colorLight }
                    : undefined
                }
              >
                {/* Dark cards get a background image */}
                {item.dark && offeringImage && (
                  <>
                    <Image
                      src={offeringImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/70" />
                  </>
                )}
                {item.dark && !offeringImage && (
                  <div className="absolute inset-0 bg-gray-900" />
                )}

                <div className="relative p-8">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      item.dark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      item.dark ? "text-white/80 hover:text-white" : ""
                    }`}
                    style={!item.dark ? { color } : undefined}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
