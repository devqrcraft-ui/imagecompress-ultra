import type { Metadata } from 'next';
import Link from 'next/link';
import CompressorTool from '@/app/compressor-tool';

const faq: [string, string][] = [
  ['If Classroom never rejects a big file, why shrink it at all?', 'Because the bill arrives somewhere other than the upload button. Every attachment is a Drive file, Education editions share one pooled storage allowance across the whole institution, and a 6 MB scan of a single worksheet opens slowly on a Chromebook or a phone in a room with congested Wi-Fi. Compression buys you load speed and storage headroom, neither of which a 5 TB per-file ceiling ever mentions.'],
  ['Should I attach WebP or AVIF images to a Classroom assignment?', 'We would not. Google\'s own list of file types it documents for Drive names .JPEG, .PNG, .GIF, .BMP, .TIFF and .SVG, and modern formats are not on it. This tool can write WebP and AVIF, and they are worth using on a website you control — but for a file a student or parent may open on a school Chromebook or an unknown device, encode JPEG, or PNG when the image is line art.'],
  ['Can this tool crop my banner into the shape Classroom\'s header uses?', 'No. It changes file size and format only. It cannot crop, force an aspect ratio, straighten a scanned page or drop a background. Cut the banner to your target shape in an image editor first, then bring the finished file here to make it lighter.'],
  ['What happens to a handout that is already under my number?', 'It comes back unchanged. Before the search starts, the tool compares the file against your target; if it already fits, no re-encode happens, so you cannot accidentally degrade a file that was small enough to begin with.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export const metadata: Metadata = {
  title: 'Google Classroom Image Limits: What Google Publishes',
  description: 'Worksheet scans, post images and class banners: what Google actually documents about Classroom images, and how to shrink them in your browser.',
  keywords: ['google classroom image size', 'compress worksheet photo', 'google classroom banner image', 'classroom attachment file size'],
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-google-classroom' },
  openGraph: {
    title: 'Google Classroom Image Limits: What Google Actually Publishes',
    description: 'The documented Drive and Classroom numbers, the ones Google leaves blank, and a browser-only way to get under them.',
    url: 'https://www.compressto20kb.com/compress-for-google-classroom',
  },
};

const src = { fontSize: '13px', opacity: 0.55, marginTop: '8px', lineHeight: 1.6 } as const;

export default function CompressForGoogleClassroomPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Google Classroom image sizes","item":"https://www.compressto20kb.com/compress-for-google-classroom"}]}' }} />

      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 18px 40px' }}>
        <p style={{ fontSize: '14px', opacity: 0.5, marginBottom: '14px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> → Google Classroom
        </p>
        <h1 style={{ fontSize: 'clamp(26px,4.5vw,38px)', fontWeight: 900, lineHeight: 1.2, margin: '0 0 18px' }}>
          Google Classroom Image Limits:<br />
          <span style={{ color: '#818cf8' }}>What Google Documents and What It Leaves Blank</span>
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          Classroom is the odd one out among the upload screens teachers deal with: it almost never refuses an image for being too large. The cost of a heavy file lands somewhere else — in your school&rsquo;s pooled Drive storage, in a class stream that crawls on a Chromebook, and in a worksheet photo a parent is waiting ten seconds to see on a phone.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.85, marginBottom: '32px' }}>
          This page separates the numbers Google actually publishes from the ones it does not, then walks through shrinking a stack of handouts on this site&rsquo;s tool. Nothing you drop here is uploaded: the file is decoded and re-encoded in your own browser, with no account, no watermark and no queue.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 14px' }}>Where your images actually live</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          Classroom does not keep its own private pile of pictures. Anything you attach is a Google Drive file referenced by a post, and each class gets Drive folders behind it. That distinction matters because it moves every question about size away from Classroom and onto Drive, where Google does publish limits. In practice the images you handle are:
        </p>
        <ul style={{ margin: '0 0 24px', paddingLeft: '22px', lineHeight: 1.9, fontSize: '15px', opacity: 0.85 }}>
          <li><strong>Stream and announcement images</strong> — the photo of a field-trip permission slip, the scanned letter home.</li>
          <li><strong>Classwork attachments</strong> — photos, exported slides and worksheet scans added to an assignment or practice set.</li>
          <li><strong>Student submissions</strong> — pictures of finished work added under <em>Your work</em> &rarr; Add or create, which land in Drive the same way.</li>
          <li><strong>The class banner / theme photo</strong> — the header behind the class name, uploaded from your own device.</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 14px' }}>The four numbers Google does publish</h2>
        <dl style={{ margin: '0 0 8px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', overflow: 'hidden' }}>
          {[
            { t: 'Ten attachments per assignment', d: 'An assignment can carry "up to ten attachments, though only eight of any single type" — a count limit, not a byte limit.', s: 'https://developers.google.com/workspace/classroom/add-ons/get-started/attachments-journey', sl: 'Google for Developers — Classroom add-on attachments' },
            { t: '5 TB per Drive file', d: 'Google\'s admin documentation of Workspace storage and upload limits: "You can upload and synchronize files up to 5 TB in size." No worksheet photo is anywhere near this.', s: 'https://knowledge.workspace.google.com/admin/drive/storage-and-upload-limits-for-google-workspace', sl: 'Google Workspace Admin Help — Storage and upload limits' },
            { t: '100 TB pooled for Education', d: 'Education subscriptions get "a baseline of 100 TB of pooled storage shared across all users" — the number that a personal habit of attaching 8 MB scans actually eats into.', s: 'https://knowledge.workspace.google.com/admin/getting-started/editions/overview-of-google-workspace-for-education-storage', sl: 'Google Workspace Admin Help — Education storage overview' },
            { t: 'File types named for Drive', d: 'Google\'s supported-file-types page lists image files as ".JPEG, .PNG, .GIF, .BMP, .TIFF, .SVG". WebP and AVIF are not named there, which is the argument for JPEG and PNG on school accounts.', s: 'https://support.google.com/drive/answer/37603', sl: 'Google Drive Help — Files you can store in Google Drive' },
          ].map((r, i) => (
            <div key={r.t} style={{ padding: '16px 18px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', background: i % 2 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)' }}>
              <dt style={{ fontWeight: 800, fontSize: '15px', marginBottom: '5px' }}>{r.t}</dt>
              <dd style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, opacity: 0.82 }}>{r.d}</dd>
              <dd style={{ margin: 0 }}>
                <p style={src}>Source: <a href={r.s} target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>{r.sl}</a>, checked October 2026.</p>
              </dd>
            </div>
          ))}
        </dl>

        <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '14px', padding: '18px 20px', margin: '24px 0 28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 10px' }}>What Google leaves blank</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.88, margin: 0 }}>
            There is <strong>no kilobyte limit published for a Classroom image</strong> — not for attachments, not for the banner, not for a photo in a post. There is also no official pixel specification for the class header image in Google&rsquo;s documentation; the 1600 &times; 400 figure that circulates widely comes from Community forum answers, not from a help article, so we treat it as folklore rather than a spec. If a district admin console sets its own upload or quota rules, those override the generic numbers above — check with your own administrator.
          </p>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 14px' }}>Then why compress anything?</h2>
        <ul style={{ margin: '0 0 26px', paddingLeft: '22px', lineHeight: 1.9, fontSize: '15px', opacity: 0.85 }}>
          <li><strong>Shared storage is the real budget.</strong> A pooled 100 TB is enormous until you divide it across every account in a district. Scans straight from a phone camera run 3–8 MB; the same page reads fine at a fraction of that.</li>
          <li><strong>Copies multiply.</strong> When a Slides deck or document is attached with a per-student copy, the payload is duplicated for the roster. Light source images scale with class size; heavy ones scale badly.</li>
          <li><strong>Chromebooks and school Wi-Fi are the weakest link.</strong> A stream that has to fetch nine multi-megabyte images renders slowly on a modest laptop on a shared network, and thirty students opening the same assignment at once is a burst of traffic, not one.</li>
          <li><strong>Phones are how parents read announcements.</strong> A handout photographed on a kitchen table needs maybe 1000 px of width to stay legible on a 6-inch screen, not the 4000 px the camera produced.</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px' }}>Sizes we recommend (ours, not Google&rsquo;s)</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8, marginBottom: '14px' }}>
          Because Google publishes nothing to match against, these are our working numbers for this tool, chosen for legibility on a phone and quick loading — not platform rules:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { h: 'Worksheet / handwritten page', b: '1000–1200 px wide', c: 'JPEG, target 150–300 KB' },
            { h: 'Diagram or labelled map', b: 'Keep text sharp', c: 'PNG, target 150–250 KB' },
            { h: 'Class banner photo', b: 'Crop the shape first', c: 'JPEG, target 150–250 KB' },
            { h: 'Slide exported as an image', b: '1280 px wide is plenty', c: 'JPEG, target 200 KB' },
          ].map(c => (
            <div key={c.h} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '6px' }}>{c.h}</div>
              <div style={{ fontSize: '14px', opacity: 0.7, lineHeight: 1.6 }}>{c.b}<br />{c.c}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.55, lineHeight: 1.7, marginBottom: '28px' }}>
          The tool caps the longest side at 4096 px while it works, so a very large master gets downscaled as well as re-encoded — but it will not resize to a dimension you name. Target-KB mode searches encoding quality and stops when the interval narrows, so the result comes back <strong>at or under</strong> the number you typed rather than a promised byte count.
        </p>

        <div style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.3)', borderRadius: '14px', padding: '18px 20px', marginBottom: '34px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px' }}>The banner is a cropping problem, not a compression problem</h3>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.85, margin: 0 }}>
            Classroom&rsquo;s header shows a wide, short strip and overlays the class name on top of it, so a portrait photo gets chopped whatever you do to the file size. Cut it to the shape you want in an editor — Photos, Snapseed, PowerPoint, anything — then bring the cropped banner here to reduce the bytes. This page can make that banner lighter; it cannot make it the right shape, and it will not remove the background behind a subject.
          </p>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 10px' }}>Compress a term&rsquo;s worth of handouts</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.82, marginBottom: '18px' }}>
          The tool below starts in Target KB Mode at 200 KB, which is a reasonable first pass for a photographed page. Processing happens on your device; there is no server copy of a child&rsquo;s worksheet to retain.
        </p>
        <CompressorTool initialTargetKB={200} />

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '34px 0 14px' }}>Control by control, for this job</h2>
        <ol style={{ margin: '0 0 30px', paddingLeft: '22px', lineHeight: 2, fontSize: '15px', opacity: 0.86 }}>
          <li><strong>Preset bar</strong> — Shopify, Etsy, Amazon, Instagram, Gov 20KB and 50KB. There is no Classroom preset, so ignore this row and set the number yourself.</li>
          <li><strong>Simple / Advanced toggle</strong> — Simple switches to Target KB Mode; Advanced gives you a plain quality slider when you would rather fix quality and let the bytes fall where they fall.</li>
          <li><strong>Format buttons</strong> — WebP, AVIF, JPEG, PNG. For files that leave your browser and go into Drive, pick JPEG (or PNG for line art).</li>
          <li><strong>Target field</strong> — quick chips at 20, 50, 100 and 200 KB, plus a custom box from 5 to 5000 KB. Put in the number your own upload screen or district guidance asks for.</li>
          <li><strong>Drop zone</strong> — up to 50 images at once, accepting JPG, PNG, WebP, AVIF and HEIC/HEIF. Scans from an iPhone arrive as HEIC and are converted on the way in.</li>
          <li><strong>Compress All, then the compare view</strong> — the before/after slider lets you confirm a page of small print is still readable before you commit the batch; finished files download individually or as one ZIP.</li>
        </ol>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '26px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Questions teachers ask</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faq.map(([q, a], i) => (
              <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.25)', borderRadius: '10px', padding: '14px 18px' }}>
                <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#a5b4fc' }}>{q}</summary>
                <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>Next reads</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '14px', marginBottom: '26px' }}>
          {[
            { href: '/bulk-image-compressor', label: 'Batch compress a full term of handouts' },
            { href: '/compress-for-email', label: 'Compress images for email' },
            { href: '/compress-for-canva', label: 'Compress images for Canva' },
            { href: '/compress-to-1mb', label: 'Compress to 1 MB' },
            { href: '/image-size-checker-online', label: 'Check an image’s size first' },
            { href: '/compress-without-uploading', label: 'Compress without uploading' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ background: 'rgba(255,255,255,0.07)', padding: '7px 13px', borderRadius: '8px', color: 'white', textDecoration: 'none' }}>{l.label}</Link>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.5, lineHeight: 1.7 }}>
          This is an independent page by CompressTo20KB. Google Classroom is a Google service; we are not affiliated with, endorsed by or integrated with Google, and this tool works by preparing files on your device before you upload them yourself.
        </p>
      </article>
    </div>
  );
}
