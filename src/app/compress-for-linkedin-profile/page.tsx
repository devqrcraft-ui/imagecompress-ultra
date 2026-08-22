import HomeClient from '../home-client';

export const metadata = {
  title: 'LinkedIn Profile Photo Optimizer — Compress to 100KB | No Upload',
  description: 'Compress LinkedIn profile picture for high quality.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-for-linkedin-profile' },
};

export default function Page() {
  return (
    <>
      <div style={{background:'#0f0c29', padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{fontSize:'32px', color:'#a5b4fc', marginBottom:'10px'}}>{metadata.title}</h1>
        <p style={{color:'rgba(255,255,255,0.7)', maxWidth:'700px', margin:'0 auto'}}>
          Optimize your photo for LinkedIn Profile Photo Optimizer requirements. 
          Target size: <strong>100KB</strong>. All processing happens in your browser.
        </p>
      </div>
      <HomeClient />
      <div style={{background:'#0f0c29', padding:'40px 20px', color:'#fff', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div style={{maxWidth:'800px', margin:'0 auto'}}>
          <h2 style={{color:'#a5b4fc'}}>Requirements for LinkedIn Profile Photo Optimizer</h2>
          <p>Most portals require images to be under 100KB with specific pixel dimensions. 
          Our tool ensures maximum quality while staying under the limit.</p>
          <ul>
            <li>Format: JPEG / WebP</li>
            <li>Max Size: 100KB</li>
            <li>Security: 100% Private (No Upload)</li>
          </ul>
        </div>
      </div>
    </>
  );
}