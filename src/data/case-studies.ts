import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "comfort-air-hvac",
    title: "How Comfort Air HVAC Grew Revenue 312% in 6 Months",
    company: "Comfort Air HVAC",
    industry: "HVAC",
    services: ["SEO", "PPC", "Web Design"],
    image: "/images/case-studies/hvac.jpg",
    featured: true,
    challenge:
      "Comfort Air was a well-established HVAC company with 15 years of experience, but their online presence was virtually non-existent. They were losing market share to newer competitors who had invested heavily in digital marketing. Their website was outdated, they had no Google Ads presence, and their Google Business Profile was incomplete.",
    solution:
      "We launched a comprehensive digital transformation: a new conversion-optimized website, aggressive local SEO campaign, and targeted Google Ads for high-intent HVAC keywords. We also optimized their Google Business Profile and implemented an automated review generation system.",
    results: [
      { label: "Organic Traffic Increase", value: "+312%" },
      { label: "Monthly Leads", value: "150+" },
      { label: "Cost Per Lead", value: "-45%" },
      { label: "Revenue Growth", value: "+280%" },
    ],
    testimonial: {
      quote:
        "LeadScale completely transformed our business. We went from struggling to keep our technicians busy to having a 2-week waitlist. The ROI has been incredible.",
      author: "Mike Johnson",
      role: "Owner, Comfort Air HVAC",
    },
  },
  {
    slug: "precision-plumbing",
    title: "Precision Plumbing: From 10 to 85 Leads Per Month",
    company: "Precision Plumbing",
    industry: "Plumbing",
    services: ["SEO", "GBP Optimization", "Reputation Management"],
    image: "/images/case-studies/plumbing.jpg",
    featured: true,
    challenge:
      "Precision Plumbing was getting most of their business from word-of-mouth referrals. While their service quality was excellent, they had minimal online visibility and were missing out on a huge volume of potential customers searching online for plumbing services.",
    solution:
      "We focused on building their local search presence through comprehensive SEO and Google Business Profile optimization. We also implemented a review generation campaign that grew their Google reviews from 23 to over 200 in just 8 months.",
    results: [
      { label: "Monthly Leads", value: "85+" },
      { label: "Google Reviews", value: "200+" },
      { label: "Map Pack Rankings", value: "Top 3" },
      { label: "Revenue Growth", value: "+195%" },
    ],
    testimonial: {
      quote:
        "We used to rely entirely on referrals. Now our phone rings constantly with new customers who found us on Google. Best investment we've ever made.",
      author: "Sarah Martinez",
      role: "Owner, Precision Plumbing",
    },
  },
  {
    slug: "spark-electric",
    title: "Spark Electric: Dominating Local Search in a Competitive Market",
    company: "Spark Electric",
    industry: "Electrical",
    services: ["PPC", "Web Design", "Social Media"],
    image: "/images/case-studies/electrical.jpg",
    featured: true,
    challenge:
      "Spark Electric was competing in a saturated market with over 50 electrical contractors in their service area. Their previous marketing agency was burning through their ad budget with poor targeting and a website that converted less than 1% of visitors.",
    solution:
      "We rebuilt their website with a focus on conversion optimization, redesigned their PPC campaigns with granular geographic targeting, and launched a social media strategy showcasing their residential and commercial work.",
    results: [
      { label: "Conversion Rate", value: "8.5%" },
      { label: "Cost Per Lead", value: "$18" },
      { label: "Monthly Revenue", value: "+$45K" },
      { label: "Ad Spend ROI", value: "14x" },
    ],
    testimonial: {
      quote:
        "The difference between our old agency and LeadScale is night and day. We're spending less on ads but getting 5x more leads. They truly understand the home service industry.",
      author: "David Chen",
      role: "CEO, Spark Electric",
    },
  },
  {
    slug: "summit-roofing",
    title: "Summit Roofing: Building a Digital Lead Machine",
    company: "Summit Roofing",
    industry: "Roofing",
    services: ["SEO", "PPC", "Reputation Management"],
    image: "/images/case-studies/roofing.jpg",
    challenge:
      "Summit Roofing had a strong reputation in their community but was struggling to expand into neighboring cities. Their website ranked on page 3+ for most target keywords, and they had no paid advertising strategy.",
    solution:
      "We developed a multi-city SEO strategy with location-specific landing pages, launched geo-targeted PPC campaigns for each service area, and implemented a systematic approach to collecting and showcasing customer reviews.",
    results: [
      { label: "Service Areas", value: "3→12" },
      { label: "Organic Keywords", value: "500+" },
      { label: "Monthly Leads", value: "120+" },
      { label: "Year-over-Year Growth", value: "+240%" },
    ],
    testimonial: {
      quote:
        "We went from being known in one city to dominating across the entire metro area. LeadScale helped us scale our business beyond what we thought was possible.",
      author: "James Wilson",
      role: "Owner, Summit Roofing",
    },
  },
];
