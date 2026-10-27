import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Schengen Visa Photo Compressor — 600×800px, under 500KB | Free, No Upload',
  description: 'Compress and resize your Schengen Visa photo to 600×800px (35×45mm), under 500KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-schengen-visa' },
};

const FAQS = [
  [
    'What are Schengen visa photo dimensions?',
    '35×45mm, which equals 600×800 pixels at 300dpi. The same standard applies to Germany, Italy, Spain and most EU consulates.',
  ],
  [
    'How old can my Schengen visa photo be?',
    'It must be taken within the last 6 months and reflect your current appearance.',
  ],
  [
    'What background does a Schengen visa photo need?',
    'A plain white background with even lighting — no patterns, shadows or other people visible.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Schengen Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Schengen visa photos follow the ICAO standard: 35×45mm (600×800px at 300dpi) on a plain white background, taken within the last 6 months. For online applications the JPEG usually must stay under 500KB.
        </p>
      </div>
      <CompressorTool initialTargetKB={500} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Schengen Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 600×800px (35×45mm)</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Schengen Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload your photo.</li>
            <li>Resize to 600×800px (35×45mm at 300dpi).</li>
            <li>Compress to under 500KB in JPEG format.</li>
            <li>Verify the photo is recent (max 6 months old) and shows a neutral expression.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Schengen Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What are Schengen visa photo dimensions?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm, which equals 600×800 pixels at 300dpi. The same standard applies to Germany, Italy, Spain and most EU consulates.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How old can my Schengen visa photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>It must be taken within the last 6 months and reflect your current appearance.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does a Schengen visa photo need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A plain white background with even lighting — no patterns, shadows or other people visible.</p>
          </div>
        </div>
      </div>
    </>
  );
}
