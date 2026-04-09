export interface IndustryData {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  color: string;
  colorLight: string;
  colorDark: string;

  accolades: { label: string }[];

  clientLogos: string[];

  solution: {
    headline: string;
    description: string;
    cta: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };

  offerings: {
    title: string;
    description: string;
    link: string;
    accent?: boolean;
    dark?: boolean;
  }[];

  testimonials: {
    quote: string;
    company: string;
    author: string;
    role: string;
  }[];

  partners: string[];

  ctaSection: {
    headline: string;
    subtext: string;
    buttonText: string;
  };

  successStories: {
    company: string;
    stat: string;
    statLabel: string;
    quote: string;
  }[];

  insights: {
    title: string;
    date: string;
    image: string;
    slug: string;
  }[];
}

export const industries: IndustryData[] = [
  {
    slug: "hvac",
    name: "HVAC",
    tagline: "Maximize your HVAC marketing.",
    heroHeadline: "Your Leads, Your Revenue, Your Growth.",
    heroDescription:
      "Someone looking for HVAC services typically hires a provider in under 4 hours. Make sure they find and choose you with marketing built for heating and cooling professionals.",
    color: "#0EA5E9",
    colorLight: "#E0F2FE",
    colorDark: "#0369A1",

    accolades: [
      { label: "Google Partner" },
      { label: "Meta Business Partner" },
      { label: "Microsoft Advertising" },
    ],

    clientLogos: [
      "ComfortPro HVAC",
      "Arctic Air Solutions",
      "CoolBreeze Heating",
      "Summit Climate",
      "AllSeason Comfort",
      "ProTemp Services",
      "AirWise HVAC",
      "ThermalTech",
    ],

    solution: {
      headline: "Your marketing should drive revenue. Now it does.",
      description:
        "Get an all-in-one marketing solution built specifically for HVAC companies. From emergency AC repair calls to seasonal maintenance campaigns — we handle it all so your techs stay busy year-round.",
      cta: "Explore HVAC Solutions",
      features: [
        {
          icon: "PhoneCall",
          title: "Never miss an emergency call",
          description:
            "24/7 AI-powered call capture and chat ensures every AC breakdown and furnace failure turns into a booked job.",
        },
        {
          icon: "Target",
          title: "Get more high-value installs",
          description:
            "Target homeowners searching for system replacements, new installations, and premium maintenance plans.",
        },
        {
          icon: "BarChart3",
          title: "See exactly what's working",
          description:
            "Real-time dashboards show which campaigns drive calls, which keywords convert, and where every dollar goes.",
        },
      ],
    },

    offerings: [
      {
        title: "Marketing Team",
        description:
          "A dedicated team of HVAC marketing specialists who understand seasonal demand, emergency services, and the competitive landscape of heating and cooling.",
        link: "#",
        dark: true,
      },
      {
        title: "Website",
        description:
          "Fast, mobile-first websites built to convert — with click-to-call, online booking, and emergency service banners that turn visitors into customers.",
        link: "#",
        accent: true,
      },
      {
        title: "Ranking",
        description:
          "Dominate local search for 'AC repair near me', 'furnace installation', and hundreds of high-intent HVAC keywords in your service area.",
        link: "#",
      },
      {
        title: "Reputation",
        description:
          "Automate review collection after every service call. Build the 5-star reputation that makes homeowners choose you over every competitor.",
        link: "#",
      },
      {
        title: "24/7 Lead Capture",
        description:
          "AI-powered chat and call routing ensures you never miss an emergency HVAC lead — even at 2 AM on the hottest day of the year.",
        link: "#",
        accent: true,
      },
      {
        title: "Digital Advertising",
        description:
          "Google Ads, Local Service Ads, and social campaigns targeting homeowners who need HVAC services right now. Every click is a potential job.",
        link: "#",
        dark: true,
      },
    ],

    testimonials: [
      {
        quote:
          "Before working with LeadScale, we were dead in the off-season. Now our techs are booked solid year-round. The ROI has been absolutely incredible for our business.",
        company: "ComfortPro HVAC",
        author: "Mike Johnson",
        role: "Owner",
      },
      {
        quote:
          "The emergency call campaigns alone paid for our entire annual marketing budget in the first quarter. They truly understand the HVAC business.",
        company: "Arctic Air Solutions",
        author: "Sarah Chen",
        role: "Marketing Director",
      },
    ],

    partners: [
      "Google Partner",
      "Meta Business Partner",
      "Microsoft Advertising",
      "ServiceTitan",
      "Housecall Pro",
    ],

    ctaSection: {
      headline: "What would filling your schedule in the slow season do for your bottom line?",
      subtext: "Let's find out.",
      buttonText: "Grow My HVAC Business",
    },

    successStories: [
      {
        company: "ComfortPro HVAC",
        stat: "312%",
        statLabel: "increase in qualified leads",
        quote: "We went from struggling to keep technicians busy to having a 2-week waitlist.",
      },
      {
        company: "Arctic Air Solutions",
        stat: "4.8x",
        statLabel: "return on ad spend",
        quote: "Emergency call campaigns changed everything for our business.",
      },
      {
        company: "CoolBreeze Heating",
        stat: "47%",
        statLabel: "lower cost per lead",
        quote: "We're spending less but getting dramatically more calls than before.",
      },
    ],

    insights: [
      {
        title: "How HVAC Companies Can Fill Their Schedule Year-Round",
        date: "Mar 15, 2026",
        image: "/images/insight-1.jpg",
        slug: "hvac-year-round-schedule",
      },
      {
        title: "5 Google Ads Strategies Every HVAC Company Needs",
        date: "Mar 08, 2026",
        image: "/images/insight-2.jpg",
        slug: "hvac-google-ads-strategies",
      },
      {
        title: "Why Your HVAC Website Isn't Converting (And How to Fix It)",
        date: "Feb 28, 2026",
        image: "/images/insight-3.jpg",
        slug: "hvac-website-conversion",
      },
    ],
  },

  {
    slug: "plumbing",
    name: "Plumbing",
    tagline: "Maximize your plumbing marketing.",
    heroHeadline: "Your Calls, Your Revenue, Your Growth.",
    heroDescription:
      "When a pipe bursts, homeowners hire the first plumber they find — usually within minutes. Our marketing makes sure that plumber is you, day or night.",
    color: "#F59E0B",
    colorLight: "#FEF3C7",
    colorDark: "#B45309",

    accolades: [
      { label: "Google Partner" },
      { label: "Meta Business Partner" },
      { label: "Microsoft Advertising" },
    ],

    clientLogos: [
      "Precision Plumbing",
      "FastFlow Plumbing",
      "Elite Plumbing Co.",
      "DrainPro Services",
      "AquaGuard Plumbing",
      "PipeMaster Pro",
      "RapidResponse Plumbing",
      "ClearDrain Solutions",
    ],

    solution: {
      headline: "Your marketing should drive revenue. Now it does.",
      description:
        "An all-in-one marketing solution built for plumbing companies. Capture emergency calls, build trust with reviews, and fill your pipeline with high-value jobs like repiping, water heaters, and sewer lines.",
      cta: "Explore Plumbing Solutions",
      features: [
        {
          icon: "PhoneCall",
          title: "Capture every emergency call",
          description:
            "AI-powered call routing and live chat means you never lose a burst pipe or sewage backup lead to a competitor — even at midnight.",
        },
        {
          icon: "Target",
          title: "Attract high-value jobs",
          description:
            "Stop competing for $30 drain cleaning jobs. Target homeowners who need repiping, water heater installations, and full plumbing renovations.",
        },
        {
          icon: "BarChart3",
          title: "Track every dollar",
          description:
            "See exactly which campaigns generate calls, which keywords convert, and what your true cost per booked job is.",
        },
      ],
    },

    offerings: [
      {
        title: "Marketing Team",
        description:
          "A dedicated team of plumbing marketing experts who understand emergency service demand, trust-building, and the unique challenges of scaling a plumbing business.",
        link: "#",
        dark: true,
      },
      {
        title: "Website",
        description:
          "Conversion-optimized websites with emergency banners, click-to-call, and online booking — built to turn panicked homeowners into booked service calls.",
        link: "#",
        accent: true,
      },
      {
        title: "Ranking",
        description:
          "Rank #1 for 'plumber near me', 'emergency plumber', and every high-intent keyword that drives real phone calls in your service area.",
        link: "#",
      },
      {
        title: "Reputation",
        description:
          "Homeowners are letting you into their home. Build the 5-star review profile that makes them trust you over every other plumber.",
        link: "#",
      },
      {
        title: "24/7 Lead Capture",
        description:
          "Plumbing emergencies don't wait for business hours. Our AI chat and call system captures leads around the clock so you never miss a job.",
        link: "#",
        accent: true,
      },
      {
        title: "Digital Advertising",
        description:
          "Google Local Service Ads, PPC campaigns, and social advertising targeting homeowners with urgent plumbing needs. Every click counts.",
        link: "#",
        dark: true,
      },
    ],

    testimonials: [
      {
        quote:
          "We went from a one-truck operation to three crews in under a year. LeadScale's marketing was the engine behind our growth. The phone hasn't stopped ringing.",
        company: "Precision Plumbing",
        author: "James Wilson",
        role: "Owner",
      },
      {
        quote:
          "Our average ticket went up 40% because we're now getting the big jobs — repiping, water heaters, sewer lines. Not just drain cleaning anymore.",
        company: "Elite Plumbing Co.",
        author: "Robert Kim",
        role: "Owner",
      },
    ],

    partners: [
      "Google Partner",
      "Meta Business Partner",
      "Microsoft Advertising",
      "ServiceTitan",
      "Housecall Pro",
    ],

    ctaSection: {
      headline: "What would capturing every emergency call in your area do for your business?",
      subtext: "Let's find out.",
      buttonText: "Grow My Plumbing Business",
    },

    successStories: [
      {
        company: "Precision Plumbing",
        stat: "278%",
        statLabel: "more emergency calls captured",
        quote: "Our phone rings constantly with new customers who found us on Google.",
      },
      {
        company: "FastFlow Plumbing",
        stat: "5.2x",
        statLabel: "return on ad spend",
        quote: "The emergency call campaigns changed everything for us.",
      },
      {
        company: "Elite Plumbing Co.",
        stat: "40%",
        statLabel: "higher average ticket",
        quote: "We're getting the big jobs now, not just drain cleaning.",
      },
    ],

    insights: [
      {
        title: "How to Capture More Emergency Plumbing Calls Online",
        date: "Mar 12, 2026",
        image: "/images/insight-1.jpg",
        slug: "emergency-plumbing-calls",
      },
      {
        title: "The Plumber's Guide to Google Local Service Ads",
        date: "Mar 05, 2026",
        image: "/images/insight-2.jpg",
        slug: "plumber-google-lsa",
      },
      {
        title: "Why Reviews Matter More for Plumbers Than Any Other Trade",
        date: "Feb 26, 2026",
        image: "/images/insight-3.jpg",
        slug: "plumber-reviews-matter",
      },
    ],
  },

  {
    slug: "roofing",
    name: "Roofing",
    tagline: "Maximize your roofing marketing.",
    heroHeadline: "Your Projects, Your Revenue, Your Brand.",
    heroDescription:
      "Homeowners spend weeks researching roofers before signing a contract. Our marketing positions you as the trusted choice — so when they're ready, they choose you.",
    color: "#E11D48",
    colorLight: "#FFE4E6",
    colorDark: "#9F1239",

    accolades: [
      { label: "Google Partner" },
      { label: "Meta Business Partner" },
      { label: "Microsoft Advertising" },
    ],

    clientLogos: [
      "Summit Roofing",
      "RoofPro Solutions",
      "StormShield Roofing",
      "Apex Contractors",
      "CrownRoof Co.",
      "SkyLine Roofing",
      "IronTop Roofing",
      "AllWeather Roofs",
    ],

    solution: {
      headline: "Your marketing should drive revenue. Now it does.",
      description:
        "An all-in-one marketing solution for roofing companies. From storm damage leads to full replacements — we fill your pipeline with homeowners ready to sign contracts.",
      cta: "Explore Roofing Solutions",
      features: [
        {
          icon: "PhoneCall",
          title: "Be first after every storm",
          description:
            "Storm-ready campaigns activate within hours of a weather event, capturing the surge in roof inspection and repair searches.",
        },
        {
          icon: "Target",
          title: "Win more full replacements",
          description:
            "Target homeowners actively researching roof replacement, not just patch jobs. Attract the $15K+ projects that grow your business.",
        },
        {
          icon: "BarChart3",
          title: "Cut your cost per lead",
          description:
            "Stop paying $200+ per lead from lead gen companies. Build your own pipeline at a fraction of the cost with measurable ROI.",
        },
      ],
    },

    offerings: [
      {
        title: "Marketing Team",
        description:
          "Roofing marketing specialists who understand storm seasons, long sales cycles, and the competitive dynamics of your market.",
        link: "#",
        dark: true,
      },
      {
        title: "Website",
        description:
          "Professional websites with project galleries, financing calculators, and lead capture forms that convert browsers into signed contracts.",
        link: "#",
        accent: true,
      },
      {
        title: "Ranking",
        description:
          "Rank for 'roofing company near me', 'roof replacement', and 'storm damage repair' to capture homeowners actively searching for roofers.",
        link: "#",
      },
      {
        title: "Reputation",
        description:
          "A roof is a $15K+ investment. Build the review profile that gives homeowners the confidence to trust you with their biggest home improvement decision.",
        link: "#",
      },
      {
        title: "24/7 Lead Capture",
        description:
          "Storms don't wait for business hours. AI-powered chat and call capture ensures you get every lead, even during the chaos of storm season.",
        link: "#",
        accent: true,
      },
      {
        title: "Digital Advertising",
        description:
          "Targeted Google Ads for roof replacements, storm damage repairs, and inspections. Every campaign is designed to generate leads ready to sign.",
        link: "#",
        dark: true,
      },
    ],

    testimonials: [
      {
        quote:
          "After last year's hail season, we booked 3x more jobs than the year before. The storm-ready campaigns LeadScale built for us made all the difference.",
        company: "Summit Roofing",
        author: "Chris Taylor",
        role: "Owner",
      },
      {
        quote:
          "We used to buy leads at $200 a pop. Now we generate our own at a fraction of the cost. Our margins have never been better and we control the pipeline.",
        company: "RoofPro Solutions",
        author: "Amanda Rogers",
        role: "VP of Operations",
      },
    ],

    partners: [
      "Google Partner",
      "Meta Business Partner",
      "Microsoft Advertising",
      "ServiceTitan",
      "CompanyCam",
    ],

    ctaSection: {
      headline: "What would 20% more signed roof contracts do for your bottom line?",
      subtext: "Let's find out.",
      buttonText: "Grow My Roofing Business",
    },

    successStories: [
      {
        company: "Summit Roofing",
        stat: "3x",
        statLabel: "more jobs after storm season",
        quote: "Storm-ready campaigns made all the difference for our business.",
      },
      {
        company: "RoofPro Solutions",
        stat: "60%",
        statLabel: "lower cost per lead",
        quote: "We generate our own leads now at a fraction of the old cost.",
      },
      {
        company: "StormShield Roofing",
        stat: "245%",
        statLabel: "more qualified leads",
        quote: "We went from one city to dominating the entire metro area.",
      },
    ],

    insights: [
      {
        title: "Storm Season Marketing: How to Be First When It Matters",
        date: "Mar 10, 2026",
        image: "/images/insight-1.jpg",
        slug: "storm-season-marketing",
      },
      {
        title: "How Roofers Can Cut Their Cost Per Lead by 50%",
        date: "Mar 03, 2026",
        image: "/images/insight-2.jpg",
        slug: "roofer-cost-per-lead",
      },
      {
        title: "The Complete Guide to Roofing SEO in 2026",
        date: "Feb 24, 2026",
        image: "/images/insight-3.jpg",
        slug: "roofing-seo-guide",
      },
    ],
  },

  {
    slug: "gardening",
    name: "Gardening",
    tagline: "Maximize your landscape marketing.",
    heroHeadline: "Your Clients, Your Revenue, Your Brand.",
    heroDescription:
      "Homeowners looking for landscaping and gardening services want to see your work before they call. Our marketing showcases your best transformations and fills your pipeline with premium clients.",
    color: "#10B981",
    colorLight: "#ECFDF5",
    colorDark: "#047857",

    accolades: [
      { label: "Google Partner" },
      { label: "Meta Business Partner" },
      { label: "Microsoft Advertising" },
    ],

    clientLogos: [
      "Verde Gardens",
      "GreenScape Pro",
      "Bloom Outdoor Living",
      "Phillips Landscaping",
      "NatureWorks Design",
      "EverGreen Services",
      "PrimeLawn Co.",
      "GardenCraft Studio",
    ],

    solution: {
      headline: "Your marketing should drive revenue. Now it does.",
      description:
        "Get an all-in-one marketing solution built for landscaping and gardening companies. Attract premium clients, showcase your transformations, and grow recurring revenue — not just mowing jobs.",
      cta: "Explore Gardening Solutions",
      features: [
        {
          icon: "PhoneCall",
          title: "Never miss a new project",
          description:
            "24/7 AI-powered chat and call capture turns every inquiry into a potential landscape design project or maintenance contract.",
        },
        {
          icon: "Target",
          title: "Get more premium clients",
          description:
            "Target homeowners who want landscape design, garden installations, and outdoor living spaces — not just basic lawn mowing.",
        },
        {
          icon: "BarChart3",
          title: "Make every dollar count",
          description:
            "See exactly which marketing channels drive the highest-value projects and recurring maintenance agreements.",
        },
      ],
    },

    offerings: [
      {
        title: "Marketing Team",
        description:
          "Landscaping marketing specialists who know how to position your business as a premium service — not the cheapest option on the block.",
        link: "#",
        dark: true,
      },
      {
        title: "Website",
        description:
          "Portfolio-driven websites with stunning before/after galleries, service area pages, and quote request forms that convert browsers into clients.",
        link: "#",
        accent: true,
      },
      {
        title: "Ranking",
        description:
          "Rank for 'landscaping near me', 'garden design', and 'lawn care' — the keywords that attract homeowners ready to invest in their outdoor space.",
        link: "#",
      },
      {
        title: "Reputation",
        description:
          "Build the review profile that separates you from commodity lawn care providers. Let your happy clients sell your next project for you.",
        link: "#",
      },
      {
        title: "Social Media",
        description:
          "Stunning before/after transformations, seasonal tips, and targeted ads that position you as the go-to gardening expert in your area.",
        link: "#",
        accent: true,
      },
      {
        title: "Digital Advertising",
        description:
          "Targeted campaigns for landscape design, garden installations, and seasonal cleanup packages. Attract the projects that grow your business.",
        link: "#",
        dark: true,
      },
    ],

    testimonials: [
      {
        quote:
          "We went from mowing lawns to designing outdoor living spaces. LeadScale's marketing attracted the premium clients we always wanted but never knew how to reach.",
        company: "Verde Gardens",
        author: "Elena Rodriguez",
        role: "Owner",
      },
      {
        quote:
          "Our average contract value doubled in 8 months. We're booking landscape design projects instead of competing on price for basic lawn care.",
        company: "Bloom Outdoor Living",
        author: "Maria Santos",
        role: "Owner",
      },
    ],

    partners: [
      "Google Partner",
      "Meta Business Partner",
      "Microsoft Advertising",
      "Jobber",
      "LMN",
    ],

    ctaSection: {
      headline: "What would 20% more maintenance agreements do for your bottom line?",
      subtext: "Let's find out.",
      buttonText: "Grow My Gardening Business",
    },

    successStories: [
      {
        company: "Verde Gardens",
        stat: "95%",
        statLabel: "increase in average contract value",
        quote: "We went from mowing lawns to designing outdoor living spaces.",
      },
      {
        company: "GreenScape Pro",
        stat: "3.6x",
        statLabel: "return on ad spend",
        quote: "Social media became our best lead generation channel.",
      },
      {
        company: "Phillips Landscaping",
        stat: "50%",
        statLabel: "over monthly lead goal",
        quote: "The before/after content they create drives referrals constantly.",
      },
    ],

    insights: [
      {
        title: "How Landscapers Can Attract Premium Clients Online",
        date: "Mar 14, 2026",
        image: "/images/insight-1.jpg",
        slug: "attract-premium-landscaping-clients",
      },
      {
        title: "The Power of Before/After Content for Gardening Companies",
        date: "Mar 07, 2026",
        image: "/images/insight-2.jpg",
        slug: "before-after-content-gardening",
      },
      {
        title: "Year-Round Revenue: Eliminating Seasonal Dips in Landscaping",
        date: "Feb 28, 2026",
        image: "/images/insight-3.jpg",
        slug: "year-round-landscaping-revenue",
      },
    ],
  },
];

export function getIndustry(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}
