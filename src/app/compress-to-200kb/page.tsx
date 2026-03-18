import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 200KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 200KB free online. Works in your browser — files never leave your device. No upload, no signup. Perfect for blog posts, ecommerce product photos, and portals with a 200KB photo limit.',
  keywords: 'compress image to 200kb, reduce image size to 200kb, resize photo to 200kb, 200kb image compressor online free, compress jpg to 200kb, reduce png to 200kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-200kb' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress an image to exactly 200KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com, upload your image, switch to Exact KB Mode, type 200, and click Compress. Binary search finds the maximum quality that fits 200KB within 1KB accuracy.' },
    },
    {
      '@type': 'Question',
      name: 'Does compressing to 200KB reduce visible quality?',
      acceptedAnswer: { '@type': 'Answer', text: '200KB preserves much more detail than 20KB or 100KB. For most product photos and blog images at typical web sizes (800–1200px wide), a 200KB WebP looks nearly identical to the original.' },
    },
    {
      '@type': 'Question',
      name: 'What is 200KB good for?',
      acceptedAnswer: { '@type': 'Answer', text: '200KB is ideal for ecommerce product photos, blog hero images, email newsletter graphics, and government portal uploads. It gives noticeably better quality than 100KB while still loading fast on mobile.' },
    },
    {
      '@type': 'Question',
      name: 'How to compress an image to 200KB on iPhone or Android?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, set Exact KB Mode to 200, tap Compress. Downloads instantly — no app needed.' },
    },
    {
      '@type': 'Question',
      name: 'Can I batch compress multiple images to 200KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images at once. Set Exact KB Mode to 200 and click Compress All. Download individually or as a ZIP. All processing stays on your device.' },
    },
    {
      '@type': 'Question',
      name: 'Is WebP or JPEG better for 200KB images?',
      acceptedAnswer: { '@type': 'Answer', text: 'WebP gives better visual quality at 200KB than JPEG. At 200KB, the difference is clearly visible — WebP retains more sharpness and detail. Use JPEG only if you need broad compatibility with older browsers or email clients.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        {/* BREADCRUMB */}
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress to 200KB
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Image to <span style={{ color: '#818cf8' }}>200KB</span> Free Online — No Upload, 100% Private
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Compress JPG, PNG, WebP, AVIF, HEIC to exactly 200KB directly in your browser — no upload, no tracking, no watermark.
        </p>

        {/* WIDGET */}
        <ClientPage />

        {/* WHEN DO YOU NEED 200KB */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">When Do You Need Exactly 200KB?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            200KB sits in the sweet spot for web images: large enough to retain sharp detail, small enough to load quickly on mobile connections. It is the go-to target for ecommerce product photos, blog hero images, and email newsletters where quality matters but speed cannot be sacrificed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {[
              ['🛍️', 'Ecommerce Product Photos', 'Shopify recommends WebP images under 500KB. At 200KB, product photos load fast while remaining sharp enough for zoom features.'],
              ['✍️', 'Blog & CMS Images', 'WordPress, Squarespace, and Ghost automatically serve images to readers. Keeping uploads under 200KB improves PageSpeed scores significantly.'],
              ['📨', 'Email Newsletters', 'Most email clients and marketing platforms recommend keeping inline images under 200KB. Faster rendering means lower unsubscribe rates.'],
              ['📋', 'Government & Visa Portals', 'Several visa and immigration portals set a 200KB cap for document photos. Examples include scanned certificates, supporting documents, and ID copies.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress an Image to 200KB — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your image', d: 'Click upload or drag your file. Accepts JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos). Up to 50 files at once.' },
              { n: '2', t: 'Switch to Exact KB Mode', d: 'Toggle the mode selector from Quality to Exact KB. Type 200 in the target size field.' },
              { n: '3', t: 'Select your output format', d: 'Choose WebP for best quality at 200KB, JPEG for maximum compatibility, or AVIF for the smallest possible file.' },
              { n: '4', t: 'Compress and download', d: 'Click Compress. Your browser processes the image instantly — no server upload. Download the 200KB file directly to your device.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
                <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* BEST PRACTICES */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Best Practices for 200KB Images</h2>
          <div className="space-y-3">
            {[
              { t: 'Use WebP — it looks visibly better at 200KB', d: 'At 200KB, the quality difference between WebP and JPEG becomes clearly visible. WebP retains edge sharpness and color accuracy that JPEG loses to compression artifacts.' },
              { t: 'Match dimensions to actual display size', d: 'A 5000×4000px image shrunk to 200KB will always look worse than a 1400×1000px image at 200KB. Resize to your target display dimensions before compressing.' },
              { t: '200KB vs 100KB — when does it matter?', d: 'Choose 200KB over 100KB when your image contains fine text, detailed product features, fabric textures, or any content where sharpness directly affects purchasing decisions or readability.' },
              { t: 'Avoid re-compressing existing JPEGs', d: 'Every time a JPEG is re-saved, quality degrades further. Always compress from the original high-resolution file to get the cleanest possible result at 200KB.' },
            ].map((tip, i) => (
              <div key={i} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/40">
                <div className="font-semibold text-white text-sm mb-1">✓ {tip.t}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{tip.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 200KB vs 100KB vs 500KB comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">200KB vs 100KB vs 500KB — Which Should You Use?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Target Size</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Best For</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Quality</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Load Speed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['20KB', 'Government forms, passport photos', 'Low', '⚡⚡⚡ Fastest'],
                  ['100KB', 'Thumbnails, email, job portals', 'Good', '⚡⚡⚡ Very fast'],
                  ['200KB', 'Ecommerce, blogs, newsletters', 'Very good', '⚡⚡ Fast'],
                  ['500KB', 'Hero images, print-quality web', 'Excellent', '⚡ Moderate'],
                ].map(([size, use, quality, speed], i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i === 2 ? 'bg-violet-900/20 border-violet-700/40' : i % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className={`py-3 px-4 font-bold ${i === 2 ? 'text-violet-400' : 'text-slate-300'}`}>{size}{i === 2 ? ' ← this page' : ''}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{use}</td>
                    <td className="py-3 px-4 text-slate-300 text-center">{quality}</td>
                    <td className="py-3 px-4 text-slate-300 text-center text-xs">{speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ['How do I compress an image to exactly 200KB?', 'Switch to Exact KB Mode, type 200, choose WebP or JPEG, and click Compress. The tool finds the maximum quality that fits 200KB using binary search — within 1KB accuracy.'],
              ['Does compressing to 200KB reduce visible quality?', '200KB retains much more detail than 20KB or 100KB. For most product and blog photos at typical web sizes (800–1200px wide), a 200KB WebP looks nearly identical to the original.'],
              ['Is WebP or JPEG better for 200KB images?', 'WebP is clearly better at 200KB. It retains more sharpness and color accuracy with fewer visible artifacts. Use JPEG only if you need broad compatibility with very old systems.'],
              ['Can I compress multiple images to 200KB at once?', 'Yes — upload up to 50 images, set Exact KB Mode to 200, and compress all at once. Download individually or as a ZIP file. All processing stays in your browser.'],
              ['How to compress an image to 200KB on mobile?', 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, type 200 in Exact KB Mode, tap Compress. Saves directly to your device.'],
            ].map(([q, a], i) => (
              <details key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
                <summary className="font-semibold text-white cursor-pointer">{q}</summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ['/', '🏠 Home — Image Compressor'],
              ['/compress-to-20kb', 'Compress to 20KB'],
              ['/compress-to-50kb', 'Compress to 50KB'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-500kb', 'Compress to 500KB'],
              ['/compress-for-email', 'For Email'],
              ['/compress-for-shopify', 'For Shopify'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
