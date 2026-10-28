import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Canada Visa Photo Compressor — 420×540px, under 4MB',
  description: 'Compress and resize your Canada Visa photo to 420×540px (35×45mm), under 4MB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-canada-visa' },
};

const FAQS = [
  [
    'What size is a Canada visa photo?',
    'Minimum 420×540 pixels, JPEG, under 4MB. The printed equivalent is 35×45mm with a 31–36mm face height.',
  ],
  [
    'What file format does IRCC require?',
    'JPEG only for online applications. WebP or PNG uploads may be rejected by the IRCC portal.',
  ],
  [
    'Can I smile in a Canada visa photo?',
    'No — a neutral expression with mouth closed and eyes open is required.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Canada Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Canada visa and eTA photos start at 420×540 pixels minimum, JPEG format, under 4MB, on a plain white background. Your face must measure 31–36mm from chin to crown.
        </p>
      </div>
      <CompressorTool initialTargetKB={4000} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Canada Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 420×540px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 4MB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Canada Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a photo taken against a white wall.</li>
            <li>Crop/resize to at least 420×540px.</li>
            <li>Compress to under 4MB — Target KB Mode set to 4000 matches the limit.</li>
            <li>Check that the chin-to-crown distance is 31–36mm.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Canada Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Canada visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Minimum 420×540 pixels, JPEG, under 4MB. The printed equivalent is 35×45mm with a 31–36mm face height.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What file format does IRCC require?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>JPEG only for online applications. WebP or PNG uploads may be rejected by the IRCC portal.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I smile in a Canada visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>No — a neutral expression with mouth closed and eyes open is required.</p>
          </div>
        </div>
      </div>
    </>
  );
}
