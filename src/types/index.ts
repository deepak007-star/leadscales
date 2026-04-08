export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  shortDescription: string;
  process: { step: string; title: string; description: string }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
  video?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export interface PricingTier {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: { name: string; included: boolean }[];
  popular?: boolean;
  cta: string;
}

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  heroLine: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}
