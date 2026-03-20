import type { Metadata } from 'next';
import ClientPage from './client';

export const metadata: Metadata = {
  title: 'Compress US Passport Photo Free — Meet State Dept Requirements',
  description: 'Compress your US passport photo to meet State Department requirements. JPEG, 2×2 inches, under 240KB. Free, no upload, 100% private. Works for online renewal and applications.',
  keywords: 'compress us passport photo, us passport photo size requirements, resize passport photo for us passport, compress passport photo online free, us passport photo 240kb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-passport-photo-usa' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are US passport photo requirements for online submission?',
      acceptedAnswer: { '@type': 'Answer', text: 'US passport photos for online submission must be JPEG format, under 240KB, at least 600x600px, with a plain white or off-white background. The photo must show a full face front view taken within 6 months. Head must be between 1 inch and 1-3/8 inches from chin to top of head.' },
    },
    {
      '@type': 'Question',
      name: 'How do I compress a US passport photo to under 240KB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Upload your passport photo, select JPEG format, switch to Exact KB Mode, type 200 (safe margin under 240KB), and click Compress. All processing runs in your browser — your photo is never uploaded to any server.' },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to compress US passport photos online?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — with this tool. All compression runs locally in your browser using WebAssembly. Your passport photo never leaves your device. Other tools upload files to their servers, which is a significant privacy risk for identity documents.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use this tool for the US passport renewal application online?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The State Department online passport renewal system requires a JPEG photo under 240KB. Use Exact KB Mode set to 200KB with JPEG format. This gives a safe margin under the 240KB limit while maximizing quality.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between passport photo requirements for print vs online?',
      acceptedAnswer: { '@type': 'Answer', text: 'For online submission: JPEG under 240KB, at least 600x600px. For printed photos submitted by mail: 2x2 inches (51x51mm) printed at high resolution (300 DPI), no file size limit. This tool is ideal for online submissions.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → US Passport Photo Compressor
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress <span style={{ color: '#818cf8' }}>US Passport Photo</span> — Meet State Dept Requirements
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Compress your passport photo to under 240KB JPEG for online US passport applications and renewals. Free, no upload, 100% private — your photo never leaves your browser.
        </p>

        <ClientPage />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">US Passport Photo Requirements 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ['📐', 'Dimensions', '2×2 inches (51×51mm). For online: at least 600×600px.'],
              ['💾', 'File Size (Online)', 'Under 240KB in JPEG format.'],
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
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress US Passport Photo to 240KB — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Upload your passport photo', d: 'Click upload or drag your photo. Accepts JPEG, PNG, WebP, HEIC. Use the original high-resolution photo for best results.' },
              { n: '2', t: 'Select JPEG format', d: 'The State Department requires JPEG. Select JPEG as output format.' },
              { n: '3', t: 'Set Exact KB Mode to 200', d: 'Type 200 in the target field — this gives a safe 40KB margin under the 240KB limit while maximizing image quality.' },
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
            {[
              ['What file size is required for US passport photos online?', 'Under 240KB in JPEG format. Use Exact KB Mode set to 200KB for a safe margin — this gives the maximum quality that fits comfortably under 240KB.'],
              ['Is it safe to compress passport photos in a browser?', 'Yes — with this tool, all processing runs locally in your browser. Your photo never leaves your device. Tools that upload to servers pose a real privacy risk for identity documents.'],
              ['Can I use this for the State Department online passport renewal?', 'Yes. The online renewal system (travel.state.gov) requires a JPEG under 240KB. Exact KB Mode set to 200KB with JPEG format meets this requirement with room to spare.'],
              ['Does compressing affect passport photo print quality?', 'For online submissions, only the digital file matters. At 200-240KB JPEG from a 600x600px source, quality is more than sufficient for digital review by the State Department.'],
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
