
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
