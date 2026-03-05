import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-lg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          JobQueryBuilder
        </Link>
        <ul className="hidden md:flex gap-6 list-none">
          <li><Link href="/#builder" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">Builder</Link></li>
          <li><Link href="/blog" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">Blog</Link></li>
          <li><Link href="/about" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">About</Link></li>
          <li><Link href="/contact" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
