import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Image to 200KB Free Online — No Upload, 100% Private',
  description: 'Compress any image to exactly 200KB free online. Browser-based, files never leave your device. JPG, PNG, WebP, HEIC supported. Free forever.',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-200kb' },
};
const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
  {'@type':'Question',name:'How do I compress an image to 200KB?',acceptedAnswer:{'@type':'Answer',text:'Upload your image, select Exact KB Mode, type 200 and click Compress. Our tool uses binary search to hit 200KB precisely.'}},
  {'@type':'Question',name:'What is 200KB image size good for?',acceptedAnswer:{'@type':'Answer',text:'200KB is ideal for website blog posts, social media thumbnails, and product listings where you want good quality without slowing page load. It is also a common limit for real estate and classified ads portals.'}},
]};
export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/>
    <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Compress Image to 200KB Free Online</h1>
      <p className="text-slate-400 text-lg mb-8">100% Private · Files never leave your browser · No upload needed</p>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Why 200KB is the Web Sweet Spot</h2>
        <p className="text-slate-300 leading-relaxed mb-4">200KB gives excellent visual quality for most display sizes while loading fast on mobile connections. Real estate portals, classified ad sites like Craigslist and Zillow, and e-commerce platforms often cap uploads at 200KB to keep pages fast.</p>
        <p className="text-slate-300 leading-relaxed">Our tool finds the maximum quality that fits within 200KB — you get the sharpest image possible at that size.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Common Uses for 200KB Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['🏠','Real Estate Listings','Zillow, Realtor.com and MLS portals'],
            ['📰','Blog & CMS Uploads','WordPress, Ghost, and news sites'],
            ['🛒','E-commerce Products','WooCommerce and marketplace listings'],
            ['📋','Classified Ads','Craigslist, Facebook Marketplace'],
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
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-to-50kb','Compress to 50KB'],['/compress-to-100kb','Compress to 100KB'],['/compress-to-500kb','Compress to 500KB'],['/compress-for-shopify','For Shopify']].map(([h,l])=>(
            <a key={h} href={h} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{l} →</a>
          ))}
        </div>
      </section>
    </article>
  </>);
}
