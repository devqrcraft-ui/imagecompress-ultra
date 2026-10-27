import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image for Canva — Uploads and Exports | Free, No Upload',
  description: 'Shrink photos before uploading them to Canva, or compress a heavy Canva export before you share it. JPEG, PNG, WebP, HEIC supported — browser-only, no upload.',
  keywords: 'compress image for canva, canva upload size limit, canva export file size, reduce image size before canva, compress canva design',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-canva' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-canva' },
};

const faq: [string, string][] = [
  ['Is there a size limit for images I upload to Canva?', 'Canva’s upload requirements page covers images as JPEG, PNG, HEIC/HEIF and WebP under 50MB each, and no more than 250 million total pixels (width × height). Free plans also have a media storage allowance, which heavy uploads consume.'],
  ['Why compress before uploading to Canva if the limit is 50MB?', 'Because uploads eat your storage allowance and slow the editor, not because you are likely to hit 50MB. A 4000px photo dropped into a 1080px design slot is 90% pixels nobody will ever see, and it is one fewer thing for your browser to shuffle around.'],
  ['My Canva export is too big to email. What now?', 'Export as PNG or PDF from Canva at the quality you want, then bring the file here and compress to the ceiling you need — 200KB for an inline image, 1MB for an attachment. You keep the design export and gain a shareable copy.'],
  ['Will compressing ruin the text in my design?', 'Flatter is safer for text: PNG holds crisp edges where JPEG introduces ringing around high-contrast lettering. For a graphic that is mostly type and blocks of colour, choose PNG; for a photo-based design, JPEG or WebP is the smaller answer.'],
  ['Does this tool upload my design files to a server?', 'No. The file is decoded and re-encoded in your browser tab, so a draft you have not published stays on your machine.'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Canva","item":"https://www.compressto20kb.com/compress-for-canva"}]}' }} />

      <div style={{ background: 'linear-gradient(160deg,#f5f3ff 0%,#eef2ff 60%,#ecfeff 100%)', color: '#312e5f', fontFamily: 'system-ui,sans-serif' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 20px 14px' }}>
          <div style={{ fontSize: '14px', color: '#6b6398', marginBottom: '12px' }}>
            <a href="/" style={{ color: '#6d28d9', textDecoration: 'none', fontWeight: 600 }}>Home</a> → Compress for Canva
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,34px)', fontWeight: 800, margin: '0 0 12px', color: '#241f47' }}>
            Two Canva Problems, One Compressor
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 8px', color: '#4b4478' }}>
            <strong>Problem one:</strong> you drag a 4000×3000 photo into a design where it will be shown at 1080px wide, your media library swells, and the editor gets heavier for a pixel count no viewer ever receives.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4b4478' }}>
            <strong>Problem two:</strong> you export a beautiful PNG from Canva, then need to email it, upload it to a form, or post it somewhere that wants a small file — and re-exporting at lower quality wrecks the crispness you just designed.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '18px 20px 34px' }}>
          <CompressorTool initialTargetKB={300} />
        </div>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#5b21b6', marginBottom: '14px' }}>Before Uploading Into A Design</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px' }}>
            {[
              ['Match the slot', 'Find the widest size the element will ever render at and resize to that. Backgrounds and hero images aside, most photo slots in a design are under 2000px.'],
              ['Keep a photo as a photo', 'JPEG or WebP for photographic content — that is where the byte savings live before Canva re-encodes it for its own CDN.'],
              ['Protect your storage', 'Canva gives free accounts a finite media library. Bloated originals fill it up faster than designs do.'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#fff', border: '1px solid #ddd6fe', borderRadius: '14px', padding: '16px 18px' }}>
                <div style={{ fontWeight: 700, fontSize: '15.5px', color: '#4c1d95', marginBottom: '6px' }}>{t}</div>
                <div style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#5b5486' }}>{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#5b21b6', marginBottom: '14px' }}>After Exporting, When The File Is Too Big</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: '#4b4478', marginBottom: '12px' }}>
            Export at full quality from Canva and keep that as your master. Then compress a copy here for the channel that needs small — a form upload, an email, a marketplace listing image. You are choosing where quality is spent rather than letting an export dialog decide for you.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #ddd6fe' }}>
            <tbody>
              {[
                ['Social post from a design', 'WebP or JPEG', '150–400KB'],
                ['Presentation slide image', 'PNG if it is mostly text', '400–800KB'],
                ['Attachment inside an email', 'JPEG', '100–300KB'],
                ['Print proof for approval', 'JPEG, higher ceiling', '800KB–1MB'],
              ].map(([use, fmt, kb], i) => (
                <tr key={use} style={{ borderBottom: i === 3 ? 'none' : '1px solid #ede9fe' }}>
                  <td style={{ padding: '11px 14px', color: '#3b3466', fontWeight: 600 }}>{use}</td>
                  <td style={{ padding: '11px 14px', color: '#6b6398', fontSize: '14px' }}>{fmt}</td>
                  <td style={{ padding: '11px 14px', color: '#6d28d9', fontWeight: 700, textAlign: 'right' }}>{kb}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#6b6398', marginTop: '12px' }}>
            Upload limits as documented at{' '}
            <a href="https://www.canva.com/help/upload-formats-requirements/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#6d28d9' }}>canva.com/help — Check file upload formats and requirements</a>
            {' '}(checked October 2026). The KB column is our recommendation for the destination, not a Canva rule.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#5b21b6', marginBottom: '12px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: '#fff', border: '1px solid #ddd6fe', borderRadius: '12px', padding: '14px 17px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15.5px', cursor: 'pointer', color: '#4c1d95' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.75, color: '#5b5486' }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#5b21b6', marginBottom: '12px' }}>Related</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/', 'Home — Image Compressor'],
              ['/png-to-jpg', 'PNG to JPG'],
              ['/convert-image-to-pdf', 'Images to PDF'],
              ['/compress-for-instagram', 'For Instagram'],
              ['/compress-for-email', 'For Email'],
              ['/image-size-checker-online', 'Image size checker'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: '999px', background: '#fff', border: '1px solid #ddd6fe', color: '#5b21b6', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
