
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I compress an image to 5MB?","acceptedAnswer":{"@type":"Answer","text":"Upload your image, select 5MB as the target size, and click compress. Our tool automatically reduces quality and resolution to hit exactly 5MB or under. All processing happens in your browser."}},{"@type":"Question","name":"Will compressing reduce image quality?","acceptedAnswer":{"@type":"Answer","text":"Some quality reduction is necessary to reach very small file sizes. Our tool minimizes visible quality loss by using smart compression algorithms. WebP format produces the best quality at small sizes."}},{"@type":"Question","name":"Is there a file size limit for compression?","acceptedAnswer":{"@type":"Answer","text":"No. You can compress images of any size — from smartphone photos (3-5MB) to DSLR RAW exports (20MB+). The tool runs entirely in your browser so there are no server upload limits."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 5MB — Free Online Tool',
  description: 'Compress any image to exactly 5MB online. Perfect for high-quality document scans. Free, no upload, 100% private. Works instantly in your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-to-5mb' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-to-5mb' },
  keywords: 'compress image to 5MB, reduce photo to 5MB, compress to 5MB, image compressor 5MB',
};

export default function CompressTo5MBPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Compress Image to 5MB',
        url: 'https://www.compressto20kb.com/compress-to-5mb',
        description: 'Free tool to compress images to exactly 5MB.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '892', bestRating: '5', worstRating: '1' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image to 5MB","item":"https://www.compressto20kb.com/compress-to-5mb"}]}' }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          📦 Compress Image to <span style={{ color: '#818cf8' }}>5MB</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          Instantly compress any photo or image to exactly 5MB. Perfect for high-quality document scans. No upload required — all processing happens in your browser.
        </p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to exactly 5MB</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported.</p>
          <a href={"/?mode=exactkb&target=5120"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Compressor — Target 5MB
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>How to compress image to 5MB</h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens the free compressor. No signup or install needed.' },
          { step: '2', title: 'Upload your image', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC.' },
          { step: '3', title: 'Select Exact KB Mode', desc: 'Click the "🎯 Exact KB Mode" tab and enter 5120 as your target size.' },
          { step: '4', title: 'Download compressed file', desc: 'Your image is compressed to under 5MB. Download instantly.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '40px' }}>
          {['/compress-to-20kb','/','/compress-to-50kb','/compress-to-100kb','/compress-to-200kb','/compress-to-500kb'].map(href => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{href}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
