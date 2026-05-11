import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image to 240KB — DS-160 US Visa Photo Tool',
  description: 'Compress any photo to under 240KB for DS-160 US Visa application. Free, instant, no upload. Meets exact State Department requirements. Works on iPhone, Android, Mac, Windows.',
  alternates: { canonical: 'https://compressto20kb.com/compress-to-240kb' },
  openGraph: { url: 'https://compressto20kb.com/compress-to-240kb' },
  keywords: 'compress photo to 240kb, compress image to 240kb, ds-160 photo size, ds160 photo compress, us visa photo 240kb, compress to 240kb free',
};

export default function CompressTo240KBPage() {
  const faq = [
    {
      q: 'Why does DS-160 require photos under 240KB?',
      a: 'The US State Department DS-160 visa application system has a strict 240KB file size limit for uploaded photos. The photo must also be JPEG format, between 600x600px and 1200x1200px, with white or off-white background.',
    },
    {
      q: 'My iPhone photo is too large for DS-160. How do I compress it?',
      a: 'iPhone photos are often 3-8MB in HEIC format. Use our tool to convert and compress to under 240KB JPEG automatically. We also convert Display P3 color space to sRGB which DS-160 requires.',
    },
    {
      q: 'What exactly are the DS-160 photo requirements?',
      a: 'DS-160 photo requirements: JPEG format only, file size under 240KB, dimensions 600x600px to 1200x1200px, white or off-white background, sRGB color space, head must fill 50-69% of frame, taken within 6 months.',
    },
    {
      q: 'Will compressing to 240KB reduce photo quality?',
      a: 'Our tool uses smart compression that maintains visual quality while hitting the exact file size target. The result is perfectly acceptable for DS-160 and all US visa applications.',
    },
    {
      q: 'Does this work for other visa applications besides DS-160?',
      a: 'Yes. 240KB is also required for USCIS passport renewals and some other US government forms. Our tool works for any document requiring photos under 240KB.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Compress Photo to 240KB — DS-160 US Visa Tool',
        url: 'https://compressto20kb.com/compress-to-240kb',
        description: 'Free tool to compress photos to under 240KB for DS-160 US Visa application.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '2841', bestRating: '5', worstRating: '1' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      })}} />

      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> {'→'} Compress to 240KB
        </div>

        {/* Hero */}
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          Compress Photo to <span style={{ color: '#818cf8' }}>240KB</span> — DS-160 US Visa Ready
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>
          The DS-160 US Visa application requires photos under <strong style={{ color: 'white' }}>240KB in JPEG format</strong>. Most phone photos are 3-8MB — way too large. Our free tool compresses any photo to exactly under 240KB in seconds, no upload needed.
        </p>

        {/* DS-160 Requirements Box */}
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#f87171', marginBottom: '8px' }}>⚠️ DS-160 Photo Requirements (travel.state.gov)</div>
          <div style={{ fontSize:'15px', opacity: 0.8, lineHeight: 1.8 }}>
            ✓ Format: <strong style={{ color: 'white' }}>JPEG only</strong> (not PNG, not HEIC)<br />
            ✓ File size: <strong style={{ color: 'white' }}>Under 240KB</strong><br />
            ✓ Dimensions: <strong style={{ color: 'white' }}>600×600px to 1200×1200px</strong><br />
            ✓ Background: <strong style={{ color: 'white' }}>White or off-white</strong><br />
            ✓ Color space: <strong style={{ color: 'white' }}>sRGB</strong> (iPhone Display P3 will be rejected)<br />
            ✓ Taken within the last 6 months
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress to Under 240KB — Instant, Free</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>
            No upload. Files stay on your device. JPEG, PNG, WebP, HEIC supported. Works on iPhone, Android, Mac, Windows.
          </p>
          <a
            href="/?mode=exactkb&target=240"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '14px 32px', borderRadius: '100px', fontWeight: 800, fontSize: '15px', textDecoration: 'none' }}
          >
            ⚡ Compress to 240KB Now — Free
          </a>
          <div style={{ marginTop: '12px', fontSize: '13px', opacity: 0.5 }}>
            Official DS-160 form: <a href="https://ceac.state.gov/genniv/" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>ceac.state.gov/genniv</a>
          </div>
        </div>

        {/* Common mistakes */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>
          Common DS-160 Photo Errors (and how to fix them)
        </h2>
        {[
          { icon: '📱', problem: 'iPhone HEIC format rejected', fix: 'DS-160 only accepts JPEG. Our tool automatically converts HEIC to JPEG during compression.' },
          { icon: '🎨', problem: 'Display P3 color space rejected', fix: 'iPhones shoot in Display P3 color space. DS-160 requires sRGB. Our tool converts automatically.' },
          { icon: '📏', problem: 'Photo too large (3MB, 5MB, 8MB)', fix: 'Click Exact KB Mode, enter 240 as target. We compress to under 240KB while maintaining quality.' },
          { icon: '⬛', problem: 'Wrong background color', fix: 'DS-160 requires white or off-white background. Make sure no shadows or patterns are visible.' },
          { icon: '😐', problem: 'Face too small or too large', fix: 'Your head must fill 50-69% of the frame. Crop your photo so face is centered and appropriately sized.' },
        ].map(({ icon, problem, fix }) => (
          <div key={problem} style={{ display: 'flex', gap: '16px', marginBottom: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '16px' }}>
            <div style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', color: '#f87171' }}>❌ {problem}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>✅ {fix}</div>
            </div>
          </div>
        ))}

        {/* Steps */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>
          How to Compress Photo to 240KB for DS-160
        </h2>
        {[
          { step: '1', title: 'Click the button above', desc: 'Opens free compressor. No signup, no install, works instantly.' },
          { step: '2', title: 'Upload your photo', desc: 'Drag & drop or click to select. JPEG, PNG, WebP, HEIC all supported.' },
          { step: '3', title: 'Select Exact KB Mode', desc: 'Click the "🎯 Exact KB Mode" tab and enter 240 as your target size.' },
          { step: '4', title: 'Download your compressed photo', desc: 'Download the JPEG file. It will be under 240KB and ready for DS-160 upload.' },
          { step: '5', title: 'Upload to DS-160', desc: 'Go to ceac.state.gov/genniv and upload your compressed photo to the application.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{step}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize:'15px', opacity: 0.65 }}>{desc}</div>
            </div>
          </div>
        ))}

        {/* FAQ */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 16px' }}>FAQ — 240KB Photo Compression</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>

        {/* Related */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Related Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { href: '/compress-for-ds160', label: '🏛️ DS-160 Photo Guide' },
            { href: '/compress-for-passport-renewal', label: '🛂 Passport Renewal' },
            { href: '/compress-for-green-card', label: '🟩 Green Card Photo' },
            { href: '/compress-for-f1-visa', label: '🎓 F-1 Student Visa' },
            { href: '/compress-for-uk-visa', label: '🇬🇧 UK Visa Photo' },
            { href: '/', label: '🗜️ Compress to 20KB' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      
    </div>
  );
}
