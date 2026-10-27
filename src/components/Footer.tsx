'use client';
import { useState } from 'react';

function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: 'block', color: hov ? '#a5b4fc' : 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '6px', textDecoration: hov ? 'underline' : 'none', minHeight: '32px', lineHeight: '1.4', transition: 'color 0.18s' }}>
      {children}
    </a>
  );
}

const COLS: [string, [string, string][]][] = [
  ['Compress to a size', [
    ['/compress-to-20kb', 'Compress to 20KB'],
    ['/compress-to-50kb', 'Compress to 50KB'],
    ['/compress-to-100kb', 'Compress to 100KB'],
    ['/compress-to-200kb', 'Compress to 200KB'],
    ['/compress-to-500kb', 'Compress to 500KB'],
    ['/compress-to-1mb', 'Compress to 1MB'],
  ]],
  ['Visa & government', [
    ['/visa-photo-compressor', 'Visa photo by country'],
    ['/compress-for-ds160', 'DS-160 photo'],
    ['/compress-for-uscis', 'USCIS photo'],
    ['/compress-for-green-card', 'Green card photo'],
    ['/compress-for-dv-lottery', 'DV Lottery photo'],
    ['/compress-for-passport-renewal', 'Passport renewal'],
  ]],
  ['Convert & check', [
    ['/jpg-to-png', 'JPG to PNG'],
    ['/png-to-jpg', 'PNG to JPG'],
    ['/jpg-to-word', 'JPG to Word'],
    ['/convert-image-to-pdf', 'Image to PDF'],
    ['/dpi-converter', 'DPI converter'],
    ['/image-size-checker-online', 'Check file size'],
  ]],
  ['Batch & business', [
    ['/bulk-image-compressor', 'Bulk compressor'],
    ['/batch-image-compressor-zip', 'Batch to ZIP'],
    ['/compress-for-shopify', 'Shopify photos'],
    ['/compress-for-etsy', 'Etsy photos'],
    ['/compress-for-amazon', 'Amazon photos'],
    ['/compress-for-email', 'Photos for email'],
  ]],
  ['Learn', [
    ['/blog', 'All guides'],
    ['/compress-image-for-visa', 'Compress for a visa'],
    ['/compress-passport-photo', 'Passport photo guide'],
    ['/compress-without-uploading', 'Why no upload'],
    ['/faq', 'FAQ'],
  ]],
  ['Company', [
    ['/about', 'About'],
    ['/contact', 'Contact'],
    ['/privacy-policy', 'Privacy Policy'],
    ['/terms', 'Terms'],
  ]],
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '40px 20px', background: '#080619' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '28px' }}>
        {COLS.map(([title, links]) => (
          <div key={title}>
            <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.4px' }}>{title}</h3>
            {links.filter(l => l[1]).map(([href, label]) => (
              <HoverLink key={href} href={href}>{label}</HoverLink>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: '1200px', margin: '32px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', color: 'rgba(255,255,255,0.68)', fontSize: '14px' }}>
        © {new Date().getFullYear()} CompressTo20KB.com — Private Free Online Tool
      </div>
    </footer>
  );
}
