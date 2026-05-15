import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Terms of Service — CompressTo20KB',
  description: 'Terms of Service for CompressTo20KB free image compression tool.',
  alternates: { canonical: 'https://www.compressto20kb.com/terms' },
  openGraph: { url: 'https://www.compressto20kb.com/terms' },
  robots: { index: true, follow: false },
};
export default function Terms() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Terms of Service","item":"https://www.compressto20kb.com/terms"}]}' }} />
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 60px', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ opacity: 0.45, fontSize:'15px', marginBottom: '40px' }}>Last updated: February 2025</p>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>By accessing or using CompressTo20KB at compressto20kb.com ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>2. Description of Service</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>CompressTo20KB provides a free, browser-based image compression tool. The Service allows users to compress images to a specified file size without uploading files to any server. All processing occurs locally in the user's browser.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>3. Permitted Use</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>You may use the Service for personal, commercial, or professional purposes including:</p>
          <ul style={{ opacity: 0.75, fontSize: '15px', paddingLeft: '20px', marginTop: '12px' }}>
            {['Compressing images for websites and e-commerce', 'Preparing photos for government and visa applications', 'Optimizing images for social media', 'Batch processing product photography', 'Any other lawful image compression purpose'].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>✅ {item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>4. Prohibited Use</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>You may not use the Service to:</p>
          <ul style={{ opacity: 0.75, fontSize: '15px', paddingLeft: '20px', marginTop: '12px' }}>
            {['Attempt to reverse-engineer or decompile the Service', 'Use automated bots or scrapers to abuse the Service', 'Violate any applicable laws or regulations', 'Infringe upon intellectual property rights of others'].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>❌ {item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>5. Intellectual Property</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>You retain full ownership of all images you compress using the Service. CompressTo20KB does not claim any rights to your content. The Service software, design, and branding are owned by CompressTo20KB.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>6. Disclaimer of Warranties</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>The Service is provided "as is" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or that compressed files will meet specific requirements of third-party platforms (such as USCIS, eBay, or Shopify). Always verify that compressed files meet the requirements of the platform you are submitting to.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>7. Limitation of Liability</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>CompressTo20KB shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to rejection of applications due to photo requirements, loss of data, or business interruption.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>8. Advertising</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>The Service may display third-party advertisements. We are not responsible for the content of these advertisements. Clicking on ads will take you to third-party websites governed by their own terms and privacy policies.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>9. Changes to Terms</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>10. Governing Law</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>These Terms shall be governed by and construed in accordance with applicable law, without regard to conflict of law principles.</p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#a5b4fc', marginBottom: '12px' }}>11. Contact</h2>
          <p style={{ opacity: 0.75, fontSize: '15px' }}>Questions about these Terms? Contact us at: <strong>legal@compressto20kb.com</strong></p>
        </section>
      </div>
      
    </div>
    </>
  );
}
