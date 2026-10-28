import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Vietnam e-Visa Photo Compressor — 400×514px, under 300KB',
  description: 'Compress and resize your Vietnam e-Visa photo to 400×514px (4×5cm), under 300KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-vietnam-visa' },
};

const FAQS = [
  [
    'What size is a Vietnam e-Visa photo?',
    '4×5cm = 400×514px at 300dpi, JPEG format, under 300KB.',
  ],
  [
    'How old can a Vietnam e-Visa photo be?',
    'It must be taken within the last 6 months and reflect your current appearance.',
  ],
  [
    'What background does Vietnam require?',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Vietnam e-Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Vietnam e-Visa photos must be 4×5cm (400×514px at 300dpi), JPEG under 300KB, plain white background, taken within the last 6 months.
        </p>
      </div>
      <CompressorTool initialTargetKB={300} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Vietnam e-Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 400×514px (4×5cm)</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Vietnam e-Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo.</li>
            <li>Resize to 400×514px (4×5cm).</li>
            <li>Compress to under 300KB with Target KB Mode set to 300.</li>
            <li>Verify the photo is not older than 6 months.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Vietnam e-Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Vietnam e-Visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>4×5cm = 400×514px at 300dpi, JPEG format, under 300KB.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How old can a Vietnam e-Visa photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>It must be taken within the last 6 months and reflect your current appearance.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does Vietnam require?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A plain white background with even lighting and no shadows.</p>
          </div>
        </div>
      </div>
    </>
  );
}
