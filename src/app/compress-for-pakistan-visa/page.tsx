import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Pakistan Visa Photo Compressor — 413×531px, under 50KB | Free, No Upload',
  description: 'Compress and resize your Pakistan Visa photo to 413×531px (35×45mm), under 50KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-pakistan-visa' },
};

const FAQS = [
  [
    'Why is the Pakistan visa photo limit only 50KB?',
    'The Pakistan Online Visa System (visa.nadra.gov.pk) enforces a strict under-50KB upload limit, one of the smallest of any national portal.',
  ],
  [
    'What size is a Pakistan visa photo?',
    '35×45mm = 413×531px at 300dpi, plain white background, JPEG format only.',
  ],
  [
    'My 50KB photo looks blurry — what do I do?',
    'Shoot the original in bright, even light at high resolution. A well-lit source photo compresses to 50KB much more cleanly than a dark one.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Pakistan Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          The Pakistan online visa system has one of the tightest photo limits in the world: the JPEG must be under 50KB. The photo itself follows the standard 35×45mm format (413×531px at 300dpi) on a plain white background, with your face clearly visible and centered.
        </p>
      </div>
      <CompressorTool initialTargetKB={50} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Pakistan Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 413×531px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 50KB</li>
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
            Official portal: <a href="https://visa.nadra.gov.pk" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>https://visa.nadra.gov.pk</a>
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Pakistan Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a photo taken against a white wall.</li>
            <li>Resize to 413×531px (35×45mm at 300dpi).</li>
            <li>Compress to under 50KB — select the 50KB preset.</li>
            <li>Verify the file is readable at 50KB; if faces look blurry, retake the original photo with better light.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Pakistan Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Why is the Pakistan visa photo limit only 50KB?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>The Pakistan Online Visa System (visa.nadra.gov.pk) enforces a strict under-50KB upload limit, one of the smallest of any national portal.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Pakistan visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm = 413×531px at 300dpi, plain white background, JPEG format only.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>My 50KB photo looks blurry — what do I do?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Shoot the original in bright, even light at high resolution. A well-lit source photo compresses to 50KB much more cleanly than a dark one.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.5, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
