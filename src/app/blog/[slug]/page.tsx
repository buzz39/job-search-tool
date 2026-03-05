import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { AdSenseScript, AdUnit } from "@/components/AdSense";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jobsearchquerybuilder.com";
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      <AdSenseScript />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Main content */}
          <article className="flex-1 max-w-3xl">
            <Link href="/blog" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">← Back to Blog</Link>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>

            {/* In-content ad */}
            <AdUnit slot="blog-top" className="mb-6" />

            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />

            {/* Bottom ad */}
            <AdUnit slot="blog-bottom" className="mt-8" />

            {/* CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Find Your Dream Job?</h3>
              <p className="text-sm opacity-90 mb-4">Use our free Job Search Query Builder to create powerful Boolean search queries.</p>
              <Link href="/" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:shadow-lg transition-all">
                Try the Query Builder →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-20 space-y-6">
              <AdUnit slot="sidebar" className="mb-4" />
              {allPosts.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-sm mb-3">Related Posts</h3>
                  <div className="space-y-3">
                    {allPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="block text-sm text-gray-700 hover:text-primary transition-colors">
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">🔍 Job Search Tool</h3>
                <p className="text-xs text-gray-600 mb-3">Build powerful Boolean search queries for LinkedIn, Indeed, and more.</p>
                <Link href="/" className="text-primary text-xs font-semibold hover:underline">Try it free →</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
