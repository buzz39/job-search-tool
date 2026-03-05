"use client";

import { useState, useCallback } from "react";

const JOB_BOARDS = [
  { value: "linkedin.com/jobs", label: "LinkedIn Jobs" },
  { value: "indeed.com", label: "Indeed" },
  { value: "glassdoor.com/job-listing", label: "Glassdoor" },
  { value: "wellfound.com/jobs", label: "Wellfound (AngelList)" },
  { value: "monster.com/jobs", label: "Monster" },
  { value: "dice.com/jobs", label: "Dice (Tech)" },
  { value: "remote.co/remote-jobs", label: "Remote.co" },
];

const PRESETS: Record<string, string[]> = {
  "AI / ML": ["AI Engineer", "Machine Learning", "LLM"],
  "Software Eng.": ["Software Engineer", "Full Stack", "Backend"],
  "Product Mgmt": ["Product Manager", "Program Manager"],
  Data: ["Data Scientist", "Data Analyst", "Business Intelligence"],
  "DevOps / Cloud": ["DevOps", "Cloud Engineer", "SRE"],
  Design: ["UX Designer", "UI Designer", "Product Designer"],
  Cybersecurity: ["Cybersecurity", "Security Engineer", "Penetration Tester"],
  Marketing: ["Marketing Manager", "Growth", "SEO"],
};

const TIME_RANGES = [
  { value: "qdr:d", label: "Past 24 hours" },
  { value: "qdr:w", label: "Past week" },
  { value: "qdr:m", label: "Past month" },
  { value: "qdr:y", label: "Past year" },
  { value: "", label: "Any time" },
];

interface KeywordRow {
  id: number;
  value: string;
  operator: string;
}

let nextId = 0;

