import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jobsearchquerybuilder.com";
const SITE_NAME = "Job Search Query Builder";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Find Jobs on LinkedIn, Indeed & More`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free job search query builder tool. Create powerful Boolean search queries to find jobs on LinkedIn, Indeed, Glassdoor and more. No sign-up needed.",
  keywords: [
    "job search tool",
    "LinkedIn job search",
    "Boolean job search",
    "job query builder",
    "find jobs online",
    "job search tips",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Find Jobs on LinkedIn, Indeed & More`,
    description:
      "Create powerful Boolean job search queries in seconds. Search LinkedIn, Indeed, Glassdoor, and more. Free, no sign-up required.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Build powerful job search queries for LinkedIn, Indeed, Glassdoor and more – free, instant, no sign-up.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: SITE_NAME,
              url: SITE_URL,
              description:
                "Free tool to create powerful Boolean job search queries for LinkedIn, Indeed, Glassdoor, and more.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
