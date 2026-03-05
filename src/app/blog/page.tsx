import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Job Search Tips & Career Advice",
  description: "Expert tips on Boolean job search, LinkedIn strategies, resume building, and finding hidden job listings.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-2">Blog</h1>
      <p className="text-gray-500 mb-8">Job search tips, Boolean search guides, and career advice to help you land your dream job.</p>
      
      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all block">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-blue-50 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <h2 className="font-bold text-lg mb-2 text-gray-900">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.description}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
