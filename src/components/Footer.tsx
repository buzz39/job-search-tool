import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-7 px-4 text-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <p>
          Built with ❤️ for job seekers &nbsp;·&nbsp;
          <a href="https://github.com/buzz39/job-search-tool" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
            View on GitHub
          </a>
        </p>
        <p className="mt-2 text-xs">Not affiliated with LinkedIn, Indeed, Glassdoor or Google.</p>
      </div>
    </footer>
  );
}
