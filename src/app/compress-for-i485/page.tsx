
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What photo size is required for this form?","acceptedAnswer":{"@type":"Answer","text":"Most government and exam portals require JPEG photos under 50KB or 100KB, at least 200x200px. Always check the official portal for exact requirements before uploading."}},{"@type":"Question","name":"How do I compress a photo for this portal?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, switch to Exact KB Mode, type your target (e.g. 50 for 50KB), select JPEG format, and click Compress. All processing runs in your browser — your photo never leaves your device."}},{"@type":"Question","name":"Is it safe to compress government form photos online?","acceptedAnswer":{"@type":"Answer","text":"Yes — with this tool. All compression runs locally in your browser. Your photo is never uploaded to any server. This is essential for sensitive government and immigration documents."}},{"@type":"Question","name":"Can I compress multiple photos at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images at once, set your target size, and compress all at once. Download individually or as a ZIP. Free, no signup required."}}]};
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Photo for I-485 Green Card Application — Free',
  description: 'Compress your photo for USCIS Form I-485 (Adjustment of Status). Meet requirements instantly. No upload, 100% private.',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-i485' },
};
export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Photo for I-485 (Green Card)</h1>
      <p className="text-slate-400 text-lg mb-8">Free · Private · No Upload · Browser-only</p>
      <section className="mb-10">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
        <h2 className="text-2xl font-bold text-white mb-4">I-485 Photo Requirements (USCIS)</h2>
        <ul className="space-y-2 text-slate-300">
          <li>✅ Format: JPEG</li>
          <li>✅ Dimensions: 2x2 inches (600x600px minimum)</li>
          <li>✅ File size: Under 6MB</li>
          <li>✅ Background: White or off-white</li>
          <li>✅ Color photo, taken within 30 days</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">How to Compress Your I-485 Photo</h2>
        <div className="space-y-4">
          {[{n:'1',t:'Upload Photo',d:'Upload your passport-style photo.'},{n:'2',t:'Set Size',d:'Use preset or type target KB. Under 6MB for I-485.'},{n:'3',t:'Download',d:'Done instantly — nothing uploaded to any server.'}].map(s=>(
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
          {[['/compress-for-uscis','USCIS'],['/compress-for-n400','N-400'],['/compress-for-green-card','Green Card'],['/compress-for-uscis-n400','USCIS N-400']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  );
}