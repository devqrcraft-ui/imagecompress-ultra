import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'Japan Certificate of Eligibility Photo Compressor — 354×472px, under 240KB | Free, No Upload',
  description: 'Compress and resize your Japan Certificate of Eligibility photo to 354×472px (3×4cm (portrait)), under 240KB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-japan-coe' },
};

const FAQS = [
  [
    'What size is a Japan CoE photo?',
    '4cm high × 3cm wide — a portrait format, unlike the square 45×45mm Japanese visa photo. At 300dpi that is 472×354px.',
  ],
  [
    'How recent must a CoE photo be?',
    'Taken within the last 3 months, per the Immigration Services Agency photo specification.',
  ],
  [
    'Is the CoE photo the same as the Japan visa photo?',
    'No. The CoE uses 3×4cm portrait; the visa itself uses a square 45×45mm format.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>Japan Certificate of Eligibility Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          The Certificate of Eligibility (CoE) is the first step for most long-term stays in Japan, and its photo follows a different spec than the visa itself: 4cm high × 3cm wide (472×354px portrait at 300dpi), plain background, taken within the last 3 months. Your sponsoring school or employer usually attaches the print, but a correctly sized digital file speeds up the process.
        </p>
      </div>
      <CompressorTool initialTargetKB={240} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Japan Certificate of Eligibility Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 354×472px (3×4cm (portrait))</li>
                <li>Resolution: 300dpi</li>
                <li>Max Size: under 240KB</li>
                <li>Format: JPEG</li>
              </ul>
            </div>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>Visual Standards:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Background: Plain</li>
                <li>Lighting: Even, no shadows</li>
                <li>Expression: Neutral, eyes open</li>
              </ul>
            </div>
          </div>
          <p style={{fontSize:'13px', opacity:0.7, marginTop:'15px'}}>
            Official portal: <a href="https://www.moj.go.jp/isa/applications/status/photo_info_00002.html" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#a5b4fc'}}>https://www.moj.go.jp/isa/applications/status/photo_info_00002.html</a>
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a Japan Certificate of Eligibility Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload a recent photo against a plain light wall.</li>
            <li>Resize to 472×354px (4cm × 3cm portrait at 300dpi).</li>
            <li>Compress to a small JPEG — Target KB Mode set to 240 is a safe target for email submission.</li>
            <li>Send the file to your sponsoring organization along with the other CoE documents.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>Japan Certificate of Eligibility Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a Japan CoE photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>4cm high × 3cm wide — a portrait format, unlike the square 45×45mm Japanese visa photo. At 300dpi that is 472×354px.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>How recent must a CoE photo be?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Taken within the last 3 months, per the Immigration Services Agency photo specification.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Is the CoE photo the same as the Japan visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>No. The CoE uses 3×4cm portrait; the visa itself uses a square 45×45mm format.</p>
          </div>
          <p style={{fontSize:'12px', opacity:0.68, marginTop:'30px'}}>Requirements last checked against official sources: October 2026. Always confirm with the issuing authority before submitting.</p>
        </div>
      </div>
    </>
  );
}
