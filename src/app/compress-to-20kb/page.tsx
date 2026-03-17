import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Image to 20KB Free Online — 100% Private, No Upload',
  description: 'Compress any image to exactly 20KB free online. Works in your browser, files never leave your device. No upload, no signup. Supports HEIC, JPG, PNG, WebP.',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-20kb' },
};
const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
  {'@type':'Question',name:'How do I compress an image to exactly 20KB?',acceptedAnswer:{'@type':'Answer',text:'Upload your image, select Exact KB Mode, type 20 and click Compress. Uses binary search to hit target within 1KB.'}},
  {'@type':'Question',name:'Does my image get uploaded to a server?',acceptedAnswer:{'@type':'Answer',text:'No. Everything is processed in your browser using WebAssembly. Your image never leaves your device — unlike 11zon, MinifyImage, and Cloudinary which upload files to their servers.'}},
  {'@type':'Question',name:'Why do government forms require 20KB?',acceptedAnswer:{'@type':'Answer',text:'Portals in India, Pakistan, Ukraine set 20KB limits due to legacy infrastructure. Aadhaar and passport forms commonly require exactly 20KB.'}},
  {'@type':'Question',name:'Does it work with iPhone HEIC photos?',acceptedAnswer:{'@type':'Answer',text:'Yes — HEIC and HEIF photos from iPhone are automatically converted in your browser before compression. No upload needed.'}},
  {'@type':'Question',name:'How to compress image to 20KB on mobile?',acceptedAnswer:{'@type':'Answer',text:'Open compressto20kb.com on your iPhone or Android browser. Tap the upload area, select your photo from Camera Roll, tap Gov 20KB preset, then Compress. Download saves directly to your device. No app needed.'}},
  {'@type':'Question',name:'Can I compress multiple images to 20KB at once?',acceptedAnswer:{'@type':'Answer',text:'Yes — select up to 50 images at once. All will be compressed to exactly 20KB in your browser simultaneously. Download individually or as a ZIP file. Most competitors like 11zon limit batch compression on free plans.'}},
  {'@type':'Question',name:'Is this safer than 11zon or MinifyImage for passport photos?',acceptedAnswer:{'@type':'Answer',text:'Yes. 11zon, MinifyImage, and most online compressors upload your images to their servers for processing. For sensitive documents like passport photos, visa photos, or ID documents, this is a privacy risk. CompressTo20KB processes everything locally in your browser — your photo is never transmitted to any server.'}},
  {'@type':'Question',name:'How to compress JPG to 20KB without losing quality?',acceptedAnswer:{'@type':'Answer',text:'Use JPEG format at the highest quality that still meets 20KB. Our Exact KB Mode uses binary search to find the maximum quality setting that fits within your target. For best results with minimal quality loss, start with a high-resolution original image.'}},
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
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">CompressTo20KB vs Competitors</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Feature</th>
                <th className="py-3 px-4 text-violet-400 font-bold">CompressTo20KB</th>
                <th className="py-3 px-4 text-slate-400 font-semibold">11zon</th>
                <th className="py-3 px-4 text-slate-400 font-semibold">MinifyImage</th>
                <th className="py-3 px-4 text-slate-400 font-semibold">TinyPNG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['On-device (no upload)','✅ Yes','❌ Server','❌ Server','❌ Server'],
                ['Exact KB target','✅ Yes','⚠️ Approx','❌ No','❌ No'],
                ['Batch files','✅ 50 files','⚠️ Limited','⚠️ Limited','⚠️ 20/month'],
                ['WebP / AVIF output','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['HEIC (iPhone) support','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['Free tier','✅ Unlimited','⚠️ Limits','⚠️ Limits','⚠️ 20/month'],
                ['Safe for passport/visa','✅ 100%','❌ Uploads','❌ Uploads','❌ Uploads'],
              ].map(([feature,...vals],i)=>(
                <tr key={i} className={`border-b border-slate-800 ${i%2===0?'bg-slate-800/20':''}`}>
                  <td className="py-3 px-4 text-slate-300 font-medium">{feature}</td>
                  {vals.map((v,j)=>(
                    <td key={j} className={`py-3 px-4 text-center ${j===0?'text-green-400 font-bold':v.startsWith('✅')?'text-green-400':v.startsWith('❌')?'text-red-400':'text-yellow-400'}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            ['How to compress image to 20KB on mobile?','Open compressto20kb.com in your iPhone or Android browser. Tap upload, select photo from Camera Roll, tap Gov 20KB preset, then Compress. No app install needed.'],
            ['Can I compress multiple images to 20KB at once?','Yes — select up to 50 images at once. All compress to exactly 20KB simultaneously. Download as ZIP. Most competitors limit batch on free plans.'],
            ['Is this safer than 11zon or MinifyImage for passport photos?','Yes. 11zon, MinifyImage, and most online tools upload files to their servers — a real privacy risk for passport and ID photos. CompressTo20KB never transmits your image anywhere.'],
            ['How to compress JPG to 20KB without losing quality?','Use Exact KB Mode — it runs binary search to find the maximum quality that fits 20KB. Start with a high-resolution original for best results.'],
          ].map(([q,a],i)=>(
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
          {[['/compress-to-50kb','Compress to 50KB'],['/compress-to-100kb','Compress to 100KB'],['/compress-to-200kb','Compress to 200KB'],['/compress-passport-photo','Passport Photo'],['/compress-for-shopify','For Shopify']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  </>);
}
