import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'New Zealand Visa Photo Compressor — 900×1200px, under 5MB | Free, No Upload',
  description: 'Compress and resize your New Zealand Visa photo to 900×1200px (35×45mm), under 5MB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-new-zealand-visa' },
};

const FAQS = [
  [
    'What size is a New Zealand visa photo?',
    'At least 900×1200px (35×45mm equivalent), JPEG format, under 5MB for online upload to Immigration New Zealand.',
  ],
  [
    'What background does New Zealand require?',
    'Plain white or light grey, with no shadows or other people visible.',
  ],
  [
    'How old can my New Zealand visa photo be?',
    'It must be taken within the last 6 months and reflect your current appearance.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>New Zealand Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Immigration New Zealand online applications need a digital photo at least 900×1200px, JPEG, under 5MB, on a plain white or light grey background. The photo must show a full front view of your face with a neutral expression, taken within the last 6 months.
        </p>
      </div>
      <CompressorTool initialTargetKB={5000} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>New Zealand Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 900×1200px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 5MB</li>
                <li>Format: JPEG</li>
              </ul>
            </div>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>Visual Standards:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Background: White or light grey</li>
                <li>Lighting: Even, no shadows</li>
                <li>Expression: Neutral, eyes open</li>
              </ul>
            </div>
          </div>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a New Zealand Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload any recent photo.</li>
            <li>Resize so the smallest side is at least 900×1200px.</li>
            <li>Compress to under 5MB using Target KB Mode set to 5000.</li>
            <li>Check your whole face is visible, front-on, with even lighting.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>New Zealand Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a New Zealand visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>At least 900×1200px (35×45mm equivalent), JPEG format, under 5MB for online upload to Immigration New Zealand.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does New Zealand require?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Plain white or light grey, with no shadows or other people visible.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How old can my New Zealand visa photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>It must be taken within the last 6 months and reflect your current appearance.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
