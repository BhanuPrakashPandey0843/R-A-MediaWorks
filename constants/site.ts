export const SITE = {
  name: "R&A MediaWorks",
  shortName: "R&A",
  tagline: "Global Experience Local Soul",
  description:
    "R&A MediaWorks is a boutique Communications & Branding Studio, home in Southwestern Ontario. We help small and mid-size businesses find their voice and build a presence that earns attention, and keeps it.",
  email: "mediaworkshere@gmail.com",
  phone: "+1 647-339-1987",
  location: "Serving Southwestern Ontario. Available remotely across Canada.",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  },
} as const;

/**
 * Consultation booking CTA.
 *
 * Launch plan: start with a Calendly (or similar) scheduling link so people
 * can book a slot directly. Once the Calendly account is set up, replace
 * `calendlyUrl` below with the real scheduling link — every "Book a
 * Consultation" button in the app reads from this constant, so nothing else
 * needs to change.
 *
 * Until then, `calendlyUrl` is left empty and every CTA falls back
 * automatically to a mailto: link with a pre-filled subject line, per the
 * client's fallback instructions.
 */
const calendlyUrl = "";

const mailtoFallback = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Consultation Request"
)}`;

export const CONSULTATION_LINK = calendlyUrl || mailtoFallback;

// Primary nav. Single-page-scroll layout: every top-level nav item is a
// section on the homepage (see app/page.tsx) and simply scrolls smoothly
// to it — there are no separate page routes for these anymore.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export type Service = {
  title: string;
  description: string;
};

// The 8 offerings, in the order supplied by the client.
export const SERVICES: Service[] = [
  {
    title: "Social Media",
    description: "Content with a point of view, not just a posting schedule.",
  },
  {
    title: "Website & Content",
    description: "Copy that reads like it means it.",
  },
  {
    title: "Branding",
    description: "Identity and narrative built to be remembered.",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategy aimed at the audience that matters, not just the algorithm.",
  },
  {
    title: "Business Communication",
    description: "Writing that carries weight, internally and out.",
  },
  {
    title: "PR & Media Outreach",
    description: "Pitches sharp enough to earn the read.",
  },
  {
    title: "Video Production",
    description: "Short-form storytelling, shot and edited with intent.",
  },
  {
    title: "Crisis Communication",
    description: "Clarity when it's needed most, and composure when it counts.",
  },
];
