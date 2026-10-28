import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Ukraine Visa Photo Compressor — 413×531px, under 300KB',
  description: 'Compress and resize your Ukraine Visa photo to 413×531px (35×45mm), under 300KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-ukraine-visa' },
};

const FAQS = [
  [
    'What size is a Ukraine visa photo?',
    '413×531 pixels, which equals 35×45mm at 300dpi — the standard ICAO biometric format used by the Ukrainian Ministry of Foreign Affairs.',
  ],
  [
    'Where do I apply for a Ukraine visa?',
    'At a Ukrainian consulate or through the official MFA visa portal. The same photo specification applies to both routes.',
  ],
  [
    'Can I wear glasses in a Ukraine visa photo?',
    'Yes, as long as your eyes are fully visible with no glare or reflections. Tinted lenses and sunglasses are not accepted.',
  ]
];

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{background:'#0f0c29', padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Ukraine Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Ukraine visa applications, whether filed at a consulate or through the MFA online visa portal, require a standard 35×45mm biometric photo — 413×531px at 300dpi — in JPEG format under 300KB. The photo must be recent (taken within the last 6 months), show a neutral expression, and use a plain white background.
        </p>
      </div>
      <CompressorTool initialTargetKB={300} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Ukraine Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 413×531px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 300KB</li>
                <li>Format: JPEG</li>
              </ul>
            </div>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>Visual Standards:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Background: Plain white</li>
                <li>Lighting: Even, no shadows</li>
                <li>Expression: Neutral, eyes open</li>
              </ul>
            </div>
          </div>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Ukraine Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent front-facing photo.</li>
            <li>Resize it to 413×531px (35×45mm at 300dpi).</li>
            <li>Compress to under 300KB using Target KB Mode set to 300.</li>
            <li>Check the plain white background and neutral expression before downloading.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Ukraine Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Ukraine visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>413×531 pixels, which equals 35×45mm at 300dpi — the standard ICAO biometric format used by the Ukrainian Ministry of Foreign Affairs.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Where do I apply for a Ukraine visa?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>At a Ukrainian consulate or through the official MFA visa portal. The same photo specification applies to both routes.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I wear glasses in a Ukraine visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes, as long as your eyes are fully visible with no glare or reflections. Tinted lenses and sunglasses are not accepted.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
