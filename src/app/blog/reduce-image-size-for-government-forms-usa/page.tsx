import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Reduce Image Size for US Government Forms (USCIS, Passport, Visa)',
  description: 'US government forms require specific photo sizes. Free tool to compress and resize photos for USCIS, passport, and visa applications.',
  keywords: 'reduce image size government forms, compress photo for uscis, passport photo size requirements usa',
  alternates: { canonical: 'https://compressto20kb.com/blog/reduce-image-size-for-government-forms-usa' },
};
export default function Page() {
  return (
    <article style={{maxWidth:'800px',margin:'0 auto',padding:'40px 20px',color:'white'}}>
      <h1 style={{fontSize:'32px',fontWeight:700,marginBottom:'16px',lineHeight:1.3}}>Reduce Image Size for US Government Forms (USCIS, Passport, Visa)</h1>
      <p style={{fontSize:'16px',color:'rgba(255,255,255,0.6)',marginBottom:'32px',lineHeight:1.7}}>US government forms like USCIS N-400, passport applications, and visa forms require photos under strict file size limits. This free tool helps you meet all requirements instantly.</p>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>US Government Photo Requirements</h2>
        <p style={{color:'rgba(255,255,255,0.7)',lineHeight:1.7}}>USCIS requires photos under 240KB. US passport portals often reject files over 200KB. DS-160 visa forms require photos under 240KB in JPEG format. Our tool compresses to exact limits.</p>
      </section>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>Compress Government Form Photo in Seconds</h2>
        <ol style={{color:'rgba(255,255,255,0.7)',lineHeight:2,paddingLeft:'20px'}}>
          <li>Upload your photo (JPEG or PNG)</li>
          <li>Set target: under 240KB for USCIS or DS-160</li>
          <li>Download — ready to upload to any US government portal</li>
        </ol>
      </section>
      <div style={{textAlign:'center',marginTop:'40px'}}>
        <a href='/' style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'14px 32px',borderRadius:'10px',textDecoration:'none',fontWeight:600,fontSize:'16px'}}>Compress Government Photo Free →</a>
      </div>
    </article>
  );
}
