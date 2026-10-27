import type { Metadata } from 'next';
import Link from 'next/link';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'X (Twitter) Image Limits: 2MB Photo, 5MB Post Media',
  description: 'X sets a separate ceiling per image slot: a 400x400 photo under 2 MB, a 1500x500 banner, post media under 5 MB. Fit yours locally, with no upload.',
  keywords: 'twitter image size limit, x profile photo 400x400, x header image 1500x500, compress image for twitter x, twitter post image 5mb',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-twitter' },
  openGraph: {
    title: 'X / Twitter Image Sizes And File Limits',
    description: 'Profile photo, banner and post media each have their own numbers. Fit the one that applies — no upload, no account.',
    url: 'https://www.compressto20kb.com/compress-for-twitter',
  },
};

const faq: [string, string][] = [
  ['What is the file-size limit for an image in an X post?', 'X’s own developer documentation for media upload lists static images as JPG, PNG, GIF or WEBP under 5 MB, with animated GIFs allowed up to 15 MB. That is the ceiling enforced when media is attached, not a size you should be aiming for in a scrolling timeline.'],
  ['How big should my X profile photo and banner be?', 'X’s help pages recommend 400 x 400 pixels for the profile photo and 1500 x 500 for the header, and when a profile photo upload misbehaves the help centre points to JPEG, GIF or PNG files under 2 MB. Those are the numbers on X’s own pages, checked October 2026.'],
  ['Is WebP or AVIF better for a post on X?', 'WebP is on X’s published accepted-format list for media; AVIF is not, so treat it as unsupported for an upload and let the tool write JPEG or PNG. Save AVIF for images you host yourself, where a rejected format is your choice rather than a failed post.'],
  ['My screenshot is 4 MB and mostly text — where does the weight go?', 'Usually into a very wide canvas and a lossy container fighting sharp edges. Text, hard colour boundaries and dithered backgrounds are the expensive parts of a JPEG. A flat graphic of that kind often ends up no larger, and sometimes smaller, as a PNG than as a strained JPEG.'],
  ['Does using this compressor send my image anywhere?', 'No. The tab decodes and re-encodes locally, so there is no upload step, no account, no watermark and no server copy of whatever is in the picture — including anything you would never want attached to a public profile.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

type Slot = { name: string; dims: string; formats: string; weight: string; source: string; note: string };

const slots: Slot[] = [
  {
    name: 'Profile photo',
    dims: '400 x 400 px recommended',
    formats: 'X’s troubleshooting page names JPEG, GIF or PNG',
    weight: 'under 2 MB',
    source: 'help.x.com — Help with uploading a profile photo',
    note: 'X displays this as a small circular avatar, so frame the face centrally: anything you put in the corners is likely to be lost in the mask.',
  },
  {
    name: 'Header / banner',
    dims: '1500 x 500 px recommended',
    formats: 'No container list on the help page read for this figure',
    weight: 'No weight figure published by X for the banner',
    source: 'help.x.com — How to customize your profile',
    note: 'X publishes dimensions here, not a ceiling in bytes, so anything below 2 MB is our advice rather than their rule.',
  },
  {
    name: 'Image attached to a post',
    dims: 'No pixel minimum listed for standard images',
    formats: 'JPG, PNG, GIF, WEBP',
    weight: 'under 5 MB (animated GIF 15 MB)',
    source: 'docs.x.com — media upload best practices',
    note: 'An in-stream card is not displayed at full size, so weight beyond what the preview needs mostly costs the few people who tap through to look.',
  },
];

export default function CompressForTwitterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Twitter","item":"https://www.compressto20kb.com/compress-for-twitter"}]}' }} />

      <div style={{ minHeight: '100vh', background: '#0b1119', color: '#dbe6f2', fontFamily: 'system-ui,sans-serif' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '36px 20px 10px' }}>
          <div style={{ fontSize: '14px', opacity: 0.68, marginBottom: '10px' }}>
            <Link href="/" style={{ color: '#78c4f5', textDecoration: 'none', fontWeight: 600 }}>Home</Link> → Compress for Twitter / X
          </div>
          <div style={{ display: 'inline-block', background: 'rgba(29,155,240,0.12)', border: '1px solid rgba(29,155,240,0.4)', borderRadius: '999px', padding: '5px 14px', fontSize: '13px', color: '#78c4f5', marginBottom: '16px' }}>
            Profile photo · banner · images attached to a post
          </div>
          <h1 style={{ fontSize: 'clamp(25px,4vw,35px)', fontWeight: 800, lineHeight: 1.22, margin: '0 0 14px', color: '#f4f9ff' }}>
            X Sets A Different Ceiling For Every Image Slot.<br />
            <span style={{ color: '#1d9bf0' }}>Find Yours Before You Compress Anything.</span>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 10px', color: 'rgba(219,230,242,0.82)' }}>
            “How big can a Twitter image be?” has at least three answers, because a profile photo, a banner and a picture attached to a post are three separate uploads with three separate rule sets. Compressing against the wrong one is how people end up with a rejected banner or a 4 MB post that loads as a grey box for everyone on mobile.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(219,230,242,0.82)' }}>
            Below, each figure is tied to the X page it came from. The encoder itself runs in this tab and never sees a server, which matters most for the one upload you would least like copied somewhere — a face on a profile picture.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '16px 20px 30px' }}>
          <CompressorTool initialTargetKB={500} />
        </div>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#78c4f5', marginBottom: '14px' }}>The Three Slots, Side By Side</h2>
          {slots.map((s) => (
            <div key={s.name} style={{ marginBottom: '12px', background: 'rgba(29,155,240,0.06)', border: '1px solid rgba(29,155,240,0.22)', borderRadius: '12px', padding: '16px 18px' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '17px', color: '#eaf5ff' }}>{s.name}</h3>
              <dl style={{ margin: '0 0 10px', fontSize: '15px', lineHeight: 1.85 }}>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <dt style={{ minWidth: '86px', fontWeight: 700, color: '#78c4f5' }}>Size</dt>
                  <dd style={{ margin: 0, opacity: 0.85 }}>{s.dims}</dd>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <dt style={{ minWidth: '86px', fontWeight: 700, color: '#78c4f5' }}>Formats</dt>
                  <dd style={{ margin: 0, opacity: 0.85 }}>{s.formats}</dd>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <dt style={{ minWidth: '86px', fontWeight: 700, color: '#78c4f5' }}>Weight</dt>
                  <dd style={{ margin: 0, opacity: 0.85 }}>{s.weight}</dd>
                </div>
              </dl>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.7, opacity: 0.66 }}>{s.note}</p>
              <p style={{ margin: '7px 0 0', fontSize: '13.5px', opacity: 0.68 }}>{s.source} · checked October 2026</p>
            </div>
          ))}
          <p style={{ fontSize: '14px', lineHeight: 1.75, opacity: 0.72, margin: '10px 0 0' }}>
            Where X publishes no figure, this page says so instead of borrowing a number from a third-party size guide.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#78c4f5', marginBottom: '12px' }}>If You Run Ads, That Spec Sheet Is Stricter</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,230,242,0.8)' }}>
            X’s creative ad specifications recommend PNG and JPEG, refuse BMP and TIFF outright, cap the file at 5 MB, and warn that a GIF you upload will render as a still image. The last one surprises people: an animation that worked in the feed can arrive in an ad slot as a single frame, and no amount of compression will bring the motion back. Organic posts are governed by the media-upload list; paid placements are governed by this page.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#78c4f5', marginBottom: '12px' }}>Five Megabytes Is The Door, Not The Room</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,230,242,0.8)', margin: '0 0 10px' }}>
            A 4.8 MB image sails through the upload check and then behaves badly in the feed: the card shown while scrolling is a cropped, sized-down version, and someone on a poor connection may move on before the file paints. Our recommendation, again clearly ours: land a single in-post image between roughly 200 and 500 KB, and cut an avatar down toward 100 KB.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,230,242,0.8)' }}>
            Threads with four or more images are where this pays back hardest, since the weight multiplies across everything someone scrolls through to reach the point you were making.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#78c4f5', marginBottom: '12px' }}>Which Mode To Reach For</h2>
          <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
            <div style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 18px' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: '#eaf5ff' }}>Quality Mode (10–100 % slider)</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>
                Right for a banner or an avatar, where nothing in X’s rules mentions bytes and you simply want the best-looking file that stays light. Drag down until the weight reads sensibly, then stop.
              </p>
            </div>
            <div style={{ background: 'rgba(29,155,240,0.07)', border: '1px solid rgba(29,155,240,0.28)', borderRadius: '12px', padding: '16px 18px' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: '#eaf5ff' }}>Target KB Mode (typed ceiling)</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>
                Right when you want a number you can defend — a post image kept under 500 KB, an attachment small enough to survive a slow connection. Pick the ceiling and the search does the iteration.
              </p>
            </div>
          </div>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,230,242,0.8)', margin: '14px 0 0' }}>
            Either way the workflow is short: choose the container button (JPEG for photography, PNG for flat graphics and screenshots of text, WebP if you are re-hosting the asset rather than posting it), drop files on the panel — the zone reads “Drop images here or click to upload”, and takes up to 50 at once — then hit <strong>⚡ Compress All</strong> and download each result or the ZIP. Quick Presets is for Shopify, Etsy, Amazon, Instagram, Gov 20KB and 50KB, so for X you type the number yourself.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#78c4f5', marginBottom: '12px' }}>Screenshots Of Text Deserve A Second Thought</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.95, fontSize: '15.5px', color: 'rgba(219,230,242,0.82)' }}>
            <li>A capture from a retina display can start out several thousand pixels wide. Readable in the full view, wasted in a card — reduce the canvas before you reduce the quality.</li>
            <li>Compression cannot undo blur, and this tool is not a sharpening filter; it changes weight, nothing else.</li>
            <li>Against a hard ceiling, lossy encoding is a trade: you get the finest result that still fits under your number, and if the original was already lighter than that number, it comes back untouched.</li>
            <li>Look at the output at 100 % before posting a chart with axis labels — small grey type is the first casualty of any budget.</li>
          </ul>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#78c4f5', marginBottom: '12px' }}>Not On The Menu Here</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'rgba(219,230,242,0.8)' }}>
            Resizing to 1500 x 500, cropping a landscape into the square your avatar becomes, lifting a background out of a headshot — none of those are things this page’s tool does. Do the framing in an image editor, keep the longest side under 4096 px so nothing is silently trimmed on entry, then use the compressor for the byte count.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#78c4f5', marginBottom: '14px' }}>Quick Answers For X Uploads</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ marginBottom: '9px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(29,155,240,0.22)', borderRadius: '10px', padding: '13px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15.5px', cursor: 'pointer', color: '#78c4f5' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#78c4f5', marginBottom: '12px' }}>Nearby Tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/compress-for-instagram', 'Instagram posts'],
              ['/compress-for-linkedin', 'LinkedIn images'],
              ['/compress-for-discord', 'Discord avatars & media'],
              ['/compress-for-fiverr', 'Fiverr gig images'],
              ['/jpg-to-png', 'JPEG to PNG conversion'],
              ['/compress-to-1mb', 'Compress to 1 MB'],
              ['/compress-without-uploading', 'Compress without uploading'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 15px', borderRadius: '8px', background: 'rgba(29,155,240,0.09)', border: '1px solid rgba(29,155,240,0.25)', color: '#78c4f5', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
