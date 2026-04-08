import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { BlogCard } from "@/components/shared/blog-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-slate-500">{post.author}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1 text-sm text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Article content placeholder */}
            <article className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-a:text-indigo-600">
              <p>{post.content}</p>
              <p>
                For home service businesses, digital marketing isn&apos;t optional — it&apos;s
                essential. The companies that invest in their online presence today
                will be the ones that thrive tomorrow.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>
                  Invest in local SEO to capture customers searching in your area
                </li>
                <li>
                  Optimize your Google Business Profile for maximum visibility
                </li>
                <li>
                  Use PPC advertising for immediate lead generation while SEO builds
                  momentum
                </li>
                <li>
                  Track your results and double down on what works
                </li>
              </ul>
              <h2>Ready to Get Started?</h2>
              <p>
                If you&apos;re ready to take your home service business&apos;s marketing to the
                next level, we&apos;re here to help. Our team of specialists has helped
                500+ businesses just like yours achieve record-breaking growth.
              </p>
            </article>

            {/* Author bio */}
            <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-200 to-sky-200 flex items-center justify-center shrink-0">
                <span className="font-heading font-bold text-indigo-600">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-heading font-semibold text-slate-900">
                  {post.author}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Marketing expert at LeadScale Service, helping home service
                  businesses grow through proven digital marketing strategies.
                </p>
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 mt-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Related Articles" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <ScrollReveal key={p.slug}>
                <BlogCard post={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want These Strategies Working for You?"
        subtitle="Our team will implement everything you've read about — and more."
      />
    </>
  );
}
