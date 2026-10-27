import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Photos for Instagram — Sharp at 1080px, Free',
  description: 'Instagram sizes your upload down to 1080px wide and re-encodes it. Do that step yourself, at the quality you choose. Free, in your browser, no upload.',
  keywords: 'compress image for instagram, resize image for instagram, instagram photo size, compress photo for instagram, instagram image optimizer',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-instagram' },
  openGraph: {
    title: 'Compress Images for Instagram Free — 1080px, No Upload',
    description: 'Prepare a photo at the width Instagram actually renders, in your browser, without uploading it.',
    url: 'https://www.compressto20kb.com/compress-for-instagram',
    images: [{ url: 'https://www.compressto20kb.com/og-image.png', width: 1200, height: 630, alt: 'Compress Images for Instagram Free' }],
  },
};

const faq: [string, string][] = [
  ['What does Instagram do to the resolution of my photo?', 'Instagram help states that a photo shared below its display resolution is enlarged to a width of 320 pixels, and a photo shared above it is sized down to a width of 1080 pixels. So a 12-megapixel camera original is resampled by Instagram before anyone sees it in the feed.'],
  ['Why do my Instagram photos look blurry?', 'Because the resize and the re-encode happen on their side, from a file nobody prepared. Starting from a JPEG that is already near 1080px wide, at the best quality that fits comfortably under 1MB, means the app has less work to do — and you chose where the quality went instead of leaving it to their pipeline.'],
  ['Which width and ratio should I upload?', 'Work at 1080px wide and pick the ratio for the placement: 1:1 square (1080×1080), 4:5 portrait (1080×1350), 1.91:1 landscape (1080×566), 9:16 for Stories and Reels (1080×1920). Portrait 4:5 fills the most feed space on a phone.'],
  ['What format should I use for Instagram photos?', 'JPEG. It is the format Instagram has always expected for photos, and the app re-encodes what you upload anyway, so a clean JPEG at 1080px is the least surprising input. We do not claim to know exactly how every other format is handled, so we would not rely on that.'],
  ['Will my photos be uploaded to this tool to compress them?', 'No. The image is decoded and re-encoded on your own device and never sent to our server. Open DevTools, watch the Network tab while compressing, and you can confirm it yourself.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photos for Instagram","item":"https://www.compressto20kb.com/compress-for-instagram"}]}' }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for Instagram
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Photos for <span style={{ color: '#818cf8' }}>Instagram</span> — Sharp at 1080px, Free
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Instagram resamples every photo you upload. Do that step yourself, at the size and quality you choose, before it reaches the app.
        </p>

        <div style={{maxWidth:'780px',margin:'0 auto 24px',padding:'0 20px',fontFamily:'system-ui,sans-serif'}}>
          <p style={{fontSize:'16px',lineHeight:1.8,color:'#e2e8f0',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'8px',padding:'16px 20px',margin:0}}>
            <strong style={{color:'#818cf8'}}>Quick answer:</strong> Instagram’s own help page says photos above its display resolution are sized down to 1080 pixels wide. So the preparation that actually helps is a JPEG already close to 1080px wide and comfortably under 1MB — for a feed photo, 300–500KB is plenty. Resize and compress it yourself and the app’s re-encode has far less to chew on. The tool below starts at a 500KB target; drop your photo in.
          </p>
        </div>

        <div style={{maxWidth:'780px',margin:'0 auto 40px',padding:'0 20px'}}>
          <CompressorTool initialTargetKB={500} />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Instagram Documents — and What We Recommend</h2>
          <p className="text-slate-400 text-sm mb-4">
            Instagram publishes how it resizes photos, not a table of required upload sizes. The middle column is how each placement renders; the right column is our advice for this tool.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Placement</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Ratio &amp; width</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">What we suggest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Square feed post', '1:1 · 1080×1080', 'JPEG, best quality under 500KB'],
                  ['Portrait feed post', '4:5 · 1080×1350', 'JPEG, best quality under 700KB — fills the most feed space'],
                  ['Landscape feed post', '1.91:1 · 1080×566', 'JPEG, best quality under 400KB'],
                  ['Story / Reel cover', '9:16 · 1080×1920', 'JPEG, best quality under 1MB, keep faces out of the top and bottom bands'],
                  ['Profile photo', '1:1, shown small and cropped round', 'JPEG, 320–800px, best quality under 100KB'],
                ].map(([type, dims, ours], i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className="py-3 px-4 text-slate-300 font-medium">{type}</td>
                    <td className="py-3 px-4 text-slate-400 text-center text-xs">{dims}</td>
                    <td className="py-3 px-4 text-violet-400 text-xs font-semibold">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            Source:{' '}
            <a href="https://help.instagram.com/1631821640426723/" rel="nofollow noopener noreferrer" target="_blank" className="text-indigo-400 underline">Instagram Help — Image resolution of photos you share</a>
            {' '}(checked October 2026). Because Instagram does not publish a required-size table, treat the KB numbers as our recommendation rather than a platform rule.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Why Preparing the File Yourself Helps</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Two things happen to an upload: a resize, then a re-encode. Instagram’s documented resize band runs from 320px up to 1080px wide, so a phone or camera file is being shrunk three or four times over on someone else’s server, with their resampler and their settings. Every one of those steps is a chance to lose the edge detail you read as mush in the feed.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Hand over a file that is already about 1080px wide and encoded cleanly, with the quality budget spent where it matters — the face, the product, the text — and the app’s work gets smaller and more predictable. That is not an exemption from their pipeline; it is you controlling the one step you can control.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress Photos for Instagram — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Drop the photo in', d: 'Click upload or drag your image above. JPEG, PNG, WebP and HEIC from an iPhone all work, up to 50 files at once.' },
              { n: '2', t: 'Match the width to the placement', d: 'Resize to 1080px wide and crop to the ratio you are posting — 1:1, 4:5 or 9:16 — before compressing.' },
              { n: '3', t: 'Set a ceiling, not a guess', d: 'Turn on Target KB Mode: 500 for a feed post, 100 for a profile photo. You get the best quality that still fits under that number.' },
              { n: '4', t: 'Check the preview, then post', d: 'Compare against the original, download, upload to Instagram. Nothing was sent to a server on the way.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white">{s.n}</div>
                <div><h3 className="font-semibold text-white mb-1">{s.t}</h3><p className="text-slate-400 text-sm">{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map(([q, a], i) => (
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
            {[
              ['/', '🏠 Home — Image Compressor'],
              ['/compress-for-linkedin', 'For LinkedIn'],
              ['/compress-for-pinterest', 'For Pinterest'],
              ['/compress-for-twitter', 'For Twitter/X'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-500kb', 'Compress to 500KB'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
