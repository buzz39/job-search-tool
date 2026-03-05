import JobSearchTool from "@/components/JobSearchTool";
import RecommendedResources from "@/components/RecommendedResources";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-600 animate-gradient text-white text-center pt-16 pb-0 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Job Search Query Builder
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto mb-7 px-4">
            Build powerful Boolean search queries to surface the best jobs on LinkedIn, Indeed, Glassdoor &amp; more — in seconds.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center mb-0">
            {["✓ 100% Free", "✓ No Sign-up", "✓ Multiple Job Boards", "✓ Boolean Search"].map((b) => (
              <span key={b} className="bg-white/20 border border-white/30 rounded-full px-4 py-1 text-xs font-semibold backdrop-blur">
                {b}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-9 py-5 px-6 bg-white/10 backdrop-blur border-t border-white/15">
            {[
              { val: "7+", label: "Job Boards" },
              { val: "100%", label: "Free Forever" },
              { val: "0", label: "Sign-ups Needed" },
            ].map((s) => (
              <div key={s.label}>
                <strong className="block text-2xl font-extrabold">{s.val}</strong>
                <span className="text-xs opacity-75 font-medium uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="leading-[0] -mt-px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-14 block">
            <path fill="#f9fafb" d="M0,28 C240,60 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" />
          </svg>
        </div>
      </header>

      {/* How It Works */}
      <div className="bg-white border-b border-gray-200 py-9 px-4">
        <h2 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-7">How It Works</h2>
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-4 flex-wrap">
          {[
            { n: "1", t: "Pick a Job Board", d: "Select from LinkedIn, Indeed, Glassdoor, and more." },
            { n: "2", t: "Add Keywords", d: "Enter job titles, skills, or use a quick-fill preset." },
            { n: "3", t: "Search & Discover", d: "Generate your Boolean query and find fresh listings." },
          ].map((step, i) => (
            <div key={step.n} className="flex items-start gap-3 max-w-[200px]">
              {i > 0 && <span className="text-gray-300 text-xl mt-1 hidden md:block">→</span>}
              <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-extrabold text-sm flex items-center justify-center shadow-lg">
                {step.n}
              </div>
              <div>
                <h3 className="text-sm font-bold">{step.t}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Builder */}
      <div className="max-w-4xl mx-auto px-4 py-9">
        <section id="builder">
          <JobSearchTool />
        </section>

        {/* Tips */}
        <section id="tips" className="mt-12">
          <h2 className="text-xl font-extrabold mb-1">💡 Search Tips for Better Results</h2>
          <p className="text-gray-500 text-sm mb-5">Get the most out of every job search with these proven strategies.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🔀", title: "Use OR for synonyms", desc: 'Connect similar titles with OR — e.g. "Software Engineer" OR "Developer".', color: "bg-indigo-50 border-indigo-200" },
              { icon: "🎯", title: "Use AND to narrow down", desc: 'Combine skills with AND — e.g. "Python" AND "Machine Learning".', color: "bg-purple-50 border-purple-200" },
              { icon: "📅", title: "Filter by date", desc: 'Set "Past 24 hours" or "Past week" to see the freshest listings.', color: "bg-teal-50 border-teal-200" },
              { icon: "🌍", title: "Try multiple job boards", desc: "Run the same query on LinkedIn, Indeed, and Glassdoor.", color: "bg-orange-50 border-orange-200" },
              { icon: "📋", title: "Copy & track queries", desc: "Save your best-performing URLs to revisit daily.", color: "bg-green-50 border-green-200" },
              { icon: "🏷️", title: "Add location keywords", desc: 'Include a city or "Remote" in the Location field.', color: "bg-pink-50 border-pink-200" },
            ].map((tip) => (
              <div key={tip.title} className={`${tip.color} border rounded-lg p-4 hover:-translate-y-1 hover:shadow-lg transition-all`}>
                <div className="text-xl mb-1">{tip.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-xs text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-12">
          <h2 className="text-xl font-extrabold mb-1">❓ Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm mb-5">Answers to common questions about the Job Search Query Builder.</p>
          <FAQ />
        </section>

        {/* Recommended Resources */}
        <section className="mt-12">
          <RecommendedResources />
        </section>

        {/* JobReferral CTA */}
        <section className="mt-12">
          <a href="https://jobreferral.me" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 md:p-8 text-white hover:shadow-xl transition-all hover:-translate-y-0.5">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-4xl">🤝</div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-extrabold mb-1">Found the perfect job?</h3>
                  <p className="text-sm md:text-base opacity-90">Get referred by a real employee at top tech companies. Referred candidates are <strong>4x more likely</strong> to get hired.</p>
                </div>
                <div className="shrink-0 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-emerald-50 transition-colors">
                  JobReferral.me →
                </div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is a Boolean job search?", a: "Boolean search uses operators like AND, OR, and NOT to combine keywords and give you precise, targeted results. This tool automates Boolean query creation so you can focus on applying." },
    { q: "Which job boards are supported?", a: "LinkedIn, Indeed, Glassdoor, Wellfound (AngelList), Monster, Dice, and Remote.co." },
    { q: "Is this tool free?", a: "Yes — completely free and open source. No registration, no hidden fees, no data collection." },
    { q: "How does the search work?", a: 'The tool builds a Google site-search URL using your keywords and filters. When you click "Search Now", it opens Google filtered to the chosen job board.' },
    { q: "Why Google instead of the job board's own search?", a: 'Google indexes job boards deeply and often provides more flexible filtering than native search. Using "site:" queries surfaces listings that may not appear in native filters.' },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow px-7 py-2">
      {faqs.map((f, i) => (
        <details key={i} className={`py-4 ${i < faqs.length - 1 ? "border-b border-gray-200" : ""}`}>
          <summary className="font-bold text-sm cursor-pointer hover:text-primary transition-colors">{f.q}</summary>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
