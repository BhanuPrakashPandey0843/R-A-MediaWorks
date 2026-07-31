export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  coverImage: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
