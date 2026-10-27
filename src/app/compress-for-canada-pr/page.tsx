import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Canada PR Photo Photo Compressor — 591×827px, under 500KB (digital copy) | Free, No Upload',
  description: 'Compress and resize your Canada PR Photo photo to 591×827px (50×70mm), under 500KB (digital copy), JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-canada-pr' },
};

const FAQS = [
  [
    'What size is a Canada PR photo?',
    '50mm × 70mm = 591×827px at 300dpi, with the face 31–36mm from chin to crown — larger than the 35×45mm visa format.',
  ],
  [
    'Can I take my own PR photos?',
    'The digital file can be prepared at home, but IRCC requires final prints from a commercial photographer with a stamped specification sheet.',
  ],
  [
    'What is the difference between PR and visa photos for Canada?',
    'Visa photos are 420×540px minimum; PR photos are 50×70mm with a strict head-size range and photographer requirements.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Canada PR Photo Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Canada permanent resident photos follow a unique spec: 50×70mm (591×827px at 300dpi) with the head measuring 31–36mm from chin to crown. Important: IRCC requires the prints to be taken by a commercial photographer, who stamps the back and provides a specification sheet. Use this tool to prepare a correctly sized digital file for your photographer or online checklist.
        </p>
      </div>
      <CompressorTool initialTargetKB={500} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Canada PR Photo Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 591×827px (50×70mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 500KB (digital copy)</li>
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
          <p style={{fontSize:'13px', opacity:0.7, marginTop:'15px'}}>
            Official portal: <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>https://www.canada.ca/en/immigration-refugees-citizenship.html</a>
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Canada PR Photo Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo against a white wall.</li>
            <li>Resize to 591×827px (50×70mm at 300dpi).</li>
            <li>Compress the JPEG — Target KB Mode set to 500 keeps email and upload sizes safe.</li>
            <li>Bring the digital file and these specs to a commercial photographer for the final prints.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Canada PR Photo Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Canada PR photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>50mm × 70mm = 591×827px at 300dpi, with the face 31–36mm from chin to crown — larger than the 35×45mm visa format.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I take my own PR photos?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>The digital file can be prepared at home, but IRCC requires final prints from a commercial photographer with a stamped specification sheet.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What is the difference between PR and visa photos for Canada?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Visa photos are 420×540px minimum; PR photos are 50×70mm with a strict head-size range and photographer requirements.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
