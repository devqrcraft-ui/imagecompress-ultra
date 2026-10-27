import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image to 500KB Free Online — No Upload, Private',
  description: 'Compress any image to 500KB or under free online. Browser-based — files never leave your device. Perfect for Shopify product photos, high-quality blog images, and print-on-demand previews. No upload, no signup.',
  keywords: 'compress image to 500kb, reduce image size to 500kb, resize photo to 500kb, 500kb image compressor online free, compress jpg to 500kb, compress png to 500kb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-500kb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-500kb' },
};

const faq: [string, string][] = [
  ['How do I compress an image to 500KB or under?', 'Drop the image in above, switch to Target KB Mode and type 500. The tool searches JPEG or WebP quality downward and returns the highest quality that still fits under 500KB — never above it.'],
  ['What is 500KB a good size for?', 'It is the roomy end of web images: a product photo that still needs to survive zoom, a full-width blog hero, a high-resolution Pinterest pin, or an attachment you want to stay under a 10MB mailbox budget with.'],
  ['Should I use WebP or JPEG at 500KB?', 'For photos on the web, WebP usually holds detail better than JPEG at the same size, so it is the first thing to try. Choose JPEG when the destination is an email client or a platform where you know WebP is not rendered — and keep a copy you can re-upload.'],
  ['Can I compress multiple images to 500KB at once?', 'Yes — add up to 50 images, set one 500KB target and compress the batch. Download individually or as a ZIP, all processed in your browser.'],
  ['Does this work on iPhone or Android?', 'Yes. Open compressto20kb.com in Safari or Chrome, tap upload, choose the photo, turn on Target KB Mode, type 500 and compress. No app to install — and HEIC from the Camera Roll is converted for you.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 500KB Free Online","item":"https://www.compressto20kb.com/compress-to-500kb"}]}' }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress to 500KB
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Image to <span style={{ color: '#818cf8' }}>500KB</span> Free Online — No Upload, Private
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Compress JPG, PNG, WebP, AVIF, HEIC to 500KB or under directly in your browser — no upload, no tracking, no watermark.
        </p>

        <div className="mb-10" style={{maxWidth:'780px',margin:'0 auto'}}>
          <CompressorTool initialTargetKB={500} />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">When Do You Need 500KB or under?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            500KB sits at the roomy end of web image sizing: enough budget to keep product detail sharp when someone zooms, a hero image crisp on a high-density screen, or a design proof legible before it is printed. It is also small enough that a page of these files still loads quickly, which a folder of 3–8MB originals would not.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {[
              ['🛍️', 'Store product photos', 'Shopify and WooCommerce re-encode uploads into their own responsive sizes, so a clean ~500KB source gives that pipeline something good to work from without bloating the page.'],
              ['🖨️', 'Print-on-demand previews', 'A POD mock-up needs to show the artwork detail a customer judges by. Compress for the web at 500KB and keep the original print file separate — they are different jobs.'],
              ['✍️', 'Blog hero images', 'A full-width header is usually the largest image above the fold. Capping it around 500KB is one of the cheaper wins for Largest Contentful Paint.'],
              ['📌', 'Pinterest and visual feeds', 'Pins are judged on detail at a small preview size, so over-compression hurts more here than a few extra kilobytes do.'],
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
              { n: '2', t: 'Switch to Target KB Mode', d: 'Toggle from Quality to Target KB mode. Type 500 in the target size field.' },
              { n: '3', t: 'Pick the format', d: 'Try WebP first for a photo at this size — it usually keeps more detail per byte. Fall back to JPEG when the destination will not render WebP, such as an email or an older CMS.' },
              { n: '4', t: 'Compress and download', d: 'Click Compress. The quality search lands at 500KB or under and never above it — nothing uploaded, no queue, no watermark.' },
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
                  ['20KB', 'Forms that state a 20KB ceiling', 'Low — use only when the form asks for it'],
                  ['50KB', 'NADRA e-Visa photo, exam portals that specify it', 'Low-medium'],
                  ['100KB', 'Thumbnails, email inline images, job portals', 'Good'],
                  ['200KB', 'Store thumbnails, newsletter graphics', 'Very good'],
                  ['500KB', 'Product zoom, hero images, proofs', 'Excellent'],
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
            {faq.map(([q, a], i) => (
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
