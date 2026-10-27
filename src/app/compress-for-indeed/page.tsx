import type { Metadata } from 'next';
import Link from 'next/link';

const faq: [string, string][] = [
  ['My Indeed profile photo was under 30 MB and it still disappeared — what gives?', 'The size cap is only one of the rules. Indeed keeps a separate help article on profile photo removal that sets out its policy for rejecting or removing uploaded photos and the criteria used, and the upload guide\'s own troubleshooting advice is simply to upload a different image. So a photo that vanishes inside the format and size limits is a policy question, not a kilobyte question — read that article instead of shrinking harder.'],
  ['Can I upload a HEIC file straight from my iPhone?', 'Indeed\'s documented list for profile photos includes HEIC alongside JPG and PNG, so an iPhone original may go in as-is. If you compress it here first, note the direction of travel: this tool reads HEIC on input but writes WebP, AVIF, JPEG or PNG — it will not hand you back a HEIC.'],
  ['Does Indeed accept a photo as a resume file?', 'No. Indeed\'s own instructions for uploading a CV list .doc, .docx, .pdf, .txt and .rtf. A picture belongs either in the profile photo field of its own or embedded inside the PDF you send.'],
  ['What does an employer logo need to measure on a Company Page?', 'Indeed\'s employer help for editing a Company Page gives the square logo a recommended size of "256 × 256 pixels" with the file format specified as JPEG, and adds that "You can resize the logo to fit". Employer Branding Ads ask for a separate header image at 1400 × 400 px, which is a wide crop rather than a bigger version of the logo.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export const metadata: Metadata = {
  title: 'Indeed Photo Sizes: Profile Photo & Company Logo',
  description: 'Indeed states JPG, PNG or HEIC under 30 MB for profile photos, and a 256×256 JPEG logo for employers. Shrink files in your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-indeed' },
  openGraph: {
    title: 'Indeed Photo Sizes: Job-Seeker Profile and Employer Logo',
    description: 'The figures Indeed actually publishes, what they leave to moderation, and how to get a headshot light enough to matter.',
    url: 'https://www.compressto20kb.com/compress-for-indeed',
  },
  keywords: ['indeed profile photo size', 'indeed company page logo', 'compress photo for indeed', 'indeed photo requirements'],
};

const cardGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '12px', marginBottom: '14px' } as const;

