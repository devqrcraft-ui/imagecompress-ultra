import type { Metadata } from 'next';
import CompressorTool from '@/app/compressor-tool';

export const metadata: Metadata = {
  title: 'Compress Image for WhatsApp — Send Sharp, Load Fast | Free, No Upload',
  description: 'WhatsApp re-encodes every photo you send. Prepare the file yourself so it survives the trip. Photos, profile pictures and documents — free and in-browser.',
  keywords: 'compress image for whatsapp, whatsapp photo quality, reduce image size whatsapp, whatsapp hd photo, whatsapp profile picture size',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-whatsapp' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-whatsapp' },
};

const faq: [string, string][] = [
  ['Does WhatsApp compress the photos I send?', 'Yes. A photo sent through the normal gallery picker is re-encoded by WhatsApp before it leaves your phone, and the HD option sends a higher-resolution version than the default. The practical consequence: the file you hand the app is what it has to work from, so a well-prepared source survives better than a huge raw one.'],
  ['How do I send a photo without WhatsApp resizing it at all?', 'Send it as a document rather than as a photo. That passes the file through as a file — exact bytes, exact resolution — which is what you want when the recipient needs the original, and what you do not want for a casual snapshot.'],
  ['What size should a WhatsApp profile picture be?', 'WhatsApp’s own help suggests an image at least 192 pixels in height and width for a profile picture so it does not look poor, and it is displayed as a small circle. A square source around 400–640px, compressed under 100KB, is more than enough.'],
  ['My photo arrives blurry — is compressing it beforehand going to help?', 'It can help at the margins, but the biggest wins are upstream: a photo already near the resolution you want, not already crushed by a previous round-trip, and not a screenshot of a screenshot. Each WhatsApp or messenger re-encode throws information away, so avoid stacking generations.'],
  ['Will this tool upload the images on my phone?', 'No. The image is decoded and re-encoded inside this browser tab and never sent to our server, which matters more here than anywhere — chat screenshots are private by nature.'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Image for WhatsApp","item":"https://www.compressto20kb.com/compress-for-whatsapp"}]}' }} />

      <div style={{ background: '#f6fbf7', color: '#1f2e26', fontFamily: 'system-ui,sans-serif' }}>
        <div style={{ background: '#075e54', color: '#fff', padding: '34px 20px 30px' }}>
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ fontSize: '14px', opacity: 0.95, marginBottom: '10px' }}>
              <a href="/" style={{ color: '#c7f0e5', textDecoration: 'none' }}>Home</a> → Compress for WhatsApp
            </div>
            <h1 style={{ fontSize: 'clamp(23px,4vw,33px)', fontWeight: 800, margin: '0 0 12px' }}>
              Compress Photos For WhatsApp Without A Second Round Of Damage
            </h1>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: 0, opacity: 0.92, maxWidth: '760px' }}>
              Every photo you send through the gallery picker is re-encoded by WhatsApp before it leaves your phone. You cannot stop that step. What you control is what arrives at it — and a file that is already the right size, cleanly encoded, comes out of the other side looking far better than a raw multi-megapixel original that gets squeezed hard.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '26px 20px 34px' }}>
          <CompressorTool initialTargetKB={200} />
        </div>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#075e54', marginBottom: '14px' }}>Three Ways To Send, Three Different Results</h2>
          <div style={{ border: '1px solid #d7e8de', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
            {[
              ['Standard gallery send', 'WhatsApp’s default re-encode — smallest and fastest for the recipient, most aggressive on detail.', '#dcfce7'],
              ['HD send', 'A higher-resolution version of the same trip. Better detail, larger download, still not the original file.', '#e0f2fe'],
              ['Send as document', 'The file passes through unchanged — exact bytes and exact pixels. Use this when someone needs the real original.', '#fef9c3'],
            ].map(([t, d, bg], i) => (
              <div key={t} style={{ display: 'flex', gap: '16px', padding: '16px 18px', background: bg, borderBottom: i === 2 ? 'none' : '1px solid #d7e8de' }}>
                <div style={{ minWidth: '150px', fontWeight: 700, fontSize: '15px', color: '#134e4a' }}>{t}</div>
                <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#33503f' }}>{d}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: '#5c7a68', marginTop: '12px' }}>
            Profile-picture guidance is from{' '}
            <a href="https://faq.whatsapp.com/453914586839706" rel="nofollow noopener noreferrer" target="_blank" style={{ color: '#075e54' }}>WhatsApp Help — How to send media, contacts, or location</a>
            {' '}(checked October 2026). WhatsApp does not publish a per-photo spec sheet, so the sending options above describe how the app behaves rather than fixed numbers.
          </p>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#075e54', marginBottom: '12px' }}>What To Do Before You Pick “Send Photo”</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: 1.95, fontSize: '15.5px', color: '#33503f' }}>
            <li><strong>Crop in the camera or gallery first.</strong> WhatsApp will not rescue composition, and a crop after a re-encode costs another generation.</li>
            <li><strong>Bring the file near the size you mean</strong> — around 1600–2000px for an HD photo — then compress to a ceiling instead of shipping a 9MB export.</li>
            <li><strong>Use Target KB Mode, not a random quality slider.</strong> Set 200KB for a normal photo, 500KB when the detail matters, and take the best quality that fits.</li>
            <li><strong>Avoid forwarding compressed photos onward.</strong> A picture that has already been through two messenger round-trips cannot be un-mushed; re-export from the source when it matters.</li>
            <li><strong>Need the original? Send a document.</strong> Then no compression step is required at all.</li>
          </ol>
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#075e54', marginBottom: '12px' }}>Frequently Asked Questions</h2>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: '#fff', border: '1px solid #d7e8de', borderRadius: '12px', padding: '14px 17px', marginBottom: '8px' }}>
              <summary style={{ fontWeight: 700, fontSize: '15.5px', cursor: 'pointer', color: '#075e54' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', lineHeight: 1.75, color: '#33503f' }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 52px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#075e54', marginBottom: '12px' }}>Related Tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              ['/', 'Home — Image Compressor'],
              ['/blog/compress-image-on-iphone', 'Compress on iPhone'],
              ['/image-size-checker-online', 'Check image size'],
              ['/compress-for-instagram', 'For Instagram'],
              ['/compress-for-email', 'For Email'],
              ['/compress-to-500kb', 'Compress to 500KB'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: '999px', background: '#dcf2e7', color: '#075e54', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
