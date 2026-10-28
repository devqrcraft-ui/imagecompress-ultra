import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Ethiopia e-Visa Photo Compressor — 413×531px, under 200KB',
  description: 'Compress and resize your Ethiopia e-Visa photo to 413×531px (35×45mm), under 200KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-ethiopia-visa' },
};

const FAQS = [
  [
    'What size is an Ethiopia e-Visa photo?',
    '35×45mm = 413×531px at 300dpi, JPEG under 200KB, plain white background.',
  ],
  [
    'Where do I upload my Ethiopia visa photo?',
    'Directly into the e-Visa application form at the official portal evisa.gov.et.',
  ],
  [
    'What background does Ethiopia require?',
    'A plain white background with even lighting and no shadows.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Ethiopia e-Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          The Ethiopian e-Visa at evisa.gov.et is fully online — you upload a digital photo during the application. It must be passport-style: 35×45mm (413×531px at 300dpi), plain white background, JPEG under 200KB, taken within the last 6 months with a neutral expression.
        </p>
      </div>
      <CompressorTool initialTargetKB={200} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Ethiopia e-Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 413×531px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 200KB</li>
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
          <p style={{fontSize:'13px', opacity:0.7, marginTop:'15px'}}>
            Official portal: <a href="https://www.evisa.gov.et" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>https://www.evisa.gov.et</a>
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Ethiopia e-Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo against a light wall.</li>
            <li>Resize to 413×531px (35×45mm at 300dpi).</li>
            <li>Compress to under 200KB with the 200 KB preset button.</li>
            <li>Upload the JPEG directly to evisa.gov.et — no printing needed.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Ethiopia e-Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is an Ethiopia e-Visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm = 413×531px at 300dpi, JPEG under 200KB, plain white background.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Where do I upload my Ethiopia visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Directly into the e-Visa application form at the official portal evisa.gov.et.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does Ethiopia require?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A plain white background with even lighting and no shadows.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
