"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IndustryData } from "@/data/industries";
import { industryImages } from "@/data/images";

interface PartnersProps {
  partners: IndustryData["partners"];
  industryName: string;
  color: string;
  industrySlug: string;
}

export function Partners({ partners, industryName, color, industrySlug }: PartnersProps) {
  const images = industryImages[industrySlug];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="section-label"
              style={{
                backgroundImage: `linear-gradient(135deg, ${color}, var(--color-secondary))`,
              }}
            >
              Working with the Best
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Connected with the right providers {industryName.toLowerCase()} pros count on
            </h2>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm"
                >
                  <div
                    className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {partner.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-700 truncate">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src={images.partnerHero}
                alt={`${industryName} partner services`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{
                  background: `linear-gradient(135deg, ${color}, transparent)`,
                }}
              />
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    500+
                  </div>
                  <div>
                    <p className="font-heading font-bold text-gray-900 text-sm">
                      {industryName} Companies Trust Us
                    </p>
                    <p className="text-xs text-gray-500">
                      Across the United States & Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
