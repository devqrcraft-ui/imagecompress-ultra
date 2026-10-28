import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress WooCommerce Product Images — Smaller Files, No Upload',
  description: 'Shrink WooCommerce product photos in your browser before they hit the media library. Pick a KB ceiling, keep JPEG or WebP. No upload, no plugin, no signup.',
  keywords: 'compress woocommerce images, woocommerce product image size, reduce image size woocommerce, woocommerce image optimization without plugin, webp for woocommerce',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-woocommerce' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-woocommerce' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I compress WooCommerce product images without a plugin?', acceptedAnswer: { '@type': 'Answer', text: 'Add the photos here, choose WebP or JPEG, set a KB ceiling in Target KB Mode, compress and download. Then upload the finished files to the WordPress media library. The work happens in your browser, so there is no plugin to install and no image leaving your device.' } },
    { '@type': 'Question', name: 'What file size should a WooCommerce product image be?', acceptedAnswer: { '@type': 'Answer', text: 'Start from how the image is displayed, not from a fixed number. A gallery thumbnail shown at about 300 px wide does not need a 3000 px upload; exporting at roughly twice the display width and compressing to a few hundred kilobytes usually keeps detail sharp while cutting weight. Your own store is the real test — measure the page, then lower the ceiling until the weight drops and the photos still look right.' } },
    { '@type': 'Question', name: 'Does WordPress accept WebP uploads?', acceptedAnswer: { '@type': 'Answer', text: 'WebP has been an accepted upload format since WordPress 5.8, and WooCommerce uses the standard media library, so a WebP file from this tool behaves like any other image. If your host or theme still expects JPEG, choose JPEG here instead.' } },
    { '@type': 'Question', name: 'Do my product photos get uploaded anywhere?', acceptedAnswer: { '@type': 'Answer', text: 'No. Decoding and re-encoding happen in this browser tab. Open DevTools, switch to the Network tab and compress an image — you will not see a request carrying your file.' } },
  ],
};

const card = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px 18px' } as const;
const h2 = { fontSize: '21px', fontWeight: 700, margin: '36px 0 14px', color: '#ffffff' } as const;

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress WooCommerce Product Images","item":"https://www.compressto20kb.com/compress-for-woocommerce"}]}' }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          Compress <span style={{ color: '#818cf8' }}>WooCommerce Product Images</span> Before You Upload Them
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.72, marginBottom: '28px' }}>
          Store photos usually arrive out of a camera or a supplier sheet several megabytes each, then get loaded straight into the media library at full size. Compressing them here first means the file that reaches WordPress is already the weight you want — no plugin, no subscription, and no image leaving your device.
        </p>

        <CompressorTool initialTargetKB={200} />

        <h2 style={h2}>Where Store Page Weight Actually Comes From</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '10px' }}>
          {[
            ['Oversized uploads', 'A photo displayed at 300 px and uploaded at 3000 px carries a hundred times the pixels the browser can show. Resize to about twice the display width and the byte count falls before compression even starts.'],
            ['Count of files, not just size', 'A gallery of twenty 150 KB images is heavier than one 300 KB hero. Fewer, correctly sized files beat aggressive compression on every image.'],
            ['Format choice', 'WebP typically carries the same photo in fewer bytes than JPEG, and WordPress has accepted WebP uploads since version 5.8. JPEG stays the safe pick when a theme or host expects it.'],
            ['Lazy loading and dimensions', 'If the page does not reserve width and height, images shift layout while loading. That is a theme setting, not a compression problem — but a correctly sized file makes it easier to fix.'],
          ].map(([t, d]) => (
            <div key={t} style={card}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>{t}</div>
              <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.6 }}>{d}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>A Practical Size Budget Per Image Type</h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.7, marginBottom: '14px' }}>
          These are starting points for the file you hand to the media library, not rules published by WooCommerce. Set them in Target KB Mode, then check the storefront on a phone and adjust.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
                {['Image', 'Upload at', 'Starting ceiling', 'Format'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 12px', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Gallery thumbnail', '2× the display width', '80–150 KB', 'WebP, or JPEG'],
                ['Main product photo', '2× the display width', '200–400 KB', 'WebP or JPEG'],
                ['Category banner', 'Full width of the banner', '300–500 KB', 'WebP or JPEG'],
                ['Logo and icons', 'Native size, or 2× on retina', '20–80 KB', 'PNG or WebP'],
                ['Supplier spec sheet', '1400–1800 px wide', '250–450 KB', 'JPEG or WebP'],
              ].map((row, i) => (
                <tr key={row[0]} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '10px 12px', color: j === 0 ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.62)', fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Working Through a Catalogue</h2>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
          {[
            ['1', 'Export at display size first', 'Crop and resize to roughly twice the width the theme shows. That single step usually removes more weight than any quality setting.'],
            ['2', 'Batch through this tool', 'Add up to 50 files, keep one target ceiling and one format, and compress the set in a pass. Product photos shot in the same session need the same settings.'],
            ['3', 'Check the worst-looking file', 'Open the before/after view on the busiest image — patterned fabric, fine text on a label. If it breaks up, raise the ceiling rather than the format gymnastics.'],
            ['4', 'Upload and measure the page', 'Put the files in the media library, then load a product page on a phone. If it still feels heavy, the next win is usually fewer gallery images, not smaller ones.'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px 20px' }}>
              <div style={{ flexShrink: 0, width: '34px', height: '34px', borderRadius: '50%', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{t}</div>
                <div style={{ fontSize: '14px', opacity: 0.68, lineHeight: 1.6 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Questions Store Owners Ask</h2>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '36px' }}>
          {faqSchema.mainEntity.map(f => (
            <details key={f.name} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '14px 18px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 700, fontSize: '14px', color: '#a5b4fc', listStyle: 'none' }}>{f.name}</summary>
              <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '10px', lineHeight: 1.65 }}>{f.acceptedAnswer.text}</div>
            </details>
          ))}
        </div>

        <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, marginBottom: '30px' }}>
          Platform-specific limits change with each WooCommerce, WordPress and theme release — read the current guidance on{' '}
          <a href="https://woocommerce.com/" target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#a5b4fc' }}>woocommerce.com</a>
          {' '}and{' '}
          <a href="https://wordpress.org/documentation/" target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#a5b4fc' }}>wordpress.org/documentation</a>
          {' '}before rebuilding your image sizes. This page is about the step in front of that: the file you upload.
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '10px', paddingBottom: '48px' }}>
          {[
            { href: '/compress-for-shopify', label: '🛍️ Compress for Shopify' },
            { href: '/compress-for-etsy', label: '🎨 Compress for Etsy' },
            { href: '/compress-for-amazon', label: '📦 Compress for Amazon' },
            { href: '/compress-for-wordpress', label: '🌐 Compress for WordPress' },
            { href: '/compress-to-100kb', label: '📄 Compress to 100KB' },
            { href: '/', label: '🏠 All-purpose compressor' },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>{label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
