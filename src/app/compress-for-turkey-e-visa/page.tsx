import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Turkey e-Visa Photo Compressor — 600×600px, under 300KB | Free, No Upload',
  description: 'Compress and resize your Turkey e-Visa photo to 600×600px (50×60mm), under 300KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-turkey-e-visa' },
};

const FAQS = [
  [
    'What photo does the Turkey e-Visa need?',
    'A recent biometric photo on a plain white background, JPEG under 300KB, face centered and clearly visible.',
  ],
  [
    'How fast is the Turkey e-Visa?',
    'Most applications at evisa.gov.tr are processed within minutes, but only apply on the official government portal.',
  ],
  [
    'Can I wear glasses in a Turkey e-Visa photo?',
    'Only if your eyes are fully visible without glare. Tinted lenses are not accepted.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Turkey e-Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          The Turkey e-Visa at evisa.gov.tr is issued within minutes, but your supporting photo must still meet the standard: plain white background, JPEG under 300KB, face centered and clearly visible. A 600×600px digital photo at 300dpi works reliably across all application types.
        </p>
      </div>
      <CompressorTool initialTargetKB={300} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Turkey e-Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 600×600px (50×60mm)</li>
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
          <p style={{fontSize:'13px', opacity:0.7, marginTop:'15px'}}>
            Official portal: <a href="https://www.evisa.gov.tr" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>https://www.evisa.gov.tr</a>
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Turkey e-Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo.</li>
            <li>Resize to 600×600px square.</li>
            <li>Compress to under 300KB using Target KB Mode set to 300.</li>
            <li>Attach the JPEG to your application at evisa.gov.tr.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Turkey e-Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What photo does the Turkey e-Visa need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A recent biometric photo on a plain white background, JPEG under 300KB, face centered and clearly visible.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How fast is the Turkey e-Visa?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Most applications at evisa.gov.tr are processed within minutes, but only apply on the official government portal.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I wear glasses in a Turkey e-Visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Only if your eyes are fully visible without glare. Tinted lenses are not accepted.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.5, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
