import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress Image to 50KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 50KB free online. Works in your browser — files never leave your device. No upload, no signup. Perfect for government forms, job applications, and portals requiring a 50KB photo.',
  keywords: 'compress image to 50kb, reduce image size to 50kb, resize photo to 50kb, 50kb image compressor online free, compress jpg to 50kb, compress png to 50kb, compress passport photo to 50kb',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-50kb' },
  openGraph: {
    title: 'Compress Image to 50KB Free — No Upload, 100% Private',
    description: 'Compress any image to exactly 50KB. Files never leave your device. Free, instant, no signup.',
    url: 'https://compressto20kb.com/compress-to-50kb',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress an image to exactly 50KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com, upload your image, switch to Exact KB Mode, type 50, and click Compress. The tool uses binary search to hit exactly 50KB within 1KB accuracy — automatically, in your browser.' },
    },
    {
      '@type': 'Question',
      name: 'Why do government portals require photos under 50KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'US government portals (USCIS, TSA PreCheck, passport renewal), Indian exam portals (UPSC, SSC, NEET), and Pakistan NADRA commonly require photos under 50KB due to legacy infrastructure and strict upload size limits.' },
    },
    {
      '@type': 'Question',
      name: 'Does my image get uploaded to a server when compressing to 50KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. All compression runs directly in your browser using WebAssembly. Your image never leaves your device — unlike 11zon, TinyPNG, or Cloudinary which upload files to their servers.' },
    },
    {
      '@type': 'Question',
      name: 'Can I compress multiple images to 50KB at once?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — upload up to 50 images and compress them all to exactly 50KB in one batch. Download individually or as a ZIP. All processing stays on your device.' },
    },
    {
      '@type': 'Question',
      name: 'How to compress an image to 50KB on iPhone or Android?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo from Camera Roll, switch to Exact KB Mode, type 50, tap Compress. Downloads instantly — no app needed.' },
    },
    {
      '@type': 'Question',
      name: 'What formats compress best to 50KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'JPEG gives the smallest files and is required by most government portals. WebP gives better visual quality at 50KB but is not always accepted. PNG is rarely suitable for a 50KB target unless the image is a simple graphic.' },
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
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress to 50KB
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Image to <span style={{ color: '#818cf8' }}>50KB</span> Free Online — No Upload, 100% Private
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Compress JPG, PNG, WebP, AVIF, HEIC to exactly 50KB directly in your browser — no upload, no tracking, no watermark.
        </p>

        {/* WHEN DO YOU NEED 50KB */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">When Do You Need Exactly 50KB?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A 50KB limit is one of the most common restrictions on government and exam portals worldwide. It sits between the ultra-strict 20KB required by some Indian portals and the more relaxed 100KB used by most web forms. Knowing when 50KB is required — and hitting it precisely — saves hours of frustration trying to resize images manually.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {[
              ['🏛️', 'USCIS & US Gov Forms', 'USCIS immigration forms, TSA PreCheck enrollment, and passport renewal portals require photos under 50KB in JPEG format.'],
              ['🎓', 'Exam Portals (UPSC, SSC, NEET)', 'Indian government exam portals commonly cap photo uploads at 50KB. Submitting a larger file causes automatic rejection.'],
              ['🇵🇰', 'Pakistan NADRA & Visa', 'NADRA online services and several Pakistan visa portals require applicant photos strictly under 50KB.'],
              ['💼', 'Job & HR Portals', 'Many government job application portals in South Asia, the Middle East, and Eastern Europe enforce a 50KB photo limit.'],
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
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress an Image to 50KB — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your image', d: 'Click the upload area or drag your file. Accepts JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos). Up to 50 files at once.' },
              { n: '2', t: 'Switch to Exact KB Mode', d: 'Toggle the mode selector from Quality to Exact KB. Type 50 in the target size field.' },
              { n: '3', t: 'Select JPEG for government portals', d: 'Most government forms require JPEG. Select JPEG format if submitting to USCIS, UPSC, NADRA, or similar portals. Use WebP for web use to get better quality.' },
              { n: '4', t: 'Compress and download', d: 'Click Compress. Your browser processes the image instantly — nothing uploaded. Download the 50KB JPEG directly to your device.' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Best Practices for 50KB Images</h2>
          <div className="space-y-3">
            {[
              { t: 'Always use JPEG for government portals', d: 'Government and exam portals almost always require JPEG format specifically. WebP and PNG are often rejected even if the file size is correct.' },
              { t: 'Resize dimensions to match portal requirements', d: 'Most portals specify exact pixel dimensions (e.g. 600×600px for passport photos). Resize to the required dimensions first, then compress to 50KB for the best quality result.' },
              { t: 'Use the original photo, not a screenshot', d: 'Compressing a screenshot of a photo adds extra artifacts. Always start from the original JPEG or PNG taken by the camera for the cleanest possible 50KB output.' },
              { t: 'Check the portal requirements before uploading', d: 'Some portals require exactly 50KB (not just under 50KB). This tool hits the target within 1KB — well within any tolerance. Always verify format and dimension requirements on the official portal.' },
            ].map((tip, i) => (
              <div key={i} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/40">
                <div className="font-semibold text-white text-sm mb-1">✓ {tip.t}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{tip.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ['How do I compress an image to exactly 50KB?', 'Upload your image, switch to Exact KB Mode, type 50, and click Compress. Binary search finds the maximum quality that fits 50KB — within 1KB accuracy. No upload required.'],
              ['Why do government portals require 50KB?', 'Legacy infrastructure on government portals sets strict upload limits. 50KB is common for USCIS, UPSC, SSC, NEET, and Pakistan NADRA portals. The limit ensures fast processing on older systems.'],
              ['Is it safe to compress passport photos to 50KB online?', 'Yes — with this tool. All processing runs in your browser. Your photo is never uploaded to any server. Other tools like 11zon and TinyPNG upload files to their servers, which is a privacy risk for ID documents.'],
              ['Can I compress multiple images to 50KB at once?', 'Yes — upload up to 50 images, set Exact KB Mode to 50, and compress all at once. Download individually or as a ZIP. All processing stays in your browser.'],
              ['What format should I use for 50KB government photos?', 'JPEG — always, for government portals. Most portals explicitly require JPEG and will reject WebP or PNG even if the file size is correct.'],
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
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-200kb', 'Compress to 200KB'],
              ['/compress-passport-photo', 'Passport Photo Compressor'],
              ['/compress-for-uscis', 'For USCIS'],
              ['/compress-image-for-visa', 'For Visa Applications'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
