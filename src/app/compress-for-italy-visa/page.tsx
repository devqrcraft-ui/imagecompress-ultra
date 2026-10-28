import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Italy Visa Photo Compressor — 413×531px, under 500KB',
  description: 'Compress and resize your Italy Visa photo to 413×531px (35×45mm), under 500KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-italy-visa' },
};

const FAQS = [
  [
    'What size is an Italy visa photo?',
    '35×45mm = 413×531px at 300dpi, the standard Schengen biometric format.',
  ],
  [
    'How recent must an Italy visa photo be?',
    'Taken within the last 6 months and matching your current appearance.',
  ],
  [
    'What background does an Italy visa photo need?',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Italy Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Italy Schengen visa photos are 35×45mm (413×531px at 300dpi), JPEG under 500KB, plain white background, taken within the last 6 months.
        </p>
      </div>
      <CompressorTool initialTargetKB={500} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Italy Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 413×531px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 500KB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Italy Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo.</li>
            <li>Resize to 413×531px (35×45mm).</li>
            <li>Compress to under 500KB in JPEG format.</li>
            <li>Verify plain white background and neutral expression.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Italy Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is an Italy visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm = 413×531px at 300dpi, the standard Schengen biometric format.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How recent must an Italy visa photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Taken within the last 6 months and matching your current appearance.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does an Italy visa photo need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Plain white, evenly lit, with no shadows or patterns.</p>
          </div>
        </div>
      </div>
    </>
  );
}
