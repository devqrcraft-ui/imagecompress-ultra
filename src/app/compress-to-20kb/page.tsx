import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Image to 20KB Free Online — 100% Private, No Upload',
  description: 'Compress any image to exactly 20KB free online. Works in your browser, files never leave your device. No upload, no signup. Supports HEIC, JPG, PNG, WebP.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-20kb' },
};
const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
  {'@type':'Question',name:'How do I compress an image to exactly 20KB?',acceptedAnswer:{'@type':'Answer',text:'Upload your image, select Exact KB Mode, type 20 and click Compress. Uses binary search to hit target within 1KB.'}},
  {'@type':'Question',name:'Does my image get uploaded to a server?',acceptedAnswer:{'@type':'Answer',text:'No. Everything is processed in your browser. Your image never leaves your device.'}},
  {'@type':'Question',name:'Why do government forms require 20KB?',acceptedAnswer:{'@type':'Answer',text:'Portals in India, Pakistan, Ukraine set 20KB limits due to legacy infrastructure. Aadhaar and passport forms commonly require exactly 20KB.'}},
  {'@type':'Question',name:'Does it work with iPhone HEIC photos?',acceptedAnswer:{'@type':'Answer',text:'Yes — HEIC and HEIF photos from iPhone are automatically converted in your browser before compression. No upload needed.'}},
]};
export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/>
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Image to 20KB Free Online</h1>
      <p className="text-slate-400 text-lg mb-8">100% Private · Files never leave your browser · No upload needed</p>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Why Compress an Image to Exactly 20KB?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Millions search for compress image to 20KB monthly. Government portals across India, Pakistan, Ukraine enforce strict limits. Standard tools like PNG Shrinker estimate — our tool hits your target within 1KB every time using binary search.</p>
        <p className="text-slate-300 leading-relaxed">Most tools upload your photo to a server — a serious privacy concern for passport photos and ID documents. CompressTo20KB processes everything in your browser. Your image is never transmitted anywhere.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">How to Compress to 20KB — 3 Steps</h2>
        <div className="space-y-4">
          {[{n:'1',t:'Upload Your Photo',d:'Click upload or drag your image. Accepts JPEG, PNG, WebP, HEIC (iPhone photos).'},{n:'2',t:'Select 20KB Target',d:'Click the Gov 20KB preset or type 20 in Custom KB field. Enable Exact KB Mode.'},{n:'3',t:'Download in Seconds',d:'Ready instantly. Everything in your browser — nothing uploaded.'}].map(s=>(
            <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
              <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Common Use Cases for 20KB Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['🪪','Aadhaar Card India','Portal requires photo under 20KB JPEG'],
            ['🛂','Pakistan NADRA','Passport application photo limit'],
            ['🏛️','Ukraine Diia','Government ID document upload'],
            ['📋','US Visa DS-160','Photo requirements for applications'],
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
          {[['/compress-to-50kb','Compress to 50KB'],['/compress-to-100kb','Compress to 100KB'],['/compress-to-200kb','Compress to 200KB'],['/compress-passport-photo','Passport Photo'],['/compress-for-shopify','For Shopify']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  </>);
}
