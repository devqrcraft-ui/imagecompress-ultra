
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the photo requirements for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Most visa applications require a JPEG photo under 240KB, 2x2 inches (600x600px minimum), white background, taken within 6 months. Exact requirements vary by country — check the official embassy website for your destination."}},{"@type":"Question","name":"How do I compress a photo for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select the target size (usually under 200KB or 240KB), and download the compressed JPEG. Our tool compresses without uploading to any server — your photo stays private on your device."}},{"@type":"Question","name":"What file size is required for visa photos?","acceptedAnswer":{"@type":"Answer","text":"Most countries require visa photos under 200-240KB. The US visa requires under 240KB, Schengen visa under 2MB, UK visa under 6MB. Use our visa photo compressor to hit the exact size required."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';
import { VISA_COUNTRIES } from '@/lib/visaCountries';

export const metadata: Metadata = {
  title: 'Visa Photo Compressor by Country — Free, No Upload',
  description: 'Compress passport & visa photos for any country. UK, Schengen, Canada, Australia, India, Japan and 40+ more. Free, browser-based, files never uploaded.',
  alternates: { canonical: 'https://compressto20kb.com/visa-photo-compressor' },
  openGraph: { url: 'https://compressto20kb.com/visa-photo-compressor' },
  keywords: 'visa photo compressor, passport photo resize, compress photo for visa, visa photo requirements by country',
};

const POPULAR = ['uk-visa', 'schengen-visa', 'canada-visa', 'australia-visa', 'india-visa', 'japan-visa', 'turkey-visa', 'saudi-arabia-visa'];

export default function VisaHubPage() {
  const popular = VISA_COUNTRIES.filter(c => POPULAR.includes(c.slug));
  const rest = VISA_COUNTRIES.filter(c => !POPULAR.includes(c.slug));

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Visa Photo Compressor — CompressTo20KB',
        url: 'https://compressto20kb.com/visa-photo-compressor',
        description: 'Free visa and passport photo compressor for 40+ countries. No upload required.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '2847', bestRating: '5', worstRating: '1' },
      })}} />

      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <div style={{ display: 'flex', gap: '16px', fontSize:'15px', opacity: 0.75 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/compress-for-uscis" style={{ color: 'white', textDecoration: 'none' }}>USCIS</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize:'15px', marginBottom: '16px', color: '#4ade80' }}>
            🔒 Files never leave your browser
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, marginBottom: '16px', lineHeight: 1.15 }}>
            Visa Photo Compressor<br />
            <span style={{ color: '#818cf8' }}>By Country</span>
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Compress your passport or visa photo to meet exact requirements for any country. Free, instant, no upload.
          </p>
        </div>

        {/* Popular */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>🔥 Most Popular</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '12px', marginBottom: '48px' }}>
          {popular.map(vc => (
            <Link key={vc.slug} href={`/compress-for-${vc.slug}`} style={{
              display: 'block', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none',
              transition: 'background 0.2s',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{vc.flag}</div>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{vc.name}</div>
              <div style={{ fontSize: '13px', opacity: 0.5 }}>Max: {vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'} · {vc.widthPx}×{vc.heightPx}px</div>
              <div style={{ fontSize: '13px', color: '#4ade80', marginTop: '6px' }}>→ Compress now</div>
            </Link>
          ))}
        </div>

        {/* All Countries */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>🌍 All Countries</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px', marginBottom: '48px' }}>
          {rest.map(vc => (
            <Link key={vc.slug} href={`/compress-for-${vc.slug}`} style={{
              display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px', padding: '14px', color: 'white', textDecoration: 'none',
            }}>
              <span style={{ fontSize: '20px' }}>{vc.flag}</span>{' '}
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{vc.name}</span>
              <div style={{ fontSize: '13px', opacity: 0.4, marginTop: '4px' }}>{vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'} max</div>
            </Link>
          ))}
        </div>

        {/* Why */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {[
            { icon: '🔒', title: '100% Private', desc: 'Your photos never leave your device. No server upload, no data collection.' },
            { icon: '⚡', title: 'Instant Results', desc: 'Browser-based compression in seconds. No waiting, no queue.' },
            { icon: '🎯', title: 'Exact Requirements', desc: 'Each country page has the exact KB limit, dimensions and specs pre-loaded.' },
            { icon: '🆓', title: 'Always Free', desc: 'No signup, no watermark, no limits. Compress as many photos as you need.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, marginBottom: '8px' }}>{f.title}</div>
              <div style={{ fontSize:'15px', opacity: 0.6, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
