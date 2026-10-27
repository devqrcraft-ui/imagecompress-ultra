import type { Metadata } from 'next';
import Link from 'next/link';

const faq: [string, string][] = [
  ['Can I attach a JPEG headshot to a Greenhouse job application?', 'The documented upload formats for candidate uploads are ".doc, .docx, .pdf, .rtf" and ".txt" — image extensions are not on that list. If a form asks for a photo, the reliable route is to place it inside the PDF of your CV and upload that single document, rather than trying to attach a loose image.'],
  ['Greenhouse allows 100 MB per upload — why would I compress at all?', 'Because the 100 MB figure is a ceiling on the file, not on how it behaves. A multi-megabyte CV with an embedded photo takes longer to push through a form on a phone connection, and it is the same document a recruiter opens on a laptop hours later. Shrinking the picture inside it makes the whole file lighter without touching the layout.'],
  ['What pixel width should a career-page banner be before I compress it?', 'Greenhouse\'s own recommended-sizes article gives 1400 px wide by 300 px high, with 1867 × 400 offered as the alternative. Cut to one of those shapes in an image editor first — this tool reduces file size only and does not crop to a ratio.'],
  ['Does Greenhouse name a file format for job-board images?', 'No. The recommended-sizes article gives dimensions and a file-weight range but does not state accepted formats. Where transparency matters — the logo — PNG is our suggestion; for a photographic banner we would use JPEG. Treat both as recommendations from us, not requirements from Greenhouse.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export const metadata: Metadata = {
  title: 'Greenhouse Image Sizes: Careers Page & Upload Specs',
  description: 'Greenhouse documents 100 MB for candidate uploads and pixel widths for career-page branding. Both lists, sourced, plus what to crop before you compress.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-greenhouse' },
  openGraph: {
    title: 'Greenhouse Image Sizes: Candidate Uploads and Career-Page Branding',
    description: 'The 100 MB document ceiling, the 64×64 logo and the 1400 px banner — with the byte reduction done in your browser.',
    url: 'https://www.compressto20kb.com/compress-for-greenhouse',
  },
  keywords: 'greenhouse image size, greenhouse careers page banner, greenhouse candidate upload formats, compress photo greenhouse',
};

const th = { textAlign: 'left', padding: '10px 12px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.6px', opacity: 0.72, borderBottom: '1px solid rgba(255,255,255,0.14)' } as const;
const td = { padding: '12px', fontSize: '15px', lineHeight: 1.6, verticalAlign: 'top' } as const;

