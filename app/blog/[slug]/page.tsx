import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BLOG_POSTS, getPostBySlug, formatPostDate } from "@/constants/blog";
import { SITE } from "@/constants/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} — ${SITE.name}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-mist-600 transition-colors duration-300 hover:text-brand-gold-600"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <span className="inline-flex items-center rounded-full bg-brand-gold-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold-600">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-mist-500">
            <Calendar className="size-3.5" />
            {formatPostDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-mist-500">
            <Clock className="size-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-display mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-mist-700">
          {post.excerpt}
        </p>

        <div className="rule-gold mt-10" />

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-mist-700 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-mist-300/70 bg-ivory p-8 text-center sm:p-10">
          <p className="font-display text-xl font-bold tracking-tight text-ink">
            Ready to tell your story?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mist-700">
            Let&apos;s talk about how R&A MediaWorks can help you find your voice.
          </p>
          <Link
            href="/#contact"
            style={{
              backgroundImage:
                "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))",
            }}
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-brand-navy-950 shadow-[0_14px_30px_-12px_rgba(198,161,91,0.6)] transition-[filter] duration-300 hover:brightness-110"
          >
            Book a Consultation
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-mist-300/70 pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-600">
              Keep Reading
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-mist-300/70 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(11,18,32,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-400/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-mist-600">
                    {p.category}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-bold leading-snug tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold-600">
                    Read more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
