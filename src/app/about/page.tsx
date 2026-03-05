import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Job Search Query Builder — a free tool that helps job seekers create powerful Boolean search queries for LinkedIn, Indeed, Glassdoor, and more.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-6">About Job Search Query Builder</h1>
      <div className="prose max-w-none">
        <p>Job Search Query Builder is a free, open-source tool designed to help job seekers find better opportunities faster. We believe that everyone deserves access to powerful search tools — not just recruiters and hiring managers.</p>
        
        <h2>Our Mission</h2>
        <p>Job searching shouldn't be a frustrating, time-consuming process. By leveraging Boolean search and Google's powerful indexing, our tool helps you surface job listings that traditional searches miss — across LinkedIn, Indeed, Glassdoor, and more.</p>
        
        <h2>How It Works</h2>
        <p>Our tool generates Google site-search queries using Boolean operators (AND, OR). When you search through Google rather than a job board's native search, you often find listings that the platform's own search engine doesn't surface. It's like having X-ray vision for job boards.</p>
        
        <h2>Why We Built This</h2>
        <p>We noticed that recruiters use advanced Boolean search techniques daily, but most job seekers have never heard of them. We wanted to level the playing field by making Boolean job search accessible to everyone — no technical knowledge required.</p>
        
        <h2>Features</h2>
        <ul>
          <li><strong>7+ Job Boards:</strong> Search LinkedIn, Indeed, Glassdoor, Wellfound, Monster, Dice, and Remote.co</li>
          <li><strong>Boolean Operators:</strong> Combine keywords with AND/OR for precise results</li>
          <li><strong>Quick Presets:</strong> One-click presets for popular roles (AI/ML, Software Eng, Design, etc.)</li>
          <li><strong>Date Filtering:</strong> Find fresh listings from the past 24 hours, week, or month</li>
          <li><strong>Location Search:</strong> Filter by city, country, or "Remote"</li>
          <li><strong>100% Free:</strong> No sign-up, no premium tier, no data collection</li>
        </ul>
        
        <h2>Open Source</h2>
        <p>Job Search Query Builder is open source and available on <a href="https://github.com/buzz39/job-search-tool" target="_blank" rel="noopener noreferrer">GitHub</a>. Contributions, suggestions, and feedback are always welcome.</p>
        
        <div className="mt-8">
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:shadow-lg transition-all no-underline">
            Try the Query Builder →
          </Link>
        </div>
      </div>
    </div>
  );
}
