const faq: [string, string][] = [
  ['What file size and shape does SSC want for the scanned signature?', 'The MTS and Havaldar 2024 notification states JPEG or JPG format, 10 to 20 KB, at an image dimension of about 6.0 cm wide by 2.0 cm high, and warns that an illegible, blurred or miniature signature is rejected summarily. Your own notification governs, so check the number printed in it before you compress.'],
  ['Can I upload a saved passport photo instead of taking the SSC photograph?', 'For that exam cycle, no: the notification has the photograph captured live through a webcam or through the SSC Android app reached by QR code, and it states that capturing a photograph of a pre-existing photograph gets the application rejected. There is no photograph file to shrink, which is why this page is about the signature.'],
  ['My signature file is under the 10 KB floor. Can this tool raise it?', 'No, and be careful with anyone who claims otherwise. Compression only removes data, so a file below the stated floor cannot be pushed up to 10 KB here. Re-scan the signature at a larger physical size or a higher scanner quality, sign bigger, and fill at least 80 percent of the cutting box as SSC instructs.'],
  ['Why do SSC applications get thrown out over these two images?', 'SSC publishes its reasons. For signatures: miniature writing that does not fill the box. For photographs: no plain background, a cap, a shirtless subject, a photo that is not bright enough, and blur - plus any change of appearance between the application photo and the candidate on exam day.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SSC Exam Photo and Signature: 10-20 KB JPEG Rules',
  description: 'SSC notification specs for the scanned signature (JPEG, 10-20 KB, about 6.0 x 2.0 cm) and the live-captured photograph, plus how to hit the range.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-ssc-exam' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-ssc-exam' },
  keywords: 'SSC photo signature requirements, SSC signature 10 to 20 KB, SSC photograph live capture',
};

const rows: [string, string][] = [
  ['Photograph', 'Captured live at form-filling time by webcam or the SSC Android app from a QR code. No file upload, so no KB window to hit.'],
  ['Photograph rules', 'Plain background in good light, camera at eye level, straight frontal view, face fully inside the on-screen rectangle, no cap, no mask, no spectacles, no earphones.'],
  ['Photograph, fatal error', 'Photographing a pre-existing photograph. The notification rejects those applications outright.'],
  ['Signature', 'Scanned and uploaded as JPEG or JPG, 10 to 20 KB, image dimension about 6.0 cm (width) x 2.0 cm (height).'],
  ['Signature, fatal error', 'Illegible, blurred or miniature writing. SSC also tells candidates to sign so the ink fills at least 80 percent of the cutting box.'],
  ['Exam day', 'Your appearance must match the photograph in the form, because invigilators check it against the captured image.'],
];

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0b1020,#1f2a44,#141b2e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"SSC Exam Photo and Signature","item":"https://www.compressto20kb.com/compress-for-ssc-exam"}]}' }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '44px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(25px,4vw,40px)', fontWeight: 900, lineHeight: 1.22, marginBottom: '14px' }}>
          <span style={{ color: '#fbbf24' }}>SSC applications</span>: one image you shoot live, one image you upload
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.8, marginBottom: '26px' }}>
          Indian exam forms mix two jobs that people confuse. The SSC photograph is captured in front of the camera while you fill the form, so there is nothing for a compressor to do to it. The signature is a scanned file with a stated window in kilobytes, and that file is where a size tool earns its place.
        </p>

        <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '12px', padding: '18px 20px', marginBottom: '32px', fontSize: '14px', lineHeight: 1.7 }}>
          <strong>Source and date.</strong> The figures below are from the SSC MTS and Havaldar (CBIC &amp; CBN) 2024 notification on ssc.gov.in and from the Commission&#39;s &ldquo;Instructions to Candidates for uploading of signatures&rdquo; dated 15 August 2024, both checked in October 2026. SSC changes these values between notifications, so read your own PDF before you upload.
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>What the notification actually asks for</h2>
        <div style={{ display: 'grid', gap: '10px', marginBottom: '34px' }}>
          {rows.map(([k, v]) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: 'minmax(120px,180px) 1fr', gap: '14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#fbbf24' }}>{k}</div>
              <div style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.82 }}>{v}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.55, marginBottom: '32px' }}>
          Official documents: <a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/NoticeOfMTSNT_20240627.pdf" rel="noopener noreferrer" style={{ color: '#fcd34d' }}>MTS &amp; Havaldar 2024 notification</a>, clauses 10.3 to 10.6, and <a href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/instructions_photo_signature_15_08_2024.pdf" rel="noopener noreferrer" style={{ color: '#fcd34d' }}>instructions on uploading signatures and photographs</a>.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>A 10 to 20 KB range is not a ceiling</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          Most forms state one maximum. SSC states a band, and a band has two walls, which changes how you use Target KB Mode:
        </p>
        <ol style={{ fontSize: '15px', lineHeight: 1.9, opacity: 0.8, paddingLeft: '22px', marginBottom: '30px' }}>
          <li>Type <strong>20</strong> into the target field, never 10. The tool returns the highest quality that still lands <em>at or under</em> the number you set, so a 20 KB target keeps you inside the band while a 10 KB target can drop you under the floor.</li>
          <li>Keep the output format on JPEG. The notification names JPEG or JPG for the signature, and PNG, WebP or AVIF files are usually refused by the uploader before size is even read.</li>
          <li>Check the result weight before uploading. Our <Link href="/image-size-checker-online" style={{ color: '#fcd34d' }}>size checker</Link> reads the file back locally, which is also how you notice case three below.</li>
          <li>If the scanned signature comes in under 10 KB, no compressor can help, because compression only removes data. Sign larger, fill at least 80 percent of the cut box, and re-scan bigger or at higher scanner quality instead.</li>
        </ol>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '34px' }}>
          One more limit that no software can cross: SSC states centimetre dimensions, and this tool does not crop to a ratio, resize to a fixed box, flatten a background or sharpen a blur. Scan at the stated physical size in your scanner or camera app, then compress here.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Getting the live photograph accepted</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          The Commission&#39;s own rejection list is short and cheap to satisfy: stand or sit against a plain wall in a well-lit room, put the camera at eye level, look straight ahead with the face fully inside the on-screen rectangle, and remove cap, mask, spectacles and earphones. Wear a normal shirt; the instructions list a shirtless photo among the rejected samples. Do not point the camera at an old printed photograph - that specific trick voids the application, and it is also why no photo editor can rescue you here.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '30px' }}>
          Since invigilators compare you with that captured image on exam day, the file is only half the job: your hair, spectacles and headwear on the day should match it.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>What the tool is, in plain terms</h2>
        <ul style={{ fontSize: '15px', lineHeight: 1.85, opacity: 0.78, paddingLeft: '22px', marginBottom: '30px' }}>
          <li>Runs entirely in your browser; the scan of your signature and your face is never uploaded, has no account, no watermark and no queue. Worth having when a document carries your handwriting.</li>
          <li>Target field 5 to 5000 KB, batch of up to 50 files, ZIP download, output WebP, AVIF, JPEG or PNG.</li>
          <li>A file already smaller than your number is returned unchanged, so a second run cannot make it smaller still.</li>
          <li>Open it ready at <a href={"/?mode=exactkb&target=20"} style={{ color: '#fcd34d' }}>Target KB Mode, 20 KB</a>. The compressor itself is on the home page, not on this page.</li>
        </ul>
        <p style={{ fontSize: '13px', opacity: 0.55, marginBottom: '34px' }}>
          Neighbouring pages for other Indian forms, which do ask for an uploaded photograph with its own KB window: <Link href="/compress-for-upsc-exam" style={{ color: '#fcd34d' }}>UPSC exam</Link>, <Link href="/compress-for-neet-exam" style={{ color: '#fcd34d' }}>NEET</Link> and <Link href="/compress-for-india-passport" style={{ color: '#fcd34d' }}>Indian passport</Link>.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Four things candidates ask before uploading</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,191,36,0.22)', borderRadius: '10px', padding: '14px 20px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#fcd34d' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.72 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

    </div>
  );
}
