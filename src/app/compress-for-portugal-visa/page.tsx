import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Portugal Visa Photo Compressor — 413×531px, under 500KB | Free, No Upload',
  description: 'Compress and resize your Portugal Visa photo to 413×531px (35×45mm), under 500KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-portugal-visa' },
};

const FAQS = [
  [
    'What size is a Portugal visa photo?',
    '35×45mm = 413×531px at 300dpi, the Schengen biometric standard.',
  ],
  [
    'Is the photo the same for the D7 or digital nomad visa?',
    'Yes. Portugal uses one biometric photo specification for Schengen short-stay visas and all national long-stay D-visas.',
  ],
  [
    'Can I smile in a Portugal visa photo?',
    'No — a neutral expression with your mouth closed is required.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Portugal Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Portugal Schengen visas, national D-visas (including the D7 and digital nomad visas), all use the same biometric photo: 35×45mm (413×531px at 300dpi), plain white background, taken within the last 6 months, JPEG under 500KB for the online appointment systems used by Portuguese consulates and VFS Global.
        </p>
      </div>
      <CompressorTool initialTargetKB={500} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Portugal Visa Photo Requirements</h2>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Portugal Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo.</li>
            <li>Resize to 413×531px (35×45mm at 300dpi).</li>
            <li>Compress to under 500KB in JPEG format.</li>
            <li>Verify a plain white background and neutral expression.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Portugal Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Portugal visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm = 413×531px at 300dpi, the Schengen biometric standard.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Is the photo the same for the D7 or digital nomad visa?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes. Portugal uses one biometric photo specification for Schengen short-stay visas and all national long-stay D-visas.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I smile in a Portugal visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>No — a neutral expression with your mouth closed is required.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
