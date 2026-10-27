import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'South Korea Visa Photo Compressor — 354×472px, under 240KB | Free, No Upload',
  description: 'Compress and resize your South Korea Visa photo to 354×472px (35×45mm), under 240KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-korea-visa' },
};

const FAQS = [
  [
    'What size is a South Korea visa photo?',
    '35×45mm = 354×472px at 300dpi, plain white background, JPEG under 240KB for online submission.',
  ],
  [
    'Can I wear glasses in a Korea visa photo?',
    'Yes, if your eyes are fully visible with no glare or reflections.',
  ],
  [
    'How recent must a Korea visa photo be?',
    'Taken within the last 6 months, matching your current appearance.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>South Korea Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          South Korean visa applications at consulates follow the standard 35×45mm format — 354×472px at 300dpi — on a plain white background. For online submissions the JPEG should stay under 240KB. The photo must be recent, front-facing, with a neutral expression.
        </p>
      </div>
      <CompressorTool initialTargetKB={240} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>South Korea Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 354×472px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 240KB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a South Korea Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo against a white wall.</li>
            <li>Resize to 354×472px (35×45mm at 300dpi).</li>
            <li>Compress to under 240KB with Target KB Mode set to 240.</li>
            <li>Check the plain white background and neutral expression.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>South Korea Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a South Korea visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm = 354×472px at 300dpi, plain white background, JPEG under 240KB for online submission.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I wear glasses in a Korea visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes, if your eyes are fully visible with no glare or reflections.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How recent must a Korea visa photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Taken within the last 6 months, matching your current appearance.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.5, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
