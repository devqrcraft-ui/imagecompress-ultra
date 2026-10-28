import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Japan Visa Photo Compressor — 600×600px, under 240KB',
  description: 'Compress and resize your Japan Visa photo to 600×600px (45×45mm), under 240KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-japan-visa' },
};

const FAQS = [
  [
    'What size is a Japan visa photo?',
    'Square 45×45mm, which equals 600×600px at 300dpi. Unlike most countries, Japan uses a square format.',
  ],
  [
    'What is the file size limit for a Japan visa photo?',
    'For digital submission keep the JPEG under 240KB.',
  ],
  [
    'What background does a Japan visa photo need?',
    'A completely plain white background with no shadows or objects visible.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Japan Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Japanese visa photos are square 45×45mm (600×600px at 300dpi) on a plain white background. For digital submission keep the JPEG under 240KB.
        </p>
      </div>
      <CompressorTool initialTargetKB={240} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Japan Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 600×600px (45×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 240KB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Japan Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a photo against a white wall.</li>
            <li>Resize to a square 600×600px.</li>
            <li>Compress to under 240KB — use Target KB Mode set to 240.</li>
            <li>Keep a neutral expression with eyes open.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Japan Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Japan visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Square 45×45mm, which equals 600×600px at 300dpi. Unlike most countries, Japan uses a square format.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What is the file size limit for a Japan visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>For digital submission keep the JPEG under 240KB.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does a Japan visa photo need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A completely plain white background with no shadows or objects visible.</p>
          </div>
        </div>
      </div>
    </>
  );
}
