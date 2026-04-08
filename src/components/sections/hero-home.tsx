"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Search,
  MousePointerClick,
  Globe,
} from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function HeroHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.1),transparent_70%)]" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial={mounted ? "hidden" : undefined}
            animate="visible"
          >
            <motion.div variants={mounted ? fadeInUp : undefined}>
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Trusted by 500+ Home Service Pros
              </span>
            </motion.div>

            <motion.h1
              variants={mounted ? fadeInUp : undefined}
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12]"
            >
              <span className="text-white">Grow Your </span>
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Home Service
              </span>
              <br />
              <span className="text-white">Business with Proven</span>
              <br />
              <span className="relative text-white">
                Digital Marketing
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8.5C50 2.5 150 2.5 298 8.5" stroke="url(#underline-grad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="underline-grad" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#818CF8" />
                      <stop offset="1" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={mounted ? fadeInUp : undefined}
              className="mt-6 max-w-lg text-base text-slate-300 leading-relaxed"
            >
              We specialize in marketing for{" "}
              <span className="text-white font-medium">HVAC, plumbing, electrical,</span>{" "}
              and <span className="text-white font-medium">roofing</span> companies — delivering more booked jobs, more phone calls, and consistent revenue growth.
            </motion.p>

            <motion.div
              variants={mounted ? fadeInUp : undefined}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-6 py-5 rounded-xl shadow-lg shadow-indigo-600/25"
              >
                <Link href="/contact">
                  Get Your Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-sm px-6 py-5 rounded-xl bg-transparent"
              >
                <Link href="/case-studies">
                  <Play className="mr-2 h-4 w-4" />
                  See Our Results
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={mounted ? fadeInUp : undefined}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-400">
                  <span className="text-white font-semibold">500+</span> Clients
                </span>
              </div>
              <div className="h-4 w-px bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-white font-semibold">4.9/5</span> Rating
              </div>
              <div className="h-4 w-px bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-white font-semibold">97%</span> Retention
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={mounted ? { opacity: 0, x: 40 } : undefined}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] text-slate-400">Dashboard</p>
                  <p className="text-xs font-semibold text-white">Lead Analytics</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium bg-emerald-400/10 rounded-full px-2 py-0.5">
                  <TrendingUp className="h-2.5 w-2.5" />
                  +312%
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { label: "Total Leads", value: "2,847", icon: Users, color: "text-indigo-400" },
                  { label: "Conversion", value: "8.5%", icon: BarChart3, color: "text-sky-400" },
                  { label: "Revenue", value: "$245K", icon: TrendingUp, color: "text-emerald-400" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/6 border border-white/6 p-2.5">
                    <stat.icon className={`h-3.5 w-3.5 ${stat.color} mb-1.5`} />
                    <p className="text-base font-bold text-white">{stat.value}</p>
                    <p className="text-[9px] text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-white/4 border border-white/6 p-3">
                <p className="text-[10px] text-slate-400 mb-2">Monthly Leads</p>
                <div className="flex items-end gap-1.5 h-20">
                  {[35, 52, 48, 72, 65, 88, 78, 95, 82, 110, 98, 125].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600 to-indigo-400"
                      style={{ height: `${(h / 125) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5 text-[8px] text-slate-500">
                  <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { label: "SEO", value: "1,205 leads", icon: Search, color: "bg-indigo-500" },
                  { label: "PPC", value: "892 leads", icon: MousePointerClick, color: "bg-sky-500" },
                  { label: "GBP", value: "750 leads", icon: Globe, color: "bg-emerald-500" },
                ].map((ch) => (
                  <div key={ch.label} className="flex items-center gap-1.5 rounded-lg bg-white/4 px-2.5 py-1.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${ch.color}`} />
                    <div>
                      <p className="text-[9px] font-medium text-white">{ch.label}</p>
                      <p className="text-[8px] text-slate-500">{ch.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-14 rounded-xl bg-white shadow-xl shadow-black/10 border border-slate-100 p-2.5 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-900">+47 Leads Today</p>
                <p className="text-[9px] text-slate-500">Above target by 23%</p>
              </div>
            </div>

            <div className="absolute -right-3 bottom-16 rounded-xl bg-white shadow-xl shadow-black/10 border border-slate-100 p-2.5 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Star className="h-3.5 w-3.5 text-indigo-600 fill-indigo-600" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-900">New 5-Star Review</p>
                <p className="text-[9px] text-slate-500">Google Business Profile</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
