
const faq: [string, string][] = [
  ["How do I compress an image to 5MB?", "Type 5000 in Target KB Mode - that is the highest number the field accepts, and it is comfortably inside a 5MB limit. The tool re-encodes locally and returns the best quality that fits."],
  ["The output is the same size as my upload - is it broken?", "Most likely your file was already under the target. The tool leaves an image alone when it already fits rather than re-encoding it for nothing, which protects you from pointless generation loss."],
  ["Why is the maximum target 5000 KB?", "Because above that a size ceiling is not really constraining anything - the tool exists to satisfy limits that matter, such as 20KB, 100KB or 1MB portal caps. If your destination allows 5MB-plus, pick a target that reflects what you actually want the file to weigh."],
  ["Does a 5000 KB target preserve the original exactly?", "No. Anything lossy discards data, and a very large image is also downscaled to a 4096 px longest side. At this ceiling the loss is usually hard to see, but if you need a true untouched master, keep the original file and work from a copy."],
  ["Can I run a whole folder at this size?", "Up to 50 files per batch, each measured against the same target, with individual downloads or a single ZIP at the end. Processing is sequential in your browser, so a big batch takes longer rather than finishing instantly."],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 5MB — Free Online Tool',
  description: "Compress an image to 5MB or under - the highest ceiling this tool's target field accepts (5000 KB). Local processing, nothing uploaded, no watermark.",  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-5mb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-5mb' },
  keywords: 'compress image to 5MB, reduce photo to 5MB, compress to 5MB, image compressor 5MB',
};

export default function CompressTo5MBPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Compress Image to 5MB',
        url: 'https://www.compressto20kb.com/compress-to-5mb',
        description: 'Free tool to compress images to 5MB or under.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 5MB","item":"https://www.compressto20kb.com/compress-to-5mb"}]}' }} />
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          📦 Compress Image to <span style={{ color: '#818cf8' }}>5MB</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          5000 KB is the top of the range: the target field in Target KB Mode stops there, which makes this page the natural place to explain what happens when the ceiling is barely a ceiling at all.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to 5MB or under</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href={"/?mode=exactkb&target=5000"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Compressor — Target 5MB
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Using the top of the target range</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your image', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Target KB Mode', desc: 'Click the "🎯 Target KB Mode" tab and enter 5000 - the top of the range. 5000 KB is under 5MB, so any result the tool returns already clears that ceiling.' },
          { step: '4', title: 'Download compressed file', desc: 'The result is at or under your target. Download it once the preview looks right.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '36px 0 14px' }}>What happens when the target is 5000 KB</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '14px' }}>A generous ceiling changes the shape of the search rather than making it easier.</p>
        <ul style={{ paddingLeft: '20px', lineHeight: 1.85, fontSize: '15px', opacity: 0.82, marginBottom: '30px' }}>
          {[
              "Many files arrive already under 5MB. The tool detects that and returns them unchanged, so nothing is re-encoded just to prove it could - which is why the output sometimes looks identical to your upload.",
              "For files that are over, the quality search can stop very high - close to the 95% upper bound - so the visible difference from the original is usually negligible.",
              "The 4096 px longest-side cap still applies. A 12000 px master is downscaled as part of the run whatever target you type, and that is often where the real saving comes from.",
              "Memory, not quota, is the limit here: nothing is uploaded, so a big file is bounded by your own machine rather than by a server plan or a daily allowance."
          ].map((t, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{t}</li>
          ))}
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Frequently Asked Questions</h2>
        {faq.map(([q, a], i) => (
          <details key={i} style={{ display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.25)', borderRadius: '10px', padding: '13px 16px', marginBottom: '8px' }}>
            <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#c7d2fe' }}>{q}</summary>
            <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.75 }}>{a}</p>
          </details>
        ))}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '40px' }}>
          {[
            ["/compress-to-3mb", "Compress to 3MB"],
            ["/compress-to-10mb", "Under 10MB"],
            ["/compress-to-1mb", "Compress to 1MB"],
            ["/image-size-checker-online", "Check your image size"],
            ["/compress-without-uploading", "Why no upload matters"],
            ["/", "Back to the compressor"]
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
