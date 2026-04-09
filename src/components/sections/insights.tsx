"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import { industryImages } from "@/data/images";

interface InsightsProps {
  insights: IndustryData["insights"];
  color: string;
  industrySlug: string;
}

export function Insights({ insights, color, industrySlug }: InsightsProps) {
  const images = industryImages[industrySlug];

  return (
    <section id="insights" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p
            className="section-label"
            style={{
              backgroundImage: `linear-gradient(135deg, ${color}, var(--color-secondary))`,
            }}
          >
            Your Competitive Advantage
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            News and insights for your industry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((article, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group block rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={images.insights[i % images.insights.length]}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{article.date}</p>
                <h3 className="font-heading text-lg font-semibold text-gray-900 leading-snug group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h3>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold mt-4 transition-colors"
                  style={{ color }}
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
