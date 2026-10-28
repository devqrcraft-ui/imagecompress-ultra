import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Singapore Employment Pass Photo Compressor — 400×514px, under 2MB',
  description: 'Compress and resize your Singapore Employment Pass photo to 400×514px (35×45mm), under 2MB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-singapore-ep' },
};

const FAQS = [
  [
    'What size is a Singapore EP photo?',
    '400×514px at 300dpi — the dimension Singapore ICA specifies for photo uploads via government e-Services, including MOM pass applications.',
  ],
  [
    'How recent must an EP photo be?',
    'Taken within the last 3 months, matching your current appearance.',
  ],
  [
    'What format does MOM accept for EP photos?',
    'JPEG, plain white background, under 2MB for upload in the EP eService.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Singapore Employment Pass Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Singapore Employment Pass and S Pass applications filed in MOM's EP eService require a recent passport-size photo of 400×514px (the dimension ICA specifies for all e-Service photo uploads), plain white background, taken within the last 3 months. Keep the JPEG under 2MB.
        </p>
      </div>
      <CompressorTool initialTargetKB={2048} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Singapore Employment Pass Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 400×514px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 2MB</li>
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
            Official portal: <a href="https://www.mom.gov.sg" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>https://www.mom.gov.sg</a>
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Singapore Employment Pass Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo against a white wall.</li>
            <li>Resize to 400×514px.</li>
            <li>Compress to under 2MB with Target KB Mode set to 2000.</li>
            <li>Check your full face is visible, front-on, with no shadows.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Singapore Employment Pass Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Singapore EP photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>400×514px at 300dpi — the dimension Singapore ICA specifies for photo uploads via government e-Services, including MOM pass applications.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How recent must an EP photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Taken within the last 3 months, matching your current appearance.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What format does MOM accept for EP photos?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>JPEG, plain white background, under 2MB for upload in the EP eService.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
