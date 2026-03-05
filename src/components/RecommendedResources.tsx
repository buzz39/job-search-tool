const resources = [
  {
    title: "LinkedIn Premium",
    desc: "Get InMail credits, see who viewed your profile, and access salary insights.",
    url: "#",
    icon: "💼",
  },
  {
    title: "Resume Builder Tools",
    desc: "Create ATS-friendly resumes that get past automated screening systems.",
    url: "#",
    icon: "📄",
  },
  {
    title: "Interview Prep Courses",
    desc: "Practice behavioral and technical interviews with expert-curated questions.",
    url: "#",
    icon: "🎯",
  },
  {
    title: "Networking Masterclass",
    desc: "Learn how to build professional connections that lead to job opportunities.",
    url: "#",
    icon: "🤝",
  },
];

export default function RecommendedResources() {
  return (
    <div>
      <h2 className="text-xl font-extrabold mb-1">🌟 Recommended Resources</h2>
      <p className="text-gray-500 text-sm mb-5">Tools and courses to supercharge your job search.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((r) => (
          <a key={r.title} href={r.url} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:-translate-y-1 transition-all block">
            <div className="text-2xl mb-2">{r.icon}</div>
            <h3 className="font-bold text-sm mb-1">{r.title}</h3>
            <p className="text-xs text-gray-500">{r.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
