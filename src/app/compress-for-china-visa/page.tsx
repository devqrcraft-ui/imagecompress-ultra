import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'China Visa Photo Compressor — 354×472px, under 120KB',
  description: 'Compress and resize your China Visa photo to 354×472px (33×48mm), under 120KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-china-visa' },
};

const FAQS = [
  [
    'What size is a China visa photo?',
    '354×472 pixels (33×48mm) at 300dpi, JPEG format, under 120KB.',
  ],
  [
    'Can I wear glasses in a China visa photo?',
    'No. China explicitly requires photos without glasses — remove them before taking the picture.',
  ],
  [
    'Why was my China visa photo rejected?',
    'The most common reasons: wrong dimensions, file over 120KB, coloured or patterned background, and wearing glasses.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>China Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Chinese visa photos are one of the strictest: 354×472 pixels (33×48mm), JPEG under 120KB, plain white background, and no glasses allowed.
        </p>
      </div>
      <CompressorTool initialTargetKB={120} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>China Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 354×472px (33×48mm)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 120KB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a China Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a photo without glasses.</li>
            <li>Resize exactly to 354×472px.</li>
            <li>Compress to under 120KB — use the 120KB target preset.</li>
            <li>Confirm the white background is clean and evenly lit.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>China Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a China visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>354×472 pixels (33×48mm) at 300dpi, JPEG format, under 120KB.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I wear glasses in a China visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>No. China explicitly requires photos without glasses — remove them before taking the picture.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Why was my China visa photo rejected?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>The most common reasons: wrong dimensions, file over 120KB, coloured or patterned background, and wearing glasses.</p>
          </div>
        </div>
      </div>
    </>
  );
}
