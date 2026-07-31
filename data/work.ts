import type { PortfolioItem, ProcessStep, StatItem, TestimonialItem } from "@/types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: "auric-hospitality-rebrand",
    title: "A Full Identity Reset",
    client: "Auric Hospitality Group",
    category: "Branding",
    year: "2025",
    summary:
      "Repositioned a five-property hotel group around a single, elevated brand architecture — from naming through guest-facing collateral.",
    coverImage: "/placeholder-work-1.jpg",
  },
  {
    slug: "meridian-capital-launch",
    title: "Launching a Category",
    client: "Meridian Capital Partners",
    category: "PR & Media Outreach",
    year: "2025",
    summary:
      "A coordinated launch campaign that placed a new investment vehicle in front of institutional press on day one.",
    coverImage: "/placeholder-work-2.jpg",
  },
  {
    slug: "verdant-foods-content",
    title: "A Content Engine, Rebuilt",
    client: "Verdant Foods",
    category: "Social Media",
    year: "2024",
    summary:
      "Twelve months of editorial-grade content strategy that tripled engaged audience without changing the media budget.",
    coverImage: "/placeholder-work-3.jpg",
  },
  {
    slug: "northbridge-crisis-response",
    title: "Steady Counsel Under Pressure",
    client: "Northbridge Health Systems",
    category: "Crisis Communication",
    year: "2024",
    summary:
      "Rapid-response messaging and stakeholder alignment that protected institutional trust during a regulatory event.",
    coverImage: "/placeholder-work-4.jpg",
  },
  {
    slug: "solace-wellness-film",
    title: "A Brand Film, Not a Commercial",
    client: "Solace Wellness",
    category: "Video Production",
    year: "2024",
    summary:
      "A documentary-style brand film that reframed a wellness brand as a movement rather than a product line.",
    coverImage: "/placeholder-work-5.jpg",
  },
  {
    slug: "kensington-partners-site",
    title: "A Site Worthy of the Portfolio",
    client: "Kensington Partners",
    category: "Website & Content",
    year: "2023",
    summary:
      "An editorial web experience for a private equity firm, built to communicate scale without ever feeling loud.",
    coverImage: "/placeholder-work-6.jpg",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We start with listening — your market, your competitors, and the gap between how you're seen and how you want to be seen.",
  },
  {
    index: "02",
    title: "Define",
    description:
      "Strategy and positioning get written down and agreed on before a single visual is made, so every decision after this has a reason.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "Identity, content, and campaign systems are built together, tested against real use cases, not just a presentation deck.",
  },
  {
    index: "04",
    title: "Deliver",
    description:
      "We launch, measure, and stay close — refining the work against real performance instead of walking away after handoff.",
  },
];

export const STATS: StatItem[] = [
  { label: "Brands Repositioned", value: 120, suffix: "+" },
  { label: "Years of Craft", value: 14, suffix: "+" },
  { label: "Press Placements Secured", value: 900, suffix: "+" },
  { label: "Client Retention", value: 96, suffix: "%" },
];

export const INDUSTRIES = [
  "Hospitality & Travel",
  "Financial Services",
  "Health & Wellness",
  "Real Estate",
  "Consumer & Retail",
  "Professional Services",
  "Nonprofit & Institutions",
  "Technology",
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "R&A didn't just redesign our brand — they rebuilt the way we talk about our own company. The difference showed up in the room within weeks.",
    name: "Client Name",
    role: "Chief Marketing Officer, Placeholder Group",
  },
  {
    quote:
      "Every deliverable felt considered. Nothing arrived that hadn't been thought through three times over. That's rare.",
    name: "Client Name",
    role: "Founder, Placeholder Studio",
  },
  {
    quote:
      "They handled a genuinely difficult moment for us with more composure than we had internally. That counsel was worth everything.",
    name: "Client Name",
    role: "Head of Communications, Placeholder Health",
  },
];
