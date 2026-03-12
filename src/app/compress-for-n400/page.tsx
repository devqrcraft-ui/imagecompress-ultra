
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the photo requirements for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Most visa applications require a JPEG photo under 240KB, 2x2 inches (600x600px minimum), white background, taken within 6 months. Exact requirements vary by country — check the official embassy website for your destination."}},{"@type":"Question","name":"How do I compress a photo for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select the target size (usually under 200KB or 240KB), and download the compressed JPEG. Our tool compresses without uploading to any server — your photo stays private on your device."}},{"@type":"Question","name":"What file size is required for visa photos?","acceptedAnswer":{"@type":"Answer","text":"Most countries require visa photos under 200-240KB. The US visa requires under 240KB, Schengen visa under 2MB, UK visa under 6MB. Use our visa photo compressor to hit the exact size required."}}]};
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Photo for N-400 Naturalization Application — Free',
  description: 'Compress your photo for USCIS N-400 naturalization form. Meet all requirements instantly in your browser. No upload, 100% private.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-n400' },
};
export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Photo for N-400 Naturalization</h1>
      <p className="text-slate-400 text-lg mb-8">Free · Private · No Upload · Browser-only</p>
      <section className="mb-10">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
        <h2 className="text-2xl font-bold text-white mb-4">N-400 Photo Requirements (USCIS)</h2>
        <ul className="space-y-2 text-slate-300">
          <li>✅ Format: JPEG</li>
          <li>✅ Dimensions: 2x2 inches (600x600px minimum)</li>
          <li>✅ File size: Under 6MB</li>
          <li>✅ Background: White or off-white</li>
          <li>✅ Taken within 30 days</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">How to Compress Your N-400 Photo</h2>
        <div className="space-y-4">
          {[{n:'1',t:'Upload Photo',d:'Upload your passport-style photo.'},{n:'2',t:'Set Size',d:'Use preset or type target KB.'},{n:'3',t:'Download',d:'Done instantly in your browser — nothing uploaded.'}].map(s=>(
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
          {[['/compress-for-uscis','USCIS'],['/compress-for-uscis-n400','USCIS N-400'],['/compress-for-green-card','Green Card'],['/compress-for-i485','Form I-485']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  );
}