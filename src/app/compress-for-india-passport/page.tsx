import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

const faq: [string, string][] = [
  ['What size photograph does an Indian passport application need?', 'Two different sizes are in play. The physical print is a portrait photograph: the official Passport Seva guidance for minors below 4 gives it as 45 mm x 35 mm, and the portal’s Application Form FAQ asks applicants attending an appointment to carry coloured photographs of 4.5 x 3.5 cm on white background. The digital upload is specified in pixels: the ICAO-compliant guidance published by Indian missions (e.g. the High Commission of India in Kuala Lumpur) gives 630 x 810 pixels, colour, white background, face covering 80-85% of the frame, “unaltered by computer software”.'],
  ['Is the photo still 2 x 2 inches (51 x 51 mm)?', 'That square format was the older print spec carried in some pre-2025 mission and outsourcing-partner guidance. The official documents we could verify in October 2026 describe the portrait ICAO shape — 35 x 45 mm print, 630 x 810 px digital — instead. Because applications filed in India and applications filed through missions abroad have historically been documented separately, follow the specification printed on your own form and appointment email over any summary, including this one.'],
  ['What file size (KB) does the Passport Seva photo upload allow?', 'We could not find a specific KB limit published on a static official Passport Seva page — pages circulating an exact number are mostly quoting the error message from the upload box itself. The portal enforces its rules at the upload step and shows them there, so read the number your upload screen displays and compress to comfortably under it. The target on this page (200 KB) is our suggestion for staying inside a small-but-sharp JPEG, not an official figure.'],
  ['Can this tool make my photo exactly 630 x 810 pixels?', 'No, and pages that claim otherwise are overselling it. This tool only changes compression and file size — it never changes pixel dimensions and it cannot crop to a ratio, flatten a background, or remove shadows. Resize or crop to 630 x 810 in any image editor (or your phone’s built-in crop), then compress here to get the file under the portal’s size limit.'],
  ['Do a child’s application or an OCI case change the photo rules?', 'For children below 4 there is a dedicated official guidance document (the Passport Seva “Guidelines for Capturing Photographs for Minors”, 45 x 35 mm, close crop with the face at 80-85%, and the document walks through practical capture tips). For non-ECR versus ECR, we found no photo-spec difference at all — the ECR category concerns emigration-check documents, not the photograph. OCI applications filed abroad follow the same ICAO photograph guidance published by the missions. When in doubt, the instructions attached to your specific application type control.'],
  ['Will my passport photo be uploaded to your servers?', 'No. The file is decoded and re-encoded entirely in your browser and nothing is sent to our backend — you can verify this in your browser’s Network tab while compressing. Passport photographs are biometric data, which is exactly the category of image worth keeping on your own device.'],
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
  title: 'Compress Photo for Indian Passport Application — Passport Seva Upload Specs | CompressTo20KB',
  description: 'The verified official photo specs for an Indian passport application — 35x45 mm print, 630x810 px ICAO upload — where the file-size limit actually lives, and a private in-browser JPEG compressor.',
  keywords: 'indian passport photo upload size, passport seva photograph specifications, 630x810 passport photo india, compress photo for passport application india, scan of photograph passport',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-india-passport' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-india-passport' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress for India Passport","item":"https://www.compressto20kb.com/compress-for-india-passport"}]}' }} />

      <div style={{ background: '#0f0c29', color: '#e2e8f0', fontFamily: 'system-ui,sans-serif' }}>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 20px 20px' }}>
          <div style={{ fontSize: '15px', opacity: 0.68, marginBottom: '12px' }}>
            <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for India Passport
          </div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Compress your photo for the Indian passport application upload
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '10px', opacity: 0.9 }}>
            Passport Seva applications now involve a scanned photograph upload alongside the documents, and most of the advice floating around quotes numbers from screenshot error messages rather than published rules. Here is what the official documents we could actually verify say — and, just as important, what they do not say.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <CompressorTool initialTargetKB={200} />
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Two artifacts, two specs: the print and the upload</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '14px' }}>
            <div style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.18)', borderRadius: '12px', padding: '18px' }}>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#c7d2fe', marginBottom: '8px' }}>The physical print</div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.85, margin: 0 }}>
                A portrait photograph. The official Passport Seva guidance document for minors below 4 years states “the photograph should be in color and in the size of 45mm x 35mm” on a white background; the portal’s own Application Form FAQ says applicants need to carry coloured photographs of 4.5 x 3.5 cm with white background for their appointment.
              </p>
            </div>
            <div style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.18)', borderRadius: '12px', padding: '18px' }}>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#c7d2fe', marginBottom: '8px' }}>The digital upload</div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.85, margin: 0 }}>
                The ICAO-compliant photograph guidelines published by Indian missions specify the digital file: colour, “dimensions should be 630*810 Pixels”, white background, the face taking up 80-85% of the frame, no shadows or flash reflection, eyes open and clearly visible, and photographs “unaltered by computer software” — meaning no retouching, not no compression step, but don’t beautify the image before uploading.
              </p>
            </div>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.7, marginTop: '12px' }}>
            Sources, checked October 2026:{' '}
            <a href="https://passportindia.gov.in/AppOnlineProject/pdf/GUIDELINES%20FOR%20CAPTURING%20PHOTOGRAPHS%20FOR%20MINORS_v2.1.pdf" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>Passport Seva — Guidelines for Capturing Photographs for Minors below 4 (PDF on passportindia.gov.in)</a>
            {' · '}
            <a href="https://hcikl.gov.in/pdf/marquee/marquee__638867946.pdf" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>High Commission of India, Kuala Lumpur — Guidelines for ICAO Compliant Photographs (PDF on hcikl.gov.in)</a>
            {' · '}
            <a href="https://www.passportindia.gov.in/psp/FaqApplicationForm" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>Passport Seva FAQ — Application Form</a>
            . The rules were revised when ICAO-compliant photographs became mandatory, so re-check against the instructions attached to your own application.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>About the old 2 x 2 inch (51 x 51 mm) square</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            Many pages — and some older guidance still circulating — describe the Indian passport print as a square 51 x 51 mm (2 x 2 inch) photograph. That format belongs to the pre-revision specification that several overseas missions and their outsourcing partners published. The current official documents we could verify all describe the portrait shape instead: 35 x 45 mm printed, 630 x 810 px digital. If the form or appointment email in front of you still asks for a square 2 x 2 inch print for a mission-abroad filing, follow that document — the application you hold beats any website summary.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>The KB limit — stated honestly</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            Search results claim a precise maximum file size for the photograph upload. We looked for that number on the official static pages and could not verify it there — the enforceable specification is whatever the upload box in your application displays when it rejects or accepts a file. Treat this page as a compressor, not a source of a figure we cannot stand behind: open your form’s photo upload step, read the stated limit, then compress your JPEG to sit comfortably below it. The 200 KB preset above is a sane working size for a 630 x 810 pixel portrait JPEG — a good quality result that is small enough for any reported window — but your screen’s number is the one that matters.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            A note on how the tool behaves: it searches JPEG quality downward and returns the best file that is <strong>at or under your target</strong> — never over it, and a file already smaller than the target is returned unchanged. It does not guarantee acceptance: the portal also checks the pixel dimensions and runs its own automated photograph assessment.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Preparing a compliant upload file, step by step</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: 1.9, opacity: 0.85, fontSize: '15px' }}>
            <li>Take the photograph against a plain white background, facing the camera straight on, eyes open, neutral expression, no glasses that cast reflections — head and top of shoulders filling 80-85% of the frame.</li>
            <li>Crop or export to the portrait digital spec: <strong>630 x 810 pixels</strong>. This tool does not crop or resize; use your phone or any editor for that step.</li>
            <li>Check the file size. If it exceeds the limit shown on your upload screen, drop it through the compressor above in Target KB Mode.</li>
            <li>Choose JPEG output. The portal wants a photograph file, not a PNG screenshot with a border or a PDF page.</li>
            <li>Preview before confirming: shadows behind the head, hair across the eyes and tilted heads are the classic automated-rejection triggers, and none of them are fixable by compression.</li>
          </ol>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Minors, ECR status and OCI cases</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9, marginBottom: '10px' }}>
            <strong>Children below 4:</strong> there is a dedicated official capture-guidance document (linked above) — the format is the same portrait spec, with practical notes about getting the crop right for a toddler. Older minors follow the standard requirement, and the minors document we verified covers the below-4 case specifically.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9, marginBottom: '10px' }}>
            <strong>ECR vs Non-ECR:</strong> the emigration-check category changes which documents you submit, not the photograph. We found no official photo-spec difference tied to it, and we are not going to invent one.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            <strong>OCI card applications:</strong> missions abroad have published the same ICAO photograph guidance for passport services covering their consular intake. Follow your mission’s own checklist.
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
              ['/compress-for-passport-renewal', 'Passport renewal'],
              ['/compress-to-200kb', 'Compress to 200KB'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-50kb', 'Compress to 50KB'],
              ['/visa-photo-compressor', 'Visa photo compressor'],
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
