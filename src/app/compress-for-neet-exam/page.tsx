import HomeClient from '@/app/home-client';

export const metadata = {
  title: 'Compress For Neet Exam — Compress to 20KB | No Upload',
  description: 'Official requirements for Compress For Neet Exam. Compress your photo to exactly 20KB with high quality. 100% private browser-based tool.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-neet-exam' },
};

export default function Page() {
  return (
    <>
      <div style={{background:'#0f0c29', padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>{metadata.title}</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto'}}>
          Meet the official <strong>Compress For Neet Exam</strong> image requirements instantly. 
          Target size: <strong>20KB</strong>.
        </p>
      </div>
      <HomeClient />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto', lineHeight:'1.7'}}>
          <h2 style={{color:'#a5b4fc', borderBottom:'1px solid rgba(165,180,252,0.2)', paddingBottom:'10px'}}>Technical Requirements</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>File Specifications:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Max Size: 20KB</li>
                <li>Format: JPG/JPEG</li>
                <li>Dimensions: 10KB - 200KB</li>
              </ul>
            </div>
            <div style={{background:'rgba(255,255,255,0.03)', padding:'15px', borderRadius:'8px'}}>
              <strong>Visual Standards:</strong>
              <ul style={{paddingLeft:'20px', marginTop:'10px', fontSize:'14px', opacity:0.8}}>
                <li>Background: White</li>
                <li>Lighting: 80% face coverage</li>
                <li>Expression: Clear face</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}