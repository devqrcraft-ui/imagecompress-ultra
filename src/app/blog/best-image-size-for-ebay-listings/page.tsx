const faq: [string, string][] = [
  ['What is the best image size for eBay listings?', 'eBay requires at least 500 pixels on the longest side and recommends images around 1600 × 1600 pixels. Check the listing form for current category-specific settings.'],
  ['What file size should eBay images be?', 'eBay allows image files up to 12MB each. There is no official ideal KB target; use the smallest file that still looks clear at the required dimensions.'],
  ['Can I use WebP images on eBay?', 'eBay currently lists JPEG, PNG, GIF, TIFF, BMP, WebP, HEIC, and AVIF as accepted formats. Check the listing form if an upload is rejected.'],
  ['How many photos can I add to an eBay listing?', 'eBay says you can add up to 24 pictures. Availability may vary by listing flow or category, so confirm the limit shown in your listing form.'],
];
import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox'
import Link from 'next/link';
import EbayInlineCalc from './EbayInlineCalc';

export const metadata: Metadata = {
  title: 'eBay Image Size 2026: 1600px for Zoom, 500px Minimum',
  description: 'eBay requires at least 500px on the longest side and recommends about 1600px. Learn current file, format, and photo-count guidance.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"Best Image Size for eBay Listings","item":"https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Best Image Size for eBay Listings","description":"eBay requires at least 500 pixels on the longest side and recommends images around 1600 × 1600 pixels. This guide covers current file, format, and photo-count guidance.","url":"https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings","datePublished":"2026-01-01","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"}}' }} />

      <h1 style={s.h1}>Best Image Size for eBay Listings</h1>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.68)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          <span>Last checked: November 2026</span>
          <span>{'·'}</span>
          <span>By the CompressTo20KB Team</span>
          <span>{'·'}</span>
          <span>{'~7 min read'}</span>
        </div>
      <p style={s.lead}>
        eBay requires photos to be at least 500 pixels on the longest side and recommends images around 1600 × 1600 pixels.
        The exact file-size and format options are shown in the listing form.
      </p>

      <Link href="/compress-for-ebay" style={s.cta}>
        → Compress &amp; Resize Images for eBay — Free
      </Link>

      <h2 style={s.h2}>eBay Image Requirements</h2>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Requirement</th>
            <th style={s.th}>eBay limit or rule</th>
            <th style={s.th}>Guidance</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Image dimensions', '500px minimum on the longest side', 'About 1600 × 1600px recommended'],
            ['Maximum file size', '12MB per image', 'No official ideal KB target'],
            ['Accepted formats', 'JPEG, PNG, GIF, TIFF, BMP, WebP, HEIC, AVIF', 'Check the listing form if upload fails'],
            ['Photo count', 'At least 1 required', 'Up to 24 pictures'],
            ['Background', 'No universal white-background rule', 'Neutral is generally best; reflective items may suit darker backgrounds'],
          ].map(([req, min, rec], i) => (
            <tr key={req}>
              <td style={i % 2 === 0 ? s.td : s.tdAlt}><strong>{req}</strong></td>
              <td style={i % 2 === 0 ? s.td : s.tdAlt}>{min}</td>
              <td style={i % 2 === 0 ? s.td : s.tdAlt}>{rec}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={s.p}>
        Sources: eBay&apos;s <a href="https://www.ebay.com/help/selling/listings/creating-managing-listings/picture-policy?id=4370" target="_blank" rel="noopener noreferrer" style={{ color: '#c7d2fe' }}>picture policy</a> and <a href="https://www.ebay.com/help/selling/listings/creating-managing-listings/add-edit-pictures?id=4148" target="_blank" rel="noopener noreferrer" style={{ color: '#c7d2fe' }}>photo upload guidance</a>.
      </p>

      <div style={s.tip}>
        <div style={s.tipTitle}>💡 Recommended image dimensions</div>
        <p style={{ ...s.p, marginBottom: 0 }}>
          eBay recommends images around 1600 × 1600 pixels, but its picture policy sets a 500-pixel minimum on the longest side.
          A larger source can preserve detail; the 1600-pixel recommendation is not a guarantee of zoom or better search placement.
        </p>
      </div>

      <h2 style={s.h2}>What File Size Should eBay Images Be?</h2>
      <p style={s.p}>
        eBay allows up to 12MB per image. It does not publish an ideal KB target, so choose a size that meets the listing form&apos;s
        limit while keeping the image clear at its original dimensions. Smaller files can be quicker to transfer, but aggressive
        compression may reduce visible detail.
      </p>
      <p style={s.p}>
        Our tool compresses your eBay product photos to at or under the file size you type, at the highest quality
        setting that still fits. No upload to any server — everything runs in your browser.
      </p>

      <h2 style={s.h2}>eBay Image Compression: Step by Step</h2>
      {[
        ['1. Start with a high-resolution original', 'Use your phone camera or a DSLR at full resolution. You can always compress down, but you cannot add pixels back.'],
        ['2. Keep the product clear in frame', 'Use a crop that shows the item accurately. Our tool compresses files but does not crop or validate image composition.'],
        ['3. Choose a file-size target', 'Use the limit shown in your eBay listing form. eBay does not publish an ideal KB target; preserve enough detail for buyers to inspect the item.'],
        ['4. Check the result', 'Confirm the output still meets the dimensions and file-size limit shown in your eBay listing form. Compression does not add pixels or verify listing requirements.'],
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
