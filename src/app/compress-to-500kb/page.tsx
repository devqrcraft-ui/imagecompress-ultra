import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Image to 500KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 500KB free online. Browser-based processing — your files never leave your device. JPG, PNG, WebP, HEIC. No signup.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-500kb' },
};
const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
  {'@type':'Question',name:'How do I compress an image to 500KB?',acceptedAnswer:{'@type':'Answer',text:'Upload your image, select Exact KB Mode, type 500 and click Compress. The tool processes everything locally in your browser.'}},
  {'@type':'Question',name:'What uses 500KB images?',acceptedAnswer:{'@type':'Answer',text:'500KB is common for Shopify product photos, print-on-demand previews, and high-resolution social media posts where you need good quality but have a file size limit.'}},
]};
export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/>
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Image to 500KB Free Online</h1>
      <p className="text-slate-400 text-lg mb-8">100% Private · Files never leave your browser · No upload needed</p>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">When You Need Exactly 500KB</h2>
        <p className="text-slate-300 leading-relaxed mb-4">500KB images retain high quality for product photography and print previews while staying under e-commerce platform limits. Shopify recommends product images under 500KB for fast store loading. Pinterest, Instagram, and many print-on-demand services like Printful and Redbubble also benefit from this size.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Common Uses for 500KB Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['🛍️','Shopify Products','Recommended max for fast store pages'],
            ['🖨️','Print on Demand','Printful, Redbubble, Merch by Amazon'],
            ['📌','Pinterest','High-res pins without slow loads'],
            ['📱','Social Media','Instagram, Facebook high quality posts'],
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
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-to-50kb','Compress to 50KB'],['/compress-to-100kb','Compress to 100KB'],['/compress-to-200kb','Compress to 200KB'],['/compress-for-shopify','For Shopify']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  </>);
}
