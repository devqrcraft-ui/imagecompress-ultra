
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What photo size is required for this form?","acceptedAnswer":{"@type":"Answer","text":"Most government and exam portals require JPEG photos under 50KB or 100KB, at least 200x200px. Always check the official portal for exact requirements before uploading."}},{"@type":"Question","name":"How do I compress a photo for this portal?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, switch to Exact KB Mode, type your target (e.g. 50 for 50KB), select JPEG format, and click Compress. All processing runs in your browser — your photo never leaves your device."}},{"@type":"Question","name":"Is it safe to compress government form photos online?","acceptedAnswer":{"@type":"Answer","text":"Yes — with this tool. All compression runs locally in your browser. Your photo is never uploaded to any server. This is essential for sensitive government and immigration documents."}},{"@type":"Question","name":"Can I compress multiple photos at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images at once, set your target size, and compress all at once. Download individually or as a ZIP. Free, no signup required."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Photo for Common App College — Free Online Tool',
  description: 'Compress photo for Common App college application. Under 5MB, JPEG or PNG.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-common-app' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-for-common-app' },
  keywords: 'compress photo for common-app, Common App College photo requirements, Common App College photo size',
};

export default function Page() {
  const faq = [
    { q: 'What are the photo requirements for Common App College?', a: 'Common App photo: JPEG or PNG, under 5MB. Used for US college applications. Professional or school photo recommended.' },
    { q: 'How do I compress my photo for Common App College?', a: 'Click the button above, select Exact KB Mode, enter 5120 as target and download your compressed photo.' },
    { q: 'Is this tool free?', a: 'Yes, completely free. No signup required. Your photo never leaves your device.' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Photo for Common App College","item":"https://www.compressto20kb.com/compress-for-common-app"}]}' }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
          🎓 Compress Photo for <span style={{ color: '#818cf8' }}>Common App College</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.7, marginBottom: '32px' }}>Common App photo: JPEG or PNG, under 5MB. Used for US college applications. Professional or school photo recommended.</p>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Compress for Common App College — Under 5120KB</div>
          <p style={{ fontSize:'15px', opacity: 0.65, marginBottom: '16px' }}>No upload. Files stay on your device. JPEG, PNG, WebP supported.</p>
          <a href={"/?mode=exactkb&target=5120"} style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Open Common App College Photo Compressor
          </a>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>FAQ — Common App College Photo Requirements</h2>
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
