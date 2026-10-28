import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image for eBay — Listing Photos That Zoom',
  description: 'Reduce eBay listing photos to a sensible file size without losing the pixels that make zoom work. JPEG, batch up to 50 images, processed on your device.',
  keywords: 'compress image for ebay, ebay photo size requirements, ebay listing image size, resize photo for ebay, ebay picture zoom 1600 pixels',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-ebay' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-ebay' },
};

const faq: [string, string][] = [
  ['What is the minimum image size eBay accepts?', 'eBay’s picture policy requires at least one photo 500 pixels on the longest side for a listing or product page. That is the floor for being allowed to list, not the size worth shipping.'],
  ['What size should I actually upload to eBay?', 'Aim at roughly 1600 pixels on the longest side as a JPEG. Below about 1000 pixels the zoom view goes soft; far above 2000 you are only paying in upload time, because eBay serves its own resized copies to buyers.'],
  ['How do I get an eBay photo down to a reasonable file size?', 'Resize to your target longest side first, then switch on Target KB Mode and set a ceiling — 500KB is usually plenty at 1600px. The tool walks quality down and keeps the best encode that stays under your number.'],
  ['eBay says my photo was rejected. Is file size the reason?', 'Usually not. Rejections are far more often about the picture itself — a border, a watermark, a promotional overlay, or a stock photo you do not have the rights to. File size only matters when it blocks the upload. Check the picture rules before re-compressing.'],
  ['Can I prep photos for many listings at the same time?', 'Yes. Drop up to 50 files in, set one target, compress the lot and download a ZIP — handy when you are listing a job lot of items photographed in one session.'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for eBay","item":"https://www.compressto20kb.com/compress-for-ebay"}]}' }} />

      <article style={{ background: '#0e1424', color: '#e2e8f0', fontFamily: 'Inter,system-ui,sans-serif' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '42px 20px 18px' }}>
          <nav style={{ fontSize: '14px', opacity: 0.64, marginBottom: '14px' }}>
            <a href="/" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Home</a> / Compress for eBay
          </nav>
          <h1 style={{ fontSize: 'clamp(23px,4vw,34px)', fontWeight: 800, margin: '0 0 12px', color: '#fff' }}>
            Compress Images For <span style={{ color: '#7dd3fc' }}>eBay</span> Listings
          </h1>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: 0, color: 'rgba(226,232,240,0.78)' }}>
            A used item sells or dies on the photos, and the buyer who wants to inspect a seam will use zoom. So the job is not making the file small — it is keeping the pixels zoom needs while dropping the bytes that cost you nothing.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '18px 20px 30px' }}>
          <CompressorTool initialTargetKB={500} />
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 700, color: '#7dd3fc', marginBottom: '12px' }}>Size Guide At A Glance</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', overflow: 'hidden' }}>
            <tbody>
              {[
                ['Policy minimum', '500 px longest side', 'Enough to list. Not enough to sell.'],
                ['Zoom starts to help', '1000–1300 px', 'Buyers can inspect, edges still clean.'],
                ['Sweet spot', '~1600 px, JPEG', 'Detail without wasted upload time.'],
                ['Pointless ceiling', 'above 2000–4000 px', 'eBay resizes to its own versions anyway.'],
              ].map(([row, val, note], i) => (
                <tr key={row} style={{ borderBottom: i === 3 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '12px 14px', color: 'rgba(226,232,240,0.9)', fontWeight: 600, width: '26%' }}>{row}</td>
                  <td style={{ padding: '12px 14px', color: '#7dd3fc', fontWeight: 700, width: '26%', fontFamily: 'ui-monospace,monospace' }}>{val}</td>
                  <td style={{ padding: '12px 14px', color: 'rgba(226,232,240,0.66)', fontSize: '14.5px' }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(226,232,240,0.66)', marginTop: '10px' }}>
            The 500-pixel floor is eBay’s own listing rule —{' '}
            <a href="https://www.ebay.com/help/policies/listing-policies/picture-policy?id=4370" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#7dd3fc' }}>Picture policy</a>
            {' '}(checked October 2026). The higher numbers are our recommendation for a good result, not platform rules.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 700, color: '#7dd3fc', marginBottom: '12px' }}>Before You Hit Compress</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.95, fontSize: '15px', color: 'rgba(226,232,240,0.82)' }}>
            <li>Shoot or crop square for the main photo — the grid and mobile app crop inconsistently otherwise.</li>
            <li>Fill the frame. A small object lost in a big background is what makes a thumbnail look cheap.</li>
            <li>Resize to about 1600px first, in any image editor — this compressor only ever caps a very large image at 4096px, so it will not take you down to 1600px for you.</li>
            <li>Set 500KB and check one result at 100%; if texture looks muddy, raise that file to 800KB rather than re-doing the batch.</li>
            <li>No watermarks, borders or price text on the photo — those are the things listings actually get flagged for.</li>
          </ul>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 700, color: '#7dd3fc', marginBottom: '12px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '13px 16px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#bae6fd' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, color: 'rgba(226,232,240,0.75)' }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px 48px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#7dd3fc', marginBottom: '12px' }}>Related</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(226,232,240,0.8)' }}>
            <a href="/compress-for-amazon" style={{ color: '#7dd3fc' }}>Compress for Amazon</a> ·{' '}
            <a href="/compress-for-etsy" style={{ color: '#7dd3fc' }}>Compress for Etsy</a> ·{' '}
            <a href="/bulk-image-compressor" style={{ color: '#7dd3fc' }}>Bulk compressor with ZIP download</a> ·{' '}
            <a href="/image-size-checker-online" style={{ color: '#7dd3fc' }}>Check an image’s pixel size</a> ·{' '}
            <a href="/png-to-jpg" style={{ color: '#7dd3fc' }}>PNG to JPG converter</a>
          </p>
        </div>
      </article>
    </>
  );
}
