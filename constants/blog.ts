export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

/**
 * Editorial content, written in the same newsroom-disciplined voice as the
 * rest of the site — short, structural, story-led. Each post maps loosely
 * to one of the 8 services so the blog reinforces what R&A actually does.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "being-seen-vs-scrolled-past",
    title: "The Difference Between Being Seen and Being Scrolled Past",
    date: "2026-07-14",
    category: "Brand Storytelling",
    readTime: "5 min read",
    excerpt:
      "Attention is not the same as impact. Here's what separates a feed post people scroll past from one that actually changes how they see your brand.",
    content: [
      "Most small and mid-size businesses don't have an attention problem. They have a memory problem — people see the post, feel nothing in particular, and scroll on. Nothing was said that couldn't have come from any other company in the category.",
      "Being seen is a metric. Being remembered is a decision, made in the first line of copy, the first frame of video, the first three words of a headline. It's the difference between filling a content calendar and telling a story that has a point of view.",
      "The businesses that earn attention and keep it aren't posting more. They're saying something only they could say, in a voice only they have — and they're saying it with enough discipline that it reads as confident, not loud.",
      "That's the whole job of a communications studio: not to make more noise, but to make the signal impossible to mistake for anyone else's.",
    ],
  },
  {
    slug: "every-brand-needs-an-editor",
    title: "Every Brand Needs an Editor, Not Just a Content Calendar",
    date: "2026-06-22",
    category: "Branding",
    readTime: "4 min read",
    excerpt:
      "A content calendar tells you when to post. An editor tells you whether you should. Most brands are missing the second voice.",
    content: [
      "A calendar answers a scheduling question. An editor answers a judgment question: does this sound like us, does it say anything new, and does it earn the reader's time. Most in-house teams have plenty of the first and almost none of the second.",
      "Newsrooms have understood this for a century — a story doesn't run because it's ready, it runs because an editor decided it was worth running. Brands that borrow that discipline stop publishing filler and start publishing signal.",
      "In practice, that means fewer posts, tighter headlines, and a house style strict enough that a stranger could recognize your brand from a single sentence with the logo removed. That's what an editor protects.",
    ],
  },
  {
    slug: "pitch-editors-actually-read",
    title: "The Anatomy of a Pitch Editors Actually Read",
    date: "2026-05-30",
    category: "PR & Media Outreach",
    readTime: "6 min read",
    excerpt:
      "Most pitches die in the first sentence. A working journalist's inbox rewards precision, not enthusiasm — here's the structure that earns the open.",
    content: [
      "A reporter scans a pitch in seconds, not minutes. If the first sentence doesn't contain the actual news — the specific, verifiable thing that happened or is about to — the rest of the email is wasted effort, however well written.",
      "The pitches that get read share a structure: the news up front, the relevance to that specific publication's beat second, and the proof — data, quote, visual — third. Everything else, including the brand's own enthusiasm about itself, belongs below the fold or not at all.",
      "Sharp pitching isn't about sounding impressive. It's about respecting how little time the person on the other end has, and using every one of your sentences to make their decision easier.",
    ],
  },
  {
    slug: "crisis-communication-first-hour",
    title: "Crisis Communication: What to Say in the First Hour",
    date: "2026-05-09",
    category: "Crisis Communication",
    readTime: "5 min read",
    excerpt:
      "The first public statement after a crisis sets the tone for everything that follows. Composure, not speed, is what actually protects the brand.",
    content: [
      "The instinct in a crisis is to say something immediately, to fill the silence before someone else fills it for you. The instinct is usually wrong. The first hour should be spent confirming facts, not drafting a statement built on assumptions.",
      "When the first statement does go out, it should do three things and nothing more: acknowledge what's known, say plainly what's being done about it, and commit to a specific time for the next update. Speculation, blame, and over-promising all belong nowhere near it.",
      "Composure reads as competence. A brand that communicates clearly and briefly under pressure earns more trust in that first hour than one that says more but says it less carefully.",
    ],
  },
  {
    slug: "short-form-video-is-a-discipline",
    title: "Short-Form Video Isn't a Trend. It's a Discipline.",
    date: "2026-04-18",
    category: "Video Production",
    readTime: "4 min read",
    excerpt:
      "Thirty seconds is not a limitation — it's a structural constraint that forces clarity most brands never reach in a five-minute video.",
    content: [
      "Treating short-form video as a lesser, faster version of a traditional video misses what makes it work. Thirty seconds doesn't leave room for a slow build — the idea has to be clear by the third second, or the viewer is already gone.",
      "That constraint is useful. It forces a brand to know, precisely, what it's actually trying to say — no padding, no scene that exists just because it looks nice. Every frame has to earn its place.",
      "Shot and edited with that kind of intent, a thirty-second video can carry more brand clarity than a full campaign built without a point of view. The discipline isn't a workaround for a short attention span — it's good editing, at any length.",
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
