import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Privacy Policy — CompressTo20KB',
  description: 'Privacy Policy for CompressTo20KB. We never upload, store, or share your images. All processing happens in your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/privacy-policy' },
  openGraph: { url: 'https://compressto20kb.com/privacy-policy' },
  robots: { index: true, follow: false },
};
export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 60px', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.45, fontSize:'15px', marginBottom: '40px' }}>Last updated: February 2025</p>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>1. Overview</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>CompressTo20KB ("we", "us", or "our") operates the website compressto20kb.com. This Privacy Policy explains how we handle your data — or more precisely, how we <strong>don't</strong> handle it.</p>
          <p style={{ opacity: 0.75, fontSize: '15px', marginTop: '12px' }}>Our core principle: <strong>your images never leave your device.</strong> All image compression happens entirely within your browser using JavaScript. No file is uploaded to our servers at any point.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>2. Information We Do NOT Collect</h2>
          <ul style={{ opacity: 0.75, fontSize: '15px', paddingLeft: '20px' }}>
            {['Your images, photos, or files — ever','File names or metadata','Personal identification information','Payment information (the service is free)','Passwords or account data (no accounts required)'].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>❌ {item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>3. Information We May Collect</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>We use standard web analytics tools (Vercel Analytics) that may collect:</p>
          <ul style={{ opacity: 0.75, fontSize: '15px', paddingLeft: '20px', marginTop: '12px' }}>
            {['Anonymous page view data','Browser type and operating system','Country-level location (not precise)','Referring website','Pages visited and time spent'].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>📊 {item}</li>
            ))}
          </ul>
          <p style={{ opacity: 0.75, fontSize: '15px', marginTop: '12px' }}>This data is aggregated and anonymous. It cannot be used to identify you personally.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>4. Cookies and Local Storage</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>We use browser localStorage to remember your compression preferences (format, quality settings) between sessions. This data stays on your device and is never sent to our servers.</p>
          <p style={{ opacity: 0.75, fontSize: '15px', marginTop: '12px' }}>We may display third-party advertisements. Ad networks may use cookies to serve relevant ads. You can opt out through your browser settings or via the IAB opt-out tools.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>5. Third-Party Services</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>We use the following third-party services:</p>
          <ul style={{ opacity: 0.75, fontSize: '15px', paddingLeft: '20px', marginTop: '12px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Vercel</strong> — website hosting and analytics. <a href="https://vercel.com/legal/privacy-policy" style={{ color: '#a5b4fc' }} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li style={{ marginBottom: '8px' }}><strong>Google AdSense</strong> (when enabled) — advertisement serving. <a href="https://policies.google.com/privacy" style={{ color: '#a5b4fc' }} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>6. GDPR and CCPA Compliance</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>Because we do not collect personal data, most GDPR and CCPA requirements do not apply. We do not sell, trade, or transfer your personal information to third parties.</p>
          <p style={{ opacity: 0.75, fontSize: '15px', marginTop: '12px' }}>If you are a California resident, you have the right to know what data we collect — and as described above, we collect none about you personally.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>7. Children's Privacy</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>8. Changes to This Policy</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>We may update this Privacy Policy occasionally. The "Last updated" date at the top of this page will reflect any changes. Continued use of the service after changes constitutes acceptance.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>9. Contact</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>Questions about this Privacy Policy? Contact us at: <strong>privacy@compressto20kb.com</strong></p>
        </section>

        <div style={{ padding: '20px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '12px', marginTop: '40px' }}>
          <strong style={{ color: '#6ee7b7' }}>🔒 Summary:</strong>
          <span style={{ opacity: 0.8, fontSize: '14px' }}> Your images are processed entirely in your browser. We never see, store, or upload your files. Ever.</span>
        </div>
      </div>
      
    </div>
  );
}
