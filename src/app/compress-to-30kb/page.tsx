
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to 30KB?","acceptedAnswer":{"@type":"Answer","text":"Upload your image, select 30KB as the target size, and click compress. Our tool automatically reduces quality and resolution to hit exactly 30KB or under. All processing happens in your browser."}},{"@type":"Question","name":"Will compressing reduce image quality?","acceptedAnswer":{"@type":"Answer","text":"Some quality reduction is necessary to reach very small file sizes. Our tool minimizes visible quality loss by using smart compression algorithms. WebP format produces the best quality at small sizes."}},{"@type":"Question","name":"Is there a file size limit for compression?","acceptedAnswer":{"@type":"Answer","text":"No. You can compress images of any size — from smartphone photos (3-5MB) to DSLR RAW exports (20MB+). The tool runs entirely in your browser so there are no server upload limits."}}]};
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Image to 30KB Free Online — 100% Private, No Upload',
  description: 'Compress any image to exactly 30KB free online. Works in your browser, files never leave your device. No upload, no signup. Supports HEIC, JPG, PNG, WebP.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-30kb' },
  openGraph: { url: 'https://compressto20kb.com/compress-to-30kb' },
};
export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Image to 30KB Free Online</h1>
      <p className="text-slate-400 text-lg mb-8">100% Private · Files never leave your browser · No upload needed</p>
      <section className="mb-10">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
        <h2 className="text-2xl font-bold text-white mb-4">Why Compress to Exactly 30KB?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Many government portals and online forms require photos under 30KB. Our tool hits your target within 1KB every time using binary search — no guessing.</p>
        <p className="text-slate-300 leading-relaxed">Everything processed in your browser. Your image never leaves your device.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">How to Compress to 30KB — 3 Steps</h2>
        <div className="space-y-4">
          {[{n:'1',t:'Upload Your Photo',d:'Click upload or drag your image. Accepts JPEG, PNG, WebP, HEIC.'},{n:'2',t:'Select 30KB Target',d:'Type 30 in Custom KB field and enable Exact KB Mode.'},{n:'3',t:'Download in Seconds',d:'Ready instantly. Nothing uploaded.'}].map(s=>(
            <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
              <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
            </div>
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