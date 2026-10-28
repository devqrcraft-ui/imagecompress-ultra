import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Images for Squarespace — No Plugin, No Upload',
  description: 'Shrink the photos you hand to a Squarespace site right in your browser. Choose a KB ceiling, keep WebP or JPEG, preview the result and download.',
  keywords: 'compress images for squarespace, squarespace image size, reduce photo size squarespace, squarespace image optimization, squarespace webp images',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-squarespace' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-squarespace' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why compress images before adding them to Squarespace?', acceptedAnswer: { '@type': 'Answer', text: 'A site builder creates resized versions of whatever you upload, but the file you upload sets the upper limit for quality and weight. Hand it an already-scaled, already-compressed image and every derived version starts from a smaller, cleaner source — with fewer bytes sitting on your hosting plan.' } },
    { '@type': 'Question', name: 'Do I need a plugin or app to compress them?', acceptedAnswer: { '@type': 'Answer', text: 'No. This page does the work with your own browser. Add the photos, set a KB ceiling in Target KB Mode, pick WebP or JPEG, compress and download — then put the finished files into the site.' } },
    { '@type': 'Question', name: 'WebP or JPEG for a Squarespace site?', acceptedAnswer: { '@type': 'Answer', text: 'WebP usually carries a photo in fewer bytes at the same visual quality, which helps on mobile connections. If you export images for somewhere else too — email templates, print, an older browser — keep a JPEG version and use whichever the placement needs.' } },
    { '@type': 'Question', name: 'Are my images uploaded to a server here?', acceptedAnswer: { '@type': 'Answer', text: 'They are not. Encoding runs locally in this tab. Load DevTools before you compress, watch the Network panel, and you will see no request carrying your photo.' } },
  ],
};

const h2 = { fontSize: '21px', fontWeight: 700, margin: '36px 0 14px' } as const;

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: '#101024', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Images for Squarespace","item":"https://www.compressto20kb.com/compress-for-squarespace"}]}' }} />

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '44px 18px 24px' }}>
        <h1 style={{ fontSize: 'clamp(25px,4vw,36px)', fontWeight: 800, lineHeight: 1.25, marginBottom: '14px' }}>
          Compress Images for Squarespace <span style={{ color: '#818cf8' }}>Without a Plugin</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.72, marginBottom: '30px' }}>
          Drag a photo in here, set the file size you want the finished upload to stay under, and take it back out again — the whole job happens on your own machine. Useful when you have a folder of stock or client photography going into a page and would rather decide the weight before it lands on the site.
        </p>

        <CompressorTool initialTargetKB={300} />

        <h2 style={h2}>The Upload Is the Ceiling</h2>
        <p style={{ fontSize: '14px', lineHeight: 1.75, opacity: 0.72, marginBottom: '14px' }}>
          Site builders generate several sizes from the image you give them, which is why a full-resolution upload can quietly add weight to every template breakpoint. Compressing afterwards means re-uploading anyway; compressing first means the versions built from your file start from a sane baseline.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '30px' }}>
          {[
            ['Match the placement, not the camera', 'A section background shown full-width on a laptop needs roughly 1900–2500 px across. A blog card in a three-up grid needs a few hundred. Exporting one giant file for both is how pages get heavy.'],
            ['Set the ceiling in Target KB Mode', 'Type the number the file must stay under. The tool steps the quality down until the encode fits, so a 300 target never returns a 320 KB file.'],
            ['Look at the busiest image before uploading', 'Text over a photo, fine borders, product labels — those break first. If they go soft, raise the ceiling a little rather than re-uploading a blurry file.'],
            ['Keep one naming pattern', 'Batch output downloads as a ZIP. Naming the files for the page they belong to before uploading saves you from replacing the wrong image later.'],
          ].map(([t, d]) => (
            <div key={t} style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.22)', borderRadius: '10px', padding: '14px 18px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '5px', color: '#c7d2fe' }}>{t}</div>
              <div style={{ fontSize: '13px', opacity: 0.72, lineHeight: 1.65 }}>{d}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Where Site Weight Usually Hides</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: 1.9, opacity: 0.72, marginBottom: '30px' }}>
          <li>Full-bleed hero photos uploaded at camera resolution, then displayed at a fraction of that width.</li>
          <li>Retina exports at 3× when 2× is indistinguishable on the actual screen.</li>
          <li>Several near-identical images used as section backgrounds, each carrying its own megabytes.</li>
          <li>Gallery pages built from originals instead of resized, compressed derivatives.</li>
          <li>PNG used for photographs, where JPEG or WebP would be a fraction of the size at the same look.</li>
        </ul>

        <h2 style={h2}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '34px' }}>
          {faqSchema.mainEntity.map(f => (
            <details key={f.name} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '14px 18px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 700, fontSize: '14px', color: '#a5b4fc', listStyle: 'none' }}>{f.name}</summary>
              <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '10px', lineHeight: 1.65 }}>{f.acceptedAnswer.text}</div>
            </details>
          ))}
        </div>

        <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '26px' }}>
          Squarespace changes its image handling and storage limits over time, so check the current figures on{' '}
          <a href="https://www.squarespace.com/" target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#a5b4fc' }}>squarespace.com</a>{' '}
          before you rebuild a site-wide image workflow. What this page controls is the file size going in.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '10px', paddingBottom: '48px' }}>
          {[
            { href: '/compress-for-shopify', label: '🛍️ Shopify images' },
            { href: '/compress-for-wordpress', label: '🌐 WordPress images' },
            { href: '/compress-for-pinterest', label: '📌 Pinterest images' },
            { href: '/compress-to-500kb', label: '📦 Compress to 500KB' },
            { href: '/compress-to-100kb', label: '📄 Compress to 100KB' },
            { href: '/', label: '🏠 All-purpose compressor' },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>{label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
