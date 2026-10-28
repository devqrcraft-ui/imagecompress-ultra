import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'New Zealand NZeTA Photo Compressor — 900×1200px, under 5MB',
  description: 'Compress and resize your New Zealand NZeTA photo to 900×1200px (35×45mm), under 5MB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-new-zealand-nzeta' },
};

const FAQS = [
  [
    'What photo does the NZeTA app need?',
    'A photo at least 900×1200px, JPEG under 5MB, plain white or light grey background, full front view of your face.',
  ],
  [
    'Can I take my NZeTA photo with the phone camera?',
    'Yes — the NZeTA app can capture the photo directly. Good, even lighting against a white wall gives the best result.',
  ],
  [
    'How long is an NZeTA valid?',
    'An approved NZeTA is valid for 2 years and covers multiple trips.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>New Zealand NZeTA Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          The New Zealand Electronic Travel Authority (NZeTA) is requested through the NZeTA mobile app or website, which asks you to take or upload a photo. It must be at least 900×1200px, JPEG, under 5MB, on a plain white or light grey background with your full face visible front-on.
        </p>
      </div>
      <CompressorTool initialTargetKB={5000} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>New Zealand NZeTA Photo Requirements</h2>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a New Zealand NZeTA Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo — or take one against a white wall.</li>
            <li>Resize so it is at least 900×1200px.</li>
            <li>Compress to under 5MB using Target KB Mode set to 5000.</li>
            <li>Check your full face is visible, front-on, with even lighting.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>New Zealand NZeTA Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What photo does the NZeTA app need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A photo at least 900×1200px, JPEG under 5MB, plain white or light grey background, full front view of your face.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I take my NZeTA photo with the phone camera?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes — the NZeTA app can capture the photo directly. Good, even lighting against a white wall gives the best result.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How long is an NZeTA valid?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>An approved NZeTA is valid for 2 years and covers multiple trips.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
