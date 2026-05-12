import { Metadata } from "next";
import AuthorBox from '@/app/components/AuthorBox'
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon Product Image Size Requirements 2026 — Full Guide",
  description: "Amazon product image requirements: minimum 1000px, white background, JPEG format, under 10MB. How to compress and optimize Amazon listing images free.",
  keywords: "amazon product image size, amazon listing image requirements, compress image for amazon, amazon seller image specs",
  alternates: { canonical: 'https://compressto20kb.com/blog/image-size-for-amazon-product-listing' },
  openGraph: { url: 'https://compressto20kb.com/blog/image-size-for-amazon-product-listing' },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the minimum image size for Amazon product listings?", acceptedAnswer: { "@type": "Answer", text: "Minimum 1000px on longest side to enable zoom. Recommended: 2000x2000px. Absolute minimum accepted: 500x500px." } },
    { "@type": "Question", name: "What background is required for Amazon main product images?", acceptedAnswer: { "@type": "Answer", text: "Pure white background — RGB 255, 255, 255. Product must fill at least 85% of the frame. Secondary images can have any background." } },
    { "@type": "Question", name: "What file format does Amazon require?", acceptedAnswer: { "@type": "Answer", text: "Amazon accepts JPEG, PNG, GIF, and TIFF. JPEG is strongly recommended for smallest file size with no visible quality loss." } },
    { "@type": "Question", name: "How do I compress Amazon product images for free?", acceptedAnswer: { "@type": "Answer", text: "Use CompressTo20KB and select the Amazon preset — outputs JPEG at 2000px under 1MB. All processing in your browser, no upload." } },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Amazon Product Image Size Requirements 2025",
  url: "https://compressto20kb.com/blog/image-size-for-amazon-product-listing",
  author: { "@type": "Organization", name: "CompressTo20KB" },
  datePublished: "2026-02-22",
};

export default function AmazonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"Amazon Product Image Size Requirements 2026","item":"https://compressto20kb.com/blog/image-size-for-amazon-product-listing"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Amazon Product Image Size Requirements 2026","description":"Amazon product image requirements: minimum 1000px, white background, JPEG format, under 10MB. How to compress and optimize Amazon listing images free.","url":"https://compressto20kb.com/blog/image-size-for-amazon-product-listing","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://compressto20kb.com"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-slate-300 mb-8">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/blog" className="hover:underline">Blog</Link> / <span>Amazon Product Image Size</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4">Amazon Product Image Size Requirements 2025</h1>
        <p className="text-slate-300 text-sm mb-8">Updated February 2026 · 6 min read</p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">Wrong image size or background on Amazon gets your listing suppressed. This guide covers every Amazon image spec and shows you how to optimize product photos free.</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Amazon Image Requirements Summary</h2>
          <div className="bg-blue-50 rounded-2xl p-6 grid gap-3 text-sm">
            {[
              ["Minimum dimensions", "1000px on longest side (enables zoom)"],
              ["Recommended dimensions", "2000 × 2000px"],
              ["Maximum file size", "10MB"],
              ["Recommended file size", "Under 1MB"],
              ["Accepted formats", "JPEG, PNG, GIF, TIFF"],
              ["Recommended format", "JPEG"],
              ["Main image background", "Pure white — RGB 255, 255, 255"],
              ["Product fill requirement", "≥ 85% of frame"],
              ["Max images per listing", "9 images"],
            ].map(([l, v]) => (
              <div key={l} className="flex gap-3">
                <span className="font-semibold text-gray-800 min-w-[200px]">{l}:</span>
                <span className="text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Main Image vs Secondary Images</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold mb-3">📦 Main Image (MAIN)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✅ Pure white background only</li>
                <li>✅ Product fills ≥ 85% of frame</li>
                <li>✅ No watermarks or text overlays</li>
                <li>✅ No mannequins for clothing</li>
                <li>✅ JPEG recommended</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold mb-3">🖼️ Secondary Images</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✅ Any background allowed</li>
                <li>✅ Lifestyle photos allowed</li>
                <li>✅ Text overlays allowed</li>
                <li>✅ Infographics allowed</li>
                <li>✅ JPEG or PNG</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How to Optimize Amazon Images Free</h2>
          <ol className="space-y-4">
            {[
              ["1", "Go to CompressTo20KB", "Free, no account needed."],
              ["2", "Upload your product image", "Batch up to 50 images — perfect for multiple listings."],
              ["3", "Select the Amazon preset", "Auto outputs JPEG at 2000px under 1MB — exactly what Amazon recommends."],
              ["4", "Download and upload to Seller Central", "Done."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{n}</span>
                <div><div className="font-semibold">{t}</div><div className="text-slate-300 text-sm mt-1">{d}</div></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Mistakes That Get Listings Suppressed</h2>
          <div className="space-y-2">
            {[
              "Off-white background on MAIN image — must be pure white RGB 255,255,255",
              "Product fills less than 85% of the frame",
              "Watermarks, borders, or Amazon logo in image",
              "Image resolution below 1000px — disables zoom",
              "Accessories not included in purchase shown in main image",
              "Promotional text like Sale or Free Shipping on main image",
            ].map(m => (
              <div key={m} className="flex gap-3 text-sm text-gray-700"><span className="text-red-500 font-bold">✗</span><span>{m}</span></div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What is the minimum image size for Amazon product listings?", a: "Minimum 1000px on longest side to enable zoom. Recommended 2000×2000px." },
              { q: "What background is required for Amazon main product images?", a: "Pure white — RGB 255, 255, 255. Product must fill at least 85% of frame." },
              { q: "How do I compress Amazon product images for free?", a: "Use CompressTo20KB Amazon preset — JPEG at 2000px under 1MB, processed in your browser." },
            ].map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-slate-300 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Optimize Amazon Product Images Free</h2>
          <p className="text-blue-100 mb-6">Amazon preset included. Batch 50 images. No upload, no account.</p>
          <Link href="/" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition">Compress for Amazon Free →</Link>
        </div>
        <div className="mt-8 text-sm text-slate-300">
          Related: <Link href="/compress-for-shopify" className="text-blue-600 hover:underline">Compress for Shopify</Link> · <Link href="/blog/compress-image-for-usps" className="text-blue-600 hover:underline">Compress Image for USPS</Link>
        </div>
      </main>
      <AuthorBox />
    </>
  );
}
