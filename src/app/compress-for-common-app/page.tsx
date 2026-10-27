const faq: [string, string][] = [
  ['Does the Common Application collect a photo of the applicant?', 'We found no such field on commonapp.org when we checked in October 2026: its applicant guide and help pages cover the profile, education, activities, essay and college sections, and the help centre for the transfer application organises materials as personal information, academic history, program materials and supporting information. None of them states a portrait size or format, so treat any site quoting a Common App photo spec as unverified.'],
  ['What file size do Common App arts and media portfolios allow?', 'Portfolio submissions run on SlideRoom, whose applicant help centre states that images must be under 5 MB and accepted formats are .jpg, .jpeg, .png, .gif, .tif, .tiff, .bmp and .tga. Checked October 2026; confirm on the instructions of the programme you are submitting to.'],
  ['SlideRoom downscales my artwork - does that make compression pointless?', 'It changes the picture, not the ceiling. The help centre states images larger than 1280 x 1280 x 72 ppi get resized, so a huge master buys you nothing, while a file above 5 MB is simply refused. Reducing the weight here is what keeps a heavy scan attachable at all.'],
  ['Can this tool prepare my artwork file to those rules?', 'Partly. It re-encodes on your device and can write JPEG, PNG, WebP or AVIF, cap the longest side at 4096 px and land a file at or under the number you type. It cannot crop to a ratio, straighten a scan, remove a background, export TIFF or keep the exact pixel dimensions you asked for.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Common App Photos and Portfolio File Limits',
  description: 'No portrait upload exists in the Common App; SlideRoom portfolios take images under 5 MB in jpg/png. Verified rules and where compression helps.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-common-app' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-common-app' },
  keywords: 'Common App photo upload, SlideRoom portfolio image size, college application image limit',
};

const whereImagesLive = [
  ['The application itself', 'Profile, education, testing, activities, the essay and the college-specific questions. Text and dropdowns, plus uploads that are documents - transcripts and recommendation material.'],
  ['School documents', 'Transcripts and certification forms arrive as scanned pages, and a high-resolution scan of one page can outrun the ceiling printed beside an upload field. That is a weight problem, not a framing problem.'],
  ['Media and arts portfolios', 'Handled outside the main form, frequently on SlideRoom, where image files are judged against a stated 5 MB rule.'],
  ['A college supplement', 'Individual campuses sometimes request a portrait or a creative sample. Any limit there belongs to that campus, not to the Common App.'],
];

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#12101f,#2c2450,#1b1830)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Common App Photo and Portfolio Files","item":"https://www.compressto20kb.com/compress-for-common-app"}]}' }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '44px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(25px,4vw,40px)', fontWeight: 900, lineHeight: 1.22, marginBottom: '16px' }}>
          There is no applicant photo in the Common App - but there are image files that need shrinking
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.8, marginBottom: '24px' }}>
          We searched commonapp.org in October 2026 for a portrait specification, including the first-year application guide and the help centre, and found none: nothing on those pages prints a photo size, a KB ceiling or a format list for a student picture. What an applicant does send as an image is a scanned school document or a SlideRoom portfolio piece, and only the second has a published limit.
        </p>
        <p style={{ fontSize: '14px', opacity: 0.6, marginBottom: '32px', borderLeft: '3px solid #a78bfa', paddingLeft: '14px' }}>
          Because the Common App itself publishes nothing, this page refuses to repeat the invented &ldquo;Common App photo size&rdquo; figures other sites rank on. Below is what can be sourced, and what to do instead.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Where images actually appear in a Common App year</h2>
        <div style={{ display: 'grid', gap: '14px', marginBottom: '34px' }}>
          {whereImagesLive.map(([t, d], i) => (
            <div key={t} style={{ display: 'grid', gridTemplateColumns: '46px 1fr', gap: '14px', background: 'rgba(255,255,255,0.035)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(167,139,250,0.18)', color: '#c4b5fd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '15px' }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '5px' }}>{t}</div>
                <div style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.78 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>The one real number: portfolio images under 5 MB</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          Media and arts portfolios for member colleges are commonly collected through SlideRoom, another Liaison Education platform whose applicant help centre sits beside the Common App help centre. It states the only image rules we can actually quote (checked October 2026), and your programme tells you whether it uses it:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '12px', marginBottom: '18px' }}>
          {[
            ['Under 5 MB', 'the stated ceiling for an image file'],
            ['1280 x 1280 x 72 ppi', 'above this, SlideRoom resizes the upload itself'],
            ['8 formats', 'jpg, jpeg, png, gif, tif, tiff, bmp, tga'],
          ].map(([v, d]) => (
            <div key={v} style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '16px', color: '#c4b5fd', marginBottom: '6px' }}>{v}</div>
              <div style={{ fontSize: '13px', lineHeight: 1.6, opacity: 0.7 }}>{d}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.6, marginBottom: '30px' }}>
          Source: the SlideRoom Applicant Help Centre at help.liaisonedu.com, which is also where the Common App help centre links for materials. Programmes can add their own instructions, and a departmental supplement outranks a general platform page.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '32px' }}>
          Read those two numbers together, because they cut in opposite directions from most advice. Shooting a 24 megapixel master gains you nothing: the platform resizes above 1280 x 1280 anyway. But a flatbed scan of a painting at full resolution can pass 5 MB, which is over the stated rule before any resizing is applied. Our target field tops out at 5000 KB, so a 4900 KB target sits safely under the 5 MB wall without leaning on the edge of it.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Matching the file to the job</h2>
        <ul style={{ fontSize: '15px', lineHeight: 1.9, opacity: 0.8, paddingLeft: '22px', marginBottom: '30px' }}>
          <li><strong>Portfolio image:</strong> export JPEG or PNG, set Target KB Mode to 4900, and accept that the platform resizes afterwards. Nothing here writes TIFF, so a scanner that only outputs TIFF needs a format step first.</li>
          <li><strong>Scanned transcript or school form:</strong> those uploads are usually document portals with their own ceiling printed on the field. Take that figure and type it in; see also <Link href="/convert-image-to-pdf" style={{ color: '#c4b5fd' }}>image to PDF</Link> when the portal wants one file.</li>
          <li><strong>A headshot a campus supplement requests:</strong> crop and light it yourself, then compress the crop. This page only reduces weight.</li>
          <li><strong>Anything with a face and a deadline:</strong> compression is local, so the file never leaves the laptop - no upload, no account, no watermark, no queue.</li>
        </ul>

        <div style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: '14px', padding: '22px', marginBottom: '36px' }}>
          <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '8px' }}>Open the compressor with a portfolio-safe target</div>
          <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.72, marginBottom: '14px' }}>Target KB Mode returns the highest quality that still fits at or under the number you set, and leaves a file that is already smaller untouched. The tool is on the home page, not on this page.</p>
          <a href={"/?mode=exactkb&target=4900"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7c3aed,#a78bfa)', color: 'white', padding: '11px 24px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>Portfolio target, 4900 KB</a>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Honest limits, before you trust this with an application</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '34px' }}>
          While re-encoding, the longest side is capped at 4096 px, which is the only resizing it performs. It does not crop to a ratio, match a pixel dimension, flatten a background or recover a blurred picture, and lossy output discards data by design. For an admissions file that means the framing and the lighting are your job; the byte count is ours. If you want the weight of a file confirmed before you attach it, the <Link href="/image-size-checker-online" style={{ color: '#c4b5fd' }}>size checker</Link> runs the same way, in the browser.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Short answers on applicant images</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(167,139,250,0.25)', borderRadius: '10px', padding: '14px 20px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#c4b5fd' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, opacity: 0.72 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

    </div>
  );
}
