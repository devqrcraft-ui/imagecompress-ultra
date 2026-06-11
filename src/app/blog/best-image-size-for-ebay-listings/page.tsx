import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox'
import Link from 'next/link';
import EbayInlineCalc from './EbayInlineCalc';

export const metadata: Metadata = {
  title: 'eBay Image Size Requirements 2026: 1600px, 12MB, JPEG — Free Tool',
  description: 'Resize your eBay photos to exact 2026 specs in seconds — 1600px min, JPEG, under 12MB. Free tool, works in browser, no account needed.',
  keywords: 'best image size for ebay, ebay listing photo size, compress image for ebay, ebay photo requirements, ebay product image size',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best image size for eBay listings?","acceptedAnswer":{"@type":"Answer","text":"eBay recommends images at least 1600x1600px for zoom functionality. Maximum file size is 12MB per photo. Use JPEG format at 80-85% quality. A 1600x1600px JPEG compressed to 200-500KB is ideal for eBay product listings."}},{"@type":"Question","name":"What file size should eBay images be?","acceptedAnswer":{"@type":"Answer","text":"eBay accepts images up to 12MB but best practice is 200-500KB for fast page loading. Compress your product photos to under 500KB using JPEG. Smaller files load faster on mobile, where 70% of eBay traffic comes from."}},{"@type":"Question","name":"Can I use WebP images on eBay?","acceptedAnswer":{"@type":"Answer","text":"Yes — eBay supports JPEG, PNG, GIF, TIFF, BMP, WebP, HEIC, and AVIF. JPEG is recommended for most product photos. WebP works but convert to JPEG if you experience upload issues."}},{"@type":"Question","name":"What is the minimum image size for eBay?","acceptedAnswer":{"@type":"Answer","text":"eBay requires a minimum of 500px on the longest side. However, the zoom feature only activates at 1600px or larger. Images under 1600px will not allow buyers to zoom in, which reduces buyer confidence and conversions."}},{"@type":"Question","name":"How many photos can I upload to an eBay listing?","acceptedAnswer":{"@type":"Answer","text":"eBay allows up to 24 photos per listing at no extra charge. High-performing listings typically use 10-15 purposeful photos showing front, back, sides, defects, and scale references."}},{"@type":"Question","name":"What is the recommended eBay image size for 2026?","acceptedAnswer":{"@type":"Answer","text":"The recommended eBay image size for 2026 is 1600x1600 pixels in JPEG format, compressed to 200-500KB. This enables the zoom feature, loads fast on mobile, and meets all eBay requirements for product listings."}}]};

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
    cta: { display: 'inline-block', background: '#818cf8', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 800, fontSize: 16, textDecoration: 'none', margin: '8px 0' },
    tip: { background: '#1e1b4b', border: '1px solid #818cf844', borderRadius: 10, padding: '16px 20px', margin: '20px 0' },
    tipTitle: { color: '#818cf8', fontWeight: 800, fontSize: 15, marginBottom: 6 },
  };

  return (
    <>
      <div style={s.wrap}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"eBay Image Size Requirements 2026: 1600px, 12MB, JPEG","item":"https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"eBay Image Size Requirements 2026: 1600px, 12MB, JPEG","description":"Resize your eBay photos to exact 2026 specs in seconds — 1600px min, JPEG, under 12MB. Free tool, works in browser, no account needed.","url":"https://www.compressto20kb.com/blog/best-image-size-for-ebay-listings","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Image Optimization Specialist","sameAs":"https://medium.com/@ethan.blake.compress"}}' }} />

      <h1 style={s.h1}>Best Image Size for eBay Listings 2026</h1>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          <span>Last updated: June 2026</span>
          <span>{'·'}</span>
          <span>By Ethan Blake · Image Optimization Specialist</span>
          <span>{'·'}</span>
          <span>{'~7 min read'}</span>
        </div>
      <p style={s.lead}>
        eBay has strict image requirements — and getting them wrong means your listing won't show the zoom feature,
        loads slowly, or gets rejected. Here's exactly what you need, plus a free tool to fix your photos instantly.
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
            ['Max images', '—', '24 images per listing'],
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
          eBay's zoom feature only activates when your image is at least 1600px on the longest side.
          Listings with zoom get significantly more buyer engagement. Always upload at 1600×1600px minimum.
        </p>
      </div>

      <h2 style={s.h2}>What File Size Should eBay Images Be?</h2>
      <p style={s.p}>
        eBay allows up to 12MB per image, but that doesn't mean you should use it. Large files slow down
        your listing page, especially on mobile. The sweet spot is <strong style={{ color: '#c8d0e7' }}>200KB–500KB</strong> per
        image — small enough to load fast, large enough to look sharp at 1600px.
      </p>
      <p style={s.p}>
        Our tool compresses your eBay product photos to the exact file size you need, without losing visible quality.
        No upload to any server — everything runs in your browser.
      </p>

      <h2 style={s.h2}>eBay Image Compression: Step by Step</h2>
      {[
        ['1. Start with a high-resolution original', 'Use your phone camera or a DSLR at full resolution. You can always compress down, but you cannot add pixels back.'],
        ['2. Crop to square if needed', 'eBay works best with square images. Crop to 1:1 ratio before compressing.'],
        ['3. Compress to 200–500KB', 'Use our free tool — drag your image, set the target to 300KB, download instantly.'],
        ['4. Check the result', 'Your image should be 1600×1600px, JPEG format, under 500KB. Upload directly to your listing.'],
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
      {[
        ['What is the best image size for eBay listings?', 'eBay recommends images at least 1600px on the longest side for zoom functionality. Maximum file size is 12MB. Use JPEG format at 85% quality. A 1600×1600px JPEG compressed to under 500KB is ideal for eBay product listings.'],
        ['What file size should eBay images be?', 'eBay accepts images up to 12MB but best practice is under 1MB for fast page loading. Compress your product photos to 200–500KB using JPEG. Smaller files load faster and improve the buyer experience.'],
        ['Can I use WebP images on eBay?', 'eBay primarily supports JPEG and PNG formats. Convert WebP to JPEG before uploading to eBay listings. Our free tool handles WebP, HEIC, PNG, and JPEG — convert and compress in one step.'],
        ['Does eBay resize images automatically?', 'eBay does not resize images to meet the 1600px minimum — it just disables the zoom feature if your image is smaller. Always upload at the correct size yourself.'],
      ].map(([q, a]) => (
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
            <Link key={href} href={href} style={{ color: '#818cf8', fontSize: 14 }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
      <AuthorBox />
    </>
  );
}
