import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'India e-Visa Photo Compressor — 350×350px, under 300KB | Free, No Upload',
  description: 'Compress and resize your India e-Visa photo to 350×350px (2×2 inch (51×51mm)), under 300KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-india-visa' },
};

const FAQS = [
  [
    'What size is an India e-Visa photo?',
    'Square 350×350 pixels (2×2 inch), JPEG format only, under 300KB.',
  ],
  [
    'What format does the Indian e-Visa portal accept?',
    'JPEG (.jpg) only — PNG, WebP or HEIC files will be rejected.',
  ],
  [
    'How much of the frame should my face fill for an India visa photo?',
    '70–80% of the photo. The head must be centered against a plain white background.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>India e-Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          India e-Visa photos must be square 350×350px, JPEG only, under 300KB, with a plain white background and your face filling 70–80% of the frame.
        </p>
      </div>
      <CompressorTool initialTargetKB={300} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>India e-Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 350×350px (2×2 inch (51×51mm))</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a India e-Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a front-facing photo.</li>
            <li>Resize to a square 350×350px.</li>
            <li>Compress to under 300KB — Target KB Mode set to 300 matches the portal limit.</li>
            <li>Make sure your face fills most of the frame (70–80%).</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>India e-Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is an India e-Visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Square 350×350 pixels (2×2 inch), JPEG format only, under 300KB.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What format does the Indian e-Visa portal accept?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>JPEG (.jpg) only — PNG, WebP or HEIC files will be rejected.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How much of the frame should my face fill for an India visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>70–80% of the photo. The head must be centered against a plain white background.</p>
          </div>
        </div>
      </div>
    </>
  );
}
