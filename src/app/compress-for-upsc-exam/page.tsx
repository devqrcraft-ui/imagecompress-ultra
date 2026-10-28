import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

const faq: [string, string][] = [
  ['What file size does UPSC ask for on the application photo and signature?', 'The CSE 2026 notification itself prints no KB figure. It points to the "Photos and Signature" instructions inside upsconline.nic.in, and the upload screen shows the exact window when you fill the form. What UPSC does publish in its 2026-27 exam notifications is a range: for Engineering Services 2027 the photograph and signature must each be .jpg files of at least 20 KB and no more than 300 KB, and for the CAPF Assistant Commandants 2026 exam the photograph is 20-200 KB and the signature 20-100 KB. A clean JPEG around 40 KB sits above the 20 KB floor and under every ceiling UPSC has published recently.'],
  ['Is 20 KB a maximum or a minimum?', 'It is a minimum in the notifications we checked. UPSC files must not be less than 20 KB and must not exceed the exam-specific maximum. Compressing a photo down to 5 KB is therefore just as wrong as a 600 KB photo — aim for the middle of the window, and if our tool returns a file under 20 KB, set a higher target or rescan at a larger size.'],
  ['How should the signature itself be made before scanning?', 'For the Civil Services Examination the 2026 notification requires you to sign three times, one below the other, on a plain white sheet of paper using black ink, and to upload that scan in the application. The signatures must be clear and legible — compression can preserve them but cannot rescue a faint or smudged pen stroke.'],
  ['This tool says "at or under" my target. Will the file ever be bigger than the limit?', 'No. The compressor searches JPEG quality downward and returns the best result that fits at or under your target number, never above it, and a file already under target is returned unchanged. It cannot, however, guarantee acceptance — the portal also checks the file against a minimum size and evaluates the photo itself.'],
  ['Does compressing change the pixel dimensions of my photo?', 'No — Target KB Mode changes encoding quality, not pixel dimensions. If the form complains about resolution or the picture fills the box poorly, resize the image first in any standard editor, then come back and compress to the KB window.'],
  ['Is my photograph uploaded to your server when I use this?', 'No. The image is decoded and re-encoded locally in your browser. With exam portals you are uploading identity documents; keeping the intermediate step on your own device means there is no extra copy of your photo stored anywhere.'],
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
  title: 'UPSC Photo & Signature Upload — 2026 Size Windows',
  description: 'What UPSC actually requires for the CAF photograph and signature upload: the 20 KB minimum, the 100-300 KB ceilings published in its 2026-27 notices.',
  keywords: 'upsc photo size for application, upsc signature upload size, civil services photograph 20 kb, upsc caf photo compress, upsc exam photo signature upload',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-upsc-exam' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-upsc-exam' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress for UPSC Exam","item":"https://www.compressto20kb.com/compress-for-upsc-exam"}]}' }} />

      <div style={{ background: '#0f0c29', color: '#e2e8f0', fontFamily: 'system-ui,sans-serif' }}>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 20px 20px' }}>
          <div style={{ fontSize: '15px', opacity: 0.68, marginBottom: '12px' }}>
            <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for UPSC Exam
          </div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Compress your photo and signature for the UPSC application upload
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '10px', opacity: 0.9 }}>
            The Civil Services application on upsconline.nic.in wants a scanned photograph and a scanned signature, both inside a file-size window — with a floor as well as a ceiling. Most guides quote only the ceiling, and candidates get bounced for files that are too <em>small</em>.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            Below is what UPSC has actually printed in its 2026-27 notices, how to land your file inside the window, and a compressor that works entirely on your own device.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <CompressorTool initialTargetKB={40} />
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>What the CSE 2026 notification does (and does not) say</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            We read the full Civil Services Examination 2026 notification (Examination Notice No. 05/2026-CSE, dated 4 February 2026). It contains <strong>no KB figure at all</strong>. Instead, NOTE 2 requires candidates to upload a photograph <em>and</em> capture a live photograph while filling the Common Application Form, and directs them to “Instructions and FAQs → Instruction for filling the form → Photos and Signature” on <a href="https://upsconline.nic.in" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>upsconline.nic.in</a> for the specifications. NOTE 3 states that for the signature you must “sign three times (one below the other) on a plain white paper using a black ink” and upload that scan, clear and legible.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            Because those form instructions live behind the candidate login, the honest way to get today’s exact limits is to look at the upload step in your own CAF — the page that rejects a bad file states what it wants.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>The file-size windows UPSC has published recently</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            UPSC’s other 2026-27 exam notices do print the numbers, and they are consistent about the floor but not about the ceiling — it differs by exam and by year:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: '15px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: '#a5b4fc', borderBottom: '1px solid rgba(165,180,252,0.3)' }}>Notice (2026-27)</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: '#a5b4fc', borderBottom: '1px solid rgba(165,180,252,0.3)' }}>Photograph (.jpg)</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: '#a5b4fc', borderBottom: '1px solid rgba(165,180,252,0.3)' }}>Signature (.jpg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Engineering Services Exam 2027</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>not less than 20 KB, not more than 300 KB</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>not less than 20 KB, not more than 300 KB</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>CAPF Assistant Commandants 2026</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>20 KB – 200 KB</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>20 KB – 100 KB</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.7, marginTop: '12px' }}>
            Sources, checked October 2026:{' '}
            <a href="https://www.upsc.gov.in/sites/default/files/Notif-ESEP-2027-Engl-160926.pdf" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>UPSC ESE 2027 notification (upsc.gov.in PDF)</a>
            {' · '}
            <a href="https://www.upsc.gov.in/sites/default/files/ExamNotifi_CAPF_AC_Exam_2026_Eng_20022026.pdf" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>UPSC CAPF AC 2026 exam notice (upsc.gov.in PDF)</a>
            {' · '}
            <a href="https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>CSE 2026 notification (upsc.gov.in PDF)</a>
            . These windows change between cycles — confirm the numbers on your own application form before uploading.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Aiming for the middle of the window</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            A file that must be “at least 20 KB and at most 200 KB” is easiest to hit from the middle. The tool above runs a binary search on JPEG quality and returns the best file that is <strong>at or under your target</strong> — we set it to 40 KB, which clears the 20 KB floor in every UPSC window we found and stays far below any of the published ceilings.
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.9, opacity: 0.85, fontSize: '15px' }}>
            <li><strong>Result bigger than your ceiling?</strong> Rare, since the target caps it — but if your exam’s maximum is unusually low, lower the target and run again.</li>
            <li><strong>Result smaller than 20 KB?</strong> That happens with tiny or very clean scans (a plain white-paper signature compresses well). Raise the target, or rescan the signature at a larger image size, so the file sits inside the window rather than under its floor.</li>
            <li><strong>Rejection about pixels, not KB?</strong> Reduce the image’s pixel dimensions first, then compress to the target. Quality alone cannot fix an image whose resolution does not suit the upload box.</li>
          </ul>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>What this tool does — and what it cannot do</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            It changes the file’s size and encoding, locally in your browser, with nothing sent to a server. That is genuinely useful, because file size is the one requirement fully under your control. It is not a photo editor: it cannot crop the photograph to a ratio, replace a cluttered background, sharpen a blurry scan, or produce the three-times signature from nothing. It also cannot guarantee the portal accepts your file — the “live photograph captured” step in the CAF and the document verification have their own checks that no compressor is part of.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            And one honest correction for the record: compression here does not “hit exactly” a number. The result is at or under your target, which is what a size window needs — but a file already smaller than the target comes back unchanged.
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
              ['/compress-for-neet-exam', 'NEET exam upload'],
              ['/compress-for-ssc-exam', 'SSC exam upload'],
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
