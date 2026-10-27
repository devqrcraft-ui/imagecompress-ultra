
const faq: [string, string][] = [
  ["How do I compress an image to 3MB?", "Type 3072 in Target KB Mode. The tool searches encoding quality on your device and hands back the best result that fits, so a busy 40-megapixel photo comes down in size without you choosing a percentage first."],
  ["Is 3MB already small for a large print?", "File size says nothing about print quality on its own - pixel count does. A 3MB file can be a printable 8x10 or a 40x40 inch poster depending on resolution, so check the dimensions in an image inspector before assuming either."],
  ["Can I compress a HEIC from my iPhone to 3MB?", "If your browser can decode HEIC, the file is read and re-encoded locally as part of the normal run. If it cannot, convert the photo to JPEG in the Photos app or an editor first, then use the same 3072 KB target."],
  ["Why would I pick AVIF over JPEG here?", "Smaller files at similar quality, which is useful when you are squeezing many images onto one page. Pick JPEG instead when the destination might reject AVIF - an upload portal that does not recognise the format is worse than a slightly bigger file."],
  ["Does re-encoding at 3MB damage the image?", "Every lossy pass discards something. At a 3072 KB ceiling the search normally stops high up the quality range, so the loss is usually invisible - but each round trip adds to it, so work from the original file rather than a copy you compressed yesterday."],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 3MB — Free Online Tool',
  description: "Compress an image to 3MB or under in your browser. Type 3072 in Target KB Mode and keep the detail a generous budget allows. No upload, no signup.",  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-3mb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-3mb' },
  keywords: 'compress image to 3MB, reduce photo to 3MB, compress to 3MB, image compressor 3MB',
};

export default function CompressTo3MBPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Compress Image to 3MB',
        url: 'https://www.compressto20kb.com/compress-to-3mb',
        description: 'Free tool to compress images to 3MB or under.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 3MB","item":"https://www.compressto20kb.com/compress-to-3mb"}]}' }} />
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          📦 Compress Image to <span style={{ color: '#818cf8' }}>3MB</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          Three megabytes is the point where the constraint stops being bytes and starts being format. Almost any photo fits comfortably, so the real decision is which container you want - and an iPhone HEIC original adds one extra step before the search even begins.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to 3MB or under</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href={"/?mode=exactkb&target=3072"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Compressor — Target 3MB
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Working with a 3MB ceiling</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your image', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Target KB Mode', desc: 'Click the "🎯 Target KB Mode" tab and enter 3072 as your target size.' },
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
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '36px 0 14px' }}>At 3MB the format choice is the whole decision</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '14px' }}>With a ceiling this roomy, the quality search rarely has to go low, so pick the container by what you intend to do with the file.</p>
        <ul style={{ paddingLeft: '20px', lineHeight: 1.85, fontSize: '15px', opacity: 0.82, marginBottom: '30px' }}>
          {[
              "JPEG for compatibility: email clients, old portals, anything that has to open the file without questions.",
              "WebP for anything that lives on the open web; most current browsers and CMS uploads accept it, and it holds up well at the same byte count.",
              "AVIF goes smallest of the formats offered here, but support is not universal, so check that the destination takes it before you commit a batch to it.",
              "PNG only when you need lossless pixels or an alpha channel - flat-colour artwork keeps its edges, photographs do not benefit.",
              "iPhone photos (HEIC/HEIF) are decoded in the browser where the browser itself can read them. On a browser that cannot, convert to JPEG first and then compress - the tool will not silently produce nothing."
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
            ["/compress-to-2mb", "Compress to 2MB"],
            ["/compress-to-5mb", "Compress to 5MB"],
            ["/compress-to-1mb", "Compress to 1MB"],
            ["/dpi-converter", "Change the DPI"],
            ["/faq", "Compression FAQ"],
            ["/", "Back to the compressor"]
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
