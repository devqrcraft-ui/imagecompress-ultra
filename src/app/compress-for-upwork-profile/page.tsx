
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best photo size for job applications?","acceptedAnswer":{"@type":"Answer","text":"Most job portals (LinkedIn, Indeed, Workday, Greenhouse) accept profile photos under 5MB. For best display, use a square JPEG at 400-800px, under 200KB. A well-compressed photo loads faster and looks professional on any device."}},{"@type":"Question","name":"How do I compress a photo for job applications?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select JPEG format, switch to Exact KB Mode, type 200, and click Compress. Download the optimized file and upload directly to the job portal. All processing runs in your browser — your photo never leaves your device."}},{"@type":"Question","name":"Is it safe to compress resume photos online?","acceptedAnswer":{"@type":"Answer","text":"Yes — with this tool. All compression runs locally in your browser. Your photo is never uploaded to any server — safe for professional headshots and personal photos."}},{"@type":"Question","name":"What format should I use for job application photos?","acceptedAnswer":{"@type":"Answer","text":"JPEG is the safest format for job portals — universally accepted by all HR systems including Workday, Greenhouse, and Indeed. Use PNG only for logos or graphics."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Photo for Upwork Profile — Free Online Tool',
  description: 'Compress profile photo for Upwork freelancer profile. Under 5MB, square format.',
  alternates: { canonical: 'https://compressto20kb.com/compress-for-upwork-profile' },
  openGraph: { url: 'https://compressto20kb.com/compress-for-upwork-profile' },
  keywords: 'compress photo for upwork-profile, Upwork Profile profile photo size, Upwork Profile photo requirements',
};

export default function Page() {
  const faq = [
    { q: 'What size should my Upwork Profile profile photo be?', a: 'Upwork profile photo: JPG or PNG, under 5MB, 400×400px square format. Clear professional headshot on light background.' },
    { q: 'How do I compress my photo for Upwork Profile?', a: 'Click the button above, upload your photo, select Exact KB Mode, enter 5120 as target size and download.' },
    { q: 'What format does Upwork Profile accept for profile photos?', a: 'JPEG and PNG are accepted. We recommend JPEG for smaller file sizes.' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photo for Upwork Profile","item":"https://compressto20kb.com/compress-for-upwork-profile"}]}' }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          💼 Compress Photo for <span style={{ color: '#818cf8' }}>Upwork Profile</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>Upwork profile photo: JPG or PNG, under 5MB, 400×400px square format. Clear professional headshot on light background.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Max File Size', value: '5120KB', icon: '📦', color: '#4ade80' },
            { label: 'Dimensions', value: '400×400px', icon: '📐', color: '#818cf8' },
            { label: 'Format', value: 'JPEG / PNG', icon: '🖼️', color: '#fbbf24' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: '13px', opacity: 0.5, textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '14px', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress for Upwork Profile</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device.</p>
          <a href={"/?mode=exactkb&target=5120"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Compress for Upwork Profile
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ — Upwork Profile Photo</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {faq.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px', color: '#a5b4fc' }}>Q: {item.q}</div>
              <div style={{ fontSize:'15px', opacity: 0.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