export default function CompressForGreenhousePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(150deg,#0d1117,#151d2e,#0d1117)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Greenhouse image sizes","item":"https://www.compressto20kb.com/compress-for-greenhouse"}]}' }} />
<article style={{ maxWidth: '880px', margin: '0 auto', padding: '40px 18px 40px' }}>
        <h1 style={{ fontSize: 'clamp(25px,4.4vw,36px)', fontWeight: 900, lineHeight: 1.25, margin: '0 0 16px' }}>
          Greenhouse Image Sizes: a <span style={{ color: '#34d399' }}>100 MB ceiling</span> on one side, a 64&times;64 logo on the other
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.86, marginBottom: '12px' }}>
          Greenhouse is two upload screens wearing one name. A candidate pushing a CV through a company&rsquo;s hosted careers page meets a generous document limit and a short list of accepted file types. The recruiter configuring that same page meets published pixel widths and a kilobyte recommendation. The advice you need depends entirely on which side of the account you are sitting on.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.86, marginBottom: '30px' }}>
          Both sets of numbers are below, quoted from Greenhouse&rsquo;s own support articles. The compression itself happens on this page&rsquo;s tool, entirely inside your browser: no file is uploaded to us, no account is required, there is no watermark and no queue.
        </p>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 12px' }}>If you are applying through a Greenhouse careers page</h2>
        <ul style={{ margin: '0 0 10px', paddingLeft: '22px', lineHeight: 1.9, fontSize: '15px', opacity: 0.86 }}>
          <li><strong>Documents, not pictures.</strong> The support article on candidate uploads lists accepted formats as ".doc, .docx, .pdf, .rtf" and ".txt". A bare .jpg is not among them, so a headshot belongs <em>inside</em> your PDF rather than attached beside it.</li>
          <li><strong>100 MB is the published ceiling.</strong> The same article states that "Candidate uploads can be up to 100 MB" — which is why a size failure is rarely the thing that stops an application here.</li>
          <li><strong>Embedded beats hotlinked.</strong> Greenhouse "does not load externally linked images when converting a resume to PDF for preview", so an image pulled in by URL disappears from the preview a recruiter actually reads. Bake the picture into the file.</li>
          <li><strong>Every employer configures their own form.</strong> The photo field may not exist at all on the page in front of you, and any field-specific rule that company adds is not a Greenhouse rule. Take requirements from the application screen.</li>
        </ul>
        <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '26px' }}>
          Source: <a href="https://support.greenhouse.io/hc/en-us/articles/360052218132-Supported-formats-for-resumes-cover-letters-and-other-candidate-uploads" target="_blank" rel="noopener noreferrer" style={{ color: '#6ee7b7' }}>Greenhouse Support — Supported formats for resumes, cover letters and other candidate uploads</a>, checked October 2026.
        </p>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 12px' }}>If you run the careers page</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.82, marginBottom: '14px' }}>
          Greenhouse publishes an actual specification list for Recruiting assets. It is unusually concrete about widths and vague about formats:
        </p>
        <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', marginBottom: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                <th style={th}>Asset</th>
                <th style={th}>Greenhouse&rsquo;s recommendation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Overall file weight', 'Images of "100 - 500 kilobytes(KB)" work; "compressed media between 100KB - 250KB are ideal"'],
                ['Company logo', '"64 pixels wide by 64 pixels high" — anything smaller, Greenhouse "will attempt to expand the picture, which may affect the image quality"'],
                ['Full-width job-board image', '1400 pixels wide'],
                ['Half-width image', '700 pixels wide'],
                ['Quarter-width image', '360 pixels wide'],
                ['Career-site banner', '1400 px wide &times; 300 px high, or 1867 px &times; 400 px as the alternative'],
                ['Images inside email templates', 'Less than 600 pixels wide'],
                ['Accepted formats', 'Not stated in this article'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: i % 2 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>{r[0]}</td>
                  <td style={{ ...td, opacity: 0.85 }}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '28px' }}>
          Source: <a href="https://support.greenhouse.io/hc/en-us/articles/10508839286171-Recommended-image-sizes-to-use-in-Greenhouse-Recruiting" target="_blank" rel="noopener noreferrer" style={{ color: '#6ee7b7' }}>Greenhouse Support — Recommended image sizes to use in Greenhouse Recruiting</a>, checked October 2026.
        </p>

        <div style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '14px', padding: '16px 18px', marginBottom: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 8px' }}>Do not mix these with Greenhouse Onboarding numbers</h3>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.85, margin: 0 }}>
            Onboarding is a separate product with its own image article: a profile photo cap of "3 MB", a company-media width limit of "1016px", a note that "Some file types, such as GIFs, will require a smaller file size", and a circular crop that "will crop from the center-center to the center-top of your photo". If you are sizing a new hire&rsquo;s avatar, use those; if you are building a job board, use the Recruiting list above.
          </p>
          <p style={{ fontSize: '13px', opacity: 0.7, margin: '10px 0 0' }}>
            Source: <a href="https://support.greenhouse.io/hc/en-us/articles/115000313406-Greenhouse-Onboarding-image-size-recommendations" target="_blank" rel="noopener noreferrer" style={{ color: '#6ee7b7' }}>Greenhouse Support — Onboarding image size recommendations</a>, checked October 2026.
          </p>
        </div>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 12px' }}>Reaching 100–250 KB without wrecking the asset</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          The banner is the awkward one, and not because of bytes. A design tool or photo editor has to make it 1400&times;300 or 1867&times;400 — this tool changes file size and format only; it cannot crop to a ratio, resize to a dimension you name, or strip a background. Order of operations matters: composition first, compression second.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          Once the shape is right, the byte target is straightforward. A 1400 px-wide photographic banner is well inside the 4096 px longest-side cap this tool works to, so nothing is resized behind your back; Target KB Mode then searches encoding quality and returns the highest setting that lands <strong>at or under</strong> the number you typed. Files that are already smaller than the target come back untouched, so a mixed folder of logos and banners is safe in one batch.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '24px' }}>
          Two format notes we would flag as ours rather than Greenhouse&rsquo;s: PNG for the logo where transparency matters, and JPEG for photographic banners. This tool can also write WebP and AVIF, which are smaller again — but since Greenhouse names no accepted formats, do not assume an ATS front end will render them; keep the upload in the conservative format and save WebP and AVIF for a site you control.
        </p>

        <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '16px', padding: '22px', marginBottom: '34px', textAlign: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px' }}>Start from Greenhouse&rsquo;s own ideal band</div>
          <p style={{ fontSize: '14px', opacity: 0.7, margin: '0 0 14px' }}>Target KB Mode, 200 KB — mid-range of the 100–250 KB the article calls ideal. Files stay on your device.</p>
          <a href="/?mode=exactkb&target=200" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#047857,#0e7490)', color: 'white', padding: '12px 26px', borderRadius: '10px', fontWeight: 800, fontSize: '15px', textDecoration: 'none' }}>Open the compressor at 200 KB</a>
          <p style={{ fontSize: '13px', opacity: 0.68, margin: '10px 0 0' }}>Up to 50 files per batch · target 5–5000 KB · WebP, AVIF, JPEG, PNG output · ZIP download</p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '26px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, marginBottom: '16px' }}>Questions about applying and posting</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faq.map(([q, a], i) => (
              <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(52,211,153,0.22)', borderRadius: '10px', padding: '14px 18px' }}>
                <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#6ee7b7' }}>{q}</summary>
                <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>Adjacent pages</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '14px', marginBottom: '22px' }}>
          {[
            { href: '/compress-for-indeed', label: 'Indeed photo & logo sizes' },
            { href: '/compress-for-workday', label: 'Workday image sizes' },
            { href: '/compress-for-resume-photo', label: 'Compress a resume photo' },
            { href: '/convert-image-to-pdf', label: 'Convert an image to PDF' },
            { href: '/compress-to-200kb', label: 'Compress to 200 KB' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ background: 'rgba(255,255,255,0.07)', padding: '7px 13px', borderRadius: '8px', color: 'white', textDecoration: 'none' }}>{l.label}</Link>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.68, lineHeight: 1.7 }}>
          Independent of Greenhouse: no affiliation, no endorsement, no integration with any ATS account. What happens on this site is local file encoding — the upload itself you still do yourself, through your own careers-page session.
        </p>
      </article>
    </div>
  );
}
