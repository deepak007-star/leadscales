import type { NavLink, Stat, ProcessStep } from "@/types";

export const siteConfig = {
  name: "LeadScale Service",
  description:
    "The #1 marketing agency for home service businesses. We generate more leads, more calls, and more growth for HVAC, plumbing, electrical, and roofing companies.",
  url: "https://leadscaleservice.com",
  email: "hello@leadscaleservice.com",
  phone: "(555) 123-4567",
  address: "123 Growth Avenue, Suite 200, Austin, TX 78701",
  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SEO", href: "/services/seo" },
      { label: "PPC Advertising", href: "/services/ppc" },
      { label: "Web Design", href: "/services/web-design" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "GBP Optimization", href: "/services/gbp-optimization" },
      { label: "Reputation Management", href: "/services/reputation-management" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats: Stat[] = [
  { value: "500", suffix: "+", label: "Home Service Clients" },
  { value: "3.2", suffix: "M+", label: "Leads Generated" },
  { value: "12", suffix: "x", label: "Average ROI" },
  { value: "97", suffix: "%", label: "Client Retention" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and current marketing efforts to identify the biggest growth opportunities.",
    icon: "Phone",
  },
  {
    step: "02",
    title: "Custom Strategy",
    description:
      "Our team builds a tailored marketing plan designed to maximize leads and ROI for your specific market.",
    icon: "Target",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description:
      "We execute the strategy across all channels, continuously testing and optimizing for peak performance.",
    icon: "Rocket",
  },
  {
    step: "04",
    title: "Scale & Report",
    description:
      "As results come in, we scale what works and provide transparent reporting so you always know your ROI.",
    icon: "TrendingUp",
  },
];
