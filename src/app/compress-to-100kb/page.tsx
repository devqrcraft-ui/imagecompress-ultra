import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Image to 100KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 100KB free online. Works in your browser — files never leave your device. Supports JPG, PNG, WebP, HEIC. No signup needed.',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-100kb' },
};
const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
  {'@type':'Question',name:'How do I compress an image to 100KB?',acceptedAnswer:{'@type':'Answer',text:'Upload your image, select Exact KB Mode, type 100 and click Compress. Our binary search algorithm hits the target within 1KB.'}},
  {'@type':'Question',name:'What is 100KB used for?',acceptedAnswer:{'@type':'Answer',text:'100KB is a common limit for email attachments, online forms, job applications, and social media profile photos. Many HR portals and university applications require photos under 100KB.'}},
  {'@type':'Question',name:'Will image quality suffer at 100KB?',acceptedAnswer:{'@type':'Answer',text:'For most photos, 100KB gives excellent quality at standard display sizes. Our tool maximizes quality while hitting your target size.'}},
]};
export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/>
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Image to 100KB Free Online</h1>
      <p className="text-slate-400 text-lg mb-8">100% Private · Files never leave your browser · No upload needed</p>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Why 100KB?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">100KB is the sweet spot for email attachments, job applications, university portals, and profile photos. Most online forms and HR platforms reject photos larger than 100KB. Our tool compresses your image to exactly 100KB — or less — while keeping the best possible quality.</p>
        <p className="text-slate-300 leading-relaxed">Unlike TinyPNG or Squoosh, you choose the exact target. No guessing, no re-uploading.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Common Uses for 100KB Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['📧','Email Attachments','Many email clients warn above 100KB per image'],
            ['💼','Job Applications','LinkedIn and HR portals often require photos under 100KB'],
            ['🎓','University Portals','Admission forms limit photo uploads to 100KB'],
            ['🪪','Online ID Verification','KYC and identity verification platforms'],
          ].map(([icon,title,desc])=>(
            <div key={title as string} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{title as string}</div>
              <div className="text-slate-400 text-xs">{desc as string}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
        <div className="flex flex-wrap gap-3">
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-to-50kb','Compress to 50KB'],['/compress-to-200kb','Compress to 200KB'],['/compress-to-500kb','Compress to 500KB'],['/compress-passport-photo','Passport Photo']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  </>);
}
