import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "H1B Visa Photo Requirements 2026 — Size, Format & How to Compress",
  description: "Complete guide to H1B visa photo requirements: dimensions, file size limits, background. How to compress your photo to 20KB for USCIS forms free.",
  keywords: "h1b visa photo requirements, h1b photo size, uscis photo requirements, compress photo for h1b",
  alternates: { canonical: 'https://www.compressto20kb.com/blog/h1b-visa-photo-requirements' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/h1b-visa-photo-requirements' },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the photo requirements for H1B visa?", acceptedAnswer: { "@type": "Answer", text: "2x2 inches (51x51mm), color, white background, JPEG format, taken within 6 months, minimum 600x600px, under 240KB for USCIS online forms." } },
    { "@type": "Question", name: "What file size is required for USCIS photo uploads?", acceptedAnswer: { "@type": "Answer", text: "USCIS requires photos under 240KB. Many state portals require under 20KB. Always check your specific form." } },
    { "@type": "Question", name: "How do I compress a photo for H1B visa to 20KB?", acceptedAnswer: { "@type": "Answer", text: "Use CompressTo20KB — select the Gov 20KB preset. Photo compressed locally in your browser, never uploaded to any server." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "H1B Visa Photo Requirements 2025",
  url: "https://compressto20kb.com/blog/h1b-visa-photo-requirements",
  author: { "@type": "Organization", name: "CompressTo20KB" },
  datePublished: "2026-02-22",
};

export default function H1BPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog" className="hover:underline">Blog</Link> / <span>H1B Visa Photo Requirements</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4">H1B Visa Photo Requirements 2025</h1>
        <p className="text-gray-500 text-sm mb-8">Updated February 2026 · 5 min read</p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">Getting your H1B visa photo wrong — wrong size, background, or file too large — is one of the most common causes of delays. This guide covers every requirement.</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Requirements at a Glance</h2>
          <div className="bg-blue-50 rounded-2xl p-6 grid grid-cols-2 gap-4 text-sm">
            {[
              ["Photo size", "2 × 2 inches (51 × 51mm)"],
              ["Digital resolution", "Min 600 × 600px"],
              ["Background", "Plain white or off-white"],
              ["File format", "JPEG only"],
              ["Max file size (USCIS)", "Under 240KB"],
              ["Max file size (state portals)", "Often under 20KB"],
              ["Color", "Full color only"],
              ["Recency", "Within last 6 months"],
              ["Glasses", "Not allowed"],
              ["Expression", "Neutral, mouth closed"],
            ].map(([l, v]) => (
              <div key={l}><span className="font-semibold text-gray-800">{l}:</span> <span className="text-gray-600">{v}</span></div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why 20KB Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">USCIS accepts up to 240KB for most online forms. However, many state labor department portals required for H1B LCA filing impose a strict 20KB limit. DS-160 also recommends smaller files for faster upload.</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>Tip:</strong> Always check your specific portal's size requirement before uploading.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How to Compress to 20KB Free</h2>
          <ol className="space-y-4">
            {[
              ["1", "Go to CompressTo20KB", "Free, no account needed."],
              ["2", "Upload your photo", "Drag your JPEG. Nothing is sent to any server."],
              ["3", "Select Gov 20KB preset", "Automatically targets 20KB JPEG for USCIS requirements."],
              ["4", "Download and upload", "Ready for any government form."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{n}</span>
                <div><div className="font-semibold">{t}</div><div className="text-gray-600 text-sm mt-1">{d}</div></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-2">
            {["Colored background — must be plain white","Wearing glasses — not allowed since 2016","Photo older than 6 months","File too large for state portal","Face fills less than 70% of frame","Black and white photo"].map(m => (
              <div key={m} className="flex gap-3 text-sm text-gray-700"><span className="text-red-500 font-bold">✗</span><span>{m}</span></div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What are the photo requirements for H1B visa?", a: "2×2 inches, color, white background, JPEG, taken within 6 months, min 600×600px, under 240KB for USCIS." },
              { q: "How do I compress a photo for H1B visa to 20KB?", a: "Use CompressTo20KB — select the Gov 20KB preset. Compressed locally, nothing uploaded." },
            ].map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Compress Your H1B Photo to 20KB Free</h2>
          <p className="text-blue-100 mb-6">No upload. No account. Takes 10 seconds.</p>
          <Link href="/" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition">Compress Photo Now →</Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          Related: <Link href="/compress-passport-photo" className="text-blue-600 hover:underline">Compress Passport Photo</Link> · <Link href="/blog/dv-lottery-photo-requirements" className="text-blue-600 hover:underline">DV Lottery Photo Requirements</Link>
        </div>
      </main>
    </>
  );
}
