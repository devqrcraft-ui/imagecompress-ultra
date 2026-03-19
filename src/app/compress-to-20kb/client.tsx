"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';

const tips = [
  { title: 'Use Gov 20KB preset', desc: 'Click the "Gov 20KB" preset on the main tool — it sets Exact KB Mode to 20KB with JPEG format in one click. Perfect for Aadhaar, DS-160, and NADRA forms.' },
  { title: 'Start with a high-res original', desc: 'Compressing a 4000px photo to 20KB loses less quality than compressing an already-small image. Always use the highest resolution original available.' },
  { title: 'JPEG gives the best size-to-quality ratio at 20KB', desc: 'At 20KB, JPEG outperforms WebP for photographic content. WebP is better at larger sizes but JPEG handles extreme compression more gracefully.' },
  { title: 'Batch compress up to 50 files', desc: 'Need to compress multiple photos to 20KB? Upload up to 50 images at once. All will be processed simultaneously in your browser.' },
];

export default function ClientPage() {
  return (
    <div className="mt-10 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Free 20KB Compression Tool</h2>
        <p className="text-slate-400 text-sm mb-6">Compress directly to 20KB — no upload, no server, 100% private.</p>
        <CompressorWidget defaultMode="exactkb" defaultFormat="jpeg" defaultTargetKB={20}/>
      </div>
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Tips for Best Results at 20KB</h2>
        <div className="space-y-3">
          {tips.map((tip, i) => (
            <div key={i} className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/40">
              <div className="font-semibold text-white text-sm mb-1">✓ {tip.title}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{tip.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
