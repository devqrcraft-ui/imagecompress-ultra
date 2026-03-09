import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Photo for TSA PreCheck Application — Free Online',
  description: 'Compress your photo for TSA PreCheck application. Meet size requirements instantly in your browser. No upload, 100% private.',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-tsa-precheck' },
};
export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Photo for TSA PreCheck</h1>
      <p className="text-slate-400 text-lg mb-8">Free · Private · No Upload · Browser-only</p>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">TSA PreCheck Photo Requirements</h2>
        <ul className="space-y-2 text-slate-300">
          <li>✅ Format: JPEG or PNG</li>
          <li>✅ File size: Under 5MB</li>
          <li>✅ Resolution: At least 300x300px</li>
          <li>✅ Background: White or off-white</li>
          <li>✅ Full face, front-facing, neutral expression</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">How to Compress Your TSA Photo</h2>
        <div className="space-y-4">
          {[{n:'1',t:'Upload Photo',d:'Drag & drop or click to upload your photo.'},{n:'2',t:'Set Target Size',d:'Use Custom KB field — typically under 500KB for TSA PreCheck.'},{n:'3',t:'Download',d:'Compressed instantly in your browser.'}].map(s=>(
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
          {[['/compress-for-global-entry','Global Entry'],['/compress-for-real-id','REAL ID'],['/compress-for-ds160','DS-160'],['/compress-for-uscis','USCIS']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  );
}