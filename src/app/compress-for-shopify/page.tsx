import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image for Shopify — Faster Product Pages | Free, No Upload',
  description: 'Shopify accepts files up to 20MB, which is the problem, not the goal. Prepare product photos and theme images that load fast. Free, in-browser, no upload.',
  keywords: 'compress image for shopify, shopify product image size, shopify image optimization, reduce image size shopify, shopify image file size limit',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-shopify' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-shopify' },
};

const faq: [string, string][] = [
  ['What is Shopify’s image upload limit?', 'Shopify’s product media documentation says product and collection images need to be smaller than 20MB to be added. That is a gate you have to pass, not a budget to spend — a page full of near-20MB uploads is a page nobody waits for.'],
  ['If Shopify allows 20MB, why compress at all?', 'Because Shopify builds its own responsive copies from your file and serves those to shoppers, while your upload still has to travel once through the admin. Meanwhile the browser downloads the small versions, not yours. Compression is about what you ship and how fast the storefront renders, not about dodging the limit.'],
  ['What size should a Shopify product image be?', 'A good working range is 2000–2500px on the longest side for a photo that needs zoom, and a file that lands around 200–500KB once compressed. Theme banners can often go smaller, because they are stretched across a viewport rather than inspected close up.'],
  ['Which format for Shopify images?', 'JPEG for photography, WebP when you want smaller files and your theme or CDN delivers it, PNG only for graphics with transparency such as badges and logos. Our tool offers all three.'],
  ['Does this help my Core Web Vitals score?', 'It helps the part you control: bytes on the largest element above the fold. A lighter hero image usually improves LCP, and lighter product grids help total page weight. It will not fix slow apps, heavy tracking scripts or a bloated theme, so treat it as one input to a measured score, not a guarantee.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Shopify","item":"https://www.compressto20kb.com/compress-for-shopify"}]}' }} />

      <div style={{ background: '#0d1117', color: '#d1e0d8', fontFamily: 'system-ui,sans-serif' }}>
        <header style={{ borderBottom: '1px solid rgba(88,166,111,0.2)', padding: '16px 22px' }}>
          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
            <a href="/" style={{ color: '#7ee2a8', textDecoration: 'none', fontWeight: 700 }}>CompressTo20KB</a>
            <span style={{ opacity: 0.5 }}>Shopify image preparation</span>
          </div>
        </header>

        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '38px 22px 16px' }}>
          <div style={{ fontSize: '14px', opacity: 0.45, marginBottom: '12px' }}>
            <a href="/" style={{ color: '#7ee2a8', textDecoration: 'none' }}>Home</a> → Compress for Shopify
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,35px)', fontWeight: 800, margin: '0 0 14px', color: '#fff' }}>
            Shopify Lets You Upload 20MB. That Is The Problem.
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px', color: 'rgba(209,224,216,0.85)' }}>
            Shopify’s own product media docs set the gate at under 20MB per image — a generous ceiling that quietly encourages merchants to drag in camera originals. The storefront does not reward that. Shoppers get resized copies either way, and every heavy file you ship still costs you admin upload time and every visitor some share of a slow page.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(209,224,216,0.85)' }}>
            So prepare the file before it goes in: the resolution your theme can use, and the smallest honest encoding of it.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '18px 22px 36px' }}>
          <CompressorTool initialTargetKB={300} />
        </div>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 22px 36px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 700, color: '#7ee2a8', marginBottom: '16px' }}>Budget By Image Role, Not By What The Upload Tolerates</h2>
          {[
            { role: 'Product photo (zoomable)', res: '2000–2500 px longest side', budget: '200–500 KB', why: 'Detail buyers inspect, without carrying four times the bytes for pixels the theme never shows.' },
            { role: 'Collection / category tile', res: '1500–2000 px', budget: '150–300 KB', why: 'Displayed small and repeated across a grid — dozens of these add up fast.' },
            { role: 'Theme hero banner', res: 'Match your theme, usually 2000–2500 px wide', budget: '300–500 KB', why: 'Usually the largest element above the fold, so it drives LCP more than any other single file.' },
            { role: 'Logo and badges', res: 'Vector or 2× display size', budget: '20–80 KB', why: 'Flat colours compress almost for free; PNG or SVG beats JPEG here.' },
          ].map((r) => (
            <div key={r.role} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.8fr', gap: '14px', alignItems: 'center', background: 'rgba(126,226,168,0.05)', border: '1px solid rgba(126,226,168,0.15)', borderRadius: '10px', padding: '14px 16px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#e6f4ec' }}>{r.role}</div>
                <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(209,224,216,0.62)', marginTop: '4px' }}>{r.why}</div>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(209,224,216,0.8)' }}>{r.res}</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#7ee2a8' }}>{r.budget}</div>
            </div>
          ))}
          <p style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.5, marginTop: '12px' }}>
            Upload limit from{' '}
            <a href="https://help.shopify.com/en/manual/products/product-media/product-media-types" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#7ee2a8' }}>help.shopify.com — Product media types</a>
            {' '}(checked October 2026). The resolution and budget rows are our recommendations; your theme’s actual output sizes differ, so check the storefront rather than trusting a table.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 22px 36px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 700, color: '#7ee2a8', marginBottom: '14px' }}>How Shopify Actually Serves Your Image</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(209,224,216,0.8)', marginBottom: '12px' }}>
            A storefront does not hand shoppers the file you uploaded. The theme asks for the size it needs for that viewport and Shopify supplies a generated version. Two consequences follow, and they explain what is worth optimising:
          </p>
          <ol style={{ paddingLeft: '20px', lineHeight: 1.95, fontSize: '15.5px', color: 'rgba(209,224,216,0.8)' }}>
            <li><strong>Source quality sets the ceiling.</strong> A soft or over-compressed master produces soft copies at every size. Compress to the best encode that fits your budget — not to the smallest file you can get away with.</li>
            <li><strong>Resolution beyond your theme is dead weight.</strong> If the largest slot is 1200px wide, a 5000px master buys the shopper nothing while costing you upload time and storage.</li>
          </ol>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 22px 36px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 700, color: '#7ee2a8', marginBottom: '14px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(126,226,168,0.14)', borderRadius: '10px', padding: '13px 16px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#c8f0d8' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, color: 'rgba(209,224,216,0.72)' }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 22px 56px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#7ee2a8', marginBottom: '12px' }}>Next Steps</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(209,224,216,0.8)' }}>
            <a href="/bulk-image-compressor" style={{ color: '#7ee2a8' }}>Batch a whole catalogue and download a ZIP</a> ·{' '}
            <a href="/compress-for-etsy" style={{ color: '#7ee2a8' }}>Etsy listing photos</a> ·{' '}
            <a href="/compress-for-woocommerce" style={{ color: '#7ee2a8' }}>WooCommerce store images</a> ·{' '}
            <a href="/image-size-checker-online" style={{ color: '#7ee2a8' }}>Check a file’s dimensions before uploading</a> ·{' '}
            <a href="/" style={{ color: '#7ee2a8' }}>Main compressor</a>
          </p>
        </section>
      </div>
    </>
  );
}
