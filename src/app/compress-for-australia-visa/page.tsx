import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Australia Visa Photo Compressor — 600×600px, under 5MB',
  description: 'Compress and resize your Australia Visa photo to 600×600px (35×45mm), under 5MB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-australia-visa' },
};

const FAQS = [
  [
    'What dimensions does an Australian visa photo need?',
    'Square format between 600×600px and 1200×1200px, JPEG, under 5MB.',
  ],
  [
    'What background is accepted for an Australia visa photo?',
    'Plain white or light grey, evenly lit, with no shadows on your face or the background.',
  ],
  [
    'Do Australia visa photos need to be recent?',
    'Yes — taken within the last 6 months, showing your current appearance without headwear (religious/medical exceptions apply).',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Australia Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Australian visa photos must be square, between 600×600px and 1200×1200px, JPEG, under 5MB, with a plain white or light grey background and your head centered in the frame.
        </p>
      </div>
      <CompressorTool initialTargetKB={5000} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Australia Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 600×600px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 5MB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Australia Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload any recent photo.</li>
            <li>Resize to 600×600px square (minimum accepted size).</li>
            <li>Compress to under 5MB with the 5000KB target.</li>
            <li>Center your head — the photo must be perfectly square.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Australia Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What dimensions does an Australian visa photo need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Square format between 600×600px and 1200×1200px, JPEG, under 5MB.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background is accepted for an Australia visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Plain white or light grey, evenly lit, with no shadows on your face or the background.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Do Australia visa photos need to be recent?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes — taken within the last 6 months, showing your current appearance without headwear (religious/medical exceptions apply).</p>
          </div>
        </div>
      </div>
    </>
  );
}
