
const faq: [string, string][] = [
  ["How do I compress an image to 10MB?", "Usually you do not need to - measure the file first, and leave it alone if it is already smaller. If it really is over, set the highest target the tool accepts, 5000 KB, and the output is comfortably inside your 10MB limit."],
  ["Why can I not type 10240 as the target?", "The target field stops at 5000 KB, because this tool exists to satisfy limits that actually bind. For a 10MB ceiling, aiming at 5000 KB satisfies it and gives you the best quality the search can reach."],
  ["What kind of file is genuinely over 10MB?", "Typically a high-resolution scan, a very large master, or an uncompressed or lossless image. Those are cases where reducing pixel dimensions in an editor helps more than any re-encode - this tool only caps the longest side at 4096 px."],
  ["Will compressing to under 10MB hurt quality?", "At a target this loose the search normally stops near the top of its quality range, so visible change is usually minimal. Every lossy pass still discards something, so work from the file you need to keep and save the compressed version separately."],
  ["Does the tool upload a 10MB file?", "No - and it could not. Everything runs in your browser, so a very large photo, scan or export is bounded by the memory on your own machine rather than by an upload quota."],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 10MB — Free Online Tool',
  description: "Need an image under 10MB? Measure it first - most files already fit. If not, set the 5000 KB maximum target and the result is comfortably inside 10MB.",  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-10mb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-10mb' },
  keywords: 'compress image to 10MB, reduce photo to 10MB, compress to 10MB, image compressor 10MB',
};

export default function CompressTo10MBPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Compress Image to 10MB',
        url: 'https://www.compressto20kb.com/compress-to-10mb',
        description: 'Free tool to compress images to 10MB or under.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 10MB","item":"https://www.compressto20kb.com/compress-to-10mb"}]}' }} />
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          📦 Compress Image to <span style={{ color: '#818cf8' }}>10MB</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          A 10MB limit is rarely a real constraint: most photos you would ever upload are already under it. So this page is less about compression than about deciding whether you need to compress at all - and what to do if the file genuinely is that heavy.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Come back under 10MB, with room to spare</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. Reads JPEG, PNG, WebP, AVIF and HEIC; writes WebP, AVIF, JPEG or PNG.</p>
          <a href={"/?mode=exactkb&target=5000"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Compressor — Target 5000 KB
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Under 10MB: measure before you compress</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your image', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Target KB Mode', desc: 'Click the "🎯 Target KB Mode" tab and enter 5000 - the top of the range. 5000 KB is under 10MB, so any result the tool returns already clears that ceiling.' },
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
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '36px 0 14px' }}>The two-minute way to settle a 10MB limit</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '14px' }}>A 10MB ceiling is worth confirming before you act on it, because most images never reach it.</p>
        <ul style={{ paddingLeft: '20px', lineHeight: 1.85, fontSize: '15px', opacity: 0.82, marginBottom: '30px' }}>
          {[
              "Measure the file first - in your file manager, or with the image size checker on this site. If it is already under 10MB, stop: re-encoding would cost quality and buy nothing.",
              "If it is genuinely over, open the compressor and set 5000 KB, the highest target the field accepts. The output lands under 5MB, which satisfies a 10MB limit with room to spare.",
              "If you need something between 5MB and 10MB rather than under it, use a quality-percentage pass instead - at that size you are choosing a container, not fighting a ceiling.",
              "Oversized files are usually oversized because of pixel dimensions. Downscaling in an image editor typically shrinks a 10MB photo more than any compression pass, which is why this tool only ever caps the longest side at 4096 px."
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
            ["/compress-to-5mb", "Compress to 5MB"],
            ["/image-size-checker-online", "Check your image size"],
            ["/compress-to-1mb", "Compress to 1MB"],
            ["/compress-without-uploading", "Local processing"],
            ["/bulk-image-compressor", "Compress 50 at once"],
            ["/", "Back to the compressor"]
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
