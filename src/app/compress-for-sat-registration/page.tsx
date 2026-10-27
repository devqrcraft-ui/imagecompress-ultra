const faq: [string, string][] = [
  ['Does the College Board publish a maximum file size for the SAT photo?', 'No. The SAT photo requirements page names accepted formats and framing rules, but it prints no kilobyte ceiling and no pixel box, so any fixed number you find on another site is that site guessing. If the upload screen in your registration shows a limit, that on-screen figure is the one to compress against.'],
  ['Which image formats does the SAT photo upload accept?', 'The page lists .jpg, .gif and .png. Pick JPEG from this tool: it can also write WebP or AVIF, but neither appears in the College Board list, so keeping the file JPEG avoids an upload that is refused on format before size is even considered.'],
  ['My SAT photo bounced even though the file is small. What usually causes it?', 'Framing, most often. The published rejection triggers are a tilted head, eyes that are obscured, more than one person in the frame, poor image quality, excessive shadows, a non-religious hat, and any digitally altered appearance. Re-shoot or re-crop to fix those; a smaller file will not clear them.'],
  ['Can this compressor crop my photo to the head-and-shoulders frame?', 'It cannot. It reduces file size only: no cropping, no aspect-ratio change, no background replacement, no sharpening, and no resize to a specific pixel box. While compressing it caps the longest side at 4096 px, which matters only for very large camera files. Frame the shot in your phone editor first, then compress that file.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SAT Registration Photo Rules and File Size Fix',
  description: 'What the College Board actually prints for the SAT photo: jpg, gif or png, head-on framing, rejection causes - and no published KB limit.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-sat-registration' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-sat-registration' },
  keywords: 'SAT registration photo requirements, SAT photo file size, SAT photo rejected',
};

const published = [
  ['Accepted formats', 'jpg, gif, png', 'Yes'],
  ['Framing', 'head and shoulders fully in view, facing the camera directly', 'Yes'],
  ['Face visibility', 'entire face, eyes and hair visible; head-on, no tilt', 'Yes'],
  ['Other people in frame', 'you must be the only person in the picture', 'Yes'],
  ['Headwear', 'religious head coverings permitted; other hats cause rejection', 'Yes'],
  ['Colour', 'black-and-white images are acceptable', 'Yes'],
  ['Editing', 'digitally altered appearance is rejected', 'Yes'],
  ['Maximum KB size', 'not stated on the requirements page', 'No'],
  ['Pixel dimensions', 'not stated on the requirements page', 'No'],
];

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"SAT Registration Photo","item":"https://www.compressto20kb.com/compress-for-sat-registration"}]}' }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '14px' }}>
          SAT Registration Photo: What the College Board Prints, and What It Does Not
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.78, marginBottom: '28px' }}>
          The photo step of SAT registration states which formats it takes and how your face has to sit inside the frame. It does not state a kilobyte ceiling or a pixel box. That ordering matters when an upload bounces: the picture itself is what is being checked, and file size is a separate, much smaller problem.
        </p>

        <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.6, marginBottom: '28px', borderLeft: '3px solid #818cf8', paddingLeft: '14px' }}>
          Everything on this page comes from the College Board SAT Suite pages - the photo requirements page and the ID requirements page - checked in October 2026. Where those pages are silent, this page says so instead of filling the gap.
        </p>

        <h2 style={{ fontSize: '23px', fontWeight: 800, marginBottom: '14px' }}>Nine claims, tested against the source</h2>
        <div style={{ overflowX: 'auto', marginBottom: '34px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ textAlign: 'left', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.6px', fontSize: '11px' }}>
                <th style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>Item</th>
                <th style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>What the page says</th>
                <th style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>Published</th>
              </tr>
            </thead>
            <tbody>
              {published.map(([k, v, ok]) => (
                <tr key={k}>
                  <td style={{ padding: '10px', fontWeight: 700, verticalAlign: 'top', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{k}</td>
                  <td style={{ padding: '10px', opacity: 0.8, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{v}</td>
                  <td style={{ padding: '10px', fontWeight: 800, color: ok === 'Yes' ? '#4ade80' : '#fbbf24', borderBottom: '1px solid rgba(255,255,255,0.07)', whiteSpace: 'nowrap' }}>{ok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', opacity: 0.55, marginBottom: '34px' }}>
          Official sources: <a href="https://satsuite.collegeboard.org/sat/registration/online-registration/photo-requirements" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>SAT photo requirements</a> and <a href="https://satsuite.collegeboard.org/sat/what-to-bring-do/id-requirements" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>SAT ID requirements</a>. For test day the ID has to be an unexpired government- or school-issued photo ID and an original physical document, not a photocopy. The photo you attach at registration is not printed on your admission ticket; proctoring staff carry it on their roster.
        </p>

        <h2 style={{ fontSize: '23px', fontWeight: 800, marginBottom: '12px' }}>Why a registration photo bounces</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '14px' }}>
          The rejection list is about the photograph, and every item on it is fixed by re-shooting or re-cropping rather than by compressing: a tilted head, obscured eyes, a second person in frame, weak lighting or heavy shadow, low image quality, a hat that is not religious headwear, and any digitally altered appearance. A selfie taken in a window-lit room against a plain wall, with the camera at eye level and your head squared up, clears most of them in one go.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '34px' }}>
          File size only becomes the problem when the upload screen in front of you states one - a maximum in MB on a portal, or a &ldquo;file too large&rdquo; message after you attach. That number, not a number from a blog, is what you compress to. Our <a href="/image-size-checker-online" style={{ color: '#a5b4fc' }}>image size checker</a> tells you the current weight of the file before you bother re-encoding it.
        </p>

        <h2 style={{ fontSize: '23px', fontWeight: 800, marginBottom: '12px' }}>Where this compressor sits in the process</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.78, marginBottom: '14px' }}>
          It is the last step, and it does one thing: it takes a JPEG you have already framed and makes the file smaller. It is a browser page, so the photo never leaves your device - there is no upload, no account, no watermark and no queue. Target KB Mode searches the encoding quality downward and keeps the best setting that still lands at or under the number you typed; it does not promise an exact byte count, and a file that is already smaller than your target is returned unchanged.
        </p>
        <ul style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.78, paddingLeft: '22px', marginBottom: '34px' }}>
          <li>Formats it can write: WebP, AVIF, JPEG, PNG. For SAT registration pick <strong>JPEG</strong>, since the College Board list is jpg, gif or png.</li>
          <li>The target field accepts 5 to 5000 KB; a batch takes up to 50 files, with a ZIP download if you are preparing several candidates or siblings.</li>
          <li>Re-encoding throws data away on purpose, so what you get is the highest quality that still fits under your number - not the original pixels.</li>
          <li>Longest side is capped at 4096 px while compressing. It will not resize the photo to a pixel box, crop a ratio, remove a background or un-blur a shot.</li>
        </ul>

        <h2 style={{ fontSize: '23px', fontWeight: 800, marginBottom: '12px' }}>Three steps, on the compressor</h2>
        <ol style={{ fontSize: '15px', lineHeight: 1.9, opacity: 0.8, paddingLeft: '22px', marginBottom: '30px' }}>
          <li>Open the tool with the target already set — <a href={"/?mode=exactkb&target=200"} style={{ color: '#a5b4fc' }}>Target KB Mode at 200 KB</a> is a sensible first pass if your screen states no limit. The compressor lives on the home page, not on this page.</li>
          <li>Set the output format to JPEG, then drop the photo into the box that says &ldquo;Drop images here or click to upload&rdquo;.</li>
          <li>Run it and read the size back. If the portal still rejects the file, lower the number and run once more from the original photo rather than from the already-compressed result, which would discard detail twice.</li>
        </ol>
        <p style={{ fontSize: '13px', opacity: 0.55, marginBottom: '34px' }}>
          Related size pages on this site: <Link href="/compress-to-50kb" style={{ color: '#a5b4fc' }}>compress to 50 KB</Link> and <Link href="/compress-to-20kb" style={{ color: '#a5b4fc' }}>compress to 20 KB</Link>. Neither figure is a College Board rule — they are just the two ceilings portal forms ask for most often.
        </p>

        <h2 style={{ fontSize: '23px', fontWeight: 800, marginBottom: '16px' }}>Four answers, before you retake the shot</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.25)', borderRadius: '10px', padding: '14px 20px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#a5b4fc' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.72 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

    </div>
  );
}
