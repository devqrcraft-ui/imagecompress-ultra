import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Photo for LinkedIn — Free, No Upload',
  description: 'Reduce the file size of a LinkedIn profile photo, banner or company image before you upload it. Free, no upload to a server, works in your browser.',
  keywords: 'compress photo for linkedin, linkedin profile photo size, linkedin banner image size, resize photo for linkedin, compress linkedin profile picture free',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-linkedin' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-linkedin' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What image size does LinkedIn ask for on a profile photo?',
      acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn help states a profile photo must be between 400x400 and 7680x4320 pixels and no larger than 8MB, in PNG or JPG. Our own recommendation for a compressed upload is a square JPEG around 400-800px kept at the highest quality that still fits under 200KB.' },
    },
    {
      '@type': 'Question',
      name: 'What size should a LinkedIn banner be?',
      acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn help lists the recommended background photo as 1584x396 pixels in PNG or JPG. File type must be PNG or JPG — LinkedIn notes that GIF is not supported for the background photo. We suggest compressing the banner to the best quality that stays under 500KB and keeping important content centered, because the crop differs between desktop and mobile.' },
    },
    {
      '@type': 'Question',
      name: 'Does LinkedIn compress the photos I upload?',
      acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn re-encodes images when it creates the display crops for the grid, mobile app and notifications. Uploading an already-clean, reasonably small JPEG means fewer generations of re-encoding on top of your own file, which usually preserves more edge detail than pushing a multi-megabyte original through the same pipeline.' },
    },
    {
      '@type': 'Question',
      name: 'Which file format should I use for LinkedIn images?',
      acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn documents PNG or JPG for profile and background photos. JPEG is the smaller choice for a headshot; PNG is worth using when the image is flat graphics with sharp text or needs transparency.' },
    },
    {
      '@type': 'Question',
      name: 'Will my photo be uploaded to this tool to compress it?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Compression runs locally in your browser. The image is decoded and re-encoded on your own device, so nothing is sent to our server — you can confirm this yourself in DevTools while compressing.' },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photo for LinkedIn","item":"https://www.compressto20kb.com/compress-for-linkedin"}]}' }} />
      <article className="max-w-3xl mx-auto px-4 py-8 text-slate-100">

        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for LinkedIn
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compress Photo for <span style={{ color: '#818cf8' }}>LinkedIn</span> — Free, No Upload
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Shrink a LinkedIn profile photo, banner or company image in your browser before you upload it. No signup, no server upload.
        </p>

        <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 20px 8px',fontFamily:'system-ui,sans-serif'}}>
          <p style={{fontSize:'16px',lineHeight:1.8,color:'#e2e8f0',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'8px',padding:'16px 20px',margin:'0 0 8px'}}>
            <strong style={{color:'#818cf8'}}>Quick answer:</strong> LinkedIn documents a profile photo between 400×400 and 7680×4320 px, up to 8MB, in PNG or JPG, and a background photo of 1584×396 px. Those ceilings are generous — so the useful job here is not dodging a limit, it is handing LinkedIn a clean, smaller file instead of a multi-megabyte original it has to re-encode several times. Drop the image below and set Target KB Mode to 200 for a headshot or 500 for a banner.
          </p>
        </div>

        <div style={{ margin: '8px auto 40px', maxWidth: '780px' }}>
          <CompressorTool initialTargetKB={200} />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What LinkedIn Documents — and What We Recommend</h2>
          <p className="text-slate-400 text-sm mb-4">
            The middle column is LinkedIn&apos;s own published guidance. The right column is our advice for this tool, not a platform rule.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Image</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Documented by LinkedIn</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">What we suggest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Profile photo', '400×400 to 7680×4320 px, max 8MB, PNG or JPG', 'Square JPEG, 400–800 px, best quality under 200KB'],
                  ['Background photo', '1584×396 px, PNG or JPG (GIF not supported)', 'JPEG at 1584×396, best quality under 500KB, content centered'],
                  ['Post image', 'No single documented maximum', 'JPEG, 1200 px wide, best quality under 500KB'],
                  ['Company graphics', 'Use PNG or JPG for page imagery', 'PNG when there is flat colour or transparency, JPEG for photos'],
                ].map(([type, li, ours], i) => (
                  <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                    <td className="py-3 px-4 text-slate-300 font-medium">{type}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{li}</td>
                    <td className="py-3 px-4 text-violet-400 text-xs font-semibold">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            Source:{' '}
            <a href="https://www.linkedin.com/help/linkedin/answer/a549049" rel="nofollow noopener noreferrer" target="_blank" className="text-indigo-400 underline">LinkedIn Help — Photo won&apos;t upload to your profile</a>
            {' '}(checked October 2026). LinkedIn updates these numbers, so re-check the dimensions on the upload screen before relying on them.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Why Compress Before Uploading?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            LinkedIn builds several display crops from the file you give it — the profile grid, the mobile app, the company page header, thumbnails in notifications. Each crop is another encode. A phone camera headshot can arrive at 4–7MB and get resampled hard, so detail you paid for is spent on pixels nobody sees. Compressing to a sane size yourself keeps control of the trade-off: you decide where the quality goes, LinkedIn only has to make crops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              ['👤', 'Headshot', 'A face at 400–800px with a clean JPEG encode stays sharp in the search results and message threads where most people actually judge it.'],
              ['🖼️', 'Banner', '1584×396 is a wide, thin strip — text and logos placed near the edges get cut on mobile. Center the essentials, then compress.'],
              ['📉', 'Page speed', 'Profile and company pages load these images for every visitor. Smaller files render sooner, which matters most on mobile data.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Compress a Photo for LinkedIn — 4 Steps</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Drop your image in', d: 'Click upload or drag the profile photo or banner above. JPEG, PNG, WebP and HEIC all work.' },
              { n: '2', t: 'Pick the format', d: 'JPEG for a headshot or banner. Switch to PNG only if the graphic has flat colour, sharp text or needs transparency.' },
              { n: '3', t: 'Set the target', d: 'Turn on Target KB Mode: 200 for a profile photo, 500 for a banner. The tool returns the highest quality that fits under that number.' },
              { n: '4', t: 'Check, then upload', d: 'Compare the preview against the original, download the file and upload it to LinkedIn. Nothing was sent to a server along the way.' },
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
            {[
              ['What image size does LinkedIn ask for on a profile photo?', 'LinkedIn help states between 400x400 and 7680x4320 pixels, maximum 8MB, PNG or JPG. Our recommendation for the file you upload is a square JPEG around 400-800px at the highest quality that still fits under 200KB.'],
              ['What size should a LinkedIn banner be?', '1584x396 px in PNG or JPG — LinkedIn notes GIF is not supported for the background photo. Keep the important content centered: the crop differs between desktop and mobile.'],
              ['Does LinkedIn compress the photos I upload?', 'Yes, when it builds the display crops for the grid, app and notifications. Starting from a clean, smaller file means fewer re-encodes on top of your own, which normally preserves more edge detail.'],
              ['Which file format should I use?', 'JPEG is smaller for photos. PNG is the better match for flat graphics with sharp text or transparency.'],
              ['Will my photo be uploaded to this tool to compress it?', 'No. The image is decoded and re-encoded on your device. Open DevTools, watch the Network tab while compressing, and you will see the file never leaves your machine.'],
            ].map(([q, a], i) => (
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
              ['/compress-for-instagram', 'For Instagram'],
              ['/compress-for-twitter', 'For Twitter/X'],
              ['/compress-to-200kb', 'Compress to 200KB'],
              ['/compress-for-email', 'For Email'],
              ['/compress-for-resume-photo', 'Resume Photo'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-300 hover:text-white transition-all">{label} →</a>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
