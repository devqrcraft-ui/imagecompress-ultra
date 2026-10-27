import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress US Passport Photo Free — Meet State Dept Requirements',
  description: 'Compress your US passport photo to meet State Department requirements. JPEG, 2×2 inches, under 240KB. Free, no upload, private. Works for online renewal and applications.',
  keywords: 'compress us passport photo, us passport photo size requirements, resize passport photo for us passport, compress passport photo online free, us passport photo 240kb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-passport-photo-usa' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-passport-photo-usa' },
};

const faq: [string, string][] = [
  ['What are US passport photo requirements for online submission?', 'The State Department’s digital photo spec asks for a JPEG, square, between 600×600 and 1200×1200 pixels, 240KB or smaller, taken within the last six months against a plain white or off-white background, full face front view with the head between 1 and 1-3/8 inches from chin to crown. Those are the photo rules; this tool handles only the file-size part.'],
  ['How do I compress a US passport photo to under 240KB?', 'Drop the photo in above, choose JPEG, turn on Target KB Mode and enter 200 — a margin under the 240KB ceiling. The tool searches quality downward and returns the best encode that still fits, so you get maximum quality inside the limit.'],
  ['Is it safe to compress US passport photos online?', 'With this tool, yes: the image is decoded and re-encoded locally in your browser and never sent to our server. A passport photo is biometric data, so check any tool you use — in DevTools, watch the Network tab while compressing.'],
  ['Can I use this for the State Department online passport renewal?', 'Yes, for the file-size requirement. The online renewal system takes a JPEG digital photo under 240KB, and a 200KB target sits safely inside that. Whether the photo itself is accepted still depends on how it was taken — — background, head size, recency.'],
  ['What is the difference between print and online requirements?', 'Printed photos for a mailed application are 2×2 inches (51×51mm) on paper — there is no file size involved. Online submissions are a JPEG file under 240KB at 600×600 to 1200×1200 pixels. This tool is for the online file.'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress US Passport Photo Free","item":"https://www.compressto20kb.com/compress-passport-photo-usa"}]}' }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → US Passport Photo Compressor
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress <span style={{ color: '#818cf8' }}>US Passport Photo</span> — Meet State Dept Requirements
        </h1>
        <div style={{ background: "rgba(129,140,248,0.13)", border: "1px solid rgba(129,140,248,0.35)", borderRadius: "14px", padding: "20px 24px", marginBottom: "24px" }}>
          <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#e2e8f0" }}>
            <strong style={{ color: "#818cf8" }}>Quick answer:</strong> A US passport photo must be 2×2 inches (51×51mm), JPEG format, under 240KB for digital submission, plain white or off-white background. Your face must fill 70–80% of the frame, taken within 6 months. Upload your photo, enable <strong>Target KB Mode</strong>, set target to 200KB — compressed locally, never uploaded.
          </p>
        </div>
        <p className="text-slate-400 text-lg mb-8">
          Compress your passport photo to under 240KB JPEG for online US passport applications and renewals. Free, no upload, private — your photo never leaves your browser.
        </p>

        <div className="mb-10" style={{maxWidth:'780px',margin:'0 auto'}}>
          <CompressorTool initialTargetKB={200} />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">US Passport Photo Requirements For Online Submission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ['📐', 'Dimensions', '2×2 inches (51×51mm). Online: square, 600×600 to 1200×1200 pixels.'],
              ['💾', 'File Size (Online)', 'JPEG, 240KB or smaller.'],
              ['🎨', 'Background', 'Plain white or off-white. No patterns, shadows, or objects.'],
              ['📅', 'Recency', 'Taken within the last 6 months.'],
              ['👤', 'Head Position', 'Full face, front view. Head between 1″ and 1-3/8″ chin to crown.'],
              ['💡', 'Lighting', 'Even lighting, no shadows on face or background.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-xl mb-1">{icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-3">
            Requirements as published by the U.S. State Department:{' '}
            <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html" rel="nofollow noopener noreferrer" target="_blank" className="text-indigo-400 underline">travel.state.gov — Photo Requirements</a>
            {' '}(checked October 2026). This tool changes file size only — it cannot fix a photo taken against the wrong background or with the wrong head size.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress US Passport Photo to 240KB — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your passport photo', d: 'Click upload or drag your photo. Accepts JPEG, PNG, WebP, HEIC. Use the original high-resolution photo for best results.' },
              { n: '2', t: 'Select JPEG format', d: 'The State Department requires JPEG. Select JPEG as output format.' },
              { n: '3', t: 'Set Target KB Mode to 200', d: 'Type 200 in the target field — this gives a safe 40KB margin under the 240KB limit while maximizing image quality.' },
              { n: '4', t: 'Compress and submit', d: 'Click Compress and download. Upload directly to the US passport application portal. Your photo never leaves your browser.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
                <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
              </div>
            ))}
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
              ['/compress-passport-photo', 'Passport Photo Compressor'],
              ['/compress-to-200kb', 'Compress to 200KB'],
              ['/compress-to-50kb', 'Compress to 50KB'],
              ['/compress-image-for-visa', 'For Visa Applications'],
              ['/compress-for-uscis', 'For USCIS Forms'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
