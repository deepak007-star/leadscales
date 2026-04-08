"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { FAQSection } from "@/components/sections/faq-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";
import { generalFaqs } from "@/data/faq";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Let's Grow Your Business"
        subtitle="Ready to generate more leads and revenue? Get in touch for a free marketing audit and custom growth strategy."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
                    <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-slate-600">
                      We&apos;ve received your message and will be in touch within 24
                      hours. In the meantime, feel free to explore our{" "}
                      <a
                        href="/case-studies"
                        className="text-indigo-600 font-medium hover:underline"
                      >
                        case studies
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        <option value="seo">SEO</option>
                        <option value="ppc">PPC Advertising</option>
                        <option value="web-design">Web Design</option>
                        <option value="social-media">Social Media</option>
                        <option value="gbp">GBP Optimization</option>
                        <option value="reputation">
                          Reputation Management
                        </option>
                        <option value="full-service">
                          Full Service Package
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your business and goals..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 space-y-6">
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    Get in Touch
                  </h3>
                  <div className="space-y-5">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {siteConfig.phone}
                        </p>
                        <p className="text-xs text-slate-500">Call us directly</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {siteConfig.email}
                        </p>
                        <p className="text-xs text-slate-500">
                          Email us anytime
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {siteConfig.address}
                        </p>
                        <p className="text-xs text-slate-500">Our office</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          Mon-Fri: 8am - 6pm CST
                        </p>
                        <p className="text-xs text-slate-500">Business hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-200 to-indigo-100 flex items-center justify-center mt-6">
                    <MapPin className="h-8 w-8 text-slate-400" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Common Questions"
        subtitle="Everything you need to know about getting started."
        faqs={generalFaqs.slice(0, 4)}
      />
    </>
  );
}
