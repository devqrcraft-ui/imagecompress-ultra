
const faq: [string, string][] = [
  ["How do I compress an image to 1MB?", "Open the free compressor, switch to Target KB Mode and type 1024. The tool re-encodes the image on your own device and returns the highest quality that fits inside that number, so what you download is 1MB or under. A file already smaller than 1MB comes back unchanged."],
  ["Why will my PNG screenshot barely shrink at 1MB?", "PNG stores screen content without discarding anything, so a large flat-colour screenshot can be heavy no matter what you do to quality. Change the output format to WebP or JPEG and the same picture normally fits comfortably - the trade is slightly softer text edges."],
  ["Does compressing to 1MB throw away detail?", "It depends on the photo, not on the number. The tool walks encoding quality downward from about 95% until the file fits, so a simple portrait at 1MB is usually indistinguishable from the original while a busy crowd scene shows it sooner. Check the before/after preview before relying on it."],
  ["Will the tool resize my image to fit 1MB?", "Only in one specific way: the longest side is capped at 4096 px, so a huge camera export is downscaled as well as re-encoded. It will not resize to dimensions you name and it cannot crop to a ratio - do that in an image editor first."],
  ["Is 1MB a limit some website really imposes?", "Some uploads and hosts do state a 1MB cap, and plenty of people come here because of it. The figure that matters is the one printed on the page that rejected your file - this tool simply lets you aim at it instead of guessing with a quality slider."],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 1MB — Free Online Tool',
  description: "Compress an image to 1MB or under in your browser. Type 1024 in Target KB Mode and get the best quality that fits - no upload, no account.",  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-1mb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-1mb' },
  keywords: 'compress image to 1MB, reduce photo to 1MB, compress to 1MB, image compressor 1MB',
};

export default function CompressTo1MBPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Compress Image to 1MB',
        url: 'https://www.compressto20kb.com/compress-to-1mb',
        description: 'Free tool to compress images to 1MB or under.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 1MB","item":"https://www.compressto20kb.com/compress-to-1mb"}]}' }} />
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          📦 Compress Image to <span style={{ color: '#818cf8' }}>1MB</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          A 1MB ceiling is the most common one on the open web: roomy enough that an ordinary photo keeps its detail, tight enough that a page still loads quickly. Type 1024 into Target KB Mode and the tool searches encoding quality on your own device until the file fits underneath it.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to 1MB or under</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href={"/?mode=exactkb&target=1024"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Compressor — Target 1MB
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Getting a photo under 1MB</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your image', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Target KB Mode', desc: 'Click the "🎯 Target KB Mode" tab and enter 1024 as your target size.' },
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
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '36px 0 14px' }}>What 1MB is actually enough for</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '14px' }}>1MB is a generous budget for a screen-sized photo, so the interesting question is not whether the tool can reach it but what you give up to get there.</p>
        <ul style={{ paddingLeft: '20px', lineHeight: 1.85, fontSize: '15px', opacity: 0.82, marginBottom: '30px' }}>
          {[
              "Ordinary photos at 1200-2000 px on the longest side usually reach 1MB while staying visually close to the original - but that is a property of the photo, not a promise, so look at the Before/After slider before you ship the file.",
              "Screenshots and line art behave differently. A PNG full of flat colour and crisp text is stored losslessly, so it can sit stubbornly above 1MB; switching the output to WebP or JPEG usually solves it, at the cost of slightly softer text edges.",
              "If your file is already smaller than 1MB it comes back unchanged. The tool does not re-encode something that already fits, so there is no gratuitous generation loss.",
              "One thing 1MB does not buy you: dimensions. The longest side is only capped at 4096 px, so a 9000 px panorama arrives as a 9000 px file that happens to be small."
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
            ["/compress-to-500kb", "Compress to 500KB"],
            ["/compress-to-200kb", "Compress to 200KB"],
            ["/compress-to-2mb", "Compress to 2MB"],
            ["/image-size-checker-online", "Check your image size"],
            ["/compress-for-email", "Compress for email"],
            ["/", "Back to the compressor"]
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
