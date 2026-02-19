'use client';
export default function MarqueeBanner() {
  const items = [
    '⚡ 100% FREE — No limits, no account needed',
    '🔒 Your files NEVER leave your device',
    '🚀 Compress to exact KB — WebP, JPEG, PNG, AVIF',
    '📦 Batch compress up to 10 images at once',
    '✅ No upload to server — 100% Private',
    '🛒 Shopify, Etsy, Amazon, Instagram presets',
    '📄 Gov 20KB & 50KB forms — one click ready',
    '🌍 Works offline — no internet needed after load',
  ];
  const text = items.join('   •   ');
  return (
    <div style={{
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      color: '#fff',
      padding: '8px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: '0.3px',
    }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .marquee-inner:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-inner">
        {text}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{text}
      </div>
    </div>
  );
}
