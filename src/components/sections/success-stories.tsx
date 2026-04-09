"use client";

import { motion } from "framer-motion";
import type { IndustryData } from "@/data/industries";

interface SuccessStoriesProps {
  stories: IndustryData["successStories"];
  color: string;
}

export function SuccessStories({ stories, color }: SuccessStoriesProps) {
  return (
    <section id="success" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p
            className="section-label"
            style={{
              backgroundImage: `linear-gradient(135deg, ${color}, var(--color-secondary))`,
            }}
          >
            Client Success
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Results that speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group"
            >
              {/* Company label */}
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: color }}
                >
                  {story.company.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {story.company}
                </span>
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span
                  className="font-heading text-5xl lg:text-6xl font-bold"
                  style={{ color }}
                >
                  {story.stat}
                </span>
                <p className="text-base text-gray-600 font-medium mt-1">
                  {story.statLabel}
                </p>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-500 leading-relaxed italic">
                &ldquo;{story.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
