const faq: [string, string][] = [
  ['What is the best image size for eBay listings?', 'eBay\'s seller help recommends at least 1600px on the longest side so the zoom feature activates, with a 500px floor (checked October 2026). A 1600×1600px JPEG kept small loads fastest on mobile listing pages.'],
  ['What file size should eBay images be?', 'eBay accepts images up to 12MB but does not publish an ideal KB target. Our recommendation is 200–500KB per photo — small enough to load quickly, large enough to stay sharp at 1600px.'],
  ['Can I use WebP images on eBay?', 'Upload JPEG or PNG to eBay. Our tool runs entirely in your browser and can re-encode a WebP, HEIC, or PNG file as JPEG in one step, so you can convert and compress before uploading.'],
  ['Does eBay resize images automatically?', 'eBay does not resize your photo to reach the 1600px zoom threshold — a smaller image simply loses zoom. Our compressor does not resize to arbitrary dimensions either; it only caps the longest side at 4096px and reduces file size.'],
];
import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox'
import Link from 'next/link';
import EbayInlineCalc from './EbayInlineCalc';

export const metadata: Metadata = {
  title: 'eBay Listing Image Size Requirements 2026: 1600px, 12MB, JPEG',
  description: 'eBay listing image size 2026: minimum 1600px for zoom, JPEG, max 12MB. Free browser tool to compress eBay photos — no upload needed.',
  keywords: 'best image size for ebay, ebay listing photo size, compress image for ebay, ebay photo requirements, ebay product image size',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings' },
};


