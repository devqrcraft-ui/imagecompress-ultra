import type { Metadata } from 'next';
import ImageSizeCheckerTool from './component';
import AuthorBox from '@/app/components/AuthorBox';

const faq: [string, string][] = [
  ['How do I check the pixel dimensions and file size of an image?', 'Drop the file into the checker on this page. It reads the image in your browser and reports width and height in pixels, the size in kilobytes, and the format. Nothing is uploaded, so you can check a passport scan or an ID photo here without it leaving your device.'],
  ['Why does the size say KB but the dimensions say px?', 'They measure different things. Pixels describe how much detail the image holds; kilobytes describe how much room the encoded file takes. Two photos at exactly 3000×2000 px can be 180KB or 4MB depending on format, detail and encoding quality, which is why a form asks for one and an editor talks about the other.'],
  ['Does this checker compress or resize the image?', 'No. This page only inspects a file. To bring a file under a kilobyte ceiling, use the compressor, which re-encodes on your device and returns the highest quality that still fits under the number you type.'],
  ['The file size looks wrong compared with my file manager — why?', 'The checker shows decimal-independent KB (bytes divided by 1024) rounded to one decimal, so a 24,576-byte file reads as 24.0 KB. Operating systems sometimes show kilobytes, sometimes kibibytes, and sometimes round to whole numbers, so small differences are normal.'],
  ['What image dimensions should I aim for?', 'It depends entirely on the destination, and the destination’s own instructions beat any table on a website. The one figure we can cite from an official page is the US State Department rule for visa and passport uploads: a square JPEG, 600×600 to 1200×1200 pixels, equal to or less than 240 KB (travel.state.gov, checked October 2026, linked under the table below). Everywhere else, check the page you are uploading to first and treat the numbers below as starting points, not limits.'],
  ['Can I check several images at once?', 'Yes. Drop or select as many as you like — the list shows every file you add, and because the work happens in your browser there is no queue or daily quota.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export const metadata: Metadata = {
  title: 'Image Size Checker — See Pixels, KB and Format Instantly',
  description: 'Check an image’s width, height, file size in KB and format in your browser. No upload, no account, nothing leaves your device.',
  alternates: { canonical: 'https://www.compressto20kb.com/image-size-checker-online' },
  openGraph: { url: 'https://www.compressto20kb.com/image-size-checker-online' },
};

const startingPoints = [
  ['Full-width photo on a website', 'As wide as your content column, usually 1200–1920 px', 'Pick the largest target your host or theme tolerates, then judge the preview'],
  ['Thumbnail or gallery tile', 'Around the size it is actually displayed', 'Small display size means you can afford a tight kilobyte target'],
  ['Photo inside a document or slide', 'No fixed figure — the file is what gets capped', 'Compress to the ceiling the portal or email server states'],
  ['US visa or passport upload', '600×600 to 1200×1200 px, square', 'JPEG, 240 KB or less — see the linked State Department page below'],
];

export default function ImageSizeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Image Size Checker","item":"https://www.compressto20kb.com/image-size-checker-online"}]}' }} />
      <ImageSizeCheckerTool />
      <div style={{ background: 'linear-gradient(135deg,#0f172a,#1e1b4b)', color: '#c8d0e7', fontFamily: 'system-ui,sans-serif', padding: '0 20px 56px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#818cf8', marginBottom: 12 }}>Pixels and kilobytes are two different questions</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.85, marginBottom: 12 }}>
            This checker answers the first one. It opens the file in your browser, decodes it and tells you what the image actually is: width, height, byte size and format. That is often enough to explain a rejected upload — a portal that says “image too large” may mean the pixel dimensions, the file size, or both, and you cannot fix what you have not measured.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.85, marginBottom: 24 }}>
            The kilobyte number is the one a form usually cares about, and it is the number this site’s compressor works in. It does not change dimensions: it re-encodes the file at the highest quality that still fits under the ceiling you type, so the output comes back at or under that figure. If the checker shows the wrong pixel dimensions for what you need, resize and crop in an image editor first, then compress here.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#818cf8', marginBottom: 14 }}>Starting points, not rules</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'rgba(129,140,248,0.1)' }}>
                <th style={{ padding: '8px 12px', textAlign: 'left', color: '#818cf8' }}>What you are making</th>
                <th style={{ padding: '8px 12px', textAlign: 'left', color: '#818cf8' }}>Dimensions</th>
                <th style={{ padding: '8px 12px', textAlign: 'left', color: '#818cf8' }}>File size</th>
              </tr>
            </thead>
            <tbody>
              {startingPoints.map(([use, dims, size], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '9px 12px', color: 'rgba(255,255,255,0.85)' }}>{use}</td>
                  <td style={{ padding: '9px 12px', color: '#c8d0e7' }}>{dims}</td>
                  <td style={{ padding: '9px 12px', color: 'rgba(255,255,255,0.7)' }}>{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.6, marginTop: 12 }}>
            Everything in the first three rows is our recommendation, not a published limit. Most platforms change their upload rules without announcing it, so read the instructions on the page you are uploading to and treat that as the authority.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.6, marginTop: 8 }}>
            The last row is the only one taken from an official page: <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/digital-image-requirements.html" target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#818cf8' }}>travel.state.gov — Digital Image Requirements</a> (square JPEG, 600×600 to 1200×1200 px, 240 KB or less — checked October 2026). The State Department revises it, so re-read it there before you rely on the numbers.
          </p>

          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '36px 0 16px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ display: 'block', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '14px 16px', marginBottom: 10 }}>
              <summary style={{ fontWeight: 700, fontSize: 15, color: '#818cf8', cursor: 'pointer' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.72)' }}>{a}</p>
            </details>
          ))}

          <div style={{ marginTop: 32, padding: '20px', background: 'rgba(129,140,248,0.06)', borderRadius: 8, border: '1px solid rgba(129,140,248,0.2)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#818cf8', marginBottom: 12 }}>If the file is the problem, next step</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="/compress-to-200kb" style={{ color: '#c8d0e7', fontSize: 14, textDecoration: 'none' }}>→ Compress an image to 200KB</a>
              <a href="/compress-to-100kb" style={{ color: '#c8d0e7', fontSize: 14, textDecoration: 'none' }}>→ Compress an image to 100KB</a>
              <a href="/blog/compress-image-without-losing-quality" style={{ color: '#c8d0e7', fontSize: 14, textDecoration: 'none' }}>→ How compression actually trades quality for size</a>
            </div>
          </div>
          <AuthorBox />
        </div>
      </div>
    </>
  );
}
