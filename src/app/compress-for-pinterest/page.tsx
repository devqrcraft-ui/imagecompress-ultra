import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Images for Pinterest — Free, No Upload',
  description:
    'Shrink a Pinterest pin to a target size in your browser before you upload it. Pinterest publishes a 20MB web ceiling, not a target — we suggest around 400KB so pins load fast. No upload, no signup.',
  keywords:
    'compress image for pinterest, pinterest pin size, pinterest image requirements, compress for pinterest free, pinterest pin kb, pinterest 2:3 aspect ratio',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-pinterest' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-pinterest' },
};

// Single source of truth: this array feeds BOTH the FAQPage JSON-LD and the
// visible <details> list, so the markup text and the rendered text match exactly.
const faq: [string, string][] = [
  [
    'What size should a Pinterest pin be?',
    'Pinterest’s own business help recommends a 2:3 aspect ratio, and its image ad-specs page gives 1000 x 1500 pixels as the concrete size (checked October 2026). A good starting point is a 2:3 source file at about 1000×1500px: crop and size it in your editor first, then compress it here.',
  ],
  [
    'What is the maximum file size for a Pinterest pin?',
    'Pinterest’s Pin specs page lists a maximum of 20 MB on the web and “1 GB recommended” in the Android and iOS apps; its ad-specs page lists 20 MB on desktop and 32 MB in-app (checked October 2026). Those are ceilings, not targets. Nothing Pinterest publishes asks you to hit a specific small KB number — so we suggest around 400KB (a 200–500KB band works well) so a pin uploads and loads fast and still looks sharp after Pinterest resizes it. That number is our recommendation, not a Pinterest rule.',
  ],
  [
    'What file formats does Pinterest accept for pins?',
    'Pinterest’s Pin specs page lists accepted image formats as JPEG, PNG and WebP, alongside BMP and TIFF (checked October 2026). JPEG is the safe default for photos; PNG suits pins with flat colour, text or transparency; WebP gives the smallest file. This tool can export JPEG, PNG, WebP or AVIF.',
  ],
  [
    'Can this tool crop my image to the 2:3 Pinterest ratio?',
    'No. It only changes the file size and compression of an image — it cannot crop to 2:3, change the aspect ratio, or remove a background. Get the 2:3 framing and pixel size right in your editor first, then drop the file here to bring the KB down.',
  ],
  [
    'Will my images be uploaded to compress them?',
    'No. Compression runs entirely in your browser: the image is decoded and re-encoded on your own device and never sent to a server. You can confirm it yourself by watching the Network tab in your browser’s DevTools while compressing.',
  ],
  [
    'Why compress a pin if Pinterest only sets a 20 MB ceiling?',
    'Because a 20 MB maximum is a limit, not a target. Pinterest shows pins as small previews in the feed and on boards, so a heavy multi-megabyte file buys you nothing a visitor can see — it just uploads slower and uses more mobile data. Bringing a 2:3 pin down to a few hundred KB keeps it loading fast with no visible loss. Pinterest publishes no rule that a pin has to be that large, so the 200–500KB range here (this tool starts at 400KB) is our practical recommendation, not a Pinterest requirement.',
  ],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

// Dark-theme style tokens (kept consistent with the sibling pages' palette).
const wrap: CSSProperties = {
  background: '#0f0c29',
  color: '#e2e8f0',
  fontFamily: 'system-ui,sans-serif',
  minHeight: '100vh',
};
const section: CSSProperties = { maxWidth: '860px', margin: '0 auto', padding: '0 20px 8px' };
const h2: CSSProperties = { fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' };
const p: CSSProperties = { fontSize: '15px', lineHeight: 1.75, marginBottom: '12px', opacity: 0.85 };
const card: CSSProperties = { background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.18)', borderRadius: '12px', padding: '16px' };
const th: CSSProperties = { textAlign: 'left', padding: '10px 12px', color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '13px' };
const td: CSSProperties = { padding: '10px 12px', fontSize: '14px', lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', verticalAlign: 'top', borderTop: '1px solid rgba(255,255,255,0.08)' };

const sources: [string, string][] = [
  ['Review Pin specs', 'https://help.pinterest.com/en/article/review-pin-specs'],
  ['Review ad specs', 'https://help.pinterest.com/en/business/article/pinterest-product-specs'],
  ['Pin performance and distribution', 'https://help.pinterest.com/en/business/article/pin-performance-and-distribution'],
];

export default function Page() {
  return (
    <div style={wrap}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* BreadcrumbList matches the visible breadcrumb text below: Home → Compress for Pinterest */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.compressto20kb.com' },
              { '@type': 'ListItem', position: 2, name: 'Compress for Pinterest', item: 'https://www.compressto20kb.com/compress-for-pinterest' },
            ],
          }),
        }}
      />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 20px 16px' }}>
        <div style={{ fontSize: '15px', opacity: 1, marginBottom: '12px' }}>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for Pinterest
        </div>

        <h1 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          Compress Images for <span style={{ color: '#e60023' }}>Pinterest</span> — Free, No Upload
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.75, marginBottom: '28px' }}>
          Reduce the file size of a Pinterest pin in your browser before you upload it. Crop and size the pin yourself, then drop it here to bring the KB down — no server upload, no signup, nothing leaves your device.
        </p>

        <p style={{ ...p, background: 'rgba(230,0,35,0.08)', border: '1px solid rgba(230,0,35,0.3)', borderRadius: '10px', padding: '16px 18px', marginBottom: '28px', opacity: 1 }}>
          <strong style={{ color: '#f87171' }}>Quick answer:</strong> Pinterest does not publish a “target KB” for pins — its Pin specs page sets a maximum of 20 MB on the web and recommends 2:3 (1000 x 1500 pixels) for the shape. That ceiling is huge, so the useful job here is not dodging a limit. A good flow is: crop to 2:3 at about 1000×1500px in your editor, then compress to roughly 400KB so the pin uploads and loads fast and still looks sharp after Pinterest serves it at feed and thumbnail sizes. The tool below starts at a 400KB target.
        </p>

        <div style={{ maxWidth: '780px', margin: '0 auto 40px' }}>
          <CompressorTool initialTargetKB={400} />
        </div>
      </div>

      {/* WHAT PINTEREST PUBLISHES VS WHAT WE SUGGEST */}
      <section style={{ ...section, paddingBottom: '40px' }}>
        <h2 style={h2}>What Pinterest Publishes — and What We Suggest</h2>
        <p style={p}>
          The middle column is Pinterest’s own published guidance. The right column is our advice for this tool, not a platform rule. Where Pinterest says nothing, we say so.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Spec</th>
                <th style={th}>Published by Pinterest</th>
                <th style={th}>What we suggest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...td, color: '#c7d2fe', fontWeight: 600, borderTop: 'none' }}>Standard pin ratio &amp; size</td>
                <td style={td}>“We recommend using a 2:3 aspect ratio, or 1000 x 1500 pixels” (image ad specs)</td>
                <td style={td}>Start from a 2:3 source at ~1000×1500px; do the crop in your editor first</td>
              </tr>
              <tr>
                <td style={{ ...td, color: '#c7d2fe', fontWeight: 600 }}>Maximum file size</td>
                <td style={td}>20 MB on web; “1 GB recommended” in-app (Pin specs) — 20 MB desktop / 32 MB in-app for ads</td>
                <td style={td}>~400KB (a 200–500KB band) so pins upload and load fast — our recommendation, not a Pinterest rule</td>
              </tr>
              <tr>
                <td style={{ ...td, color: '#c7d2fe', fontWeight: 600 }}>Accepted formats</td>
                <td style={td}>JPEG, PNG and WebP (plus BMP and TIFF) per the Pin specs page</td>
                <td style={td}>JPEG for photos, PNG for flat colour/text, WebP for the smallest file</td>
              </tr>
              <tr>
                <td style={{ ...td, color: '#c7d2fe', fontWeight: 600 }}>Minimum width</td>
                <td style={td}>Not published on Pinterest’s Pin specs page</td>
                <td style={td}>Third-party size guides cite 600px; we suggest keeping the source at least 1000px wide</td>
              </tr>
              <tr>
                <td style={{ ...td, color: '#c7d2fe', fontWeight: 600 }}>Cropping &amp; background</td>
                <td style={td}>No required size is published; the Pin specs page lists overlay “Safe zones” (top 270px, left 65px, right 195px, bottom 790px)</td>
                <td style={td}>Crop to 2:3 yourself and keep text inside the safe middle — this tool only changes file size, not shape or background</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize: '13px', opacity: 0.72, marginTop: '14px' }}>
          Sources:{' '}
          {sources.map(([label, url], i) => (
            <span key={url}>
              <a href={url} rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#c7d2fe', textDecoration: 'underline' }}>{label}</a>
              {i < sources.length - 1 ? ', ' : '. '}
            </span>
          ))}
          All checked October 2026. Pinterest updates these numbers, so re-check the upload screen before relying on them.
        </p>
      </section>

      {/* WHY 2:3 AT 1000x1500 */}
      <section style={{ ...section, paddingBottom: '40px' }}>
        <h2 style={h2}>Why a 2:3 Source at ~1000×1500 Is the Right Starting Point</h2>
        <p style={p}>
          Pinterest’s feed is a masonry grid of vertical tiles, and its own business help steers creators toward a 2:3 portrait ratio — the image ad-specs page even names 1000 x 1500 pixels as the concrete size. That ratio fills more of the screen than a square without becoming extremely tall, and working at 1000px wide matches the size Pinterest itself quotes, so you are compressing from the right starting point rather than guessing.
        </p>
        <p style={p}>
          Start bigger than you need to post, not smaller: work at 1000×1500 (or 1080×1620) so compressing down to a few hundred KB has real pixels to spend on quality. Keep text and logos away from the very top, bottom and right edge — Pinterest’s Pin specs page publishes overlay “safe zones” there (top 270px, left 65px, right 195px, bottom 790px) to make room for its own save and source buttons. A 2:3 canvas with the essentials centred keeps them clear of that overlay.
        </p>
        <p style={{ ...p, marginBottom: 0 }}>
          Pinterest’s own guidance stops at 2:3; taller canvases (third-party guides quote ratios like 1:2.1 for infographics) are a deliberate design choice rather than a platform recommendation. Start at 2:3 — the ratio Pinterest actually names — and only go taller when your layout needs it.
        </p>
      </section>

      {/* UPLOADS OR LOADS SLOWLY */}
      <section style={{ ...section, paddingBottom: '40px' }}>
        <h2 style={h2}>What to Do When a Pin Still Uploads or Loads Slowly</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '14px' }}>
          <div style={card}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#c7d2fe', marginBottom: '6px' }}>The file is heavier than it looks</div>
            <div style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.82 }}>A flat-colour PNG pin can run to several MB. Switch the output to JPEG or WebP and set a 300–500KB target.</div>
          </div>
          <div style={card}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#c7d2fe', marginBottom: '6px' }}>The source is oversized</div>
            <div style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.82 }}>Pinterest recommends 1000 x 1500 pixels, so a 4000×6000 export carries detail nobody is likely to see at that scale. Resize to ~1000–1500px in your editor first, then compress here.</div>
          </div>
          <div style={card}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#c7d2fe', marginBottom: '6px' }}>You are posting many pins</div>
            <div style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.82 }}>Use the 50-file batch here to bring a whole board under a few hundred KB each before uploading, so the board opens fast on mobile data.</div>
          </div>
          <div style={card}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#c7d2fe', marginBottom: '6px' }}>It says it saved 0%</div>
            <div style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.82 }}>That means your image was already smaller than the target, so it is returned unchanged — there is nothing to shrink, and Pinterest will take it as-is.</div>
          </div>
        </div>
      </section>

      {/* BULK + REAL ESTATE */}
      <section style={{ ...section, paddingBottom: '40px' }}>
        <h2 style={h2}>Bulk-Compressing a Board, and Choosing Portrait vs Square</h2>
        <p style={p}>
          If you are filling a board, drop up to 50 images in at once, set one target (400KB is a good default for a photo board), compress and download. Every file comes back at or under the target, so the board loads at a consistent weight instead of a mix of 200KB and 4MB pins. Nothing is uploaded, so a whole batch of client or product photos stays on your machine.
        </p>
        <p style={{ ...p, marginBottom: 0 }}>
          For the feed itself, portrait wins: a 2:3 pin takes up more vertical screen area than a 1:1 square of the same width, which is why Pinterest’s own help leans to 2:3. Squares still make sense for product collages and board covers, where a tidy uniform grid reads better. Choose the ratio for the placement, then compress to fit it.
        </p>
      </section>

      {/* HONEST TOOL LIMITS */}
      <section style={{ ...section, paddingBottom: '40px' }}>
        <div style={{ ...p, background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.3)', borderRadius: '10px', padding: '16px 18px', marginBottom: 0, opacity: 1 }}>
          <strong style={{ color: '#a5b4fc' }}>What this tool does — and does not — do:</strong> it only changes the file size and compression of an image. It cannot crop to 2:3, change the aspect ratio, or remove a background, so get the framing right in your editor first. It returns the best quality that still fits at or under your target; an image already smaller than the target is returned unchanged.
        </div>
      </section>

      {/* HOW TO - 4 STEPS */}
      <section style={{ ...section, paddingBottom: '44px' }}>
        <h2 style={h2}>How to Compress Images for Pinterest — 4 Steps</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { n: '1', t: 'Size and crop first', d: 'In your editor, put the pin on a 2:3 canvas at about 1000×1500px and centre the text/logo. This tool will not crop it for you.' },
            { n: '2', t: 'Drop the image in', d: 'Upload above — JPEG, PNG, WebP, AVIF or HEIC, up to 50 files at once.' },
            { n: '3', t: 'Set a target, not a guess', d: 'Turn on Target KB mode and use 400 (a 200–500KB range works). You get the best quality that still fits at or under that number.' },
            { n: '4', t: 'Check, then upload', d: 'Compare the preview against the original, download the file and post it to Pinterest. Nothing was sent to a server along the way.' },
          ].map((s) => (
            <div key={s.n} style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px 20px' }}>
              <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: '#c9102c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px' }}>{s.n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{s.t}</div>
                <div style={{ fontSize: '15px', opacity: 0.7, lineHeight: 1.6 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ - same `faq` array as the JSON-LD above */}
      <section style={{ ...section, paddingBottom: '44px' }}>
        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.15)', borderRadius: '10px', padding: '16px 20px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', color: '#a5b4fc' }}>{q}</summary>
              <div style={{ fontSize: '15px', opacity: 0.78, marginTop: '10px', lineHeight: 1.65 }}>{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED TOOLS - the only internal links block on the page */}
      <section style={{ ...section, paddingBottom: '56px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Related Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {[
            ['/', 'Home — Image Compressor'],
            ['/compress-for-instagram', 'For Instagram'],
            ['/compress-for-shopify', 'For Shopify'],
            ['/compress-for-etsy', 'For Etsy'],
            ['/compress-for-email', 'For Email'],
            ['/compress-to-500kb', 'Compress to 500KB'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: '8px', background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.2)', color: '#a5b4fc', fontSize: '15px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>{label} →</a>
          ))}
        </div>
      </section>
    </div>
  );
}
