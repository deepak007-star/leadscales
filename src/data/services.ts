import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization",
    icon: "Search",
    shortDescription:
      "Dominate local search results and get found by homeowners actively looking for your services.",
    description:
      "Our SEO strategies are built specifically for home service businesses. We optimize your website, Google Business Profile, and local citations to ensure you show up when customers search for services in your area. From technical SEO to content creation, we handle it all so you can focus on running your business.",
    features: [
      "Local SEO & map pack optimization",
      "Technical website audits & fixes",
      "Content strategy & blog writing",
      "Link building & citation management",
      "Keyword research & tracking",
      "Monthly ranking reports",
    ],
    process: [
      { step: "01", title: "Audit", description: "Complete analysis of your current SEO performance and competitor landscape." },
      { step: "02", title: "Optimize", description: "Fix technical issues, optimize pages, and build your local presence." },
      { step: "03", title: "Create", description: "Develop keyword-targeted content that attracts your ideal customers." },
      { step: "04", title: "Grow", description: "Build authority with quality backlinks and ongoing optimization." },
    ],
  },
  {
    slug: "ppc",
    title: "PPC Advertising",
    icon: "MousePointerClick",
    shortDescription:
      "Get instant leads with targeted Google Ads and Local Service Ads managed by home service specialists.",
    description:
      "Stop wasting money on clicks that don't convert. Our PPC team specializes in home service advertising, creating campaigns that target homeowners ready to hire. We manage Google Ads, Local Service Ads, and display campaigns to fill your pipeline with qualified leads.",
    features: [
      "Google Ads management",
      "Local Service Ads (LSA) setup & optimization",
      "Landing page design & A/B testing",
      "Call tracking & lead attribution",
      "Budget optimization & bid management",
      "Weekly performance reports",
    ],
    process: [
      { step: "01", title: "Research", description: "Analyze your market, competitors, and highest-value keywords." },
      { step: "02", title: "Build", description: "Create compelling ads and conversion-optimized landing pages." },
      { step: "03", title: "Launch", description: "Go live with strategic bidding and targeting for maximum ROI." },
      { step: "04", title: "Optimize", description: "Continuously refine campaigns based on real performance data." },
    ],
  },
  {
    slug: "web-design",
    title: "Web Design & Development",
    icon: "Monitor",
    shortDescription:
      "Convert more visitors into customers with fast, modern websites built for home service businesses.",
    description:
      "Your website is your digital storefront. We design and build high-converting websites specifically for home service companies. Fast loading, mobile-first, and optimized for search engines — every site we build is a lead generation machine.",
    features: [
      "Custom responsive design",
      "Mobile-first development",
      "Speed optimization (Core Web Vitals)",
      "Conversion rate optimization",
      "Online booking integration",
      "Ongoing maintenance & support",
    ],
    process: [
      { step: "01", title: "Design", description: "Create a custom design that reflects your brand and converts visitors." },
      { step: "02", title: "Develop", description: "Build your site with clean code, fast performance, and SEO in mind." },
      { step: "03", title: "Test", description: "Rigorous testing across devices, browsers, and speed benchmarks." },
      { step: "04", title: "Launch", description: "Go live and start converting visitors into booked appointments." },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    icon: "Share2",
    shortDescription:
      "Build trust and stay top-of-mind with strategic social media content and community management.",
    description:
      "Social media isn't just about likes — it's about building trust in your community. We create engaging content, manage your social profiles, and run targeted ad campaigns that keep your business top-of-mind when homeowners need a pro.",
    features: [
      "Content creation & scheduling",
      "Facebook & Instagram ad management",
      "Community engagement & response",
      "Review generation campaigns",
      "Before/after project showcases",
      "Monthly analytics & reporting",
    ],
    process: [
      { step: "01", title: "Strategy", description: "Define your social voice, content pillars, and target audience." },
      { step: "02", title: "Create", description: "Produce professional content that showcases your work and expertise." },
      { step: "03", title: "Engage", description: "Build community through consistent posting and active engagement." },
      { step: "04", title: "Amplify", description: "Boost top content with paid campaigns for maximum reach." },
    ],
  },
  {
    slug: "gbp-optimization",
    title: "Google Business Profile",
    icon: "MapPin",
    shortDescription:
      "Maximize your visibility in Google Maps and local search with expert GBP management.",
    description:
      "Your Google Business Profile is often the first impression customers have of your business. We optimize every aspect — from photos and posts to reviews and Q&A — to ensure you stand out in the map pack and attract more calls.",
    features: [
      "Profile optimization & verification",
      "Regular posts & updates",
      "Review management & response",
      "Photo & video optimization",
      "Q&A management",
      "Performance tracking & insights",
    ],
    process: [
      { step: "01", title: "Audit", description: "Review your current GBP and identify optimization opportunities." },
      { step: "02", title: "Optimize", description: "Update every field, add rich media, and optimize for your target keywords." },
      { step: "03", title: "Manage", description: "Regular posts, review responses, and ongoing profile updates." },
      { step: "04", title: "Monitor", description: "Track rankings, calls, and direction requests to measure impact." },
    ],
  },
  {
    slug: "reputation-management",
    title: "Reputation Management",
    icon: "Star",
    shortDescription:
      "Build a 5-star online reputation that turns browsers into buyers and referrals into revenue.",
    description:
      "In home services, your reputation is everything. We help you generate more positive reviews, manage your online presence, and turn your happy customers into your best marketing asset. Our automated review systems make it easy to build and maintain a stellar reputation.",
    features: [
      "Automated review request campaigns",
      "Multi-platform review monitoring",
      "Review response management",
      "Negative review mitigation",
      "Reputation score tracking",
      "Customer feedback surveys",
    ],
    process: [
      { step: "01", title: "Assess", description: "Evaluate your current online reputation across all major platforms." },
      { step: "02", title: "Implement", description: "Set up automated review generation and monitoring systems." },
      { step: "03", title: "Respond", description: "Professionally respond to all reviews to show you care." },
      { step: "04", title: "Grow", description: "Scale your review generation and maintain your 5-star reputation." },
    ],
  },
];
