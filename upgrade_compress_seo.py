import os

def add_niche_pages():
    # 1. Сторінка для DV Lottery 2026 (Масовий трафік)
    os.makedirs('src/app/compress-for-dv-lottery-2026', exist_ok=True)
    with open('src/app/compress-for-dv-lottery-2026/page.tsx', 'w', encoding='utf-8') as f:
        f.write("""
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DV Lottery Photo Compressor 2026 — 600x600px & Under 240KB',
  description: 'Free DV Lottery photo tool. Compress and resize your Green Card photo to 600x600px and under 240KB. 100% Private, no upload required.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-dv-lottery-2026' }
};

export default function DVLotteryPage( ) {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px', color: '#333' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>DV Lottery Photo Compressor 2026</h1>
      <div style={{ background: '#fff7ed', border: '1px solid #ffedd5', borderRadius: 12, padding: 24, marginBottom: 30 }}>
        <h2 style={{ color: '#9a3412', marginTop: 0 }}>Green Card Photo Requirements</h2>
        <p>Your photo must be exactly 600x600 pixels and no larger than 240KB. Our tool ensures your photo meets these strict IRS/State Dept standards without leaving your device.</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="/" style={{ background: '#ea580c', color: '#fff', padding: '16px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Compress Photo for DV-2026 →
        </a>
      </div>
    </div>
  );
}
""")

    # 2. Сторінка для Shopify (Бізнес трафік)
    os.makedirs('src/app/compress-for-shopify', exist_ok=True)
    with open('src/app/compress-for-shopify/page.tsx', 'w', encoding='utf-8') as f:
        f.write("""
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress Image for Shopify 2026 — Boost Store Speed to 20KB',
  description: 'Optimize Shopify product images for lightning-fast loading. Compress to 20KB without losing quality. Bulk compression, 100% private.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-shopify' }
};

export default function ShopifyPage( ) {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px', color: '#333' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>Shopify Image Optimizer 2026</h1>
      <p>Fast loading stores convert 3x better. Compress your product images to under 20KB to hit a 90+ PageSpeed score on your Shopify store.</p>
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <a href="/" style={{ background: '#95bf47', color: '#fff', padding: '16px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Optimize Shopify Images →
        </a>
      </div>
    </div>
  );
}
""")

def update_sitemap():
    path = 'src/app/sitemap.ts'
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    new_pages = ['compress-for-dv-lottery-2026', 'compress-for-shopify']
    for p in new_pages:
        if p not in content:
            content = content.replace("return [", f"return [\n      {{ url: `https://www.compressto20kb.com/{p}`, lastModified: new Date( ) }},")
    
    with open(path, 'w', encoding='utf-8') as f: f.write(content)

add_niche_pages()
update_sitemap()
