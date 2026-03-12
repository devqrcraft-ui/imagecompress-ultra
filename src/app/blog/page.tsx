
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What topics does the CompressTo20KB blog cover?","acceptedAnswer":{"@type":"Answer","text":"The blog covers image compression techniques, format comparisons (WebP vs JPEG vs AVIF), platform-specific guides (Shopify, eBay, Amazon, visa applications), PageSpeed optimization, and tutorials for compressing images on different devices and operating systems."}},{"@type":"Question","name":"Are the image compression guides on this blog free?","acceptedAnswer":{"@type":"Answer","text":"Yes. All guides, tutorials, and tools on CompressTo20KB are completely free. No account or subscription required."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Photo Compression Guides & Visa Photo Tips',
  description: 'Free guides on how to compress photos for visa applications, government forms, and online portals. DS-160, DV Lottery, UK Visa, and more.',
  alternates: { canonical: 'https://www.compressto20kb.com/blog' },
};

const posts = [
  { slug: 'ds160-photo-requirements', title: 'DS-160 Photo Requirements 2026: Complete Guide', desc: 'Everything you need to know about DS-160 photo requirements. Size, format, common mistakes and how to fix them.', date: 'Feb 2026', tag: 'US Visa' },
  { slug: 'compress-photo-for-visa', title: 'How to Compress Photo for Visa Application (Any Country)', desc: 'Step-by-step guide to compress visa photos to meet exact KB and pixel requirements for any country.', date: 'Feb 2026', tag: 'Visa' },
  { slug: 'iphone-photo-ds160', title: 'iPhone Photo for DS-160: HEIC, Display P3 & How to Fix', desc: 'Why iPhone photos fail DS-160 upload and how to convert HEIC to JPEG and fix Display P3 color space.', date: 'Feb 2026', tag: 'iPhone' },
  { slug: 'dv-lottery-photo-guide', title: 'DV Lottery Photo Requirements 2026/2027: Full Guide', desc: 'Complete DV Lottery photo requirements with common rejection reasons and free compression tool.', date: 'Feb 2026', tag: 'DV Lottery' },
  { slug: 'compress-photo-under-50kb', title: 'How to Compress Photo Under 50KB for SSC, NEET & Indian Exams', desc: 'Guide for Indian exam applicants: compress photo to 50KB, 100KB, 200KB for SSC, NEET, UPSC online forms.', date: 'Feb 2026', tag: 'India Exams' },
];

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', opacity: 0.75 }}>← Home</Link>
      </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: '8px' }}>📝 Blog & Guides</h1>
        <p style={{ fontSize: '15px', opacity: 0.6, marginBottom: '40px' }}>Photo compression guides, visa photo tips, and government form requirements.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px 24px', transition: 'border-color 0.2s' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(129,140,248,0.2)', color: '#a5b4fc', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>{post.tag}</span>
                  <span style={{ fontSize: '12px', opacity: 0.4 }}>{post.date}</span>
                </div>
                <div style={{ fontWeight: 800, fontSize: '17px', marginBottom: '6px', color: 'white' }}>{post.title}</div>
                <div style={{ fontSize: '13px', opacity: 0.6 }}>{post.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        © 2026 CompressTo20KB · <Link href="/" style={{ color: 'white' }}>Home</Link> · 🔒 Files never leave your browser
      </footer>
    </div>
  );
}
