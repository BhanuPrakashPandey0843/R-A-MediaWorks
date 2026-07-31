import type { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    slug: "branding",
    title: "Branding",
    shortDescription:
      "Identity systems built to hold their shape across every surface.",
    description:
      "We design brand identities from first principles — strategy, naming, visual language, and voice — so every touchpoint feels inevitable, not decorative.",
    icon: "Palette",
    capabilities: [
      "Brand strategy & positioning",
      "Visual identity systems",
      "Naming & verbal identity",
      "Brand guidelines",
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    shortDescription: "Editorial-grade content calendars that compound.",
    description:
      "Platform-native content strategy and production that builds an audience deliberately, not accidentally, with a consistent point of view.",
    icon: "Share2",
    capabilities: [
      "Content strategy & calendars",
      "Community management",
      "Platform-native creative",
      "Performance reporting",
    ],
  },
  {
    slug: "website-and-content",
    title: "Website & Content",
    shortDescription: "Sites and stories designed to convert attention.",
    description:
      "From information architecture to editorial content, we build web experiences that read as premium as the brand they represent.",
    icon: "Globe",
    capabilities: [
      "Web design & development",
      "Copywriting & editorial",
      "SEO foundations",
      "CMS enablement",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Full-funnel campaigns measured against real growth.",
    description:
      "Paid, owned, and earned media orchestrated together, with attribution that tells you what actually moved the business forward.",
    icon: "LineChart",
    capabilities: [
      "Paid media strategy",
      "Marketing automation",
      "Analytics & attribution",
      "Conversion optimization",
    ],
  },
  {
    slug: "business-communication",
    title: "Business Communication",
    shortDescription: "Internal and stakeholder messaging that lands.",
    description:
      "Executive communications, investor narratives, and internal change messaging, written with the same care as public-facing brand work.",
    icon: "Users",
    capabilities: [
      "Executive communications",
      "Investor & stakeholder decks",
      "Internal change messaging",
      "Speechwriting",
    ],
  },
  {
    slug: "pr-and-media-outreach",
    title: "PR & Media Outreach",
    shortDescription: "Earned coverage built on genuine relationships.",
    description:
      "Strategic media relations and press campaigns that place your story in front of the right audiences, not just the widest ones.",
    icon: "Megaphone",
    capabilities: [
      "Press strategy & outreach",
      "Media training",
      "Launch campaigns",
      "Reputation monitoring",
    ],
  },
  {
    slug: "video-production",
    title: "Video Production",
    shortDescription: "Cinematic storytelling from concept to final cut.",
    description:
      "Brand films, campaign content, and documentary-style storytelling, produced with a film-first standard of craft.",
    icon: "Video",
    capabilities: [
      "Creative concepting",
      "Production & direction",
      "Post-production & motion",
      "Multi-format delivery",
    ],
  },
  {
    slug: "crisis-communication",
    title: "Crisis Communication",
    shortDescription: "Calm, precise counsel when it matters most.",
    description:
      "Rapid-response messaging frameworks and counsel that protect reputation and trust when the stakes are highest.",
    icon: "ShieldAlert",
    capabilities: [
      "Crisis messaging frameworks",
      "Rapid-response support",
      "Stakeholder alignment",
      "Post-crisis reputation repair",
    ],
  },
];
