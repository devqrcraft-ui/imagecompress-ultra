import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image for USPS — File Size & Format Requirements 2026",
  description: "USPS image requirements for Click-N-Ship, personalized stamps, and USPS.com. How to compress images to meet USPS size limits free online.",
  keywords: "compress image for USPS, USPS photo requirements, USPS image size, usps stamp image size",
  alternates: { canonical: "https://compressto20kb.com/blog/compress-image-for-usps" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What image format does USPS accept?", acceptedAnswer: { "@type": "Answer", text: "USPS accepts JPEG and PNG. JPEG is recommended for photos for best compression." } },
    { "@type": "Question", name: "What is the maximum file size for USPS image uploads?", acceptedAnswer: { "@type": "Answer", text: "USPS personalized stamps require images under 2MB. Click-N-Ship and portal uploads typically require under 1MB." } },
    { "@type": "Question", name: "How do I compress an image for USPS for free?", acceptedAnswer: { "@type": "Answer", text: "Use CompressTo20KB — upload your image, select Exact KB Mode, type your target size. Compressed in your browser, no upload." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Compress Image for USPS — File Size & Format Requirements 2025",
  url: "https://compressto20kb.com/blog/compress-image-for-usps",
  author: { "@type": "Organization", name: "CompressTo20KB" },
  datePublished: "2026-02-22",
};

export default function USPSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog" className="hover:underline">Blog</Link> / <span>Compress Image for USPS</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4">Compress Image for USPS</h1>
        <p className="text-gray-500 text-sm mb-8">Updated February 2026 · 4 min read</p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">Uploading images to USPS Click-N-Ship, ordering personalized stamps, or submitting through USPS.com — each has specific file size and format requirements. Here is what you need to know.</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">USPS Image Requirements by Use Case</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200">USPS Use Case</th>
                <th className="text-center p-3 border border-gray-200">Max File Size</th>
                <th className="text-center p-3 border border-gray-200">Format</th>
              </tr></thead>
              <tbody>
                {[
                  ["Personalized Stamps", "2MB", "JPEG / PNG"],
                  ["Click-N-Ship Label", "1MB", "JPEG / PNG"],
                  ["USPS.com Account Photo", "1MB", "JPEG / PNG"],
                  ["USPS Business Portal", "500KB", "JPEG"],
                  ["Informed Delivery images", "200KB", "JPEG / PNG"],
                ].map(([uc, size, fmt], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium">{uc}</td>
                    <td className="p-3 border border-gray-200 text-center text-blue-700 font-semibold">{size}</td>
                    <td className="p-3 border border-gray-200 text-center">{fmt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How to Compress Your Image for USPS</h2>
          <ol className="space-y-4">
            {[
              ["1", "Open CompressTo20KB", "Free — no account needed."],
              ["2", "Upload your image", "Drop JPEG or PNG. All processing in your browser."],
              ["3", "Set your target size", "Exact KB Mode: stamps → 1000KB, business portals → 500KB, Informed Delivery → 200KB."],
              ["4", "Download and upload to USPS", "Done in seconds."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{n}</span>
                <div><div className="font-semibold">{t}</div><div className="text-gray-600 text-sm mt-1">{d}</div></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What image format does USPS accept?", a: "JPEG and PNG. JPEG recommended for photos." },
              { q: "What is the maximum file size for USPS image uploads?", a: "Personalized stamps: under 2MB. Click-N-Ship and other portals: under 1MB." },
              { q: "How do I compress an image for USPS for free?", a: "Use CompressTo20KB — Exact KB Mode, type your target. Compressed in browser, no upload." },
            ].map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Compress Your USPS Image Free</h2>
          <p className="text-blue-100 mb-6">Set any exact KB target. No upload. Works on all devices.</p>
          <Link href="/" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition">Compress Image Free →</Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          Related: <Link href="/blog/image-size-for-amazon-product-listing" className="text-blue-600 hover:underline">Amazon Product Image Requirements</Link> · <Link href="/compress-for-shopify" className="text-blue-600 hover:underline">Compress for Shopify</Link>
        </div>
      </main>
    </>
  );
}
