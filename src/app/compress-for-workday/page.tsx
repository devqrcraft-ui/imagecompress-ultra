import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

const faq: [string, string][] = [
  ['What is Workday’s photo size limit for job applications?', 'There is no single published number, and that is the honest answer. Workday the platform documents outer ceilings — a maximum image size of 10,240 KB (10 MB) and a maximum attachment size of 30,720 KB (30 MB) that no tenant can change — but the photo requirement on a careers portal is configured by the employer running that specific Workday instance. The limit that applies to you is the one printed on the upload field of your application, in the job posting’s instructions, or in an email from the recruiter.'],
  ['The upload failed even though my file was small. Why?', 'Employer-configured fields usually enforce more than total size: accepted file types (typically JPG/JPEG, sometimes PNG and PDF), and increasingly an image-dimension check. A 3 MB screenshot pasted into a photo field can fail while a 90 KB JPEG passes. Reduce the pixel dimensions first, export JPEG, then compress the file here.'],
  ['Does every employer on Workday ask candidates for a photo?', 'No — many US-facing postings deliberately have no photo field at all. Treat a photo as a required artifact only when the application asks for it, and when it does, check whether the posting states content rules too (plain background, professional headshot, square crop).'],
  ['What does Workday recommend for the profile picture after you are hired?', 'Workday’s own worker-photo documentation states the maximum image size is 10 MB and recommends square images, “because images typically display as circles” — a headshot that survives a circular crop. That guidance is for the internal employee profile picture, not a rule for candidates applying through a careers site.'],
  ['I cannot find any stated limit. What size should I aim for?', 'Without a stated requirement, a square JPEG around 600-800 pixels on a side, compressed to at or under about 100 KB, looks crisp in the small placements ATS portals and email signatures actually use and stays below every plausible configured limit. That is our recommendation, not an official Workday figure.'],
  ['Is it safe to process a headshot with this tool?', 'It is safe in the sense that the file never leaves your device: compression runs locally in your browser and no server copy is made. For a job-application photo that you would rather not route through a third-party backend before the recruiter sees it, that matters.'],
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
  title: 'Workday Job Application Photo — Find Your Size Limit',
  description: 'Workday publishes platform ceilings (10 MB images, 30 MB attachments) but candidate-photo limits are set by each employer’s tenant. No upload.',
  keywords: 'workday photo upload size limit, compress photo for job application, workday careers portal photo, resize headshot for application, workday attachment limit',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-workday' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-workday' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress for Workday","item":"https://www.compressto20kb.com/compress-for-workday"}]}' }} />

      <div style={{ background: '#0f0c29', color: '#e2e8f0', fontFamily: 'system-ui,sans-serif' }}>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 20px 20px' }}>
          <div style={{ fontSize: '15px', opacity: 0.68, marginBottom: '12px' }}>
            <a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</a> → Compress for Workday
          </div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Compress your photo for a Workday job application
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '10px', opacity: 0.9 }}>
            Workday is not one website with one photo rule — it is a platform that thousands of employers configure separately. So the file-size limit you are fighting is your employer’s, not Workday’s, and the first job is finding out which number applies to your application.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <CompressorTool initialTargetKB={100} />
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>What Workday does publish — the platform ceilings</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            Workday’s administration documentation states fixed outer limits that apply “anywhere in Workday where an attachment or image is created”: a maximum image size of <strong>10,240 KB (10 MB)</strong> and a maximum attachment size of <strong>30,720 KB (30 MB)</strong>, which tenants cannot change. Those are storage-engine ceilings — they explain the hard failure of a 12 MB camera export, but they are almost never the requirement you actually hit on a careers portal, because each employer configures their application fields far tighter.
          </p>
          <p style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.7 }}>
            Sources, checked October 2026:{' '}
            <a href="https://doc.workday.com/admin-guide/en-us/manage-workday/tenant-configuration/it-administrator-resources/limitations-and-availability/dan1370796659943.html" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>doc.workday.com — Reference: Document, File Size, and Printing Limits</a>
            {' · '}
            <a href="https://doc.workday.com/admin-guide/en-us/human-capital-management/worker-information/worker-photos/dan1370797427888.html" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#a5b4fc' }}>doc.workday.com — Concept: Worker Photo Recommendations</a>
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Where to find the limit that applies to your application</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.9, opacity: 0.85, fontSize: '15px' }}>
            <li><strong>The upload field itself.</strong> Open the application and look at the photograph or resume-photo step: configured fields show their accepted formats and maximum size in the helper text, and the inline error message after a failed attempt quotes the limit verbatim.</li>
            <li><strong>The job posting’s instructions.</strong> Some employers spell out “JPEG, under X KB, maximum Y pixels” in the requisition description instead of the field label.</li>
            <li><strong>Recruiter or HR contact.</strong> If neither place states a number, ask the recruiter who posted the requisition — they see the same configuration from the other side.</li>
            <li><strong>Do not assume another company’s limit.</strong> A friend’s “it worked at 2 MB” on a different employer’s Workday site tells you nothing about yours.</li>
          </ul>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>A headshot that survives any configured field</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '12px', opacity: 0.9 }}>
            Employer fields differ, but a headshot that is accepted almost everywhere shares the same shape: a square JPEG cropped from a recent photo, roughly 600–800 pixels on a side, with your face centred — the circular-crop advice Workday gives for internal profile pictures (square images, since they “typically display as circles”) applies just as well wherever an ATS renders your photo small. Then let the compressor handle bytes: it re-encodes the JPEG quality downward and returns the best file <strong>at or under</strong> your target — never above it — with 100 KB preset above as a sane no-stated-limit default. If the export from your camera is 4 MB, shrink the pixel dimensions first; squeezing megapixels into 100 KB by pure quality reduction is how photos turn blocky.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            And the part no tool can do: this page’s compressor cannot crop to a ratio, replace a bathroom background, sharpen motion blur, or strip EXIF for you — and it cannot know your employer’s rules. Many US postings ask no photo at all; add one only when the application actually requests it.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 28px' }}>
          <h2 style={{ fontSize: 'clamp(19px,3vw,26px)', fontWeight: 700, color: '#a5b4fc', marginBottom: '14px' }}>Why local-only processing matters at the application stage</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.9 }}>
            Between you and a hiring pipeline, your headshot is the one asset that travels with your name, phone number and CV. Some “resume photo” websites upload your image to their backend to process it; this one decodes and re-encodes entirely in your browser, keeps no server copy, and lets you verify that yourself — open DevTools’ Network tab, compress an image, and watch that no request carries the file. Nothing to delete later, and no account to accumulate.
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
              ['/compress-for-resume-photo', 'Resume photo'],
              ['/compress-for-indeed', 'Indeed application'],
              ['/compress-for-greenhouse', 'Greenhouse application'],
              ['/compress-for-upwork', 'Upwork profile'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/compress-to-50kb', 'Compress to 50KB'],
              ['/jpg-to-png', 'Convert JPG to PNG'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: '8px', background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.2)', color: '#a5b4fc', fontSize: '15px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>{label} →</a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
