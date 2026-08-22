import HomeClient from '../home-client';

export const metadata = {
  title: 'Compress Image to 400KB — Compress to 400KB | No Upload',
  description: 'Fastest way to compress image to exactly 400KB.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-target-400kb' },
};

export default function Page() {
  return (
    <>
      <div style={{background:'#0f0c29', padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>{metadata.title}</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto'}}>
          Optimize your photo for Compress Image to 400KB requirements. 
          Target size: <strong>400KB</strong>. All processing happens in your browser.
        </p>
      </div>
      <HomeClient />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto'}}>
          <h2 style={{color:'#a5b4fc'}}>Requirements for Compress Image to 400KB</h2>
          <p>Most portals require images to be under 400KB with specific pixel dimensions. 
          Our tool ensures maximum quality while staying under the limit.</p>
          <ul>
            <li>Format: JPEG / WebP</li>
            <li>Max Size: 400KB</li>
            <li>Security: 100% Private (No Upload)</li>
          </ul>
        </div>
      </div>
    </>
  );
}