import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Job Search Query Builder team. We'd love to hear your feedback, suggestions, or questions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-6">Contact Us</h1>
      <div className="prose max-w-none">
        <p>We'd love to hear from you! Whether you have feedback, suggestions, bug reports, or just want to say hello, don't hesitate to reach out.</p>
        
        <h2>Email</h2>
        <p>📧 <a href="mailto:hello@gaganthakur.com">hello@gaganthakur.com</a></p>
        
        <h2>GitHub</h2>
        <p>Found a bug or have a feature request? Open an issue on our <a href="https://github.com/buzz39/job-search-tool/issues" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
        
        <h2>Feedback</h2>
        <p>Your feedback helps us make the tool better for everyone. We especially want to hear about:</p>
        <ul>
          <li>Job boards you'd like us to add</li>
          <li>Features that would make your job search easier</li>
          <li>Any bugs or issues you encounter</li>
          <li>Success stories — did the tool help you find a job?</li>
        </ul>
        
        <h2>Business Inquiries</h2>
        <p>For partnerships, advertising, or business inquiries, please email <a href="mailto:hello@gaganthakur.com">hello@gaganthakur.com</a>.</p>
      </div>
    </div>
  );
}