export default function EbayImageSizePage() {
  const s = {
    wrap: { maxWidth: 820, margin: '0 auto', padding: '32px 20px', color: '#c8d0e7', fontFamily: 'system-ui,sans-serif' },
    h1: { fontSize: 32, fontWeight: 900, color: '#818cf8', marginBottom: 8, lineHeight: 1.2 },
    lead: { fontSize: 16, color: '#94a3b8', marginBottom: 32, lineHeight: 1.7 },
    h2: { fontSize: 22, fontWeight: 800, color: '#c8d0e7', margin: '36px 0 12px' },
    p: { fontSize: 15, lineHeight: 1.8, color: '#94a3b8', marginBottom: 16 },
    table: { width: '100%', borderCollapse: 'collapse' as const, marginBottom: 24, fontSize: 14 },
    th: { background: '#1e1b4b', color: '#818cf8', padding: '10px 14px', textAlign: 'left' as const, fontWeight: 700, border: '1px solid #312e81' },
    td: { padding: '10px 14px', border: '1px solid #e2e8f0', color: '#c8d0e7', verticalAlign: 'top' as const },
    tdAlt: { padding: '10px 14px', border: '1px solid #e2e8f0', color: '#c8d0e7', verticalAlign: 'top' as const, background: '#0f0f1a' },
    cta: { display: 'inline-block', background: '#4f46e5', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 800, fontSize: 16, textDecoration: 'none', margin: '8px 0' },
    tip: { background: '#1e1b4b', border: '1px solid #818cf844', borderRadius: 10, padding: '16px 20px', margin: '20px 0' },
    tipTitle: { color: '#818cf8', fontWeight: 800, fontSize: 15, marginBottom: 6 },
  };

  return (
    <>
      <div style={s.wrap}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"eBay Image Size Requirements 2026: 1600px, 12MB, JPEG","item":"https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"eBay Image Size Requirements 2026: 1600px, 12MB, JPEG","description":"Compress your eBay photos for eBay 2026 specs — 1600px min for zoom, JPEG, under 12MB. Free tool, works in browser, no account needed.","url":"https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings","datePublished":"2026-01-01","dateModified":"2026-06-12","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}}' }} />

      <h1 style={s.h1}>Best Image Size for eBay Listings 2026</h1>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.68)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          <span>Last updated: June 2026</span>
          <span>{'·'}</span>
          <span>By the CompressTo20KB Team</span>
          <span>{'·'}</span>
          <span>{'~7 min read'}</span>
        </div>
      <p style={s.lead}>
        eBay's image guidance is simple but easy to miss: photos under 1600px lose the zoom feature, and heavy files
        slow your listing down on mobile. Here's what eBay's own help pages say, plus a free browser tool to fix your photos.
      </p>

      <Link href="/compress-for-ebay" style={s.cta}>
        → Compress &amp; Resize Images for eBay — Free
      </Link>

      <h2 style={s.h2}>eBay Image Requirements 2026</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Requirement</th>
            <th style={s.th}>eBay Minimum</th>
            <th style={s.th}>Recommended</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Minimum size', '500 × 500px', '1600 × 1600px (enables zoom)'],
            ['Maximum size', '—', '12MB per image'],
            ['Best format', 'JPEG or PNG', 'JPEG at 85% quality'],
            ['Background', 'Any', 'White (#FFFFFF) for main photo'],
            ['Max images', '—', 'Varies by category — check your listing form'],
            ['Aspect ratio', 'Any', 'Square (1:1) for consistency'],
          ].map(([req, min, rec], i) => (
            <tr key={req}>
              <td style={i % 2 === 0 ? s.td : s.tdAlt}><strong>{req}</strong></td>
              <td style={i % 2 === 0 ? s.td : s.tdAlt}>{min}</td>
              <td style={i % 2 === 0 ? s.td : s.tdAlt}>{rec}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={s.tip}>
        <div style={s.tipTitle}>💡 The 1600px Rule</div>
        <p style={{ ...s.p, marginBottom: 0 }}>
          eBay's zoom feature only activates when your image is at least 1600px on the longest side (per eBay seller help, checked October 2026).
          Buyers use zoom to inspect details, so uploading at 1600×1600px or larger is worth the extra care.
        </p>
      </div>

      <h2 style={s.h2}>What File Size Should eBay Images Be?</h2>
      <p style={s.p}>
        eBay allows up to 12MB per image, but that doesn't mean you should use it. Large files slow down
        your listing page, especially on mobile. The sweet spot is <strong style={{ color: '#c8d0e7' }}>200KB–500KB</strong> per
        image — small enough to load fast, large enough to look sharp at 1600px.
      </p>
      <p style={s.p}>
        Our tool compresses your eBay product photos to at or under the file size you type, at the highest quality
        setting that still fits. No upload to any server — everything runs in your browser.
      </p>

      <h2 style={s.h2}>eBay Image Compression: Step by Step</h2>
      {[
        ['1. Start with a high-resolution original', 'Use your phone camera or a DSLR at full resolution. You can always compress down, but you cannot add pixels back.'],
        ['2. Crop to square if needed', 'eBay works best with square images. Crop to 1:1 in a photo editor first — our tool compresses files but does not crop to a ratio.'],
        ['3. Compress to 200–500KB', 'Use our free tool — drag your image, set the target to 300KB, download instantly. The output lands at or under that number.'],
        ['4. Check the result', 'Start from a photo that is already at least 1600×1600px — the tool keeps your dimensions (up to a 4096px cap) and only reduces file size.'],
      ].map(([title, text]) => (
        <div key={title} style={{ marginBottom: 16 }}>
          <strong style={{ color: '#c8d0e7', fontSize: 15 }}>{title}</strong>
          <p style={{ ...s.p, marginBottom: 0, marginTop: 4 }}>{text}</p>
        </div>
      ))}

      <h2 style={s.h2}>Free eBay Image Compressor</h2>
      <p style={s.p}>
        Use our free tool to compress and resize your eBay listing photos instantly.
        No account needed, no upload — your files never leave your device.
      </p>

      <EbayInlineCalc />

      <h2 style={s.h2}>Frequently Asked Questions</h2>
      {faq.map(([q, a]) => (
        <div key={q} style={{ marginBottom: 24, borderBottom: '1px solid #e2e8f0', paddingBottom: 16 }}>
          <h3 style={{ color: '#818cf8', fontSize: 16, fontWeight: 700, margin: '0 0 8px' }}>{q}</h3>
          <p style={{ ...s.p, marginBottom: 0 }}>{a}</p>
        </div>
      ))}

      <div style={{ ...s.tip, marginTop: 32 }}>
        <div style={s.tipTitle}>Also useful</div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          {[
            ['/compress-for-shopify', 'Compress for Shopify'],
            ['/compress-for-etsy', 'Compress for Etsy'],
            ['/compress-to-200kb', 'Compress to 200KB'],
            ['/compress-to-500kb', 'Compress to 500KB'],
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ color: '#c7d2fe', fontSize: 14 }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
      <AuthorBox />
    </>
  );
}
