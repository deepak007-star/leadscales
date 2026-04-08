import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { services } from "@/data/services";
import {
  Globe,
  Share2,
  Link2,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
  ],
  services: services.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  })),
  industries: [
    { label: "HVAC Marketing", href: "/services" },
    { label: "Plumbing Marketing", href: "/services" },
    { label: "Electrical Marketing", href: "/services" },
    { label: "Roofing Marketing", href: "/services" },
    { label: "Landscaping Marketing", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Globe, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Share2, href: siteConfig.socials.twitter, label: "Twitter" },
  { icon: Link2, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: ExternalLink, href: siteConfig.socials.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-heading font-bold text-lg">
                L
              </div>
              <span className="font-heading text-xl font-bold text-white">
                LeadScale
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              The #1 marketing agency for home service businesses. More leads,
              more calls, more growth.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-indigo-400" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-indigo-400" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-indigo-400 mt-0.5" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
