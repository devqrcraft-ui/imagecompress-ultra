const faq: [string, string][] = [
  ['How do I compress an image to 30KB?', 'Open the compressor, switch to Target KB Mode and type 30. The tool re-encodes your image on your own device and returns the highest quality that still fits inside that number, so the download is 30KB or under. If the file is already smaller than 30KB it comes back unchanged.'],
  ['Will compressing to 30KB reduce image quality?', 'At 30KB the encoder has very little room, so expect softness in fine detail and gradient banding in skies. The search steps quality downward and caps the longest side at 4096 px, so a large photo is resized as well as re-encoded. A small, clean headshot survives 30KB far better than a busy scene does - always check the preview before you submit.'],
  ['Is there a file size limit for compression?', 'Nothing is uploaded, so there is no server quota: the practical limit is the memory on your own machine. The target field accepts 5-5000 KB and one batch takes up to 50 files at a time.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Image to 30KB Free Online — Private, No Upload',
  description: 'Compress any image to 30KB or under free online. Works in your browser, files never leave your device. No upload, no signup. Supports HEIC, JPG, PNG, WebP.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-30kb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-30kb' },
};
export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Image to 30KB Free Online</h1>
      <p className="text-slate-400 text-lg mb-8">Private · Files never leave your browser · No upload needed</p>
      <section className="mb-10">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 30KB Free Online","item":"https://www.compressto20kb.com/compress-to-30kb"}]}' }} />
        <h2 className="text-2xl font-bold text-white mb-4">Why Compress to 30KB or under?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Some application forms cap a photo upload at 30KB. Our tool steps the quality down until the file fits under your target — no guessing.</p>
        <p className="text-slate-300 leading-relaxed">Everything processed in your browser. Your image never leaves your device.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">How to Compress to 30KB — 3 Steps</h2>
        <div className="space-y-4">
          {[{n:'1',t:'Upload Your Photo',d:'Click upload or drag your image. Accepts JPEG, PNG, WebP, HEIC.'},{n:'2',t:'Select 30KB Target',d:'Type 30 in Custom KB field and enable Target KB Mode.'},{n:'3',t:'Download in Seconds',d:'Ready instantly. Nothing uploaded.'}].map(s=>(
            <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
              <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
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
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-to-50kb','Compress to 50KB'],['/compress-to-100kb','Compress to 100KB'],['/compress-passport-photo','Passport Photo']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  );
}