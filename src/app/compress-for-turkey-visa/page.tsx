import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Turkey Visa Photo Compressor — 600×600px, under 300KB',
  description: 'Compress and resize your Turkey Visa photo to 600×600px (50×60mm), under 300KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-turkey-visa' },
};

const FAQS = [
  [
    'What size is a Turkey visa photo?',
    'A square biometric photo around 600×600px at 300dpi, JPEG under 300KB, plain white background.',
  ],
  [
    'Where do I apply for a Turkey e-Visa?',
    'Only at the official portal evisa.gov.tr — beware of lookalike commercial sites.',
  ],
  [
    'What background does a Turkey visa photo need?',
    'Plain white, evenly lit, with no shadows or patterns.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Turkey Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Turkish sticker visas at consulates and the e-Visa system use a biometric photo on a plain white background, JPEG under 300KB. The recommended digital size is 600×600px at 300dpi, with your face clearly visible, centered, and a neutral expression. The e-Visa itself is issued at evisa.gov.tr.
        </p>
      </div>
      <CompressorTool initialTargetKB={300} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Turkey Visa Photo Requirements</h2>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Turkey Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo against a light wall.</li>
            <li>Resize to 600×600px.</li>
            <li>Compress to under 300KB with Target KB Mode set to 300.</li>
            <li>Verify the white background, centered face and neutral expression.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Turkey Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Turkey visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A square biometric photo around 600×600px at 300dpi, JPEG under 300KB, plain white background.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Where do I apply for a Turkey e-Visa?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Only at the official portal evisa.gov.tr — beware of lookalike commercial sites.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does a Turkey visa photo need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Plain white, evenly lit, with no shadows or patterns.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