export default function JobSearchTool() {
  const [site, setSite] = useState("linkedin.com/jobs");
  const [keywords, setKeywords] = useState<KeywordRow[]>([
    { id: nextId++, value: "", operator: "OR" },
    { id: nextId++, value: "", operator: "OR" },
  ]);
  const [location, setLocation] = useState("");
  const [timeRange, setTimeRange] = useState("qdr:w");
  const [num, setNum] = useState("20");
  const [resultUrl, setResultUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }, []);

  const addKeyword = () => setKeywords((prev) => [...prev, { id: nextId++, value: "", operator: "OR" }]);

  const removeKeyword = (id: number) => {
    if (keywords.length <= 1) { showToast("At least one keyword row is required."); return; }
    setKeywords((prev) => prev.filter((k) => k.id !== id));
  };

  const updateKeyword = (id: number, field: "value" | "operator", val: string) => {
    setKeywords((prev) => prev.map((k) => (k.id === id ? { ...k, [field]: val } : k)));
  };

  const applyPreset = (kws: string[]) => {
    setKeywords(kws.map((kw) => ({ id: nextId++, value: kw, operator: "OR" })));
  };

  const buildQuery = (): string | null => {
    const parts: string[] = [];
    keywords.forEach((kw) => {
      if (!kw.value.trim()) return;
      if (parts.length > 0) parts.push(kw.operator);
      parts.push(`"${kw.value.trim()}"`);
    });
    if (parts.length === 0) return null;
    let q = parts.join(" ");
    if (location.trim()) q += ` "${location.trim()}"`;
    let url = `https://www.google.com/search?q=site:${encodeURIComponent(site)}+${encodeURIComponent(q)}&num=${num}`;
    if (timeRange) url += `&tbs=${timeRange}`;
    return url;
  };

  const generateQuery = () => {
    const url = buildQuery();
    if (!url) { showToast("Please enter at least one keyword."); return null; }
    setResultUrl(url);
    return url;
  };

  const openQuery = () => {
    const url = generateQuery();
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyQuery = async () => {
    if (!resultUrl) return;
    try {
      await navigator.clipboard.writeText(resultUrl);
      setCopied(true);
      showToast("URL copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("Copy failed – please select and copy manually.");
    }
  };

  const reset = () => {
    setKeywords([
      { id: nextId++, value: "", operator: "OR" },
      { id: nextId++, value: "", operator: "OR" },
    ]);
    setLocation("");
    setTimeRange("qdr:w");
    setNum("20");
    setResultUrl("");
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 border-t-[3px] border-t-transparent" style={{ borderImage: "linear-gradient(90deg, #2563eb, #7c3aed) 1", borderImageSlice: 1 }}>
        <p className="text-lg font-bold flex items-center gap-2 mb-5 text-gray-900">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
          Build Your Search Query
        </p>

        {/* Job Board */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1">Job Board <span className="font-normal text-gray-500 text-xs">— the site to search</span></label>
          <select value={site} onChange={(e) => setSite(e.target.value)} className="w-full p-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none">
            {JOB_BOARDS.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
          </select>
        </div>

        <hr className="border-gray-200 my-5" />

        {/* Keywords */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1">Keywords <span className="font-normal text-gray-500 text-xs">— combine with AND / OR operators</span></label>
          <span className="text-xs font-semibold text-gray-500 block mb-2">Quick-fill presets:</span>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.entries(PRESETS).map(([name, kws]) => (
              <button key={name} onClick={() => applyPreset(kws)} className="bg-blue-50 text-primary border border-blue-200 rounded-full px-3 py-1 text-xs font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors">
                {name}
              </button>
            ))}
          </div>

          <div className="space-y-2.5 mb-3">
            {keywords.map((kw, i) => (
              <div key={kw.id} className="flex items-center gap-2.5">
                <input type="text" value={kw.value} onChange={(e) => updateKeyword(kw.id, "value", e.target.value)} placeholder="e.g. Job Title or Skill" className="flex-1 p-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none" />
                {i > 0 && (
                  <select value={kw.operator} onChange={(e) => updateKeyword(kw.id, "operator", e.target.value)} className="w-20 p-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm focus:border-primary outline-none">
                    <option value="OR">OR</option>
                    <option value="AND">AND</option>
                  </select>
                )}
                <button onClick={() => removeKeyword(kw.id)} className={`text-red-500 border border-red-200 rounded-lg px-3 py-2 text-xs hover:bg-red-50 ${i === 0 ? "invisible" : ""}`}>✕</button>
              </div>
            ))}
          </div>
          <button onClick={addKeyword} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">+ Add Keyword</button>
        </div>

        <hr className="border-gray-200 my-5" />

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Location <span className="font-normal text-gray-500 text-xs">— optional</span></label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. New York, Remote" className="w-full p-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Date posted</label>
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="w-full p-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm focus:border-primary outline-none">
              {TIME_RANGES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Results per page</label>
            <select value={num} onChange={(e) => setNum(e.target.value)} className="w-full p-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm focus:border-primary outline-none">
              {["10", "20", "30", "50"].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button onClick={() => generateQuery()} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-sm">
            🔍 Generate Query
          </button>
          <button onClick={openQuery} className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors text-sm">
            🔗 Search Now
          </button>
          <button onClick={reset} className="px-4 py-2.5 text-gray-500 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Reset</button>
        </div>
      </div>

      {/* Result */}
      {resultUrl && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-sm">Your Search Query</h2>
            {copied && <span className="text-green-600 text-xs font-semibold">✓ Copied!</span>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-blue-600 font-mono break-all mb-3">{resultUrl}</div>
          <div className="flex gap-2.5">
            <button onClick={copyQuery} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-lg">📋 Copy URL</button>
            <button onClick={openQuery} className="px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700">🔗 Open in Google</button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-7 right-7 bg-gray-800 text-white px-5 py-3 rounded-lg text-sm font-medium shadow-xl z-50 animate-fade-in">{toast}</div>
      )}
    </>
  );
}
