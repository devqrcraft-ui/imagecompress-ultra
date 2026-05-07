import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CompressTo20KB vs ImageResizer — Which Is Better?",
  description: "CompressTo20KB vs ImageResizer: privacy, exact KB compression, no-upload vs server-side. See which tool wins for compressing images online.",
  alternates: { canonical: 'https://www.compressto20kb.com/vs/imageresizer' },
  openGraph: { url: 'https://www.compressto20kb.com/vs/imageresizer' },
};

const rows = [
  { feature: "File Upload to Server", us: "❌ Never — 100% browser", them: "✅ Uploads to server" },
  { feature: "Exact KB Target (20KB, 50KB)", us: "✅ Yes — Exact KB Mode", them: "❌ No" },
  { feature: "Gov / Passport Photo Preset", us: "✅ USCIS, DS-160", them: "❌ No" },
  { feature: "Shopify / Amazon / Etsy Preset", us: "✅ Yes", them: "❌ No" },
  { feature: "HEIC iPhone Support", us: "✅ Yes", them: "⚠️ Limited" },
  { feature: "AVIF Output", us: "✅ Yes", them: "❌ No" },
  { feature: "Batch (up to 50 free)", us: "✅ Yes", them: "⚠️ Limited" },
  { feature: "Price", us: "✅ 100% Free", them: "⚠️ Free tier limits" },
];

const faqs = [
  { q: "Can ImageResizer compress to exactly 20KB?", a: "No. ImageResizer does not support exact KB targeting. CompressTo20KB is the only free tool with Exact KB Mode that hits a precise file size like 20KB, 50KB, or 100KB." },
  { q: "Does ImageResizer upload files to a server?", a: "Yes. ImageResizer processes images server-side. CompressTo20KB runs entirely in your browser — no upload, no server, no data retention." },
  { q: "Which is better for passport photo compression?", a: "CompressTo20KB. It includes a Gov 20KB preset designed for USCIS, DS-160, and US passport requirements. ImageResizer has no such preset." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function VsImageResizer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:underline">Home</Link> / <span>vs ImageResizer</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4">CompressTo20KB vs ImageResizer</h1>
        <p className="text-gray-600 text-lg mb-10">ImageResizer cannot compress to exact KB and uploads your files to a server. Here is the full comparison.</p>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10 flex items-center gap-4">
          <span className="text-4xl">🏆</span>
          <div>
            <div className="font-bold text-green-800 text-lg">CompressTo20KB wins — privacy & exact KB</div>
            <div className="text-green-700 text-sm mt-1">Zero upload · Exact KB Mode · USCIS preset · 100% free</div>
          </div>
        </div>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead><tr className="bg-gray-50">
              <th className="text-left p-4 border border-gray-200">Feature</th>
              <th className="text-center p-4 border border-gray-200 text-blue-700">CompressTo20KB</th>
              <th className="text-center p-4 border border-gray-200 text-gray-600">ImageResizer</th>
            </tr></thead>
            <tbody>{rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-4 border border-gray-200 text-sm font-medium">{r.feature}</td>
                <td className="p-4 border border-gray-200 text-center text-sm">{r.us}</td>
                <td className="p-4 border border-gray-200 text-center text-sm text-gray-600">{r.them}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p className="text-gray-600 text-sm">{f.a}</p>
            </div>
          ))}</div>
        </section>
        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Try CompressTo20KB — Free, No Upload</h2>
          <Link href="/" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition">Compress Images Free →</Link>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          Also: <Link href="/vs/iloveimg" className="text-blue-600 hover:underline">vs iLoveIMG</Link> · <Link href="/vs/tinypng" className="text-blue-600 hover:underline">vs TinyPNG</Link> · <Link href="/vs/squoosh" className="text-blue-600 hover:underline">vs Squoosh</Link>
        </div>
      </main>
    </>
  );
}
