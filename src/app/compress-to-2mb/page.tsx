
const faq: [string, string][] = [
  ["How do I compress a scanned document to 2MB?", "Switch to Target KB Mode and type 2048. The tool re-encodes the file on your device until it fits under that number. Small text is the first casualty, so zoom to 100% on the preview and check that everything you need to read is still readable."],
  ["Is 2MB safe for an email attachment?", "Attachments count the total message, and mail systems add overhead on top of your file, so a 2MB image in a 2MB message can still bounce. If the recipient's server is the constraint, aim lower - 1024 KB gives you room for the rest of the message."],
  ["My scan came out blurry at 2MB - what now?", "Blurriness at a fixed ceiling is usually a pixel-count problem, not a quality problem. Resize the scan smaller in an image editor first, then run this tool against the same 2048 KB target; with fewer pixels to describe, the quality setting can stay higher."],
  ["Does this handle multi-page scans?", "It processes up to 50 separate image files in one batch and returns them individually or as a ZIP. It does not merge pages into a PDF - for that, use a document tool and keep this for the images themselves."],
  ["Are my scans uploaded anywhere?", "No. Decoding, re-encoding and the size search all happen in your browser, so a passport copy or an ID photo never leaves the machine you are sitting at."],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 2MB — Free Online Tool',
  description: "Bring scans, screenshots and document photos under 2MB online. Set 2048 KB in Target KB Mode; the file is re-encoded locally and never uploaded.",  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-2mb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-2mb' },
  keywords: 'compress image to 2MB, reduce photo to 2MB, compress to 2MB, image compressor 2MB',
};

export default function CompressTo2MBPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Compress Image to 2MB',
        url: 'https://www.compressto20kb.com/compress-to-2mb',
        description: 'Free tool to compress images to 2MB or under.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 2MB","item":"https://www.compressto20kb.com/compress-to-2mb"}]}' }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ CompressTo20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          📦 Compress Image to <span style={{ color: '#818cf8' }}>2MB</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          A 2MB ceiling is the one attached to documents: a scanned page, a photographed contract, a passport copy mailed as a picture. Type 2048 into Target KB Mode and the search runs on your own device, which matters here more than usual, because these are the files nobody wants to hand to a server.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to 2MB or under</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href={"/?mode=exactkb&target=2048"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Compressor — Target 2MB
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Fitting a document-style image inside 2MB</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your image', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Target KB Mode', desc: 'Click the "🎯 Target KB Mode" tab and enter 2048 as your target size.' },
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
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '36px 0 14px' }}>Why scans and screenshots need a different approach</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '14px' }}>Document images are the awkward case for compression, because everything that makes them legible - sharp edges, small text, high contrast - is exactly what lossy encoding damages first.</p>
        <ul style={{ paddingLeft: '20px', lineHeight: 1.85, fontSize: '15px', opacity: 0.82, marginBottom: '30px' }}>
          {[
              "A scan at 300 DPI is large because it is dense, not because it is noisy. Aim for the smallest file you can still read at 100% zoom rather than the smallest file possible.",
              "Grayscale or black-and-white page images often survive a JPEG or WebP pass at 2048 KB better than a colour page does, because there is less chroma information to discard.",
              "If text turns muddy at 2048, the fix is usually pixels rather than quality: shrink the physical dimensions in an image editor, then re-run the target. This tool does not resize to dimensions you name.",
              "Multi-page documents belong in a PDF, not in a folder of images. This page handles single image files, up to 50 of them in one batch."
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
            ["/compress-to-1mb", "Compress to 1MB"],
            ["/compress-to-500kb", "Compress to 500KB"],
            ["/compress-to-3mb", "Compress to 3MB"],
            ["/image-size-checker-online", "Check your image size"],
            ["/compress-image-for-google-forms", "Uploads for forms"],
            ["/", "Back to the compressor"]
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
