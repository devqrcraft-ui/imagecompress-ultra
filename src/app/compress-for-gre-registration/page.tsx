const faq: [string, string][] = [
  ['Do I attach a portrait file when I register for the GRE?', 'No. The ETS registration and ID pages describe an identification document you bring or photograph at check-in, not a profile picture you upload, and neither page publishes a kilobyte limit or pixel box for a registration photo. If a graduate school application asks for a picture, that form prints its own ceiling and you compress to that figure.'],
  ['What does ETS require of the photograph on my GRE ID?', 'The general ID rules state each document must be original, physical, government-issued, valid, bearing your first and last name exactly as registered, your signature, and a recent, recognizable photograph. ETS adds that photocopied documents are not acceptable.'],
  ['How is my picture taken at GRE at-home check-in?', 'On your phone. ETS has you install the IDVaaS identity app from a QR code, then "take a clear photo of your ID in good lighting with no glare or shadows" and take a selfie facing the camera straight on. Nothing is prepared in a file, so nothing can be compressed ahead of time.'],
  ['Does the photo from my at-home session reach universities?', 'ETS states that during at-home testing you are monitored by camera and that your photo is shared with the institutions that receive your scores. It is a live capture, not a file you control - dress and background rules apply for the whole session, and masks may not be worn at check-in.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GRE Photo and ID Rules: What ETS Actually Requires',
  description: 'ETS publishes no GRE registration photo size. Verified ID and at-home check-in rules, the one case where compressing a file does help, tool limits.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-gre-registration' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-gre-registration' },
  keywords: 'GRE photo requirements, GRE ID requirements ETS, GRE at home check-in photo',
};

const idRules = [
  ['Original document', 'Photocopied documents are not acceptable.'],
  ['Physical ID', 'A digital ID on a phone is not acceptable, with the Republic of Korea named as an exception.'],
  ['Government-issued', 'A national, state or province identity card recognised by your country.'],
  ['Name', 'First and last name exactly as registered, excluding accents.'],
  ['Photograph', 'A recent, recognizable photograph on the document itself.'],
  ['Signature', 'Present, and matching the name on the document.'],
  ['Validity', 'Unexpired; expired documents are not acceptable.'],
];

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#10131f,#23304a,#171d2c)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"GRE Registration Photo","item":"https://www.compressto20kb.com/compress-for-gre-registration"}]}' }} />
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '44px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(25px,4vw,40px)', fontWeight: 900, lineHeight: 1.22, marginBottom: '16px' }}>
          Before you compress anything for the GRE: there is no photo upload
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.8, marginBottom: '26px' }}>
          Searching for a GRE registration photo size usually ends with a third-party site inventing one. ETS does not publish a KB limit or a pixel frame for a registration portrait, because the GRE does not ask test takers to attach a portrait. The photographs ETS does care about are the one printed on your identity document and the two shots you take with your phone at at-home check-in.
        </p>

        <div style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '18px 20px', marginBottom: '34px', fontSize: '14px', lineHeight: 1.7 }}>
          <strong>How the numbers on this page were checked.</strong> Quoted from two ETS pages - <a href="https://www.ets.org/gre/test-takers/general-test/register/id-requirements.html" rel="noopener noreferrer" style={{ color: '#86efac' }}>GRE General Test ID Requirements</a> and <a href="https://www.ets.org/gre/test-takers/general-test/register/at-home-testing.html" rel="noopener noreferrer" style={{ color: '#86efac' }}>Taking the GRE General Test at Home</a> - retrieved October 2026. Where ETS is silent, this page stays silent too.
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>The seven conditions your ID must meet</h2>
        <p style={{ fontSize: '14px', opacity: 0.72, marginBottom: '18px' }}>Reproduced from the ETS general ID document requirements, in the order the page lists them.</p>
        <ul style={{ listStyle: 'none', display: 'grid', gap: '8px', marginBottom: '30px', padding: 0 }}>
          {idRules.map(([k, v]) => (
            <li key={k} style={{ display: 'flex', gap: '14px', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
              <span style={{ flex: '0 0 150px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.6px', textTransform: 'uppercase', color: '#4ade80' }}>{k}</span>
              <span style={{ fontSize: '14px', lineHeight: 1.65, opacity: 0.82 }}>{v}</span>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '32px' }}>
          Read that list as a warning about the one thing a compressor cannot do: it will not turn a scan into an acceptable document, and it will not add a signature or make an old face look current. ETS also lists documents that are unacceptable as primary or supplemental ID under any circumstances, so check the country page for where you plan to test before assuming your card qualifies.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>At-home check-in, in the order the app walks you through it</h2>
        <ol style={{ fontSize: '15px', lineHeight: 1.9, opacity: 0.8, paddingLeft: '22px', marginBottom: '32px' }}>
          <li>Scan the QR code in your email or ETS account and install the IDVaaS app.</li>
          <li>Scan it again, allow camera access, accept the terms and the biometric consent.</li>
          <li>Capture your ID: ETS asks for a clear photo in good lighting, with no glare or shadows.</li>
          <li>If the document has a chip, hold the phone against it as instructed and let the app read it.</li>
          <li>Take a selfie facing the camera straight on.</li>
          <li>Show your workspace to the proctor, then stay presentable for the session: ears visible throughout, religious headwear permitted if the ears show, and no mask worn at check-in or during the session.</li>
        </ol>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '34px' }}>
          Every image in that flow is captured live during check-in, so there is no file to prepare in advance and nothing for a compressor to contribute. The ETS page states plainly that you are monitored by camera and that your photo is shared with institutions that receive your scores.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>The three cases where a size tool is the right answer</h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid #4ade80', borderRadius: '8px', padding: '16px 18px' }}>
            <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '6px' }}>A graduate application that asks for a headshot</div>
            <div style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.78 }}>Some programmes attach a photo field of their own. That page is the authority: type its number into Target KB Mode and nothing else.</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid #4ade80', borderRadius: '8px', padding: '16px 18px' }}>
            <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '6px' }}>A scanned document that a portal refuses as too heavy</div>
            <div style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.78 }}>Scan-to-PDF wrappers often export 8 MB images. Reduce the picture, then check the weight with our <Link href="/image-size-checker-online" style={{ color: '#86efac' }}>size checker</Link> before re-attaching.</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid #4ade80', borderRadius: '8px', padding: '16px 18px' }}>
            <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '6px' }}>A visa or ID upload you do up for the same trip</div>
            <div style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.78 }}>Those forms do print millimetre and kilobyte rules. See <Link href="/compress-for-passport-renewal" style={{ color: '#86efac' }}>passport renewal</Link> or <Link href="/compress-for-uscis" style={{ color: '#86efac' }}>USCIS uploads</Link> on this site.</div>
          </div>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>What this tool does, stated exactly</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          Compression only, run entirely on your device: nothing is uploaded, there is no account, no watermark and no queue. Target KB Mode binary-searches the encoding quality and returns the best setting that lands at or under the number you typed - never an exact byte count - and a file already smaller than the target comes back unchanged. Lossy re-encoding discards pixels on purpose, so what you get is the highest quality that still fits, not the original data.
        </p>
        <ul style={{ fontSize: '15px', lineHeight: 1.85, opacity: 0.78, paddingLeft: '22px', marginBottom: '34px' }}>
          <li>Output WebP, AVIF, JPEG or PNG; batch up to 50 files; target field 5 to 5000 KB; longest side capped at 4096 px.</li>
          <li>It will not resize to a pixel box, crop a ratio, replace a background or fix blur - so it cannot manufacture a compliant ETS image, only lighten a file you already have.</li>
          <li>Ready-made entry point: <a href={"/?mode=exactkb&target=200"} style={{ color: '#86efac' }}>Target KB Mode preset at 200 KB</a>, our own suggestion for a headshot, not an ETS figure. The compressor is on the home page rather than on this page.</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Asked most often about GRE photos</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '10px', padding: '14px 20px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#86efac' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.72 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

    </div>
  );
}
