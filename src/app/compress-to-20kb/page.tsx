import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image to 20KB Online — Free, No Upload, 100% Private',
  description: 'Reduce any image to exactly 20KB free online. All compression runs in your browser — files never leave your device. No upload, no signup. HEIC, JPG, PNG, WebP supported.',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-20kb' },
};
const faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to exactly 20KB?","acceptedAnswer":{"@type":"Answer","text":"Upload your image, select Exact KB Mode, type 20 and click Compress. The tool uses binary search to hit your target within 1KB — no guessing, no manual retries."}},{"@type":"Question","name":"Does my image get uploaded to a server?","acceptedAnswer":{"@type":"Answer","text":"No. Everything runs in your browser using WebAssembly. Your image never leaves your device — unlike 11zon, MinifyImage, and Cloudinary which upload files to their servers."}},{"@type":"Question","name":"Why do government forms require exactly 20KB?","acceptedAnswer":{"@type":"Answer","text":"Government portals in India, Pakistan, Ukraine, and the US set strict file size limits due to legacy database infrastructure. Aadhaar, NADRA passport forms, and DS-160 visa applications commonly require photos under 20KB."}},{"@type":"Question","name":"Does it work with iPhone HEIC photos?","acceptedAnswer":{"@type":"Answer","text":"Yes — HEIC and HEIF photos from iPhone are automatically converted in your browser before compression. No upload needed, works directly from Camera Roll."}},{"@type":"Question","name":"How to compress image to 20KB on mobile?","acceptedAnswer":{"@type":"Answer","text":"Open compressto20kb.com on your iPhone or Android browser. Tap the upload area, select your photo from Camera Roll, tap the Gov 20KB preset, then Compress. Download saves directly to your device. No app needed."}},{"@type":"Question","name":"Can I compress multiple images to 20KB at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — select up to 50 images at once. All will be compressed to exactly 20KB in your browser simultaneously. Download individually or as a ZIP file. Most competitors like 11zon limit batch compression on free plans."}},{"@type":"Question","name":"Is this safer than 11zon or MinifyImage for passport photos?","acceptedAnswer":{"@type":"Answer","text":"Yes. 11zon, MinifyImage, and most online compressors upload your images to their servers. For sensitive documents like passport photos or visa photos, this is a real privacy risk. CompressTo20KB processes everything locally — your photo is never transmitted anywhere."}},{"@type":"Question","name":"How to compress JPG to 20KB without losing quality?","acceptedAnswer":{"@type":"Answer","text":"Use Exact KB Mode — it runs binary search to find the maximum quality setting that still fits within 20KB. For best results, start with a high-resolution original image. JPEG format at 85-90% quality typically gives the best size-to-quality ratio."}}]};
export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/>
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Image to 20KB Free — No Upload, 100% Private</h1>
      <p className="text-slate-400 text-lg mb-2">Reduce image size to exactly 20KB online. All processing happens in your browser — your files never leave your device.</p>
      <p className="text-slate-500 text-sm mb-8">Supports JPEG · PNG · WebP · HEIC (iPhone) · Batch up to 50 images · No signup required</p>

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          ['/','⚡ Compress Now — Free Tool'],
          ['/compress-to-50kb','Compress to 50KB'],
          ['/compress-to-100kb','Compress to 100KB'],
          ['/compress-passport-photo','Passport Photo'],
        ].map(([h,l])=>(
          <a key={h} href={h} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${h==='/' ? 'bg-violet-600 hover:bg-violet-500 border-violet-500 text-white' : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-300 hover:text-white'}`}>{l}</a>
        ))}
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Why Compress an Image to Exactly 20KB?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Millions search for <strong className="text-white">compress image to 20KB</strong> every month. Online image compressor tools like 11zon or TinyPNG can reduce image size — but they upload your file to their servers and cannot hit an exact target. Our tool reduces image size to exactly 20KB using binary search compression, entirely in your browser.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Government portals in India, Pakistan, Ukraine, and the US enforce strict 20KB limits due to legacy infrastructure. Standard tools like Squoosh estimate — our <strong className="text-white">online image compressor</strong> hits your target within 1KB every time.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Most tools upload your photo to a server — a serious privacy concern for passport photos and ID documents. CompressTo20KB processes everything in your browser via WebAssembly. Your image is never transmitted anywhere.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">How to Compress an Image to Exactly 20KB (Step-by-Step)</h2>
        <div className="space-y-4">
          {[
            {n:'1',t:'Upload your photo',d:'Click upload or drag your image into the tool. Accepts JPEG, PNG, WebP, and HEIC (iPhone photos). No file size limit.'},
            {n:'2',t:'Select Exact KB Mode — type 20',d:'Click the "Gov 20KB" preset or switch to Exact KB Mode and type 20. The tool locks onto your target.'},
            {n:'3',t:'Click Compress',d:'Binary search compression runs instantly in your browser. Hits 20KB within 1KB — no upload, no waiting.'},
            {n:'4',t:'Download your compressed image',d:'Click Download. File saves directly to your device. Compress more or batch up to 50 images at once.'},
          ].map(s=>(
            <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white text-lg">{s.n}</div>
              <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm leading-relaxed">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Best Uses for 20KB Images</h2>
        <p className="text-slate-400 text-sm mb-5 leading-relaxed">Government portals, university applications, and job boards all enforce strict file size limits. Here are the most common reasons people need to compress images to exactly 20KB:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['🪪','Aadhaar Card — India','UIDAI portal requires photo under 20KB JPEG for enrollment and updates'],
            ['🛂','Pakistan NADRA','Passport and CNIC application photo must be under 20KB'],
            ['🏛️','Ukraine Diia / Госпослуги','Government ID document upload portals enforce 20KB limit'],
            ['📋','US Visa DS-160','State Dept recommends JPEG under 240KB, many consulates restrict further'],
            ['🎓','University Portals India','Common Application forms (JEE, NEET, UPSC) require 20KB photos'],
            ['💼','Job Application Portals','HR platforms like Workday and Greenhouse often limit profile photos to 20–50KB'],
          ].map(([icon,title,desc])=>(
            <div key={title as string} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{title as string}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{desc as string}</div>
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
                ['Batch compression','✅ 50 files','⚠️ Limited','⚠️ Limited','⚠️ 20/month'],
                ['WebP / AVIF output','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['HEIC (iPhone) support','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['Free unlimited','✅ Yes','⚠️ Limits','⚠️ Limits','⚠️ 20/month'],
                ['Safe for passport/visa photos','✅ 100%','❌ Uploads','❌ Uploads','❌ Uploads'],
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
            ['How do I compress an image to exactly 20KB?','Upload your image, switch to Exact KB Mode, type 20 and click Compress. Uses binary search to hit your target within 1KB — no guessing, no manual retries.'],
            ['Does my image get uploaded to a server?','No. Everything runs in your browser via WebAssembly. Your image never leaves your device — unlike 11zon, MinifyImage, and TinyPNG which upload files to their servers.'],
            ['Why do government forms require exactly 20KB?','Government portals in India, Pakistan, Ukraine, and the US set strict limits due to legacy database infrastructure. Aadhaar, NADRA passport forms, and DS-160 visa applications commonly require photos under 20KB.'],
            ['Does it work with iPhone HEIC photos?','Yes — HEIC and HEIF photos from iPhone are automatically converted in your browser before compression. No upload needed, works directly from your Camera Roll.'],
            ['How to compress image to 20KB on mobile?','Open compressto20kb.com in your iPhone or Android browser. Tap upload, select your photo, tap the Gov 20KB preset, then Compress. Download saves directly to your device. No app needed.'],
            ['Can I compress multiple images to 20KB at once?','Yes — select up to 50 images at once. All compress to exactly 20KB simultaneously in your browser. Download individually or as a ZIP. Most competitors limit batch on free plans.'],
            ['Is this safer than 11zon for passport photos?','Yes. 11zon, MinifyImage, and most online tools upload files to their servers — a real privacy risk for passport and ID photos. CompressTo20KB never transmits your image anywhere.'],
            ['How to compress JPG to 20KB without losing quality?','Use Exact KB Mode — binary search finds the maximum quality that still fits 20KB. For best results, start with a high-resolution original. JPEG at 85–90% quality gives the best size-to-quality ratio.'],
          ].map(([q,a],i)=>(
            <details key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
              <summary className="font-semibold text-white cursor-pointer text-sm leading-relaxed">{q}</summary>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
        <div className="flex flex-wrap gap-3">
          {[
            ['/compress-to-50kb','Compress to 50KB'],
            ['/compress-to-100kb','Compress to 100KB'],
            ['/compress-to-200kb','Compress to 200KB'],
            ['/compress-passport-photo','Passport Photo'],
            ['/compress-for-ds160','DS-160 Photo'],
            ['/compress-for-shopify','For Shopify'],
            ['/compress-for-instagram','For Instagram'],
          ].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>

      <ClientPage />
    </article>
  </>);
}
