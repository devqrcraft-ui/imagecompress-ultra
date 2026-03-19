import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress Image to 100KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 100KB free online. Works in your browser — files never leave your device. No upload, no signup. Perfect for email, web, ecommerce, and forms with a 100KB photo limit.',
  keywords: 'compress image to 100kb, reduce image size to 100kb, resize photo to 100kb, 100kb image compressor online free, compress jpg to 100kb, reduce png to 100kb, compress webp to 100kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-100kb' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress an image to exactly 100KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com, upload your image, switch to Exact KB Mode, type 100, and click Compress. The tool uses binary search to hit exactly 100KB within 1KB accuracy — automatically.' },
    },
    {
      '@type': 'Question',
      name: 'Does my image get uploaded to a server when compressing to 100KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All compression runs directly in your browser using WebAssembly. Your image never leaves your device — unlike tools such as 11zon, TinyPNG, or Cloudinary which process files on their servers.' },
    },
    {
      '@type': 'Question',
      name: 'Is 100KB good quality for web and email images?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. For most blog images, product thumbnails, and email attachments displayed at 400–800px width, 100KB provides excellent quality. For full-width hero images, consider 200–500KB instead.' },
    },
    {
      '@type': 'Question',
      name: 'What image formats compress best to 100KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'WebP and AVIF give the best visual quality at 100KB. JPEG is universally compatible and works well. PNG is rarely ideal for 100KB targets unless the image is a simple graphic with few colors.' },
    },
    {
      '@type': 'Question',
      name: 'Can I compress multiple images to 100KB at once?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images at once, set Exact KB Mode to 100, and click Compress All. Every image is compressed to 100KB simultaneously in your browser. Download individually or as a ZIP file.' },
    },
    {
      '@type': 'Question',
      name: 'How do I compress an image to 100KB on iPhone or Android?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap the upload area, select your photo from Camera Roll, switch to Exact KB Mode, type 100, and tap Compress. The file downloads instantly — no app needed.' },
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
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress to 100KB
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Image to <span style={{ color: '#818cf8' }}>100KB</span> Free Online — No Upload, 100% Private
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Compress JPG, PNG, WebP, AVIF, HEIC to exactly 100KB directly in your browser — no upload, no tracking, no watermark.
        </p>

        {/* WIDGET */}
        <ClientPage />

        {/* WHEN DO YOU NEED 100KB */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">When Do You Need Exactly 100KB?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A 100KB file size limit appears across dozens of real-world scenarios. Email clients warn users when attachments exceed limits, many government and university portals cap photo uploads, and ecommerce platforms penalize slow-loading product images. Whether you need to send a résumé photo, upload a product listing, or submit a web form, 100KB hits the sweet spot between file size and visual quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {[
              { icon: 'email', title: 'Email Attachments', desc: 'Keep inline images under 100KB to avoid Gmail and Outlook warnings. Smaller attachments load faster on mobile data.' },
              { icon: 'shop', title: 'Ecommerce Listings', desc: 'Shopify, Etsy, and WooCommerce product thumbnails load noticeably faster under 100KB.' },
              { icon: 'edu', title: 'University & Exam Portals', desc: 'Many application portals (SAT, GRE, GMAT, UPSC, NEET) require profile photos under 100KB in JPEG format.' },
              { icon: 'job', title: 'Web Forms & Job Applications', desc: 'LinkedIn, Indeed, Workday, and Greenhouse profile photo uploads work best when images are 100KB or under.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: '#fff' }}>{icon.slice(0,2).toUpperCase()}</div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress an Image to 100KB — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your image', d: 'Click the upload area or drag your file. Accepts JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos). Up to 50 files at once.' },
              { n: '2', t: 'Switch to Exact KB Mode', d: 'Toggle the mode selector from Quality to Exact KB. Type 100 in the target size field.' },
              { n: '3', t: 'Choose your format', d: 'Select WebP for best quality at small size, or JPEG for universal compatibility. AVIF gives the smallest file but may not be supported everywhere.' },
              { n: '4', t: 'Compress and download', d: 'Click Compress. Your browser processes the image instantly — nothing is uploaded. Download the 100KB file directly.' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Best Practices for 100KB Images</h2>
          <div className="space-y-3">
            {[
              { t: 'Use WebP for best quality at 100KB', d: 'WebP achieves noticeably better visual quality than JPEG at the same file size. For photos displayed at 400–800px width, WebP at 100KB often looks as sharp as JPEG at 150–200KB.' },
              { t: 'Resize dimensions before compressing', d: 'A 4000×3000 photo compressed to 100KB will look noticeably worse than a 1200×900 photo at 100KB. Resize to your actual display dimensions first, then target 100KB.' },
              { t: 'Start with the highest quality original', d: 'Compression works by reducing quality. Starting from a sharp, high-resolution original gives the algorithm more room to work and produces a cleaner result at 100KB.' },
              { t: 'Avoid compressing already-compressed images', d: 'Re-compressing a JPEG that was already saved at low quality introduces artifacts. Always start from the original file when targeting a specific KB size.' },
            ].map((tip, i) => (
              <div key={i} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/40">
                <div className="font-semibold text-white text-sm mb-1">✓ {tip.t}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{tip.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPETITOR COMPARISON */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Why Use This Tool vs Other Image Compressors?</h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            Most online image compressors upload your files to their servers for processing — a real privacy risk for photos of documents, IDs, or anything sensitive. This tool processes every pixel locally in your browser using WebAssembly. Nothing is ever transmitted.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Feature</th>
                  <th className="py-3 px-4 text-violet-400 font-bold">This Tool</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">TinyPNG</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">11zon</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['On-device, no upload', '✅ Yes', '❌ Server', '❌ Server'],
                  ['Exact KB targeting', '✅ Yes', '❌ No', '⚠️ Approx'],
                  ['Batch up to 50 files', '✅ Yes', '⚠️ 20/month', '⚠️ Limited'],
                  ['WebP & AVIF output', '✅ Yes', '❌ No', '⚠️ Partial'],
                  ['HEIC (iPhone) support', '✅ Yes', '❌ No', '⚠️ Partial'],
                  ['Free, no signup', '✅ Unlimited', '⚠️ Limits', '⚠️ Limits'],
                ].map(([feature, ...vals], i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className="py-3 px-4 text-slate-300 font-medium">{feature}</td>
                    {vals.map((v, j) => (
                      <td key={j} className={`py-3 px-4 text-center ${j === 0 ? 'text-green-400 font-bold' : v.startsWith('✅') ? 'text-green-400' : v.startsWith('❌') ? 'text-red-400' : 'text-yellow-400'}`}>{v}</td>
                    ))}
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
              ['How do I compress an image to exactly 100KB?', 'Upload your image, switch to Exact KB Mode, type 100, and click Compress. Binary search finds the maximum quality that fits 100KB — within 1KB accuracy.'],
              ['Will my image be uploaded to a server?', 'No — all compression runs locally in your browser. Your files never leave your device. Safe for sensitive photos, documents, and ID images.'],
              ['Is 100KB good quality for web images?', 'Yes, for most thumbnails and blog photos shown at 400–800px width. For large hero images at full width, 200–500KB gives better results.'],
              ['Can I compress multiple images to 100KB at once?', 'Yes — upload up to 50 images, set Exact KB Mode to 100, and compress all at once. Download individually or as a ZIP.'],
              ['How to compress an image to 100KB on iPhone or Android?', 'Open compressto20kb.com in Safari or Chrome, tap upload, select your photo, type 100 in Exact KB Mode, tap Compress. Downloads instantly — no app needed.'],
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
              ['/compress-to-200kb', 'Compress to 200KB'],
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
