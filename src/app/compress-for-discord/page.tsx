import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image for Discord — Avatars, Banners, Uploads',
  description: 'Shrink Discord images so they upload fast and still look sharp at the size the app displays them. Avatars, banners, server icons, posted media.',
  keywords: 'compress image for discord, discord avatar size, discord banner size, discord image upload limit, reduce discord image file size',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-discord' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-discord' },
};

const faq: [string, string][] = [
  ['What is the Discord upload limit?', 'Discord raised the free attachment limit from 10MB to 20MB in August 2026, and their File Attachments FAQ notes the check is now consistent between desktop and mobile. Nitro tiers allow more. So a compressed image is not about clearing the limit any more — it is about loading quickly in a channel full of them.'],
  ['How big should a Discord avatar or server icon be?', 'Both are displayed very small — the icon you see in a chat list is a few dozen pixels across, and the profile view only slightly larger. Work at a square source around 512px so the crop stays clean at every size the app uses, then compress; anything above 100KB for that is wasted.'],
  ['Why does my posted image look worse in the channel?', 'Discord renders a compact preview in the message stream and only shows full resolution when someone clicks it. A wide screenshot or art piece also gets cropped in some embeds. Test by looking at the preview size you actually expect people to see, not the full-size click-through.'],
  ['Which format for Discord?', 'JPEG for photos and screenshots with photographic content, PNG when the image is flat graphics, chat text or needs transparency, GIF for animation. WebP is smaller for stills, but JPEG is the safe default when you are not sure how it will be re-hosted.'],
  ['Does this tool upload my Discord images?', 'No — decoding and re-encoding happen in your browser tab, so a private screenshot or an ID-like image never reaches a server. Open DevTools with the Network tab visible and compress something to confirm.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for Discord","item":"https://www.compressto20kb.com/compress-for-discord"}]}' }} />

      <div style={{ background: '#101323', color: '#d7dbf0', fontFamily: "'gg sans',Inter,system-ui,sans-serif", minHeight: '100vh' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 20px 14px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(88,101,242,0.14)', border: '1px solid rgba(88,101,242,0.4)', borderRadius: '999px', padding: '5px 14px', fontSize: '13px', color: '#aab3ff', marginBottom: '16px' }}>
            For avatars, server icons, banners &amp; posted media
          </div>
          <div style={{ fontSize: '14px', opacity: 1, marginBottom: '10px' }}>
            <a href="/" style={{ color: '#8b93ff', textDecoration: 'none' }}>Home</a> → Compress for Discord
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,34px)', fontWeight: 800, margin: '0 0 12px', color: '#fff', lineHeight: 1.25 }}>
            Compress Images For <span style={{ color: '#8b93ff' }}>Discord</span>
          </h1>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 10px', color: 'rgba(215,219,240,0.8)' }}>
            Discord is a wall of small images. Nobody zooms your server icon, and a channel full of 4MB screenshots makes the whole thing crawl on a phone. The free attachment limit moved to 20MB in 2026, so headroom is not the issue any more — being considerate to everyone scrolling your feed is.
          </p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'rgba(215,219,240,0.8)' }}>
            Everything below is encoded on your machine. No bot, no upload, no account.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '16px 20px 34px' }}>
          <CompressorTool initialTargetKB={100} />
        </div>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 34px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#aab3ff', marginBottom: '16px' }}>Match The Size To Where It Is Seen</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '12px' }}>
            {[
              ['Server icon', 'Square, ~512px source', '≤100KB', 'Shown at tens of pixels — the crop and contrast matter, the bytes do not.'],
              ['Profile avatar', 'Square, ~512px source', '≤100KB', 'Circular crop: keep the face clear of the edges or it gets clipped.'],
              ['Banner / cover', 'Wide, per your profile or server', '200–400KB', 'Top and bottom get hidden behind the avatar and name on some clients.'],
              ['Posted media', 'Whatever the content needs', '200–800KB', 'A preview is what people see; heavy files make the channel slow for everyone.'],
            ].map(([t, src, kb, note]) => (
              <div key={t} style={{ background: 'rgba(88,101,242,0.07)', border: '1px solid rgba(88,101,242,0.2)', borderRadius: '12px', padding: '15px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '6px' }}>{t}</div>
                <div style={{ fontSize: '13px', color: '#8b93ff', marginBottom: '8px', fontFamily: 'ui-monospace,monospace' }}>{src}</div>
                <div style={{ fontSize: '13px', color: '#6ee7b7', fontWeight: 700, marginBottom: '8px' }}>{kb}</div>
                <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(215,219,240,0.65)' }}>{note}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.9, marginTop: '14px' }}>
            Attachment limit from{' '}
            <a href="https://support.discord.com/hc/en-us/articles/25444343291031-File-Attachments-FAQ" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#b9c0ff' }}>Discord Help — File Attachments FAQ</a>
            {' '}(checked October 2026). Display sizes and the KB numbers are our practical guidance; Discord does not publish a per-slot spec for every surface.
          </p>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 34px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#aab3ff', marginBottom: '12px' }}>Screenshots: The One Worth Resizing First</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(215,219,240,0.78)', marginBottom: '10px' }}>
            A screenshot off a high-DPI display is often 3000–5000px wide. In a chat preview it will be shown at a fraction of that, so the file is mostly pixels nobody receives. Halve the width first, then compress, and you usually get an image that reads identically in the stream at a quarter the size.
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.9, fontSize: '15px', color: 'rgba(215,219,240,0.78)' }}>
            <li>Crop to the window you mean before doing anything else — dead space is pure waste.</li>
            <li>Text-heavy graphic? PNG can actually stay smaller and sharper than JPEG at this size.</li>
            <li>Photo or game frame? JPEG or WebP, target 300–500KB.</li>
          </ul>
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 34px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#aab3ff', marginBottom: '12px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px', padding: '13px 16px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#c7ccff' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.7, color: 'rgba(215,219,240,0.72)' }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#aab3ff', marginBottom: '12px' }}>Related</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/', 'Home — Image Compressor'],
              ['/compress-for-twitter', 'For Twitter/X'],
              ['/compress-for-whatsapp', 'For WhatsApp'],
              ['/compress-to-100kb', 'Compress to 100KB'],
              ['/png-to-jpg', 'PNG to JPG'],
              ['/bulk-image-compressor', 'Bulk + ZIP'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 15px', borderRadius: '8px', background: 'rgba(88,101,242,0.1)', border: '1px solid rgba(88,101,242,0.25)', color: '#aab3ff', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
