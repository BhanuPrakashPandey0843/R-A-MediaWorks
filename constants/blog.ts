export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  content: string[];
};

/**
 * Launch content: a single placeholder post so the /blog and /blog/[slug]
 * URL structure exists and is indexable now — replace this with real posts
 * as they're written, no routing changes required.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "coming-soon",
    title: "Our Blog Is Coming Soon",
    date: "2026-08-01",
    excerpt:
      "We're building out a home for stories, strategy notes, and behind-the-scenes thinking from R&A MediaWorks. Check back soon.",
    content: [
      "We're building out a home for stories, strategy notes, and behind-the-scenes thinking from R&A MediaWorks.",
      "Soon this space will carry the same newsroom discipline we bring to client work — clear, considered, and worth the read.",
      "Check back soon for our first posts.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
