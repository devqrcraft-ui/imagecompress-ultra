import CompressorTool from '@/app/compressor-tool';

export const metadata = {
  title: 'UK Visa Photo Compressor — 600×750px, under 6MB | Free, No Upload',
  description: 'Compress and resize your UK Visa photo to 600×750px (45×35mm), under 6MB, JPEG. Exact-size online tool — files never leave your browser.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-uk-visa' },
};

const FAQS = [
  [
    'What size is a UK visa photo in pixels?',
    'The UK Home Office requires 600×750 pixels (45×35mm) at 300dpi for digital uploads, with a file size under 6MB.',
  ],
  [
    'Can I wear glasses in a UK visa photo?',
    'Glasses are allowed only if your eyes are fully visible with no glare or reflection. Sunglasses and tinted lenses are never accepted.',
  ],
  [
    'Is 20KB enough for a UK visa photo?',
    'No. The UK limit is under 6MB. A 20KB file would be too compressed for the required 600×750px resolution — use the 5000KB target here.',
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
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>UK Visa Photo Compressor</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7'}}>
          UK visa and passport photos must be 600×750 pixels (45×35mm) at 300dpi, in JPEG format, and under 6MB for online applications. The background must be plain white or light grey, with your face filling 70–80% of the frame.
        </p>
      </div>
      <CompressorTool initialTargetKB={5000} />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>UK Visa Photo Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Dimensions: 600×750px (45×35mm)</li>
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

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>How to Compress a UK Visa Photo</h2>
          <ol style={{paddingLeft:'20px', marginTop:'15px', fontSize:'15px'}}>
            <li>Upload any photo — phone pictures work.</li>
            <li>Resize the photo to 600×750px before uploading it here — this tool changes file size, not the pixel dimensions or the crop.</li>
            <li>Type 5000 in Target KB Mode and keep JPEG format.</li>
            <li>Check the preview: head centered, no shadows on the background.</li>
          </ol>
          <p style={{fontSize:'14px', opacity:0.7, marginTop:'15px'}}>
            All processing runs locally in your browser — your photo is never uploaded to any server.
            Need a different country? See the full <a href="/visa-photo-compressor" style={{color:'#a5b4fc'}}>visa photo compressor hub</a> with 40+ national requirements.
          </p>

          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px', marginTop:'30px'}}>UK Visa Photo FAQ</h2>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>What size is a UK visa photo in pixels?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>The UK Home Office requires 600×750 pixels (45×35mm) at 300dpi for digital uploads, with a file size under 6MB.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Can I wear glasses in a UK visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>Glasses are allowed only if your eyes are fully visible with no glare or reflection. Sunglasses and tinted lenses are never accepted.</p>
          </div>
          <div style={{marginTop:'15px'}}>
            <h3 style={{fontSize:'16px', color:'#c7d2fe'}}>Is 20KB enough for a UK visa photo?</h3>
            <p style={{fontSize:'14px', opacity:0.8}}>No. The UK limit is under 6MB. A 20KB file would be too compressed for the required 600×750px resolution — use the 5000KB target here.</p>
          </div>
        </div>
      </div>
    </>
  );
}
