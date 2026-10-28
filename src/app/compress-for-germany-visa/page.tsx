import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Germany Visa Photo Compressor — 413×531px, under 6MB',
  description: 'Compress and resize your Germany Visa photo to 413×531px (35×45mm), under 6MB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-germany-visa' },
};

const FAQS = [
  [
    'What size is a German visa photo?',
    '35×45mm, which is 413×531 pixels at 300dpi. This matches the general Schengen biometric standard.',
  ],
  [
    'What background does Germany require?',
    'Plain white or light grey, with no patterns or shadows.',
  ],
  [
    'Can I wear a headscarf in a German visa photo?',
    'Yes, for religious reasons — but your full face from chin to forehead must be clearly visible.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Germany Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          German Schengen visa photos follow the biometric standard: 35×45mm (413×531px at 300dpi), white or light grey background, neutral expression, file under 6MB.
        </p>
      </div>
      <CompressorTool initialTargetKB={5000} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Germany Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 413×531px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 6MB</li>
                <li>Format: JPEG</li>
              </ul>
            </div>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>Visual Standards:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Background: Plain white or light grey</li>
                <li>Lighting: Even, no shadows</li>
                <li>Expression: Neutral, eyes open</li>
              </ul>
            </div>
          </div>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Germany Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload your photo.</li>
            <li>Resize to 413×531px (35×45mm).</li>
            <li>Compress to under 6MB — Target KB Mode set to 5000 is a safe target.</li>
            <li>Check neutral expression and even lighting.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Germany Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a German visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm, which is 413×531 pixels at 300dpi. This matches the general Schengen biometric standard.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does Germany require?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Plain white or light grey, with no patterns or shadows.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I wear a headscarf in a German visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes, for religious reasons — but your full face from chin to forehead must be clearly visible.</p>
          </div>
        </div>
      </div>
    </>
  );
}
