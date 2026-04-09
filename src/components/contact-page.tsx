"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/constants";
import { homeImages } from "@/data/images";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Header industryColor="#007FFD" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <Image
          src={homeImages.heroBackground}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />

        <div className="relative mx-auto max-w-[73rem] px-6 lg:px-8">
          <p className="section-label mb-4">Get Started</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Let&apos;s grow your business together
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            Book a free strategy session. No contracts, no obligations — just a
            clear plan to fill your pipeline with qualified leads.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center">
                  <CheckCircle className="h-14 w-14 text-green-500 mx-auto mb-5" />
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                    Thank you!
                  </h2>
                  <p className="text-gray-600">
                    We&apos;ve received your message and will be in touch within 24
                    hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                    Schedule Your Free Strategy Session
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form and our team will reach out within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Phone *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(555) 123-4567"
                          className="flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          className="flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Your Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        className="flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                      >
                        <option value="">Select your industry...</option>
                        <option value="hvac">HVAC</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="roofing">Roofing</option>
                        <option value="gardening">Gardening / Landscaping</option>
                        <option value="other">Other Home Service</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Tell us about your business
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="What are your goals? How many leads are you looking for per month?"
                        className="flex w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-pill btn-pill-primary text-base w-full sm:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      Schedule My Free Session
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-gray-400 mt-2">
                      By submitting, you agree to receive communications from
                      LeadScale. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 space-y-6 sticky top-28">
                <h3 className="font-heading text-lg font-semibold text-gray-900">
                  Get in Touch
                </h3>
                <div className="space-y-5">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-light)] shrink-0">
                      <Phone className="h-5 w-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                        {siteConfig.phone}
                      </p>
                      <p className="text-xs text-gray-500">Call us directly</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-light)] shrink-0">
                      <Mail className="h-5 w-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                        {siteConfig.email}
                      </p>
                      <p className="text-xs text-gray-500">Email us anytime</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-light)] shrink-0">
                      <Clock className="h-5 w-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Mon–Fri: 8am – 6pm CST
                      </p>
                      <p className="text-xs text-gray-500">Business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-light)] shrink-0">
                      <MapPin className="h-5 w-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Austin, TX
                      </p>
                      <p className="text-xs text-gray-500">Serving all of US & Canada</p>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">
                    Trusted Partners
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Google Partner", "Meta Partner", "Microsoft Ads"].map(
                      (p) => (
                        <span
                          key={p}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-600"
                        >
                          <span className="h-4 w-4 rounded bg-[var(--color-primary)] flex items-center justify-center text-[8px] text-white font-bold">
                            {p.charAt(0)}
                          </span>
                          {p}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
