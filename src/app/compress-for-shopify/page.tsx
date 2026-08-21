
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
