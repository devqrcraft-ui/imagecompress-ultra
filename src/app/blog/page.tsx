import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Compression Blog — Tips, Guides & Tools 2026',
  description: 'Learn how to compress images for Etsy, Shopify, Amazon, email, and government forms. Free guides updated for 2026.',
  alternates: { canonical: '/blog' },
};

const posts = [
  { slug: 'webp-vs-jpeg-2026', title: 'WebP vs JPEG in 2026: Which Format Should You Use?', desc: 'Complete comparison of file size, quality, browser support, and when to use each format.', date: 'Feb 2026', emoji: '🖼️' },
  { slug: 'compress-jpeg-under-1mb', title: 'How to Compress JPEG Under 1MB Free', desc: 'Step-by-step guide to reduce JPEG file size without losing visible quality.', date: 'Feb 2026', emoji: '📦' },
  { slug: 'reduce-image-size-for-email', title: 'Reduce Image Size for Email — Gmail, Outlook, Mailchimp', desc: 'Best image sizes for email marketing in 2026. Avoid spam filters and slow loading.', date: 'Feb 2026', emoji: '📧' },
  { slug: 'best-image-formats', title: 'Best Image Formats for Web in 2026', desc: 'WebP, AVIF, JPEG, PNG — when to use each format for maximum performance.', date: 'Jan 2026', emoji: '🎯' },
  { slug: 'ecommerce-image-optimization', title: 'E-commerce Image Optimization Guide 2026', desc: 'How to optimize product images for Shopify, Etsy, Amazon and WooCommerce.', date: 'Jan 2026', emoji: '🛒' },
  { slug: 'free-vs-paid-compressors', title: 'Free vs Paid Image Compressors — Honest Comparison', desc: 'Is TinyPNG worth it? We compare 8 tools so you can make the right choice.', date: 'Jan 2026', emoji: '⚖️' },
  { slug: 'ds-160-photo-requirements', title: 'DS-160 Photo Requirements — How to Compress to 20KB', desc: 'US visa application photo specs and how to compress to exact size for free.', date: 'Jan 2026', emoji: '🪪' },
  { slug: 'uscis-photo-size-requirements', title: 'USCIS Photo Size Requirements 2026', desc: 'Complete guide to USCIS photo specs with free compression tool.', date: 'Jan 2026', emoji: '🇺🇸' },
  { slug: 'image-optimization-2026', title: 'Image Optimization in 2026 — Complete Guide', desc: 'Everything you need to know about optimizing images for speed, SEO, and UX.', date: 'Dec 2025', emoji: '🚀' },
  { slug: 'pagespeed-images', title: 'How Images Affect PageSpeed Score', desc: 'Fix LCP, reduce layout shift, and pass Core Web Vitals with better images.', date: 'Dec 2025', emoji: '⚡' },
];

export default function BlogIndex() {
  return (
    <div>
      <div style={{marginBottom:'40px'}}>
        <h1 style={{fontSize:'36px',fontWeight:800,marginBottom:'12px',letterSpacing:'-0.5px'}}>
          Image Compression <span style={{color:'#818cf8'}}>Blog</span>
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',color:'rgba(255,255,255,0.5)'}}>
          Guides, tips, and tutorials for compressing images — for Etsy, Shopify, Amazon, email, and government forms.
        </p>
      </div>
      <div style={{display:'grid',gap:'16px'}}>
        {posts.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} style={{textDecoration:'none',display:'block',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'20px',transition:'border-color 0.2s'}}
            
            >
            <div style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
              <span style={{fontSize:'28px',flexShrink:0}}>{post.emoji}</span>
              <div>
                <div style={{fontSize:'11px',color:'rgba(255,255,255,0.3)',marginBottom:'4px'}}>{post.date}</div>
                <h2 style={{fontSize:'17px',fontWeight:700,color:'white',marginBottom:'6px'}}>{post.title}</h2>
                <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:'1.6'}}>{post.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div style={{marginTop:'40px',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'14px',padding:'24px',textAlign:'center'}}>
        <h3 style={{fontSize:'18px',fontWeight:700,marginBottom:'8px'}}>Ready to compress your images?</h3>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'16px'}}>Free, private, no upload needed.</p>
        <a href="/" style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
          ⚡ Try Free Compressor →
        </a>
      </div>
    </div>
  )
}
