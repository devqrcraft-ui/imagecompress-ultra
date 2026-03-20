import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 500KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 500KB free online. Browser-based — files never leave your device. Perfect for Shopify product photos, high-quality blog images, and print-on-demand previews. No upload, no signup.',
  keywords: 'compress image to 500kb, reduce image size to 500kb, resize photo to 500kb, 500kb image compressor online free, compress jpg to 500kb, compress png to 500kb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-500kb' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress an image to exactly 500KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com, upload your image, switch to Exact KB Mode, type 500, and click Compress. Binary search finds the maximum quality that fits 500KB within 1KB accuracy — instantly, in your browser.' },
    },
    {
      '@type': 'Question',
      name: 'What is 500KB good for?',
      acceptedAnswer: { '@type': 'Answer', text: '500KB is ideal for Shopify and WooCommerce product photos, high-quality blog hero images, print-on-demand previews (Printful, Redbubble), and Pinterest posts where image detail directly affects clicks and sales.' },
    },
    {
      '@type': 'Question',
      name: 'Is WebP or JPEG better for 500KB images?',
      acceptedAnswer: { '@type': 'Answer', text: 'WebP is clearly better at 500KB — it retains more sharpness and color accuracy than JPEG at the same file size. Use JPEG only if your platform does not support WebP (e.g. Amazon product listings, some email clients).' },
    },
    {
      '@type': 'Question',
      name: 'Can I compress multiple images to 500KB at once?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images, set Exact KB Mode to 500, and compress all at once. Download individually or as a ZIP. All processing stays in your browser — nothing uploaded.' },
    },
    {
      '@type': 'Question',
      name: 'How to compress an image to 500KB on iPhone or Android?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, switch to Exact KB Mode, type 500, tap Compress. Downloads instantly — no app needed.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress to 500KB
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Image to <span style={{ color: '#818cf8' }}>500KB</span> Free Online — No Upload, 100% Private
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Compress JPG, PNG, WebP, AVIF, HEIC to exactly 500KB directly in your browser — no upload, no tracking, no watermark.
        </p>

        <ClientPage />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">When Do You Need Exactly 500KB?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            500KB is the high-quality end of web image optimization. It is large enough to retain sharp detail for product zoom, print previews, and full-width hero images — while still loading significantly faster than uncompressed originals of 3–8MB. At 500KB, most web users on 4G or faster connections see instant load times with no visible quality compromise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {[
              ['🛍️', 'Shopify & WooCommerce', 'Product photos at 500KB load fast on mobile while retaining enough detail for the zoom feature buyers expect.'],
              ['🖨️', 'Print-on-Demand (Printful, Redbubble)', 'Preview images for POD products benefit from 500KB — large enough to show design detail without exceeding platform upload limits.'],
              ['✍️', 'Blog Hero Images', 'Full-width blog header images at 500KB score well on PageSpeed Insights while looking sharp on retina displays.'],
              ['📌', 'Pinterest & Visual Social Media', 'Pinterest recommends high-quality images. 500KB gives enough detail for pins to drive clicks from discovery feeds.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress an Image to 500KB — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your image', d: 'Click upload or drag your file. Accepts JPEG, PNG, WebP, AVIF, HEIC. Up to 50 files at once for batch processing.' },
              { n: '2', t: 'Switch to Exact KB Mode', d: 'Toggle from Quality to Exact KB mode. Type 500 in the target size field.' },
              { n: '3', t: 'Choose WebP for best quality', d: 'At 500KB, WebP retains noticeably more sharpness than JPEG. Use JPEG only if your platform requires it (e.g. Amazon).' },
              { n: '4', t: 'Compress and download', d: 'Click Compress. Your browser hits exactly 500KB using binary search — no upload, no wait. Download instantly.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
                <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">500KB vs Other Target Sizes — Which Should You Use?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Target</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Best For</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Quality</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['20KB', 'Government forms, passport photos', 'Low — use only when required'],
                  ['50KB', 'Exam portals, USCIS, NADRA', 'Low-medium'],
                  ['100KB', 'Thumbnails, email, job portals', 'Good'],
                  ['200KB', 'Ecommerce thumbs, newsletters', 'Very good'],
                  ['500KB', 'Product zoom, hero images, POD', 'Excellent'],
                ].map(([size, use, quality], i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i === 4 ? 'bg-violet-900/20' : i % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className={`py-3 px-4 font-bold ${i === 4 ? 'text-violet-400' : 'text-slate-300'}`}>{size}{i === 4 ? ' ← this page' : ''}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{use}</td>
                    <td className="py-3 px-4 text-slate-300 text-center text-xs">{quality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ['How do I compress an image to exactly 500KB?', 'Switch to Exact KB Mode, type 500, choose WebP or JPEG, and click Compress. Binary search finds the maximum quality that fits 500KB — within 1KB accuracy.'],
              ['Is 500KB enough quality for product photos?', 'Yes — for most ecommerce use. At 2000px wide and 500KB, WebP retains all the detail buyers need for zoom. Only very high-end fashion or print use cases need larger files.'],
              ['Is WebP or JPEG better at 500KB?', 'WebP is clearly better at 500KB — sharper, cleaner, with fewer artifacts. Use JPEG only when the platform requires it, such as Amazon product listings.'],
              ['Can I compress multiple images to 500KB at once?', 'Yes — upload up to 50 images, set Exact KB Mode to 500, compress all at once. Download individually or as a ZIP.'],
            ].map(([q, a], i) => (
              <details key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
                <summary className="font-semibold text-white cursor-pointer">{q}</summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ['/', '🏠 Home — Image Compressor'],
              ['/compress-to-200kb', 'Compress to 200KB'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-for-shopify', 'For Shopify'],
              ['/compress-for-etsy', 'For Etsy'],
              ['/compress-for-amazon', 'For Amazon'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
