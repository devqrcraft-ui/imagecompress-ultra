import type { Metadata } from 'next';
import Link from 'next/link';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Upwork Image Specs: 4:3 Catalog Under 10MB, Square Photo',
  description: 'Upwork wants 4:3 JPEG or PNG under 10 MB in Project Catalog, and a square headshot under 5 MB. Bring both inside the rules in your browser.',
  keywords: 'upwork project catalog image size, upwork profile photo requirements, upwork image 4:3, compress upwork photo 5mb, upwork portfolio image limit',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-upwork' },
  openGraph: {
    title: 'Upwork Image Requirements And A Private Way To Meet Them',
    description: 'Project Catalog images at 4:3 under 10 MB, profile photos square under 5 MB — shrink both in your browser without sending files to a server.',
    url: 'https://www.compressto20kb.com/compress-for-upwork',
  },
};

const faq: [string, string][] = [
  ['What are Upwork’s image rules for Project Catalog?', 'Upwork’s support article on adding images and video to a Project Catalog project says to use JPEG or PNG files under 10 MB, to use a 4:3 aspect ratio, and to keep images no larger than 4000 pixels in width or height. Read in October 2026; those are the published conditions rather than anything this page assumed.'],
  ['What size does an Upwork profile photo need to be?', 'Upwork’s own resource guide puts the floor at 250 x 250 pixels and the ceiling at 4000 x 4000, accepts .jpg and .png, and states a maximum file size of 5 MB. Nothing there mentions WebP or AVIF, even though this compressor can produce them.'],
  ['Can this tool turn my landscape shot into Upwork’s 4:3 or a square headshot?', 'No — resizing a canvas and cropping to a ratio are image-editor jobs, and this page will not claim otherwise. It also cannot clear a busy background, which matters because Upwork’s guidance asks for a simple one. Once the framing is right, this tool only handles how heavy the resulting file is.'],
  ['Should I compress a whole set of catalog images together?', 'That is what the batch is for: up to 50 files in a single run against one ceiling, then pull them down individually or as a ZIP. Every file in a run must share a target, so split the session if your covers and your detail shots need different budgets.'],
  ['Does Upwork see anything before I upload?', 'Nothing leaves your machine during compression, so an unpublished portfolio piece, a client mockup under an NDA, or your own headshot never sits on a third-party server waiting for you to decide.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const fields: { title: string; bullets: string[]; src: string }[] = [
  {
    title: 'Project Catalog cover & gallery images',
    bullets: [
      'Container: JPEG or PNG',
      'Weight: under 10 MB per file',
      'Ratio: 4:3',
      'Canvas: no larger than 4000 px in width or height',
    ],
    src: 'Upwork support — How to add images and video to your Project Catalog project',
  },
  {
    title: 'Freelancer profile photo',
    bullets: [
      'Container: .jpg or .png',
      'Weight: maximum file size 5 MB',
      'Floor: at least 250 x 250 px',
      'Ceiling: no more than 4000 x 4000 px',
    ],
    src: 'Upwork resources — 10 Upwork Profile Picture Tips',
  },
];

export default function CompressForUpworkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Upwork","item":"https://www.compressto20kb.com/compress-for-upwork"}]}' }} />

      <div style={{ minHeight: '100vh', background: '#0b120e', color: '#dbe8de', fontFamily: 'system-ui,sans-serif' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '36px 20px 10px' }}>
          <div style={{ fontSize: '14px', opacity: 0.5, marginBottom: '10px' }}>
            <Link href="/" style={{ color: '#6fda44', textDecoration: 'none', fontWeight: 600 }}>Home</Link> → Compress for Upwork
          </div>
          <h1 style={{ fontSize: 'clamp(25px,4vw,35px)', fontWeight: 800, lineHeight: 1.22, margin: '0 0 14px', color: '#f2fbf3' }}>
            Upwork’s Two Image Fields Want Two Different Things.<br />
            <span style={{ color: '#6fda44' }}>4:3 Under 10 MB, Or Square Under 5 MB.</span>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 10px', color: 'rgba(219,232,222,0.82)' }}>
            A fixed-price project cover and the headshot beside your name are governed by separate requirement lists, and each of those mixes a shape rule with a byte rule. Sellers tend to satisfy one and get rejected on the other: a beautiful 12 MB PNG that breaks the weight line, or a cropped-in square that fails the 4:3 the catalog card expects.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(219,232,222,0.82)' }}>
            The specs quoted below come from Upwork’s own support and resources pages, read there in October 2026. The kilobyte suggestions are ours and are labelled as such. Re-encoding happens in this browser tab, which is the part that matters when the file is an unpublished client mockup or a photograph of your own face.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '16px 20px 30px' }}>
          <CompressorTool initialTargetKB={500} />
        </div>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9ee87c', marginBottom: '14px' }}>Each Field On Its Own Card</h2>
          <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            {fields.map((f) => (
              <div key={f.title} style={{ background: 'rgba(111,218,68,0.07)', border: '1px solid rgba(111,218,68,0.28)', borderRadius: '14px', padding: '18px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '16.5px', color: '#eafbee' }}>{f.title}</h3>
                <ul style={{ margin: '0 0 10px', paddingLeft: '18px', fontSize: '15px', lineHeight: 1.9, opacity: 0.85 }}>
                  {f.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <p style={{ margin: 0, fontSize: '13px', opacity: 0.55, lineHeight: 1.6 }}>{f.src}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.75, opacity: 0.6, margin: '12px 0 0' }}>
            Upwork publishes no WebP or AVIF requirement anywhere in the two pages cited here, so for a marketplace upload those two containers are a gamble — despite being available as output from this tool.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9ee87c', marginBottom: '10px' }}>The 4:3 Rule Is The One People Trip Over</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,232,222,0.8)', margin: '0 0 10px' }}>
            Screenshots, website crops and the square assets lifted from another marketplace all arrive at Upwork’s catalog field in the wrong shape. Ratio is not something a weight control can fix: build the canvas at, say, 1600 x 1200 or 2000 x 1500 in an editor, then bring the finished frame here. Anything inside Upwork’s 4000 px limit survives the trip untouched, since the encoder’s own longest side allowance is 4096 px — the file only shrinks if the number you type demands it.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,232,222,0.8)' }}>
            Flat design work — dashboards, UI mockups, typography-led covers — is where the 10 MB PNGs are born. If the cover is a photograph or a rendered scene rather than flat vector art, JPEG at the same canvas is the easy way to stay inside the rule by a wide margin; PNG only earns its weight when the image really is flat colour and crisp lettering.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9ee87c', marginBottom: '10px' }}>Before The Bytes: Upwork Reviews The Human In The Photo</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,232,222,0.8)', margin: '0 0 10px' }}>
            Upwork’s support article on choosing a good profile picture asks for a clear close-up of your face, good lighting and a simple background, describing the result as similar to an ID photo. Read that as the real review criterion: bytes are the mechanical part, framing is the part a person looks at.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,232,222,0.8)' }}>
            Say plainly what this page cannot do for you. It will not remove a cluttered background, blur a room, brighten an underexposed face, replace a low-resolution selfie with something sharper, or square-crop a group photo down to you. Solve all of that upstream, and use this tool for the single job it performs — bringing a correctly framed file down to a weight you chose.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9ee87c', marginBottom: '10px' }}>Why A 10 MB Ceiling Should Not Be Your Target</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,232,222,0.8)' }}>
            Nothing published by Upwork asks for a smaller file than 10 MB, so the recommendations in this paragraph are ours, in the open. A buyer comparing fixed-price offers scrolls several project cards, and images are usually the heaviest thing on those pages. Landing a cover near 300–500 KB and each profile headshot near 150–200 KB keeps you inside the rule with room to spare, and costs you detail nobody evaluates at that display size. If you would rather work from a stated maximum instead of a suggestion, treat 10 MB and 5 MB as hard walls and set a target comfortably short of them.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9ee87c', marginBottom: '10px' }}>Doing A Whole Catalog Refresh In One Sitting</h2>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(111,218,68,0.2)', borderRadius: '12px', padding: '16px 18px' }}>
            <p style={{ margin: '0 0 10px', fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(219,232,222,0.85)' }}>
              Twenty project covers is a normal refresh, and doing them one file at a time is how people give up and upload the heavyweight originals straight out of the design tool.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15.5px', lineHeight: 2, color: 'rgba(219,232,222,0.85)' }}>
              <li>Set the run to <strong>🎯 Target KB Mode</strong> and type <strong>400</strong> into the custom box — the field accepts 5 to 5000 KB, and the 20/50/100/200 chips are for tighter jobs like headshots.</li>
              <li>Choose <strong>JPEG</strong> for photographic covers, switch to <strong>PNG</strong> for a cover that is pure flat graphics with readable lettering.</li>
              <li>Drop the batch on the panel labelled “Drop images here or click to upload”; up to 50 files go in one run, and JPG, PNG, WebP, AVIF or HEIC sources are all read.</li>
              <li>Run <strong>⚡ Compress All</strong>, check a couple of outputs at full zoom, then <strong>📦 ZIP All</strong> for the download.</li>
              <li>Repeat for the headshot with a smaller number — files in one batch share one budget, so covers and photo cannot reasonably sit in the same run.</li>
            </ul>
          </div>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9ee87c', marginBottom: '14px' }}>Freelancer Questions, Answered Straight</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ marginBottom: '9px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(111,218,68,0.2)', borderRadius: '10px', padding: '13px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15.5px', cursor: 'pointer', color: '#b8ef9a' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#9ee87c', marginBottom: '12px' }}>Worth Opening Next</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/compress-for-fiverr', 'Fiverr gig gallery images'],
              ['/compress-for-indeed', 'Indeed application images'],
              ['/compress-for-greenhouse', 'Greenhouse application uploads'],
              ['/compress-for-resume-photo', 'Resume photo sizing'],
              ['/compress-to-200kb', 'Compress to 200 KB'],
              ['/bulk-image-compressor', 'Batch compress and ZIP'],
              ['/compress-for-email', 'Images small enough to email'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 15px', borderRadius: '8px', background: 'rgba(111,218,68,0.08)', border: '1px solid rgba(111,218,68,0.24)', color: '#9ee87c', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
