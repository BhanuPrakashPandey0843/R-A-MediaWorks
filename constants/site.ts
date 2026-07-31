export const SITE = {
  name: "R&A MediaWorks",
  shortName: "R&A",
  tagline: "A Boutique Communications & Branding Studio",
  description:
    "R&A MediaWorks crafts premium brand identities, communications strategy, and media storytelling for organizations who refuse to look ordinary.",
  email: "hello@ramediaworks.com",
  phone: "+1 (555) 018-2044",
  location: "New York, NY — working with clients worldwide",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
] as const;
