import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

const faq: [string, string][] = [
  ['What photo size does NTA accept for the NEET-UG application?', 'The Information Bulletin for NEET (UG)-2026 states the passport-size photograph must be a JPG/JPEG file between 10 kb and 200 kb, in colour or black and white, with 80% of the image covered by your face (without a mask), ears visible, against a white background. The bulletin is published on the NTA documents page at neet.nta.nic.in — check that year’s copy, because the numbers move between years.'],
  ['What about the signature and the thumb impression?', 'Same bulletin: the scanned signature must be JPG/JPEG between 10 kb and 100 kb, and the left and right hand finger and thumb impressions between 10 kb and 200 kb, also JPG/JPEG. Certificates such as the Class X marksheet and category certificate go in a different format — PDF between 50 kb and 300 kb — so do not fight those with a JPEG compressor.'],
  ['Why did NTA recommend these particular numbers?', 'The windows exist because the photograph is reproduced on your admit card and attendance sheet at the exam centre, and the signature is used to verify you at the invigilator’s table. A file under 10 kb is too degraded to be legible; the NTA note in the bulletin warns that the uploaded image must be “clearly legible”, and that “the facility for correction will not be given” after upload — so verify each image before you move on.'],
  ['My photo is already smaller than 10 kb. Can this tool enlarge it?', 'No. The compressor only makes files smaller or leaves them unchanged — never a file bigger than the original. A scan below the 10 kb floor means it was captured at a very low resolution; rescanning or re-shooting at a normal size is the fix, then compress into the window.'],
  ['Is there a “recent” requirement for the photograph?', 'The 2025 bulletin, for example, required the photo to have been taken on or after 01 January 2025; the 2026 wording says the photograph should be “recent”. Use a photograph of the current cycle — an old portrait printed from last year’s application is exactly the kind of mismatch the live-photo capture step is designed to catch.'],
  ['Do I have to upload my photo somewhere for this?', 'No. The image is decoded and re-encoded on your own device in the browser. For an exam photo tied to your Aadhaar and identity, that local-only behaviour is the point — nothing sits on an intermediate server.'],
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

export const metadata: Metadata = {
  title: 'Compress Photo & Signature for NEET-UG Upload — Meet the NTA File Limits | CompressTo20KB',
  description: 'The NTA NEET (UG)-2026 bulletin sets exact upload windows: photo 10-200 KB, signature 10-100 KB, impressions 10-200 KB. See the quoted specs and compress your scans in your browser, with no upload.',
  keywords: 'neet photo size 10 to 200 kb, neet signature size, nta neet ug photo requirements, compress photo for neet application, neet ug document upload specs',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-neet-exam' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-neet-exam' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress for NEET Exam","item":"https://www.compressto20kb.com/compress-for-neet-exam"}]}' }} />

      <div style={{ background: '#0f0c29', color: '#e2e8f0', fontFamily: 'system-ui,sans-serif' }}>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 20px 20px' }}>
          <div style={{ fontSize: '15px', opacity: 0.68, marginBottom: '12px' }}>
            <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for NEET Exam
          </div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Compress your photo, signature and impressions for the NEET-UG upload
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '10px', opacity: 0.9 }}>
            The National Testing Agency publishes exact file-size windows for every image in the NEET-UG application — and they are windows, not ceilings: a scan that falls <em>below</em> the minimum is rejected just like one above the maximum.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            Everything on this page comes from the official Information Bulletin for NEET (UG)-2026, and the compressor above keeps your JPGs inside the image windows without ever uploading your photo to a server.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <CompressorTool initialTargetKB={40} />
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>The 2026 upload specifications, quoted</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            From section “d. Upload Scanned Images” of the bulletin. Each item states its own format and size window:
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.9, opacity: 0.85, fontSize: '15px' }}>
            <li><strong>Passport-size photograph</strong> — colour or black &amp; white, 80% face (without mask) visible including ears against a white background, 80% of the image area covered by the face; JPG/JPEG, <strong>between 10 kb and 200 kb</strong>.</li>
            <li><strong>Signature</strong> — JPG/JPEG, <strong>between 10 kb and 100 kb</strong>.</li>
            <li><strong>Left and right hand finger and thumb impressions</strong> — JPG/JPEG, <strong>between 10 kb and 200 kb</strong>.</li>
            <li><strong>Identity proof</strong> (when not verified via Aadhaar or DigiLocker) — JPG/JPEG, between 10 kb and 200 kb.</li>
            <li><strong>Category certificate, Class X certificate and marksheet, address proof, PwBD certificate</strong> — PDF, <strong>between 50 kb and 300 kb</strong>. These are documents, not photos: convert them to PDF first, then size them in a PDF tool.</li>
            <li><strong>Scribe’s photograph and signature</strong> (where applicable) — the same 10 kb–200 kb photo window and 10 kb–100 kb signature window as yours.</li>
          </ul>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9, marginBottom: '4px' }}>
            The application also captures a <strong>live photograph</strong> while you fill the form — through your webcam, or by scanning a QR code with a mobile device if you have no camera. The uploaded photo and the live capture are then compared, so a “recent” photo of you specifically matters.
          </p>
          <p style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.7, marginTop: '12px' }}>
            Source, checked October 2026:{' '}
            <a href="https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/02/202602231394640855.pdf" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>Information Bulletin: NEET (UG)-2026 (official NTA PDF)</a>
            {' · '}listed on{' '}
            <a href="https://neet.nta.nic.in/documents/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>neet.nta.nic.in/documents</a>
            . Always read your own year’s bulletin — see the next section for why.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>The numbers move every year</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            Compare two official bulletins side by side and you can see why pages that claim one permanent “NEET photo size” are guessing. The 2025 bulletin allowed the signature between 10 kb and <strong>50 kb</strong>; the 2026 bulletin raised that window to 10 kb–<strong>100 kb</strong>. The 2025 copy also fixed the photo to one “taken after 01 January 2025”, wording that 2026 relaxed to simply “recent”. The photograph and identity-proof windows (10–200 kb) have been stable across both years we checked. Trust the bulletin you applied under, not a blog post — including this one.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Getting a file into the window, in the right order</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: 1.9, opacity: 0.85, fontSize: '15px' }}>
            <li>Scan or photograph the original so it is genuinely legible — a passport-size crop on plain light background for the photo, dark pen on white paper for the signature.</li>
            <li>Check pixel size before file size. If the scan is many megapixels, resize the dimensions first; compression of an oversized image is what forces ugly artefacts.</li>
            <li>Save or convert to JPG, then use the tool above in Target KB Mode. 40 KB keeps you under the photo window (200 KB), under the signature window (100 KB), and comfortably above the 10 KB floor for normal scans.</li>
            <li>Look at the reported file size in the result card and at the preview. If the face or the pen strokes look blocky, lower your pixel dimensions less aggressively and rerun at a slightly larger target.</li>
            <li>Upload, and <strong>confirm on screen before moving to the next step</strong>: the bulletin’s note is blunt — “the facility for correction will not be given”.</li>
          </ol>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>When the rejection is not about kilobytes</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            No compressor fixes these, whatever other pages promise you: a photo where the mask or sunglasses cover the face; ears not visible in the portrait; a coloured or patterned wall behind you; a signature scanned on ruled notebook paper; a marksheet uploaded as a photo when the form expects a 50–300 kb PDF; or a photograph of a different person than the one who will sit the live-capture step. Those are content problems, and the honest advice is to retake the image, not to compress it harder.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 40px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Frequently asked questions</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {faq.map(([q, a], i) => (
              <details key={i} style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.18)', borderRadius: '12px', padding: '14px 18px' }}>
                <summary style={{ fontWeight: 700, fontSize: '15px', color: '#c7d2fe', cursor: 'pointer' }}>{q}</summary>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.85, margin: '10px 0 0' }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Related tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/compress-to-20kb', 'Compress to 20KB'],
              ['/compress-to-50kb', 'Compress to 50KB'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-200kb', 'Compress to 200KB'],
              ['/jpg-to-png', 'Convert JPG to PNG'],
              ['/batch-image-compressor-zip', 'Batch compress & download ZIP'],
              ['/image-size-checker-online', 'Check your file size first'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: '8px', background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.2)', color: '#a5b4fc', fontSize: '15px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>{label} →</a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
