import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image for Etsy — Listing Photos Under 1MB',
  description: 'Prepare Etsy listing photos at the resolution Etsy recommends, without the file bloat. JPEG, batch up to 50 images, all compression done in your browser.',
  keywords: 'compress image for etsy, etsy listing photo size, etsy image requirements 2000 pixels, resize etsy listing photos, compress etsy photo free',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-etsy' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-etsy' },
};

const faq: [string, string][] = [
  ['How large should Etsy listing photos be?', 'Etsy’s own guidance for shop images recommends listing photos at least 2000 pixels wide and tall, so buyers can zoom into detail. That is a resolution recommendation — the file size is a separate question, and it is the one most sellers get wrong by uploading camera originals.'],
  ['What file size should I aim for on Etsy?', 'There is no published maximum to hit, so treat it as a page-speed question: a 2000px JPEG in the 500KB–1MB range keeps the detail Etsy wants while loading fast enough not to drag your listing page down. Our tool is set to 1MB here; drop it to 500KB if the photo is small in the frame.'],
  ['Does Etsy re-encode the photos I upload?', 'Like any hosted gallery, Etsy generates its own resized copies for search results, shop tiles and the listing page. What you upload is the source those copies come from, which is exactly why shipping a well-encoded 2000px file beats shipping a 12MB raw export.'],
  ['Will compressing make my handmade detail look worse?', 'Not if you set the ceiling rather than accepting a preset. Target KB Mode steps the quality down only as far as it must to fit under your number, so a close-up of stitching or glaze keeps as much edge detail as that budget allows. Always glance at the preview at full size before uploading.'],
  ['Can I compress a whole shop’s worth of photos at once?', 'Yes — up to 50 files in one run, one target, ZIP download. Sellers refreshing a shop usually have dozens of images shot in the same light, so a single pass fits.'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Etsy","item":"https://www.compressto20kb.com/compress-for-etsy"}]}' }} />

      <div style={{ minHeight: '100vh', background: '#fffaf5', color: '#3d2c1e', fontFamily: 'ui-rounded,system-ui,sans-serif' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 22px 16px' }}>
          <div style={{ fontSize: '14px', color: '#7a5136', marginBottom: '14px' }}>
            <a href="/" style={{ color: '#c2410c', textDecoration: 'none', fontWeight: 600 }}>Home</a> → Compress for Etsy
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, margin: '0 0 14px', color: '#2b1d12' }}>
            Etsy Listing Photos, Compressed The Right Way Round
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 10px', color: '#5b4636' }}>
            Etsy asks for big photos — at least 2000 pixels so a buyer can zoom in on the stitch, the glaze, the grain. That is why sellers stop worrying about file size. But a listing page still has to load on a phone, and a camera original does nobody any favours.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#5b4636' }}>
            Keep the pixels Etsy wants. Spend the bytes where the product is.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 22px 34px' }}>
          <CompressorTool initialTargetKB={1000} />
        </div>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 22px 34px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#9a3412', marginBottom: '16px' }}>Pick Your Size By What The Photo Has To Do</h2>
          <div style={{ display: 'grid', gap: '14px' }}>
            {[
              ['Hero image of a one-of-a-piece item', 'Detail is the sale. 2000–2500px, ceiling 1MB, JPEG.', '#fb923c'],
              ['Apparel or textile on a model', 'Weave and drape matter more than background. 2000px, ceiling 800KB.', '#f59e0b'],
              ['Digital download preview or mockup', 'Buyers judge the artwork, not texture. 2000px square, ceiling 600KB.', '#84cc16'],
              ['Extra angle / size-chart shot', 'Secondary images load in the gallery. 2000px, ceiling 500KB is plenty.', '#22c55e'],
            ].map(([title, advice, accent]) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #f0e0d0', borderRadius: '14px', padding: '18px 20px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: accent }} />
                  <strong style={{ fontSize: '16px', color: '#2b1d12' }}>{title}</strong>
                </div>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: '#6b5545' }}>{advice}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#6b5a4a', marginTop: '14px' }}>
            Etsy’s recommended minimum resolution is published at{' '}
            <a href="https://help.etsy.com/hc/en-us/articles/115015663347" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#c2410c' }}>help.etsy.com — Requirements and Best Practices for Images</a>
            {' '}(checked October 2026). The kilobyte figures above are our suggestions for a fast listing page; Etsy does not publish a per-file limit to match.
          </p>
        </section>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 22px 34px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#9a3412', marginBottom: '14px' }}>The Order Of Operations Is The Whole Trick</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '16px' }}>
            {[
              ['1 · Crop first', 'Square or 4:5 as your shop uses. Cropping after compressing costs a generation.'],
              ['2 · Resize to 2000px', 'Get to the resolution Etsy recommends before any quality work.'],
              ['3 · Then set the ceiling', 'Target KB Mode, 1000 for the hero image, 500 for the extras.'],
              ['4 · Look at it full size', 'Open the result at 100%. If the product detail is soft, raise that file alone.'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#fff4ea', border: '1px solid #fed7aa', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontWeight: 800, fontSize: '15px', color: '#9a3412', marginBottom: '6px' }}>{t}</div>
                <div style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#6b5545' }}>{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 22px 34px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#9a3412', marginBottom: '14px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: '#fff', border: '1px solid #f0e0d0', borderRadius: '12px', padding: '14px 18px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15.5px', cursor: 'pointer', color: '#7c2d12' }}>{q}</summary>
              <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.75, color: '#6b5545' }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 22px 52px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#9a3412', marginBottom: '12px' }}>More Shop Tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/', 'Home — Image Compressor'],
              ['/compress-for-shopify', 'For Shopify'],
              ['/compress-for-amazon', 'For Amazon'],
              ['/compress-to-500kb', 'Compress to 500KB'],
              ['/bulk-image-compressor', 'Bulk + ZIP'],
              ['/convert-image-to-pdf', 'Photos to PDF'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: '999px', background: '#fff', border: '1px solid #f0d5bd', color: '#9a3412', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
