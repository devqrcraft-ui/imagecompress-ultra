import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Iran Visa Photo Compressor — 413×531px, under 100KB',
  description: 'Compress and resize your Iran Visa photo to 413×531px (35×45mm), under 100KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-iran-visa' },
};

const FAQS = [
  [
    'What size is an Iran visa photo?',
    '35×45mm = 413×531px at 300dpi, JPEG format, under 100KB for the e-Visa system.',
  ],
  [
    'Do women need a headscarf in an Iran visa photo?',
    'Yes. Female applicants are expected to wear a headscarf, but the entire face from chin to forehead must remain clearly visible.',
  ],
  [
    'What background does an Iran visa photo need?',
    'Plain white, evenly lit, with no shadows or patterns.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Iran Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Iranian e-Visa and visa-on-arrival applications require a 35×45mm photo (413×531px at 300dpi) on a plain white background, JPEG under 100KB. Female applicants should wear a headscarf with the full face visible from chin to forehead. The photo must be recent and show a neutral expression.
        </p>
      </div>
      <CompressorTool initialTargetKB={100} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Iran Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 413×531px (35×45mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 100KB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Iran Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent front-facing photo.</li>
            <li>Resize to 413×531px (35×45mm).</li>
            <li>Compress to under 100KB with the 100 KB preset button.</li>
            <li>Check that your full face is visible — for women, the headscarf must not cover the face.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Iran Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is an Iran visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>35×45mm = 413×531px at 300dpi, JPEG format, under 100KB for the e-Visa system.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Do women need a headscarf in an Iran visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Yes. Female applicants are expected to wear a headscarf, but the entire face from chin to forehead must remain clearly visible.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What background does an Iran visa photo need?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Plain white, evenly lit, with no shadows or patterns.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
