import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Dubai Work Permit Photo Compressor — 600×600px, under 200KB | Free, No Upload',
  description: 'Compress and resize your Dubai Work Permit photo to 600×600px (Passport size), under 200KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-dubai-work-permit' },
};

const FAQS = [
  [
    'What size is a Dubai work permit photo?',
    '600×600px at 300dpi (passport size), plain white background, JPEG under 200KB.',
  ],
  [
    'How recent must a Dubai work permit photo be?',
    'Taken within the last 3 months — UAE authorities are stricter on recency than most countries.',
  ],
  [
    'Can I use a filtered or edited photo?',
    'No. Photos with beauty filters, heavy editing or retouching are rejected by UAE immigration systems.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Dubai Work Permit Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          Dubai work permits, employment entry permits and Emirates ID applications all need a passport-style photo on a plain white background: 600×600px at 300dpi, JPEG under 200KB, taken within the last 3 months. Your face must be fully visible with a neutral expression — selfies with filters are rejected.
        </p>
      </div>
      <CompressorTool initialTargetKB={200} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Dubai Work Permit Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 600×600px (Passport size)</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 200KB</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Dubai Work Permit Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo taken against a white wall.</li>
            <li>Resize to 600×600px.</li>
            <li>Compress to under 200KB with the 200 KB preset button.</li>
            <li>Verify no filters or edits — UAE systems reject retouched photos.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Dubai Work Permit Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Dubai work permit photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>600×600px at 300dpi (passport size), plain white background, JPEG under 200KB.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How recent must a Dubai work permit photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Taken within the last 3 months — UAE authorities are stricter on recency than most countries.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I use a filtered or edited photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>No. Photos with beauty filters, heavy editing or retouching are rejected by UAE immigration systems.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
