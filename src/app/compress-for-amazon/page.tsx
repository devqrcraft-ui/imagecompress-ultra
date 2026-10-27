import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image for Amazon — Product Photos That Pass | Free, No Upload',
  description: 'Prepare Amazon listing photos at the resolution zoom needs and the file size you control. JPEG output, bulk up to 50 images, nothing uploaded to a server.',
  keywords: 'compress image for amazon, amazon product image size, amazon listing photo requirements, resize image for amazon seller central, compress amazon product photo',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-amazon' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-amazon' },
};

const faq: [string, string][] = [
  ['How big does an Amazon product image need to be?', 'Amazon’s product image guide puts the upload floor at 500 pixels on the longest side and the zoom threshold at 1000 pixels, with 1600 pixels and up giving a zoom that stays sharp. Those are dimension rules, not file-size rules — they decide how you resize before you compress.'],
  ['How do I compress an Amazon product photo without losing zoom detail?', 'Resize to the longest side you want to ship (1600–2000px is a sensible working range), then turn on Target KB Mode and set a ceiling — 1000KB is comfortable at that size. The tool steps quality down and keeps the best encode that still fits under your number, so the detail zoom depends on survives.'],
  ['What format should Amazon listing images use?', 'JPEG. It is the format the guide leads with for product photos and it is much smaller for photographic content. Keep PNG for the cases where you actually need transparency, and remember a main image is expected on pure white — compression will not produce that background for you.'],
  ['Can I prepare a whole batch of listing photos at once?', 'Yes — add up to 50 files, set one target, compress the set and download as a ZIP. Useful when one studio session exports forty 6MB files.'],
  ['Does Amazon know I compressed the file myself?', 'No, and it is not the point. Amazon stores your file and serves its own resized versions; what changes is the source you hand it. A clean 1600px JPEG under 1MB is a better starting point than a 24MB export, and it uploads faster on your side too.'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Amazon","item":"https://www.compressto20kb.com/compress-for-amazon"}]}' }} />

      <div style={{ background: 'linear-gradient(180deg,#0b1020 0%,#131b2e 100%)', color: '#e2e8f0', fontFamily: 'system-ui,sans-serif' }}>
        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '44px 20px 20px' }}>
          <div style={{ fontSize: '15px', opacity: 0.5, marginBottom: '12px' }}>
            <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for Amazon
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, margin: '0 0 14px' }}>
            Compress Product Photos For <span style={{ color: '#fbbf24' }}>Amazon</span>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.85, margin: '0 0 14px' }}>
            Amazon measures a listing photo in pixels, because pixels are what makes zoom work. File size is the part that is yours to manage: a 24MB studio export uploads, but it buys nothing on the product page and it slows every step of your catalogue workflow.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.85 }}>
            Resize to the width zoom can use, then compress down to the best quality that fits a ceiling you set. The encode happens in this browser tab — your images are not uploaded anywhere.
          </p>
        </section>

        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px 34px' }}>
          <CompressorTool initialTargetKB={1000} />
        </section>

        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,25px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Three Pixel Thresholds Worth Memorising</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              ['500 px', 'Longest side. Below it the image will not upload at all — a hard floor, not a target.', '#f87171'],
              ['1000 px', 'Longest side. At and above it, zoom switches on for the detail page. This is the number to treat as the real minimum.', '#fbbf24'],
              ['1600 px+', 'Longest side. Zoom gets headroom: buyers can look at weave, stitching or a label and still read it.', '#4ade80'],
            ].map(([px, text, color]) => (
              <div key={px} style={{ display: 'flex', gap: '16px', alignItems: 'baseline', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `4px solid ${color}`, borderRadius: '10px', padding: '14px 18px' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color, minWidth: '88px' }}>{px}</div>
                <div style={{ fontSize: '15px', lineHeight: 1.65, opacity: 0.88 }}>{text}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.55, marginTop: '12px' }}>
            Thresholds as documented in Amazon seller help —{' '}
            <a href="https://sellercentral.amazon.com/help/hub/reference/external/G1881" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>Product image guide</a>
            {' '}(checked October 2026). Rules differ by category and get revised, so confirm against the listing page you are editing.
          </p>
        </section>

        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,25px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>A Workflow For A Catalogue Shoot</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: 1.95, fontSize: '15px', opacity: 0.88 }}>
            <li>Export at 1600–2000px on the longest side — the resolution zoom can actually use.</li>
            <li>Select the batch (up to 50 files) and drop it into the tool above.</li>
            <li>Choose JPEG output. Main images need that pure white background; compression will not create it.</li>
            <li>Turn on Target KB Mode and set 1000. Past that, extra kilobytes are invisible at 1800px; below it, edges start to soften.</li>
            <li>Open two or three results at full size and check the label text and texture still read cleanly.</li>
            <li>Download as a ZIP and upload to Seller Central.</li>
          </ol>
        </section>

        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,25px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Where Sellers Throw Away Detail</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '14px' }}>
            {[
              ['Compressing before resizing', 'A 6000px file squeezed to 1MB loses far more than a 1800px file squeezed to the same 1MB. Resize first and the same budget buys you detail.'],
              ['One target for every image', 'A product on flat white compresses tiny; a textured fabric does not. If a result looks soft, give that file a higher ceiling and redo it alone.'],
              ['Re-uploading a downloaded copy', 'Every JPEG generation discards information. Compress from your export, never from a file pulled back off a live listing.'],
              ['Judging from the thumbnail', 'Search results show a small preview on a phone. Judge quality by zooming the full-size image instead.'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#fcd34d', marginBottom: '6px' }}>{t}</div>
                <div style={{ fontSize: '14.5px', lineHeight: 1.65, opacity: 0.82 }}>{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,25px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#c7d2fe' }}>{q}</summary>
              <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.82 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Related Tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/', 'Home — Image Compressor'],
              ['/compress-for-ebay', 'For eBay'],
              ['/compress-for-etsy', 'For Etsy'],
              ['/compress-for-shopify', 'For Shopify'],
              ['/bulk-image-compressor', 'Bulk Compressor + ZIP'],
              ['/compress-to-500kb', 'Compress to 500KB'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: '8px', background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.2)', color: '#a5b4fc', fontSize: '15px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
