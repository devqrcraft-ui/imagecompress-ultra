const faq: [string, string][] = [
  ['Is there an official file size for a photo inside a CV?', 'No standards body sets one, so any page quoting a rule is making it up. The working figure is whichever one keeps your finished document inside the attachment limit of the mail system you send it through, which is why 100 KB is a comfortable default and 200 KB the most we would spend on a single image.'],
  ['My resume PDF is still heavy after shrinking the headshot. Why?', 'Because the export step decides. A word processor or slide tool can re-embed your picture at a larger size or a looser compression than you set, so compare the exported file weight against the image weight, and change the export quality setting rather than compressing the source a second time.'],
  ['What crop and background should a recruiting headshot use?', 'Collar to crown with a little shoulder, camera at eye level, a plain wall behind you, and no filter. Get that in your camera or editor: this compressor will not crop to a ratio, swap the background, sharpen a soft focus, or resize to a given pixel box.'],
  ['Does heavy compression ruin a headshot printed from a CV?', 'On screen it is invisible at 100 KB for a face the size of a stamp; print is a different job. Re-encoding discards detail, so if the same photo also has to be printed at wallet size, compress a copy and keep the original untouched.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume Photo Size: Keeping a CV Headshot Light',
  description: 'No platform sets a CV photo size. Practical budgets for a headshot inside a resume, why the PDF stays heavy, and what this tool will not fix.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-resume-photo' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-resume-photo' },
  keywords: 'resume photo size, CV headshot file size, reduce resume PDF size',
};

const budgets: [string, string, string][] = [
  ['50 KB', 'A small circular avatar in a header, shown at maybe 150 px wide on screen. The file never needs to be bigger than the space it occupies.', 'Tight'],
  ['100 KB', 'The default we would use: a portrait in the corner of a one- or two-page CV, viewed on a laptop and never enlarged.', 'Recommended'],
  ['200 KB', 'The ceiling. Past this the image costs more download than it adds information, and recruiters open CVs on phones over mobile data.', 'Maximum'],
  ['4900 KB', 'Only relevant when the ATS or mail server caps the whole document and a large scan of a signed form travels with it.', 'Exception'],
];

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#101816,#1d2f2a,#121a18)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Resume Photo Size","item":"https://www.compressto20kb.com/compress-for-resume-photo"}]}' }} />
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '44px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(25px,4vw,40px)', fontWeight: 900, lineHeight: 1.22, marginBottom: '16px' }}>
          A CV photo is paid for out of the document&#39;s budget
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.8, marginBottom: '24px' }}>
          This is not an upload portal problem. Nobody at the other end checks your JPEG against a spec; a recruiter downloads a file, and every kilobyte your headshot takes is a kilobyte the CV did not need. Whether a CV carries a photograph at all is a question about the hiring market you are in, and the employer&#39;s convention outranks anything on this page.
        </p>
        <p style={{ fontSize: '14px', opacity: 0.62, marginBottom: '30px', borderLeft: '3px solid #4ade80', paddingLeft: '14px' }}>
          The figures below are our own working budgets for this tool, not requirements published by a job site, a resume builder or an applicant tracking system. No official source states a file size for a photo inside a CV, and we are not going to invent one to look authoritative.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Four budgets, and what each one is for</h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '34px' }}>
          {budgets.map(([size, use, tag]) => (
            <div key={size} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                <span style={{ fontSize: '20px', fontWeight: 900, color: '#4ade80' }}>{size}</span>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', padding: '3px 10px', borderRadius: '100px', background: 'rgba(74,222,128,0.12)', color: '#86efac' }}>{tag}</span>
              </div>
              <div style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.78 }}>{use}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>The three sizes people confuse</h2>
        <ol style={{ fontSize: '15px', lineHeight: 1.9, opacity: 0.8, paddingLeft: '22px', marginBottom: '32px' }}>
          <li><strong>Display size.</strong> The box on the page, measured in points or pixels on screen. A portrait printed 30 mm wide on a CV is shown at roughly 115 px, so an image wider than a few hundred pixels is already wasted work.</li>
          <li><strong>File weight.</strong> The number you type into Target KB Mode, and the only one this tool changes.</li>
          <li><strong>Document weight.</strong> What the exported PDF or DOCX ends up at, which is what an applicant tracking system and a tired recruiter actually feel. This tool does not control it; your editor&#39;s export settings do.</li>
        </ol>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '32px' }}>
          That third one is where most advice goes wrong. If a headshot comes out of your editor heavier than the file you fed it, the editor re-encoded on export - look for a picture quality or image compression option there, set it to the lower fidelity, and re-export instead of running the source image through a compressor twice. Compression is destructive: each pass discards detail, so always compress from the original and keep the original.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Preparing the shot, which this tool will not do</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          A face in the corner of a CV has to look deliberate: collar to crown with a little shoulder, camera at eye level rather than below, plain wall, daylight from the front, no filter, no crop tool from a social app. What we cannot do here: crop to a portrait ratio, resize to a specific pixel box, replace or flatten a background, fix motion blur, or hit an exact byte count.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '32px' }}>
          Format is the other decision worth making deliberately. This tool writes WebP, AVIF, JPEG and PNG; choose <strong>JPEG</strong> for a photo that goes inside a document, because it is the one every word processor, PDF exporter and ATS importer handles predictably. PNG is a poor fit for a face - the same headshot usually ends up several times heavier.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Run it: five clicks</h2>
        <ol style={{ fontSize: '15px', lineHeight: 1.95, opacity: 0.82, paddingLeft: '22px', marginBottom: '26px' }}>
          <li>Open the compressor with the budget already typed in: <a href={"/?mode=exactkb&target=100"} style={{ color: '#86efac' }}>Target KB Mode at 100 KB</a>. The tool lives on the home page, not on this page.</li>
          <li>Pick JPEG as the output format.</li>
          <li>Drop the headshot into the box labelled &ldquo;Drop images here or click to upload&rdquo;. Nothing is uploaded: the image is decoded and re-encoded on your own device, with no account, watermark or queue, which is the part that matters for a photo of your face.</li>
          <li>Start it. Target KB Mode searches the encoding quality downward and stops at the best setting that lands at or under 100 KB - so the result is a file at or below the number, never one trimmed to the byte.</li>
          <li>Check the weight, then place the file in the document. If the original was already lighter than 100 KB it comes back unchanged, which is the correct answer and not a bug.</li>
        </ol>
        <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '34px' }}>
          A batch of up to 50 files is useful for a headshot shot in a series, and the target field accepts 5 to 5000 KB. Confirm the winner with the <Link href="/image-size-checker-online" style={{ color: '#86efac' }}>image size checker</Link>; if you want the face to keep more detail at the same weight, the <Link href="/bulk-image-compressor" style={{ color: '#86efac' }}>bulk compressor</Link> runs the same search over several candidates side by side.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Four questions about the CV picture</h2>
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
