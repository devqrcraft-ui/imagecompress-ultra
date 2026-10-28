import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Korea K-ETA Photo Compressor — 413×531px, under 240KB',
  description: 'Compress and resize your Korea K-ETA photo to 413×531px (35×45mm), under 240KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-korea-k-eta' },
};

const FAQS = [
  [
    'What photo does K-ETA require?',
    'A passport-style photo 35×45mm (413×531px at 300dpi), plain white background, taken within the last 6 months.',
  ],
  [
    'Where do I apply for K-ETA?',
    'Only at the official government portal k-eta.go.kr. Third-party agent sites charge unnecessary fees.',
  ],
  [
    'Can I wear glasses in a K-ETA photo?',
    'Yes, if your eyes are fully visible with no glare or reflections.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Korea K-ETA Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          The Korea Electronic Travel Authorization (K-ETA) at k-eta.go.kr requires a passport-style photo: 35×45mm (413×531px at 300dpi), plain white background, full front view of your face. Keeping the JPEG under 240KB ensures it uploads without errors in the K-ETA system.
        </p>
      </div>
      <CompressorTool initialTargetKB={240} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Korea K-ETA Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 413×531px (35×45mm)</li>
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
          <p style={{fontSize:'13px', opacity:0.7, marginTop:'15px'}}>
            Official portal: <a href="https://www.k-eta.go.kr" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>https://www.k-eta.go.kr</a>
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Korea K-ETA Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent front-facing photo.</li>
            <li>Resize to 413×531px (35×45mm at 300dpi).</li>
            <li>Compress to under 240KB with Target KB Mode set to 240.</li>
            <li>Upload the JPEG to your application at the official k-eta.go.kr portal.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Korea K-ETA Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What photo does K-ETA require?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>A passport-style photo 35×45mm (413×531px at 300dpi), plain white background, taken within the last 6 months.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Where do I apply for K-ETA?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Only at the official government portal k-eta.go.kr. Third-party agent sites charge unnecessary fees.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I wear glasses in a K-ETA photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes, if your eyes are fully visible with no glare or reflections.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
