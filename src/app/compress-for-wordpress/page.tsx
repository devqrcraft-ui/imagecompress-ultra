import type { Metadata } from 'next';
import Link from 'next/link';
import CompressorTool from '@/app/compressor-tool';

const faq: [string, string][] = [
  ['Does WordPress make the resized copies, or should I?', 'WordPress does. On upload it registers a set of sub-sizes — thumbnail, medium, medium_large, large and the two extras added in 5.3 — and generates them from whatever file you hand it. That is why the useful work happens before the upload: a 4000 px camera JPEG does not get sharper, it gets multiplied, and each of those copies is encoded by your server at WordPress\'s own quality settings rather than by you.'],
  ['Why does my upload fail at a few megabytes when WordPress sets no limit?', 'Because the ceiling is not WordPress\'s. The core function that computes it, wp_max_upload_size(), is documented as determining "the maximum upload size allowed in php.ini", taking the smaller of upload_max_filesize and post_max_size. Your host sets those. multisite installations add their own per-site setting on top, so check the wording under your own Add New Media screen.'],
  ['Is AVIF safe to add to the WordPress Media Library?', 'On WordPress 6.5 or newer, yes — AVIF upload support landed in that release, with a default quality of 82, and WebP has been accepted since 5.8. Both depend on the server\'s image library supporting the format, which Site Health will tell you. Also note the asymmetry: this browser tool falls back to WebP when a browser cannot encode AVIF, and WordPress will not convert your existing JPEGs into modern formats by itself.'],
  ['Can this tool rewrite the images already inside my Media Library?', 'No. It has no server-side access, no plugin and no credentials — it works on files you select from your own disk, up to 50 at a time. Anything already published stays where it is; the workflow here is to prepare the next upload so it arrives small enough not to need rescuing.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export const metadata: Metadata = {
  title: 'WordPress Image Sizes: Sub-sizes & Upload Limits',
  description: 'WordPress publishes no KB upload limit — your php.ini does. See the sub-sizes WP creates, the 2560 px rule, then compress before you upload.',
  keywords: ['wordpress image size', 'wordpress upload limit', 'wordpress webp avif', 'compress image before upload wordpress'],
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-wordpress' },
  openGraph: {
    title: 'WordPress Image Sizes: What WP Does Before You Do',
    description: 'Sub-sizes, the 2560 px threshold, php.ini ceilings and WebP/AVIF support — with the compression done before upload.',
    url: 'https://www.compressto20kb.com/compress-for-wordpress',
  },
};

const code = { background: 'rgba(129,140,248,0.18)', borderRadius: '5px', padding: '1px 6px', fontFamily: 'ui-monospace,monospace', fontSize: '14px', color: '#c7d2fe' } as const;

export default function CompressForWordpressPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg,#101019,#1c1b33,#131320)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"WordPress image sizes","item":"https://www.compressto20kb.com/compress-for-wordpress"}]}' }} />

      <article style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 18px 40px' }}>
        <p style={{ fontSize: '14px', opacity: 0.68, marginBottom: '14px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> → WordPress
        </p>
        <h1 style={{ fontSize: 'clamp(26px,4.5vw,38px)', fontWeight: 900, lineHeight: 1.2, margin: '0 0 18px' }}>
          Pre-Size Images Before WordPress<br /><span style={{ color: '#7dd3fc' }}>Makes Six Copies of Them</span>
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          Almost every WordPress image article starts with a plugin. This one starts a step earlier, at the file still sitting in your downloads folder, because everything WordPress does after upload is multiplication — extra sizes, extra encodes, extra bytes — not reduction.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.85, marginBottom: '34px' }}>
          What follows is the behaviour WordPress documents, the ceiling it explicitly does not set, and a browser-only way to arrive with a file that is already the right weight. Nothing here uploads anything: encoding happens on your machine, with no account and no queue.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px' }}>What happens the moment you upload</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '16px' }}>
          The developer reference for <span style={code}>add_image_size()</span> lists the size names WordPress reserves — <span style={code}>thumb</span>, <span style={code}>thumbnail</span>, <span style={code}>medium</span>, <span style={code}>medium_large</span>, <span style={code}>large</span>, <span style={code}>post-thumbnail</span> — and the defaults registered out of the box: thumbnail at 150&times;150 (square-cropped if that option is ticked), medium at 300&times;300, large at 1024&times;1024, and 1536&times;1536 and 2048&times;2048 added in WordPress 5.3. Sizes above the first one are scaled proportionally unless a hard crop is registered.
        </p>
        <ul style={{ margin: '0 0 26px', paddingLeft: '22px', lineHeight: 1.9, fontSize: '15px', opacity: 0.85 }}>
          <li><strong>Read the consequences, not just the numbers:</strong> upload one 5000&times;3333 photo and you have paid for a full-size original plus every registered sub-size.</li>
          <li><strong>Those copies are re-encoded by your server,</strong> at the quality your PHP image library chooses — not by you.</li>
          <li><strong>The responsive <span style={code}>srcset</span> only picks from sizes that exist,</strong> so a theme that never uses 2048 px still got one generated.</li>
        </ul>

        <div style={{ background: 'rgba(125,211,252,0.07)', border: '1px solid rgba(125,211,252,0.28)', borderRadius: '14px', padding: '18px 20px', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 8px' }}>The 2560 px rule people forget</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.88, margin: '0 0 8px' }}>
            Core&rsquo;s 5.3 development note introduced handling for big images: the default threshold is <strong>2560 px</strong>, filterable through <span style={code}>big_image_size_threshold</span>. An upload wider or taller than that is scaled down, and the scaled copy is what the sub-sizes are built from — while the original file stays on disk.
          </p>
          <p style={{ fontSize: '13px', opacity: 0.72, margin: 0 }}>
            Source: <a href="https://make.wordpress.org/core/2019-10-09/introducing-handling-of-big-images-in-wordpress-5-3/" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc' }}>make.wordpress.org core dev note</a> and the <a href="https://developer.wordpress.org/reference/hooks/big_image_size_threshold/" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc' }}>hook reference</a>, checked October 2026.
          </p>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px' }}>Where your upload ceiling really comes from</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          WordPress core publishes <strong>no kilobyte limit</strong> for an image upload, and there is no setting in the dashboard that pretends otherwise. The reference for <span style={code}>wp_max_upload_size()</span> states plainly that it &ldquo;Determines the maximum upload size allowed in php.ini&rdquo;, reading <span style={code}>upload_max_filesize</span> and <span style={code}>post_max_size</span> and returning the smaller of the two.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          The Settings &rarr; Media screen, meanwhile, only lets you enter <em>maximum dimensions in pixels</em> for the sizes it generates, plus the upload-organising checkbox — there is no file-size field on it at all. Multisite adds a per-site network setting, and most managed hosts expose their own cap.
        </p>
        <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '28px' }}>
          Sources: <a href="https://developer.wordpress.org/reference/functions/wp_max_upload_size/" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc' }}>wp_max_upload_size() reference</a> and <a href="https://wordpress.org/documentation/article/settings-media-screen/" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc' }}>the Media settings documentation</a>, checked October 2026. Take your real number from the footer of your own Add New Media screen.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px' }}>Formats the library will actually accept</h2>
        <div style={{ display: 'grid', gap: '10px', marginBottom: '28px' }}>
          {[
            { k: 'WebP', v: 'Uploadable since WordPress 5.8, provided the server\'s image library — Imagick or LibGD — supports it. Core does not convert your JPEGs into WebP for you; that is still plugin territory.' },
            { k: 'AVIF', v: 'Accepted since WordPress 6.5, with a documented default quality of 82 and lossless at 100. Editing support depends on the library version, so verify in Site Health before you commit a workflow to it.' },
            { k: 'JPEG / PNG', v: 'The two formats no host or theme argues about. Use PNG for screenshots and line art where crisp edges matter, JPEG for photographs.' },
          ].map(r => (
            <div key={r.k} style={{ display: 'flex', gap: '14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ fontWeight: 900, fontSize: '15px', color: '#7dd3fc', minWidth: '78px' }}>{r.k}</div>
              <div style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.85 }}>{r.v}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '28px' }}>
          Sources: <a href="https://make.wordpress.org/core/2021-06-07/wordpress-5-8-adds-webp-support/" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc' }}>WordPress 5.8 adds WebP support</a> and <a href="https://make.wordpress.org/core/2024-02-23/wordpress-6-5-adds-avif-support/" target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc' }}>WordPress 6.5 adds AVIF support</a>, checked October 2026.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px' }}>Width versus column width — the only resize that matters</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          Find the width your theme actually paints content at (the editor&rsquo;s content column is a good proxy, and many themes document their featured-image dimensions), then upload at that width or a little above. A 4000 px upload served inside a 740 px column is not a sharper page; it is the same picture with more bytes on it.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '12px' }}>
          The usual counter-argument is retina duplication: doubling the file to look crisp on a 2&times; screen. That trade only pays when the browser can choose — a registered sub-size at 2&times; the column width is worth having; a full-resolution master in the post is not.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.85, marginBottom: '28px' }}>
          And the cheapest WordPress win is not compression at all: fill the <strong>alt text</strong> field, write a caption a screen reader will understand, and give the file a name that describes the picture. No compressor can retro-fit those, and they are what makes an image findable and accessible rather than merely light.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px' }}>Our working numbers (ours, not WordPress&rsquo;s)</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.8, marginBottom: '18px' }}>
          Since WordPress sets no byte budget, these are the targets we would use with this tool on a normal content site:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '12px', marginBottom: '30px' }}>
          {[
            { a: 'In-content image', b: 'column width, &le; 200 KB' },
            { a: 'Featured / hero', b: 'up to 1600 px wide, 250–400 KB' },
            { a: 'Card thumbnail', b: '&le; 60 KB' },
            { a: 'Screenshot / line art', b: 'PNG, 150–250 KB' },
            { a: 'Photo gallery set', b: '1200 px wide, 150 KB each' },
            { a: 'Logo with transparency', b: 'PNG, &le; 50 KB' },
          ].map(c => (
            <div key={c.a} style={{ background: 'rgba(125,211,252,0.06)', border: '1px solid rgba(125,211,252,0.2)', borderRadius: '12px', padding: '12px 14px' }}>
              <div style={{ fontWeight: 800, fontSize: '14px', marginBottom: '4px' }}>{c.a}</div>
              <div style={{ fontSize: '14px', opacity: 0.72 }}>{c.b}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 10px' }}>Prepare the upload here</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.82, marginBottom: '18px' }}>
          Target KB Mode is on and set to 150 KB below — a sensible starting point for body content. Re-encoding is lossy, so treat the output as the highest quality that fits under your number, not a promise that nothing was discarded.
        </p>
        <CompressorTool initialTargetKB={150} />

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '34px 0 14px' }}>The prep order that saves the most bytes</h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '30px' }}>
          {[
            { n: '01', t: 'Crop and straighten somewhere else', d: 'This tool cannot crop to a ratio, resize to a dimension you name or remove a background. Do composition in an editor, size reduction here.' },
            { n: '02', t: 'Add the whole set at once', d: 'Up to 50 files per batch, JPG, PNG, WebP, AVIF or HEIC input, so a week of posts is one sitting.' },
            { n: '03', t: 'Pick the format before the number', d: 'WebP or AVIF for images you serve yourself; JPEG when the same file also goes to another platform.' },
            { n: '04', t: 'Type the target, then check the compare view', d: 'The before/after slider is how you confirm small text and edges survived the budget you chose.' },
            { n: '05', t: 'ZIP, then upload once', d: 'Download the batch as a ZIP and drop finished files into the Media Library — they arrive under budget, so no server-side rescue plugin is needed.' },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ fontWeight: 900, fontSize: '15px', color: '#7dd3fc', minWidth: '30px' }}>{s.n}</div>
              <div><strong style={{ fontSize: '15px' }}>{s.t}</strong><div style={{ opacity: 0.75, fontSize: '14px', lineHeight: 1.7, marginTop: '3px' }}>{s.d}</div></div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '18px 20px', marginBottom: '30px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px' }}>Boundaries worth knowing before you rely on this</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.9, fontSize: '15px', opacity: 0.85 }}>
            <li>Longest side is capped at 4096 px during processing, so a huge master is downscaled as well as re-encoded.</li>
            <li>Output options are WebP, AVIF, JPEG and PNG — WordPress will not have AVIF support on older or oddly configured hosts, so check Site Health first.</li>
            <li>Files already smaller than your target return unchanged, which means a batch of mixed sizes is safe to run in one pass.</li>
            <li>Target KB Mode searches encoding quality and stops when the interval narrows, so output is at or under the number — not exactly it, and not to the byte.</li>
          </ul>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '26px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>WordPress-specific questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faq.map(([q, a], i) => (
              <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(125,211,252,0.22)', borderRadius: '10px', padding: '14px 18px' }}>
                <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#bae6fd' }}>{q}</summary>
                <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>Next reads</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '14px', marginBottom: '24px' }}>
          {[
            { href: '/compress-for-woocommerce', label: 'Compress for WooCommerce' },
            { href: '/compress-for-squarespace', label: 'Compress for Squarespace' },
            { href: '/png-to-jpg', label: 'PNG to JPG' },
            { href: '/jpg-to-png', label: 'JPG to PNG' },
            { href: '/compress-to-200kb', label: 'Compress to 200 KB' },
            { href: '/image-size-checker-online', label: 'Image size checker' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ background: 'rgba(255,255,255,0.07)', padding: '7px 13px', borderRadius: '8px', color: 'white', textDecoration: 'none' }}>{l.label}</Link>
          ))}
        </div>
        <p style={{ fontSize: '13px', opacity: 0.68, lineHeight: 1.7 }}>
          Independent page by CompressTo20KB. WordPress is a trademark of its own owners; we are not affiliated with or endorsed by them, and this tool has no connection to your site — it prepares files on your device before you upload them yourself.
        </p>
      </article>
    </div>
  );
}
