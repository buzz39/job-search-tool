import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Job Search Query Builder. Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 1, 2026</p>
      <div className="prose max-w-none">
        <h2>Introduction</h2>
        <p>Job Search Query Builder ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>

        <h2>Information We Collect</h2>
        <p>Our tool runs entirely in your browser. We do not collect, store, or transmit any personal data you enter into the query builder, including:</p>
        <ul>
          <li>Job search keywords</li>
          <li>Location preferences</li>
          <li>Search queries generated</li>
        </ul>

        <h2>Analytics</h2>
        <p>We may use third-party analytics services (such as Google Analytics) to understand how visitors use our website. These services may collect anonymous data such as:</p>
        <ul>
          <li>Pages visited</li>
          <li>Time spent on pages</li>
          <li>Browser type and device information</li>
          <li>Referring website</li>
          <li>Approximate geographic location (country/city level)</li>
        </ul>
        <p>This data is aggregated and anonymized and cannot be used to identify individual users.</p>

        <h2>Advertising</h2>
        <p>We may display advertisements through Google AdSense. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.</p>

        <h2>Cookies</h2>
        <p>We may use cookies for analytics and advertising purposes. You can control cookie settings through your browser preferences. Our tool functionality does not require cookies.</p>

        <h2>Third-Party Links</h2>
        <p>Our website may contain links to third-party websites (job boards, resource links, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>

        <h2>Data Security</h2>
        <p>Since our tool processes data entirely in your browser and we don't collect personal data, there is minimal security risk. We use HTTPS to encrypt all communication between your browser and our website.</p>

        <h2>Children's Privacy</h2>
        <p>Our service is not directed to children under 13. We do not knowingly collect personal information from children.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@gaganthakur.com">hello@gaganthakur.com</a>.</p>
      </div>
    </div>
  );
}
