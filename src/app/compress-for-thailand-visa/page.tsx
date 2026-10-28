import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Thailand Visa Photo Compressor — 400×514px, under 200KB',
  description: 'Compress and resize your Thailand Visa photo to 400×514px (4×5cm), under 200KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-thailand-visa' },
};

const FAQS = [
  [
    'What size is a Thailand visa photo?',
    '4×5cm = 400×514px at 300dpi, plain white background, JPEG under 200KB for the e-Visa portal.',
  ],
  [
    'Can I smile in a Thailand visa photo?',
    'A slight natural smile is tolerated, but a neutral expression is the safest choice for biometric checks.',
  ],
  [
    'How recent must a Thailand visa photo be?',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Thailand Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Thai visa applications — tourist, education, retirement — require a 4×5cm photo (400×514px at 300dpi) on a plain white background. For e-Visa submissions through the Thai e-Visa portal the JPEG must stay under 200KB, with a neutral expression and no headwear except for religious reasons.
        </p>
      </div>
      <CompressorTool initialTargetKB={200} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Thailand Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 400×514px (4×5cm)</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Thailand Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent front-facing photo.</li>
            <li>Resize to 400×514px (4×5cm).</li>
            <li>Compress to under 200KB with the 200 KB preset button.</li>
            <li>Check the plain white background and neutral expression.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Thailand Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Thailand visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>4×5cm = 400×514px at 300dpi, plain white background, JPEG under 200KB for the e-Visa portal.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I smile in a Thailand visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A slight natural smile is tolerated, but a neutral expression is the safest choice for biometric checks.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How recent must a Thailand visa photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Taken within the last 6 months, matching your current appearance.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
