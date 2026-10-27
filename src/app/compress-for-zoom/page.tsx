import type { Metadata } from 'next';
import Link from 'next/link';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Zoom Image Sizes: 2MB Photo, 1MB Logo, 15MB Background',
  description: 'Zoom sets three limits, not one: a 2 MB profile photo, a 1 MB waiting-room logo, a 15 MB background. Match the file to the right one, offline.',
  keywords: 'zoom profile picture size, zoom virtual background 15mb, zoom waiting room image 1mb, compress image for zoom, zoom background resolution 1920x1080',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-zoom' },
  openGraph: {
    title: 'Zoom Image Requirements: Photo, Background, Waiting Room',
    description: 'Zoom applies a different ceiling to every image you upload. Match your file to the correct one, locally, in your browser.',
    url: 'https://www.compressto20kb.com/compress-for-zoom',
  },
};

const faq: [string, string][] = [
  ['Why will Zoom reject my virtual background?', 'Zoom’s support article on changing your virtual background image accepts 24-bit PNG or JPG/JPEG only, and caps the file at 15 MB. A background that fails to load is usually outside one of those two conditions — a different container, or a heavier file — rather than a network problem.'],
  ['What resolution should a Zoom background be?', 'Zoom recommends matching the image to your camera’s aspect ratio, giving 1280 x 720 or 1920 x 1080 as the working sizes, and its requirements article notes that a virtual background without a green screen caps your outgoing video at 720p. Encoding a 4000-pixel-wide background buys detail the pipeline will not display.'],
  ['Is the 1 MB and the 2 MB limit the same upload?', 'No, and mixing them up is the usual frustration. Zoom’s waiting-room customization page puts its branding image at GIF, JPG or PNG, maximum 1 MB, minimum 400 x 200 px with 2:1 recommended; the profile picture on the web portal allows JPG/JPEG, GIF or PNG smaller than 2 MB. Two different fields, two different ceilings.'],
  ['Can this tool square-crop my Zoom profile photo?', 'It cannot. Zoom handles the framing itself — both the web portal and the account profile let you adjust the crop area after uploading — while this page’s compressor only changes how heavily the file is encoded. Get the framing right in Zoom, get the weight right here.'],
  ['Is my face copied anywhere when I shrink a Zoom picture?', 'No. The decode and re-encode happen inside the browser tab, so no upload occurs, no queue forms and no watermark is added. Watching the Network panel during a run is a quick way to satisfy yourself that nothing goes out.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const ceilings: { figure: string; label: string; detail: string; source: string }[] = [
  {
    figure: '1 MB',
    label: 'Waiting-room branding image',
    detail: 'GIF, JPG or PNG. Minimum resolution 400 x 200 px, with a 2:1 aspect ratio recommended at larger sizes.',
    source: 'Enabling and customizing the waiting room',
  },
  {
    figure: '2 MB',
    label: 'Your own profile picture',
    detail: 'JPG/JPEG, GIF or PNG, smaller than 2 MB, uploaded on the web portal — with an optional crop step inside Zoom.',
    source: 'Managing your profile picture on the Zoom web portal',
  },
  {
    figure: '15 MB',
    label: 'Virtual background',
    detail: '24-bit PNG or JPG/JPEG only, with 1280 x 720 or 1920 x 1080 the recommended working sizes.',
    source: 'Changing your virtual background image',
  },
];

export default function CompressForZoomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Zoom","item":"https://www.compressto20kb.com/compress-for-zoom"}]}' }} />

      <div style={{ minHeight: '100vh', background: '#0a1024', color: '#d8e0f5', fontFamily: 'system-ui,sans-serif' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '36px 20px 10px' }}>
          <div style={{ fontSize: '14px', opacity: 0.5, marginBottom: '10px' }}>
            <Link href="/" style={{ color: '#7ea2ff', textDecoration: 'none', fontWeight: 600 }}>Home</Link> → Compress for Zoom
          </div>
          <h1 style={{ fontSize: 'clamp(25px,4vw,35px)', fontWeight: 800, lineHeight: 1.22, margin: '0 0 14px', color: '#f3f7ff' }}>
            Zoom Does Not Have One Image Limit.<br />
            <span style={{ color: '#0b53f6' }}>It Has Three, And They Live In Different Menus.</span>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 10px', color: 'rgba(216,224,245,0.82)' }}>
            Most guides for this platform quote a single number and move on. Zoom’s own support articles are more specific than that: the branding picture on your waiting room, the small round photo next to your name, and the background behind your video each carry their own format list and their own byte ceiling. Pick the wrong one and either the upload refuses or you waste an afternoon shrinking a file that never needed shrinking.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(216,224,245,0.82)' }}>
            Everything on this page is quoted from support.zoom.com and was read there in October 2026. Where Zoom stays silent, this page says so. Encoding runs locally in your tab — relevant for the profile photo, which is your face, and for a waiting-room graphic that may carry your company’s branding.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '16px 20px 30px' }}>
          <CompressorTool initialTargetKB={200} />
        </div>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9fbbff', marginBottom: '14px' }}>Three Ceilings, Before Anything Else</h2>
          <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))' }}>
            {ceilings.map((c) => (
              <div key={c.figure} style={{ background: 'rgba(11,83,246,0.09)', border: '1px solid rgba(11,83,246,0.3)', borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '30px', fontWeight: 900, color: '#9fbbff', lineHeight: 1 }}>{c.figure}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 6px', color: '#eaf1ff' }}>{c.label}</div>
                <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.7, opacity: 0.78 }}>{c.detail}</p>
                <p style={{ margin: '8px 0 0', fontSize: '13px', opacity: 0.5 }}>Zoom support article: {c.source}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9fbbff', marginBottom: '10px' }}>The Profile Photo Is The Smallest Thing You Will Ever Over-Prepare</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(216,224,245,0.8)', margin: '0 0 10px' }}>
            Zoom lets you adjust the crop area after uploading, and the photo is displayed small — in a participant list, next to a chat message, inside a circle. Two MB of headroom therefore does not mean you should ship two MB; it means the door is wide and you can walk through it with a tidy file. Our own suggestion, unambiguously not Zoom’s rule: a headshot around 800 x 800 px kept near 150–200 KB reads perfectly everywhere the avatar appears.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(216,224,245,0.8)' }}>
            The thing that actually ruins a profile photo is not weight. It is a crop that put your chin outside the circle, or a wide shot where you were the third person from the left. Zoom’s crop box is the place to settle that; the compressor cannot help, because it never touches geometry.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9fbbff', marginBottom: '10px' }}>Virtual Backgrounds: The One Upload Worth Headroom</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(216,224,245,0.8)', margin: '0 0 10px' }}>
            Here Zoom’s published maximum jumps to 15 MB and its recommended working sizes become 1280 x 720 or 1920 x 1080, which it also ties to matching the aspect ratio of your camera. The container rules tighten at the same time: 24-bit PNG or JPG/JPEG, and nothing else. A HEIC off an iPhone will not go in as it stands, so converting first is part of the job.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(216,224,245,0.8)' }}>
            Zoom’s own background requirements page adds a limit that is easy to miss: without a green screen, your outgoing video is capped at 720p. Push a giant 15 MB graphic through that and the extra pixels are trimmed by Zoom before anyone in the call sees them. A well-encoded 1920 x 1080 JPEG or 24-bit PNG, kept in the low hundreds of kilobytes, gives the same picture at a fraction of the weight.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9fbbff', marginBottom: '10px' }}>Waiting-Room Branding Is A Different Shape Entirely</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(216,224,245,0.8)' }}>
            A 2:1 recommendation with a 400 x 200 px floor, GIF/JPG/PNG accepted, and a hard 1 MB cap — the smallest of Zoom’s three ceilings and the one hosted on an account-level setting rather than your personal profile. Because it is landscape and usually carries a logo plus a wordmark, it is also the upload most often submitted as a tall screenshot that then needs framing. Rebuild the canvas at 2:1 in your editor; the compressor will happily shrink whatever shape you hand it, but it will not turn a portrait into a banner.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9fbbff', marginBottom: '10px' }}>Batch Runs Share A Number, So Split The Session</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(216,224,245,0.8)', margin: '0 0 10px' }}>
            One run of up to 50 files applies one target to everything in it. Useful when you are prepping a set of background frames; wrong when you have an avatar and a banner and a background sitting in the same queue, since those want 150 KB, 1 MB and “comfortably under 15 MB” respectively.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(216,224,245,0.8)' }}>
            The practical routine is two short passes: batch the files that share a budget, compress, download the ZIP, then change the number in the Custom box (anywhere from 5 to 5000 KB, or the 20 / 50 / 100 / 200 chips above it) and run the rest. Format buttons sit beside the target control — choose JPEG or PNG for anything Zoom ingests; leave WebP and AVIF for your own site, because neither appears in the format lists above and a rejected background teaches you that faster than this paragraph does.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9fbbff', marginBottom: '10px' }}>A Worked Pass: The Background That Would Not Load</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.85, color: 'rgba(216,224,245,0.8)' }}>
            Start with the file that fails: say a PNG screen-composite at 3000 x 1685, weighing in past Zoom’s 15 MB line. Set the format button to <strong>PNG</strong> if it is flat design art you want kept lossless, or <strong>JPEG</strong> if it is a photographic scene. Open <strong>🎯 Target KB Mode</strong>, tap <strong>200 KB</strong>, drop the image on the panel, press <strong>⚡ Compress All</strong>. The search tries quality values between 0.05 and 0.95 — up to twelve attempts, stopping once the range narrows below 0.03 — and hands back the best fit it found that stays under 200 KB. Inspect it full-size: text in the graphic should still be legible, and if it is not, move the target up. Because the longest side is handled at 4096 px, this 3000 px image is not downscaled on the way in — the savings come from the encoder, not from a silent resize.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#9fbbff', marginBottom: '14px' }}>Asked Before Opening Zoom Settings</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ marginBottom: '9px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(11,83,246,0.28)', borderRadius: '10px', padding: '13px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15.5px', cursor: 'pointer', color: '#b7c9ff' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#9fbbff', marginBottom: '12px' }}>Related Pages</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/compress-for-google-classroom', 'Google Classroom images'],
              ['/compress-for-resume-photo', 'Resume & headshot files'],
              ['/compress-for-twitter', 'X / Twitter image slots'],
              ['/image-size-checker-online', 'Check pixel dimensions first'],
              ['/compress-to-100kb', 'Compress to 100 KB'],
              ['/compress-to-500kb', 'Compress to 500 KB'],
              ['/vs/squoosh', 'This tool compared with Squoosh'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 15px', borderRadius: '8px', background: 'rgba(11,83,246,0.1)', border: '1px solid rgba(11,83,246,0.28)', color: '#9fbbff', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
