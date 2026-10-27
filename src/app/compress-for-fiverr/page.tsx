import type { Metadata } from 'next';
import Link from 'next/link';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Fiverr Gig Image Sizes: 1280x769, Formats, Weight',
  description: 'Fiverr publishes Gig image dimensions but no file weight. See what its help pages actually say, then shrink your gig JPEG to a size you choose.',
  keywords: 'fiverr gig image size, 1280x769 gig image, fiverr image requirements, compress fiverr gig photo, fiverr gallery image file size',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-fiverr' },
  openGraph: {
    title: 'Fiverr Gig Images: Dimensions, Formats And File Weight',
    description: 'What Fiverr’s Help Centre says about Gig images, and how to get your file under a weight you choose — in your browser, no upload.',
    url: 'https://www.compressto20kb.com/compress-for-fiverr',
  },
};

const faq: [string, string][] = [
  ['What size does Fiverr want a Gig image to be?', 'Fiverr’s Help Centre article on creating Gig images gives a recommended size of 1280 x 769 px at 72 DPI, with 712 x 430 px as the minimum and 4000 x 2416 px as the maximum. Those are pixel dimensions. Nothing on that page asks for a particular file weight.'],
  ['Why does my Gig thumbnail look soft even though the original is crisp?', 'A hosted gallery almost always derives smaller copies of what you upload for its cards and search results, and producing those copies means resampling and then re-encoding. Small type and thin lines are the first casualties. Exporting at the recommended 1280 x 769 and setting the weight yourself means the platform starts from a file that already matches the shape it needs.'],
  ['Does Fiverr publish a maximum file size in MB or KB for gig images?', 'Not for the Gig gallery on the help pages this page quotes. Its Portfolio article does state a maximum file size of 50 MB with a one-to-five-file limit per project, which is a different upload. Any KB figure you read on this page is our recommendation, not a Fiverr rule.'],
  ['Should I upload a Gig image as JPEG, WebP or AVIF?', 'JPEG. This compressor can write WebP and AVIF as well, and both are smaller at the same visual result, but the format lists published by Fiverr name JPEG, JPG, PNG and GIF — the newer formats are not mentioned, so treat them as unsupported for a marketplace upload and keep them for your own website.'],
  ['Can the three images in one Gig gallery be compressed together?', 'Yes. The drop zone takes up to 50 files and every file in the run gets the same target, so all three gallery slides can go through in one pass and come back individually or as a ZIP. Nothing leaves your device while it happens.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const specs: [string, string, string][] = [
  ['Recommended Gig image size', '“The recommended Gig image size is 1280 x 769 px at 72 dots per inch (DPI).”', 'Creating Gig images and tagging your Gig gallery'],
  ['Pixel floor and ceiling', '“Minimum: 712 x 430 px; Maximum: 4000 x 2416 px.”', 'Creating Gig images and tagging your Gig gallery'],
  ['How many images a Gig may carry', '“You must upload at least one image to publish your Gig. You can add up to three images.”', 'Creating a Gig'],
  ['Portfolio uploads (a different field)', 'One to five files per project; “Accepted formats include JPEG, JPG, PNG, GIF, MP4, AVI, PDF. Maximum file size: 50 MB. Recommended image size: 1,280 x 769 pixels (aspect ratio 5:3).”', 'Using your Fiverr Portfolio'],
];

export default function CompressForFiverrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Fiverr","item":"https://www.compressto20kb.com/compress-for-fiverr"}]}' }} />

      <div style={{ minHeight: '100vh', background: '#0b1418', color: '#d6e6e2', fontFamily: 'system-ui,sans-serif' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '38px 20px 10px' }}>
          <div style={{ fontSize: '14px', opacity: 1, marginBottom: '10px' }}>
            <Link href="/" style={{ color: '#3cb896', textDecoration: 'none', fontWeight: 600 }}>Home</Link> → <Link href="/blog" style={{ color: '#3cb896', textDecoration: 'none' }}>Blog</Link> → Fiverr Gig Images
          </div>
          <h1 style={{ fontSize: 'clamp(25px,4vw,36px)', fontWeight: 800, lineHeight: 1.22, margin: '0 0 14px', color: '#f2fbf8' }}>
            Fiverr Tells You The Shape Of A Gig Image.<br />
            <span style={{ color: '#3cb896' }}>It Never Tells You The Weight — So Set It Yourself.</span>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 10px', color: 'rgba(214,230,226,0.82)' }}>
            Every Gig gallery field Fiverr documents is measured in pixels. Sellers therefore upload a heavyweight master at the maximum allowed size, then watch it turn up as a small card in a search result. That is where a carefully designed slide loses its fine text: a hosted gallery derives its own smaller copies, and the weight and size you shipped decide how generously that resampling treats you.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(214,230,226,0.82)' }}>
            The compressor on this page runs entirely in your browser tab. A gig slide, a portfolio image, an NDA-covered client screenshot: none of it is uploaded, watermarked or queued. You type the kilobyte number; you get a file at or under it.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '18px 20px 30px' }}>
          <CompressorTool initialTargetKB={300} />
        </div>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '8px' }}>What Fiverr’s Own Help Pages Say</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.72, margin: '0 0 16px' }}>
            Three articles from the Fiverr Help Centre, read in October 2026. Quoted wording is Fiverr’s, not ours.
          </p>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(60,184,150,0.28)', borderRadius: '12px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ background: 'rgba(60,184,150,0.1)', textAlign: 'left' }}>
                  <th style={{ padding: '12px 14px', color: '#8fe3c8' }}>Item</th>
                  <th style={{ padding: '12px 14px', color: '#8fe3c8' }}>Published wording</th>
                  <th style={{ padding: '12px 14px', color: '#8fe3c8' }}>Fiverr article</th>
                </tr>
              </thead>
              <tbody>
                {specs.map(([item, quote, source]) => (
                  <tr key={item} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', verticalAlign: 'top' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 700, color: '#eafaf4', whiteSpace: 'nowrap' }}>{item}</td>
                    <td style={{ padding: '12px 14px', opacity: 0.82, lineHeight: 1.7 }}>{quote}</td>
                    <td style={{ padding: '12px 14px', opacity: 0.72, lineHeight: 1.6 }}>{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '12px' }}>The Number That Is Missing From The Table</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(214,230,226,0.8)', margin: '0 0 10px' }}>
            Fiverr’s gallery-image pages set dimensions and, on the Portfolio side, a 50 MB ceiling per file. They do not print a target in kilobytes for the three Gig slides. So this page refuses to invent one: no “Fiverr requires 2 MB here”, because no such sentence appears on the pages above.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(214,230,226,0.8)' }}>
            What we suggest instead, clearly labelled as advice from us: land the first gallery image — the one that becomes your thumbnail in search — somewhere around 300 KB, and the two supporting slides near 150 KB. Those budgets keep a 1280 x 769 JPEG looking clean while leaving a buyer on a slow mobile connection with something that actually paints.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '12px' }}>Why A Crisp Master Still Uploads Soft</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(214,230,226,0.8)', margin: '0 0 10px' }}>
            Take the top of Fiverr’s allowed range, 4000 x 2416. A buyer rarely sees it at that size — they see a card in a result list, which means the file gets resampled before anyone looks at it, and a lossy resample followed by a lossy encode is hard on fine detail. Do the resize once, deliberately, at 1280 x 769 in your own editor, and the copy the platform derives comes from something that already has the shape it wants.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(214,230,226,0.8)' }}>
            Thin strokes suffer first. A 12 px caption, a hairline arrow, a logo outline with anti-aliased edges — those survive one resample reasonably and get mushy across two. Which is why “can’t read my offer text in the thumbnail” is usually a geometry problem you can fix before compression, not a quality problem you can fix with it.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '12px' }}>Do The Canvas Work First — This Tool Only Moves Kilobytes</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(214,230,226,0.8)', margin: '0 0 12px' }}>
            Be honest about the division of labour. Getting to 1280 x 769, or to Fiverr’s 5:3 portfolio ratio, is a job for an image editor. This page’s compressor will not crop for you, will not change an aspect ratio, will not swap a busy background for a clean one, and will not rescue a photo that was never sharp. What it does is re-encode the file you hand it and land it under a weight you typed.
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.9, fontSize: '15.5px', color: 'rgba(214,230,226,0.8)' }}>
            <li>Export the slide at 1280 x 769 (or inside Fiverr’s 712 x 430 – 4000 x 2416 window if you need a bigger art file), then bring it here.</li>
            <li>One exception worth knowing: the encoder caps the longest side at 4096 px, so a master sitting at Fiverr’s 4000 px maximum enters the tool at full size rather than being silently downscaled on the way in.</li>
            <li>If the file already weighs less than the number you typed, it comes back unchanged — the tool does not re-shrink something that already fits.</li>
          </ul>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '12px' }}>Working A Gig Slide Through Target KB Mode</h2>
          <ol style={{ paddingLeft: '22px', lineHeight: 2, fontSize: '15.5px', color: 'rgba(214,230,226,0.82)' }}>
            <li>Above, switch the mode tabs to <strong>🎯 Target KB Mode</strong> — the other tab, <strong>🎚️ Quality Mode</strong>, is a plain 10–100 % slider with no size promise attached.</li>
            <li>Skip the <strong>Quick Presets</strong> row. It holds Shopify, Etsy, Amazon, Instagram, Gov 20KB and 50KB; Fiverr is not in it, and pretending otherwise would be a lie about this tool.</li>
            <li>Under <strong>Target file size</strong>, tap the 100 or 200 KB chip, or type into the Custom box, which accepts 5 to 5000 KB. For a lead slide, 300 KB is our starting point.</li>
            <li>Pick the <strong>JPEG</strong> format button for photography and composites; <strong>PNG</strong> only when the slide is flat vector-style art or needs transparency.</li>
            <li>Drop the files onto the panel that reads “Drop images here or click to upload”. JPG, PNG, WebP, AVIF and HEIC all go in — up to 50 files at a time, which covers a full Gig gallery plus spare crops.</li>
            <li>Press <strong>⚡ Compress All</strong>. Then look at the result at 100 % zoom, because compression is lossy: you are getting the best quality that still fits under your number, not the original file back.</li>
            <li>Grab each image individually, or <strong>📦 ZIP All</strong> when the whole gallery is done, and upload the result in the Gig editor.</li>
          </ol>
          <p style={{ fontSize: '14.5px', lineHeight: 1.8, opacity: 0.62, margin: '14px 0 0' }}>
            Under the hood that “at or under” promise is a search: the encoder tries qualities between 0.05 and 0.95, keeps the largest quality that still fits, and stops once the range narrows below 0.03 or after twelve tries. It converges on a size; it does not manufacture a byte count.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '12px' }}>Choosing The Output Container</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(214,230,226,0.8)' }}>
            All four containers this tool writes — WebP, AVIF, JPEG, PNG — are legitimate, and AVIF usually wins on bytes. For a Gig gallery it is the wrong hill to climb: a buyer-facing platform can reject or silently mangle a container it never documented, and you find out after the Gig is published. Use JPEG where Fiverr’s own format lists cover you, and spend WebP and AVIF on assets you host yourself, where you control the &lt;img&gt; tag and can test it.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 30px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '12px' }}>Before You Save The Gig</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: 2, fontSize: '15.5px', color: 'rgba(214,230,226,0.8)' }}>
            <li>Every slide is one you own or have rights to — Fiverr’s Gig rules say images must be yours, and no stock-sourced filler.</li>
            <li>Zoom the compressed file to 100 % and read any text in it. If a caption went soft, raise the target by one step rather than fighting the encoder.</li>
            <li>Preview the first slide at thumbnail size, because that is the version buyers scroll past. Legibility there is worth more than resolution anywhere.</li>
            <li>Open DevTools on the Network tab while you compress — it stays empty of your image. That is the whole privacy argument, checkable in about ten seconds.</li>
          </ul>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '21px', fontWeight: 800, color: '#8fe3c8', marginBottom: '14px' }}>Questions Sellers Ask Before Uploading</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ marginBottom: '9px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(60,184,150,0.22)', borderRadius: '10px', padding: '13px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15.5px', cursor: 'pointer', color: '#8fe3c8' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.75, opacity: 0.78 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#8fe3c8', marginBottom: '12px' }}>Keep Reading</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/compress-for-upwork', 'Upwork project images'],
              ['/compress-for-etsy', 'Etsy listing photos'],
              ['/compress-for-amazon', 'Amazon product images'],
              ['/compress-to-100kb', 'Compress to 100 KB'],
              ['/blog/best-image-formats', 'Which format to pick'],
              ['/bulk-image-compressor', 'Batch compress + ZIP'],
              ['/image-size-checker-online', 'Check a file’s pixel size'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 15px', borderRadius: '8px', background: 'rgba(60,184,150,0.09)', border: '1px solid rgba(60,184,150,0.25)', color: '#8fe3c8', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