export default function CompressForIndeedPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at 20% 0%,#1e2a4a,#0b1020 60%)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Indeed photo sizes","item":"https://www.compressto20kb.com/compress-for-indeed"}]}' }} />

      <article style={{ maxWidth: '880px', margin: '0 auto', padding: '40px 18px 40px' }}>
        <p style={{ fontSize: '14px', opacity: 0.68, marginBottom: '14px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> → Indeed
        </p>
        <h1 style={{ fontSize: 'clamp(25px,4.4vw,36px)', fontWeight: 900, lineHeight: 1.25, margin: '0 0 16px' }}>
          Indeed Photo Sizes: <span style={{ color: '#5eead4' }}>&lt; 30 MB for a profile shot</span>, 256 × 256 for an employer logo
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.86, marginBottom: '12px' }}>
          Indeed publishes numbers here, which makes this page a short list rather than a guess. They also cut both ways: a job seeker is allowed an absurdly large profile picture, while an employer logo is asked for something small, square and JPEG. Neither of those is the same job, and the interesting part is what each limit actually controls.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.86, marginBottom: '28px' }}>
          Compression itself happens in the tool on this page and nowhere else — the image is decoded and re-encoded on your own device, with no upload to us, no account, no watermark and no queue.
        </p>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 12px' }}>The four figures worth knowing</h2>
        <div style={cardGrid}>
          {[
            { v: '< 30 MB', l: 'Profile photo cap', c: '#5eead4' },
            { v: 'JPG · PNG · HEIC', l: 'Accepted formats', c: '#93c5fd' },
            { v: '256 × 256 px', l: 'Recommended employer logo', c: '#fbbf24' },
            { v: '1400 × 400 px', l: 'Branding-ad header image', c: '#f0abfc' },
          ].map(s => (
            <div key={s.l} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '16px', color: s.c, marginBottom: '6px' }}>{s.v}</div>
              <div style={{ fontSize: '13px', opacity: 0.72, lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '26px' }}>
          Sources, all checked October 2026: <a href="https://www.indeed.com/help/job-seekers/articles/27517857907853-uploading-a-profile-photo" target="_blank" rel="noopener noreferrer" style={{ color: '#5eead4' }}>Indeed Help — Uploading a Profile Photo</a> (&ldquo;Make sure the image is in JPG, PNG, or HEIC format&rdquo;, &ldquo;Files must be smaller than 30 MB&rdquo;); <a href="https://www.indeed.com/help/employers/articles/edit-company-page" target="_blank" rel="noopener noreferrer" style={{ color: '#5eead4' }}>Indeed Employer Help — Editing Your Company Page</a> (square logo, &ldquo;File format: JPEG&rdquo;, &ldquo;Recommended size: 256 × 256 pixels&rdquo;); <a href="https://www.indeed.com/help/employers/articles/what-are-employer-branding-ads" target="_blank" rel="noopener noreferrer" style={{ color: '#5eead4' }}>Indeed Employer Help — About Employer Branding Ads</a> (&ldquo;Header image (1400 x 400px)&rdquo;).
        </p>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 12px' }}>Job seekers: size is the least interesting constraint</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          A 30 MB allowance means Indeed is not the platform that will bounce your headshot for weight — no realistic photo comes close to it. What Indeed does apply is moderation: it maintains a separate help page describing the policy for removing or rejecting profile photos and the criteria used to judge them. That is the page to read if a picture vanishes after a successful upload.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          Meanwhile the document that actually carries your application has its own list, and it is not an image list. Indeed&rsquo;s instructions for adding a resume state that it supports .doc, .docx, .pdf, .txt and .rtf — so the headshot either lives in the profile photo field or sits embedded in the PDF you upload. And Indeed&rsquo;s own career-advice guidance on photos is that you add one when the application asks for it, which in most US hiring contexts it does not.
        </p>
        <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '26px' }}>
          Sources: <a href="https://www.indeed.com/career-advice/resumes-cover-letters/how-to-upload-resume-to-indeed" target="_blank" rel="noopener noreferrer" style={{ color: '#5eead4' }}>Indeed Career Advice — How To Upload Your Resume to Indeed</a>, <a href="https://www.indeed.com/help/job-seekers/articles/25810344131597-why-was-my-profile-photo-removed" target="_blank" rel="noopener noreferrer" style={{ color: '#5eead4' }}>Indeed Help — Profile Photo Removal</a> and <a href="https://www.indeed.com/career-advice/resumes-cover-letters/should-i-put-my-picture-on-my-resume" target="_blank" rel="noopener noreferrer" style={{ color: '#5eead4' }}>Indeed Career Advice — Should I Put My Picture on My Resume?</a>, checked October 2026.
        </p>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 12px' }}>Employers: two different assets, two different jobs</h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '26px' }}>
          {[
            { h: 'Company Page logo', b: 'Indeed asks for a square JPEG at 256 × 256 px and notes you can resize it to fit. That slot is rendered small across search results, company pages and job cards, so the practical question is never "can I upload it" — it is whether the mark stays readable when it is drawn at thumbnail size. Export a clean square JPEG, then compress it here to the smallest file that survives that shrink.' },
            { h: 'Employer Branding Ad header', b: 'A separate 1400 × 400 px image, alongside brand text of at most 95 characters and call-to-action text of at most 30. This is a wide, short crop: choose the picture so the subject survives being cut to roughly 3.5:1, because this page cannot crop it for you.' },
          ].map(r => (
            <div key={r.h} style={{ background: 'rgba(94,234,212,0.06)', border: '1px solid rgba(94,234,212,0.22)', borderRadius: '14px', padding: '16px 18px' }}>
              <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '6px', color: '#5eead4' }}>{r.h}</div>
              <div style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.85 }}>{r.b}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 12px' }}>Fitting a headshot into a small square</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '14px' }}>
          Profile photos get drawn inside a circle or a square at a fraction of the size you exported, which means the bytes you spend on a 4000 × 3000 original are spent on detail nobody sees. The steps below are ordered for that reality — and the first one cannot happen here, because this tool changes file size and format only. It does not crop, does not force an aspect ratio, does not replace a background and does not repair a soft-focus picture.
        </p>
        <ol style={{ margin: '0 0 26px', padding: 0, listStyle: 'none', display: 'grid', gap: '8px' }}>
          {[
            'Square the crop in your phone or desktop editor first — head and shoulders centred, with room above the hairline for a circular mask.',
            'Export a modest file, roughly 600–1000 px on a side; that is more than enough for any slot Indeed renders.',
            'Bring it here and switch to Target KB Mode. Quick chips sit at 20, 50, 100 and 200 KB; the custom box accepts 5–5000 KB.',
            'Choose JPEG for anything that leaves your device — it is the format Indeed names for the employer logo and the one no HR front end argues with.',
            'Check the before/after slider on a face: hair and skin tone are where a tight budget shows first. The result is the best encode that fits at or under your number, never a promised byte count.',
          ].map((t, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 14px', fontSize: '15px', lineHeight: 1.7 }}>
              <span style={{ fontWeight: 900, color: '#5eead4', flexShrink: 0 }}>{i + 1}</span>
              <span style={{ opacity: 0.87 }}>{t}</span>
            </li>
          ))}
        </ol>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '12px', marginBottom: '32px' }}>
          {[
            { href: '/?mode=exactkb&target=100', h: 'Logo or headshot at 100 KB', s: 'Comfortably inside every figure Indeed publishes.' },
            { href: '/?mode=exactkb&target=200', h: 'Branding-ad header at 200 KB', s: 'Wide 1400 × 400 crop, still light.' },
          ].map(c => (
            <a key={c.h} href={c.href} style={{ display: 'block', background: 'linear-gradient(135deg,rgba(20,184,166,0.25),rgba(59,130,246,0.25))', border: '1px solid rgba(94,234,212,0.3)', borderRadius: '14px', padding: '18px', textDecoration: 'none', color: 'white' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>{c.h}</div>
              <div style={{ fontSize: '14px', opacity: 0.75 }}>{c.s}</div>
            </a>
          ))}
        </div>

        <h2 style={{ fontSize: '21px', fontWeight: 800, margin: '0 0 10px' }}>Numbers we did not find</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '20px' }}>
          Indeed publishes no kilobyte minimum for a profile photo, no recommended file weight for either logo or headshot, and no size figure for resume files in the help pages we checked. Where this page suggests 100–200 KB, that is our recommendation for using a size-targeted compressor — not an Indeed rule. Read the requirement on your own upload screen and set that as the target.
        </p>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '26px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, marginBottom: '16px' }}>Indeed upload questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faq.map(([q, a], i) => (
              <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(94,234,212,0.22)', borderRadius: '10px', padding: '14px 18px' }}>
                <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#5eead4' }}>{q}</summary>
                <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>Adjacent pages</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '14px', marginBottom: '22px' }}>
          {[
            { href: '/compress-for-greenhouse', label: 'Greenhouse image specs' },
            { href: '/compress-for-workday', label: 'Workday image sizes' },
            { href: '/compress-for-linkedin', label: 'Compress for LinkedIn' },
            { href: '/compress-for-resume-photo', label: 'Compress a resume photo' },
            { href: '/compress-for-upwork', label: 'Compress for Upwork' },
            { href: '/compress-to-200kb', label: 'Compress to 200 KB' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ background: 'rgba(255,255,255,0.07)', padding: '7px 13px', borderRadius: '8px', color: 'white', textDecoration: 'none' }}>{l.label}</Link>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.68, lineHeight: 1.7 }}>
          This page is independent of Indeed — no affiliation, no endorsement, and no connection to your Indeed account. All encoding happens locally, so the only thing that changes is how heavy the file is when you upload it yourself.
        </p>
      </article>
    </div>
  );
}
