#!/bin/bash
set -e
echo "🚀 Installing Privacy Policy, Terms, and Footer..."

# ============================================================
# PRIVACY POLICY PAGE
# ============================================================
mkdir -p src/app/privacy-policy
cat > src/app/privacy-policy/page.tsx << 'EOF'
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Privacy Policy — CompressTo20KB',
  description: 'Privacy Policy for CompressTo20KB. We never upload, store, or share your images. All processing happens in your browser.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: false },
};
export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 60px', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.45, fontSize: '13px', marginBottom: '40px' }}>Last updated: February 2025</p>

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
      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.35, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        © 2025 CompressTo20KB ·
        <Link href="/" style={{ color: 'white', marginLeft: '8px' }}>Home</Link> ·
        <Link href="/terms" style={{ color: 'white', marginLeft: '8px' }}>Terms</Link> ·
        <Link href="/privacy-policy" style={{ color: 'white', marginLeft: '8px' }}>Privacy Policy</Link>
      </footer>
    </div>
  );
}
EOF

# ============================================================
# TERMS OF SERVICE PAGE
# ============================================================
mkdir -p src/app/terms
cat > src/app/terms/page.tsx << 'EOF'
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Terms of Service — CompressTo20KB',
  description: 'Terms of Service for CompressTo20KB free image compression tool.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: false },
};
export default function Terms() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 60px', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ opacity: 0.45, fontSize: '13px', marginBottom: '40px' }}>Last updated: February 2025</p>

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
      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.35, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        © 2025 CompressTo20KB ·
        <Link href="/" style={{ color: 'white', marginLeft: '8px' }}>Home</Link> ·
        <Link href="/terms" style={{ color: 'white', marginLeft: '8px' }}>Terms</Link> ·
        <Link href="/privacy-policy" style={{ color: 'white', marginLeft: '8px' }}>Privacy Policy</Link>
      </footer>
    </div>
  );
}
EOF

# ============================================================
# UPDATE LAYOUT.TSX — add footer with Privacy/Terms links
# ============================================================
node -e "
const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Replace body closing tag to add global footer
const oldBody = '<body style={{ margin: 0, padding: 0 }}><main>{children}</main></body>';
const newBody = \`<body style={{ margin: 0, padding: 0 }}>
        <main>{children}</main>
        <footer style={{
          textAlign: 'center',
          padding: '16px 24px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.3)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          flexWrap: 'wrap' as const,
          justifyContent: 'center',
          gap: '16px',
        }}>
          <span>© 2025 CompressTo20KB</span>
          <a href='/privacy-policy' style={{color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>Privacy Policy</a>
          <a href='/terms' style={{color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>Terms of Service</a>
          <a href='/blog' style={{color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>Blog</a>
          <a href='/faq' style={{color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>FAQ</a>
          <a href='/contact' style={{color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>Contact</a>
          <span style={{opacity:0.6}}>🔒 Files never leave your browser</span>
        </footer>
      </body>\`;

c = c.replace(oldBody, newBody);
fs.writeFileSync('src/app/layout.tsx', c);
console.log('✅ layout.tsx updated with global footer');
"

# ============================================================
# UPDATE SITEMAP — add privacy and terms
# ============================================================
node -e "
const fs = require('fs');
let c = fs.readFileSync('src/app/sitemap.ts', 'utf8');
const insert = \`    { url: \\\`\\\${baseUrl}/privacy-policy\\\`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: \\\`\\\${baseUrl}/terms\\\`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 },\`;
c = c.replace('  ];', insert + '\n  ];');
fs.writeFileSync('src/app/sitemap.ts', c);
console.log('✅ sitemap.ts updated');
"

echo ""
echo "✅ Privacy Install Complete!"
echo ""
echo "Created:"
echo "  /privacy-policy — full privacy policy page"
echo "  /terms          — full terms of service page"
echo "  layout.tsx      — global footer with Privacy/Terms/Blog/FAQ links"
echo "  sitemap.ts      — updated with new pages"
echo ""
echo "Run:"
echo "  git add . && git commit -m 'add privacy policy, terms, global footer' && git push"
