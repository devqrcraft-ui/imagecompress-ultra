const faq: [string, string][] = [
  ['Does GMAC ask me to upload a portrait when I book a GMAT appointment?', 'GMAC publishes identification rules, not a portrait specification: an original physical ID with a recent, recognizable photograph, which you present at the desk rather than attach to a form. We found no KB ceiling or pixel dimension for a registration photo anywhere on its own pages, so this page does not quote one either.'],
  ['Can I bring a printed or scanned copy of my ID to the GMAT?', 'No. The requirement states the document must be an original physical one and that copies are not accepted. A compressed scan cannot become acceptable by being smaller, and if your ID does not qualify you are not admitted and the fee is forfeited.'],
  ['What if my ID photograph looks nothing like me now?', 'GMAC asks for a recent, recognizable photo and for the name to match your mba.com registration exactly. Neither is a file-size question, so no compressor is involved: renew the document, or open a Customer Care review at least ten business days before the appointment if you cannot meet the requirement.'],
  ['So when would a GMAT candidate need this tool at all?', 'When a business school application or a visa form prints a size in the upload field. That number belongs to that form, not to the GMAT, so read it off the screen and type it into Target KB Mode. Files are re-encoded locally, so nothing is sent anywhere.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GMAT Registration: Photo ID Rules, No Photo Upload',
  description: 'GMAC requires an original physical photo ID and rejects copies; it publishes no registration photo size. What that means for compressing files.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-gmat-registration' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-gmat-registration' },
  keywords: 'GMAT ID requirements, GMAT registration photo, GMAT test centre identification',
};

const gmUploads: [string, string, string][] = [
  ['School application uploads', 'The university portal, printed beside the field', 'Type that figure into Target KB Mode. Nothing GMAC publishes applies to it.'],
  ['A headshot one programme requests', 'That programme, not GMAC', 'Crop and frame it in your own editor first, then reduce the file here.'],
  ['The visa photo after admission', 'The immigration authority', 'travel.state.gov allows US visa and passport photo files up to 240 KB at 600x600 to 1200x1200 pixels, which is why a 20 KB figure is a portal habit and not a law.'],
  ['Test centre check-in', 'Nobody: it is a physical card', 'Nothing to compress.'],
];

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0d1117,#1c2940,#12181f)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"GMAT Registration Photo","item":"https://www.compressto20kb.com/compress-for-gmat-registration"}]}' }} />
<div style={{ maxWidth: '780px', margin: '0 auto', padding: '44px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(25px,4vw,40px)', fontWeight: 900, lineHeight: 1.22, marginBottom: '16px' }}>
          The GMAT hands an ID to a person; it does not accept a photo file
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.8, marginBottom: '24px' }}>
          That single fact removes most of the reason a GMAT candidate would ever search for a photo size. GMAC&#39;s identification rules describe a card you carry into the test centre, verified by staff, and its published requirements never mention kilobytes, pixels or an image format.
        </p>
        <div style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', fontSize: '14px', lineHeight: 1.7 }}>
          <strong>Verified against.</strong> The GMAT Identification Requirements article on support.mba.com, GMAC&#39;s own help centre, read in October 2026. The mba.com registration pages themselves could not be retrieved for this check, so nothing here is attributed to them.
        </div>

        <h2 style={{ fontSize: '21px', fontWeight: 800, marginBottom: '14px' }}>The five conditions GMAC prints</h2>
        <blockquote style={{ margin: '0 0 30px', padding: '18px 22px', borderLeft: '3px solid #38bdf8', background: 'rgba(255,255,255,0.03)', borderRadius: '0 10px 10px 0', fontSize: '15px', lineHeight: 1.9 }}>
          Your identification must: be an original physical document (copies are not accepted); be valid and unexpired; contain your full name; contain a recent, recognizable photograph; match the name in your mba.com account and exam registration.
        </blockquote>

        <h2 style={{ fontSize: '21px', fontWeight: 800, marginBottom: '12px' }}>Consequences that have nothing to do with file size</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          GMAC is unusually blunt about what happens when the document is wrong. If you do not present acceptable identification you are not admitted to the exam, the appointment is marked a no-show, and the fee is forfeited and must be paid again to reschedule. Depending on where you test a passport book can be mandatory, and candidates testing outside their own country of citizenship must present one.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '32px' }}>
          Read &ldquo;copies are not accepted&rdquo; as the end of the compression question. Turning your licence into a neat 100 KB JPEG does not make it usable at the desk - it makes it a copy. Fix a document problem with the issuing authority, or with the alternate-identification review GMAC asks you to raise at least ten business days before the appointment.
        </p>

        <h2 style={{ fontSize: '21px', fontWeight: 800, marginBottom: '12px' }}>Where a real upload limit does sit in a GMAT year</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '32px' }}>
          <thead>
            <tr style={{ textAlign: 'left', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.6px', fontSize: '11px' }}>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>Upload you actually meet</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>Whose number it is</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>What to do</th>
            </tr>
          </thead>
          <tbody>
            {gmUploads.map(([a, b, c]) => (
              <tr key={a}>
                <td style={{ padding: '10px', fontWeight: 700, verticalAlign: 'top', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{a}</td>
                <td style={{ padding: '10px', opacity: 0.72, verticalAlign: 'top', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{b}</td>
                <td style={{ padding: '10px', opacity: 0.82, lineHeight: 1.65, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ fontSize: '21px', fontWeight: 800, marginBottom: '12px' }}>If you do have a file to shrink</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          The compressor runs entirely in your browser: no upload, no account, no watermark, no queue, and a batch of up to 50 files with a ZIP download. In Target KB Mode it binary-searches the encoding quality and gives you the best result that fits <em>at or under</em> the number you typed, within the 5 to 5000 KB field, so it can never promise an exact size or a byte-perfect 100 KB. A file already lighter than the target is handed back unchanged. Check what you have before you re-encode it with our <Link href="/image-size-checker-online" style={{ color: '#7dd3fc' }}>image size checker</Link>.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '34px' }}>
          What it will not do: crop to a ratio, resize to a stated pixel box, replace a background, sharpen a blur, or hold quality constant - lossy re-encoding is a trade of detail for bytes, and you get the highest setting that still fits. Output can be WebP, AVIF, JPEG or PNG, with the longest side capped at 4096 px during the search; for an application portal, choose JPEG unless the form names another format. Start it pre-set at <a href={"/?mode=exactkb&target=200"} style={{ color: '#7dd3fc' }}>200 KB</a>, or visit the <Link href="/compress-to-50kb" style={{ color: '#7dd3fc' }}>50 KB</Link> and <Link href="/compress-to-20kb" style={{ color: '#7dd3fc' }}>20 KB</Link> pages when a form states those exact ceilings.
        </p>

        <h2 style={{ fontSize: '21px', fontWeight: 800, marginBottom: '16px' }}>What GMAT takers ask us</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(56,189,248,0.22)', borderRadius: '10px', padding: '14px 20px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#7dd3fc' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.72 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

    </div>
  );
}
